import { PartySuggestions } from "react-dadata"
import {  useState } from "react"
import style from "./TasksPage.module.css"
import 'react-dadata/dist/react-dadata.css'
import CompanyData from "./CompanyData/CompanyData"

const TasksPage = (props) =>{

    let [value,setValue] = useState()

    return(
        <div className={style.mainTasksBox}>
            <div className={style.companyTaskBox}>
                <div>
                    <p>Поиск компании по названию или ИНН</p>
                    <PartySuggestions  token='379d205731fa735d99149f7ddfde5e71d37e1ac0'  value={value} onChange={setValue} /></div>
                
                {value &&
                    <CompanyData value={value.value} inn = {value.data.inn} address={value.data.address.value} 
                    general={value.data.management.name} status={value.data.state.status}/>
                }
            </div>
        </div>
        
    )
}

export default TasksPage