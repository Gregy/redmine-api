var expect = require('chai').expect
  , path = require('path')
  , basedir = path.join(__dirname, '..')
  , Redmine = require(path.join(basedir, 'redmine.js'))
  , assert = require('assert')
  , should = require('chai').should()

assert.ok('REDMINE_APIKEY' in process.env);
assert.ok('REDMINE_HOST' in process.env);

var redmine = new Redmine(process.env.REDMINE_HOST,process.env.REDMINE_APIKEY)

describe('#call with limit', function () {
    it('should return 1 user', function () {
        redmine.api('users', {limit:1}, function(err, res){
          res.should.have.length(1)
        })        
    });
});