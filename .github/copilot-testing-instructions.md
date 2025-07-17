# Copilot Testing Instructions

## How to verify major changes

For each major change, run the following command to execute all unit tests a single time (without watch mode):

```
npm run test:once
```

- This will help you quickly verify that your changes do not break existing functionality.
- Use this command after each significant commit or before pushing changes.

## Additional recommendations

- Continue to use `npm test` for development with watch mode.
- For E2E tests, use the Cypress commands as defined in your project.

---
