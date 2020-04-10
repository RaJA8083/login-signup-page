import React from 'react'
import logo from './rosepic.jpeg'
function Changeback() {
    return ( 
    <div style = {
            {
                backgroundColor: 'blue',
                width: '1000px',
                height: '1000px'
            }
        }
        >
            <img src={logo} alt="Login page"/>
            </div>
    )
}

export default Changeback