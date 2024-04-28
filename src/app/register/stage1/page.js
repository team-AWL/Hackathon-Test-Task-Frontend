'use client'
import React, { useState } from 'react';
import {ACCESS_TOKEN, GOOGLE_AUTH_URL} from "@/constants";

import Link from "next/link";
import { signup } from '@/util/api'; // Import your signup function
// import Alert from 'path_to_alert_component'; // Import your Alert component
import '../auth.css'
import {useRouter} from "next/navigation";
export default function Registration({ history }) {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        isHelper: !localStorage.getItem("wantToAskHelp"),
        lastName: "",
        password: ""

    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        console.log(formData)
        signup(formData)
            .then(response => {
                  router.push('/register/stage1/stage2')
                console.log(response.data.isHelper)
                  return response.data

            })

            .catch(error => {
                console.log(error)
            });
    };

    return (
            <div className='wrapper'>
                <div className='registration_container'>
                    <div className='registration_table'>
                        <h2 className='main_text'>Реєстрація</h2>
                        <div className='stages_container'>
                            <div className='stage one'>1</div>
                            <div className='arrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                                    <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z" fill="black"/>
                                </svg>
                            </div>
                            <div className='stage'>2</div>

                        </div>
                        <p>Вкажіть актуальну інформацію про вас</p>
                        <form onSubmit={handleSubmit}>
                            <div className='inputs_container'>
                                <div className='inputs_table'>
                                    <label>Ваше ім'я</label>
                                    <input
                                        type='text'
                                        name='firstName'
                                        placeholder="Ім'я"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label>Ваш Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <label>Ваш пароль</label>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder="Пароль"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <a style={{cursor:"pointer"}} href={GOOGLE_AUTH_URL} className="login-with-google-btn" >
                                        Швидка авторизація
                                    </a>
                                </div>

                            </div>

                            <div className='functional_buttons'>
                                <Link href='/register'>Назад</Link>
                                <button className='continue' type="submit">Далі</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}