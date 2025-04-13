import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'
import maingImg from "../../assets/hom_img.png"
import style from "./Home.module.css"

export default function Home() {
    return (
        <section className={style.home}>
            <div className={style.home_content}>
                <h1>Hi, Artur <span>Voskanyan</span></h1>
                <h3>
                    I'm a <span>Web Developer</span>
                </h3>
                <p>
                    I started learning programming and have since specialized in web
                    development, continuously honing my skills to create efficient and
                    innovative solutions. I have skills in React and Tailwind, as well as projects
                    hosted on my GitHub Profile`.
                </p>
                <SocialIcons />
                <div className={style.btn_group}>
                    <button>Hire</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className={style.home_img}>
                <img src={maingImg} alt="main_img" />
            </div>
        </section>
    )
}
