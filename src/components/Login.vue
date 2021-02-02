<template>
    <div class="page">
        <b-form class="form-signin" autocomplete="off">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <b-row align-h="center">
                <b-col cols="6">
                    <b-form-group
                    id="label-username"
                    label="Email"
                    label-for="email"
                    label-align="left"
                    label-cols="3">
                    <b-form-input
                        id="email"
                        v-model="email"
                        type="text"
                        placeholder="Enter email"
                        required
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="6">
                    <b-form-group
                    id="label-password"
                    label="Password"
                    label-for="password"
                    label-align="left"
                    label-cols="3">
                    <b-form-input
                        id="password"
                        v-model="password"
                        type="password"
                        placeholder="Enter password"
                        required
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="6">
                    <div class="alert alert-danger" role="alert" v-if="error">
                        {{ error }}
                    </div>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col class="form-actions" cols="2" align-h="end">
                    <b-button variant="primary" @click="login" :disabled="email==''">Login</b-button>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col>
                    <router-link :to="'Register'">If you don't have an account yet please register</router-link>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
    import {auth} from '../util/firebase';

    export default {
        props: {
            type: String
        },
        data() {
            return {
                email: "",
                password: "",
                error: null,
            };
        },
        created() {
            const self = this;
            auth.onAuthStateChanged(user => {
                if(user) {
                    if(self.$router.currentRoute.path != "/") {
                        self.$router.push("/");
                    }
                }
            });
        },
        methods: {
            login() {
                auth.signInWithEmailAndPassword(this.email, this.password)
                    .catch((err) => {
                        this.error = err;
                    })
            }
        }
    };
</script>

<style scoped>
    .page {
        margin-top:20%
    }
</style>
