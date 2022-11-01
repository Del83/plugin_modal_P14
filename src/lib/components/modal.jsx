import propTypes from 'prop-types';
import "./modal.css"

/**
* Modal component
* @param {bool} display modal display
* @param {func} setDisplay modal state change
* @param {string} message modal message
* @component
*/
export default function Modal ( { displayModal, setDisplayModal, messageModal}) {

  const handleDisplay = () => {setDisplayModal(!displayModal)};

    return (
        <section className={ displayModal ? "modal" : "display"}>
          <div className='modal-ctn'>
            <button className="modal-close" onClick={handleDisplay}>X</button>
            <div className="modal-content">
              <p>{messageModal}</p>
            </div>
          </div>
        </section>
    )
}

Modal.propTypes = {
  display: propTypes.bool, 
  setDisplay: propTypes.func,
  message: propTypes.string,
}
