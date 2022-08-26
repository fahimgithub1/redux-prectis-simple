import React, { Fragment } from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import {useSelector} from 'react-redux';
import UserProfile from "./components/UserProfile";


function App() {
  const isLogin = useSelector((state) => state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header />
      {!isLogin && <Auth />}
      {isLogin && <UserProfile />}
      {isLogin && <Counter />}
    </Fragment>
  )
}

export default App;
