

"use strict";
/**
 * Dependencies
 */


import koa from "koa";

/**
 * Config
 */


import config from '../conf/config';


//import routes  from '../app/route';
/**
 * Server
 */
var app = koa();


var a=function(b){
    console.log(b);
};

let fnsToRunOnResponse = [a, a, a, a];

// mocks yielding the next chunk of data read from file
// the * denotes that this function is a generator in JavaScript
function* getNextChunk() {
    yield 'Bret\nAntonette\nSamantha\nKarianne\nKamren\nLeopoldo_Corkery\nElwyn.Skiles\nMaxime_Nienow\nDelphine\nMoriah.Stanton\n'
};

// getNextUsername takes an iterator that yields the next chunk ending with a newline
// It itself returns an iterator that yields the usernames one at a time
function* getNextUsername(getNextChunk) {
    for (let chunk of getNextChunk()) {
        let lines = chunk.split('\n');

        for (let l of lines) if (l !== '') yield l
    }
};

let filterIfStartsWithAEOrM = username => {
    let firstChar = username[0];

    return 'A' === firstChar || 'E' === firstChar || 'M' === firstChar
};

// makeRequest makes an ajax request to the URL and returns a promise
// it uses the new fetch api and fat arrows from ES6
// it's a normal function and not a generator
let makeRequest = url => Promise.resolve(url).then(response => response.json());

// makeUrl takes a username and generates a URL that we want to query
let makeUrl = username => 'http://jsonplaceholder.typicode.com/users?username=' + username;


// boolean and an iterator filter itself returns an that iterator yields the
// value iff the function when applied to the value returns true
function* filter(p, a) {
    for (let x of a)
        if (p(x)) yield x
}


// map takes a function and an iterator
// it returns a new iterator that yields the result of applying the function to each value
// in the iterator that was given to it originally
function* map(f, a) {
    console.log("a"+a);
    for (let x of a) yield f(x)
}

// zipWith takes a binary function and two iterators as input
// it returns an iterator which in turn applies the given function to values from each of
// iterators and yields the result.
function* zipWith(f, a, b) {
    let aIterator = a[Symbol.iterator]()
    let bIterator = b[Symbol.iterator]()
    let aObj, bObj;

    while (true) {
        aObj = aIterator.next();
        if (aObj.done) break;
        bObj = bIterator.next();
        if (bObj.done) break;
        yield f(aObj.value, bObj.value)
    }
}

// execute makes a deferred iterator begin execution
// it basically calls `.next` on the iterator repeatedly
// till the iterator is done
function execute(iterator) {
    for (let x of iterator) {
        console.log(x);
    }// drain the iterator
}



let filteredUsernames        = filter(filterIfStartsWithAEOrM, getNextUsername(getNextChunk));

let urls                     = map(makeUrl, filteredUsernames);

let requestPromises          = map(makeRequest, urls);

let applyFnToPromiseResponse = (fn, promise) => promise.then(response => fn(response));

let lazyComposedResult       = zipWith(applyFnToPromiseResponse, fnsToRunOnResponse, requestPromises);

execute(lazyComposedResult);

require("./koa")(app, config);

require("./response")(app, config);



 //Routes
require("./routes")(app);

//import renderRoute from "./renderRoutes" ;
//
//renderRoute(app);


export default app;



