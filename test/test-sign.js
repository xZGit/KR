/**
 * Created by xx on 15/10/30.
 */

//require('babel/register');
var request = require('./init');
var should  = require('should');


describe('Test getResult', function () {
    this.timeout(10000);
    var url="/signIn";

    it('return success', function (done) {

        var req = request.post(url);
        req.send({
            email:"418760128@qq.com",
            password:"123456",
        })
            .end(function (err, res) {
                console.log(res.body);
                done();
            });
    });



});
