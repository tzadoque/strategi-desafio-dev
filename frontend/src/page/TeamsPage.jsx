import { useContext, useEffect } from 'react';

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

export default function TeamsPage() {
  const { setHeaderTitle, setModal, setShowModal, showAlert } =
    useContext(GlobalContext);

  useEffect(() => {
    setHeaderTitle('Teams - Manage your teams');
  }, []);

  const handleSubmit = () => {
    setModal(null);
    setShowModal(false);

    showAlert('success', 'teste');
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
        {data.map(team => (
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
