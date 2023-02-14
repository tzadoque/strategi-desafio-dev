import { useContext, useEffect } from 'react';

// context
import { GlobalContext } from '../context/GlobalContext';

// assets
import AvengersLogo from '../assets/img/avengers-logo.png';

// my components
import { MainContainer } from '../components/Container';
import { AvengersImage } from '../components/Image';
import { BaseBox, ContentBox } from '../components/Box';
import { BodyText1, DisplayText } from '../components/Text';
import { AvengersCard } from '../components/Card';
import { AvengersCardsGrid } from '../components/Grid';
import { UnstyledLink } from '../components/Link';

const data = {
  title: 'The Avengers',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor neque in libero ullamcorper, vitae hendrerit dolor vulputate. In hendrerit tellus in sapien suscipit, eget posuere leo elementum. Proin vel vulputate quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam porttitor augue nec metus vehicula, eget sollicitudin nulla iaculis. Cras suscipit placerat enim a vehicula. Phasellus dignissim leo non faucibus fringilla. Suspendisse ultricies efficitur augue lobortis convallis. Quisque nec lobortis lorem, in blandit turpis. Sed sit amet euismod velit, sed tempus eros. Maecenas semper, augue ut vehicula auctor, libero arcu consequat nibh, a volutpat.',
  avengers: [
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
  ],
};

export default function AvengersPage() {
  const { setHeaderTitle } = useContext(GlobalContext);

  useEffect(() => {
    setHeaderTitle('Avengers - The strongest defense force against threats.');
  }, []);

  return (
    <MainContainer>
      <ContentBox className=''>
        <AvengersImage src={AvengersLogo} alt='' />
        <BaseBox>
          <DisplayText>{data.title}</DisplayText>
          <BodyText1>{data.description}</BodyText1>
        </BaseBox>
      </ContentBox>

      <AvengersCardsGrid>
        {data.avengers.map(item => (
          <UnstyledLink to='/avengers/0000001'>
            <AvengersCard
              name={item.name}
              imageUrl={item.avatar}
              key={item.id}
            />
          </UnstyledLink>
        ))}
      </AvengersCardsGrid>
    </MainContainer>
  );
}
