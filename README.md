# MODAL WINDOW PLUGIN

`React component`

![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### 1. Project

---

A simple JavaScript modal component for React Native.

### 2. Project technologies

---

- [React](https://fr.reactjs.org/) (18.2.0)
- [Babel-cli](https://babeljs.io/) (6.26.0)
- [JSdoc](https://jsdoc.app/) (3.6.11)

### 3. Project prerequisites

---

- [Node.js](https://nodejs.org/) (12.18.0)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (1.22.19)

### 4. Project installation

---

Install all the dependencies :

```sh
npm i @del83/plugin_modal_p14
```

Import it into the project :

```sh
import Modal from "@del83/plugin_modal_p14/dist";
```

### 5. Project starting

---

Start using the front-end

```sh
yarn start
```

### 6. Examples

---

Perhaps better than long paragraphs, here's a quick
preview of what you could achieve with plugin_modal_p14 in a few lines of code:

![alt text](https://github.com/Del83/plugin_modal_p14/blob/master/demo1.png "demo1")![alt text](https://github.com/Del83/plugin_modal_p14/blob/master/demo2.png "demo2")

![](./demo_plugin_modal.gif)

```sh
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
      <header>
        <h1>react-modal</h1>
        <h2>An accessible React modal dialog component</h2>
      </header>
      <main >
        <button className="button-open" onClick={handleModal}>Open Modal</button>
        <Modal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          messageModal={messageModal}
          />
      </main>
      <footer>
        <p>Copyright © 2022 - Plugin created by Delphine Pennehouat</p>
      </footer>
    </div>
  );
}
```

### 7. Props

---

| Label           |    Type    | Required | Default |
| :-------------- | :--------: | :------: | :-----: |
| displayModal    |  boolean   |   Yes    |  False  |
| setDisplayModal | callback() |   Yes    |   N/A   |
| messageModal    |   string   |   Yes    |   N/A   |
