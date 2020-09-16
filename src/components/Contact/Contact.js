import React from "react";
import firebase from "../../Firestore";


class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
     email: '',
     subject: '',
     message: ''
    };
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit = e => {
    alert("Sent successfully!"); 
  }

  addUser = e => {
    e.preventDefault();
  const db = firebase.firestore();
  db.settings({
    
  });
    db.collection('user').add({
    fname: this.state.fname,
    lname: this.state.lname,
    email: this.state.email,
    subject: this.state.subject,
    message: this.state.message,
  });  
    this.setState({
      fname: '',
      lname: '',
     email: '',
     subject: '',
     message: ''
    });
  };

  componentDidMount() { 
    window.scrollTo(0, 0); 
  }
  render() {
    return (
  <div>

<div className="bg5 site-blocks-cover overlay inner-page-cover" id="co">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-md-7 text-center" data-aos="fade-up">
  <canvas id="c"></canvas>
  <h1>Contact Me</h1>
</div>
</div>
</div>
</div>

  

    <div className="site-section" data-aos="fade">
    <div className="container-fluid">
      
      <div className="row justify-content-center">
        <div className="col-md-7">
          

          <div className="row">
            <div className="col-lg-8 mb-5">
              
              <form onSubmit={this.addUser}>
               

                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">Name</label>
                    <input type="text" id="fname" name="fname" className="form-control"
                      onChange={this.updateInput}
                      value={this.state.fname}/>
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" htmlFor="lname">Number</label>
                    <input type="tel" pattern="[0-9]{10}" id="lname" name="lname" className="form-control"
                    onChange={this.updateInput}
                    value={this.state.lname}/>
                  </div>
                </div>

                <div className="row form-group">
                  
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="email">Email</label> 
                    <input type="email" id="email" name="email" className="form-control"
                    onChange={this.updateInput}
                    value={this.state.email}/>
                  </div>
                </div>

                <div className="row form-group">
                  
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="subject">Subject</label> 
                    <input type="subject" id="subject" className="form-control" name="subject"
                    onChange={this.updateInput}
                    value={this.state.subject}/>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="message">Message</label> 
                    <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."
                    onChange={this.updateInput}
                    value={this.state.message}></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary py-2 px-4 text-white" onClick={this.submit}>Send Message</button>

                  </div>
                </div>

    
              </form>
            </div>
            <div className="col-lg-3 ml-auto">
              <div className="mb-3 bg-white">
                <p className="mb-0 font-weight-bold">Address</p>
                <p className="mb-4">D 403, Dev Castle, Behind Topaz Restaurant, Isanpur, Ahmedabad, Gujarat, India</p>

                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4"><a href="tel:9979258368">+91 9979258368</a></p>

                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0"><a href="mailto:Sb.amazshot@gmail.com">Sb.amazshot@gmail.com</a></p>

              </div>
              
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


export default Contact;
