import { useQuery } from 'react-query';
import marvelAPI from '../api/marvelAPI';
import heroesManagerAPI from '../api/heroesManagerAPI';

import { createContext, useState } from 'react';

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('');

  async function getHeroes({ limit = 10, offset = 0 }) {
    const res = await marvelAPI.get('/characters', {
      params: {
        limit: limit,
        offset: offset,
      },
    });

    if (!res.status) {
      throw new Error(res.error);
    }

    return res.data.data.results;
  }

  const {
    data: heroesData,
    isLoading: isLoadingHeroes,
    isError: isErrorHeroes,
  } = useQuery(['getHeroes'], () => getHeroes({ offset: 5, limit: 25 }));

  async function addHeroeToCandidates(heroe) {
    const res = await heroesManagerAPI.post('/candidates', {
      candidate_id: heroe.id,
      name: heroe.name,
      description: heroe.description,
      thumbnail: heroe.thumbnail.path + '.' + heroe.thumbnail.extension,
    });

    if (res) {
      alert('Herói adicionado a lista de candidatos');
    } else {
      alert('Houve algum erro');
    }
  }

  async function getCandidates() {
    const res = await heroesManagerAPI.get('/candidates/avaliable');

    return res.data;
  }

  const {
    data: candidatesData,
    isLoading: isLoadingCandidates,
    isError: isErrorCandidates,
  } = useQuery(['getCandidates'], () => getCandidates({}));

  return (
    <GlobalContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        heroesData,
        isLoadingHeroes,
        isErrorHeroes,
        candidatesData,
        isLoadingCandidates,
        isErrorCandidates,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
