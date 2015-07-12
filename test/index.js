var Schema = require('@weo-edu/schema')
var validate = require('@weo-edu/validate')
Schema.use(validate)

var Tag = require('..')
var assert = require('assert')




describe('Schema tag', function () {
  var tag = {
    displayName: 'awesome-tag',
    content: 'A tag for tagging awesome things'
  }

  it('should validate a tag', function () {
    var validation = Tag.validate(tag)
    assert(validation.valid)
  })

  var longTag = {
    displayName: 'awesome-tag-awsome-tag-awe'
  }

  it('should not allow names longer than 25 chars', function () {
    var validation = Tag.validate(longTag)
    assert(!validation.valid)
  })

  var otherTag = {
    displayName: 'cool',
    content: 'a cool tag',
    tags: ['awesome'],
    meta: ['an aweome tag'],
    notAllowed: 'neat'
  }

  it('should not allow additional properties', function() {
    var validation = Tag.validate(otherTag)
    assert(!validation.valid)
  })
})
