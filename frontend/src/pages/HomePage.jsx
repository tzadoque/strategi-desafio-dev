import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { MainContent } from '../components/Containers';
import { CardsGrid } from '../components/Grids';
import { HeroCard } from '../components/Cards';

export default function HomePage() {
  const { setPageTitle, heroesData, isLoadingHeroes, isErrorHeroes } =
    useContext(GlobalContext);

  useEffect(() => {
    document.title = 'MHM | Dashboard - Select candidates to form the teams.';
    setPageTitle('Dashboard - Select candidates to form the teams.');
  }, []);

  return (
    <MainContent>
      <CardsGrid>
        {isLoadingHeroes && <p>Carregando...</p>}
        {!isErrorHeroes &&
          heroesData &&
          heroesData.map(heroe => {
            return (
              <HeroCard
                name={heroe.name}
                thumb={heroe.thumbnail.path + '.' + heroe.thumbnail.extension}
                id={heroe.id}
                description={heroe.description}
                key={heroe.id}
              />
            );
          })}
      </CardsGrid>
    </MainContent>
  );
}
