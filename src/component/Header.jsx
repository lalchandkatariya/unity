import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserList from './UserList';
import UserFormDetails from './UserFormDetails';
import { useState } from 'react';
import UnityGame from './Unity';
import '../App.css'

function Header() {
  const [event_key, setEvent_key] = useState('1')
  return (
    <Container className='bg-light' id='header'>
      <Tabs
        defaultActiveKey='1'//{event_key}
        // activeKey={event_key}
        // onSelect={() => setEvent_key(event_key => event_key == '1' ? '2' : '1')}
        id="uncontrolled-tab-example"
        className="mb-3 bg-dark-subtle text-white rounded-3"
        fill
      >
        <Tab eventKey="1" title="User List">
          <UserList />
        </Tab>
        <Tab eventKey="2" title="Add New User">
          {<UserFormDetails setEvent_key={setEvent_key} forUpdate={false} />}
        </Tab>
        {/* <Tab eventKey="3" title="Play Aviator" >
          <UnityGame />
        </Tab> */}
      </Tabs>
    </Container>
  );
}

export default Header;