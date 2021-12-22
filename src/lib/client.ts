import type { AxiosInstance } from 'axios';
import axios from 'axios';

import type {
  Activity,
  DailySummaryParams,
  PersonalInfo,
  Readiness,
  Sleep,
} from '../types';
import { Constants } from './constants';

/**
 * Oura Cloud API Client
 * https://cloud.ouraring.com/docs/
 */
export class Client {
  private readonly axios: AxiosInstance;

  constructor(personalAccessToken: string) {
    this.axios = axios.create({
      baseURL: Constants.API_HOST,
      headers: {
        Authorization: `Bearer ${personalAccessToken}`,
      },
    });
  }

  /**
   * https://cloud.ouraring.com/docs/personal-info
   */
  getPersonalInfo = async (): Promise<PersonalInfo> => {
    const { data } = await this.axios.get<PersonalInfo>('/v1/userinfo');
    return data;
  };

  /**
   * https://cloud.ouraring.com/docs/daily-summaries
   * https://cloud.ouraring.com/docs/readiness
   *
   * @param end
   * @param start
   */
  getReadinessSummaries = async ({ end, start }: DailySummaryParams = {}) => {
    const { data } = await this.axios.get<{ readiness: Readiness[] }>(
      '/v1/readiness',
      {
        params: { end, start },
      }
    );
    return data;
  };

  /**
   * https://cloud.ouraring.com/docs/daily-summaries
   * https://cloud.ouraring.com/docs/sleep
   *
   * @param end
   * @param start
   */
  getSleepPeriods = async ({ end, start }: DailySummaryParams = {}) => {
    const { data } = await this.axios.get<{ sleep: Sleep[] }>('/v1/sleep', {
      params: { end, start },
    });
    return data;
  };

  /**
   * https://cloud.ouraring.com/docs/daily-summaries
   * https://cloud.ouraring.com/docs/activity
   *
   * @param end
   * @param start
   */
  getActivitySummaries = async ({ end, start }: DailySummaryParams = {}) => {
    const { data } = await this.axios.get<{ activity: Activity[] }>(
      '/v1/activity',
      {
        params: { end, start },
      }
    );
    return data;
  };
}
