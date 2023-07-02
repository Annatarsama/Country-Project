import { createContext ,useState } from "react";
import componentCss from '../components/components.module.scss';


const regionContext = createContext();


function RegionProvider({children}){
const [region,setRegion] = useState();
const [searchBarValue,setSearchBarValue] =useState('')
const [darkMode, setDarkMode] = useState(false);
const [selectedCountry,setSelectedCountry] = useState()

const setColorTheme = () => {
    setDarkMode(!darkMode)
}
const handleDetailedCountry = (country)=>{
    setSelectedCountry(country);
    localStorage.setItem('selectedCountry',JSON.stringify(country))
}
 
const handleDropdownChange = (event)=> {
    setRegion(event.target.outerText)
}
const handleInputValue = (event)=> {
    setSearchBarValue(event.target.value)
}
return(
    <regionContext.Provider value={ {darkMode,selectedCountry,handleDetailedCountry,setColorTheme ,region, handleDropdownChange, searchBarValue, handleInputValue}}>
    <div id="content" className={darkMode ? componentCss.dark : null }>{children }</div>
    </regionContext.Provider>   
)
}

export {RegionProvider};
export default regionContext;