import { api } from 'src/boot/axios';
import type User from 'src/types/User';

type UserResponse = { data: { user: User; token: string } };

export default {
  async login(payload: {
    login: string;
    password: string;
    device_name: string;
  }) {
    const response = (await api.post(
      '/login',
      payload
    )) as unknown as UserResponse;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
  },
  async hasLogin(payload: {
    login: string;
    password: string;
    device_name: string;
  }) {
    return (await api.post(
      '/has-login',
      payload
    )) as unknown as {data: {hasLogin: boolean}};
  },
};
