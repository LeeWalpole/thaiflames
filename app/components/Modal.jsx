"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, id, setIsOpen, children }) => {
  const modalRoot = useRef(null);

  useEffect(() => {
    if (!modalRoot.current) {
      modalRoot.current = document.createElement(`div-${id}`);
      document.body.appendChild(modalRoot.current);
    }
    return () => document.body.removeChild(modalRoot.current);
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalBoxSlideup}>{children}</div>
      <span className={styles.modalBg} onClick={() => setIsOpen(id)}></span>
    </div>,
    modalRoot.current
  );
};

export default Modal;

/*
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from '@/styles/Modal.module.css'

const Modal = ({ isOpen, id, setIsOpen, children }) => {
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
        <span className={styles.modalBg} onClick={() => setIsOpen(id)}></span>
    </div>,
    modalRoot.current
  );
}


export default Modal
*/
