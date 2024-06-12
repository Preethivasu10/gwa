import React, { useState } from 'react';
import './sectionnew.css';

const cardsData = [
  {
    category: "TELEMEDICINE",
    date: "05 June, 2024",
    readTime: "2 min read",
    title: "Virtual Primary Care: A new era of telemedicine",
    description: "Lorem ipsum dolor sit amet consectetur. Tortor molestie faucibus facilisi fermentum. Varius orci pellentesque tortor consequat risus senectus aenean",
    author: "Dr. Andrew Miller",
    image: "https://s3-alpha-sig.figma.com/img/5cb7/9b10/76ffd5c369e0a1c269e013149f11d4d5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W51m8gjTk88HI0blMqdiu7AUUg~auz9LnfLNbIivt0luc7WjKy5ucCySGA4lBKyV0Jfrz0ogL-5G1FZ958BXWv69Togajb0NYj76PYqVwdocyUDA60X66jgK9xVsNuf-NiKEu0LQX~az886zpWp~HRkJOMTpf0feSysgj8mjVzin7QpeqtB~OK15y0y3iQ56WgUP8vFtRqlLD39xY3YSpbmpNDvdD7xL2SDXkHdwBFY7IPPd3UYyf5deN1QuXgwcZZxC7cYIs75PaU6ijaf6hkBZhFFuiYqAhe1Wy6Lzyk5mx21DC3yD9ZZoXADeMtYIErHCxGoXDTpAQMqS8mt1Xw__",
    image1: "https://s3-alpha-sig.figma.com/img/5cb7/9b10/76ffd5c369e0a1c269e013149f11d4d5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W51m8gjTk88HI0blMqdiu7AUUg~auz9LnfLNbIivt0luc7WjKy5ucCySGA4lBKyV0Jfrz0ogL-5G1FZ958BXWv69Togajb0NYj76PYqVwdocyUDA60X66jgK9xVsNuf-NiKEu0LQX~az886zpWp~HRkJOMTpf0feSysgj8mjVzin7QpeqtB~OK15y0y3iQ56WgUP8vFtRqlLD39xY3YSpbmpNDvdD7xL2SDXkHdwBFY7IPPd3UYyf5deN1QuXgwcZZxC7cYIs75PaU6ijaf6hkBZhFFuiYqAhe1Wy6Lzyk5mx21DC3yD9ZZoXADeMtYIErHCxGoXDTpAQMqS8mt1Xw__"

  },
  {
    category: "HYPERTENSION",
    date: "05 June, 2024",
    readTime: "2 min read",
    title: "What is considered as high blood pressure?",
    description: "Lorem ipsum dolor sit amet consectetur. Tortor ma faucibus facilisi fermentum. Varius orci pellentesque tortor consequat risus senectus aenean",
    author: "Dr. Mehmet Akinci",
    image: "https://s3-alpha-sig.figma.com/img/709c/967a/aea04ff8905d184a1e91a1996c3bbd48?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeDfF24iusG~VVnFn5w2rop9OeFbtkYoQ4zMEFyEADuGf5Hmto0PXNZ3HXV8Avi-B7Mk3u8HrNBBk1qAhjIqxYYJVuwBVnB0i8GZ~CsN3tbGArG20f3UmOAeiato2-FaMffL2HUj0qgmaJtgAATaAEgxIIWjh95g3sXLjPYvZq0jvsZDek6c3d3kZs9nES0dR9XE9QlLyRzo93LfQAbrHy4oCw~LGrIY9xl56mFBm6S~TiZV2lyqI0XD45pD6rA5EZ6u2D5m~9BADrkWnq08W7Yq-oeQLt81mEQ6m3ljtfmPI6mvanCjboldswsfGYY1TR09qraUhJGEuiXRSLdGGA__",
    image1: "https://s3-alpha-sig.figma.com/img/709c/967a/aea04ff8905d184a1e91a1996c3bbd48?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeDfF24iusG~VVnFn5w2rop9OeFbtkYoQ4zMEFyEADuGf5Hmto0PXNZ3HXV8Avi-B7Mk3u8HrNBBk1qAhjIqxYYJVuwBVnB0i8GZ~CsN3tbGArG20f3UmOAeiato2-FaMffL2HUj0qgmaJtgAATaAEgxIIWjh95g3sXLjPYvZq0jvsZDek6c3d3kZs9nES0dR9XE9QlLyRzo93LfQAbrHy4oCw~LGrIY9xl56mFBm6S~TiZV2lyqI0XD45pD6rA5EZ6u2D5m~9BADrkWnq08W7Yq-oeQLt81mEQ6m3ljtfmPI6mvanCjboldswsfGYY1TR09qraUhJGEuiXRSLdGGA__",

  },
  {
    category: "DIABETES",
    date: "05 June, 2024",
    readTime: "2 min read",
    title: "Managing Diabetes with Modern Tools",
    description: "Lorem ipsum dolor sit amet consectetur. Tortor ma faucibus facilisi fermentum. Varius orci pellentesque tortor consequat risus senectus aenean",
    author: "Dr. Sarah Lee",
    image: "https://s3-alpha-sig.figma.com/img/5cb7/9b10/76ffd5c369e0a1c269e013149f11d4d5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W51m8gjTk88HI0blMqdiu7AUUg~auz9LnfLNbIivt0luc7WjKy5ucCySGA4lBKyV0Jfrz0ogL-5G1FZ958BXWv69Togajb0NYj76PYqVwdocyUDA60X66jgK9xVsNuf-NiKEu0LQX~az886zpWp~HRkJOMTpf0feSysgj8mjVzin7QpeqtB~OK15y0y3iQ56WgUP8vFtRqlLD39xY3YSpbmpNDvdD7xL2SDXkHdwBFY7IPPd3UYyf5deN1QuXgwcZZxC7cYIs75PaU6ijaf6hkBZhFFuiYqAhe1Wy6Lzyk5mx21DC3yD9ZZoXADeMtYIErHCxGoXDTpAQMqS8mt1Xw__",
    image1: "https://s3-alpha-sig.figma.com/img/5cb7/9b10/76ffd5c369e0a1c269e013149f11d4d5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W51m8gjTk88HI0blMqdiu7AUUg~auz9LnfLNbIivt0luc7WjKy5ucCySGA4lBKyV0Jfrz0ogL-5G1FZ958BXWv69Togajb0NYj76PYqVwdocyUDA60X66jgK9xVsNuf-NiKEu0LQX~az886zpWp~HRkJOMTpf0feSysgj8mjVzin7QpeqtB~OK15y0y3iQ56WgUP8vFtRqlLD39xY3YSpbmpNDvdD7xL2SDXkHdwBFY7IPPd3UYyf5deN1QuXgwcZZxC7cYIs75PaU6ijaf6hkBZhFFuiYqAhe1Wy6Lzyk5mx21DC3yD9ZZoXADeMtYIErHCxGoXDTpAQMqS8mt1Xw__"

  },
  {
    category: "CARDIOLOGY",
    date: "05 June, 2024",
    readTime: "2 min read",
    title: "Innovations in Cardiology",
    description: "Lorem ipsum dolor sit amet consectetur. Tortor ma faucibus facilisi fermentum. Varius orci pellentesque tortor consequat risus senectus aenean",
    author: "Dr. John Doe",
    image: "https://s3-alpha-sig.figma.com/img/709c/967a/aea04ff8905d184a1e91a1996c3bbd48?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeDfF24iusG~VVnFn5w2rop9OeFbtkYoQ4zMEFyEADuGf5Hmto0PXNZ3HXV8Avi-B7Mk3u8HrNBBk1qAhjIqxYYJVuwBVnB0i8GZ~CsN3tbGArG20f3UmOAeiato2-FaMffL2HUj0qgmaJtgAATaAEgxIIWjh95g3sXLjPYvZq0jvsZDek6c3d3kZs9nES0dR9XE9QlLyRzo93LfQAbrHy4oCw~LGrIY9xl56mFBm6S~TiZV2lyqI0XD45pD6rA5EZ6u2D5m~9BADrkWnq08W7Yq-oeQLt81mEQ6m3ljtfmPI6mvanCjboldswsfGYY1TR09qraUhJGEuiXRSLdGGA__",
    image1: "https://s3-alpha-sig.figma.com/img/709c/967a/aea04ff8905d184a1e91a1996c3bbd48?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LeDfF24iusG~VVnFn5w2rop9OeFbtkYoQ4zMEFyEADuGf5Hmto0PXNZ3HXV8Avi-B7Mk3u8HrNBBk1qAhjIqxYYJVuwBVnB0i8GZ~CsN3tbGArG20f3UmOAeiato2-FaMffL2HUj0qgmaJtgAATaAEgxIIWjh95g3sXLjPYvZq0jvsZDek6c3d3kZs9nES0dR9XE9QlLyRzo93LfQAbrHy4oCw~LGrIY9xl56mFBm6S~TiZV2lyqI0XD45pD6rA5EZ6u2D5m~9BADrkWnq08W7Yq-oeQLt81mEQ6m3ljtfmPI6mvanCjboldswsfGYY1TR09qraUhJGEuiXRSLdGGA__"

  }
];

