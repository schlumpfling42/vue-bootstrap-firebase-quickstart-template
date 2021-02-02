# Registration and Login
This is going to be a big section that I don't want to break apart, so bear with me.
## Add Registration
In VSCode add a new file [`src/components/Register.vue`](../src/components/Register.vue). The template section has a bootsrap form and input elements for name, email and password. Have a look at the [Bootstrap Vue documentation](https://bootstrap-vue.org/) for details.
```
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
```
`v-model` is an important attribute. It creates a 2-way binding between a variable and the HTML element. 2-way binding means, Vue is going to read the variable to set the elements value and in the case of inputs also to write changes. So Vue takes care of setting the initial value and updating the variable .. pretty cool isn't it?
```
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
```
`{{ error }}` inside the html tags will be replaced with the content of the veriable `error`. It will be updated every time `error` changes.
```
                        {{ error }}
                    </div>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col class="form-actions" cols="2" align-h="end">
```
`@click` is an event handler. When the button is clicked the method/function with the name tha `submit` will be call.
```
                    <b-button variant="primary" @click="submit" :disabled="email==''">Register</b-button>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <b-col>
```
The element `router-link` allows to define a link to a route with the name of the route. Have a look again at [`src/main.js`](../src/main.js). 
```
                    <router-link :to="'Login'">If you already have an account yet please log in</router-link>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>
<script>
    // firebase.js exports the authentication object from Firebase and we will
    // use it here to create a new user
    import {auth} from '../util/firebase';

    export default {
        props: {
            type: String
        },
        // data defines the variable that can be used inside of these component the input elements use this variables
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
        // watch defines watchers for variables. When a variable changes the associated code will be executed.
        watch: {
            password: function() {
                this.checkPasswords();
            },
            passwordVerification: function() {
                this.checkPasswords();
            },
        },
        // The functions and methods that can be used within the component.
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
            // Create the user with the given email and password
            submit() {
                // this is not available in a callback, so defining a const that will be accessible 
                const self = this;
                // the function 'createUserWithEmailAndPassword' will not execute right away, 
                // but it will call 'then' when it was successful and 'catch' when there was an error
                auth.createUserWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        // the display name cannot be set on create, so set the name on the user after it was created
                        data.user.updateProfile({
                            displayName: this.name
                        }).then(() => self.$router.push("/"))
                    })
                    .catch(err => {
                        console.log(err);
                        // show an error message (remember {{ error }} when there was an error)
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
```
## Add Login
In VSCode add a new file [`src/components/Login.vue`](../src/components/Login.vue). 
```
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
            // The function'onAuthStateChange' is a listener that will be called when a user logged in or out.
            // Here we care only about login, the logged in user will be the parameter
            auth.onAuthStateChanged(user => {
                if(user) {
                    // 'push' will change the address in the browser address bar. All addresses will be relative to the hostname
                    self.$router.push("/");
                }
            });
        },
        methods: {
            // Sign in with the email address and password. An error will be displayed if you entered invalid credentials.
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

```
## Add Registration and Login to routes
The routes had to be reworked, we don't want to show the navigation header when we register a user or login. Vue allows nested routing. There will be 3 top level components. Regiter, Login and Main. Main will ake over the functionionality App had before. \
[`main.js`](../src/main.js) now looks like this: 
```
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Router from 'vue-router';
import App from './App.vue';
import Main from './components/Main.vue';
import HelloWorld from './components/HelloWorld.vue';
import Page from './components/Page.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

// Install BootstrapVue plugin
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install Router plugin
Vue.use(Router);

const router = new Router({
  mode: 'history',
  // Define 3 routes, each route has a name and a url. 
  // Changing the URL will lead the matching Compontent bein displayed
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          name: 'Home',
          path: '/',
          component: HelloWorld,
        },
        {
          name: 'Page1',
          path: '/Page1',
          component: Page,
          props: {
            title: "Page1"
          }
        },
        {
          name: 'Page2',
          path: '/page2',
          component: Page,
          props: {
            title: "Page2"
          }
        },
      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```
Here is the new [`App.vue`](../src/App.vue)
```
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {auth} from './util/firebase'

export default {
  name: 'App',
  created() {
    const self = this;
    // We use the 'onAuthStateChange' to determin if the user is logged in. If not, redirect to the login page. This is the login check. 
    // When you open the app in the browser, it will try to figure out if we have a valid session .. very elegant and super easy
    auth.onAuthStateChanged(function(user) {
      if (!user) {
        self.$router.push("/login");
      }
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```
Here is the new [`Main.vue`](../src/components/Main.vue)
```
<template>
  <div>
    <NavigationBar />
    <!-- This is the element the route component will be displayed in -->
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar';

export default {
  components: {
    NavigationBar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```
## Fire it up and test it out
If the server is not running, run `npm run serve` to try it out. Change things around in the compnent, to see the effects.
When you are done run `npm run build` and `firebase deploy` to deploy the changes.