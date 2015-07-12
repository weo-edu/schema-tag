/**
 * Modules
 */

var Schema = require('@weo-edu/schema')

/**
 * Name schema
 */

var displayName = Schema('string').max(25).required(true)

/**
 * Tag schema
 */

var tag = Schema()
  .prop('displayName', displayName)
  .prop('content', {type: 'string'})
  .prop('tags', {type: 'array'})
  .prop('meta', {type: 'array'})
  .others(false)

/**
 * Expose tag schema
 */

module.exports = tag
