import React from "react";
class Services extends React.Component {

  componentDidMount() { 
    window.scrollTo(0, 0); 
  }
  render() {
    return (
  <div>

<div className="bg4 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
  <h1>Services</h1>
</div>
</div>
</div>
</div>


    <div className="site-section"  data-aos="fade">
    <div className="container-fluid">
      
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="row mb-5">
            <div className="col-12 " data-aos="fade-up">
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 text-center mb-6 mb-lg-6" data-aos="fade" data-aos-delay="100">
              <div className="h-100 p-4 p-lg-5 bg-light site-block-feature-7">
                <span className="icon flaticon-camera display-3 text-primary mb-4 d-block"></span>
                <h3 className="text-black h4">Photography</h3>
                <p>Pre Wedding/ Wedding</p>
                <p>Fashion</p>
                <p>Portrait sessions</p>
                <p>Product</p>
                 </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 text-center mb-6 mb-lg-6" data-aos="fade" data-aos-delay="600">
              <div className="h-100 p-4 p-lg-5 bg-light site-block-feature-7">
                <span className="icon flaticon-video-play display-3 text-primary mb-4 d-block"></span>
                <h3 className="text-black h4">Films</h3>
                <p>Short films</p>
                <p>Commercials</p>
                <p>Documentries</p>

              </div>
            </div>

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
                <h3>Black & White Photography</h3>
                <p>Life is in color, but black and white is more realistic</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="site-block-half d-lg-flex" data-aos="fade-up" data-aos-delay="200">
              <div className="image" style={{backgroundImage: `url(${'images/c2.jpg'})`}}></div>
              <div className="text">
                <h3>Model Photography</h3>
                <p>You can have anything you want in life if you dress for it.</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

  </div>

);
}
}
export default Services;
