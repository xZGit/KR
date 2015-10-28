

import request from "superagent";


const Request = {
    get: (url, cb) => {
        request.get(url)
            .set("Content-Type", "application/json")
            .end(cb);
    }
};



export default Request;