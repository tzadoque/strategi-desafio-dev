import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { MainContent } from '../components/Containers';
import { CardsGrid } from '../components/Grids';
import { HeroCard } from '../components/Cards';

export default function CandidatesPage() {
  const {
    setPageTitle,
    candidatesData,
    isLoadingCandidates,
    isErrorCandidates,
  } = useContext(GlobalContext);

  useEffect(() => {
    document.title = 'MHM | Dashboard';
    setPageTitle('Candidates - form teams with the presented candidates.');
  }, []);

  return (
    <MainContent>
      <CardsGrid>
        {isLoadingCandidates && <p>Carregando...</p>}
        {!isErrorCandidates &&
          candidatesData &&
          candidatesData.map(heroe => {
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
