import React, { Component, useState } from 'react';
import myGif from '../img/1.gif';
import myGifT from '../img/2.gif';

const Home = () => {
    const [clicks, setClicks] = useState(0); // Кількість натискань
    const [showModal, setShowModal] = useState(false); // Відображення модального вікна
    const [x, setX] = useState(0); // Координата X
    const [y, setY] = useState(0); // Координата Y
    const [showImages, setShowImages] = useState(true); // Відображення зображень
    const [showTitle, setShowTitle] = useState(true); // Відображення заголовка
    const [showButton, setshowButton] = useState(true);

    const handleClick = () => {
        // Збільшення лічильника
        setClicks(clicks + 1);

        // Генерація нових координат
        const newX = Math.floor(Math.random() * window.innerWidth);
        const newY = Math.floor(Math.random() * window.innerHeight);
        setX(newX);
        setY(newY);

        // Відображення модального вікна та приховування інших елементів після 5 натискань
        if (clicks === 4) {
        setShowModal(true);
        setShowImages(false);
        setShowTitle(false);
        setshowButton(false);
        }
    };

    const handleCloseModal = () => {
        // Скидання лічильника, 
        // Відображення  елементів та приховування модального вікна
        setClicks(0);
        setShowModal(false);
        setShowImages(true);
        setShowTitle(true);
        setshowButton(true);
    };

    return (
        <div className='wrapper'>
        {showImages && <img className='gif-one' src={myGifT}/>}
        {showImages && <img className='gif-two' src={myGif}/>}
        {showTitle && <h1>Юлясік, тримай онлайн валентинку</h1>}
        {showButton && <button
            className='home-btn'
            style={{ left: x, top: y }}
            onClick={handleClick}
        >
            Отримати
        </button>}
        {showModal && (
            <Modal
            onClose={handleCloseModal}
            />
        )}
        </div>
    );
    };

    const Modal = ({ onClose }) => {
    return (
        <div className='modal'>
            <button onClick={onClose}>Закрити</button>
            <h1>Вітаюююююю!</h1>
            <p>Ти найпрекрасніша дівчина яку я коли небуть бачив!</p>
        </div>
    );
};

export default Home;

