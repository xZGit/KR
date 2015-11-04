/**
 * Created by xx on 15/11/3.
 */
var request = require('./init');
var should  = require('should');



describe('Test user func', function () {
    this.timeout(10000);
    var URLS = {
        GetUserInfo: "/userInfo",

    };

    it('test  GetUserInfo and return success', function (done) {

        var req = request.get(URLS.GetUserInfo+"/563433f47296a08e030d629b");
        req.send({})
            .end(function (err, res) {
                console.log(res.body);
                done();
            });
    });






});