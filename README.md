# node-libpd

libpd wrapper for nodejs

This will allow you to load [puredata](https://puredata.info/) patches and interact with them in nodejs.

Tested on M1 & Intel mac, but it should work fine on anything that can install nodejs and libpd.

## installation

You will need libpd nstalled.

To install/build libpd:

```
git clone --recursive https://github.com/libpd/libpd.git
cd libpd
make UTIL=true EXTRA=true
sudo make install
```

Now you can install it in your nodejs project:

```
npm i libpd
```

## usage

See [test.js](./test.js) for example usage, but here is basic idea:

```js
const pd = require('libpd')

// open test.pd patch, from current dir
pd.open('test.pd', __dirname)
  .then(() => {
    // send a message to the patch
    pd.send('loadbang')
    
    // do nothing while audio-loop is running. Ctrl-C will break
    while (true) {
    // noop
    }
  })
```
