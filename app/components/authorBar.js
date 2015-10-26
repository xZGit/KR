/**
 * Created by xx on 15/10/21.
 */


"use strict";

import React, { PropTypes } from 'react';



var AuthorBar = React.createClass({

    propTypes: {
        headImg: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        create_time: React.PropTypes.string.isRequired,
    },
    render() {

        return (
            <div className="author_div_bar">
                    <div className="img-div-author">
                        <img src={this.props.headImg}
                             className="avatar-img-author" alt={this.props.headImg}/>
                    </div>
                    <div className="info-div-author">
                    <div><a className="name-a-author">{this.props.author}</a></div>
                    <div><p className="time-p-author">{this.props.create_time}</p></div>
                    </div>
            </div>

        );
    }
});


export default AuthorBar;