import { withLayout } from '../Layout/Layout';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../Login/Login';

function Auth() {
  return (
    <section>
      <div className='container'>

        <div className='wrap-tab'>
          <Tabs defaultActiveKey='login' className='mb-3'>
            <Tab eventKey='login' title='Login'>
              <Login />
            </Tab>
            <Tab eventKey='reg' title='Sign up'>
              Sig up
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default withLayout(Auth);
