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
            <div className="header-div-top">
                <div className="header-div-avatar">
                        <img src={this.props.headImg}
                              className="header-image" alt={this.props.name}/>
                    </div>
                    <h1 className="hero-title">{this.props.name}</h1>
                </div>

           );
    }
});


export default Header;