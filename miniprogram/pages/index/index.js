
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //数据源
    xiyou: [
      [8, 3, 5000],
      [12, 5, 5000],
      [20, 8, 5000],
      [28, 11, 5000],
      [32, 13, 5000],
      [20, 8, 25000],
      [24, 10, 15000],
      [36, 14, 15000],
      [60, 24, 15000],
      [84, 34, 15000],
      [96, 38, 15000],
      [60, 24, 75000],
      [48, 19, 30000],
      [72, 29, 30000],
      [120, 48, 30000],
      [168, 67, 30000],
      [192, 77, 30000],
      [120, 48, 150000]
    ],

    feifan: [
      [16, 6, 16875],
      [24, 10, 16875],
      [40, 16, 16875],
      [56, 22, 16875],
      [64, 26, 16875],
      [40, 16, 50625],
      [32, 13, 33750],
      [48, 19, 33750],
      [80, 32, 33750],
      [112, 45, 33750],
      [128, 51, 33750],
      [80, 32, 101250],
      [48, 19, 50625],
      [72, 29, 50625],
      [120, 48, 50625],
      [168, 67, 50625],
      [192, 77, 50625],
      [120, 48, 151875],
      [64, 26, 67500],
      [96, 38, 67500],
      [160, 64, 67500],
      [224, 90, 67500],
      [256, 102, 67500],
      [160, 64, 202500]
    ],

    shine: [
      [20, 8, 25000],
      [30, 12, 25000],
      [50, 20, 25000],
      [70, 28, 25000],
      [80, 32, 25000],
      [50, 20, 75000],
      [40, 16, 50000],
      [60, 24, 50000],
      [100, 40, 50000],
      [140, 56, 50000],
      [160, 64, 50000],
      [100, 40, 150000],
      [60, 24, 75000],
      [96, 36, 75000],
      [150, 60, 75000],
      [210, 84, 75000],
      [240, 96, 75000],
      [150, 60, 225000],
      [80, 32, 100000],
      [120, 48, 100000],
      [200, 80, 100000],
      [280, 112, 100000],
      [320, 128, 100000],
      [200, 80, 300000]
    ],

    //星数
    star_from: '1',
    star_from_min: '1',
    star_from_max: '5',

    star_to: '1',
    star_to_min: '1',
    star_to_max: '5',

    //阶数
    step_from: '0',
    step_from_min: '0',
    step_from_max: '5',

    step_to: '0',
    step_to_min: '0',
    step_to_max: '5',

    //材料和金币
    rare_key:'0',
    normal_key:'0',
    money:'0',

    //1闪耀，2非凡，3稀有
    radio: '1',

    rare:'闪耀'
  },


  //选择星级，模板 let that=this  that.data.param
  onChange_from(event) {

    var normal_sum=0;
    var rare_sum=0;
    var money_sum=0;

    let that = this;
    this.setData({
      star_from: event.detail,
      step_from_max:'5'
    });
    if(that.data.star_from==that.data.star_from_max){
      this.setData({
        step_from: '0',
        step_from_max:'0'
      });
    }

    if (that.data.rare == '稀有') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.xiyou[i][0]
        rare_sum += this.data.xiyou[i][1]
        money_sum += this.data.xiyou[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.feifan[i][0]
        rare_sum += this.data.feifan[i][1]
        money_sum += this.data.feifan[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.shine[i][0]
        rare_sum += this.data.shine[i][1]
        money_sum += this.data.shine[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }
    
  },

  onChange_to(event) {

    var normal_sum = 0;
    var rare_sum = 0;
    var money_sum = 0;

    let that=this;
    this.setData({
      star_to: event.detail,
      step_to_max:'5'
    });
    if (that.data.star_to == that.data.star_to_max) {
      this.setData({
        step_to: '0',
        step_to_max: '0'
      });
    }

    if (that.data.rare == '稀有') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.xiyou[i][0]
        rare_sum += this.data.xiyou[i][1]
        money_sum += this.data.xiyou[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.feifan[i][0]
        rare_sum += this.data.feifan[i][1]
        money_sum += this.data.feifan[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.shine[i][0]
        rare_sum += this.data.shine[i][1]
        money_sum += this.data.shine[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }
  },

  //选择阶数
  onPush_from(event) {

    var normal_sum = 0;
    var rare_sum = 0;
    var money_sum = 0;
    let that = this;

    this.setData({
      step_from: event.detail
    })
    if (that.data.rare == '稀有') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.xiyou[i][0]
        rare_sum += this.data.xiyou[i][1]
        money_sum += this.data.xiyou[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.feifan[i][0]
        rare_sum += this.data.feifan[i][1]
        money_sum += this.data.feifan[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.shine[i][0]
        rare_sum += this.data.shine[i][1]
        money_sum += this.data.shine[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }
  },

  onPush_to(event) {

    var normal_sum = 0;
    var rare_sum = 0;
    var money_sum = 0;

    let that = this;

    this.setData({
      step_to: event.detail
    })
    if (that.data.rare == '稀有') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.xiyou[i][0]
        rare_sum += this.data.xiyou[i][1]
        money_sum += this.data.xiyou[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.feifan[i][0]
        rare_sum += this.data.feifan[i][1]
        money_sum += this.data.feifan[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.shine[i][0]
        rare_sum += this.data.shine[i][1]
        money_sum += this.data.shine[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }
  },

  //选择稀有度
  onSelect(event){

    var normal_sum = 0;
    var rare_sum = 0;
    var money_sum = 0;

    let that = this;
    this.setData({
      radio:event.detail
    })
    if(that.data.radio==1)
    {
      this.setData({
        star_to_max: '5',
        star_from_max: '5',
        rare: '闪耀'
      })
    }
    else if (that.data.radio == 2) {
      this.setData({
        star_to_max: '5',
        star_from_max: '5',
        rare: '非凡'
      })
    }
    else if (that.data.radio == 3) {
      this.setData({
        star_to_max:'4',
        star_from_max:'4',
        rare: '稀有'
      })
      if(this.data.star_from>this.data.star_from_max){
        this.setData({
          star_from: this.data.star_from_max
        })
      }
      if (this.data.star_to > this.data.star_to_max) {
        this.setData({
          star_to: this.data.star_to_max
        })
      }
    }

    if (that.data.rare == '稀有') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.xiyou[i][0]
        rare_sum += this.data.xiyou[i][1]
        money_sum += this.data.xiyou[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.feifan[i][0]
        rare_sum += this.data.feifan[i][1]
        money_sum += this.data.feifan[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var front = this.data.star_to - this.data.star_from
      var behind = this.data.step_to - this.data.step_from
      var j
      var sum = 6 * front + behind
      for (var i = 6 * (this.data.star_from - 1) + parseInt(this.data.step_from), j = 0; j < sum; i++ , j++) {
        normal_sum += this.data.shine[i][0]
        rare_sum += this.data.shine[i][1]
        money_sum += this.data.shine[i][2]
      }
      this.setData({
        normal_key: normal_sum,
        rare_key: rare_sum,
        money: money_sum
      });
    }

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