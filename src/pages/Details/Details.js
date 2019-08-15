import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../modules/gallery/Gallery.js';
import ImageGallery from './ImageGallery.js';
import './details.scss';

/**
    The details page holds a gallery of the beach and details about the beach
 */
class Details extends React.Component {

    render() {
         return (
            <div className="details">
                <h2>Learn More About San Diego</h2>
                <Link to="/"><h2>Go Home</h2></Link>
                <Gallery imageGallery={ImageGallery}/>

                <hr />
                <article>
                    Explore the images above to see the fine views of San Diego's Beaches.
                    Here is a list of beaches for you to check out:
                </article>

                <ul>
                    <li>Blacks Beach</li>
                    <li>Cardiff By The Sea</li>
                    <li>Carlsbad Beach</li>
                    <li>Coronado Beach</li>
                    <li>Del Mar Beaches</li>
                    <li>Encinitas Beach</li>
                    <li>Imperial Beach</li>
                    <li>La Jolla</li>
                    <li>La Jolla Reefs</li>
                    <li>Ocean Beach</li>
                    <li>Oceanside</li>
                    <li>Point Loma Beaches</li>
                    <li>San Onofre</li>
                    <li>Solana Beach</li>
                    <li>Torrey Pines</li>
                </ul>
            </div>
        );
    }
}

export default Details;