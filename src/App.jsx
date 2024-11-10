import React from 'react'
import Nav from "./Component/Nav";
import { Outlet } from "react-router-dom"
// import Footer from "./Component/Footer"
// import Home from "./Pages/Home"
const App = () => {
  return (
   <>
   
   <Nav />
   {/* <Home /> */}
   <Outlet />
   {/* <Footer /> */}

   </>
  )
}

export default App
