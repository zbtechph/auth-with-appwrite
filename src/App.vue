<template>
<div class="bg-gray-200" :class="{ 'h-screen': session }">
  <div class="flex md:flex-row justify-center h-screen">
    <div class="w-full md:w-3/12 bg-gray-800 text=gray-200" v-if="session">
      
    </div>
    <div class="w-full md:w-9/12 text-gray-800 overflow-y-auto">
      <navbar-vue v-if="session"/>
      <router-view/>
    </div>
  </div>
</div>
</template>
<script setup>
  import { onMounted, computed } from 'vue';
  import { useStore } from 'vuex';
  import NavbarVue from './components/Navbar.vue';

  const store = useStore();
  const session = computed(()=>store.state.session)

  onMounted(()=>store.dispatch("appInit"))


</script>