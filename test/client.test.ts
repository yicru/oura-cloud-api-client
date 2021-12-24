import dotenv from 'dotenv';
import { isRight } from 'fp-ts/lib/Either';
import { Validation } from 'io-ts';
import { PathReporter } from 'io-ts/PathReporter';
import { describe, expect, it } from 'vitest';

import { Client } from '../src';
import { ActivitySummariesResponseCodec } from '../src/types/activity';
import { IdealBedtimesResponseCodec } from '../src/types/bedtime';
import { PersonalInfoCodec } from '../src/types/personal-info';
import { ReadinessSummariesResponseCodec } from '../src/types/readiness';
import { SleepPeriodsResponseCodec } from '../src/types/sleep';

dotenv.config();

if (!process.env.PERSONAL_ACCESS_TOKEN) {
  throw new Error('PERSONAL_ACCESS_TOKEN is not set');
}

const client = new Client(process.env.PERSONAL_ACCESS_TOKEN);

const report = <T>(result: unknown, validation: Validation<T>) => {
  console.error('result: ', JSON.stringify(result));
  console.error('validation: ', PathReporter.report(validation));
};

describe('Client', () => {
  it('should valid response getPersonalInfo', async () => {
    const result = await client.getPersonalInfo();
    const decoded = PersonalInfoCodec.decode(result);
    const validationResult = isRight(decoded);

    if (!validationResult) {
      report(result, decoded);
    }

    expect(validationResult).toBeTruthy();
  });

  it('should valid response getReadinessSummaries', async () => {
    const result = await client.getReadinessSummaries();
    const decoded = ReadinessSummariesResponseCodec.decode(result);
    const validationResult = isRight(decoded);

    if (!validationResult) {
      report(result, decoded);
    }

    expect(validationResult).toBeTruthy();
  });

  it('should valid response getSleepPeriods', async () => {
    const result = await client.getSleepPeriods();
    const decoded = SleepPeriodsResponseCodec.decode(result);
    const validationResult = isRight(decoded);

    if (!validationResult) {
      report(result, decoded);
    }

    expect(validationResult).toBeTruthy();
  });

  it('should valid response getActivitySummaries', async () => {
    const result = await client.getActivitySummaries();
    const decoded = ActivitySummariesResponseCodec.decode(result);
    const validationResult = isRight(decoded);

    if (!validationResult) {
      report(result, decoded);
    }

    expect(validationResult).toBeTruthy();
  });

  it('should valid response getIdealBedtimes', async () => {
    const result = await client.getIdealBedtimes();
    const decoded = IdealBedtimesResponseCodec.decode(result);
    const validationResult = isRight(decoded);

    if (!validationResult) {
      report(result, decoded);
    }

    expect(validationResult).toBeTruthy();
  });
});
