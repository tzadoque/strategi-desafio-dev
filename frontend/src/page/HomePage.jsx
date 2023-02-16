import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import marvelAPI from '../api/marvelAPI';
import { useInfiniteQuery, useQueries, useQuery } from 'react-query';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import PlusIcon from '../assets/plus-lg.svg';

// my components
import { Table } from '../components/Table';
import { MainContainer } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { Avatar } from '../components/Image';
import { BodyText1 } from '../components/Text';
import { PrimaryButton } from '../components/Button';

// hooks
import useTruncate from '../hooks/useTruncate';

export default function HomePage() {
  const { setHeaderTitle } = useContext(GlobalContext);
  useEffect(() => {
    setHeaderTitle('Heroes - Find candidates to form your teams');
  }, []);

  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const nextPage = () => {
    setOffset(page * 10);
    setPage(page + 1);
  };

  const prevPage = () => {
    if (offset >= 10) {
      setOffset(page - 10);
    }

    if (page > 0) {
      setPage(page - 1);
    }
  };

  const {
    data: heroes,
    isLoading,
    isError,
  } = useQuery(
    ['get_marvel_characters', page],
    async () => {
      const res = await marvelAPI.get('/v1/public/characters', {
        params: {
          offset: offset,
        },
      });

      return res.data.data.results;
    },
    {
      keepPreviousData: true,
    }
  );

  const addHeroToCandidates = async hero => {
    const new_candidate = {
      name: hero.name,
      description: hero.description || 'This hero has no description.',
      thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    };

    const response = await axios.post(
      'http://localhost:8000/candidates',
      new_candidate
    );

    alert(`The hero "${hero.name}" was added to the candidate list.`);
  };

  return (
    <MainContainer>
      <Table optionName='Add'>
        {isLoading ? (
          <BodyText1>Loading...</BodyText1>
        ) : (
          heroes.map(hero => (
            <div className='tr' key={hero.id}>
              <div className='td'>#{hero.id}</div>
              <div className='td justify-content-center'>
                <Avatar
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
              </div>
              <div className='td'>{hero.name}</div>
              <div className='td'>
                <BodyText1>{useTruncate(hero.description, 125)}</BodyText1>
              </div>
              <div className='td'>
                <PrimaryButton onClick={() => addHeroToCandidates(hero)}>
                  <img src={PlusIcon} alt='' />
                </PrimaryButton>
              </div>
            </div>
          ))
        )}
      </Table>
      <div className='d-flex justify-content-end'>
        <Pagination
          currentPage={page}
          prevPageFn={prevPage}
          nextPageFn={nextPage}
        />
      </div>
    </MainContainer>
  );
}
