import React from "react";
import firebase from '../../Firestore';


class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('video');
    this.unsubscribe = null;
    this.state = {
      Photo: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const Photo = [];
    querySnapshot.forEach((doc) => {
      const { name, src } = doc.data();
      Photo.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        src,
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
  render() {
    return (
<div>
<div className="bg3 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
  <h1 className="h">Videos</h1>
</div>
</div>
</div>
</div>
  


    <div className="container site-section"> 
<div className="row justify-content-center">
{this.state.Photo.map((Photo, index) =>

          <div className="col-md-6 col-lg-4 col-xl-6" data-aos="fade-up" data-aos-delay="100" key={index}>
          <h3 className="text-black text-center">{Photo.name}</h3>
          <div className="embed-responsive embed-responsive-16by9 image-gradient">                     
          <iframe className="embed-responsive-item" title={Photo.name} width="560" height="315" src={Photo.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          </div>
)}
          </div>
</div>


        </div>
    );
  }
}

export default Videos;
