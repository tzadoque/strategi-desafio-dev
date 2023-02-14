import { createContext, useState } from 'react';
import { Alert } from '../components/Alert';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('Page Title');

  const [modal, setModal] = useState();
  const [showModal, setShowModal] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        headerTitle,
        setHeaderTitle,
        modal,
        setModal,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
