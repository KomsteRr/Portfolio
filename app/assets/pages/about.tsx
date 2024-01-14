import Image from 'next/image'
import Styles from "../css/about.module.css";
import { FaCode, FaLanguage, FaPassport } from "react-icons/fa6";

export default function About() {

    return (
        <div className={Styles.main}>
            <span className={Styles.who_addon} />
            <h2>Qui suis-je ?</h2>
            <span className={Styles.separateur}/>
            <p>
                Bonjour a vous !<br/>
                Je m'appelle <strong>léo Poumailloux</strong>, je suis né le <strong>8 juin 2001 (j'ai {new Date().getFullYear() - 2001} ans)</strong>.<br/>
                j'habite dans les environs de <strong>paris</strong>, je suis aussi détenteur du <strong>permis de conduire</strong>.<br/>
                <br/>
                J'ai découvert ma passion pour le développement informatique lorsque j'étais au lycée, en cours de technologie, nous faisions du scratch,<br/>
                et j'ai trouvé cela vraiment intéressant.<br/>
                Aujourd'hui, j'étudie le développement informatique dans le but de faire carrière dans ce secteur en plein essor.<br/>
            </p>
            <br />
            <div className={Styles.mask_photo}>
                <Image
                    src="/leo.JPEG"
                    alt='Photo de léo'
                    width={256}
                    height={341}
                    className={Styles.leo}
                />
            </div>

            <br className={Styles.delimiter} />

            <span className={Styles.skills_addon}/>
            <h2>Mes compétences</h2>
            <span className={Styles.separateur2}/>
            <div className={Styles.regroupement}>
                <div>
                    <FaCode className={Styles.Categorie} />
                    <p>
                        C, C++, python,<br />
                        HTML, PHP, Javascript,<br />
                        CSS, SQL, React, React Native ...
                    </p>
                </div>
                <div>
                    <FaLanguage className={Styles.Categorie}/>
                    <p>
                        Français, Anglais 👍<br/>
                        Coréen 🤏 <br />
                    </p>
                </div>
                <div>
                    <FaPassport className={Styles.Categorie}/>
                    <p>
                        Creativité, Leadership, Communication <br/>
                        Photographie, Voyages, K-Culture, Cinema, Jeux Vidéos <br />
                    </p>
                </div>
            </div>

            <br className={Styles.delimiter} />
        </div>
    )
}