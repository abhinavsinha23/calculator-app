import './App.css';
import { useState } from 'react';

function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const signs = ["+", "-", "*", "/", "C", "="];

  const [num1, setNum1] = useState(Number(""))

  const [num2, setNum2] = useState(Number(""))
  
  const [runningSum, setRunningSum] = useState(0)

  const [operation, setOperation] = useState("?")

  const [num3, setNum3] = useState(Number(""))

  const updateNum = (value) => {
    if (operation === "?"){
      setNum1(Number(num1.toString() + value.toString()))
    }
    else {
      setNum2(Number(num2.toString() + value.toString()))
    }
  }

  const add = () => {
    if (num3 !== 0) {
      setNum1(num3)
      setOperation("+")
      setNum2(0)
      setNum3(0)
      setRunningSum(num3)
    }
    else{
      setOperation("+")
      setRunningSum(num1+num2)
    }
  }

  const subtract = () => {
    if (num3 !== 0) {
      setNum1(num3)
      setOperation("-")
      setNum2(0)
      setNum3(0)
      setRunningSum(num3)
    }
    else{
      setOperation("-")
      setRunningSum(num1-num2)
    }
  }

  const multiply = () => {
    if (num3 !== 0) {
      setNum1(num3)
      setOperation("*")
      setNum2(0)
      setNum3(0)
      setRunningSum(0)
    }
    else{
      setOperation("*")
      setRunningSum(num1*num2)
    }
  }

  const divide = () => {
    if (num3 !== 0) {
      setNum1(num3)
      setOperation("/")
      setNum2(0)
      setNum3(0)
      setRunningSum(num3/0)
    }
    else{
      setOperation("/")
      setRunningSum(num1/num2)
    }
  }

  const blank = () => {
    setNum1(0)
    setOperation("?")
    setNum2(0)
    setNum3(0)
    setRunningSum(0)
  }

  const calculate = () => {
    if (operation === "+") {
      setNum3(num1+num2)
    }
    else if (operation === "-") {
      setNum3(num1-num2)
    }
    else if (operation === "*") {
      setNum3(num1*num2)
    }
    else if (operation === "/") {
      setNum3(num1/num2)
    }
    else {
      alert("You haven't selected an arithmetic operator!")
    }
  }

  const showSign = (symbol) => {
    if (symbol === "+"){
      add()
    }
    else if (symbol === "-") {
      subtract()
    }
    else if (symbol === "*") {
      multiply()
    }
    else if (symbol === "/") {
      divide()
    }
    else if (symbol === "C") {
      blank()
    }
    else {
      calculate()
    }
  }

  return (
    <div className='container'>
      <div>
        <h1 className='calculatorDisplay'>{num1.toString()} {operation} {num2.toString()} = {num3.toString()}</h1>
        <h2 className='runningSum'>{runningSum.toString()}</h2>
      </div>
      <div className='box' >
        {nums.map((num, index) => {
          return (
              <button key={index} className='num' onClick={() => {updateNum(num)}}>{num}</button>
          )
        })}
      </div>
      <div className='operations'>
        {signs.map((sign, index) => {
          return (
            <button key={index} className='operationsItem' onClick={() => {showSign(sign)}}>{sign}</button>
          )
        })}
      </div>
    </div>
  )
}

export default App;
