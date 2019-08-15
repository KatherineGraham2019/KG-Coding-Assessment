import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './carousel.scss';

/** Sime Carousel class */
class Carousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    /** Simulates right click and goes back around to the beginning of the array
    When the end has been reached */
    rightArrowClick() {
        const { selectedIndex } = this.state;
        const { imageArray } = this.props;

        const endPosition = imageArray.length === 0 ? 0 : imageArray.length - 1;
        const setSelected =  selectedIndex !== endPosition ? selectedIndex + 1 : 0;

        this.setState({ selectedIndex: setSelected });
    }
    
    /** Simulates left click and goes back around to the end of the array
    when the beginning has been reached */
    leftArrowClick() {
        const { selectedIndex } = this.state;
        const { imageArray } = this.props;
        const endPosition = imageArray.length === 0 ? 0 : imageArray.length - 1;
        const setSelected =  selectedIndex !== 0 ? selectedIndex - 1 : endPosition;

        this.setState({ selectedIndex: setSelected });
    }

    render() {
        const { imageArray } = this.props;
        const { selectedIndex } = this.state;

        return (
            <div className="carousel">
                <div className="arrow left-arrow" onClick={() => this.leftArrowClick()}></div>
                <div className={`carousel-view active-image-${selectedIndex}`}>
                    <div className="carousel-slide" style={{'transform': `translateX(-${selectedIndex*(1600/imageArray.length)}px)` }}>
                        {imageArray.map((imageItem, index) => {
                            return (
                                <div className="carousel-item" id={`item-${index}`} order={index}>
                                    {selectedIndex === index  ?
                                        <Link to="/details"><img src={imageItem.imageLocation} alt="active carousel item"/></Link>
                                        :
                                        <img src={imageItem.imageLocation} alt={`inactive carousel item ${index}`}/>
                                    }
                                    <label>{imageItem.label}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="arrow right-arrow" onClick={() => this.rightArrowClick()}></div>
            </div>
        );
    }
}

Carousel.propTypes = {
    imageArray: PropTypes.array
};

export default Carousel;