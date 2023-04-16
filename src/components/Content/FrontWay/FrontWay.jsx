import Card from '../../Utils/Card/Card'
import style from './FrontWay.module.css'

const FrontWay = (props) =>{
    let cards = props.state.map((c,key) => <Card title={c.title} category1 = {c.category1} category2={c.category2} isStarted = {c.isStarted} 
        isDone = {c.isDone} allTasks={c.allTasks} complTasks={c.complTasks} increace = {props.increace} retry={props.retry} id = {c.id} key={key} />)

    return(
        <div className={style.mainWayBox}>
            <div className={style.titleWay}>
                <div className={style.titleHideBtn}>
                    <p>Путь Front End Developer</p>
                    <button className={style.hideBtn}>Скрыть пройденные</button>
                </div>
                <div className={style.switchBtnBox}>
                    <button><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.40717 5.00002L7.70427 1.70291L6.29006 0.288696L0.578735 6.00002L6.29006 11.7113L7.70427 10.2971L4.40716 7.00002H13V5.00002H4.40717Z" fill="#00395cc8"/>
                            </svg>
                    </button>
                    <button>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5942 5.00002L5.29709 1.70291L6.7113 0.288696L12.4226 6.00002L6.7113 11.7113L5.29709 10.2971L8.59421 7.00002H0V5.00002H8.5942Z" fill="#00395cc8"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={style.cardBox}>
                {cards}
            </div>
        </div>
    )
}

export default FrontWay