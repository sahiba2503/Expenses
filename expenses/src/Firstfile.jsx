

function Firstfile() {
  return (
   <div>
      <h1>React Router Example</h1>

      <a onClick={Home}>Home</a> |
       <a onClick={About}>About</a> |
        <a onClick={Contact}>Contact</a>
     </div>
   
  );
}

function Home() {
  return alert("Home function call");
}

function About() {
  return alert("About function call");
}

function Contact() {
  return alert("Contact function call");;
}

export default Firstfile;


