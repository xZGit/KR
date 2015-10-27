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
            <div className="surface-div-top">
              <div className="imageBleed-src"
                   style={divStyle}>
               </div>
            </div>
        );
    }
});


export default Surface;