import './navbar.scss';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUsername, selectUserPhoto, selectUserLoginDetails, setUserLoginDetails } from '../features/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUsername);
    const userPhoto = useSelector(selectUserPhoto);


    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);

            }).catch((error) => {
                console.log(error)

            });
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    return (
        <nav className='navbar'>
            <div className="nav-item">
                <a href="/">
                    <img id="nav-logo" src="/images/logo.svg" alt="" />
                </a>

                {userName &&
                    <div className="items">
                        <div className="item">
                            <a href="/">
                                <img className="icon" src="/images/home-icon.svg" alt="" />
                                <span className="text">HOME</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/">
                                <img className="icon" src="/images/search-icon.svg" alt="" />
                                <span className="text">SEARCH</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/">
                                <img className="icon" src="/images/watchlist-icon.svg" alt="" />
                                <span className="text">WATCHLIST</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/">
                                <img className="icon" src="/images/original-icon.svg" alt="" />
                                <span className="text">ORIGINALS</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="/">
                                <img className="icon" src="/images/movie-icon.svg" alt="" />
                                <span className="text">MOVIES</span>
                            </a>
                        </div>

                    </div>
                }
            </div>


            {userName ?
                <div className="nav-item">
                    <img src={userPhoto} alt={userName} />
                </div>
                :
                <div className="nav-item">
                    <button className="btn-login" onClick={handleAuth}>LOGIN</button>
                </div>
            }

        </nav>
    )
}

export default Navbar;