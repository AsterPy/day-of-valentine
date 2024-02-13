import React, { Component, useState } from 'react';
import myGif from '../img/1.gif';
import myGifT from '../img/2.gif';
import myxe from '../img/myxe.png';
import { SpeedInsights } from "@vercel/speed-insights/next"

const Home = () => {
    const [clicks, setClicks] = useState(0); // Кількість натискань
    const [showModal, setShowModal] = useState(false); // Відображення модального вікна
    const [x, setX] = useState(0); // Координата X
    const [y, setY] = useState(0); // Координата Y
    const [showImages, setShowImages] = useState(true); // Відображення зображень
    const [showTitle, setShowTitle] = useState(false); // Відображення заголовка
    const [showButton, setshowButton] = useState(true);

    const handleClick = () => {
        // Збільшення лічильника
        setClicks(clicks + 1);

        // Генерація нових координат
        const newX = Math.floor(Math.random() * window.innerWidth);
        const newY = Math.floor(Math.random() * window.innerHeight);
        setX(newX);
        setY(newY);

        if (clicks === 0) {
            setShowModal(false);
            setShowImages(true);
            setShowTitle(true);
            setshowButton(true);
        }
        // Відображення модального вікна та приховування інших елементів після 5 натискань
        if (clicks === 9) {
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
        {showTitle && <p>АГА, Думала всьо так просто?<br></br>(султанчик може втікати за екранчик хіхіхі)</p>}
        <SpeedInsights />
        {showButton && <button
            className='home-btn'
            style={{ left: x, top: y }}
            onClick={handleClick}
        ></button>}
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
            <h1 style={{margin: 0}}>Мухехехе</h1>
            <p>Зловила султанчика, МОЛОДЕЦЬ, ЛюБлЮ тЕбЕ 😈</p>
            <img className='myxe' src={myxe}/>
            <p>Як будемо в франківську куплю тобі сінабона хіхіхіхііх</p>
            <a className='myxe-btn' onClick={onClose} href='https://youtu.be/m5UzAvL2Y74?si=ZvjvOg_Od82SaIaA'>ЖМЯК</a>
        </div>
    );
};

export default Home;

