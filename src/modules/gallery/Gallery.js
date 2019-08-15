import React from 'react';
import PropTypes from 'prop-types';
import './gallery.scss';

/** Simple Gallery Class */
class Gallery extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            imageLocation: `/beaches/${props.imageGallery[0].imageName}`
        }
    }

    changeImage(index) {
        const { imageGallery } = this.props;
        this.setState({
            imageLocation: `/beaches/${imageGallery[index].imageName}`
        })
    }

    render() {
        const { imageLocation } = this.state;
        const { imageGallery } = this.props;

        return (
            <div className="image-gallery">
                <div className="main-pane">
                    <img src={imageLocation} alt="main gallery item"/>
                </div>
                <div className="image-panes">
                    {
                        imageGallery.map((image, index) => {
                             return (
                                <img 
                                    src={ `/beaches/${image.imageName}`} 
                                    onClick={() =>this.changeImage(index)} 
                                    alt={`thumbnail ${index}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    imageGallery: PropTypes.array
};

export default Gallery;