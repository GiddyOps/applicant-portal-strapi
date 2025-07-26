'use strict';

/**
 * applicant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::applicant.applicant',
  ({ strapi }) => ({
    async create(ctx) {
      const user = ctx.state.user;
      if (!user) return ctx.unauthorized('User not authenticated');

      const { data } = ctx.request.body;

      const entry = await strapi.entityService.create(
        'api::applicant.applicant',
        {
          data: {
            ...data,
            user: user.id,
          },
        }
      );

      return ctx.send({ data: entry });
    },
  })
);
