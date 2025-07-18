import { useContext, useState } from "react";
import { MdDarkMode , MdLightMode  } from "react-icons/md";
import ThemeContext from "../Contexts/ThemeContext";
export default function Header() {
  // const [isDark, setIsDark] = theme;
  const [isDark,setIsDark] = useContext(ThemeContext)
  
   
  return (
    <header className={`header-container h-[70px] ${isDark?'dark':""}`}>
      <div className="header-content text-xl flex justify-between h-full ml-10 mr-10 items-center">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer   font-semibold flex items-center gap-1 " 
        onClick={()=>{
          setIsDark(!isDark)
          
          localStorage.setItem('isDarkMode' , !isDark)
          }}
        >
          {isDark?  <MdLightMode />: <MdDarkMode /> } {isDark?"Light Mode":"Dark Mode"}
        </p>
      </div>
    </header>
  );
}
