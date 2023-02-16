import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import PencilSquareIcon from '../assets/pencil-square.svg';
import TrashIcon from '../assets/trash.svg';
import ProfileIcon from '../assets/profile.svg';

// my components
import { MainContainer } from '../components/Container';
import { BaseBox, ContentBox, FormBox, InputBox } from '../components/Box';
import { BodyText1, Heading2, Heading4 } from '../components/Text';
import {
  BackButton,
  PrimaryButton,
  SecondaryButton,
} from '../components/Button';
import { Modal } from '../components/Modal';
import { InputLabel } from '../components/Label';
import { TextInput, TextArea } from '../components/Input';
import { OutlineSecondaryLink, UnderlinedTextLink } from '../components/Link';
import { Table } from '../components/Table';
import { Avatar } from '../components/Image';

// hooks
import useTruncate from '../hooks/useTruncate';
import axios from 'axios';

export default function TeamPage() {
  const { setHeaderTitle, setModal, setShowModal } = useContext(GlobalContext);

  const { team_id } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState({});
  const [team_heroes, setTeamHeroes] = useState();

  useEffect(() => {
    setHeaderTitle(`Team - #${team_id}`);

    axios.get(`http://localhost:8000/teams/${team_id}`).then(res => {
      setTeam(res.data);
    });
  }, []);

  const editTeam = async () => {
    axios
      .put(`http://localhost:8000/teams/${team_id}`, {
        name: team.name,
        description: team.description,
      })
      .then(res => {
        console.log(res.data);
      });
    setModal(null);
    setShowModal(false);
    alert('team eddited');
  };

  const deleteTeam = async () => {
    await axios.delete(`http://localhost:8000/teams/${team_id}`);
    navigate('/teams');
  };

  const showEditTeamModal = () => {
    setModal(
      <Modal
        modalTitle={`You are editing team ${team.name}.`}
        acceptButtonFn={editTeam}
        acceptButtonText='Submit'
      >
        <FormBox>
          <InputBox>
            <InputLabel>Name</InputLabel>
            <TextInput placeholder='Enter the team name' value={team.name} />
          </InputBox>
          <InputBox>
            <InputLabel>Description</InputLabel>
            <TextArea
              placeholder='Enter the team description'
              value={team.description}
            />
          </InputBox>
        </FormBox>
      </Modal>
    );
    setShowModal(true);
  };

  return (
    <MainContainer>
      <BackButton path='/teams' />
      <ContentBox>
        <BaseBox className='w-100'>
          <Heading2>{team && team.name}</Heading2>
          <BodyText1>{team && team.description}</BodyText1>
          <div className='d-flex justify-content-end gap-24'>
            <SecondaryButton onClick={deleteTeam}>
              <img src={TrashIcon} alt='' />
              Delete team
            </SecondaryButton>
            <PrimaryButton onClick={showEditTeamModal}>
              <img src={PencilSquareIcon} alt='' />
              Edit team
            </PrimaryButton>
          </div>
        </BaseBox>
      </ContentBox>
      <Heading4>Heroes in this team</Heading4>
      {team_heroes && team_heroes ? (
        <Table optionName='Profile'>
          {team_heroes.map(item => (
            <div className='tr' key={item.id}>
              <div className='td'>#{item.id}</div>
              <div className='td justify-content-center'>
                <Avatar src={item.avatar} />
              </div>
              <div className='td'>{item.name}</div>
              <div className='td'>
                <BodyText1>{useTruncate(item.description, 80)}</BodyText1>
              </div>
              <div className='td'>
                <OutlineSecondaryLink to={`/heroes/${item.id}`}>
                  <img src={ProfileIcon} alt='' />
                </OutlineSecondaryLink>
              </div>
            </div>
          ))}
        </Table>
      ) : (
        <BodyText1>
          This team still has no heroes, add heroes to this team from the{' '}
          <UnderlinedTextLink to='/candidates'>
            candidate list.
          </UnderlinedTextLink>
        </BodyText1>
      )}
    </MainContainer>
  );
}
