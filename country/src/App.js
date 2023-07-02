import CountryPage from './pages/CountryPage';
import componentCss from './components/components.module.scss';
import {Route, Routes} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import DetailedCountryPage from './pages/DetailedCountryPage';
import { useGetAllCountriesQuery } from "./store";
import { nanoid } from '@reduxjs/toolkit';



function App (){
const {data} = useGetAllCountriesQuery();
let renderedRoutes;
if(data){
renderedRoutes = data.map((country)=> {
    const pathname = "/" + country.name.common.replaceAll(' ','')
    return <Route key={nanoid()} path={pathname} element={<DetailedCountryPage />}></Route>
})
}

   

    return <div id='themeChanger' className={componentCss.themeChanger}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<CountryPage/>}></Route>
            {/* <Route path="*" element={<div> Not Found or You do not have permission.</div>}/> */}
            {renderedRoutes}
        </Routes>
        </div>
}

export default App;