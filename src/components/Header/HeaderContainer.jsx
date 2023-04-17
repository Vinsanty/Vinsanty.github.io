import { connect } from "react-redux"
import Header from "./Header"
import { setNavDataThunkCreator } from "../../store/navReducer"
import { useEffect } from "react"


const HeaderContainer = (props) =>{
    useEffect(()=>{
        props.setNavData()
    },[])
    
    return <Header city={props.nav.city} lat = {props.nav.lat} lon = {props.nav.lon} />
  
   
}

let mapStateToProps = (state) =>{
    return {
        nav : state.nav
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        setNavData:()=>{
            dispatch(setNavDataThunkCreator())
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (HeaderContainer)