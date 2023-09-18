
import './App.css'
import Navbar from './components/navbar/Navbar'
// import DaisyNav from './components/daisyNav/DaisyNav'
import PriceOption from './components/price-option/PriceOption';

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-6xl'>Vite + React</h1>
      <PriceOption></PriceOption>
      
    </>
  )
}

export default App
