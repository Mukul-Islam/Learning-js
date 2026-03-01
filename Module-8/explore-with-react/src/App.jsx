import './App.css'
import Todo from './Todo'
import Check from './check'

function App() {

  const list = [
    {id:1,name:'mukul',section:'c',age:25},
    {id:2,name:'mukl',section:'ce',age:25},
    {id:3,name:'muul',section:'cw',age:25},
    {id:4,name:'mkul',section:'cq',age:25},
  ]
  return (
    <>

    <Check isdone = {true} work = 'pora suna korbe'></Check>
    <Check isdone = {false} work = 'oi ghumabe'></Check>
    <Check work = 'ajaira public'></Check>
    {
      list.map(list=> <Todo key={list.id} list = {list} isdone = 'true'></Todo>)
    }
      <h1>hello world</h1>
      <Cricket name = 'mukul'></Cricket>
      <Cricket name = 'bokul'></Cricket>
      <Cricket name = 'momin'></Cricket>
    </>
  )
}

function Cricket({name})
{

  // const arra = ['masud','rajuk'];
  return (
    <h3 className='cricket'>hello world {name} </h3>
  )
}

export default App
