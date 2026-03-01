
import './App.css'
export default function Todo({list,isdone}){
   if(isdone){

 
    return (
        <div className='cricket'>
            <h1>name:{list.name}</h1>
            <h2>age:{list.age}</h2>
            <h3>section:{list.section}</h3>
        </div>
    )
      }
}