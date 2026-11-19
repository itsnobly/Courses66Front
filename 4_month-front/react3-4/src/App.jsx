import Card from './components/Card';
import data from './data/product.json';
import './App.css';

export default function App() {
  return (
    <div className="grid">
      {data.map(({ id, name, images, color, desc }) => (
        <Card
          key={id}
          id={id}
          name={name}
          images={images}
          color={color}
          desc={desc}
        />
      ))}
    </div>
  );
}
