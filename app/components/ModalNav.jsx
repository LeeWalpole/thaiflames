import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from '@/styles/Modal.module.css'

const ModalNav = ({ isOpen, id, setIsOpen, children, parentSetIsOpen }) => {
  const modalRoot = useRef(null);
  useEffect(() => {
    if (!modalRoot.current) {
      modalRoot.current = document.createElement(`div-${id}`);
      document.body.appendChild(modalRoot.current);
    }
    return () => document.body.removeChild(modalRoot.current);
  }, [id]);
  if (!isOpen) {
    return null
  }
  

  return createPortal(
    <div className={styles.modal}>
        <div className={styles.modalBoxSlideup}>
          {children}
        </div>
        <span className={styles.modalBg} onClick={() => {
          setIsOpen(false);
          parentSetIsOpen(false);
        }}></span>
    </div>,
    modalRoot.current
  );
}


export default ModalNav
