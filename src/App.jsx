import React from 'react'

const Job = (props) => {
  return (
    <div>
      {props.salary}
      {props.company}
      {props.position}
    </div>
  )
}

const App = () => {
  return (
    <div className='navigation font-inter'> 
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  )
}

export default App
