/**
 * Created by xx on 15/10/15.
 */
"use strict";

import React, { PropTypes } from 'react';



var Surface = React.createClass({

    propTypes: {
        url: React.PropTypes.string.isRequired
    },
    render() {
        var url = this.props.url;
        var divStyle = {
            backgroundImage: 'url(' + url + ')',
        };
        return (
            <div className="surface">
                <div id="prerendered" className="screenContent">
                    <div className="imageBleed imageBleed--header">
                        <div className="imageBleed-src"
                             style={divStyle}></div>
                    </div>
                </div>
            </div>
        );
    }
});


export default Surface;