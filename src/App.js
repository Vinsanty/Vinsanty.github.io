import { BrowserRouter, Routes,Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import { setCountryThunkCreator } from './store/navReducer';
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage/TasksPage'


class App extends React.Component {
  
    componentDidMount(){
      this.props.setCountry()
    }

    render(){
      return (
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path = '/sciensy' element={<ContentContainer />}/>
              <Route path='/tasks' element={<TasksPage />}/>
            </Routes>
          </BrowserRouter>
        </div>
      );
    }
  }



let mapDispatchToProps = (dispatch)=>{
  return{
    setCountry(){
      dispatch(setCountryThunkCreator())
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
