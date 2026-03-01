import { useState } from "react"

export default function Batsman()
{
   const [runs,setRuns] =  useState(0);
   const [six,setSix] =  useState(0);

   const singleHandle=()=>{
    const single = runs +1;
    setRuns(single);
   }
    const fourHandle=()=>{
    const single = runs +4;
    setRuns(single);
   }
    const sixHandle=()=>{
    const single = runs +6;
    const updatedSix = six+1;
    setSix(updatedSix);
    setRuns(single);
   }
    return (
        <div>
           {
            runs>50 && <p>it's a fifty....</p>
           }
           <h3>sixer are: {six}</h3>
            <h1>Runs:{runs}</h1>
            <button onClick={singleHandle}>single</button>
            <button onClick={fourHandle}>Four</button>
            <button onClick={sixHandle}>Six</button>
            
        </div>
    )
}