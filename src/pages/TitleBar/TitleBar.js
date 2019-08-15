import React from 'react';

import './title-bar.scss';

/**
    TitleBar is used to display the title bar for all pages
 */
class TitleBar extends React.Component {

    render() {
         return (
            <div className="title-bar">
                <h1 className="title">San Diego's Beaches</h1>
                <h3 className="sub-title">The Beautiful Wonders of the San Diego Coastline</h3>
            </div>
        );
    }
}

export default TitleBar;