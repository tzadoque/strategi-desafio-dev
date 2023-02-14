// assets
import PlusIcon from '../assets/plus.svg';
import TrashIcon from '../assets/trash.svg';
import AvengersIcon from '../assets/avengers.svg';
import SearchIcon from '../assets/search.svg';

// my components
import { Alert } from '../components/Alert';
import {
  PrimaryButton,
  SecondaryButton,
  OutlineSecondaryButton,
} from '../components/Button';
import {
  BaseLink,
  OutlineSecondaryLink,
  SidebarLink,
} from '../components/Link';
import { TeamCard } from '../components/Card';
import { Pagination } from '../components/Pagination';
import {
  BodyText1,
  BodyText2,
  DisplayText,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
} from '../components/Text';
import { TextArea, TextInput } from '../components/Input';
import { InputLabel } from '../components/Label';
import { InputBox } from '../components/Box';
import { Select } from '../components/Select';

export default function ComponentsPage() {
  return (
    <div className='App d-flex flex-column gap-24 mx-24 my-24'>
      <h1>Components Page</h1>

      <hr />

      <div className='d-flex gap-24'>
        <PrimaryButton>primary</PrimaryButton>
        <SecondaryButton>secondary</SecondaryButton>
        <OutlineSecondaryButton>
          Outline Secondary Button
        </OutlineSecondaryButton>
        <PrimaryButton>
          <img src={PlusIcon} alt='' />
          Adicionar
        </PrimaryButton>
        <SecondaryButton>
          <img src={TrashIcon} alt='' />
          Delete team
        </SecondaryButton>
      </div>

      <hr />

      <div className='d-flex gap-24'>
        <BaseLink to='/'>Base Link</BaseLink>
        <OutlineSecondaryLink to='/'>
          Outline Secondary Link
        </OutlineSecondaryLink>
        <SidebarLink to='/components/home'>
          <img src={AvengersIcon} alt='Avengers Logo' />
          Avengers
        </SidebarLink>
        <SidebarLink to='/components/test'>
          <img src={SearchIcon} alt='Search icon' />
          Heroes
        </SidebarLink>
      </div>

      <hr />

      <div className='d-flex flex-column gap-24'>
        <Alert
          type='success'
          text='The hero was added to the candidate list.'
        />

        <Alert
          type='warning'
          text='The hero has already been added to the candidate list.'
        />

        <Alert
          type='error'
          text='An error occurred, the hero was not added to the candidate list.'
        />
      </div>

      <hr />

      <div className='d-flex'>
        <Pagination
          currentPage={1}
          prevPageFn={function () {
            console.log('prev');
          }}
          nextPageFn={function () {
            console.log('next');
          }}
        />
      </div>

      <hr />

      <div className='d-flex flex-column gap-24'>
        <DisplayText>Display Text</DisplayText>
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <BodyText1>Body Text 1</BodyText1>
        <BodyText2>Body Text 2</BodyText2>
      </div>

      <hr />

      <div className='d-flex gap-24'>
        <TeamCard
          title='X-man'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et volutpat odio. Suspendisse accumsan diam ac nulla ultricies imperdiet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et volutpat odio. Suspendisse accumsan diam ac nulla ultricies imperdiet '
          path='/teste'
        />

        <TeamCard
          title='Illuminati'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor neque in libero ullamcorper, vitae hendrerit dolor vulputate. In hendrerit tellus in sapien suscipit, eget posuere leo elementum. Proin vel vulputate quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam porttitor augue nec metus vehicula, eget sollicitudin nulla iaculis. Cras suscipit placerat enim a vehicula. Phasellus dignissim leo non faucibus fringilla. Suspendisse ultricies efficitur augue lobortis convallis. Quisque nec lobortis lorem, in blandit turpis. Sed sit amet euismod velit, sed tempus eros. Maecenas semper, augue ut vehicula auctor, libero arcu consequat nibh, a volutpat.'
          path='/teste'
        />
      </div>

      <hr />

      <div className='d-flex flex-column gap-24'>
        <InputBox>
          <InputLabel>Label</InputLabel>
          <TextInput placeholder='Input placeholder' />
        </InputBox>

        <InputBox>
          <InputLabel>Select Label</InputLabel>
          <Select
            selectLabel='Select the team'
            options={[{ value: 1, label: 'teste1' }]}
          />
        </InputBox>

        <InputBox>
          <InputLabel>Textarea Label</InputLabel>
          <TextArea placeholder='Enter the team description' rows={10} />
        </InputBox>
      </div>
    </div>
  );
}
