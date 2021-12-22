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
