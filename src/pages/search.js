import React from 'react'
import profileImage from '../assets/profile-image.jpg'

function About() {
    return (
        <section className='my-5'>
            <div className='my-2'>
                <img src={profileImage} alt="profile picture" width="275" height="250"></img>
                  <p>
                    Hi, my name is Kyle Barker and I'm a developer from Milwaukee Wisconsin.
                  </p>
            </div>
        </section>
    )
}

export default About
