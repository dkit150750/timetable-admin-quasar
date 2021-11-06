import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import ResponseError from 'src/types/ResponseError';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://localhost/api' });

/*
 * Добавьте перехватчик ответов
 */
api.interceptors.response.use(
	function f(response) {
		// Любой код состояния, который находится в диапазоне 2xx, вызывает срабатывание этой функции
		// Сделайте что-нибудь с данными ответа
		return response;
	},
	function f(error: ResponseError) {
		if (error.response && [401, 419, 429, 500].includes(error.response.status)) {
			// const userStore = useUserStore();
			// userStore.logout();
		}
		return Promise.reject(error);
	},
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
