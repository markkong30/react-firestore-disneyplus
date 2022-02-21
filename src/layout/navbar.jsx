import React, { useState, useEffect, useRef } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, } from 'react-router-dom';
import { selectUsername, selectUserPhoto, selectUserLoginDetails, setUserLoginDetails, setSignOutState } from '../features/userSlice';

import './navbar.scss';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUsername);
    const userPhoto = useSelector(selectUserPhoto);

    const [userImgDropdown, setUserImgDropdown] = useState(false);
    const menuRef = useRef();
    const location = useLocation();


    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                if (location.pathname == '/') {
                    history.push('/home')
                }
            }
        })
    }, [userName])

    useEffect(() => {
        if (menuRef.current == undefined) {
            return;
        }

        let handler = e => {
            if (!menuRef.current.contains(e.target)) {
                setUserImgDropdown(false);
                document.removeEventListener('mousedown', handler)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [userImgDropdown])


    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log(result);
                    setUser(result.user);

                }).catch((error) => {
                    console.log(error)

                });
        } else if (userName) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                history.push('/')
            }).catch((error) => {
                console.log(error)
            });
        }

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
                <a href={userName ? '/home' : '/'}>
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
                <div className="nav-item nav-img" ref={menuRef}>
                    <img id="user-img" src={userPhoto} alt={userName} onClick={() => setUserImgDropdown(userImgDropdown => !userImgDropdown)} />
                    {/* <span className='down'>&#62;</span> */}
                    {userImgDropdown && <span className='sign-out' onClick={handleAuth}>Sign out</span>}
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