"use client"

import React, { useEffect, useState } from 'react';
import Modal from './modal';
import styles from './needs.module.css';
import { router } from "next/client";
import { useRouter } from "next/navigation";
import { getCurrentUser, getNeedFundraising, getNeedHumanitariam } from "@/util/api";
import ModalFound from "@/app/needs/modal_make_found";

const Needs = () => {
    const [fundraisingData, setFundraisingData] = useState([]);
    const [dataHumanitarian, setHumanitarianData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const dataFundraising = await getNeedFundraising(token);
                    const dataHumanitarian = await getNeedHumanitariam(token);

                    if (dataFundraising && Array.isArray(dataFundraising)) {
                        setFundraisingData(dataFundraising);
                    }

                    if (dataHumanitarian && Array.isArray(dataHumanitarian)) {
                        setHumanitarianData(dataHumanitarian);

                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, []);
    // const [isHelper, setIsHelper] = useState(false);
    const isHelper = !localStorage.getItem('wantToAskHelp')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const userData = await getCurrentUser(token);
                    console.log(userData);
                    setIsHelper(userData.isHelper);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    });
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [showModalFound, setShowModalFound] = useState(false);

    const [activeContent, setActiveContent] = useState(1);


    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleContentChange = (contentNumber) => {
        setActiveContent(contentNumber);
    };
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <p
                onClick={() => {
                    router.push('/');
                }}
                className={styles.main}
            >
                Головна / <span className={styles.needText}>Потреби</span>
            </p>
            <div className={styles.needsText}>Потреби</div>
            <div className={styles.needsContainer}>
                <div className={styles.leftSection}>
                    <p className={styles.leftSectionText}>
                        На цій сторінці ви знайдете інформацію про термінові потреби людей,
                        військових та інших осіб, які потребують допомоги в різних сферах життя.
                    </p>
                    {isHelper ?
                        null
                        : (<button className={styles.registerButton} onClick={toggleModal}>
                            Зареєструвати потребу
                        </button>)}
                    {showModal && <Modal handleCloseModal={handleCloseModal} />} {/* Render the modal component if showModal is true */}
                </div>
                <div className={styles.rightSection}>
                    <img src="/flag.svg" alt="Flag" className={styles.flagImage} />
                </div>
            </div>
            <div>
                <div className={styles.footeremail2}>
                    <input type="text" placeholder="" />
                </div>
            </div>
            <div className={styles.switcher}>
                <button
                    className={activeContent === 1 ? styles.activeButton : styles.button}
                    onClick={() => handleContentChange(1)}
                >
                    Активні збори
                </button>
                <button
                    className={activeContent === 2 ? styles.activeButton : styles.button}
                    onClick={() => handleContentChange(2)}
                >
                    Гуманітарна допомога
                </button>
                <button
                    className={activeContent === 3 ? styles.activeButton : styles.button}
                    onClick={() => handleContentChange(3)}
                >
                    Психологічна підтримка
                </button>
            </div>
            <div className={styles.extraHelpContainer}>
                <div className={styles.sectionsContainer}>
                    {activeContent === 1 && (
                        <>
                            {fundraisingData.map((item, index) => (
                                <div key={index}>
                                    <div className={styles.titleContainer}>
                                        <h2 className={styles.title}>{item.goalName}</h2>
                                        <img src="/mark.svg" alt="Mark" className={styles.markImage} />
                                    </div>
                                    <div className={styles.divided}>
                                        <div className={styles.leftSection1}>
                                            <div className={styles.item}>
                                                <span className={styles.itemText}>потрібна сума</span>
                                                <span className={styles.itemNumber}>{item.moneyGoal}</span>
                                            </div>
                                            <div className={styles.item}>
                                                <span className={styles.itemText}>Потреба</span>
                                                <span className={styles.itemNumber}>{item.needyThing}</span>
                                            </div>
                                            <div className={styles.item}>
                                                <span className={styles.itemText}>Бригада</span>
                                                <span className={styles.itemNumber}>{item.forWhom}</span>
                                            </div>
                                            <div className={styles.quote}>
                                                <span className={styles.quoteText}>"</span>
                                                <p className={styles.quoteContent}>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className={styles.rightSection1}>
                                            <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />

                                            <button onClick={() => setShowModalFound(true)} className={styles.registerButton}>Зробити внесок</button>
                                            {showModalFound && <ModalFound data={fundraisingData[index]} />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    {activeContent === 2 && (
                        <>
                            {dataHumanitarian.map((item, index) => (
                                <div key={index}>
                                    <div className={styles.titleContainer}>
                                        <h2 className={styles.title}>{item.needName}</h2>
                                        <img src="/mark.svg" alt="Mark" className={styles.markImage} />
                                    </div>
                                    <div className={styles.divided}>
                                        <div className={styles.leftSection1}>
                                            <div className={styles.item}>
                                                <span className={styles.itemText}>Місто</span>
                                                <span className={styles.itemNumber}>{item.city}</span>
                                            </div>
                                            <div className={styles.quote}>
                                                <span className={styles.quoteText}>"</span>
                                                <p className={styles.quoteContent}>{item.description}</p>
                                            </div>
                                        </div>
                                        <div className={styles.rightSection1}>
                                            <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    {activeContent === 3 && (
                        <div>
                            <div className={styles.divided1}>
                                <div className={styles.leftSection1}>
                                    <div className={styles.item}>
                                        <span className={styles.itemText1}>Павленко Максим Олегович</span>
                                    </div>
                                    <div className={styles.quote}>
                                        <span className={styles.quoteText}>"</span>
                                        <p className={styles.quoteContent}>психолог з великим досвідом та глибоким
                                            розумінням людської психіки. Я відомий своєю ефективністю в роботі з тривожністю,
                                            депресією, стресом та відносинами, та завжди готовий допомогти своїм клієнтам
                                            знайти внутрішню гармонію та розвити стратегії самовдосконалення.</p>
                                    </div>
                                </div>
                                <div className={styles.rightSection1}>
                                    <img src="person1.svg" alt="Extra" className={styles.extraImage} />
                                    <div className={styles.learnMoreContainer}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Needs;
