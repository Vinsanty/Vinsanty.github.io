import Catalog from './Catalog/Catalog'
import style from './Content.module.css'
import FrontWay from './FrontWay/FrontWay'
import Recomendations from './Recomendations/Recomendations'

const Content = (props) =>{
    return(
        <main className={style.contentBox}>
            <Recomendations rec = {props.cards[1]} increace = {props.increace} retry={props.retry}/>
            <div className={style.showMoreBox}>
                <div><hr className={style.leftHr}/></div>
                <div><button className={style.showMoreBtn}>Показать ещё &darr;</button></div>
                <div><hr className={style.rightHr}/></div>
            </div>
            <FrontWay state = {props.cards} increace = {props.increace} retry={props.retry}/>
            <Catalog state = {props.catalog} increace = {props.increace} retry={props.retry}  />
        </main>
    )
}

export default Content