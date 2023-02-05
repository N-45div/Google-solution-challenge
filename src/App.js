import { Routes, Route } from "react-router-dom"
import './App.css';
import addNotification from 'react-push-notification';
import Home from './Home';
import Navbar from './components/Nav/Navbar'
import Footer from "./Footer";
function App() {
  const clickTONotify = ()=>{
    addNotification({
      title : "Disaster alert",
      message : "Click on evacuation routes",
      duration : 4000,
      native : true,
      onClick: ()=> console.log('Push Notification'),
    });
  }
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
