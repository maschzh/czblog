import crypto from 'crypto';

function cryptoPassword (password) {
    return new Promise((resolve, reject) => {
        let psd = crypto.createHash('sha1');
        psd.update(password);
        resolve(psd.digest('hex'));
    });
}

function comparePassword(password, userPassword) {
    return new Promise((resolve, reject) => {
        let usePsd = crypto.createHash('sha1');
        usePsd.update(userPassword);
        if(password === usePsd.digest('hex')){
            resolve(true);
        } else {
            reject(new Error('密码不正确'));
        }
    });
}

export default {cryptoPassword, comparePassword};