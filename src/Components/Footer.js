import "./css/Footer.css";
import { BsGithub,BsLinkedin } from "react-icons/bs";

export default function Footer() {

    function openLink(link) {
        window.open(link, '_blank', 'noopener, noreferrer');
    }

    return (
        <>
            <div className="footer">
                <p>Rejoignez moi sur</p>
                <div className="socials">
                    <ul>
                        <li onClick={() => {openLink("https://www.linkedin.com/in/l%C3%A9o-poumailloux-35aa971a2/")}}>
                            <BsLinkedin/>
                        </li>
                        <li onClick={() => {openLink("https://github.com/KomsteRr/")}}>
                            <BsGithub/>
                        </li>
                    </ul>
                </div>
                <span>Léo Poumailloux - All Right Reserved</span>
            </div>
        </>
    )
}