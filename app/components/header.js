/**
 * Created by xx on 15/10/15.
 */



"use strict";

import React, { PropTypes } from 'react';



var Header = React.createClass({

    propTypes: {
        headImg: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
    },
    render() {

        return (
            <header className="hero hero--profile">
                <div className="hero-avatar">
                    <div className="avatar">
                        <img src={this.props.headImg}
                              className="avatar-image avatar-image--large imagePicker-target" alt={this.props.name}/>
                        </div>
                    </div>
                    <h1 className="hero-title">{this.props.name}</h1>
                </header>

           );
    }
});


export default Header;