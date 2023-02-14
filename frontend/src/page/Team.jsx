import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

const data = [
  {
    id: '001',
    name: 'X-man',
    description:
      'Atualmente os X-Men são uma equipe oficial que representa Krakoa, a nação mutante. E todos os anos, durante a cerimônia do Hellfire Gala, a população elege uma nova formação para seguir lhes representando. Inclusive, um integrante da equipe é sempre eleito via voto popular pelos leitores.',
  },
  {
    id: '002',
    name: 'X-force',
    description:
      'Atualmente a X-Force atua como a CIA de Krakoa, a nação mutante. Os integrantes são os responsáveis por proteger o país das ameaças externas. Uma das Leis de Krakoa diz que os mutantes não podem matar humanos, mas a X-Force tem a prerrogativa de matar humanos se for necessário.',
  },
  {
    id: '003',
    name: 'Guardiões da Galáxia',
    description:
      'Atualmente a equipe dos Guardiões da Galáxia está bastante inflada. O grupo deixou de ser um bando de desajustados que viajam pela galáxia salvando os inocentes e agora são uma força tarefa alinhada com os principais Impérios Galácticos e efetivamente protegem o universo. Por isso a alta quantidade de integrantes.',
  },
  {
    id: '004',
    name: 'Illuminati',
    description:
      'O que acontece quando os maiores gênios do Universo Marvel se unem para enfrentar ameaças "nos bastidores" da comunidade heroica? Os Illuminati surgem, é claro. Composto por membros de outras equipes, os Illuminati sempre estão envolvidos quando ameaças reais são postas no caminho do Planeta Terra e a combinação das melhores mentes desse mundo gera ideias e conflitos inimagináveis.',
  },
  {
    id: '005',
    name: 'Campeões',
    description:
      'Atualmente a equipe está mais enxuta e com a sua formação original (com a ausência de Amadeus Cho). O grupo segue com a mesma abordagem de sempre, se posicionando em temas sensíveis e atuando um pouco diferente do que os Vingadores, tentando resolver os problemas da forma mais pacífica possível.',
  },
  {
    id: '006',
    name: 'Quarteto Fantástico',
    description:
      'A primeira grande equipe da Marvel, o Quarteto Fantástico é uma família composta por descobridores, exploradores e imaginautas. Lidando diretamente com ameaças científicas e dimensões paralelas, o grupo reinventou a fórmula de equipes de super-heróis, trazendo uma verdadeira família.',
  },
  {
    id: '007',
    name: 'Eternals',
    description:
      'Não se preocupe se você não os conhecer, tendo em vista que realmente se trata de um grupo mais seleto e menos explorado do Universo Marvel. Os Eternos, assim como os Inumanos, são outra raça dotada de super-poderes, criados pelos Celestiais. Seus inimigos eternos, os Deviantes, são monstros tenebrosos e deformados. Porém, os Eternos são tão importantes que acabaram assumindo o lugar de alguns deuses num certo Monte Olimpo.',
  },
];

export default function TeamPage() {
  const { setHeaderTitle, setModal, setShowModal } = useContext(GlobalContext);

  const { id } = useParams();

  const [team, setTeam] = useState({});

  useEffect(() => {
    data.forEach(item => {
      if (item.id == id) {
        setTeam(item);
      }
    });
  }, []);

  useEffect(() => {
    setHeaderTitle(`Team - #${id}`);
  }, []);

  const editTeam = () => {
    setModal(null);
    setShowModal(false);
    alert('team eddited');
  };

  const deleteTeam = () => {};

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
      <BackButton />
      <ContentBox className=''>
        <BaseBox>
          <Heading2>{team.name}</Heading2>
          <BodyText1>{team.description}</BodyText1>
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
      {data ? (
        <Table optionName='Profile'>
          {data.map(item => (
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
