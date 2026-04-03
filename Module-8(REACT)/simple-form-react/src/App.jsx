
import './App.css'
import ControlledFilled from './Components/ControlledFilled/ControlledFilled'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import Uncontrolled from './Components/Uncontrolled/Uncontrolled'

function App() {


  return (
    <>
      <h1 className='text-3xl'>Simple form of our Project</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledFilled></ControlledFilled> */}
      {/* <Uncontrolled></Uncontrolled> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
