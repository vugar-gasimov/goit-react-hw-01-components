import 'modern-normalize';

import { Profile } from './components/profile/Profile';
import { Statistics } from './components/statistics/Statistics.jsx';
import { FriendList } from './components/firends-list/FriendList.jsx';
import { TransactionHistory } from 'components/transactions-history/TransactionHistory.jsx';
import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';

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
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      <div>
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
