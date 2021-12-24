import * as t from 'io-ts';

export const SleepCodec = t.type({
  awake: t.number,
  bedtime_end: t.string,
  bedtime_start: t.string,
  breath_average: t.number,
  deep: t.number,
  duration: t.number,
  efficiency: t.number,
  hr_5min: t.array(t.number),
  hr_average: t.number,
  hr_lowest: t.number,
  hypnogram_5min: t.string,
  is_longest: t.number,
  light: t.number,
  midpoint_time: t.number,
  onset_latency: t.number,
  period_id: t.number,
  rem: t.number,
  restless: t.number,
  rmssd: t.number,
  rmssd_5min: t.array(t.number),
  score: t.number,
  score_alignment: t.number,
  score_deep: t.number,
  score_disturbances: t.number,
  score_efficiency: t.number,
  score_latency: t.number,
  score_rem: t.number,
  score_total: t.number,
  summary_date: t.string,
  temperature_delta: t.number,
  timezone: t.number,
  total: t.number,
});

export type Sleep = t.TypeOf<typeof SleepCodec>;

export const SleepPeriodsResponseCodec = t.type({
  sleep: t.array(SleepCodec),
});

export type SleepPeriodsResponse = t.TypeOf<typeof SleepPeriodsResponseCodec>;
