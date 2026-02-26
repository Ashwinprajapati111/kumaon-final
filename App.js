import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../src/Component/Home.js';
import Products from '../src/Component/Products.js';
import Contact from '../src/Component/Contact.js';
import Login from '../src/Component/Login.js';
import Signup from '../src/Component/Signup.js';
import Eventsphoto from './Component/Gallery/Eventsphoto.js';
import Eventsvideo from './Component/Gallery/Eventsvideo.js';
import Logo_cloud from '../src/Component/Logo_cloud.js';
import Product_main from './Component/Products/Product_main.js';
import Admin from './Admin/Admin.js';
import Admin_test from '../src/Admin/Admin_test.js';
import PhotoDetails from './Component/Gallery/PhotoDetails.js';
import VideoDetails from './Component/Gallery/VideoDetails.js';
import Product_details from './Component/Products/Product_details.js';
import './index.css';



function App() {
  return (
    <div>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product_main" element={<Product_main />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin_test" element={<Admin />} />
        <Route path="/Eventsphoto" element={<Eventsphoto />} />
        <Route path="/Eventsvideo" element={<Eventsvideo />} />
        <Route path="PhotoDetails/:id" element={<PhotoDetails />} />
        <Route path="VideoDetails/:id" element={<VideoDetails />} />
        <Route path="Product_details/:id" element={<Product_details />} />

      </Routes>






    </div>
  )
}

export default App;
