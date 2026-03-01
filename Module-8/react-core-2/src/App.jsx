import './App.css'
import Batsman from './Batsman';
import Counter from './count';
function App() {
  
  function handleClick()
  {
    alert("click me multiple");
  }
  const handleClick2 = ()=>{
    alert("click me 2");
  }

  return (
    <>
    <Batsman></Batsman>
    <Counter></Counter>
     <button onClick={handleClick}>click me</button>
     <button onClick={handleClick2}>click me2</button>
     <button onClick={()=>alert("click me 3")}>click me3</button>
    </>
  )
}

export default App
