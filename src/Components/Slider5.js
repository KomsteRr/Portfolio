import "./css/dl.css";
import MyCV from "../assets/file/CV.pdf";

export default function Slider5() {

    function downloadCV() {
        const CV = document.createElement('a');
        
        CV.download = "CV_Léo_POUMAILLOUX";
        CV.href = MyCV;

        CV.click();
    }

    return (
        <>
            <div className="sectionResume">
                <div className="resumeDL" onClick={downloadCV} >
                    <p>Télécharger le CV</p>
                </div>

            </div>
        </>
    )
}