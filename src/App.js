import{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import Footer from './components/Footer';
import Login from './components/Login';
import About from './pages/About';
import './App.css';
// import Home from './pages/Home'
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './components/write/Write';
import Navbar from './components/StyledNavbar';
function App() {
  // const [user,setUser] =useState(null)
  return (
   <> 
   {/* <StyledNavbar/>  */}
   {/* <avbar/>  */}
     {/* <Home/>  */}
   {/* <Single/>  */}
   {/* <Write /> */}
   <Settings />
   </>

    
   
  //  <BrowserRouter>  
      
  //     <Routes>
  //       <Route path='/' element={<SharedLayout />}>
  //       <Route index element={<Home/>}/>
  //       <Route path='/products' element={<Products/>} />
  //       <Route path='/about' element={<About/>} />
  //       <Route path='/single' element={<Single/>} />

        // {/* <Route path='/products' element={<SharedProductLayout />}>
        //   <Route index element ={<Products />}/>
        //   <Route path=':productId' element={<SingleProduct/>}/> 
        // </Route>
        // */}
        // {/* <Route path='/login' element={<Login setUser ={setUser}></Login>} />     
        // <Route 
        // path='dashboard'
        //  element={
        //  <ProtectedRoute user={user}>
        //   <Dashboard user ={user}/>
        //  </ProtectedRoute>
        //   }
          //  />      */}
         
        // {/* <Route path='*' element={<Error/>} />
      //   </Route>
      // </Routes> 
      //  <Single/>
     
      //  <Footer/>
    
  //  </BrowserRouter>  */}
  )
}

export default App;