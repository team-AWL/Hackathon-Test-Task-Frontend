import React from 'react';
import styles from './extraHelp.module.css';

const ExtraHelp = () => {
    return (
        <div className={styles.extraHelpContainer}>
            <h2 className={styles.title}>Нагальна потреба</h2>
            <div className={styles.sectionsContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.item}>
                        <span className={styles.itemText}>потрібна сума</span>
                        <span className={styles.itemNumber}>100 000 +</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.itemText}>тактичні рюкзаки</span>
                        <span className={styles.itemNumber}>15</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.itemText}>Бригада</span>
                        <span className={styles.itemNumber}>128</span>
                    </div>
                    <div className={styles.quote}>
                        <span className={styles.quoteText}>"</span>
                        <p className={styles.quoteContent}>
                            Ми, 128 бригада, стоїмо на передовій, де кожен день зустрічаємося з різноманітними викликами та труднощами. У зв'язку з постійною потребою у підтримці, ми звертаємося до вас з проханням про необхідність рюкзаків.
                        </p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />
                    <div className={styles.learnMoreContainer}>
                        <div className={styles.learnMore}>
                            <p className={styles.learnMoreText}>Дізнатись більше</p>
                            <img src="/main-page/arrow2.svg" alt="Arrow" className={styles.arrowIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraHelp;