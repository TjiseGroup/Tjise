const chen = { template: '<iframe src="./component/chen.html"></iframe>' }
const dingYue = { template: '<iframe src="./component/dingYue.html"></iframe>' }
const underwear = { template: '<iframe src="./component/underwear.html"></iframe>' }
const meizhuang = { template: '<iframe src="./component/meizhuang.html"></iframe>' }
const sport = { template: '<iframe src="./component/sport.html"></iframe>' }
const pink = { template: '<iframe src="./component/pink.html"></iframe>' }
const map = { template: '<iframe src="./component/map.html"></iframe>' }

const routes = [
  { path: '/', component: chen },
  { path: '/chen', component: chen },
  { path: '/underwear', component: underwear },
  { path: '/meizhuang', component: meizhuang },
  { path: '/sport', component: sport },
  { path: '/pink', component: pink },
  { path: '/map', component: map },
  { path: '/dingYue', component: dingYue }
]


const router = new VueRouter({
  routes
})


const app = new Vue({
  router,
  data: {
    show: false
  },
  computed: {
    ifIndex: function () {
      return (this.$route.path === '/chen' || this.$route.path === '/') ? false : true;
    }
  },
  methods: {
    go: function () {
      let that = this;
      this.show = false;
      setTimeout(() => {
        that.show = true;
      }, 900)
    }
  },
  mounted() {
    this.show = true;
  }
}).$mount('#app')

window.addEventListener('message', function (e) {
  let iframeCont = document.getElementsByClassName('iframeCont')[0];
  iframeCont.style.height = (e.data + 1) + 'px';
}, false);