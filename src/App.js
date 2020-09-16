import React, { Component } from 'react';
import ReactDOM from  'react-dom';

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

// COMPONENTS
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Videos from './components/Videos/Videos';
import Home from './components/Home/Home';
import Model from './components/Photos/Model';
import Nature from './components/Photos/Nature';
import Potrait from './components/Photos/Potrait';
import Street from './components/Photos/Street';
import Travel from './components/Photos/Travel';
import Wedding from './components/Photos/Wedding';
import Photo from './components/Photos/Photo';

class App extends Component {
  componentDidMount() { 
    window.scrollTo(0, 0); 
  }
    render() {
        return (
    <BrowserRouter>
        <div className="site-wrap">
        <div className="site-mobile-menu">
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close mt-3">
      <span className="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div className="site-mobile-menu-body"></div>
</div>
            <header className="site-navbar py-3" role="banner">
            
            <div className="container">
    <div className="row align-items-center">
      
      <div className="col-6 col-xl-2">
        <h1 className="mb-0">		  <NavLink to="/" className="text-black h2 mb-0 "><i><span className="text-danger h">SB</span></i><span className="b"><b className="a">Amazshot</b></span></NavLink>
</h1>
      </div>
      <div className="col-10 col-md-8 d-none d-xl-block">
        <nav className="site-navigation position-relative text-right text-lg-center" role="navigation">

          <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
            
            <li className="has-children" >
                                

             <NavLink to="/Photo">Photos</NavLink>
              <ul className="dropdown">
                <li><NavLink to="/People and Lifestyle">People and Lifestyle</NavLink></li>
                <li><NavLink to="/Travel">Travel</NavLink></li>
                <li><NavLink to="/Street">Street</NavLink></li>
                <li> <NavLink to="/Event">Events</NavLink></li>

              </ul>
            </li>
            <li><NavLink to="/Videos">Videos</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
          </ul>
        </nav>
      </div>

      <div className="col-6 col-xl-2 text-right">
        <div className="d-none d-xl-inline-block">
          <ul className="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
            <li>
              <a href="https://www.facebook.com/soham.bhatt.391" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
            </li>
            <li>
              <a href="https://www.instagram.com/sb_amazshot" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCYT85ja7dXAOZIIe03J_llQ" className="pl-3 pr-3"><span className="icon-youtube-play"></span></a>
            </li>
          </ul>
        </div>

        <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative' , top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

      </div>

    </div>
  </div>
            </header>
            <Switch>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Services" component={Services}/>
                <Route path="/Videos" component={Videos}/>
                <Route path="/" exact component={Home}/>
                <Route path="/Event" component={Nature}/>
                <Route path="/People and Lifestyle" component={Potrait}/>
                <Route path="/Street" component={Street}/>
                <Route path="/Travel" component={Travel}/>
                <Route path="/Photo" component={Photo}/>



            </Switch>

<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="mb-5">
          <h3 className="footer-heading mb-4">About My Photography</h3>
          <p>I capture moments of our beautiful living experience into long lasting memories.</p>
        </div>
      </div>
      <div className="col-lg-4  mb-lg-0">
        <div className="row mb-5">
          <div className="col-md-12">
            <h3 className="footer-heading mb-4">Navigations</h3>
          </div>
          <div className="col-md-6 col-lg-6">
            <ul className="list-unstyled">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Photo">Photo</NavLink></li>
            <li><NavLink to="/Videos">Videos</NavLink></li> 
            </ul>
          </div>
          <div className="col-md-6 col-lg-6">
            <ul className="list-unstyled">
            <li><NavLink to="/Services">Services</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li> 
            </ul>
          </div>
        </div>


      </div>

      <div className="col-lg-4 mb-lg-0">
        <h3 className="footer-heading mb-4">Follow Me</h3>

            <div>
            <a href="https://www.facebook.com/soham.bhatt.391" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
            <a href="https://www.instagram.com/sb_amazshot" className="pl-3 pr-3"><span className="icon-instagram"></span></a> 
            <a href="https://www.youtube.com/channel/UCYT85ja7dXAOZIIe03J_llQ" className="pl-3 pr-3"><span className="icon-youtube-play"></span></a>
            </div>

        

      </div>
      
    </div>
    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <p style={{fontSize:'20px'}}>
        Copyright &copy;<a href="http://parikrut.dev.fast.sheridanc.on.ca/Portfolio/"  > Krutik Parikh</a> |  <a href="https://github.com/parikrut"><i style={{fontSize:'15px'}} className="icon-github"></i></a>
            &nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/parikrut/"><i style={{fontSize:'15px'}} className="icon-linkedin"></i></a> 
            
        </p>
      </div>
      
    </div>
  </div>
</footer>

     </div>
    </BrowserRouter>
 );
}
}


export default App ;
