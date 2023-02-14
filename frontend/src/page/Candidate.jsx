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
import { BodyText1, Heading2 } from '../components/Text';
import {
  BackButton,
  PrimaryButton,
  SecondaryButton,
} from '../components/Button';
import { Modal } from '../components/Modal';
import { Select } from '../components/Select';

const data = [
  {
    id: '0000001',
    name: 'Ant-man',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000002',
    name: 'Iron-man',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000003',
    name: 'Hulk',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000004',
    name: 'Captain America',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000005',
    name: 'Captain Marvel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000006',
    name: 'The Wasp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000007',
    name: 'Black Widow',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000008',
    name: 'Thor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000009',
    name: 'Wanda',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
  {
    id: '0000010',
    name: 'Vision',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula in diam in pellentesque. Suspendisse velit nulla, venenatis non consectetur quis, tristique ut urna. Cras at fermentum enim, ut sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tristique fringilla vehicula. Vestibulum porttitor vitae diam non convallis. Vivamus commodo lacinia orci, et faucibus odio placerat at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam pulvinar congue ex, et consequat orci ultrices at. In nibh purus, ultricies et magna vel, varius pharetra lorem. Aenean bibendum purus at sapien laoreet, eget euismod.',
    avatar:
      'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg',
  },
];

export default function CandidatePage() {
  const { setHeaderTitle, setModal, setShowModal } = useContext(GlobalContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [candidate, setCandidate] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    data.forEach(item => {
      if (item.id == id) {
        setCandidate(item);
      }
    });
  }, []);

  useEffect(() => {
    setHeaderTitle(`Candidate - #${id}`);
  }, []);

  const addCantidateToTeam = candidateId => {
    if (selectedTeam !== null) {
      alert(`Candidato #${selectedTeam} foi adicionado ao time`);
      setModal(null);
      setShowModal(false);
      navigate(`/teams/${teamId}`);
    }
  };

  const removeCandidate = () => {
    alert('Candidate was removed');
    navigate('/candidates');
  };

  const showAddHeroForm = () => {
    const teams = [
      {
        id: '001',
        name: 'x-man',
      },
      {
        id: '002',
        name: 'x-force',
      },
      {
        id: '003',
        name: 'Guardiões da Galáxia',
      },
      {
        id: '004',
        name: 'Illuminati',
      },
    ];

    setModal(
      <Modal
        modalTitle={`In which team do you want to add ${candidate.name}?`}
        acceptButtonFn={() => addCantidateToTeam(candidate.id)}
        acceptButtonText='Submit'
      >
        <FormBox>
          <InputBox>
            <Select
              selectLabel='Select the team'
              options={teams}
              value={selectedTeam}
              onChange={e => setSelectedTeam(e.target.value)}
            />
          </InputBox>
        </FormBox>
      </Modal>
    );
    setShowModal(true);
  };

  return (
    <MainContainer>
      <BackButton />
      <ContentBox className=''>
        <BaseBox>
          <Heading2>{candidate.name}</Heading2>
          <BodyText1>{candidate.description}</BodyText1>
          <div className='d-flex justify-content-end gap-24'>
            <SecondaryButton onClick={removeCandidate}>
              <img src={TrashIcon} alt='' />
              Remove hero from the candidate list
            </SecondaryButton>
            <PrimaryButton onClick={showAddHeroForm}>
              <img src={PlusIcon} alt='' />
              Add hero to a team
            </PrimaryButton>
          </div>
        </BaseBox>
      </ContentBox>
    </MainContainer>
  );
}
