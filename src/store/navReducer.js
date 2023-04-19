import axios from "axios"

const SET_COUNTRY = 'SET_COUNTRY'



let initialState = {
    city:null,
    lat:null,
    lon:null
}

const navReducer =(state=initialState,action)=>{
    switch(action.type){
        case SET_COUNTRY:{
           return {...state,city:action.city,
            lat:action.lat,
            lon:action.lon}
        }
        default:{
            return state
        }
    }

}

const setDataAC = (city,lat,lon)=>{
    return{type:SET_COUNTRY,city,lat,lon}
}

export const setNavDataThunkCreator = () => async dispath =>{
    navigator.geolocation.getCurrentPosition(pos=>{
        let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
        let token = "379d205731fa735d99149f7ddfde5e71d37e1ac0";
        let query = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        
        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(query)
        }
        
        axios.post(url,query, options).then(response=>{
            response.data.suggestions.map(s=> dispath(setDataAC(s.data.city,s.data.geo_lat,s.data.geo_lon)))
        })
    })
}
export default navReducer