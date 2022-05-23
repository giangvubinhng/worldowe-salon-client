import React, { useState }, { FC}  from 'react';
import styles from '../styles/Signup.module.css';
import { register } from '../services/user.service';
import { IUserBody, IUserRegister } from '../interfaces/IUser';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {fetchCurrentUserAsync} from "../features/userSlice";
import {useEffect} from "react";
import Router, { useRouter } from 'next/router';


const Account: FC = ({children, href: any}) => {

    const user = useAppSelector((state) => state.user.value);
	// You can use hooks here
	// const dispatch = useAppDispatch();
	// useEffect(() => {
	// 	dispatch(fetchCurrentUserAsync());
	// }, [dispatch]);

    const route = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        route.push(href)
    }
        
    return (
        <div>
           <div className="top">
                <div className="user-profile">
                    <div className="user-photo">
                        <img src="https://www.lenco-marine.com/wp-content/uploads/2021/04/user.png" height="250" width="250"></img>
                    </div>
                    
                    <div>
                        <a>
                            <span></span>
                            <span>Add a profile picture</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h3>Shop's info</h3>
                    <div>
                        <p>Account</p>
                        <p>{user.first_name}</p>
                    </div>

                    <div>
                        <button onClick={handleClick}>Change Password</button>

                    </div>


                    
                </div>

            </div> 
        </div>
    );
};

export default Account;
