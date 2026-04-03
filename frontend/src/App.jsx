




import { createBrowserRouter, createRoutesFromElements, Route, Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import SlideBar from './Pages/SlideBar'

import Cart from './Component/Cart'
// import Product from './Product'
import About from './Pages/About'

import Contact from './Pages/Contact'

import CartProvider from './context/CartContext'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Product from './Component/Product'
import ProductDetail from './Pages/ProductDetail'
import KitchenSlider from './Component/KitchenSlider'
import Profile from './Pages/Profile'
import OrderHistory from './Pages/OrderHistory'
import HomeSections from './Pages/HomeSections'
import CategoryPage from './Pages/CategoryPage'
import ServiceLayout from './layout/ServiceLayout'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Phone from './Component/Phone'
import ClothSections from './Component/ClotheSections'
import Services from './Pages/Services'

import JeansSlider from './Component/JeansSlider'
import KidsToySlider from './Pages/KidsToySlider'







function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout />}>

        {/* Home */}
        <Route 
          index 
          element={
            <>
              <SlideBar />
              
              <Phone/>
              <Product/>
              <KitchenSlider/>
          <HomeSections/>

          <ClothSections/>
          
          <JeansSlider/>

          <KidsToySlider/>

         
            </>
          } 
        />

        {/* Other Pages */}
        <Route path='service' element={<ServiceLayout/>}/>
       
        <Route path='about' element={<About/>}/>
       
        <Route path='contact' element={<Contact/>}/>
      
        <Route path='phone' element={<Phone/>}/>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path='profile' element={<Profile/>}/>
        <Route path='order' element={<OrderHistory/>}/>
        <Route path="/category/:name" element={<CategoryPage/>}/>
        <Route path='Services' element={<Services/>}/>
      </Route>
     
    )
  )

  return (
    <CartProvider>
    
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000}/>
   
    </CartProvider>
  )
}

export default App