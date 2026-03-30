
// import { createBrowserRouter, createRoutesFromElements,  Route } from 'react-router'
// import './App.css'

// import SlideBar from './Pages/SlideBar'
// import { RouterProvider } from 'react-router-dom'
// import Clothes from './Component/Clothes'
// import Cart from './Component/Cart'
// import Product from './Product'
// import Navbar from './Component/Navbar'
// import Footer from './Component/Footer'

// function App() {

//   const router = createBrowserRouter (
//     createRoutesFromElements(
  
//       <Route  >
      
//         <Route  path='/' element={
//           <>
//           <Navbar/>
//           <SlideBar/>
//           <Clothes/>
//           <Footer/>
          
//           </>
//         }
        
//          />
        
    
//         <Route path='/clothes' element={<Clothes/>}/>

      
//           <Route path='product' element={<Product/>}/>
//         <Route path='cart' element={<Cart/>}/>
//         </Route>


      
//     )
//   )
//   return (
//     <>
    

//   <RouterProvider router={router} />
//     </>
//   )


// }

// export default App






import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import SlideBar from './Pages/SlideBar'
import Clothes from './Component/Clothes'
import Cart from './Component/Cart'
// import Product from './Product'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import CartProvider from './context/CartContext'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Product from './Component/Product'
import ProductDetail from './Pages/ProductDetail'
import KitchenSlider from './Component/KitchenSlider'
import Profile from './Pages/Profile'


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
              <Clothes />
              <Product/>
              <KitchenSlider/>
            </>
          } 
        />

        {/* Other Pages */}
        <Route path='shop' element={<Shop/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
       
        <Route path='contact' element={<Contact/>}/>
        <Route path='clothes' element={<Clothes />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path='profile' element={<Profile/>}/>
      </Route>
    )
  )

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App