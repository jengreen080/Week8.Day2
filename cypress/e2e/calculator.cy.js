describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // Example
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Example 1
  it('Should use the number buttons to update the display of the running total', () => {
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '349')
  })
  // Example 2
  it('Should let the arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '12')
  })
  // Example 3
  it('Should let multiple operations be chained together', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  // Example 4
  it('Should give the expected output for positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })
  // Example 5
  it('Should give the expected output for negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })
  // Example 6
  it('Should give the expected output for decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.2')
  })
  // Example 6
  it('Should give the expected output for very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '100090000')
  })
  // Example 7
  // it("Should give 'Infinity' when any number is divided by 0", () => {
  //   cy.get('#number1').click();
  //   cy.get('#operator-divide').click();
  //   cy.get('#number0').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', 'Infinity')
  // })
  // Example 7_Rev02
  it("Should give 'Undefined' when any number is divided by 0", () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Undefined')
  })

})

// 8. What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).