import React, { Component } from 'react';
import firebase from '../../Firestore';
import ImageZoom from 'react-medium-image-zoom'
import VisibilitySensor from "react-visibility-sensor";
import LazyLoad from 'react-lazyload';


class Potrait extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Potrait');
    this.unsubscribe = null;
    this.state = {
      Photo: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const Photo = [];
    querySnapshot.forEach((doc) => {
      const { image,names,quote } = doc.data();
      Photo.push({
        key: doc.id,
        doc, // DocumentSnapshot
        names,
        quote,
        image
      });
    });
    this.setState({
      Photo
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    window.scrollTo(0, 0); 

  }

  delete(id){
    firebase.firestore().collection('Potrait').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div>
        
<div className="bg2 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
  <h1>People and Lifestyle</h1>
  <h6 className="text-white caption">Tap on bottom right of image to view caption</h6>
</div>
</div>
</div>
</div>

    <div className="container">
    <div className="site-section"  data-aos="fade">
    
    <div className="row no-gutters">
    
    {this.state.Photo.map((Photo, index) =>
      <div className=" col-sm-6 col-md-4 col-lg-3 col-xl-4 item" data-aos="fade" key={index}>
<figure className="snip1577">
<VisibilitySensor>
  <LazyLoad>
<ImageZoom
        image={{
          src: Photo.image,
          className: 'img-fluid',
          
        }}
        zoomImage={{
          src: Photo.image,
        }}
      /></LazyLoad></VisibilitySensor>
  <figcaption>
  <h3>{Photo.names}</h3>
    <h6>{Photo.quote}</h6>
  </figcaption>
</figure>

      </div>
)}
   </div></div></div></div>
    );
  }
}

export default Potrait;