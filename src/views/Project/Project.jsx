import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/TextUtils.png'
import img5 from  '../../images/Portfolio.png'
import img3 from  '../../images/FoodDelivery.png'
import img4 from  '../../images/Gym.png'
import img1 from  '../../images/AlarmClock.png'
import img2 from  '../../images/FileDownloader.png'
import img6 from  '../../images/TexttoSpeech.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "TextUtils using React" img= {img7} link = "https://github.com/developer-mustafa"  />
            <ProjectBox title = "Portfolio Website" img= {img5} link = "https://github.com/developer-mustafa"  />
            <ProjectBox title = "Food Delivery Website" img= {img3} link = "https://github.com/developer-mustafa"  />
            <ProjectBox title = "Gym Website" img= {img4} link = "https://github.com/developer-mustafa"  />
            <ProjectBox title = "Alarm Clock using js" img= {img1} link = "https://github.com/developer-mustafa"  />
            <ProjectBox title = "File downloader using js" img= {img2} link = "https://github.com/developer-mustafa"  />
            <ProjectBox title = "Text to speech using js" img= {img6} link = "https://github.com/developer-mustafa"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
