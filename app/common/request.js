

import request from "superagent";


const Request = {
    get: (url, cb) => {
        request.get(url)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .end(cb);
    },

    post: (url, params, cb) => {
        request.post(url)
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .send(params)
            .end(cb);
    }
};



export default Request;