/**
 * Created by xx on 15/11/6.
 */


import React from 'react';
import { Router, Route, Link } from 'react-router';
import Header from '../components/header';
import Articles from '../components/articles';



var Personal= React.createClass({

    render() {
        let { userId } = this.props.params;
        if(!userId) {
            return (<div>404</div>);
        }
        return (
            <div >
                <Header id = {userId}/>
                <div className="menu">
                    <Link className="link" to="/">latest stories</Link>
                    <Link className="link" to="/about">latest photos</Link>
                </div>
                <div>
                    {this.props.children || <Articles />}
                </div>
            </div>
        );
    }
});


export default Personal;