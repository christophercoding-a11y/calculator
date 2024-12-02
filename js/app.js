/**
 * WHAT DO WE WANT THE CALCULATOR TO DO???
 * DEFINE operations
 *       clear
 *       delete (single number)
 *       append number
 *       choose operation
 *       compute
 *       update display
 */

class Calculator {

    // 1 constructor
    constructor(prevOperText, currOperText) {
        this.prevOperText = prevOperText
        this.currOperText = currOperText
        this.clear()
    }

    // 4 appendedNumber
    appendNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString()
        // console.log(number, this.currOperand)
    }

    // 2 clear
    clear() {
        this.prevOperend = ''
        this.currOperand = ''
        this.operation = undefined
    }

    // 7 compute
    compute() {
        let computation

        const prev = parseFloat(this.prevOperend)
        const current = parseFloat(this.currOperand)

        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currOperand = computation 
        this.operation = undefined
        this.prevOperand = ''

    }

    // 3 delete
    delete() {
        this.currOperand = this.currOperand.toString().slice(0, -1)
    }

    // 6 getDisplayNumber
    getDisplayNumber(number) {
        const stringNumber = number.toString()

        const integerDigits = parseFloat(stringNumber.split('.'[0]))
        const decimalDigits = stringNumber.split('.'[1])

        let integerDisplay

        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
    }

    // 5 updateDisplay
    updateDisplay() {
        this.currOperText.innerText = this.getDisplay(this.currOperand)

        if (this.operation != null) {
            this.prevOperText.innerText = `${this.getDisplayNumber(this.prevOperend)} ${this.operation}`
        } else {
            this.prevOperText.innerText = ''
        }
    }
}

// 2 set constants to access buttons
// enclose attribute-value pairs in brackets
const numBtn = document.querySelectorAll('[data-number]')
// console.log(numBtn)
const operBtn = document.querySelectorAll('[data-operation]')
const equalBtn = document.querySelector('[data-equals]')
const delBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')

const prevOperText = document.querySelector('[data-prev-operand]')
const currOperText = document.querySelector('[data-curr-operand]')

const calculator = new Calculator(prevOperText, currOperText)

// 3 addEventListener to buttons
numBtn.forEach (button => {
    button.addEventListener('click', ()=> {
        console.log(button.innerText)
        calculator.appendNumber(button.innerText)
    })
})


operBtn.forEach (button => {
    button.addEventListener('click', ()=> {
        console.log(button.innerText)
    })
})

equalBtn.addEventListener('click', ()=> {
    console.log(equalBtn.innerText)
})

allClearBtn.addEventListener('click', ()=> {
    console.log(allClearBtn.innerText)
})

delBtn.addEventListener('click', ()=> {
    console.log(delBtn.innerText)
})










