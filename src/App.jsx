import { useState } from 'react'
import './App.css'
import Homepage from './components/home'
import ProductInfo from './components/product-info'
import Login from './components/login'
import ImageSlider from './components/image-slider'
import AboutUsSection from './components/aboutus'

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
