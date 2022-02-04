import React, { useState, useRef } from 'react';
// import Weather from './Component/Weather';
import styles from './App.Module.css';
// import MessageBox from './Component/MessageBox/MessageBox';
// import Modal from './Component/Modal/Modal';


function App() {

  // const [show, setShow] = useState(false)

  // const MessageRef = useRef(null)

  return (
    <>
      <div className={styles.body}>
        {/* Message */}



        {/* Modal */}
        {/* <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal onClose={() => setShow(false)} onOk={() => setShow(false)} show={show} /> */}


        {/* Message Box */}
        {/* <button onClick={() => { MessageRef.current.show() }}>Message</button>
        <MessageBox ref={MessageRef} message="Successful Notification" type="Success" /> */}
      </div>
    </>
  );
}

export default App;
