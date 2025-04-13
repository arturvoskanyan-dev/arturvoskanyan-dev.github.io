import React from 'react'
import { FaGithub, FaTelegram, RiInstagramFill, IoLogoLinkedin } from "../index"
import style from "./SocialIcons.module.css"

export default function SocialIcons() {
    const socialIcons = [
        {href: "https://github.com/arturvoskanyan-dev",icon: <FaGithub />},
        {href: "https://www.linkedin.com/in/artur-frontend-developer-4302a7354/",icon: <IoLogoLinkedin />},
        {href: "https://t.me/arturvoskanyan_dev",icon: <FaTelegram />},
        {href: "https://www.instagram.com/artur_voskanyan2009",icon: <RiInstagramFill />}
    ]
    
    return (
        <div className={style.social_icons}>
            {
                socialIcons.map((icon) => <a href={icon.href} target="_blank">{icon.icon}</a> )
            }
        </div>
    )
}
