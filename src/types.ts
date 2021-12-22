/**
 * https://cloud.ouraring.com/docs/personal-info
 */
export type PersonalInfo = {
  age: number;
  email: string;
  gender: string;
  weight: number;
};

export type DailySummaryParams = {
  end?: string;
  start?: string;
};

/**
 * https://cloud.ouraring.com/docs/readiness
 */
export type Readiness = {
  period_id: number;
  rest_mode_state: number;
  score: number;
  score_activity_balance: number;
  score_hrv_balance: number;
  score_previous_day: number;
  score_previous_night: number;
  score_recovery_index: number;
  score_resting_hr: number;
  score_sleep_balance: number;
  score_temperature: number;
  summary_date: string;
};

/**
 * https://cloud.ouraring.com/docs/sleep
 */
export type Sleep = {
  awake: number;
  bedtime_end: string;
  bedtime_start: string;
  breath_average: number;
  deep: number;
  duration: number;
  efficiency: number;
  hr_5min: number[];
  hr_average: number;
  hr_lowest: number;
  hypnogram_5min: string;
  is_longest: number;
  light: number;
  midpoint_time: number;
  onset_latency: number;
  period_id: number;
  rem: number;
  restless: number;
  rmssd: number;
  rmssd_5min: number[];
  score: number;
  score_alignment: number;
  score_deep: number;
  score_disturbances: number;
  score_efficiency: number;
  score_latency: number;
  score_rem: number;
  score_total: number;
  summary_date: string;
  temperature_delta: number;
  timezone: number;
  total: number;
};

/**
 * https://cloud.ouraring.com/docs/activity
 */
export type Activity = {
  average_met: number;
  cal_active: number;
  cal_total: number;
  class_5min: string;
  daily_movement: number;
  day_end: string;
  day_start: string;
  high: number;
  inactive: number;
  inactivity_alerts: number;
  low: number;
  medium: number;
  met_1min: number[];
  met_min_high: number;
  met_min_inactive: number;
  met_min_low: number;
  met_min_medium: number;
  met_min_medium_plus: number;
  non_wear: number;
  rest: number;
  rest_mode_state: number;
  score: number;
  score_meet_daily_targets: number;
  score_move_every_hour: number;
  score_recovery_time: number;
  score_stay_active: number;
  score_training_frequency: number;
  score_training_volume: number;
  steps: number;
  summary_date: string;
  timezone: number;
};

/**
 * https://cloud.ouraring.com/docs/bedtime
 */
export type Bedtime = {
  bedtime_window: {
    end: number;
    start: number;
  };
  date: string;
  status: 'NOT_ENOUGH_DATA' | 'LOW_SLEEP_SCORES' | 'IDEAL_BEDTIME_AVAILABLE';
};
