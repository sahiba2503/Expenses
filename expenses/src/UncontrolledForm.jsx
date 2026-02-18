
import {useRef} from "react";
function UncontrolledForm() {
    const nameRef = useRef();
    const emailRef = useRef();
function handleSubmit(e){
e.preventDefault()
console.log("your name is ", nameRef.current.value);
console.log("your name is ", emailRef.current.value);
nameRef.current.value = " ";
emailRef.current.value = " ";
}


  return (
   <form onSubmit = {handleSubmit}>
<h2> fill this form </h2>
<input type="text" ref={nameRef}  placeholder="Enter your name"/>
<br />
<input type="text" ref={emailRef }  placeholder="Enter your name"/>
 <button type="submit">submit</button>
   </form>
  )
}

export default UncontrolledForm
