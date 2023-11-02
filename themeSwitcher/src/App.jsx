import './App.css'
import {ThemeProvider} from "./context/theme.js";
import {useEffect, useState} from "react";
import Card from "./components/Card.jsx";
import ThemeButton from "./components/ThemeButton.jsx";

function App() {
    const [themeMode , setThemeMode] = useState('light');
    const lightTheme = ()=>{
        setThemeMode('light');
    }
    const darkTheme = ()=>{
        setThemeMode('dark');
    }
    //actual change in theme
    const domSelect = document.querySelector('html');
    useEffect(() => {
        domSelect.classList.remove('dark','light')
        domSelect.classList.add(themeMode);
    }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode , darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <ThemeButton/>
                </div>

                <div className="w-full max-w-sm mx-auto">
               <Card/>
                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default App
