import React from "react";
import { NavLink } from 'react-router-dom';
import Img from 'react-image'

class About extends React.Component {

  componentDidMount() { 
    window.scrollTo(0, 0); 
  }
  render() {
    return (
      <div>
<div className="bg6 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
  <h1>About Me</h1>
</div>
</div>
</div>
</div>
        
		<div className="site-section" data-aos="fade">
      <div className="container">
        <div className="row mb-5">
            <div className="col-md-6  mb-5">
              <img src="images/soham.jpg" alt="Images" className="img-fluid"/>
            </div>
            <div className="col-md-5 ml-auto">
              <h3 className="text-black mb-3">I'm Soham</h3>
              <p>I am a photographer based in Ahmedabad.</p>
<p>It's been an unusual journey to some explored and unexplored corners of the country, giving a different artistic perspective.
</p>
<p>My portfolio showcases some of my favorite clicks from the past few years. To me, these photographs worth the moments we capture from our life, they are our personal tickets to those beautiful experiences.
</p>
<p>I am available for private portrait sessions, as well as events all across India, though I am very interested in working at locations elsewhere too.
</p>
<p>I also make professional films for weddings, pre-wedding, commercials, and travel vlog/videos.
</p>
<p>Feel free to drop a message for any queries. Thanks for taking out some time to look at my work, hope to see you in near future. Cheerio!
</p>              
<p className="mt-5 mb-3">Follow Me</p>
              <p>
                <a href="https://www.instagram.com/sb_amazshot" className="p-2"><span className="icon-instagram"></span></a>
                <a href="https://www.facebook.com/soham.bhatt.391" className="p-2"><span className="icon-facebook"></span></a>
                <a href="https://www.youtube.com/channel/UCYT85ja7dXAOZIIe03J_llQ" className="pl-3 pr-3"><span className="icon-youtube-play"></span></a>

              </p>
            </div>
          </div>
      </div>
    </div>
    <div className="site-section pt-0" data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <h2 className="text-black">My Skills</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="h5">Photography</h2>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{width: '91%'}} aria-valuenow="91" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2 className="h5">Video Editing</h2>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{width: '89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2 className="h5">Adobe Lightroom CC</h2>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2 className="h5">Adobe Premiere Pro CC</h2>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h2 className="h5">Adobe Photoshop</h2>
            <div className="progress mb-4">
              <div className="progress-bar" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section border-bottom">
      <div className="container">
        <div className="row text-center justify-content-center mb-5">
          <div className="col-md-7">
            <h2>See My Photography</h2>
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


      </div>
 );
}
}

export default About;
