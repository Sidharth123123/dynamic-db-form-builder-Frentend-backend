import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


import  Form from './Component/Form';
import Login from './Component/Login'
import Deshboard from './Component/Deshboard'
import CreateDatabasePage from './Component/CreateDatabasePage'   
import ObjectForm from "./Component/ObjectForm";
import ColumnForm from "./Component/ColumnForm"
import ManagePage from './Component/ManagePage'
import { Button } from '@mui/material';
import ButtonPage from './Component/ButtonPage'



function App() {
  return (
   
   <>
      <BrowserRouter>

        <Routes>


<Route path="/Form" element={<Form />} />
<Route path='/login' element={<Login/>}/>
<Route path='dashboard' element={<Deshboard/>}/>
<Route path='CreateDatabasePage' element={<CreateDatabasePage/>}/>
        <Route path="/object" element={<ObjectForm />} />
        <Route path='/column' element={<ColumnForm/>}/>
        <Route path= '/ManagePage' element={<ManagePage/>}/>

        <Route path='/ButtonPage' element={<ButtonPage/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;








