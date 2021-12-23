import { Client } from 'oura-cloud-api-client';

const client = new Client('your-personal-access-token');

(async () => {
  console.log('PersonalInfo: ', await client.getPersonalInfo());
  console.log('ReadinessSummaries: ', await client.getReadinessSummaries());
  console.log('SleepPeriods: ', await client.getSleepPeriods());
  console.log('ActivitySummaries: ', await client.getActivitySummaries());
  console.log('IdealBedtimes: ', await client.getIdealBedtimes());
})();
