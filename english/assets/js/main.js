const calculator = document.querySelector('.card');
const keys = calculator.querySelector('.button-numbers');
const display = document.querySelector('.calculator-screen');

// Event listener for all buttons
keys.addEventListener('click', event => {
    if (event.target.matches('p')) {
        const button = event.target; // Target clicked button
        const action = button.dataset.action; // Verify if button has a action
        const buttonContent = button.textContent; // Gets value from button
        const displayedNum = display.textContent; // Gets value of calculator's display

// If the button do not make a action it is displayed on the calculator's display
        if (!action) {
            if ( displayedNum === '0' || displayedNum === '∞' || displayedNum === 'Error' ) { display.textContent = buttonContent }
            else { display.textContent = displayedNum + buttonContent };
        }

// Equal, use "eval()" to calculate the formula on calculator's display
        else if (buttonContent === '=') {
            try { const result = eval(displayedNum) ; checkFormula(result) }
            catch ( SyntaxError ) { display.textContent = "Error" };
        }

// Clear Entry, clear the last entry counting from the last operation
        else if ( buttonContent === 'CE' ) {
            const reverse_display = display.textContent.split('').reverse().join('');
            for ( index in reverse_display ) {
                if ( isNaN(reverse_display[index]) ) {
                    split_last_input = display.textContent.split( reverse_display[index] );
                    split_last_input.pop();
                    break;
                } else { split_last_input = [0] };
            }
            display.textContent = split_last_input.join( reverse_display[index] );
        }

// Clear, returns calculator's display to 0
        else if ( buttonContent === 'C' ) { display.textContent = 0 }

// Delete Backspace, erase last caracter
        else if ( buttonContent === '⌫' ) {
            const list_display = display.textContent.split('');
            list_display.pop();
            list_display.join('') === '' ? display.textContent = 0 : display.textContent = list_display.join('');
        }

// Squared, squares the formula in calculator's display
        else if ( buttonContent === 'x²' ) {
            try { const square_number = Math.pow(eval(displayedNum), 2) ; checkFormula(square_number) }
            catch ( SyntaxError ) { display.textContent = "Error" };
        }

// Alternate Positive - Negative, multiply the formula by "-1"
        else if ( buttonContent === '⁺ ∕ ₋' ) {
            try { const inverse_formula = eval(displayedNum) * (-1) ; checkFormula(inverse_formula) } 
            catch ( SyntaxError ) { display.textContent = "Error" };
        }

// Square Root, calculate the square root of the formula
        else if ( buttonContent === '√' ) {
            try { const square_root = Math.sqrt( eval(displayedNum) ) ; checkFormula(square_root) } 
            catch ( SyntaxError ) { display.textContent = "Error" };
        }
    }
})

// Makes possible to input the numbers using the keyboard
document.addEventListener("keypress", event => {
    for (let index = 0; index < keys.childElementCount; index++){
        if ( event.key === keys.children[index].innerText ) { keys.children[index].click(); break }
        else if ( event.key === 'Z' ) { keys.children[0].click(); break } // Click on Clear Entry
        else if ( event.key === 'X' ) { keys.children[2].click(); break } // Click on Delete Backspace
        else if ( event.key === 'S' ) { keys.children[3].click(); break } // Click on Squared
        else if ( event.key === 'D' ) { keys.children[6].click(); break } // Click on Square Root
        else if ( event.key === 'A' ) { keys.children[20].click(); break } // Click on Alternate Positive - Negative
        else if ( event.key === 'Enter' ) { keys.children[23].click(); break } // Click on Equal
    }
})

function checkFormula(formula) {
    if ( isNaN(formula) ) { display.textContent = 'Error' }
    else if ( formula === Infinity || formula === -Infinity ) { display.textContent = '∞' }
    else { display.textContent = formula }
}
