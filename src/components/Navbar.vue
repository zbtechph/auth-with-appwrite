<template>
    <div class="flex flex-row justify-between items-center bg-white">
        <a href="#" class="p-2">APP</a>
        <div class="flex flex-row">
            <button v-if="session" @click="logout" type="button" class="p-2 text-red-500">Logout</button>
        </div>
    </div>    
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

const store = useStore()
const session = computed(() => store.state.session)
const router = useRouter()

const logout = async () => {
    await store.dispatch("clearCurrentSession");
    router.push({ name: "login" })
}
</script>