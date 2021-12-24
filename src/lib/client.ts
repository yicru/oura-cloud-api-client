import type { AxiosInstance } from 'axios';
import axios from 'axios';

import type {
  ActivitySummariesParams,
  ActivitySummariesResponse,
  IdealBedtimesParams,
  IdealBedtimesResponse,
  PersonalInfo,
  ReadinessSummariesParams,
  ReadinessSummariesResponse,
  SleepPeriodsParams,
  SleepPeriodsResponse,
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
  getReadinessSummaries = async ({
    end,
    start,
  }: ReadinessSummariesParams = {}): Promise<ReadinessSummariesResponse> => {
    const { data } = await this.axios.get<ReadinessSummariesResponse>(
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
  getSleepPeriods = async ({
    end,
    start,
  }: SleepPeriodsParams = {}): Promise<SleepPeriodsResponse> => {
    const { data } = await this.axios.get<SleepPeriodsResponse>('/v1/sleep', {
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
  getActivitySummaries = async ({
    end,
    start,
  }: ActivitySummariesParams = {}): Promise<ActivitySummariesResponse> => {
    const { data } = await this.axios.get<ActivitySummariesResponse>(
      '/v1/activity',
      {
        params: { end, start },
      }
    );
    return data;
  };

  /**
   * https://cloud.ouraring.com/docs/bedtime
   *
   * @param end
   * @param start
   */
  getIdealBedtimes = async ({
    end,
    start,
  }: IdealBedtimesParams = {}): Promise<IdealBedtimesResponse> => {
    const { data } = await this.axios.get<IdealBedtimesResponse>(
      '/v1/bedtime',
      {
        params: { end, start },
      }
    );
    return data;
  };
}
