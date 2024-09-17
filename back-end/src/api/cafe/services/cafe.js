'use strict';

/**
 * cafe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cafe.cafe');
