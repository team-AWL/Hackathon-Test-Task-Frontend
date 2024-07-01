import { useState } from "react";
import '../../Register/auth.css'
import { login } from "../../../util/api";
import { useRouter } from "react";

export default function SentEmailAgain() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: "",
        password: ""

    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Вхід</h2>
                    <p className='under_main_text'>Забули пароль?</p>
                    <p className='text_in_sent_email_again'>На вказану адресу буде надіслане повідомлення з інструкціями щодо відновлення паролю</p>
                    <div className='email-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" opacity='80%' width="89" height="89" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>                    </div>
                    <p className='text_in_sent_email_again'>Якщо ви не отримали email, перевірте Спам або спробуйте ввести іншу електронну адресу</p>
                    <div className='enter'>
                        {/*<Link href='/'>Повернутись на головну</Link>*/}
                        <button className='continue' type="submit">Надіслати знову</button>
                    </div>
                </div>
            </div>
        </div>
    )
}