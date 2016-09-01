//test for output to be equal to output of cal
const                         {exec} = require('child_process')
  , { assert: {oneOf, strictEqual} } = require('chai')
  ,                         getToday = require('../lib/getToday')
  ,                           zeller = require('../lib/zeller')


describe('cal', () => {

  it.skip('should match unix cal app', (cb) => {
    exec('bin/node-cal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it.skip('should notify user when date is out of range', (cb) => {
  	exec('bin/node-cal 10000', (err, stdout, stderr) => {
  		exec('cal 10000', (err2, stdout2, stderr2) => {
  			strictEqual(stdout, stdout2)
  			strictEqual(stderr, stderr2)
  			cb()
  		})
  	})
  })

  it.skip('should notify user when date is out of range', (cb) => {
  	exec('bin/node-cal 1753', (err, stdout, stderr) => {
  		exec('cal 1753', (err2, stdout2, stderr2) => {
  			strictEqual(stdout, stdout2)
  			strictEqual(stderr, stderr2)
  			cb()
  		})
  	})
  })

  describe('cli args', () => {
  	describe('if no args are passed', () => {

  		it('should show no args', () => {
				strictEqual(process.argv.length, 2)
  		})

  		it('getToday should return object', () => {
				strictEqual('object', typeof getToday)
  		})

  	})
  })

})
