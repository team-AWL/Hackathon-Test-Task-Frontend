import React, { useState } from 'react';
import styles from './modal.module.css';
import { registerFundraising, registerHumanitarianAid } from "@/util/api";

const Modal = ({ handleCloseModal }) => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

    const [formDataFundraising, setFormDataFundraising] = useState({
        description: "",
        forWhom: "",
        goalName: "",
        imageUrl: "",
        moneyGoal: "",
        needyThing: ""
    });

    const [formDataHumanitarianAid, setFormDataHumanitarianAid] = useState({
        city: "",
        description: "",
        needName: ""
    });

    const handleInputHumanChange = event => {
        const { name, value } = event.target;
        setFormDataHumanitarianAid(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormDataFundraising(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFundraising = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('accessToken');
            const responseData = await registerFundraising(formDataFundraising, token);
            console.log('Response data:', responseData);
            handleCloseModal();
            window.location.reload();
        } catch (error) {
            console.error('Error handling fundraising:', error);
        }
    };

    const handleHumanitarianAid = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('accessToken');
            const responseData = await registerHumanitarianAid(formDataHumanitarianAid, token);
            console.log('Response data:', responseData);
            handleCloseModal();
            window.location.reload();
        } catch (error) {
            console.error('Error handling fundraising:', error);
        }
    };

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setIsDropdownOpen1(false);
    };

    return (
        <div className={styles.modal}>
            <span style={{ fontSize: '24px' }} onClick={handleCloseModal}>Закрити</span>
            <h2 className={styles.title}>Бажаєш зареєструвати потребу?</h2>
            <p className={styles.dataInput}>Введи дані:</p>
            <div className={styles.selectWrapper}>
                <div
                    className={styles.selectedOption}
                    onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
                >
                    {selectedOption1 || 'Виберіть опцію'}
                    <img src="/arrow.svg" alt="Arrow" className={styles.arrowIcon} />
                </div>
                {isDropdownOpen1 && (
                    <div className={styles.optionsContainer} style={{ zIndex: 1 }}>
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick1('Збір')}
                        >
                            Збір
                        </div>
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick1('Гуманітарна допомога')}
                        >
                            Гуманітарна допомога
                        </div>
                    </div>
                )}
            </div>
            {selectedOption1 === 'Збір' && (
                <div className={styles.inputContainer1}>
                    <input
                        type="text"
                        name="goalName"
                        value={formDataFundraising.goalName}
                        onChange={handleInputChange}
                        placeholder="Назва"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name='forWhom'
                        value={formDataFundraising.forWhom}
                        onChange={handleInputChange}
                        placeholder="Для кого"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name='moneyGoal'
                        value={formDataFundraising.moneyGoal}
                        onChange={handleInputChange}
                        placeholder="Сума"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name='needyThing'
                        value={formDataFundraising.needyThing}
                        onChange={handleInputChange}
                        placeholder="На що збираєте"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name='description'
                        value={formDataFundraising.description}
                        onChange={handleInputChange}
                        placeholder="Опис"
                        className={styles.input}
                    />
                </div>
            )}
            {selectedOption1 === 'Гуманітарна допомога' && (
                <div className={styles.inputContainer2}>
                    <input
                        type="text"
                        name='needName'
                        value={formDataHumanitarianAid.needName}
                        onChange={handleInputHumanChange}
                        placeholder="Назва"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name='city'
                        value={formDataHumanitarianAid.city}
                        onChange={handleInputHumanChange}
                        placeholder="Місто"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name='description'
                        value={formDataHumanitarianAid.description}
                        onChange={handleInputHumanChange}
                        placeholder="Опис"
                        className={styles.input}
                    />
                </div>
            )}
            <button
                onClick={selectedOption1 === 'Збір' ? handleFundraising : handleHumanitarianAid}
                className={styles.registerButton}
                style={{
                    display: selectedOption1 ? 'block' : 'none',
                }}
            >
                Зареєструвати
            </button>
        </div>
    );
};

export default Modal;
