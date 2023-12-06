import React from 'react'

function Welcome(){
    const name = "malek";
    return <h1>{name}</h1>
}

const Sectiontwo = () => {
  return (
    <React.Fragment>
        <div>Sectiontwo</div>
        <Welcome />
    </React.Fragment>
  )
}

export default Sectiontwo