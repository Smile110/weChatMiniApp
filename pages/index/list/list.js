// pages/index/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                id: 0,
                name: '高级双床房',
                marketPrice: '300',
                address: '北京市海淀区',
                thumbnail: 'list-1',
                facilities: ['WiFi', '停车场', '餐厅', '自助选房']
            },
            {
                id: 1,
                name: '总统套房',
                marketPrice: '300',
                address: '北京市海淀区',
                thumbnail: 'list-2',
                facilities: ['WiFi', '停车场', '餐厅']
            },
            {
                id: 2,
                name: '皇室套房',
                marketPrice: '300',
                address: '北京市海淀区',
                thumbnail: 'list-1',
                facilities: ['WiFi', '停车场','自助选房']
            }

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})