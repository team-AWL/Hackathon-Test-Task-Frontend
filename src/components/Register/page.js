import './auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Registration() {
    const navigate = useNavigate();
    const [wantToAskHelp, setWantToAskHelp] = useState(null);

    const handleWantToAskHelp = () => {
        setWantToAskHelp(true);
        localStorage.setItem('wantToAskHelp', JSON.stringify(true));
    };

    const handleDontWantToAskHelp = () => {
        setWantToAskHelp(false);
        localStorage.removeItem('wantToAskHelp');
    };

    const handleNextStep = () => {
        if (wantToAskHelp !== null) {
            navigate('/register/stage1');
        }
    };

    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Реєстрація</h2>
                    <div className='stages_container'>
                        <div className='stage'>1</div>
                        <div className='arrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                                <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 9H63V7H0V9Z" fill="black" />
                            </svg>
                        </div>
                        <div className='stage'>2</div>
                    </div>
                    <p>З якою метою ви реєструєтесь?</p>
                    <button
                        onClick={handleDontWantToAskHelp}
                        className={wantToAskHelp === false ? 'selected' : ''}
                    >
                        Я прагну допомогти
                    </button>
                    <button
                        onClick={handleWantToAskHelp}
                        className={wantToAskHelp === true ? 'selected' : ''}
                    >
                        Хочу зробити запит про потребу
                    </button>
                    <div className='functional_buttons'>
                        <Link to='/'>Повернутись на головну</Link>
                        {wantToAskHelp !== null && (
                            <button className='continue' type="submit" onClick={handleNextStep} >Далі</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
