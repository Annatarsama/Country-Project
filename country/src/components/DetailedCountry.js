import {BsArrowLeft} from 'react-icons/bs';
import componentCss from './components.module.scss'
import { Link } from 'react-router-dom';

function DetailedCountry (){
    
    const selectedCountry = JSON.parse(localStorage.getItem('selectedCountry'))
    ///accessing language currency and native name
    const langObj = selectedCountry.languages;
    const langArray = Object.values(langObj).map((value,index)=>{
        return value;
    })
    const currentLanguage = langArray[0]

    const currencyObj = selectedCountry.currencies;
    const currencyArray = Object.values(currencyObj).map((value,index)=>{
        return value;
    })
    const currentCurrency = currencyArray[0].name;
    
    //////
    const borders = selectedCountry.borders;
    let isMore
    let renderedBorders;
if(borders){
    let newBorders
    if(borders.length < 7){
        newBorders = borders;
    } else {
        newBorders = borders.slice(0,5);
        isMore = <div className={componentCss.borders}>+{borders.length-5}</div>
    }
    renderedBorders = newBorders.map((item)=>{
        return <div key={item} className={componentCss.borders}>{item}</div>
    })
}
    return (
        <div className={componentCss.detailed_container}>
            <button className={componentCss.turn_back} id={componentCss.turn_back}><Link to="/"><BsArrowLeft/><span>Back</span></Link></button>
            <div className={componentCss.text_flag}>
                <img className={componentCss.flag} src={selectedCountry.flags.png} alt="flag" />
                <div className={componentCss.detailed_info}>
                    <div>
                        <h2>{selectedCountry.name.common}</h2>
                    </div>
                    <div>
                        <div className={componentCss.info_1}>
                            <div className={componentCss.info_items}><span>Native Name: </span><span className={componentCss.text}>{selectedCountry.name.official}</span></div>
                            <div className={componentCss.info_items}><span>Population:</span><span className={componentCss.text}>{selectedCountry.population}</span></div>
                            <div className={componentCss.info_items}><span>Region:</span><span className={componentCss.text}>{selectedCountry.region} </span></div>
                            <div className={componentCss.info_items}><span>Sub Region:</span><span className={componentCss.text}>{selectedCountry.subregion} </span></div>
                            <div className={componentCss.info_items}><span>Capital:</span><span className={componentCss.text}>{selectedCountry.capital} </span></div>
                        </div>
                        <div className={componentCss.info_2}>
                            <div className={componentCss.info_items}><span>Top Level Domain:</span><span className={componentCss.text}>{selectedCountry.tld[0]} </span></div>
                            <div className={componentCss.info_items}><span>Currencies:</span><span className={componentCss.text}>{currentCurrency} </span></div>
                            <div className={componentCss.info_items}><span>Languages:</span><span className={componentCss.text}>{currentLanguage} </span></div>
                        </div> 
                    </div>
                    
                    <div className={componentCss.info_3}>
                        <span>Border Countries:</span>
                        {renderedBorders}
                        {isMore}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailedCountry;