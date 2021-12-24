import * as t from 'io-ts';

const BedtimeCodec = t.type({
  bedtime_window: t.type({
    end: t.union([t.number, t.null]),
    start: t.union([t.number, t.null]),
  }),
  date: t.string,
  status: t.union([
    t.literal('NOT_ENOUGH_DATA'),
    t.literal('LOW_SLEEP_SCORES'),
    t.literal('IDEAL_BEDTIME_AVAILABLE'),
  ]),
});

export type Bedtime = t.TypeOf<typeof BedtimeCodec>;

export const IdealBedtimesResponseCodec = t.type({
  ideal_bedtimes: t.array(BedtimeCodec),
});

export type IdealBedtimesResponse = t.TypeOf<typeof IdealBedtimesResponseCodec>;

export type IdealBedtimesParams = {
  end?: string;
  start?: string;
};
