/**
 * Created by xx on 15/11/5.
 */


var parse = require('co-busboy');
var fs = require('fs');
var path = require('path');
var utility = require('utility');
var config = require('../../conf/config');


export default function *() {
    var parts = parse(this);
    var part;


    while (part = yield parts) {
        if (part.length) {
            // arrays are busboy fields
            console.log('key: ' + part[0] + " val: " + [part[1]])
        } else {
            var newFilename = utility.md5(part.filename + String((new Date()).getTime())) +
                path.extname(part.filename);
            var upload_path = config.get("uploadPath");
            var base_url = config.get("uploadUrl");
            var filePath = path.join(upload_path, newFilename);
            var fileUrl = base_url + newFilename;
            // handle stream
            part.pipe(fs.createWriteStream(filePath));
        }
    }


    this.body = yield this.render({fileUrl: fileUrl});

};