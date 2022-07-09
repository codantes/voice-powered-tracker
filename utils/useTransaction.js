import {useContext } from 'react'
import {incomeCategories, expenseCategories, resetCategories} from '../constants/categories'
import {TrackerContext} from '../context/context'

const useTransaction = (title) => {
    resetCategories()
    const {transactions} = useContext(TrackerContext);
    const rightTransactions = transactions.filter((t) => t.type === title);
    const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'income' ? incomeCategories : expenseCategories;
  
    rightTransactions.forEach((t) => {
      const category = categories.find((c) => c.type === t.source);
      if (category) category.amount = category.amount + t.amount
    });

    
    const filteredCategories = categories.filter((sc) => sc.amount > 0);
    const chartData = {
      datasets: [{
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      }],
      labels: filteredCategories.map((c) => c.type),
    };
  
    return { filteredCategories, total, chartData }

}

export default useTransaction;