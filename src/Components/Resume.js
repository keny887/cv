import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { ReactComponent as WorkIcon } from "../work.svg"
import timelineElements from "../timelineElements"




class Resume extends Component {
  render() {
    if (this.props.data) {     
      var programming = this.props.data.programming.map(programming => {
        return <li key={programming.name} style={{fontWeight: programming.style}}>{programming.name}</li>
      })
      var cloud = this.props.data.cloud.map(cloud => {
        return <li key={cloud.name} style={{fontWeight: cloud.style}}>{cloud.name}</li>
      })
      var container = this.props.data.container.map(container => {
        return <li key={container.name} style={{fontWeight: container.style}}>{container.name}</li>
      })
      var devops = this.props.data.devops.map(devops => {
        return <li key={devops.name} style={{fontWeight: devops.style}}>{devops.name}</li>
      })

      var education = this.props.data.education.map(function (education) {
        return <div key={education.id}><h3 className='university'>{education.school}</h3>
          <p className="info degree">{education.degree} <br></br><span className="education date">&bull;</span><em className="education date">{education.graduated}</em></p>
          </div>
      })
    }

    let workIconStyles = { background: 'rgb(33, 150, 243)' }


    return (
      <section id="resume">

        <div className="row work">

          <div id="header-work" className="three columns header-col">
            <h1><span>myJourny</span></h1>
          </div>

          <div className="main-colii">
          <VerticalTimeline animate={false}>
        {timelineElements.map(element => {

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={workIconStyles} 
              icon={<WorkIcon />} 
              position={"right"}
            >
              <h3 className="vertical-timeline-element-title">
                {element.company}
              </h3>
              <h4 className="info">{element.title}</h4>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Progamming Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className='blockList'>
              <ul className='block'>
                {programming}
                {/* <br />
                <br />
                {cloud}
                <br />
                <br />
                {container}
                <br />
                <br /> */}
                {/* {devops} */}
              </ul>            
            </div>
          </div>

          <div className="three columns header-col">
            <h1><span>Cloud Technologies</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className='blockList'>
              <ul className='block'>
                {cloud}
              </ul>            
            </div>
          </div>

          <div className="three columns header-col">
            <h1><span>MicroServices</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className='blockList'>
              <ul className='block'>
                {container}
              </ul>            
            </div>
          </div>

          <div className="three columns header-col">
            <h1><span>DevOps</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className='blockList'>
              <ul className='block'>
                {devops}
              </ul>            
            </div>
          </div>

        </div>


        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
