import componentCss from './components.module.scss'
import { useGetAllCountriesQuery } from "../store";
import { useContext } from 'react';
import CountryListItem from './CountryListItem';
import { nanoid } from '@reduxjs/toolkit';
import regionContext from '../context/selectRegion';

function CountryList (){
    const {data , isFetching} = useGetAllCountriesQuery();
    const {region ,searchBarValue} = useContext(regionContext);
    let content;
    if(isFetching){
    }else if(data){
        const filteredData = data.filter((item)=> {
            if(region === 'Filter By Region' || region === undefined){
                return data
            } else {
                return item.region === region
            }
        })
       const filteredData2 = filteredData.filter((item)=> {
        return item.name.common.toLowerCase().includes(searchBarValue)
       })
        content = filteredData2.map((country)=>{
            return <CountryListItem key={nanoid()}  country={country}/>
        })
    } else{
        content = 'ERROR'
    }
    
    



    return (<div  className={componentCss.card_container}>
        {content}
    </div>)

}
export default CountryList;
