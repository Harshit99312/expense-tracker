import React, { useContext, useState } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const [search, setSearch] = useState("")
  console.log(transactions, 10)

  const filterTransc = transactions.filter((trans)=> trans.text.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
        
        <h3>History</h3> <input type='text' onChange={(e)=> setSearch(e.target.value)}></input>
      <ul className="list">
        {filterTransc.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
}
