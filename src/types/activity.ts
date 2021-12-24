import * as t from 'io-ts';

export const ActivityCodex = t.type({
  average_met: t.number,
  cal_active: t.number,
  cal_total: t.number,
  class_5min: t.string,
  daily_movement: t.number,
  day_end: t.string,
  day_start: t.string,
  high: t.number,
  inactive: t.number,
  inactivity_alerts: t.number,
  low: t.number,
  medium: t.number,
  met_1min: t.array(t.number),
  met_min_high: t.number,
  met_min_inactive: t.number,
  met_min_low: t.number,
  met_min_medium: t.number,
  met_min_medium_plus: t.union([t.number, t.undefined]),
  non_wear: t.number,
  rest: t.number,
  rest_mode_state: t.number,
  score: t.number,
  score_meet_daily_targets: t.number,
  score_move_every_hour: t.number,
  score_recovery_time: t.number,
  score_stay_active: t.number,
  score_training_frequency: t.number,
  score_training_volume: t.number,
  steps: t.number,
  summary_date: t.string,
  timezone: t.number,
});

export type Activity = t.TypeOf<typeof ActivityCodex>;

export const ActivitySummariesResponseCodec = t.type({
  activity: t.array(ActivityCodex),
});

export type ActivitySummariesResponse = t.TypeOf<
  typeof ActivitySummariesResponseCodec
>;

export type ActivitySummariesParams = {
  end?: string;
  start?: string;
};
