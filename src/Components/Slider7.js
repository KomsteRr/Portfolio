import { useEffect } from "react";
import "./css/contact.css";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

export default function Slider7() {

    useEffect(() => {
        document.getElementsByClassName("error")[0].innerHTML = "Indisponible pour le moment"
    })

    return (
        <>
            <div className="contact">
                <div className="title">
                    <h3>Contacter</h3>
                    <p>—<BsFillEnvelopeAtFill /> —</p>
                </div>
                <div className="col">
                    <div className="part1">
                    </div>
                    <div className="part2">
                    </div>
                </div>
                <div className="mainPart">
                    <div className="big">
                        <h3>Me contacter</h3>
                        <p className="error"></p>
                        <div className="small">
                            <div>
                                <label>Votre nom, prenom</label>
                                <input disabled={true} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input disabled={true}/>
                            </div>
                            <div>
                                <label>message</label>
                                <textarea rows={10} disabled={true} />
                            </div>
                            <div>
                                <label>Importer un document</label>
                                <button disabled={true}>Choisir un document</button>
                            </div>
                            <div>
                                <button disabled={true} type="submit" className="submit">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}