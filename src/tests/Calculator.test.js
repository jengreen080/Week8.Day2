import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let button0;
  let buttonPlus;
  let buttonSubtract;
  let buttonDivide;
  let buttonMultiply;
  let buttonEquals;
  let runningTotal;
  let buttonClear;


  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId("number1")
    button2 = container.getByTestId("number2")
    button3 = container.getByTestId("number3")
    button4 = container.getByTestId('number4')
    button5 = container.getByTestId('number5')
    button6 = container.getByTestId('number6')
    button7 = container.getByTestId('number7')
    button8 = container.getByTestId('number8')
    button9 = container.getByTestId('number9')
    button0 = container.getByTestId('number0')

    buttonPlus = container.getByTestId("operator-add")
    buttonSubtract = container.getByTestId("operator-subtract")
    buttonMultiply = container.getByTestId("operator-multiply")
    buttonDivide = container.getByTestId("operator-divide")
    buttonEquals = container.getByTestId('operator-equals')
    runningTotal = container.getByTestId('running-total');
    buttonClear = container.getByTestId('clear');
  })

  // Example
  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

// Example 1
  it('should add 1 and 4 to get 5', () => {
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })
// Example 2
  it('should subtract 4 from 7 to get 3', () => {
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })
// Example 3
  it('should multiply 3 by 5 to get 15', () => {
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })
  //Example 4
  it('should divide 21 by 7 to get 3', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })
  //Example 5
  it('should concatenate multiple number clicks', () => {
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button1);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('2117');
  })
  //Example 6
  it('should chain multiple operations together', () => {
    fireEvent.click(button4);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonDivide);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('10');
  })
  //Example 7
  it('should clear the running total without affecting the calculation', () => {
    fireEvent.click(button2);
    fireEvent.click(buttonPlus);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('7');
  })

  })