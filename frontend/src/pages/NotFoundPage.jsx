import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function NotFoundPage() {
  const { setPageTitle } = useContext(GlobalContext);

  useEffect(() => {
    document.title = 'MHM | Not Found page';
    setPageTitle('Not Found');
  }, []);

  return <h1>not found</h1>;
}
