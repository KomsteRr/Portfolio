// import bgForest from "../assets/img/1920x1080.png";
import bgForest from "../assets/img/bg.png";

export default function Slider1() {
    return (
        <>
            <div className="firstSlide">
                <img src={bgForest} alt="background forest" className="bg-forest" draggable={false}/>
                <div className="Who">
                    <div className="border" style={{zIndex: 2}}>
                        <p>Qui suis-je ?</p>
                    </div>
                    <h1>Je suis LÉO POUMAILLOUX</h1>
                </div>
            </div>
        </>
    )
}