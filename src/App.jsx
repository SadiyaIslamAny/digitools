import { Suspense, useState } from 'react'
import Banner from './component/Navbar/Banner/Banner.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import Stats from './component/Navbar/Stats/Stats.jsx'
import Steps from './component/Navbar/Steps/Steps.jsx'
import Pricing from './component/Pricing/Pricing.jsx'
import CallToAction from './component/CallToAction/CallToAction.jsx'
import Footer from './component/Footer/Footer.jsx'
import ProductSection from './component/ProductSection/ProductSection.jsx'
import { DiVim } from 'react-icons/di'
import { ToastContainer } from 'react-toastify'

const fetchProduct = async () => {
  const res =  await fetch("/data.json");
  return res.json();
}

function App() {

  const productPromise = fetchProduct();
  const [selectedType, setSelectedType] = useState("product");
  const [carts, setCarts] = useState([]);
  

  return (

  )
}

export default App
