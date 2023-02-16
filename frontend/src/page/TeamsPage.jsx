import { useContext, useEffect, useState } from 'react';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import PlusIcon from '../assets/plus-lg.svg';

// my components
import { MainContainer } from '../components/Container';
import { PrimaryButton } from '../components/Button';
import { TeamCard } from '../components/Card';
import { TeamCardsGrid } from '../components/Grid';
import { Modal } from '../components/Modal';
import { InputBox, FormBox } from '../components/Box';
import { InputLabel } from '../components/Label';
import { TextArea, TextInput } from '../components/Input';
import axios from 'axios';

export default function TeamsPage() {
  const { setHeaderTitle, setModal, setShowModal, showAlert } =
    useContext(GlobalContext);

  const [teams, setTeams] = useState();

  useEffect(() => {
    setHeaderTitle('Teams - Manage your teams');

    axios.get(`http://localhost:8000/teams`).then(res => setTeams(res.data));
  }, []);

  const handleSubmit = () => {
    setModal(null);
    setShowModal(false);
  };

  function createTeam() {
    setModal(
      <Modal
        modalTitle='You are creating a new team'
        acceptButtonFn={handleSubmit}
        acceptButtonText='Submit'
      >
        <FormBox>
          <InputBox>
            <InputLabel>Name</InputLabel>
            <TextInput placeholder='Enter the team name' />
          </InputBox>
          <InputBox>
            <InputLabel>Description</InputLabel>
            <TextArea placeholder='Enter the team description' />
          </InputBox>
        </FormBox>
      </Modal>
    );
    setShowModal(true);
  }

  return (
    <MainContainer>
      <div className='d-flex justify-content-end'>
        <PrimaryButton onClick={createTeam}>
          <img src={PlusIcon} alt='' />
          Create a new team
        </PrimaryButton>
      </div>
      <TeamCardsGrid>
        {teams &&
          teams.map(team => (
            <TeamCard
              title={team.name}
              description={team.description}
              path={`/teams/${team.id}`}
              key={team.id}
            />
          ))}
      </TeamCardsGrid>
    </MainContainer>
  );
}
