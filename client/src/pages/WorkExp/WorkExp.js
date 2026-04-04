import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './WorkExp.css';
import { SiReact } from 'react-icons/si';

const WorkExp = () => {
  return (
    <>
      <div className="work" id='experience'>
        <div className="container work-exp">
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                WORK EXPERIENCE
                </h2>
                <hr />
                <VerticalTimeline lineColor='#1e1e2c'>
                    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#1e1e2c' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2024 - 2025"
    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
    icon={<SiReact />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Sukibhavan Properties</h4>
    <p>
  Responsible for creative direction, improving user experience, designing visual interfaces, managing projects, and leading the development team.
</p>
  </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default WorkExp
