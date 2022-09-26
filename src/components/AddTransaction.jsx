import React, {useState, useContext} from 'react'
import "../App.css"
import { GlobalContext } from './context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)
  
  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount : +amount
    }

    addTransaction(newTransaction)
  }

  return (
  <>
  <h3>
    Add new transaction
  </h3>
  <form action="" onSubmit = {onSubmit}>
    <div className="form">
        <label htmlFor="text">Text</label>
        <input type = "text"
        id = "text"
        onChange= {(e) => setText(e.target.value)}
        placeholder='Enter text...'
        value = {text}
        />
        <div className="form">
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
            <input type="number" id = "amount"
            onChange= {(e) => setAmount(e.target.value)}
            value = {amount}
            placeholder='Enter amount...' />
    </div>
    <button className="btn">Add transaction</button>
    </div>
  </form>
  
  </>
  )
}

export default AddTransaction