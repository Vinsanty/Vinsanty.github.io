import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import bell from '../../common/bell.svg'
import question from '../../common/question.svg'
import sun from '../../common/sun-svgrepo-com.svg'

const Header = ({city,lat,lon}) =>{
    return(
        <header className={style.header}>
            <div className={style.menuContainer}>
                <h4>Портал Разработчика</h4>
                <NavLink to='/training' className={navData => navData.isActive ? style.active: style.item}>Моё обучение</NavLink>
                <NavLink to='/tasks' className={navData => navData.isActive ? style.active: style.item}>Задачи</NavLink>
            </div>
            <div className={style.geolocInfo}>
                <span>г.{city}</span>
                <span>Широта: {lat}</span>
                <span>Долгота: {lon}</span>
            </div>
            <div className={style.loginContainer}>
                <button><img src={bell} alt='bell-btn'/></button>
                <button><img src={question} alt='question-btn'/></button>
                <button><img src={sun} alt='sun-btn'/></button>
                <div className={style.persInfo}>
                    <img src='https://kartinkof.club/uploads/posts/2022-03/1648353437_2-kartinkof-club-p-ustavshii-chelovek-mem-2.jpg' alt='user-face'></img>
                    <p>Михаил Романов</p>
                </div>
            </div>
        </header>
    )
}





export default  Header