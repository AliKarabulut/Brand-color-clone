import { Fragment, useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Fragment>
      {" "}
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className={styles.description}>
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <a onClick={toggleModal}>About BrandColors</a>
            </li>
            <li>
              <a href="https://brandcolors.net/" target='_blank'>Orginal Web Site</a>
            </li>
          </ul>
        </nav>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        bodyOpenClassName={styles.bodyOpen}
        appElement={document.getElementById('modal')}
      >
        <button className={styles.closeBtn} onClick={toggleModal}>
          <GrClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over 2 million pageviews. There are now over 600 brands
          with 1600 colors and the collection is always growing.
        </p>
      </Modal>
    </Fragment>
  );
};
export default Sidebar;
