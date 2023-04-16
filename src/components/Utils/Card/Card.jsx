import style from './Card.module.css'
import Circle from './../Circle/Cirlce'


const Card = (props) =>{
    let increace = () =>{
        props.increace(props.id,props.complTasks+1)
    }
    return(
        <div className={style.mainCardBox}>
            <div className={style.titleCardBox}>
                <h2>{props.title}</h2>
                <p className={style.bluredInfo}>{props.category1} &bull; {props.category2}</p>
            </div>
            <div className={style.cardInfoBox}>
                <p>Познакомтесь ближе с компанией и узнайте больше о том, что вы делаете</p>
                <div className={style.progressBox}>
                    {props.isStarted? 
                    <button onClick={increace} className={style.continueBtn}>
                        Продолжить тему
                    </button>: props.isDone?  
                    <button onClick={()=>{props.retry(props.id)}}> 
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.85314 2.36057L1.5 0.5L0 6H5.5L4.02931 3.97781C4.8599 3.36333 5.88754 2.99999 7.00004 2.99999C9.419 2.99999 11.4368 4.71776 11.9 7H13.9283C13.7711 5.91148 13.3587 4.8686 12.7165 3.95999C11.8091 2.67595 10.4957 1.73483 8.98815 1.28826C7.48057 0.841697 5.86654 0.915695 4.40614 1.49833C3.85028 1.7201 3.32899 2.01064 2.85314 2.36057Z" fill="#0078D2"/>
                            <path d="M1.2835 12.04C0.641349 11.1314 0.228902 10.0885 0.0717773 9H2.10001C2.56327 11.2822 4.58103 13 6.99999 13C8.11249 13 9.14013 12.6367 9.97072 12.0222L8.50004 10H14L12.5 15.5L11.1469 13.6394C10.671 13.9894 10.1498 14.2799 9.59389 14.5017C8.13349 15.0843 6.51946 15.1583 5.01188 14.7117C3.5043 14.2652 2.19096 13.3241 1.2835 12.04Z" fill="#0078D2"/>
                        </svg>
                        Пройти заново
                    </button>:
                    <button onClick={()=>{props.retry(props.id)}}>Начать</button>}
                    {props.isDone ?
                    <div className={style.doneBox}>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.79876 8.41721L2.12386 5.07923L0.779144 6.55968L5.99379 11.2962L13.733 2.07302L12.2009 0.787449L5.79876 8.41721Z" fill="white"/>
                        </svg>
                    </div>: props.isStarted ?
                    <div>
                        <svg  width='130px' height='30px' >
                            <g transform={`rotate(-90 ${"100 100"})`}>
                                <Circle r = {10} color = 'lightgrey'  cx={185} cy ={110} stWid={3}/>
                                <Circle r = {10} color = {'#24C38E'} percent={props.complTasks/props.allTasks*100} cx={185} cy ={110} stWid={3}/>
                            </g>
                            <text x='0' y ='20' fill='#002033'>{props.complTasks}/{props.allTasks} задач</text>
                        </svg>
                    </div>:
                    <div>{props.allTasks} задач</div>}
                </div>
            </div>
        </div>
    )
}

export default Card