import { useEffect, useState } from 'react'
// import './App.css'
import UserList from './component/UserList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { useDispatch, useSelector } from 'react-redux';
import data from './data.json'
import { GET_USERS } from './redux/reducerKeys';
import { getUser } from './redux/reducer/userSlice';
import UnityGame from './component/Unity';
import { Get_Post_Api } from './redux/api/api';
import { getPosts } from './redux/actions/getPost';
// import { getPost } from './redux/reducer/postSlice';

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  console.log("in App component dispatch", selector)
  useEffect(() => {
    dispatch({ type: GET_USERS, payload: data })
    // const post = () => 
    // console.log("post", post())
    // dispatch(post())
    // const post = () => {
    //   return (dispatch) => fetch(Get_Post_Api, {})
    //     .then(res => res.json())
    //     .then(res => dispatch(getPosts(res)))
    // }

    dispatch(dispatch => async function () {
      const data = await fetch(Get_Post_Api, {})
      const post = await data.json()
      dispatch(getPosts(post))
    }()
    )

    // dispatch(getPost("lalchand"))

    return () => {
      dispatch(getUser(data))
    }
  }, [])

  return (
    <>
      {/* <Header /> */}
      {/* <UserList /> */}
      <UnityGame />
    </>
  )
}

export default App
