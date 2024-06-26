import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var email = this.props.data.email;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href={'mailto:'+email}>Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{occupation}</h1>
            <h2><span>{name}</span></h2>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
