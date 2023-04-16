import style from './CompanyData.module.css'


const CompanyData = (props)=>{

 
    return(
        <div className={style.companyDataBox}>
           <h3>Информация о найденой компании</h3>
           <div>
                <p>Наименование: {props.value}</p>
                <p>ИНН: {props.inn}</p>
                <p>Адрес: {props.address}</p>
                <p>Руководитель: {props.general}</p>
                <p>Статус: {props.status}</p>
           </div>
        </div>
    )
}

export default CompanyData