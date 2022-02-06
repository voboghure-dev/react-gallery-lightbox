import { useEffect, useState } from 'react';
import './App.css';

import { SRLWrapper } from 'simple-react-lightbox';

const images = [
  { id: '1', url: './images/img01.jpg', title: 'First Image', tag: 'free' },
  { id: '2', url: './images/img02.jpg', title: 'Second Image', tag: 'new' },
  { id: '3', url: './images/img03.jpg', title: 'Third Image', tag: 'pro' },
  { id: '4', url: './images/img04.jpg', title: 'Fourth Image', tag: 'pro' },
  { id: '5', url: './images/img05.jpg', title: 'Fifth Image', tag: 'free' },
  { id: '6', url: './images/img06.jpg', title: 'Sixth Image', tag: 'new' },
  { id: '7', url: './images/img07.jpg', title: 'Seventh Image', tag: 'pro' },
  { id: '8', url: './images/img08.jpg', title: 'Eighth Image', tag: 'free' },
  { id: '9', url: './images/img09.jpg', title: 'First Image', tag: 'new' },
  { id: '10', url: './images/img10.jpg', title: 'First Image', tag: 'new' },
  { id: '11', url: './images/img11.jpg', title: 'First Image', tag: 'new' },
  { id: '12', url: './images/img12.jpg', title: 'First Image', tag: 'new' },
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

      <SRLWrapper>
        <div className='container'>
          {filteredImages.map((image) => (
            <div key={image.id} className='image-card'>
              <img className='image' src={image.url} alt={image.title} />
            </div>
          ))}
        </div>
      </SRLWrapper>
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
