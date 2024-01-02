import { useEffect, useState } from 'react'
// import './App.css'
import UserList from './component/UserList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { useDispatch } from 'react-redux';
import data from './data.json'
import { GET_USERS } from './redux/reducerKeys';

function App() {
 const dispatch = useDispatch()
 useEffect(()=>{
  return()=>{dispatch({type:GET_USERS, payload:data})}
 },[])

  return (
    <>
      <Header />
      {/* <UserList /> */}
    </>
  )
}

export default App
