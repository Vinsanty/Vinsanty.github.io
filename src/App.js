import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import ContentContainer from './components/Content/ContentContainer';
import TasksPage from './components/TasksPage/TasksPage'
import HeaderContainer from './components/Header/HeaderContainer';




const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/training" replace />} />
          <Route path = '/training' element={<ContentContainer />}/>
          <Route path='/tasks' element={<TasksPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App




