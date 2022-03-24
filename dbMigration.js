/* eslint-disable max-len */
/* eslint-disable no-undef */

'use strict';

require('dotenv').config();
const db = require('./db/db');
const models = db.getModels();
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const dbMigration = async () => {
  if ((await models.Service.find({})).length >= 3 && (await models.Pricing.find({})).length >= 9) return;
  await models.Service.create(
    [
      { name: 'First Service',  slug: 'first_service',  description: LOREM },
      { name: 'Second Service', slug: 'second_service', description: LOREM },
      { name: 'Third Service',  slug: 'third_service',  description: LOREM },
    ]
  );

  let service = await models.Service.findOne({ slug: 'first_service' });
  let pricing = await models.Pricing.create(
    [
      {
        service:      service._id,
        type:         'Free',
        description:  '10 users included\n2 GB of storage\nEmail support\nHelp center access',
        price:        0
      },
      {
        service:      service._id,
        type:         'Pro',
        description:  '20 users included\n10 GB of storage\nPriority email support\nHelp center access',
        price:        15
      },
      {
        service:      service._id,
        type:         'Enterprise',
        description:  '30 users included\n15 GB of storage\nPhone and email support\nHelp center access',
        price:        29
      }
    ]
  );
  service.pricing.push(pricing[0]._id, pricing[1]._id, pricing[2]._id);
  service.save();

  
  service = await models.Service.findOne({ slug: 'second_service' });
  pricing = await models.Pricing.create(
    [
      {
        service:      service._id,
        type:         'Free',
        description:  '100 users included\n20 GB of storage\nEmail support\nHelp center access',
        price:        10
      },
      {
        service:      service._id,
        type:         'Pro',
        description:  '200 users included\n100 GB of storage\nPriority email support\nHelp center access',
        price:        115
      },
      {
        service:      service._id,
        type:         'Enterprise',
        description:  '300 users included\n150 GB of storage\nPhone and email support\nHelp center access',
        price:        129
      }
    ]
  );
  service.pricing.push(pricing[0]._id, pricing[1]._id, pricing[2]._id);
  service.save();

  service = await models.Service.findOne({ slug: 'third_service' });
  pricing = await models.Pricing.create(
    [
      {
        service:      service._id,
        type:         'Free',
        description:  '1000 users included\n200 GB of storage\nEmail support\nHelp center access',
        price:        120
      },
      {
        service:      service._id,
        type:         'Pro',
        description:  '2000 users included\n1000 GB of storage\nPriority email support\nHelp center access',
        price:        1215
      },
      {
        service:      service._id,
        type:         'Enterprise',
        description:  '3000 users included\n1500 GB of storage\nPhone and email support\nHelp center access',
        price:        1229
      }
    ]
  );
  service.pricing.push(pricing[0]._id, pricing[1]._id, pricing[2]._id);
  service.save();
  return;
};

const start = async () => {
  try {
    await db.connectToDb();
    await dbMigration();
  } catch (error) {
    console.log(error);
  }
};
start();
