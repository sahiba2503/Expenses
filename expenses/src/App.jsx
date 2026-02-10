// import ExpenseTracker from "./ExpenseTracker";
import {createContext, useContext} from "react"
const UserContext = createContext();

function App(){
  const user = "sahiba";
  
  return(
<div>
  <h1>This is main component 💇‍♂️💇💇‍♀️</h1>
  <UserContext.Provider value={user}>
    <Parent />
    </UserContext.Provider>
</div>
  )   
}
function Parent(){
  return <Child />
}
function Child(){
  const user = useContext(UserContext)
  return(
    <div>
       <h2 style={{color:"blue"}}>This is chaild component 🧒🧒🧒</h2>
      <h3 style={{color:"blue"}}>Name:{user} </h3>
      <GrandChild />
       </div>
  )
}
function GrandChild(){
  const user = useContext(UserContext)

  return <h2>This is grand child 👶👶👶👶 , My name is {user}</h2>
}
export default App;
