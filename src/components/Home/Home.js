import React from "react";
import { NavLink } from 'react-router-dom';
import Img from 'react-image'
import ImageZoom from 'react-medium-image-zoom'


class Home extends React.Component {
  
  componentDidMount() { 
    window.scrollTo(0, 0); 
  }
  render() {
    return (
    <div>

    <div className="bg1 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
</div>
</div>
</div>
</div>

    <div className="site-block-profile-pic" data-aos="fade" data-aos-delay="200">
    <NavLink to="/About"><img src="images/s1.jpg" /></NavLink>
    </div>
   

   <div className="site-section ">
      <div className="container">
        <div className="row text-center justify-content-center mb-5">
          <div className="col-md-7">
            <h2 className="site-section-heading text-center">My Photography</h2>
          </div>
        </div>

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
                <img src="images/Event.jpg" alt="" className="img-fluid" />
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

    <div className="site-section">
      <div className="container">
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 " data-aos="fade-up">
              <h2 className="site-section-heading text-center">My Specialties</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="site-block-half d-lg-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="image" style={{backgroundImage: `url(${'images/c1.jpg'})`}}></div>
              <div className="text">
                <h3>Black & White</h3>
                <p>Life is in color, but black and white is more realistic</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="site-block-half d-lg-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="image" style={{backgroundImage: `url(${'images/c2.jpg'})`}}></div>
              <div className="text">
                <h3>Portraits</h3>
                <p>You can have anything you want in life if you dress for it.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <div className="py-5 site-block-testimonial imgGrad">
     <div className="container">
       <div className="row block-13 mb-5">
         <div className="col-md-12 text-center" data-aos="fade">
           <div ref="nonloopBlock" className="nonloop-block-13 owl-carousel " >

             
              <div className="block-testimony">
                <img src="images/q2.jpg"  className="img-fluid"/>
                <p>&ldquo;If you take the passion and put it first, Everything else will follow.&rdquo;</p>
                <p className="small">&mdash; Peter Mckinnon</p>
              </div>
              <div className="block-testimony">
              <img src="images/q1.jpg" className="img-fluid"/>
                <p>&ldquo;Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then you’re never going to get others to feel anything when they look at your pictures.&rdquo;</p>
                <p className="small">&mdash; Don Mcculin</p>
              </div>
              <div className="block-testimony">
              <img src="images/q3.jpg" className="img-fluid"/>
                <p>&ldquo;We shouldn’t ask what the world needs, Ask what make you come alive Because what the world needs most is more people who come alive. &rdquo;</p>
                <p className="small">&mdash; Sam Kolder</p>
              </div>
            </div>
         </div>
       </div>
     </div>
   </div>
    <div className="py-3 mb-5 mt-5">
     <div className="container">
       <div className="row">
         <div className="col-md-12 d-md-flex align-items-center" data-aos="fade">
           <h2 className="text-black mb-5 mb-md-0 text-center text-md-left">Need a photographer?</h2>
           <div className="ml-auto text-center text-md-left">
            <NavLink to="/Contact" className="btn btn-danger py-3 px-5 rounded">Contact Me</NavLink>
           </div>
         </div>
       </div>
     </div>
   </div>
    </div>
    )
  }
}

export default Home;
