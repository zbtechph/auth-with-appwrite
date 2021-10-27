<template>
<div class="h-vh">
  <navbar-vue/>
  <div class="flex flex-row justify-center">
    <div class="w-1/2">
      <login-form-vue @logged-in="loggedIn" />
    </div>
  </div>
</div>
</template>
<script setup>
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import LoginFormVue from './components/LoginForm.vue';
  import NavbarVue from './components/Navbar.vue';

  const store = useStore();

  onMounted(()=>store.dispatch("appInit"))

  const loggedIn = (user) => {
    console.log(user);
  }  

</script>