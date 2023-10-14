import pp from "../assets/img/cmwa.png";
import "./css/about.css";
import { BiCodeAlt } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidPlaneAlt } from "react-icons/bi";

export default function Slider2() {

    return (
        <>
            <div className="aboutMe">
                <div className="profilPictore">
                    <img src={pp} alt="Photo of myself" draggable={false}/>
                    <h3>LÉO</h3>
                    <h3>POUMAILLOUX</h3>
                    <h5>Habite sur PARIS</h5>
                </div>
                <div className="presentation">
                    <h4>Bonjour a vous !</h4>
                    <p>J'ai découvert ma passion pour le développement lorsque j'étais au lycée, en cours de technologie, nous faisions du scratch et j'ai trouvé ça vraiment cool. Aujourd'hui, j'étudie l'informatique dans le but de faire carrière dans le développement web.</p>
                </div>
                <div className="personnalInfo">
                    <table>
                        <tbody>
                            <tr>
                                <td>Date de naissance</td>
                                <td>: 08/06/2001</td>
                            </tr>
                            <tr>
                                <td>Téléphone</td>
                                <td>: 07 67 46 43 57</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>: leo@poumailloux.com</td>
                            </tr>
                            <tr>
                                <td>Site Web</td>
                                <td>: komsterr.ovh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="additional">
                    <div className="info1">
                        <div className="centered">
                            <BiCodeAlt />
                            <p>Développeur web</p>
                        </div>
                    </div>
                    <div className="info2">
                        <div className="centered">
                            <BiSolidDashboard />
                            <p>Designer Web</p>
                        </div>
                    </div>
                    <div className="info3">
                        <div className="centered">
                            <BiSolidPlaneAlt />
                            <p>Voyageur</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}