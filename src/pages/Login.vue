<template>
  <q-page class="q-page row items-center justify-evenly">
    <div class="q-pa-md login-form">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="payload.login"
          label="Ваш логин *"
          :no-error-icon="true"
          :autofocus="true"
          lazy-rules
          :rules="[
              (val: string) => (val && val.length > 0) || 'Пожалуйста, введите логин',
            ]"
        ></q-input>

        <q-input
          filled
          type="password"
          v-model="payload.password"
          :no-error-icon="true"
          label="Ваш пароль *"
          lazy-rules
          :rules="[
              (val: string) => (val && val.length > 0) || 'Пожалуйста, введите пароль',
            ]"
        ></q-input>

        <div>
          <q-btn label="Войти" type="submit" color="primary"></q-btn>
          <q-btn
            label="Сбросить"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          ></q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// import { useStore } from 'vuex';
import { useQuasar } from 'quasar';
import AuthService from 'src/services/AuthService';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const $q = useQuasar();
const router = useRouter();
// const store = useStore();
// console.log(store.getters);


const payload = reactive({
  login: 'admin',
  password: 'password',
  device_name: 'teleskop',
});

const onSubmit = async () => {
  try {
    const result = await AuthService.login(payload);
    console.log(result);
    await router.push('/');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      message: error.response.data.errors.data[0] as string,
    });
  }
};

const onReset = () => {
  payload.login = '';
  payload.password = '';
};
</script>

<style>
.login-form {
  max-width: 400px;
  width: 100%;
}
</style>