const Appp = () => {
  const [visibleCards, setVisibleCards] = useState([0, 1]);

  const handleNext = () => {
    setVisibleCards(prev => [
      (prev[0] + 1) % cardsData.length,
      (prev[1] + 1) % cardsData.length
    ]);
  };

  return (
    <div className="App">
      <div className="content-container">
        <div className="blog-header">
          <h3 className="blog-title">BLOG</h3>
          <h2 className="blog-title4">Explore Insights</h2>
          <p className="blog-title5">Stay one step ahead with our dedicated latest news update blogs.</p>
          <div className="carousel-buttons">
            <button onClick={handleNext} className="carousel-button">{'<'}</button>
            <button onClick={handleNext} className="carousel-button">{'>'}</button>
          </div>
        </div>
        <div className="cards-container">
          {visibleCards.map(index => (
            <div className="card" key={index}>
              <div className="card-image" style={{ backgroundImage: `url(${cardsData[index].image})` }}></div>
              <div className="card-content">
                <span className="category">{cardsData[index].category}</span>
                <span className="date">{cardsData[index].date} • {cardsData[index].readTime}</span>
                <h3>{cardsData[index].title}</h3>
                <p>{cardsData[index].description}</p>
                <div className="author">
                  <img src={cardsData[index].image1} alt="Author" />
                  <span>By {cardsData[index].author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appp;