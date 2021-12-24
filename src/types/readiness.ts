import * as t from 'io-ts';

export const ReadinessCodec = t.type({
  period_id: t.number,
  rest_mode_state: t.number,
  score: t.number,
  score_activity_balance: t.number,
  score_hrv_balance: t.number,
  score_previous_day: t.number,
  score_previous_night: t.number,
  score_recovery_index: t.number,
  score_resting_hr: t.number,
  score_sleep_balance: t.number,
  score_temperature: t.number,
  summary_date: t.string,
});

export type Readiness = t.TypeOf<typeof ReadinessCodec>;

export const ReadinessSummariesResponseCodec = t.type({
  readiness: t.array(ReadinessCodec),
});

export type ReadinessSummariesResponse = t.TypeOf<
  typeof ReadinessSummariesResponseCodec
>;
