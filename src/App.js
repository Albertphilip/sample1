
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
  
    <div className='row'>
         
        <Navbar/>  
        <div className='container'>
         <Banner/>
         </div>
        
       
    </div>
  );
}

export default App;
