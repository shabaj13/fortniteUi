import React from 'react'
import './App.css'
const Body = () => {
  const fortnite = "../src/assets/anime.png"
  return (
    <>
      <div className='bodyContainer'>
        <div className="bodyContent">
          <p>#1 Trending</p>
          <div className='heading'>  
          <span>Epic Games</span>
          <h1>Fortnite</h1>
          </div>
          <p>Fortnite is a survival game where 100 players fight<br/> against each other in player versus player combat to be the<br/> last one standing. It is a fast-paced, action-packed game,<br/> not unlike The Hunger Games, where strategic thinking is a must<br/> in order to survive. There are an estimated 125 million <br/>players on Fortnite.</p>
          <div className="btn">  
          <span className='btn1'>Play Now</span>
          <span className='btn2'>Watch Gameplay</span>
          </div>

        </div>
        <div className="icon">
          
       
        <i class="devicon-windows8-original"></i>
          
          
        <i class="devicon-apple-original"></i>
          
        <i class="devicon-android-plain"></i>
          
        <i class="devicon-codeigniter-plain"></i>
          
        <i class="devicon-gitlab-plain"></i>
          
        </div>
        <img src={fortnite} alt="pic" />
      </div>
    </>
  )
}

export default Body