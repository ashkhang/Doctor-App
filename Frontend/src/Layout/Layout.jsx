import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Header/Footer/Footer'
import Routers from '../Routes/Routes'
const Layout = () => {
  return (
    <>
<Header/>
<main>
<Routers/>
</main>
<Footer/>
    </>
  )
}

export default Layout