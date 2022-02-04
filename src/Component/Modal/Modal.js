import React from 'react';

import styles from './Modal.module.css';

const Modal = props => {

    if(!props.show){
        return null
    }

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h4 className={styles.modal_title}>Title</h4>
                    </div>
                    <div className={styles.modal_body}>
                        Content
                    </div>
                    <div className={styles.modal_footer}>
                        <button onClick={props.onOk} className='button'>
                            Ok
                        </button>
                        <button onClick={props.onClose} className='button'>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
