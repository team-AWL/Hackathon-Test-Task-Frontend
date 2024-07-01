import styles from "@/app/needs/modal.module.css";

import React, { useState } from "react";

const ModalFound = ({ data }) => {

    const [activeContent, setActiveContent] = useState(1);

    const handleContentChange = (contentNumber) => {
        setActiveContent(contentNumber);
        console.log(data)
    };
    return (
        <div className={styles.modalFound}>
            <div className={styles.switcher}>
                <button
                    className={activeContent === 1 ? styles.activeButton : styles.button}
                    onClick={() => handleContentChange(1)}
                >
                    Monobank
                </button>
                <button
                    className={activeContent === 2 ? styles.activeButton : styles.button}
                    onClick={() => handleContentChange(2)}
                >
                    Реквізити
                </button>

            </div>
            {activeContent === 1 && (
                <div className={styles.content}>
                    <h2>Тут буде посилення на банку {data.donationUrl}</h2>
                </div>


            )}
            {activeContent === 2 && (
                <div className={styles.content}>
                    <h2>Тут будуть реквізити {data.donationUrl}</h2>
                </div>
            )}
        </div>
    );
};
export default ModalFound;