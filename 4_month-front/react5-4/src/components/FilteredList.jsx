import { useCallback, useState, useMemo } from 'react';

export default function FilteredList() {
  const [serchName, setSerchName] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Emma' },
    { id: 6, name: 'Frank' },
    { id: 7, name: 'Sophia' },
    { id: 8, name: 'Oliver' },
    { id: 9, name: 'Mia' },
  ]);
  console.log('FilteredList render');
  const serchUsers = useMemo(() => {
    console.log('useMemo: фильтрация пользователей');
    return users.filter((user) =>
      user.name.toLowerCase().includes(serchName.toLowerCase()),
    );
  }, [serchName, users]);
  const addUser = useCallback(() => {
    console.log('addUser');

    setUsers((prev) => [
      ...prev,
      { id: prev.length + 1, name: `User ${prev.length + 1}` },
    ]);
  }, []);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={serchName}
        onChange={(e) => setSerchName(e.target.value)}
      />
      <ul>
        {serchUsers.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <button onClick={addUser}>Добавить пользователя</button>
    </div>
  );
}
