import React from 'react'
/*
function Welcome(){
    const name = "malek";
    return <h1>{name}</h1>
}
*/
const Sectiontwo = ({nameTwo}) => {
  return (
    <React.Fragment>
        <div>Sectiontwo - {nameTwo}</div>
        {nameTwo == "mohamed" && <div>Bonjour {nameTwo}</div>}
    </React.Fragment>
  )
}

export default Sectiontwo