import { Avatar, Card, Tag } from 'antd';
const { Meta } = Card;
export default function UserCard({ name, age, city, active, img }) {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img draggable={false} alt="example" src={img} />}>
        <Meta
          avatar={<Avatar src={img} />}
          title={name}
          description={`${age} лет, ${city}`}
        />
        <Tag color={active ? 'green' : 'red'}>
          {active ? 'Active' : 'Inactive'}
        </Tag>
      </Card>
    </div>
  );
}
