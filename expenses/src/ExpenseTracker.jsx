import { useState} from "react";

function ExpenseTracker() {
    const [item,setItem] = useState("");
    const [price,setPrice] = useState("");
    const [expenses,setExpenses] = useState([]);
    
    const addExpense=()=>  {
     if(item ==="" || price ==="") return;
    
    setExpenses((oldExpenses)=>
         oldExpenses.concat({
            id:Date.now(),
            item:item,
            price:price
        })
    );
    setItem("");
    setPrice("");
};
 const deleteExpense = (id) => {
    setExpenses((oldExpenses) =>
      oldExpenses.filter((exp) => exp.id !== id)
    );
  };
  return (
    <div>
      <h2 >Expense Tracker</h2>
      <input
      type="text"
      placeholder="Item name"
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      />
       <input
      type="number"
      placeholder="Price"
      value={price}
      onChange={(e)=>setPrice(e.target.value)}
      />
        
        <button onClick={addExpense}>Add</button>
        <ul>
            {expenses.map(function(exp){
                return(
                    <li key = {exp.id}>
                        {exp.item} - Rs{exp.price}
                        <span
                        style={{cursor:"pointer",marginLeft:"10px "}}
                        onClick={()=> deleteExpense(exp.id)}>del
                            </span>
                    </li>
                );
            })}
        </ul>
    </div>
  );
}

export default ExpenseTracker;
