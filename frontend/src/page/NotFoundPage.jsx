import { useContext, useEffect, useRef } from 'react';
import { CenterContainer } from '../components/Container';
import { Heading1 } from '../components/Text';
import { GlobalContext } from '../context/GlobalContext';

export default function NotFoundPage() {
  const { setHeaderTitle } = useContext(GlobalContext);

  useEffect(() => {
    setHeaderTitle('Page not found');
  }, []);

  return (
    <CenterContainer>
      <Heading1>404 Not Found Page</Heading1>
    </CenterContainer>
  );
}
