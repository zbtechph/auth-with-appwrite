<template>
    <div class="flex flex-row justify-center">
        <div class="w-1/2 flex flex-row justify-between items-center">
            <a href="#" class="p-2">APP</a>
            <div class="flex flex-row">
                <button v-if="session" @click="logout" type="button" class="p-2 text-red-500">Logout</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const session = computed(() => store.state.session)
const sessions = computed(() => store.state.sessions)

const logout = async () => {
    store.dispatch("clearCurrentSession");
}
</script>