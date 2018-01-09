new Vue({
    el: '#map',
    data: {
        data: {
            '上海': ['上海市'],
            '北京': ['北京市'],
            '四川': ['成都'],
            '广东': ['广州', '深圳'],
            '江苏': ['南京', '苏州'],
            '浙江': ['杭州'],
            '湖北': ['武汉'],
            '湖南': ['长沙'],
            '澳门': ['澳门'],
            '重庆': ['重庆'],
            '香港': ['香港']
        },
        showData: ['上海市'],   //二级select
        victoriaData: [],   //店面数据
        map: {}, //百度地图对象
        city: '上海市'
    },
    computed: {
        options() {
            let that = this;
            return {
                renderOptions: { map: this.map },
                onSearchComplete: function (results) {
                    if (that.local.getStatus() == BMAP_STATUS_SUCCESS) {  // 判断状态是否正确     
                        for (var i = 0; i < results.getCurrentNumPois(); i++) {
                            that.victoriaData.push({
                                title: results.getPoi(i).title,
                                address: results.getPoi(i).address,
                                point: results.getPoi(i).point
                            });
                        }
                    }
                }
            }
        },
        local() {
            return new BMap.LocalSearch(this.city, this.options)
        }
    },
    methods: {
        setShowData: function (event) {
            let index = event.target.selectedIndex;
            let value = event.target.options[index].value;
            let city = document.getElementById('city');
            if (this.data[value]) {
                this.showData = this.data[value];
                city.selectedIndex = 0;
            }
            else {
                this.showData = [];
            }
        },
        //单击滚动视图移动地图
        mapPosition: function(index){
            let point = this.victoriaData[index].point;
            this.map.setZoom(20);
            this.map.panTo(new BMap.Point(point.lng,point.lat));
        },
        goCity: function(event){
            let index = event.target.selectedIndex;
            let value = event.target.options[index].value;
            this.city = value;
            this.victoriaData = [];
            this.map.centerAndZoom(value,11);
            this.local.search("Victoria's Secret");
        },
    },
    mounted() {
        let that = this;
        that.map = new BMap.Map("baidu");          // 创建地图实例  
        that.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        that.map.centerAndZoom(new BMap.Point(121.474215, 31.236917), 11);
        that.local.search("Victoria's Secret");
        document.getElementById('city').selectedIndex=1;
        document.getElementById('province').selectedIndex=1;
    }
})