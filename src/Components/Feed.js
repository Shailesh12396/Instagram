import React, { useContext, useEffect,useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { database } from '../firebase'
import UploadFile from './UploadFile'
import Posts from './Posts'
import NavBar from './NavBar'

function Feed() {
  const {user,logout}=useContext(AuthContext);
  const [userData,setUserData]=useState('')
  useEffect(()=>{
    const unsub=database.users.doc(user.uid).onSnapshot((snapshot)=>{
      setUserData(snapshot.data())
    })
    return ()=>{
      unsub();
    }
  },[user])
  return (
    <>
    <NavBar userData={userData}/>
    <div style={{display:'flex',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
      <div className="comp" style={{width:'50%'}}>
    {/* <h2>Welcome</h2>
    <button onClick={logout}>Logout</button> */}
    
    </div>
    <UploadFile user={userData}/>
    <Posts userData ={userData}/>
    </div>
    </>
  )
}

export default Feed