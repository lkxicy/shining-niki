Page({

  /**
   * 页面的初始数据
   */
  data: {
    //数据源
    xiyou: [10, 20, 30, 60, 90, 120, 170, 210, 270,
      330, 400, 470, 540, 630, 720, 820, 920, 1030, 1140,
      1260, 1386, 1518, 1656, 1800, 1950, 2106, 2268, 2436, 2610,
      2790, 2976, 3168, 3366, 3570, 3780, 3996, 4218, 4446, 4680,
      4920, 5166, 5418, 5676, 5940, 6210, 6486, 6768, 7056, 7350,
      7650, 7956, 8268, 8586, 8910, 9240, 9576, 9918, 10266, 10620],

    feifan: [10, 20, 30, 60, 90, 120, 170, 210, 270,
      330, 400, 470, 540, 630, 720, 820, 920, 1030, 1140,
      1260, 1386, 1518, 1656, 1800, 1950, 2106, 2268, 2436, 2610,
      2790, 2976, 3168, 3366, 3570, 3780, 3996, 4218, 4446, 4680,
      4920, 5166, 5418, 5676, 5940, 6210, 6486, 6768, 7056, 7350,
      7650, 7956, 8268, 8586, 8910, 9240, 9576, 9918, 10266, 10620,
      10980, 11346, 11718, 12096, 12480, 12870, 13266, 13668, 14076, 14490,
      14910, 15336, 15768, 16206, 16650, 17100, 17556, 18018, 18486, 18960],

    shine: [15, 25, 40, 80, 120, 160, 230, 280, 360,
      440, 530, 630, 720, 840, 960, 1090, 1230, 1370, 1520,
      1680, 1848, 2024, 2208, 2400, 2600, 2808, 3024, 3248, 3480,
      3720, 3968, 4224, 4488, 4760, 5040, 5328, 5624, 5928, 6240,
      6560, 6888, 7224, 7568, 7920, 8280, 8648, 9024, 9408, 9800,
      10200, 10608, 11024, 11448, 11800, 12320, 12768, 13224, 13668, 14160,
      14640, 15128, 15624, 16128, 16640, 17160, 17688, 18224, 18768, 19320,
      19880, 20248, 21024, 21608, 22200, 22800, 23408, 24024, 24648, 25280],


    //等级
    level_from: '1',
    level_from_min: '1',
    level_from_max: '80',

    level_to: '1',
    level_to_min: '1',
    level_to_max: '80',

    //材料
    small:'0.00',
    middle:'0.00',
    big:'0.00',
    jingyan:'0',
    money:'0',//参数为big*2.5


    //1闪耀，2非凡，3稀有
    radio: '1',

    rare:'闪耀'
  },

  //等级
  onPush_from(event) {

    let that=this;
    this.setData({
      level_from: event.detail
    })

    if (that.data.rare == '稀有') {
      var sum = 0;
      for (var i = this.data.level_from-1; i < this.data.level_to-1; i++) {
        //需要的经验值
        sum += this.data.xiyou[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum= sum*2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.feifan[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.shine[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

  },

  onPush_to(event) {

    let that = this;
    this.setData({
      level_to: event.detail
    })

    if (that.data.rare == '稀有') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.xiyou[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.feifan[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.shine[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

  },

  //选择稀有度
  onSelect(event) {

    var small_sum = 0;
    var middle_sum = 0;
    var big_sum = 0;
    var money_sum = 0;

    let that = this;
    this.setData({
      radio: event.detail
    })
    if (that.data.radio == 1) {
      this.setData({
        //限制等级
        level_to_max:'80',
        level_from_max:'80',
        rare: '闪耀'
      })
    }
    else if (that.data.radio == 2) {
      this.setData({
        level_to_max: '80',
        level_from_max: '80',
        rare: '非凡'
      })
    }
    else if (that.data.radio == 3) {
      this.setData({
        level_to_max: '60',
        level_from_max: '60',
        rare: '稀有'
      })
      //防止先选择高等级后选择低等级出现BUG，两个if可以同时执行检测
      if(this.data.level_from>this.data.level_from_max){
        this.setData({
          level_from:this.data.level_from_max
        })
      }
      if (this.data.level_to > this.data.level_to_max) {
        this.setData({
          level_to: this.data.level_to_max
        })
      }
    }

    if (that.data.rare == '稀有') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.xiyou[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '非凡') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.feifan[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
        money: money_sum
      });
    }

    if (that.data.rare == '闪耀') {
      var sum = 0;
      for (var i = this.data.level_from - 1; i < this.data.level_to - 1; i++) {
        //需要的经验值
        sum += this.data.shine[i];
      }

      var small_sum = (sum / 25).toFixed(2)
      var middle_sum = (sum / 150).toFixed(2)
      var big_sum = (sum / 500).toFixed(2)
      var money_sum = sum * 2.5

      this.setData({
        jingyan: sum,
        small: small_sum,
        middle: middle_sum,
        big: big_sum,
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