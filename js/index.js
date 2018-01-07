// const t1= '';
// $.get("file:///D:/WebProject/github/victorias/test1.html",function(result){
//     t1=result
// })
// $.ajax({
//     url: "test1.html",
//     dataType: 'html',
//     success: function(result){
//         t1=result
//     }
//   });
const Foo = { template: '<iframe src="./test1.html"></iframe>' }
const Bar = { template: '<div>bar</div>' }


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]


const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')