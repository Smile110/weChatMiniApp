// pages/shop/shop.js
Page({
  data: {
    shopItem: {
        label: '使用模板template'
    },
    bannerAlbum: [
      './images/banner/banner-1.jpg',
      './images/banner/banner-2.jpg',
      './images/banner/banner-3.jpg',
    ]
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  onLoad: function (option) {
    console.log(option.query)
  }
})
