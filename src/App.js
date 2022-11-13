import{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
// import Products from './pages/Products';
// import SingleProduct from './pages/SingleProduct';
import SharedLayout from './components/SharedLayout';
// import SharedProductLayout from './pages/SharedProductLayout';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
import Write from './components/write/Write';

import About from './pages/About';
import './App.css';
function App() {
  const [user,setUser] =useState(null)
  return (
    <BrowserRouter>  
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        {/* <Route path='/products' element={<Products/>} /> */}
        <Route path='/about' element={<About/>} />

        {/* <Route path='/products' element={<SharedProductLayout />}>
          <Route index element ={<Products />}/>
          <Route path=':productId' element={<SingleProduct/>}/> 
        </Route> */}
        
        <Route path='/write' element={<Write/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />
        
              } />  
           
            
         
        <Route path='*' element={<Error/>} />
       
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;