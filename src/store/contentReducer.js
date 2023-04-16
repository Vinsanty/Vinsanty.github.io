const INCREACE_COMPLTASKS = 'INCREACE_COMPLTASKS'
const RETRY_START = 'RETRY_START'


let initialState = {
    cards:[
        {id:1,title: "Добро пожаловать!",category1:"Для новичка",category2:"Основы работы",allTasks:10,complTasks:10,isStarted:false,isDone:true},
        {id:2,title: "Начало работы",category1:"Для новичка",category2:"Основы работы",allTasks:10,complTasks:9 ,isStarted:true,isDone:false},
        {id:3,title: "Введение в рабочую среду",category1:"Для новичка",category2:"Основы работы",allTasks:255,complTasks:0,isStarted:false,isDone:false}
    ],
    catalog:[
        {id:4,title: "Начало работы",category1:"Для новичка",category2:"Основы работы",allTasks:10,complTasks:10,isStarted:true,isDone:false},
        {id:5,title: "Работа с библиотеками GPN",category1:"Профессионалу",category2:"Библиотеки",allTasks:255,complTasks:10,isStarted:false,isDone:false},
        {id:6,title: "Введение в рабочую среду",category1:"Профессионалу",category2:"Библиотеки",allTasks:10,complTasks:10,isStarted:false,isDone:false},
        {id:7,title: "Начало работы",category1:"Для новичка",category2:"Основы работы",allTasks:10,complTasks:10,isStarted:true,isDone:false},
        {id:8,title: "Работа с библиотеками GPN",category1:"Профессионалу",category2:"Библиотеки",allTasks:255,complTasks:10,isStarted:false,isDone:false},
        {id:9,title: "Введение в рабочую среду",category1:"Профессионалу",category2:"Библиотеки",allTasks:10,complTasks:10,isStarted:false,isDone:false},
    ]
}


const contentReducer = (state=initialState,action)=>{
    switch(action.type){
        case INCREACE_COMPLTASKS:{
            return {...state,
                cards: [...state.cards.map(c=>{
                    if (action.id === c.id){
                        if(action.value === c.allTasks){
                            return {...c,isDone:true,isStarted:false}
                        }
                        else{
                            return {...c,complTasks:action.value}
                        } 
                    }
                    else{
                        return c 
                    }
                })],
                catalog:[...state.catalog.map(c=>{
                    if (action.id === c.id){
                        if(action.value === c.allTasks){
                            return {...c,isDone:true,isStarted:false}
                        }
                        else{
                            return {...c,complTasks:action.value}
                        } 
                    }
                    else{
                        return c 
                    }
                })],
            }
        }
        case RETRY_START:{
            return {...state,
                cards: [...state.cards.map(c=>{
                    if(action.id === c.id){
                        return {...c,isStarted:true,isDone:false,complTasks:0}
                    }
                    else{
                        return c
                    } 
                })],
                catalog:[...state.catalog.map(c=>{
                    if(action.id === c.id){
                        return {...c,isStarted:true,isDone:false,complTasks:0}
                    }
                    else{
                        return c
                    } 
                })]
            }
        }
        default:{
            return state
        }
    }
}


export const increaceAC = (id,value) =>{
    return {type : INCREACE_COMPLTASKS,id,value}
}

export const retryAC = (id) =>{
    return {type:RETRY_START,id}
}

export default contentReducer