<template>
    <div v-if="feedback" class="p-2 mb-3 rounded" :class="feedback.styles">
        {{ feedback.message }}
    </div>
    <form v-if="!session" @submit.prevent="formSubmit" action="/" method="POST">
        <div class="mb-3 d-flex">
            <input type="text" placeholder="Email address" class="w-full p-2 border rounded" v-model="form.email"/>
        </div>
        <div class="mb-3 d-flex">
            <input type="password" placeholder="Password" class="w-full p-2 border rounded" v-model="form.password"/>
        </div>
        <div class="d-flex">
            <button class="w-full p-2 rounded bg-green-700 text-green-100 disabled:bg-opacity-50 disabled:cursor-wait" type="submit" :disabled="loader">Sign in</button>
        </div>
    </form>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const session = computed(() => store.state.session)

const loader = ref(false);

const form = reactive({
    email: "",
    password: ""
})

const feedback = ref({})

const formSubmit = async () => {
    loader.value = true;
    feedback.value = {};
    try {
        const data = await store.dispatch("handleLogin", form)
        if(data) emit("logged-in", data)
            // feedback.value.styles = "bg-green-300 text-green-700";
            // feedback.value.message = "Welcome back!";
            
    } catch (e) {
        feedback.value.styles = "bg-red-300 text-red-700";
        feedback.value.message = e.message;
    }
    loader.value = false;
    form.password = "";
}

const emit = defineEmits(["logged-in"])

</script>