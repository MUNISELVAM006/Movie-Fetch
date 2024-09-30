import React from 'react'
import Nav from "./Component/Nav";
import { Outlet } from "react-router-dom"
import Footer from "./Component/Footer"
const App = () => {
  return (
   <>
   
   <Nav />
   <Outlet />
   <Footer />

   </>
  )
}

export default App
