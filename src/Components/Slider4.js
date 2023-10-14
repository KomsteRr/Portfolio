import "./css/skills.css";
import { BiSolidMagicWand } from "react-icons/bi";

export default function Slider4() {
    return (
        <>
            <div className="skills">
                <div className="title">
                    <h3>skills</h3>
                    <p>—<BiSolidMagicWand /> —</p>
                </div>
                <div className="col">
                    <div className="part1">
                        <ul>
                            <li>
                                <div className="titre">
                                    <span>Javascript</span>
                                    <small>80%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="80%" style={{width: '80%'}}></div>
                                </div>
                            </li>
                            <li>
                                <div className="titre">
                                    <span>NodeJS</span>
                                    <small>80%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="80%" style={{width: '80%'}}></div>
                                </div>
                            </li>
                            <li>
                                <div className="titre">
                                    <span>React</span>
                                    <small>85%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="85%" style={{width: '85%'}}></div>
                                </div>
                            </li>
                            <li>
                                <div className="titre">
                                    <span>TypeScript</span>
                                    <small>55%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="55%" style={{width: '55%'}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="part2">
                        <ul>
                            <li>
                                <div className="titre">
                                    <span>HTML</span>
                                    <small>95%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="95%" style={{width: "95%"}}></div>
                                </div>
                            </li>
                            <li>
                                <div className="titre">
                                    <span>PHP</span>
                                    <small>70%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="70%" style={{width: "70%"}}></div>
                                </div>
                            </li>
                            <li>
                                <div className="titre">
                                    <span>css</span>
                                    <small>70%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="70%" style={{width: "70%"}}></div>
                                </div>
                            </li>
                            <li>
                                <div className="titre">
                                    <span>SQL</span>
                                    <small>75%</small>
                                </div>
                                <div className="progress-line">
                                    <div className="line" data-holdwidth="75%" style={{width: "75%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="moreSkills">
                    <div className="subTitle">
                        <h4>More skills</h4>
                    </div>
                    <div className="content">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <ul>
                                            <li>
                                                <div className="titre">
                                                    <span>Creativité</span>
                                                    <small>80%</small>
                                                </div>
                                                <div className="progress-line">
                                                    <div className="line" data-holdwidth="80%" style={{width: "80%"}}></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="titre">
                                                    <span>LeaderShip</span>
                                                    <small>60%</small>
                                                </div>
                                                <div className="progress-line">
                                                    <div className="line" data-holdwidth="60%" style={{width: "60%"}}></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="titre">
                                                    <span>Communication</span>
                                                    <small>50%</small>
                                                </div>
                                                <div className="progress-line">
                                                    <div className="line" data-holdwidth="50%" style={{width: "50%"}}></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <div className="titre">
                                                    <span>Anglais</span>
                                                    <small>90%</small>
                                                </div>
                                                <div className="progress-line">
                                                    <div className="line" data-holdwidth="90%" style={{width: "90%"}}></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="titre">
                                                    <span>Français</span>
                                                    <small>95%</small>
                                                </div>
                                                <div className="progress-line">
                                                    <div className="line" data-holdwidth="95%" style={{width: "95%"}}></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="titre">
                                                    <span>Coréen</span>
                                                    <small>5%</small>
                                                </div>
                                                <div className="progress-line">
                                                    <div className="line" data-holdwidth="5%" style={{width: "5%"}}></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}