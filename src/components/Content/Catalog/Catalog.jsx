import style from './Catalog.module.css'
import Card from '../../Utils/Card/Card'

const Catalog = (props) =>{

    let cards = props.state.map((c,key) => <Card title={c.title} category1 = {c.category1} category2={c.category2} isStarted = {c.isStarted} 
        isDone = {c.isDone} complTasks={c.complTasks}  allTasks={c.allTasks} key={key} increace={props.increace} retry={props.retry} id={c.id}/>)

    return (
        <div className={style.mainCatalog}>
            <div className={style.catalogTitle}>
                <h3>Каталог тем</h3>
                <div className={style.choiceGroup}>
                    <button>Все</button>
                    <button>Рабочая среда</button>
                    <button>Библиотеки</button>
                    <button>Пройденные</button>
                    <button>Не пройденные</button>
                </div>
            </div>
            <div className={style.cardCatalog}>
                {cards}
            </div>
        </div>
    )
}

export default Catalog