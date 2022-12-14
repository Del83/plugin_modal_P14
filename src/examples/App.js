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
      setMessageModal("The modal window is open");
      setDisplayModal(true);
      return;
    }
  };

  return (
    <div style={{ width: 640, marginTop: "45px" }}>
      <header className="modal-header">
        <h1 className="modal-title">react-modal</h1>
        <h2 className="modal-description">An accessible React modal dialog component</h2>
      </header>
      <main >
        <button className="button-open" onClick={handleModal}>Open Modal</button>
        <Modal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          messageModal={messageModal}
          />
      </main>
      <footer className="modal-footer">
        <p>Copyright © 2022 - Plugin created by Delphine Pennehouat</p> 
      </footer>
    </div>
  );
}
