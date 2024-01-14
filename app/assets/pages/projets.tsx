"use client"

import Styles from "../css/projets.module.css"
import Image from "next/image"
import React, {useEffect, useState} from 'react';

export default function Projets() {
    const [showModale, setShowModale] = useState(false);

    function ShowModaleTemp() {
        if (showModale) {
            setShowModale(false);
        } else {
            setShowModale(true);
        }
    }

    return (
        <div className={Styles.main}>
            <span className={Styles.projet_addon}/>
            <h2>Mes Projets</h2>
            <small>Présentation de mes dernières expériences</small>
            <span className={Styles.separateur}/>
            <div className={Styles.list_projets}>
                <div className={Styles.card} onClick={ShowModaleTemp}>
                    <Image 
                        src="/homeMealMe.png"
                        alt='Photo Accueil Application MealMe'
                        width={256}
                        height={256}
                        className={Styles.card_image}
                    />
                    <h3>MealMe</h3>
                    
                    <small>
                        Application Mobile IOS<br/>
                        Recyclage d'aliment<br/>
                        React Native <br/>

                    </small>
                    
                </div>
            </div>

            {showModale &&
                <div className={Styles.modale}>
                    <span className={Styles.returnBG} onClick={ShowModaleTemp}/>
                    <div className={Styles.modale_card}>
                        <Image
                            src="/regroupageMealMe.png"
                            alt='Images Application MealMe'
                            width={342}
                            height={342}
                            className={Styles.image}
                        />
                        
                        <p>
                            Application Mobile IOS Développer en React Native<br/>
                            Pour le contexte de validation d'un titre RNCP Niveau 6<br/>
                            L'application a pour but d'aider à trouver des recettes de cuisine,<br/>
                            à partir de restes alimentaire, elle permet aussi de partager des recettes.<br/>
                        </p>
                        
                    </div>
                </div>
            }


            <br className={Styles.delimiter}/>
        </div>
    )
}