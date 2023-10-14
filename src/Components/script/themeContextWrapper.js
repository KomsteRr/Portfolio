import React, { useEffect, useState } from "react";
import { ThemeContext, themes } from "./themeContext";

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.remove(themes.dark);
                document.body.classList.add(themes.light);
                document.getElementById('themeBtn').innerHTML = "🌙";
                // document.getElementsByClassName('navBar')[0].classList.add('slide-up');
                // document.getElementsByClassName('navBar')[0].classList.remove('slide-down');
                break;
            case themes.dark:
                document.body.classList.remove(themes.light);
                document.body.classList.add(themes.dark);
                document.getElementById('themeBtn').innerHTML = "☀️";
                // document.getElementsByClassName('navBar')[0].classList.add('slide-down');
                // document.getElementsByClassName('navBar')[0].classList.remove('slide-up');
                break;
            default:
        }
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
