/**
 * Created by xx on 15/10/30.
 */

//require('babel/register');
var request = require('./init');
var should  = require('should');


describe('Test sign func', function () {
    this.timeout(10000);
    var URLS = {
        AUTH: "/auth",
        SIGN_UP: "/signUp",
        SIGN_IN: "/signIn",
        SIGN_OUT: "/signout"
    };

    it('test signUp and return success', function (done) {

        var req = request.post(URLS.SIGN_UP);
        req.send({
            email:"4187601280@qq.com",
            password:"123456",
        })
            .end(function (err, res) {
                console.log(res.body);
                done();
            });
    });



    it('test signIn and return success', function (done) {

        var req = request.post(URLS.SIGN_IN);
        req.send({
            email:"1282932010@qq.com",
            password:"123456",
        })
            .end(function (err, res) {
                console.log(res.body);
                done();
            });
    });



});
