# Mapa Hogar

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [AI in Development](#ai-in-development)
7. [AI for Future Evolution](#ai-for-future-evolution)
8. [Contributing](#contributing)
9. [Testing](#testing)
10. [License](#license)
11. [Contact](#contact)

## Overview

Mapa Hogar helps users find the ideal place to live in Spain based on their personal needs and preferences. The application integrates multiple layers of information to make it easier to identify recommended towns or areas according to user interests.

What kind of information can you search?

- Find points of interest (hospitals, health centers, educational centers, etc.)
- Display areas within a maximum driving distance from these points
- Show and filter municipalities by population size, or by minimum population in specific age ranges
- Show and filter municipalities by average temperatures and precipitation across different seasons

## Features

- Interactive map to explore and filter towns and regions
- Search for points of interest (hospitals, schools, health centers, etc.)
- Filter towns by proximity to selected points of interest (e.g., within X minutes by car)
- Filter towns by population size and age demographics
- Filter towns by climate data (average temperature and precipitation by season)
- Display travel times and routes to key facilities
- View detailed profiles for each town (demographics, services, climate, etc.)
- Multi-layer visualization (combine filters for more precise results)
- Integration with external data sources (government, weather, education)
- Save the current search for future use

## How It Works

Mapa Hogar is built as a modern web application using Angular for the frontend. The architecture is designed to be modular, scalable, and maintainable, with a
focus on user experience and data accuracy.

**Architecture Overview:**

- **Frontend (Angular):**
  - Interactive map interface for exploring and filtering towns.
  - Dynamic forms and filters for user input.
  - Loads data from local JSON files or APIs as needed.
  - Visualization of multiple data layers (demographics, climate, points of interest).
  - State management for user selections and saved searches

- **Data Sources:**
  - Local JSON files for static datasets (e.g., population, facilities, climate).
  - External APIs for dynamic or updated information (e.g., weather, government data).

**Main Workflow:**

1. User interacts with the map and sets filters.
2. The frontend loads and filters data from JSON files and/or APIs based on user criteria.
3. Results are displayed on the map and in detailed town profiles.
4. Users can save their current search for future use.

## Usage

Basic usage instructions, screenshots, and examples.

### Example: Finding Suitable Towns

Suppose you want to find towns in the northern part of Spain that meet the following criteria:

- At least 2 schools
- Fewer than 30,000 inhabitants
- Within 1 hour driving distance to a hospital

Steps:

1. Navigate into the northern region of Spain on the map.
2. Use the filters to set:
   - Minimum number of schools: 2
   - Maximum population: 30,000
   - Maximum driving time to hospital: 1 hour
3. View the results to see recommended towns that match your criteria.

## Contributing

Guidelines for contributing, code style, and using AI tools.

## Testing

How to run unit and E2E tests, including commands.

## License

MIT License

## Contact

Contact information or support channels.
