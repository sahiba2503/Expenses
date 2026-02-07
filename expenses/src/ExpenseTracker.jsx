// export default ExpenseTracker;
//  onChange={(e)=>setItem(e.target.value)
//it means when i enter any things in the input box or chenge any thing in input field that time item value should be chenge
//onChange is a event that meanig 
// is  when i chenge any things in the input field that time this event will call.filter(item => item)
//like from "" a or a to ab ...

// setExpenses([...expenses, newExpense]);
//here etExpenses function add new value with old value;
import { useState } from "react";

function ExpenseTracker() {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [expenses, setExpenses] = useState([]);

  // Add expense
  function addExpense() {
    if (item === "" || price === "") return;

    const newExpense = {
      id: Date.now(),
      item: item,
      price: price,
    };

    setExpenses([...expenses, newExpense]);

    setItem("");
    setPrice("");
  }

  // Delete expense
  function deleteExpense(id) {
    const newList = expenses.filter((exp) => exp.id !== id);
    setExpenses(newList);
  }

  return (
    <div className="home">
      <h2>Expense Tracker</h2>
      <input
        type="text"
        placeholder="Item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addExpense}>Add</button>

      <ul>
        {
        expenses.map(
            (exp) => (
          <li key={exp.id}>    {exp.item} -  Rs {exp.price}
            <span
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => deleteExpense(exp.id)}
            >
              delete
            </span>
          </li>
        )
        )
        }
      </ul>
    </div>
  );
}

export default ExpenseTracker;

