import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p>Created by <a href="https://mustafa-portfolio2.netlify.app/" target="_blank" rel="noopener noreferrer">Mustafa Rahman</a> with <i className='far fa-heart'></i></p>
        </div>
        <div className=''>
        <p className='copyright'> <i className='far fa-copyright'></i> 2022 All rights reserved</p>
        </div>
    </div>
    </>
  )
}

export default Footer
