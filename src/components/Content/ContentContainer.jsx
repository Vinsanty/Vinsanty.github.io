import { connect } from "react-redux";
import Content from "./Content"
import { increaceAC, retryAC } from "../../store/contentReducer";


let mapStateToProps = (state) =>{
    return{
        cards : state.content.cards,
        catalog: state.content.catalog
    }
    
}

let mapDispatchToProps = (dispatch) =>{
    return{
        increace:(id,value)=>{
            dispatch(increaceAC(id,value))
        },
        retry:(id)=>{
            dispatch(retryAC(id))
        }
    }
}


export default   connect (mapStateToProps,mapDispatchToProps)(Content)