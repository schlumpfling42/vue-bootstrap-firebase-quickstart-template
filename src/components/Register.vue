<template>
    <div class="page">
        <b-form class="form-rgister" autocomplete="off">
            <h1 class="h3 mb-3 font-weight-normal">Please register yourself as a user</h1>
            <b-row align-h="center">
                <b-col cols="7">
                    <b-form-group
                    id="label-name"
                    label="Name"
                    label-for="name"
                    label-align="left"
                    label-cols="3">
                    <b-form-input
                        id="name"
                        v-model="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="7">
                    <b-form-group
                    id="label-email"
                    label="Email"
                    label-for="email"
                    label-align="left"
                    label-cols="3">
                    <b-form-input
                        id="email"
                        v-model="email"
                        type="text"
                        placeholder="Enter your email"
                        required
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="7">
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
                <b-col cols="7">
                    <b-form-group
                    id="label-password-verify"
                    label="Password verification"
                    label-for="passwordVerify"
                    label-align="left"
                    label-cols="3">
                    <b-form-input
                        id="passwordVerify"
                        v-model="passwordVerify"
                        type="password"
                        placeholder="Enter password verification"
                        required
                    />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col cols="7">
                    <div class="alert alert-danger" role="alert" v-if="error">
                        {{ error }}
                    </div>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col class="form-actions" cols="2" align-h="end">
                    <b-button variant="primary" @click="submit" :disabled="email==''">Register</b-button>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col>
                    <router-link :to="'Login'">If you already have an account yet please log in</router-link>
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
                name: "",
                email: "",
                password: "",
                passwordVerify: "",
                error: null,
                canSubmit: false
            };
        },
        watch: {
            password: function() {
                this.checkPasswords();
            },
            passwordVerification: function() {
                this.checkPasswords();
            },
        },
        methods: {
            checkPasswords() {
                if(this.password !== this.passwordVerify) {
                    this.error = "Passwords don't match";
                    this.canSubmit = false;
                } else if(this.password === "") {
                    this.canSubmit = false;
                } else {
                    this.error = null;
                    this.canSubmit = true;
                }
            },
            submit() {
                const self = this;
                auth.createUserWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        data.user.updateProfile({
                            displayName: this.name
                        }).then(() => self.$router.push("/"))
                    })
                    .catch(err => {
                        console.log(err);
                        this.error = err.message;
                    });
            },
        }
    };
</script>

<style scoped>
    .page {
        margin-top:20%
    }
</style>