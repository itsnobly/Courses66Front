import Wrapper from './components/Wrapper';
import UserList from './components/UserList';

export default function App() {
  return (
    <Wrapper>
      <div>
        <h1>Person cards</h1>
        <UserList />
      </div>
    </Wrapper>
  );
}
