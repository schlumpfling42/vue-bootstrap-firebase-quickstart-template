# Walkthrough of the files generated when setting up the project
## [`package.json`](./01_InitialProjectFiles/package.json) 
```
{ 
```
 Basic properties
```
  "name": "vue-bootstrap-quickstart",  
  "version": "0.1.0",  
  "private": true,  
```
Run scripts you can use, e.g ``npm run serve`` will start the local server and run your project
```
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
```
Software packages your project uses. The command `npm install <packagename>` when running will update this section.
```
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^2.6.11"
  },
```
Software packages your project uses for running or building a deployable version of your project
```
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "babel-eslint": "^10.1.0",
    "vue-template-compiler": "^2.6.11"
  },
```
Configuration for the linter
```
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
```
Supported browsers
```
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```
## [`public/index.html`](./InitialProjectFiles/public/index.html)
```
<!DOCTYPE html>
<html>
```
The HTML document has 2 major sections. \
Head contains meta information like charset, title ...
```
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="favicon.ico">
    <title>Vue Bootstrap Starter</title>
  </head>
```
Body contains the elements that are used to render the page, for VueJS we only need one element and that element has to have and `id` attribute with a value that will be referenced later. Remember that the element VueJS will use as a starting point has the value `app`. You can add more elements in here, but for this project we are not going to do that.
```
  <body>
    <div id="app"></div>
  </body>
</html>
```

## [`src\main.js`](./InitialProjectFiles/src/main.js)
The keyword `import` will let you use functions defined outside of this file. \
 `import Vue from 'vue'` will import the component `Vue` from the package `vue` \
 With that you can use the component `Vue`.
```
import Vue from 'vue'
```
`import App from './App.vue'` will import the component `App` from the file `App.vue` 
```
import App from './App.vue'

Vue.config.productionTip = false
```
Create a new instance of the component Vue, it will render the Component `App` and mount it as an element with the id `app`. Go back and look at the index.html. We defined an element with the id `app`. What this statment does (really simplified) is to initialize VueJS and replace the element in index.html with the component defined in `App.vue`. We will add a more configuration here later.
```
new Vue({
  render: h => h(App),
}).$mount('#app')

```
## [`src\App.vue`](./InitialProjectFiles/src/App.vue)
A vue file has 3 segments:
* template contains the html code
* script contains the Javascript code
* style contains the css code
```
<template>
```
The template  contains the HTML code for the component. The App is very plain, later on we will talk about variables and actions.
```
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    ```
    The property `msg` is defined in the component `HelloWorld` but the value is defined here.
    ```
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
```
The first section of the code contains import statements. Here we only import the HelloWorld component. 
```
import HelloWorld from './components/HelloWorld.vue'
```
The keyword `export` defines that we want to make the element available for other components to use. The keyword `default` defines that this export is the one export that is used, when you just import the component and not define to use a specific export by name. In this case we export an object. You can create an object starting with `{` and ending with `}`, everything in between are attributes or functions of this object. We will get to the details later.
So we are defining an object here that has to follow certain conventions, so that VueJS can use it to control the template. You can define properties, variables and functions that can be used by the template.
```
export default {
  ```
  The obejct has 2 attributes, a name and components. The attribute components define which imported components can be user in the template.
  ```
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style>
```
In `style` you can defined the attributes of HTML elements.
Her we define that the element with the id `app` uses a certain font, font style and color
```
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
## [`components\HelloWorld.vue`](./InitialProjectFiles/src/components/HelloWorld.vue)
```
<template>
  <div class="hello">
  ```
  The expression in between `<h1>` and `</h1>` is a variable defined in the script section. The double curly brackets signal that `msg` is either a propoerty or an attribue.
  ```
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  ```
  The attribute `props` defines the properties the component accepts. The property values are defined in the component that uses this component. See Apps.vue.
  ```
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```