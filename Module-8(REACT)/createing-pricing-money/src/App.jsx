import { Suspense } from 'react'
import './App.css'
import DaisyNavbar from './Component/DaisyNavbar/DaisyNavbar'
import DynamicallyNavbar from './Component/DynamicallyNavbar/DynamicallyNavbar'
import Navbar from './Component/Navbar/Navbar'
import PricingOptions from './Component/PricinigOptions/PricingOptions'
import ChartResult from './Component/ChartResuslt/ChartResult'

const pricingPromise = fetch('Pricing.json')
  .then(res => res.json())

function App() {

  return (
    <>
      <header>
        <DynamicallyNavbar></DynamicallyNavbar>
        {/* <Navbar></Navbar> */}
        {/* <DaisyNavbar></DaisyNavbar> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        <ChartResult></ChartResult>
      </main>
    </>
  )
}

export default App
