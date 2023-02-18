// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const buttonEl = prop => (
    <button className="buttons" type="button">
      {prop}
    </button>
  )

  return (
    <div className="course-container">
      <div className="header">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="duration-icon" />
          <p className="description">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tech-container">
        {tagsList.map(eachItem => (
          <li>
            <p>{buttonEl(eachItem.name)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
