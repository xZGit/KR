/**
 * Created by xx on 15/11/7.
 */


import React from 'react';
var Editor = require('../composition/react-md-editor/MDEditor');


var NewStory= React.createClass({
    getInitialState: function() {
        return {
            code: "# Markdown"
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });
    },
    render: function() {
        return <Editor value={this.state.code} onChange={this.updateCode} />
    }
});


export default NewStory;