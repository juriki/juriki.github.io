import React from 'react';
import './App.css';
import Navibar from './Navbar/Navbar';
import Footer from './Footer/footer';
import Galleri from './Gallery/Gallery';


function App() {
  return (
    <>
    <div className='Containers'>
      <Navibar />
      <Galleri/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
