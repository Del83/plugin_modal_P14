import Modal from "../lib/index.js";
import React, { useState } from "react";

export default function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const handleModal = () => {
    if (displayModal) {
      setDisplayModal(false);
      return;
    } else {
      setMessageModal("hello !!");
      setDisplayModal(true);
      return;
    }
  };

  return (
    <div style={{ width: 640, margin: "15px auto" }}>
      <h1>Hello React</h1>
      <button onClick={handleModal}>Open Modal</button>
      <Modal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        messageModal={messageModal}
      />
    </div>
  );
}
