# Worthwhile Cypress Testing

_"The more your tests resemble the way your software is used, the more confidence they can give you." - Kent Dodds_

### Why we should test our code

- Documentation
- Confidence
- Safe Refactoring
- Testing hours are billable hours

## Best practices for Cypress

### Don't couple tests together, tests should be able to be run independently.

- Writing tests that rely on the state of a previous test can cause cascading failures if the initial conditions are not met.

### Don't try to visit or interact with sites you don't control\*\*

- You should not rely on sites you don't control to not change and break your tests. When it is necessary to interact with a 3rd party api, use cy.request()

### Don't use selectors that are subject to change.\*\*

- Selecting an element by CSS class or id works, but these are very likely to change and break your tests. Classes are even more brittle than ids, because that can be shared by many elements, breaking or invalidating your tests.
- Use a data attribute like `data-cy="submit"`

### Create tests with multiple assertions.

- Cypress runs lifecycle events between tests, so tests with many assertions are more performant than tests with a single assertion.

### Clean up state before tests run.

- When tests are done running the application is left in the exact point your test finished. If you reset the state at the end of each test, you lose the ability to view or debug the application in this state.

### Other tips

- When testing an element’s CSS color props, it is best to use rgb(#,#,#). If your assertion is looking for values like 'dodgerblue' your test will fail.
- With snippets configured correctly you can create an element with a class and a data-cy tag with `div.yourClass[data-cy="your-test-id"]`

### Unit Testing

Cypress has a component testing library that is currently in an alpha state.
It does not currently work with React 18, but hope to test this feature soon.

https://docs.cypress.io/guides/component-testing/introduction#What-is-Component-Testing
https://www.youtube.com/watch?v=VdyZonBAeLw
