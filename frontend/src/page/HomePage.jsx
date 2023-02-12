import { MainContainer } from '../components/Container';
import { OutlineSecondaryLink } from '../components/Links';

export default function HomePage() {
  return (
    <MainContainer>
      hello world by home
      <OutlineSecondaryLink to='/components'>Componentes</OutlineSecondaryLink>
    </MainContainer>
  );
}
