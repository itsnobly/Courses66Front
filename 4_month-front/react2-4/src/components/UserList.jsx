import UserCard from './UserCard';
const users = [
  {
    id: 1,
    name: 'Ivan',
    age: 18,
    city: 'Bishkek',
    active: true,
    img: '/images.jpg',
  },
  {
    id: 2,
    name: 'Alex',
    age: 22,
    city: 'Moscow',
    active: false,
    img: '/images.jpg',
  },
  {
    id: 3,
    name: 'Daniel',
    age: 25,
    city: 'London',
    active: true,
    img: '/images.jpg',
  },
  {
    id: 4,
    name: 'Michael',
    age: 20,
    city: 'Berlin',
    active: true,
    img: '/images.jpg',
  },
  {
    id: 5,
    name: 'David',
    age: 27,
    city: 'New York',
    active: false,
    img: '/images.jpg',
  },
  {
    id: 6,
    name: 'Emma',
    age: 21,
    city: 'Paris',
    active: true,
    img: '/images.jpg',
  },
  {
    id: 7,
    name: 'Sophia',
    age: 24,
    city: 'Tokyo',
    active: false,
    img: '/images.jpg',
  },
  {
    id: 8,
    name: 'Oliver',
    age: 19,
    city: 'Prague',
    active: true,
    img: '/images.jpg',
  },
  {
    id: 9,
    name: 'James',
    age: 30,
    city: 'Toronto',
    active: false,
    img: '/images.jpg',
  },
];
export default function UserList() {
  return (
    <ul className="users__list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          city={user.city}
          active={user.active}
          img={user.img}
        />
      ))}
    </ul>
  );
}
