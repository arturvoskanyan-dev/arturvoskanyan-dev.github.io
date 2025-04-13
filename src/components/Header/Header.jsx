import React from 'react'
import style from "./Header.module.css"

export default function Header() {
  return (
    <header className={style.header}>
            <h2 className={style.logo}>
                Artur <span>Voskanyan</span>
            </h2>
        <nav className={style.navbar}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
        <button className={style.btn}>Contact Me</button>
    </header>
  )
}
