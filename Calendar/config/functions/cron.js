'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

// module.exports = {
//   /**
//    * Simple example.
//    * Every monday at 1am.
//    */
//   // '0 1 * * 1': () => {
//   //
//   // }
// };

module.exports = {
  '*/1 * * * *': async () => {
    // fetch articles to publish
    const scheduledCampaignToPublish = await strapi.api.campaign.services.campaign.find({
      status:'scheduled',
      publish_at_lt: new Date(),
    });

    // update published_at of articles
    await Promise.all(scheduledCampaignToPublish.map(campaign => {
      return strapi.api.campaign.services.campaign.update(
        { id: article.id },
        { status:'published' }
      );
    }));
  },
};
