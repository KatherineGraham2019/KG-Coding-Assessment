import React from 'react';
import Carousel from '../../modules/carousel/Carousel.js'
import ImageArray from './ImageArray.js';
import './home.scss';

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <h2>Explore San Diego</h2>
                <Carousel imageArray={ImageArray} />
                <hr />
                <article>
                    Home to some of the greatest beaches on the planet. 
                    San Diego has a variety of beautiful beaches to choose from for your summer vacation.
                    Enjoy a delicious bite to eat in Ocean Beach and relax near the pier.
                    Have a lovely Picnic at Mission Bay and walk to the beach to catch some waves.
                    Enjoy the fire pits at La Jolla Shores.
                    Take in the breathtaking views of Moonlight Beach in Del Mar.
                    There is all this and more.
                    Click the active image above to learn more!
                </article>
            </div>
        );
    }
}

export default Home;