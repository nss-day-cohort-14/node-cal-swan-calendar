//test for output to be equal to output of cal
const            {exec} = require('child_process')
  , { assert: {oneOf, strictEqual} } = require('chai')


describe('cal', () => {

  it.skip('should match unix cal app', (cb) => {
    exec('bin/node-cal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should notify user when date is out of range', (cb) => {
  	exec('bin/node-cal 10000', (err, stdout) => {
  		exec('cal 10000', (err2, stdout2) => {
  			strictEqual(stdout2, stdout)
  			cb()
  		})
  	})
  })

  it.skip('should notify user when date is out of range', (cb) => {
  	exec('bin/node-cal 1753', (err, stdout) => {
  		exec('cal 1753', (err2, stdout2) => {
  			strictEqual(stdout2, stdout)
  			cb()
  		})
  	})
  })

})
