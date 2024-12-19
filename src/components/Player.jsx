import { useState } from "react";

useState
export default function Player() {
  const[enteredPlayerName,setEnteredPlayerName]=useState('');
  const[submitted,setSubmitted] = useState(false);
  function handleChange(event){
    setEnteredPlayerName(event.target.value);
  }
  function handleSubmit(){
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted?enteredPlayerName:"unknown entity"} </h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
