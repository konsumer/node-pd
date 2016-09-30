# node-pd
libpd wrapper for nodejs

To install/build libpd:

```
git clone https://github.com/libpd/libpd.git
cd libpd
git submodule init
git submodule update
make UTIL=true EXTRA=true
make install
```

Tested on OSX. When I get around to building on other platforms, I'll include instructions. Maybe at some point I'll automate it with node-gyp.