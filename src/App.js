import React from "react";
import { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.production.min";
import Loader from "./Component/loader/Loader";

// Components
// import Weather from './Component/Weather';
// import MessageBox from './Component/MessageBox/MessageBox';
// import Modal from './Component/Modal/Modal';

import styles from "./App.Module.css";

function App() {
	// const [show, setShow] = useState(false)
	// const [head, setHead] = useState("HEllo");
	// const [text, setText] = useState("world");

	// const MessageRef = useRef(null)

	// handleSubmit = (e) => {
	// 	console.log("CLicked");
	// };

	// useEffect(() => console.log(head + " " + text), [text]);

	return (
		<>
			<Loader />
			{/* <div>Count</div> */}
			{/* <div>{head}</div> */}
			{/* <div className={styles.body}> */}
			{/* Message */}

			{/* <h1 style={fun}>React App</h1> */}
			{/* <p style={{ fontSize: "34" }}>React App</p> */}
			{/* <h1>React App</h1> */}

			{/* <button onClick={handleSubmit}>Press</button> */}

			{/* Modal */}
			{/* <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal onClose={() => setShow(false)} onOk={() => setShow(false)} show={show} /> */}

			{/* Message Box */}
			{/* <button onClick={() => { MessageRef.current.show() }}>Message</button>
        <MessageBox ref={MessageRef} message="Successful Notification" type="Success" /> */}
			{/* </div> */}
		</>
	);
}

export default App;
