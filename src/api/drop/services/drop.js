'use strict';

/**
 * drop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::drop.drop');
