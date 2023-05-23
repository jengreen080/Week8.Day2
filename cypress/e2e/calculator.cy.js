describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
})


// 1. Do the number buttons update the display of the running total?
// 2. Do the arithmetical operations update the display with the result of the operation?

// - E.g. does `2 + 2 -` update the display to 4
// 3. Can multiple operations be chained together?
// - E.g. does `3 + 1 - 2` == 2
// 4. Is the output as expected for positive numbers
// 5. Is the output as expected for negative numbers
// 6. Is the output as expected for decimal numbers
// 7. Is the output as expected for very large numbers
// 8. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).