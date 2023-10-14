import { useState } from "react";
import classNames from "classnames";
import { ThemeContext, themes } from "./script/themeContext";
import useSticky from "./script/useSticky";
import './css/Header.css';
import { BsBriefcaseFill } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
// import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

export default function Header() {
    const [darkMode, setDarkMode] = useState(true);
    const { sticky, stickyRef} = useSticky();

    function openLink(link) {
        window.open(link, '_blank', 'noopener, noreferrer');
    }

    function scrollToSection(sectionClass) {
        document.getElementsByClassName(sectionClass)[0].scrollIntoView({behavior: "smooth"});
    }

    return (
        <>
            <div ref={stickyRef} className={classNames('navBar', { sticky })}>
                <div className="center">
                    <div onClick={() => {scrollToSection("contact")}} className="hireMe pointer">
                        <BsBriefcaseFill />
                        <p className="pointer"> M'embaucher</p>
                    </div>
                    <div className="nav">
                        <p className="pointer" onClick={() => {scrollToSection("firstSlide")}}>HOME</p>
                        <p className="separator">/</p>
                        <p className="pointer" onClick={() => {scrollToSection("aboutMe")}}>A PROPOS</p>
                        <p className="separator">/</p>
                        <p className="pointer" onClick={() => {scrollToSection("employment")}}>CV</p>
                        <p className="separator">/</p>
                        <p className="pointer" onClick={() => {scrollToSection("project")}}>PORTFOLIO</p>

                    </div>
                    <div className="social">
                        {/* <BiLogoTwitter onClick={() => {openLink("google.com")}}/> */}
                        <BiLogoLinkedin className="pointer" onClick={() => {openLink("https://www.linkedin.com/in/léo-poumailloux-35aa971a2/")}}/>
                        <BiLogoGithub className="pointer" onClick={() => {openLink("https://github.com/KomsteRr/")}}/>
                    </div>
                </div>
                <ThemeContext.Consumer>
                    {({changeTheme}) => (
                        <button
                            id="themeBtn"
                            className="themeBtn pointer"
                            onClick={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark);
                            }}
                        >
                            🌙
                        </button>
                    )}
                </ThemeContext.Consumer>
                <div style={{height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px'}} />
            </div>
            <div style={{height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px'}} />
        </>
    );
}