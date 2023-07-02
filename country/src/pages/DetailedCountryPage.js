import { useContext } from "react";
import DetailedCountry from "../components/DetailedCountry";
import regionContext from "../context/selectRegion";

function DetailedCountryPage (){
    const {selectedCountry} =useContext(regionContext);
    return (
        <div>
            
            <DetailedCountry country={selectedCountry}/>
        </div>
    )
}
export default DetailedCountryPage;