# node-libpd
libpd wrapper for nodejs

To install/build libpd:

```
git clone --recursive https://github.com/libpd/libpd.git
cd libpd
make UTIL=true EXTRA=true
sudo make install
```

See [test.js](./test.js) for example usage.

Tested on M1 & Intel mac, but it should work fine on anything that can install nodejs and libpd.