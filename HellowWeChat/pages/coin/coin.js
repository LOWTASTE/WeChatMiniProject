// pages/coin/coin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        complete: true,
        coinFace: 0,
        msgCoin: "🐎遇事不决👻抛个硬币🐒",
        imgUrl: "./img/title.png"
    },
    selectCoin:function selectCoin (e) {
        // coinFace : this.data.coinFace = 1;
        // const xxx = e.currentTarget.dataset.xxx;
        this.setData({
            coinFace: Math.floor(Math.random() * 1001),
        })
        if(this.data.coinFace == 0){
            this.setData({
                msgCoin : "一千零一分之一"
            })
        } else if(this.data.coinFace % 2 == 0){
            this.setData({
                msgCoin : "👼正面👼",
                imgUrl: "./img/top.png"
            })
        } else if (this.data.coinFace % 2 == 1) {
            this.setData({
                msgCoin : "😈反面😈",
                imgUrl: "./img/bottom.png"
            })
        }
        this.setData({
            complete: true
        })
        console.log(this.data.coinFace),
        console.log(this.data.msgCoin)
    },


    selectCoinService:function selectCoinService (e) {
        if (this.data.complete == true) {
            this.setData({
                complete : false,
                msgCoin : "🦋答案在空中转🦚"
            })
            console.log("答案在空中转")
            setTimeout(this.selectCoin,2500)
        } else {
            console.log("block-上一个硬币还在飞")
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