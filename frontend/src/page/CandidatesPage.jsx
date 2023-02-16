import { useContext, useEffect, useState } from 'react';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import ProfileIcon from '../assets/profile.svg';

// my components
import { MainContainer } from '../components/Container';
import { Table } from '../components/Table';
import { OutlineSecondaryLink, UnderlinedTextLink } from '../components/Link';
import { Avatar } from '../components/Image';
import { BodyText1, Heading1 } from '../components/Text';
import useTruncate from '../hooks/useTruncate';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function CandidatesPage() {
  const { setHeaderTitle } = useContext(GlobalContext);

  const { data: candidates } = useQuery(['avaliable_candidates'], async () => {
    const res = await axios.get('http://127.0.0.1:8000/candidates/avaliable');
    return res.data;
  });

  useEffect(() => {
    setHeaderTitle(
      'Candidates - Summon the candidates for your team or for the Avengers'
    );

    console.log(candidates);
  }, []);

  return (
    <MainContainer>
      {candidates && candidates.length > 0 ? (
        <Table optionName='Profile'>
          {candidates &&
            candidates.map(candidate => (
              <div className='tr' key={candidate.id}>
                <div className='td'>#{candidate.id}</div>
                <div className='td justify-content-center'>
                  <Avatar src={candidate.thumbnail} />
                </div>
                <div className='td'>{candidate.name}</div>
                <div className='td'>
                  <BodyText1>
                    {useTruncate(candidate.description, 125)}
                  </BodyText1>
                </div>
                <div className='td'>
                  <OutlineSecondaryLink to={`/candidates/${candidate.id}`}>
                    <img src={ProfileIcon} alt='' />
                  </OutlineSecondaryLink>
                </div>
              </div>
            ))}
        </Table>
      ) : (
        <BodyText1>
          The candidate list is empty, accept candidates on the{' '}
          <UnderlinedTextLink to='/'>heroes page.</UnderlinedTextLink>
        </BodyText1>
      )}
    </MainContainer>
  );
}
