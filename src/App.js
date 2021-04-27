import React, { useState } from 'react'
import SignIn from './SignIn'
import Logo from './Logo'
import Nav from './Nav'



function App() {
  let [userLoggedIn, setUserLoggedIn] = useState(true)
  
  const signOut = ()=>{
    setUserLoggedIn(false)
  }

  return (
    (!userLoggedIn) 
    ? <SignIn />
    : <Home signOut={signOut}/>
    );
}

const Home = ({signOut})=>{
  return (
    <div>
      <Logo/>
      <Nav signOut={signOut}/>
      <div>
        <p>Mirbek, your entry count is 0</p>
        <input type="text" />
        <input type="submit" value="analyze"/>
      </div>
      <div>
        <img src="#" alt="pictures"/>
      </div>
    </div>
  )
}

export default App;
