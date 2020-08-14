Page({

  /**
   * 页面的初始数据
   */
  data: {

    list: ['头饰 丨 深渊薄雾 丨 1188', '手饰 丨 暗羽吟唱 丨 1188', '美瞳 丨 寒星 丨 660', '设计师之影 丨 莉莉斯 · 羽落星渊 丨 1500', '真我复苏 丨 莉莉斯 · 羽落星渊 丨 750', '连衣裙 丨 羽落星渊 丨 990', '底妆 丨 暗夜重生 丨 264', '鞋子 丨 轻语夜歌 丨 528', '颈饰 丨 夜羽涟漪 丨 330', '眉妆 丨 坠落之羽 丨 198', '发型 丨 午夜变奏 丨 528', '袜子 丨 暗星十字 丨 264', '唇妆 丨 炽烈暮色 丨 165', '耳饰 丨 天鹅梦影 丨 198'],

    list_cost:[1188,1188,660,1500,750,990,264,528,330,198,528,264,165,198],

    columns: ['永恒的传奇第1名', '永恒的传奇第2名', '永恒的传奇第3名', '永恒的传奇第4~50名', '永恒的传奇第51~100名', '永恒的传奇第101~200名', '永恒的传奇第201~500名', '永恒的传奇第501~1000名', '永恒的传奇第1001~2000名', '永恒的传奇第2001~3000名', '永恒的传奇第3001~5000名', '永恒的传奇第5001~10000名', '颠覆未来之王3星', '颠覆未来之王2星', '颠覆未来之王1星', '灵感重构大师3星', '灵感重构大师2星', '灵感重构大师1星', '记忆创造者3星', '记忆创造者3星', '记忆创造者3星', '自由搭配师3星', '自由搭配师3星','自由搭配师3星','初心学徒'],

    flower_week:[600,580,560,520,480,440,400,360,320,280,240,200,150,140,130,120,110,90,80,70,60,50,40,30,20],

    //用于获取结算段位位置
    inx:0,
    
    isShow:true,
    show:false,

    year_to:2020,
    month_to:12,
    date_to:20,

    //结算天数
    day:0,

    //结算周数
    week:0,

    flower_now:0,
    flower_need:0,
    flower_all:0,
    flower_reduce:0,

    //每天需要购买的挑战次数
    time_need:0,

    ok:'可以',

    flower_free:0,


    rank:' ',

    //影之召唤个数
    count:0

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y = date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    var d=0;

    if(this.data.year_to>Y){
      //这个算法是起始和终止相差一年不同月的算法
      //循环把日期差转化成天数差
      for (var i = M; i < 12; i++) {
        //31天的月份
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
          d += 31;
        }
        //闰年的二月，29天
        else if (i == 2 && Y % 4 == 0) {
          d += 29;
        }
        //平年的二月，28天
        else if (i == 2 && Y % 4 != 0) {
          d += 28;
        }
        //剩余的30天的月份
        else {
          d += 30;
        }
      }

      //如果是12月的话，上面的for不会触发，需要这一条if
      if(M==12){
        d+=31;
      }
    
      //计算年前月份天数
      d = d - D;

      for (var i = 1; i < this.data.month_to; i++) {
        //31天的月份
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
          d += 31;
        }
        //闰年的二月，29天
        else if (i == 2 && Y % 4 == 0) {
          d += 29;
        }
        //平年的二月，28天
        else if (i == 2 && Y % 4 != 0) {
          d += 28;
        }
        //剩余的30天的月份
        else {
          d += 30;
        }
      }

      //把本月天数减去再把目标月天数加上
      d = d + this.data.date_to - 1;
      var a = d / 7;
      var q = a.toFixed(0);
      var w;
    }

    else{
      //这个算法是起始和终止同年不同月的算法
      //循环把日期差转化成天数差
      for (var i=M;i<this.data.month_to;i++){
        //31天的月份
        if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12){
          d+=31;
        }
        //闰年的二月，29天
        else if (i == 2 &&Y%4==0){
          d+=29;
        }
        //平年的二月，28天
        else if (i == 2 &&Y%4!=0){
          d+=28;
        }
        //剩余的30天的月份
        else{
          d+=30;
        }
      }

      //把本月天数减去再把目标月天数加上
      d = d - D + this.data.date_to - 1;
      var a = d / 7;
      var q = a.toFixed(0);
      var w;
    }

    if (q <= a) {
      w = (a+1).toFixed(0);
    }
    else{
      w=q;
    }
    this.setData({
      day:d,
      week:w
    });
  },

  //确定动作
  onConfirm(event) {
    const { picker, value, index } = event.detail;

    //免费获得
    var a=this.data.week*this.data.flower_week[index]+this.data.day*25

    //相差的花
    var b=(this.data.flower_need-this.data.flower_now-a)+(this.data.count*750);
    var c=0;
    var t=0;
    var o='';

    if(b<0){
      b=0;
    }
    else if(b>0){
      c=(b/5)/this.data.day;
    }

    if(c>0){
      t=c.toFixed(1);
    }
    else if(c<=0){
      t=0;
    }

    if(c>10){
      o='不可以'
    }
    else if(c<=10){
      o='可以'
    }


    this.setData({
      ok:o,
      time_need: t,
      flower_reduce:b,
      rank:value,
      show:false,
      flower_free:a
    });
  },

  //取消动作
  onCancel() {
    this.setData({
      show: false
    });
  },

  //点击幕布动作
  onOverlay(){
    this.setData({
      show: false
    });
  },

  //点击按钮动作
  onOpen() {
    this.setData({
      show: true
    });
  },

  //输入影之召唤动作
  onShadow(event){

    var cou=0;

    //是数字或者空串，空串当做0处理，非全数字也当0处理
    if (isNaN(event.detail)==false){
      cou=event.detail;
    }
    else{
      cou=0;
    }

    //相差的花
    var b = this.data.flower_need+(cou*750) - this.data.flower_free - this.data.flower_now;

    //还未整数化的次数
    var c = 0;

    //整数化后的次数
    var t = 0;

    //是否可以
    var o = '';

    if (b < 0) {
      b = 0;
    }
    else if (b > 0) {
      c = (b / 5) / this.data.day;
    }

    if (c > 0) {
      t = c.toFixed(1);
    }
    else if (c <= 0) {
      t = 0;
    }

    if (c > 10) {
      o = '不可以'
    }
    else if (c <= 10) {
      o = '可以'
    }

    this.setData({
      count:cou,
      ok: o,
      time_need: t,
      flower_reduce: b
    });
  },

  //输入赞礼之花动作
  onFlower(event){

    var now;

    //是数字或者空串，空串当做0处理，非全数字也当0处理
    if (isNaN(event.detail) == false) {
      now=event.detail;
    }
    else {
      now=0;
    }

    //相差的花
    var b = this.data.flower_need+(this.data.count*750) - this.data.flower_free - now;

    //还未整数化的次数
    var c = 0;

    //整数化后的次数
    var t = 0;

    //是否可以
    var o = '';

    if (b < 0) {
      b = 0;
    }
    else if (b > 0) {
      c = (b / 5) / this.data.day;
    }

    if (c > 0) {
      t = c.toFixed(1);
    }
    else if (c <= 0) {
      t = 0;
    }

    if (c > 10) {
      o = '不可以'
    }
    else if (c <= 10) {
      o = '可以'
    }

    this.setData({
      flower_now:now,
      ok: o,
      time_need: t,
      flower_reduce: b
    });

  },

  //选择需求部位动作，算法有点蠢(字符串匹配)->_<-
  onChange(event) {
    var a=0;

    for(var i=0;;i++){
      if (event.detail[i]==null){
        break;
      }
      else if (event.detail[i] =='外套 丨 玄朱流金 丨 1188') {
        a+=1188;
      }
      else if (event.detail[i] == '手饰 丨 赤霞金光 丨 792') {
        a+=1188;
      }
      else if (event.detail[i] == '下装 丨 凤舞罗裳 丨 726') {
        a+=660;
      }
      else if (event.detail[i] == '设计师之影 丨 锦衣行歌 丨 1500') {
        a+=1500;
      }
      else if (event.detail[i] == '真我复苏 丨 锦衣行歌 丨 750') {
        a+=750;
      }
      else if (event.detail[i] == '美瞳 丨 星辰垂影 丨 528') {
        a+=990;
      }
      else if (event.detail[i] == '上衣 丨 浴火之歌 丨 792') {
        a+=264;
      }
      else if (event.detail[i] == '底妆 丨 月映朱颜 丨 246') {
        a+=528;
      }
      else if (event.detail[i] == '鞋子 丨 风跃火舞 丨 528') {
        a+=330;
      }
      else if (event.detail[i] == '耳饰 丨 火漆之印 丨 330') {
        a+=198;
      }
      else if (event.detail[i] == '眉毛 丨 新月弯刀 丨 198') {
        a+=528;
      }
      else if (event.detail[i] == '发型 丨 激流银辉 丨 528') {
        a+=264;
      }
      else if (event.detail[i] == '袜子 丨 层林夜奔 丨 264') {
        a+=165;
      }
      else if (event.detail[i] == '唇妆 丨 点绛明珠 丨 165') {
        a+=198;
      }
    }

    //相差的花
    var b = a+this.data.count*750 - this.data.flower_free-this.data.flower_now;

    //还未整数化的次数
    var c = 0;

    //整数化后的次数
    var t = 0;

    //是否可以
    var o = '';

    if (b < 0) {
      b = 0;
    }
    else if (b > 0) {
      c = (b / 5) / this.data.day;
    }

    if (c > 0) {
      t = c.toFixed(1);
    }
    else if (c <= 0) {
      t = 0;
    }

    if (c > 10) {
      o = '不可以'
    }
    else if (c <= 10) {
      o = '可以'
    }

    this.setData({
      ok: o,
      time_need: t,
      flower_reduce:b,
      result: event.detail,
      flower_need:a
    });
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() { },

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