import { createStore } from "vuex";
import { Appwrite } from 'appwrite'

const sdk = new Appwrite();

export default createStore({

    state: () => ({
        session: null,
        sessions: null
    }),

    mutations: {
        SET_SESSION(state, payload){
            state.session = payload
        },
        SET_SESSIONS(state, payload){
            state.sessions = payload
        }
    },

    actions: {

        async appInit({ commit }){
            sdk.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
                .setProject(import.meta.env.VITE_APPWRITE_PROJECT);
            const session = await sdk.account.get()
            const sessions = await sdk.account.getSessions()
            commit("SET_SESSION", session)
            commit("SET_SESSIONS", sessions);
        },

        async handleLogin({ commit }, payload){
            const { email, password } = payload;
            const session = await sdk.account.createSession(email, password)
            commit("SET_SESSION", session)
            const sessions = await sdk.account.getSessions()
            commit("SET_SESSIONS", sessions);
            return session;
        },

        async clearCurrentSession({ commit }){
            await sdk.account.deleteSession('current')
            commit("SET_SESSION", null)
        },

        async clearSession({ commit }, payload){
            await sdk.account.deleteSession(payload)
        },

        async handleSignup({ commit }, payload){
            
        }

    }

})