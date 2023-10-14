import "./css/employment.css"
import { BsBriefcaseFill } from "react-icons/bs";
import { BsFillMortarboardFill } from "react-icons/bs";

export default function Slider3() {

    return (
        <>
            <div className="employment">
                <div className="title">
                    <h3>Emploi</h3>
                    <p>—<BsBriefcaseFill /> —</p>
                </div>
                <div className="col">
                    <div className="part1">
                        <h1>01</h1>
                    </div>
                    <div className="part2">
                        <div className="workplace">
                            <div className="name">
                                <i><BsBriefcaseFill /></i>
                                <h3>Full stack developpeur</h3>
                            </div>
                            <div className="content">
                                <h5>Drieat</h5>
                                <p>Développement d'une application web faisant la creation et la gestion de formulaires</p>
                                <h6>2021-2023</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education">
                <div className="title">
                    <h3>Education</h3>
                    <p>—<BsFillMortarboardFill /> —</p>
                </div>
                <div className="col">
                    <div className="part1">
                        <h1>01</h1>
                    </div>
                    <div className="part2">
                        <div className="workplace">
                            <div className="name">
                                <i><BsFillMortarboardFill /></i>
                                <h3>Ecole 89</h3>
                            </div>
                            <div className="content">
                                <h5>Ferriere en Brie - France</h5>
                                <p>Bachelor - Concepteur, Développeur d'application</p>
                                <h6>2019 - 2023</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="part1">
                        <h1>02</h1>
                    </div>
                    <div className="part2">
                        <div className="workplace">
                            <div className="name">
                                <i><BsFillMortarboardFill /></i>
                                <h3>ESGI</h3>
                            </div>
                            <div className="content">
                                <h5>Paris - France</h5>
                                <p>Mastere - Ingenieur Web</p>
                                <h6>2024 - 2026</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}