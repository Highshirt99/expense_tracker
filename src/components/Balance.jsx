import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount )

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <>
    <h4  style={{  fontSize: "1em"}} >Your Balance</h4>
    <h1  style={{  fontSize: "1em"}} >${total}</h1>
  
    </>
  )
}

export default Balance