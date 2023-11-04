import React from'react';
import "../Home/home.css";
const Home=()=>{
  return (
    <div className='home d-flex justify-content-centre align-items-center'>
  <div className="container d-flex justify-content-centre align-items-center flex-column">
    <h1 className='text-center'>Organise your <br/> work and life,finally</h1>
    <p>Become focussed,organized and calm with <br/> todo app.The world's #1 Task Manager App.</p>
    <button className='home-btn p-2'>Make Todo List</button>
  </div>
    </div>
  )
}
export default Home;
