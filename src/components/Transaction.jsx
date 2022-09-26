import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'
import TransactionList from './TransactionList'

const Transaction = () => {
  const {transactions} = useContext(GlobalContext)

  return (
    <>
<h3>History</h3>
<ul className="list">
 { transactions.map(transaction => (
<TransactionList key = {transaction.id} 
 transaction = {transaction} />
 ))}
</ul>
    </>
  )
}

export default Transaction