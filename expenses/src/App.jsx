

import Thirdfile from "./Thirdfile";
function App() {
  const isLoggedIn = true;
   let message;
    if(isLoggedIn){
    message =   <div>     welcome to you  <Thirdfile />     </div>
      }
      else{
        message = <h2> Sorry please login </h2>
      }
  return  message
}
export default App;

