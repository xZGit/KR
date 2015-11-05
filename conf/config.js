/**
 * Created by xx on 15/7/30.
 */



process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path     from 'path';

const config = new Map();

config.set('env',process.env.NODE_ENV);
config.set('server_host',  'localhost');
config.set('server_port',  process.env.PORT || 3000);
config.set('root', path.resolve(__dirname, '../'));
config.set('key','kr');
config.set('mongoUrl',"mongodbUrl");


const paths = (() => {
    const base    = [config.get('root')],
        resolve = path.resolve;

    const project = (...args) => resolve.apply(resolve, [...base, ...args]);

    return {
        project : project
    };
})();

config.set('utils_paths', paths);


export default config;
