'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({strapi}) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = 
    await strapi.db.query('api::product.product').findMany({
      where: { slug },
      populate: true
  })

    const sanitizeEntity = await this.sanitizeOutput(entity, ctx);

    
    return this.transformResponse(sanitizeEntity)
  }
}));
