import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [newsList, setNewsList] = useState([]);

  useEffect( () => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles"
    ).then((response) => response.json())
    .then((data) => {
      setNewsList(data)
    });
  }, [])

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <div className='title'>
      <h1> Top 10 Space News </h1>
      </div>

      <div className='newsContainer'>
        {newsList.map((val, key) => {
          return <div key={key} className="article" 
          onClick={() => openInNewTab(val.url)}>

          {/* onClick={() => {
            window.location.href = val.url
          }}> */}
            <h2> {val.title} </h2>
            <img src={val.imageUrl} />
            <p> {val.summary} </p>
            <h4> {val.publishedAt}</h4>

            </div>
        })}
      </div>
      
     
    </div>
  );
}

export default App;
