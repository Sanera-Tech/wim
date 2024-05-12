import { useState } from 'react'
import './App.css'
import Homepage from './pages/home'
import ProductInfo from './pages/product-info'
import Login from './pages/login'
import AboutUsSection from './pages/aboutus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
      <ProductInfo />
      <Login />
      <AboutUsSection />
    </>
  )
}

export default App
