import Link from "next/link"
import Styles from "../css/contact.module.css"

export default function Contact() {
    return (
        <div className={Styles.main}>
            <span className={Styles.contacter_addon}/>
            <h2>N'hésitez pas à me contacter</h2>
            <span className={Styles.separateur}/>
            <div className={Styles.contact_form}>
                <p>Voici le mail sur lequel vous pouvez me contacter :</p>
                <Link href={"mailto:leo@poumailloux.com"} className={Styles.link}>leo@poumailloux.com</Link>
                <br className={Styles.delimiter} />
                <p>Voici Mon numero de téléphone :</p>
                <span className={Styles.link}>07 67 46 43 57</span>
            </div>
            <br className={Styles.delimiter}/>
        </div>
    )
}