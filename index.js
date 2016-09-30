const ffi = require('ffi')

const pd = ffi.Library('libpd', {
  'libpd_init': ['void', []],

  'libpd_openfile': ['void', ['string', 'string']],
  'libpd_closefile': ['void', ['void']],

  'libpd_bang': ['int', ['string']],
  'libpd_float': ['int', ['string', 'float']],
  'libpd_symbol': ['int', ['string', 'string']],

  'libpd_start_message': ['int', ['int']],
  'libpd_add_float': ['void', ['float']],
  'libpd_add_symbol': ['void', ['string']],
  'libpd_finish_list': ['int', ['string']],
  'libpd_finish_message': ['int', ['string', 'string']]
})

pd.libpd_init()

// open a puredat file, resolve to a pointer
module.exports.open = function (basename, dirname) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(pd.libpd_openfile(basename, dirname))
    } catch (e) {
      reject(e)
    }
  })
}

// close a puredata file by pointer
module.exports.close = pd.libpd_closefile

// send a message to the patch
module.exports.send = function (recv, message) {
  if (typeof message === 'undefined') {
    return Boolean(pd.libpd_bang(recv))
  } else if (typeof message === 'number') {
    return Boolean(pd.libpd_float(recv, message))
  } else if (typeof message === 'string') {
    return Boolean(pd.libpd_symbol(recv, message))
  } else if (Array.isArray(message)) {
    pd.libpd_start_message(message.length)
    message.forEach(function (atom) {
      if (typeof atom === 'number') {
        pd.libpd_add_float(atom)
      } else if (typeof atom === 'string') {
        pd.libpd_add_symbol(atom)
      }
    })
    return Boolean(pd.libpd_finish_list(recv))
  } else {
    return false
  }
}

