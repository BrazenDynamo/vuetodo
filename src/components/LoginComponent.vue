<template>
  <div class="card flex flex-col max-w-md mx-auto justify-end">
    <div class="max-w-md mx-auto mb-2">
      <input
        type="text"
        placeholder="Username"
        class="input focus:outline-none focus:shadow-outline"
        v-model="usernameInput"
      >
    </div>
    <div class="max-w-md mx-auto mb-5">
      <input
        type="text"
        placeholder="Password"
        class="input focus:outline-none focus:shadow-outline"
        v-model="passwordInput"
      >
    </div>
    <div class="flex justify-between max-w-md mx-auto my">
      <button class="btn btn-blue mr-1" @click="login()">Login</button>
      <button class="btn btn-green" @click="register()">Register</button>
    </div>
  </div>
</template>

<script lang=ts>
import { Component, Vue } from 'vue-property-decorator';
import { UserAPI } from '@/api';

@Component
export default class LoginComponent extends Vue {
  usernameInput: string = '';

  passwordInput: string = '';

  login() {
    UserAPI.login(this.usernameInput, this.passwordInput)
      .then(user => this.$store.dispatch('user/login', user))
      .then(() => {
        this.$router.push({ path: '/todolist' });
      });
  }

  register() {
    UserAPI.register({ username: this.usernameInput, password: this.passwordInput })
      .then(user => this.$store.dispatch('user/login', user))
      .then(() => this.$router.push({ name: 'todolist' }));
  }
}
</script>
