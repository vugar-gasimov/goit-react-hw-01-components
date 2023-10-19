import 'modern-normalize';
import { Profile } from './components/Profile.jsx';
import { Statistics } from './components/Statistics.jsx';
import { FriendList } from './components/FriendList.jsx';
import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
};
