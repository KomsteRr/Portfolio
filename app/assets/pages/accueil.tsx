import Styles from "../css/accueil.module.css"
import FileSaver from 'file-saver';

export default function Accueil() {
    const download_cv = () => {
        FileSaver.saveAs(
          window.location.href + "/ressources/Leo_Poumailloux_Resume_compressed.pdf",
          "CV_Léo_Poumailloux.pdf"
        );

        // console.log(window.location.href)S
      }

    return (
        <div className={Styles.main}>
            <span className={Styles.accueil_addon}/>
            <h2>Bienvenue sur mon Portfolio</h2>
            <span className={Styles.separateur}/>
            <p>
                Je tiens à exprimer ma sincère gratitude pour avoir pris le temps de visiter mon portfolio.<br/>
                Votre intérêt est très apprécié ! N'hésitez pas à explorer davantage et à me faire part de vos impressions.<br/>
                Merci encore et feel free to discover more!
            </p>
            <br className={Styles.delimiter}/>
            <br className={Styles.delimiter}/>
            <h2>Curriculum vitæ</h2>
            <span className={Styles.cv_addon}/>
            <span className={Styles.separateur2}/>
            <p>
                Merci infiniment d'avoir pris le temps de parcourir mon CV.<br/>
                Votre considération est précieuse.<br/>
                Restant à votre disposition pour toute information complémentaire. 
            </p>
            <br className={Styles.delimiter}/>

            <button className={Styles.download_button} onClick={download_cv}>
                Télécharger le CV
            </button>

            <br className={Styles.delimiter}/>
        </div>
    )
}