import componentCss from './components.module.scss'
import {BiSearch} from 'react-icons/bi'
import {RiArrowDropDownLine ,RiArrowDropLeftLine} from 'react-icons/ri'
import { useState ,useContext} from 'react';
import regionContext from '../context/selectRegion';

function SearchnDropdown (){
    
const {handleDropdownChange, handleInputValue, searchBarValue} = useContext(regionContext);
    const[isOpen,setIsOpen] = useState(false)
    const handleDropdown = (event)=> {
        setIsOpen(!isOpen);
        if(isOpen){
        if(event.target.outerText === undefined){
            
        }else {
            document.getElementById('dropText').innerHTML = event.target.outerText
            handleDropdownChange(event)
        }
    }
    }
    const dropdownList= ['Filter By Region','Africa','Americas','Asia','Europe','Oceania']
    const dropdownListItems  = dropdownList.map((item)=>{
        return <li key={item} className={componentCss.dropdown_li} onClick={handleDropdown}>{item}</li>
    })
    
   

    return (
        <div className={componentCss.menus}>
            <div className={componentCss.wrapper} >
                <BiSearch className={componentCss.icon} size={25}/>
                <input className={componentCss.search_input} onChange={handleInputValue} value={searchBarValue} type="text" placeholder='Search for country...'/>   
            </div>

            <div  className={componentCss.dropdown}>
                <div onClick={handleDropdown} className={componentCss.dropText}>
                    <span id='dropText'>Filter By Region</span>
                    {isOpen ? <RiArrowDropDownLine size={25}/>: <RiArrowDropLeftLine size={25}/>}
                </div>
                <ul className={componentCss.dropdown_ul}>
                {isOpen ? dropdownListItems : null}
                </ul>
            </div>
        </div>
    )
}
export default SearchnDropdown;