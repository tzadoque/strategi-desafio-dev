import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import PlusIcon from '../assets/plus.svg';
import TrashIcon from '../assets/trash.svg';

// my components
import { MainContainer } from '../components/Container';
import { BaseBox, ContentBox, FormBox, InputBox } from '../components/Box';
import { BodyText1, Heading1, Heading2 } from '../components/Text';
import {
  BackButton,
  PrimaryButton,
  SecondaryButton,
} from '../components/Button';
import { Modal } from '../components/Modal';
import { Select } from '../components/Select';
import axios from 'axios';
import { useQuery } from 'react-query';
import { AvengersImage } from '../components/Image';

export default function CandidatePage() {
  const { setHeaderTitle, setModal, setShowModal } = useContext(GlobalContext);

  const { candidate_id } = useParams();
  const navigate = useNavigate();

  const { data: candidate } = useQuery(
    ['candidate', candidate_id],
    async () => {
      const res = await axios.get(
        `http://127.0.0.1:8000/candidates/${candidate_id}`
      );

      return res.data;
    }
  );

  const [selectedTeam, setSelectedTeam] = useState('');
  const { data: teams } = useQuery(['teams'], async () => {
    const res = await axios.get(`http://127.0.0.1:8000/teams/all`);

    return res.data;
  });

  useEffect(() => {
    setHeaderTitle(`Candidate - #${candidate_id}`);
  }, []);

  const addCantidateToTeam = candidateId => {
    if (selectedTeam != '') {
      axios.post(`http://127.0.0.1:8000/candidates/${candidateId}/add`, {
        team_id: selectedTeam,
      });

      alert(
        `Candidate #${candidateId} foi adicionado na equipe #${selectedTeam}`
      );

      setModal(null);
      setShowModal(false);
      if (selectedTeam == 1) {
        navigate(`/avengers`);
      } else {
        navigate(`/teams`);
      }
    } else {
      alert('Select a team');
    }
  };

  const removeCandidate = () => {
    axios.delete(`http://127.0.0.1:8000/candidates/${candidate_id}`);
    alert('The hero has been removed from the list of candidates.');
    navigate('/candidates');
  };

  return (
    <MainContainer>
      <BackButton path='/candidates' />
      {candidate && (
        <>
          <ContentBox className='flex-column'>
            <ContentBox>
              <AvengersImage src={candidate.thumbnail} alt='' />
              <BaseBox>
                <Heading1>{candidate.name}</Heading1>
                <BodyText1>{candidate.description}</BodyText1>
              </BaseBox>
            </ContentBox>
            <div className='d-flex justify-content-end gap-24'>
              <SecondaryButton onClick={removeCandidate}>
                <img src={TrashIcon} alt='' />
                Remove hero from the candidate list
              </SecondaryButton>

              {/* <PrimaryButton onClick={showAddHeroForm}>
              <img src={PlusIcon} alt='' />
              Add hero to a team
            </PrimaryButton> */}
            </div>
          </ContentBox>
          <ContentBox>
            <FormBox>
              <InputBox>
                <Select
                  value={selectedTeam}
                  onChange={e => setSelectedTeam(e.target.value)}
                >
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Select>
              </InputBox>
              <PrimaryButton />
            </FormBox>
          </ContentBox>
        </>
      )}
    </MainContainer>
  );
}
