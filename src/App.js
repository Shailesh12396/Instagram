import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Feed from './Components/Feed'
import { BrowserRouter,Routes, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import { Fragment } from 'react';
import Profile from './Components/Profile'; 
import Forgot from './Components/Forgot';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>

     <Routes>
  
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element ={<Signup/>}/>
     <Route path="/profile/:id" element ={<PrivateRoute><Profile/></PrivateRoute>}/>
     <Route path="/" element ={<PrivateRoute><Feed/></PrivateRoute>}/>
     <Route path="/forgot" element ={<Forgot/>}/>


     {/* <PrivateRoute path="/" component={Feed}/> */}
    </Routes>

    </AuthProvider>
 
    </BrowserRouter>
  );
}

export default App;
