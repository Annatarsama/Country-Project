import { useContext } from 'react';
import regionContext from '../context/selectRegion';
import componentCss from './components.module.scss'
import CustomLink from './CustomLink';

function CountryListItem ({country}){

    const {handleDetailedCountry} = useContext(regionContext);
    

    return (
        <div onClick={()=>handleDetailedCountry(country)} className={componentCss.card}>
            <CustomLink to={`/${country.name.common.toLowerCase().replace(/ /g, '')}`}>
                <div className={componentCss.flag}>
                    <img src={country.flags.png} alt='country flag' />
                </div>
                <div className={componentCss.country_info}>
                <div className={componentCss.countryName}>{country.name.common}</div>
                <ul>
                    <li><span className={componentCss.title}>Population: </span> <span className={componentCss.info}>{country.population}</span></li>
                    <li><span className={componentCss.title}>Region: </span> <span className={componentCss.info}>{country.region}</span> </li>
                    <li><span className={componentCss.title}>Capital: </span> <span className={componentCss.info}>{country.capital}</span> </li>
                </ul>
                </div>
                </CustomLink>
        </div>
        )
}
export default CountryListItem;