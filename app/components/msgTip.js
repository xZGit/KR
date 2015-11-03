/**
 * Created by xx on 15/10/31.
 */


import React, { PropTypes } from 'react';
import AlertStore from '../stores/alert';


var MsgTip = React.createClass({


    getInitialState: function () {
        return {
            msg: '',
            type: '',
            timeout: null
        };
    },

    showAlert: function (msg, type) {
        this.clearTimeOut();
        this.setState({msg: msg, type: type, timeOut: setTimeout(this.clearAlert, 5000)});
    },

    clearTimeOut: function () {
        if (this.state.timeOut != null) {
            clearTimeout(this.state.timeOut)
        }
        ;
    },

    clearAlert: function () {
        this.clearTimeOut();
        this.setState({msg: null});
    },


    componentDidMount() {
        AlertStore.addChangeListener(this.showAlert);
    },


    render() {
        if (this.state.msg) {

            var style = {
                background: this.state.type
            };

            return (
                <div className="msg-div-top">
                    <p className="msg-p-word" style={style}>{this.state.msg}</p><a onClick={this.clearAlert}
                                                                                   className="msg-a-close">x</a>
                </div>

            );
        }

        return null
    }
});


export default MsgTip;