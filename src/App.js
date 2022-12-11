import './index.css';
import './App.css';
import { useState } from 'react';

const App=() => {
  const[diceNumber,setDiceNumber]= useState(3)
  const[diceNumber2,setDiceNumber2]= useState(1)

  const refreshDice =() =>{
const ranno = Math.floor(Math.random()*6)+1
setDiceNumber(ranno)
const ranno2 = Math.floor(Math.random()*6)+1
setDiceNumber2(ranno2)
  }
  return (
    <div>
     <center>
     <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
     <img width={300} height={300} src={require(`./assets/${diceNumber2}.png`)}></img>
     
     <br></br>
     <button className='button' onClick={()=>refreshDice()}> Roll
     </button>
     </center>
    </div>
  );
}

export default App;
