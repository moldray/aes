function aes (bit) {
  return {
    key: function (secret) {
      return {
        encrypt: function (str) {
          var cipher = crypto.createCipher(`aes${bit}`, secret)
          var ret = cipher.update(str, 'utf8', 'hex')

          ret += cipher.final('hex')

          return ret
        },
        decrypt: function (str) {
          var decipher = crypto.createDecipher(`aes${bit}`, secret)
          var ret = decipher.update(str, 'hex', 'utf8')

          ret += decipher.final('utf8')

          return ret
        }
      }
    }
  }
}
