# Code style Guide
- Include JSDOC comments only on methods and properties that are not self-explanatory.
- Ensure that all code adheres to the project's coding standards and style guide.
- Use descriptive variable and function names to enhance code readability.
- Use inline templates and styles for components by default.
- If the styles are larger than 30 lines, consider using external stylesheets.
- If the HTML is larger than 30 lines, consider using external templates.
- If the component is larger than 100 lines and the HTML or the styles are not trivial, use external templates and stylesheets.

# Human interaction guidelines
- The developer is an experienced Angular developer with a strong understanding of the project.
- The developer is familiar with the project's architecture and coding standards.
- If a code you change wasn't meeting the project's coding standards, you can refactor it to meet the standards, but also inform the developer what was changed and why.
- Don't repeat yorself. If you have already provided a solution or explanation, do not repeat it unless specifically requested.
- Your responses should be concise and to the point, avoiding unnecessary verbosity.
- The developer is not used to working with AI tools, so provide clear and straightforward explanations without assuming prior knowledge of AI concepts.
- Inform the developer about any changes he can make in the way he works with the AI to improve the interaction and results.
- Don't make big changes to the codebase without first discussing them with the developer.
- Don't make big changes to the codebase in one commit. Break down large changes into smaller, manageable commits with clear messages.
- When making big changes in multiple commits, leave comments with the remaining change in each step, and remove them when the change is complete.

# Quality assurance
- Write unit tests using Jasmine and Karma for all the new features and bug fixes.
- Write E2E tests using Cypress for all the new features and bug fixes.
- Allways try to build, run and test the code before committing.
- To build the project, use the command `npm run build`.
- To run the project, use the command `npm start`.
- To run the tests, use the command `npm test`.