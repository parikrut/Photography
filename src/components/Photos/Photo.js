import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Img from 'react-image'

class Photo extends Component {
    componentDidMount() {
       
        window.scrollTo(0, 0); 
    
      }

  render() {
    
    return (
     <div>
         <div className="bg2 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
  <h1>Photography</h1>
</div>
</div>
</div>
</div>

          <div className="site-section border-bottom">
          <div className="container">
       

       <div className="row">
         
         <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
         <NavLink to="/People and Lifestyle" className="image-gradient">
             <figure>
               <img src="images/Portrait.jpg" alt="" className="img-fluid"/>
             </figure>
             <div className="text">
               <h3>People and Lifestyle</h3>
             
             </div>
           </NavLink>
         </div>
         
         <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
         <NavLink to="/Travel" className="image-gradient">
             <figure>
               <img src="images/Travel.jpg" alt="" className="img-fluid"/>
             </figure>
             <div className="text">
               <h3>Travel</h3>
             
             </div>
           </NavLink>
         </div>
         
         <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
         <NavLink to="/Street" className="image-gradient">
             <figure>
               <img src="images/Street.jpeg" alt="" className="img-fluid"/>
             </figure>
             <div className="text">
               <h3>Street</h3>
             
             </div>
           </NavLink>
         </div>
         <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
         <NavLink to="/Event" className="image-gradient">
             <figure>
               <img src="images/Event.jpg" alt="" className="img-fluid"/>
             </figure>
             <div className="text">
               <h3>Events</h3>
             
             </div>
         </NavLink>
         </div>
       </div>
     </div>

    </div>
     </div>
    );
  }
}

export default Photo;