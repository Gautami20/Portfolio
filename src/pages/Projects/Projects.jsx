import React from 'react'
import startup from '../../assets/startup.png'
import game from '../../assets/game.png'
import weather from '../../assets/weather.png'
import grocery from '../../assets/grocery.png'
import newsletter from '../../assets/newsletter.png'
import codepen from '../../assets/codepen.png'
import natours from '../../assets/natours.png'

import Flipcard from '../../components/Flipcard/Flipcard'

import './Projects.css'

const Projects = () => {
  const data = [
    {
      image: startup,
      title: "Investor's deck",
      text: 'It is a full stack webapp made using react js, express js , mongodb for database with features of chatbot using botpress, trancript generation using wisper openAI, login authentication, razorpay api for payment and emailjs to send scheduled date and time. ',
      link: 'https://github.com/Gautami20/startup',
    },
    {
      image: game,
      title: 'Game 2048',
      text: 'This project is to build an identical clone of 2048 with score totaling. Using vanilla js and html,css we con count score and uses array method for changing tiles',
      link: 'https://github.com/Gautami20/Game_2048',
    },
    {
      image: natours,
      title: 'Natours',
      text: 'This is a sass project which is fully responsive website for tours and hiking services learnt through online course. It is for nature tours through various tour plans',
      link: 'https://github.com/Gautami20/Natours',
    },
    {
      image: grocery,
      title: 'Food Ordering Website',
      text: 'This is Frontend website for grocery shopping. It has planned feature like various category, Order online along with a user-friendly UI.',
      link: 'https://github.com/Gautami20/Grocery',
    },
    {
      image: weather,
      title: 'OpenWeather API',
      text: 'A simple, beautiful weather application. It provides current day weather foreacast using OpenWeather API.',
      link: 'https://github.com/Gautami20/Weather_project',
    },
    {
      image: newsletter,
      title: 'Newsletter signup',
      text: 'This project of signup using EXPRESS JS with MAILCHIMP to get the users enrolled newsletter automatically recieved email notifications.',
      link: 'https://github.com/Gautami20/Newsletter-signup',
    },
    {
      image: codepen,
      title: 'Clone Webiste',
      text: 'This is a clone of an existing webiste to kickstart my journey in react js framework. It uses MATERIAL UI and React with CODEMIRROR package for its implementation.',
      link: 'https://github.com/Gautami20/Codepen_clone',
    },
  ]

  console.log(data)

  return (
    <div className="container">
      <h1 className="outer-text">Here are my Projects</h1>
      <div className="outer">
        {data.map((item, index) => (
          <div
            className="project"
            key={index}
          >
            <Flipcard
              image={item.image}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
