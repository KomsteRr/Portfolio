import { useRef } from "react";
import "./css/projects.css";
import { BsFillInboxesFill } from "react-icons/bs";

export default function Slider6() {
    const ref = useRef();

    return (
        <>
            <div ref={ref} className="project">
                <div className="title">
                    <h3>projets</h3>
                    <p>—<BsFillInboxesFill /> —</p>
                </div>
                <div className="col">
                    <div className="part1">
                    </div>
                    <div className="part2">
                    </div>
                </div>
                <div className="mainPart">
                    <div>
                        <span style={{fontFamily: "Open Sans", fontWeight: "bolder", marginLeft: "44vw"}}>🚧 En Cours d'alimentation 🚧</span>
                    </div>
                </div>
            </div>
        </>
    )
}