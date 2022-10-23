import "@babel/polyfill";
import "./modal.css"

/**
* Modal component
* @component
*/
export default function Modal ( { displayModal, setDisplayModal, messageModal}) {

 
  const handleDisplay = () => {setDisplayModal(!displayModal)};

    return (
        <section className={ displayModal ? "modal" : "display"}>
            <div className="modal-ctn">
              <button className="modal-close" onClick={handleDisplay}>X</button>
              <p>{messageModal}</p>
            </div>
        </section>
    )
}