//........................notes.......................
// export default ExpenseTracker;
//  onChange={(e)=>setItem(e.target.value)
//it means when i enter any things in the input box or chenge any thing in input field that time item value should be chenge
//onChange is a event that meanig 
// is  when i chenge any things in the input field that time this event will call.filter(item => item)
//like from "" a or a to ab ...

// setExpenses([...expenses, newExpense]);
//here etExpenses function add new value with old value;
//.....................end..................................

//this code is form  create list to expenses;  
// import { useState } from "react";

// function ExpenseTracker() {
//   const [item, setItem] = useState("");
//   const [price, setPrice] = useState("");
//   const [expenses, setExpenses] = useState([]);

//   // Add expense
//   function addExpense() {
//     if (item === "" || price === "") return;

//     const newExpense = {
//       id: Date.now(),
//       item: item,
//       price: price,
//     };

//     setExpenses([...expenses, newExpense]);

//     setItem("");
//     setPrice("");
//   }

//   // Delete expense
//   function deleteExpense(id) {
//     const newList = expenses.filter((exp) => exp.id !== id);
//     setExpenses(newList);
//   }

//   return (
//     <div className="home">
//       <h2>Expense Tracker</h2>
//       <input
//         type="text"
//         placeholder="Item name"
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />

//       <button onClick={addExpense}>Add</button>

//       <ul>
//         {
//         expenses.map(
//             (exp) => (
//           <li key={exp.id}>    {exp.item} -  Rs {exp.price}
//             <span
//               style={{ cursor: "pointer", marginLeft: "10px" }}
//               onClick={() => deleteExpense(exp.id)}
//             >
//               delete
//             </span>
//           </li>
//         )
//         )
//         }
//       </ul>
//     </div>
//   );
// }

// export default ExpenseTracker;

import { useState, useEffect, useEffectEvent } from "react";

function Timer() {
const [formData,setFormData] = useState({name:"", email:""})
  const saveData =   useEffectEvent(()=> {
      console.log("form data",formData)
    });
     
   useEffect(() => {
   const id = setInterval(() => {
     saveData();
  },3000)
  return () => clearInterval(id)
},[])
      

  return (
    <div>
      <h2>Use useEffect hook in the form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
<br />
      <input
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <br />
              <b>Current name is : {formData.name}</b>
              <br></br>
              <br />
              <b>Current email is : {formData.email}</b>
             
    </div>
  );
}

export default Timer;

