// import "./views/module1";
import React from "react"
import ReactDom from "react-dom"

ReactDom.render(
    <h1>Hello from React!</h1>,
    document.getElementById("reactApp")
)

import Vue from 'vue'
import App from './App.vue'

new Vue({
    //router,
    //store,
    render: h => h(App)
}).$mount('#vueApp')