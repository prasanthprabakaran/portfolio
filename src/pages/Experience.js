import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component';
import { School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";


function Experience() {
    return (
      <div className='experience'>
        <VerticalTimeline lineColor='#0c0513'>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2014 - 2016'
            iconStyle={{ background: '#e95bb3', color: '#fff' }}
            icon={<School />}>
            <h3 className='vertical-timeline-element-title'>
              Shri Krishnaswamy Mat. Hr. Sec. School, Villivakkam, Chennai
            </h3>
            <p> Higher Secondary School</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='2016 - 2019'
            iconStyle={{ background: '#e95bb3', color: '#fff' }}
            icon={<School />}>
            <h3 className='vertical-timeline-element-title'>
             Jaya College of Arts and Science
            </h3>
  
            <h4 className='vertical-timeline-element-subtitle'>
              Bachelor's Degree in Computer Science
            </h4>
  
            <p> Mathematics</p>
          </VerticalTimelineElement>
  
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2022 - Present'
            iconStyle={{ background: '#9e64c4', color: '#fff' }}
            icon={<Work />}>
            <h3 className='vertical-timeline-element-title'>
              Full Stack Development - Course
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              GUVI Geek Networks, IITM Research Park, Chennai
            </h4>
            <p>
              Had experience with hands-on projects, Did a Full stack (MERN) Web
              Development Course. Great place to learn from scratch to an advanced
              level.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
  
  export default Experience;