import { useContext, useEffect } from 'react';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import ProfileIcon from '../assets/profile.svg';

// my components
import { MainContainer } from '../components/Container';
import { Pagination } from '../components/Pagination';
import { Table } from '../components/Table';
import { OutlineSecondaryLink } from '../components/Link';
import { Avatar } from '../components/Image';
import { BodyText1 } from '../components/Text';
import useTruncate from '../hooks/useTruncate';

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

export default function CandidatesPage() {
  const { setHeaderTitle } = useContext(GlobalContext);

  useEffect(() => {
    setHeaderTitle(
      'Candidates - Summon the candidates for your team or for the Avengers'
    );
  }, []);

  return (
    <MainContainer>
      <Table optionName='Profile'>
        {data.map(item => (
          <div className='tr' key={item.id}>
            <div className='td'>#{item.id}</div>
            <div className='td justify-content-center'>
              <Avatar src={item.avatar} />
            </div>
            <div className='td'>{item.name}</div>
            <div className='td'>
              <BodyText1>{useTruncate(item.description, 125)}</BodyText1>
            </div>
            <div className='td'>
              <OutlineSecondaryLink to={`/candidates/${item.id}`}>
                <img src={ProfileIcon} alt='' />
              </OutlineSecondaryLink>
            </div>
          </div>
        ))}
      </Table>
      <div className='d-flex justify-content-end'>
        <Pagination currentPage={1} />
      </div>
    </MainContainer>
  );
}
