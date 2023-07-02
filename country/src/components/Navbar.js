import {FiMoon} from 'react-icons/fi'
import {MdOutlineLightMode} from 'react-icons/md'
import componentCss from './components.module.scss';
import regionContext from '../context/selectRegion';
import { useContext } from 'react';
import CustomLink from './CustomLink';

function Navbar (){
    const {darkMode, setColorTheme} = useContext(regionContext);
    return (
        
        <div className={componentCss.navbar}>
            <CustomLink to="/">
            <h3>Where in the world?</h3>
            </CustomLink>
            <div onClick={setColorTheme} className={componentCss.mode}>
            <div >{darkMode ? <FiMoon/>: <MdOutlineLightMode/>}</div>
            <div>Dark Mode</div>
            </div>
        </div>
        )
}
export  {Navbar};