Page({
    data: {
        arr: []
    },
    onLoad: function () {
        this.setData({
            arr: [1, 2, 3]
        })
    },
    onShareAppMessage: function () {
        return {
            title: '自定义转发标题',
            path: '/page/index/index'
        }
    },
    /**
     * 点击数值翻倍
     */
    click: function () {
        console.log('点击事件');
        for (var i = 0; i < this.data.arr.length; i++) {
            this.data.arr[i] = this.data.arr[i] * 2
        }
        this.setData({
            arr: this.data.arr
        })
    }
})