import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio = this.props.data.bio;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <h3><a href={'mailto:'+email} className="button">Contact me</a></h3>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
