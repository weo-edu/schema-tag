var assert = require('assert')
var validator = require('@weo-edu/validate')

var Tag = require('..')

var validateTag = validator(Tag)





describe('Schema tag', function () {
  var tag = {
    displayName: 'awesome-tag',
    content: 'A tag for tagging awesome things'
  }

  it('should validate a tag', function () {
    var validation = validateTag(tag)
    assert(validation.valid)
  })

  var longTag = {
    displayName: 'awesome-tag-awsome-tag-awesome-'
  }

  it('should not allow names longer than 30 chars', function () {
    var validation = validateTag(longTag)
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
    var validation = validateTag(otherTag)
    assert(!validation.valid)
  })
})
