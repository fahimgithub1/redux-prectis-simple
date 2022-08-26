import classes from './Header.module.css';
import { authActons } from '../store';
import { useDispatch,useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.auth.isAuthenticated);

    const logOutHandel = () => {
        dispatch(authActons.logout());
    }

    const nav = <nav>
                    <ul>
                    <li>
                        <a href='/'>My Products</a>
                    </li>
                    <li>
                        <a href='/'>My Sales</a>
                    </li>
                    <li>
                        <button onClick={logOutHandel}>Logout</button>
                    </li>
                    </ul>
                </nav>
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isLogin && nav}
     
    </header>
  );
};

export default Header;