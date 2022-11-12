import{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import SharedLayout from './components/SharedLayout';
import SharedProductLayout from './components/SharedProductLayout';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import About from './pages/About';
import './App.css';
// import Home from './pages/Home'
import Single from './pages/single/Single';
import StyledNavbar from './components/StyledNavbar';
function App() {
  // const [user,setUser] =useState(null)
  return (
   
    <> 
    
    {/* <StyledNavbar/> */}
    {/* <Home/> */}
    <Single/>
    
    </>
    // <BrowserRouter>  
      /* 
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />

        <Route path='/products' element={<SharedProductLayout />}>
          <Route index element ={<Products />}/>
          <Route path=':productId' element={<SingleProduct/>}/> 
        </Route>
       
        <Route path='/login' element={<Login setUser ={setUser}></Login>} />     
        <Route 
        path='dashboard'
         element={
         <ProtectedRoute user={user}>
          <Dashboard user ={user}/>
         </ProtectedRoute>
          }
           />     
         
        <Route path='*' element={<Error/>} />
        </Route>
      </Routes> */
      // <Single/>
     
      // <Footer/>
    
    // {/* </BrowserRouter> */}
  )
}

export default App;