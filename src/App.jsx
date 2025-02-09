import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Outfit from './Components/Outfit/Outfit'
import Pricing from './Components/Pricing/Pricing'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'
import Background from './Components/Background/Background'
import Pose from './Components/Pose/Pose'
import Dress from './Components/Dresses/Dress'
import PictureGeneration from './Components/PictureGeneration/PictureGeneration'
import { Routes,Route } from 'react-router-dom'
import Page from './Page'
import LoginForm from './Components/Login/LoginForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Sidebar/> */}
      <Header />
      <Outfit />
      <Pricing />
      <FAQ />
      <Footer />
      {/* <Background />
      <Pose />
      <Dress /> */}
      <PictureGeneration/>
      <LoginForm/>
      <Routes>
        <Route path="./Components/Page/Page" element={<Page/>}></Route>
      </Routes>

    </>
  )
}

export default App
