"use client"

import Image from 'next/image'
import styles from './assets/css/page.module.css'
import { FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";
import dynamic from 'next/dynamic';
import React, {useEffect, useState} from 'react';

import Accueil from './assets/pages/accueil';
import Contact from './assets/pages/contact';
import Projets from './assets/pages/projets';
import About from './assets/pages/about';
import Link from 'next/link';

export default function Home() {
  const [contentShown, setContentShown] = useState("accueil");

  const ShowContent = (event, contentName: string) => {
    setContentShown(contentName);

    event.target.setAttribute("data-tag", "active")
  }

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.container_title}>
          <h1 className={styles.name}>Leo poumailloux</h1>
          <div className={styles.job}>
            <span>Web</span>
            <span>Fullstack</span>
            <span>Développeur</span>
          </div>
        </div>
        <div className={styles.contact_socials}>
          <button className={[styles.contact_button, styles.hover].join(' ')} onClick={(e) => ShowContent(e, "contact")}>me contacter</button>
          <div className={styles.socials}>
            <Link href={"https://github.com/KomsteRr"}><button className={styles.hover}><FaGithub style={{color: 'black'}}/></button></Link>
            <Link href={"https://fr.linkedin.com/in/l%C3%A9o-poumailloux-35aa971a2"}><button className={styles.hover}><FaLinkedin style={{color: 'blue'}} /></button></Link>
          </div>
        </div>
      </header>
      <nav className={styles.navbar}>
        <button onClick={(e) => ShowContent(e, "accueil")}>Accueil</button>
        <button onClick={(e) => ShowContent(e, "contact")}>Contact</button>
        <button onClick={(e) => ShowContent(e, "projets")}>Projets</button>
        <button onClick={(e) => ShowContent(e, "about")}>À Propos</button>
      </nav>
      <div>
        {contentShown == 'accueil' && <Accueil />}
        {contentShown == 'contact' && <Contact />}
        {contentShown == 'projets' && <Projets />}
        {contentShown == 'about' && <About />}
      </div>
      <footer className={styles.footer}>
        <h2>Parlons de vos projets :</h2>
        <button className={[styles.contact_button, styles.hover].join(' ')} onClick={(e) => ShowContent(e, "contact")}>me contacter</button>
        <div className={styles.socials}>
        <Link href={"https://github.com/KomsteRr"}><button className={styles.hover}><FaGithub style={{color: 'black'}}/></button></Link>
            <Link href={"https://fr.linkedin.com/in/l%C3%A9o-poumailloux-35aa971a2"}><button className={styles.hover}><FaLinkedin style={{color: 'blue'}} /></button></Link>
        </div>
        <small><FaRegCopyright/> Léo Poumailloux | {new Date().getFullYear()}</small>
      </footer>
    </main>
  )
}
