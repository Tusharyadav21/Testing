import React, { useState, forwardRef, useImperativeHandle } from 'react';

import styles from './MessageBox.module.css';

const MessageBox = forwardRef((props, ref) => {

    const [showMessage, setShowMessage] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false);
            }, 3000)
        },
    }));


    return (
        <div
            className={`${styles.snackbar} ${props.type === "Success" ? styles.success : ""} ${props.type === "fail" ? styles.fail : ""} ${showMessage ? styles.show : styles.hide}`}
        // id={showMessage ? "show" : "hide"}
        >
            <div className={styles.symbol}>{props.type === "Success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}</div>
            <div className={styles.message}>{props.message}</div>
        </div>
    );
});

export default MessageBox;