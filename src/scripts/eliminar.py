import pandas as pd

# Ruta al archivo original
archivo_entrada = 'poblacion_municipios_original.csv'
# Ruta del archivo de salida
archivo_salida = 'poblacion_municipios_filtrado.csv'

# Solo incluimos el total y las edades de 0 a 9 años
valores_edad = [
    "Todas las edades",
    "De 0 a 4 años",
    "De 5 a 9 años"
]

codigosPostalesNorte = [
    "01", "48", "20", "15", "27", "32", "36", "33",
    "39", "31", "24", "09", "42", "26"
]

valor_periodo = '1 de enero de 2022'

# Leer datos
df = pd.read_csv(archivo_entrada, sep=';', encoding='utf-8', low_memory=False)

# Conversión de tipos
for col in ["Edad (grupos quinquenales)", "Municipios", "Periodo", "Sexo"]:
    df[col] = df[col].astype(str).str.strip()

df["Total"] = pd.to_numeric(df["Total"], errors="coerce")

# Identificar municipios con valor total fuera del rango permitido en "Todas las edades"
municipios_invalidos = df[
    (df["Edad (grupos quinquenales)"] == "Todas las edades") &
    ((df["Total"] < 200) | (df["Total"] > 30000))
]["Municipios"].unique()

# Filtrado principal
df_filtrado = df[
    (~df["Municipios"].isin(municipios_invalidos)) &
    (df["Edad (grupos quinquenales)"].isin(valores_edad)) &
    (df["Municipios"].str.startswith(tuple(codigosPostalesNorte))) &
    (df["Periodo"] == valor_periodo) &
    (df["Sexo"] == 'Total')
]

# Total por municipio
df_total = df_filtrado[df_filtrado["Edad (grupos quinquenales)"] == "Todas las edades"]

# Sumar edades 0-9 por municipio
df_0_9 = df_filtrado[df_filtrado["Edad (grupos quinquenales)"].isin(["De 0 a 4 años", "De 5 a 9 años"])]
df_0_9 = df_0_9.groupby(["Municipios", "Sexo", "Periodo"], as_index=False)["Total"].sum()
df_0_9 = df_0_9.rename(columns={"Total": "De 0 a 9 años"})

# Total general
df_total = df_total[["Municipios", "Sexo", "Periodo", "Total"]].rename(columns={"Total": "Total"})

# Combinar ambos
df_final = pd.merge(df_total, df_0_9, on=["Municipios", "Sexo", "Periodo"])

# Calcular porcentaje y convertir a string con "%"
df_final["% De 0 a 9 años"] = ((df_final["De 0 a 9 años"] / df_final["Total"]) * 100).round(2).astype(str) + "%"

# Reordenar columnas
cols = ["Sexo", "Municipios", "Periodo", "Total", "De 0 a 9 años", "% De 0 a 9 años"]
df_final = df_final[cols]

# Guardar resultado
df_final.to_csv(archivo_salida, index=False, sep=';', encoding='utf-8-sig')

print(f"Filtrado completado. Filas resultantes: {len(df_final)}")