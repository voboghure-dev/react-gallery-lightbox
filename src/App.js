import { tab } from '@testing-library/user-event/dist/tab';
import { useEffect, useState } from 'react';
import './App.css';

const images = [
  { id: '1', imageName: 'img1.jpeg', tag: 'free' },
  { id: '2', imageName: 'img2.jpeg', tag: 'new' },
  { id: '3', imageName: 'img3.jpeg', tag: 'pro' },
  { id: '4', imageName: 'img4.jpeg', tag: 'pro' },
  { id: '5', imageName: 'img5.jpeg', tag: 'free' },
  { id: '6', imageName: 'img6.jpeg', tag: 'new' },
  { id: '7', imageName: 'img6.jpeg', tag: 'pro' },
  { id: '8', imageName: 'img8.jpeg', tag: 'free' },
  { id: '9', imageName: 'img9.jpeg', tag: 'new' },
  { id: '10', imageName: 'img10.jpeg', tag: 'new' },
  { id: '11', imageName: 'img11.jpeg', tag: 'new' },
  { id: '12', imageName: 'img12.jpeg', tag: 'new' },
  { id: '13', imageName: 'img13.jpeg', tag: 'free' },
  { id: '14', imageName: 'img14.jpeg', tag: 'pro' },
  { id: '15', imageName: 'img15.jpeg', tag: 'free' },
  { id: '16', imageName: 'img16.jpeg', tag: 'new' },
];

function App() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className='App'>
      <div className='tags'>
        <TagButton name='all' handleSetTag={setTag} tag={tag} />
        <TagButton name='new' handleSetTag={setTag} tag={tag} />
        <TagButton name='free' handleSetTag={setTag} tag={tag} />
        <TagButton name='pro' handleSetTag={setTag} tag={tag} />
      </div>

      <div className='container'>
        {filteredImages.map((image) => (
          <div key={image.id} className='image-card'>
            <img
              className='image'
              src={`/images/${image.imageName}`}
              alt={image.imageName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tag }) => {
  return (
    <button
      className={`tag ${tag === name ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default App;
