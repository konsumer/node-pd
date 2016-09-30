const pd = require('./index')

pd.open('test.pd', __dirname)
.then(function () {
  console.log('ok.')
  pd.send('loadbang')
  while (true) {
    // noop
  }
})
