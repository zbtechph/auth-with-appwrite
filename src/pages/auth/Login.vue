<template>
    <div class="my-3 mx-2">
        <div class="px-2">
            <h1>Login</h1>
            <login-form-vue @logged-in="loggedIn" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import LoginFormVue from '../../components/LoginForm.vue';

const route = useRoute()
const router = useRouter()
const redirectTo = computed( () => route.query.redirect ?? "/" )

const loggedIn = (user) => {
    if(user){
        router.push(redirectTo.value)
    } 
}
</script>