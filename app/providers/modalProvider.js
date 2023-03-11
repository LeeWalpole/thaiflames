import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const useModal = () => useContext(ModalContext);
const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const handleModal = (...ids) => {
    let updatedModals = { ...modals };
    ids.forEach((id) => {
      updatedModals[id] = !updatedModals[id];
    });

    setModals(updatedModals);
  };

  return (
    <ModalContext.Provider value={{ modals, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
