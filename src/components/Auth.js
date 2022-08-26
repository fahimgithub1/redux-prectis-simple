import classes from './Auth.module.css';
import {useDispatch } from 'react-redux';
import { authActons } from '../store/index';
import { useRef } from 'react';

const Auth = () => {
    const dispatch = useDispatch();
    // const isLogin = useSelector((state) => state.auth.isLogin);

    const inputpass = useRef();
    const inputEmail = useRef();

    const loginHandle = () =>{

        const inputpassl = inputpass.current.value.trim();
        if(inputpassl.length > 1 && inputEmail.current.value.includes("@")){
            dispatch(authActons.login());

        }
            

    }

  return (
    <main onSubmit={loginHandle} className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={inputEmail} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={inputpass} type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
