import React, { useState } from 'react'
import assistant from "./images/UUg-unscreen.gif"
import {BsGithub , BsTwitter, BsLinkedin, BsStackOverflow, BsInstagram, BsFacebook} from "react-icons/bs"

const socials = [
    {
        social: 'GitHub',
        link: 'https://www.github.com',
        icon: <BsGithub />,
        info: "This Button takes you to GitHub's home page. "
    },
    {
        social: 'Twitter',
        link: 'https://www.twitter.com',
        info: "This Button takes you to Twitter's home page. ",
        icon: <BsTwitter />
    },
    {
        social: 'LinkedIn',
        link: 'https://www.linkedin.com',
        info: "This Button takes you to LinedIn's home page. ",
        icon: <BsLinkedin />
    },
    {
        social: 'StackOverflow',
        link: 'https://stackoverflow.com',
        info: "This Button takes you to StackOverflow's home page. ",
        icon: <BsStackOverflow />
    },
    {
        social: 'instagram',
        link: 'https://www.instagram.com',
        info: "This Button takes you to Instagram's home page. ",
        icon: <BsInstagram />
    },
    {
        social: 'Facebook',
        link: 'https://www.facebook.com',
        info: "This Button takes you to Facebook's home page. ",
        icon: <BsFacebook />
    }
]

export default function Home() {
    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(!active);
    }


    if(active){
        let utterance = new SpeechSynthesisUtterance("Mouse over button to view Assistant");
        speechSynthesis.speak(utterance);
    }

  return (
    <>
        <section className='w-screen h-screen parent backdrop-blur-2xl'>
            <button onClick={handleActive} className='absolute z-50 hidden px-5 py-3 rounded-full lg:block bg-gradient-to-br from-blue-900 to-yellow-700 bottom-10 right-7'>
                <span className='text-sm text-white'>
                    {active ? `Deactivate Assistant` : `Activate Assistant`}
                </span>
            </button>
            <div className='absolute bottom-0 z-50 right-32'>
                {active ? "" : <img  src={assistant} alt="" className=' h-[100px] hidden lg:block' />}
            </div>
            <div className='w-screen h-screen backdrop-blur-2xl  py-8 px-[100px] flex items-center flex-col justify-center'>
                <h1 className='text-2xl text-center text-zinc-300'>X-Assistant</h1>
                <h2 className='py-3 text-lg text-center text-white'>Access your Scocial media accounts from here</h2>
                <div className='py-10 px-5 flex gap-5  w-[60%] justify-center flex-wrap'>
                    {
                        socials.map((datum, i) => {
                            return (
                                <>
                                   <div className='relative'>
                                        <a key={i} target='blank' href={datum.link} className='z-20 flex items-center gap-2 px-10 py-3 my-2 text-sm text-white rounded-lg bg-gradient-to-br from-blue-900 to-zinc-700'>{datum.social} <span className='text-xl'>{datum.icon}</span> </a>
                                        {
                                            active ? <div id='sib' className='absolute z-50 px-5 py-2 text-white shadow-inner shadow-blue-700 rounded-r-2xl rounded-tl-2xl w-fit backdrop-blur-lg bg-gradient-to-tr bg-blue-950/50 -left-32'>
                                            <div className='relative'>
                                                 <span className='max-w-[50px] text-sm'>{datum.info}</span>
                                                 <img  src={assistant} alt="" className='h-[150px] absolute top-0 -left-32 drop-shadow-xl'/>
                                            </div>
                                         </div>
                                         : ""
                                        }
                                   </div>
                                </>
                            )
                        } )
                    }
                </div>
            </div>
        </section>
    </>
  )
}
