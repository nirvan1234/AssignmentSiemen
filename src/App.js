import './App.css';
import React ,{useState, useEffect} from 'react';

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(0);

   useEffect(() =>{
   if(isPaused && time !== 12000){
    setTimeout(() =>{
      setTime(time +1 );
    }, 1000 )
   }else{
      StopCondition();
   }
   },[time, isPaused,isActive])

   console.log(time, isPaused,isActive)


   function StopCondition(){
    setTime(time);
    setIsActive(false);
   }

   function startWatch(){
    setIsPaused(true);
    setIsActive(true);
    setTime((prevState) => ( prevState+ 1 ))
   }

   function stopWatch(){
    setIsPaused(false);
   }

  return (
    <div className="App">
     <h1>{time}</h1>
     <button onClick={() => startWatch()}>
     <h4>Start</h4>
     </button>
     <button onClick={() => stopWatch()}>
     <h4>Stop</h4>
      </button>

     
    </div>
  );
}

export default App;