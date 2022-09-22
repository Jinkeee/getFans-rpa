/**
 * 截流评论脚本
 */

var interceptingComments = {};
interceptingComments.script = function(){
  let rpaSettingData = files.read("settingJson/rpaSetting.json");
  let rpaSettingDataJson = JSON.parse(rpaSettingData);
  let settingData = rpaSettingDataJson.interceptingCommentsSetting;

  let followPercent = settingData.followPercent;
  let chatPercent = settingData.chatPercentPercent;
  let candidateChat = settingData.candidateChat;
  let keyWords = settingData.keyWords;
  // let IP = settingData.IP;
  let minFansCount = settingData.minFansCount;
  let maxFansCount = settingData.maxFansCount;
  let videoCount = settingData.videoCount;
  let maxRunCount = settingData.maxRunCount;
  let runSpeed = settingData.runSpeed;


  //计算运行速度对应的延时时间
  function computeTimeout(runSpeed) {
    var level = parseInt(runSpeed / 20);
    var timeout = 1000 + (5 - level) * 500;
    return timeout;
  }
  var timeOut = computeTimeout(runSpeed);

  // 单击屏幕的指定位置
  function clickCenter(target) {
    click(target.bounds().centerX(), target.bounds().centerY());
  }

  function init() {
    home();
    sleep(timeOut);
    click("抖音");
    sleep(timeOut);
    // 获取视频
    var videoList = id("com.ss.android.ugc.aweme:id/container").find();
    // 遍历videoList，对每个video进行截流评论
    for (var i = 0; i < videoList.length; i++) {
      sleep(timeOut);
      toast("进入第" + (i + 1) + "个视频");
      // 获取对应的video，并进入视频中
      var video = videoList[i];
      clickCenter(video);
      sleep(timeOut);

      // 打开评论区
      sleep(timeOut);
      openComment();

      // 对评论中有关键字的用户进行私信
      sleep(timeOut);
      filterKeywordAndEnterUserPage();
    }
  }

  // openComment();
  /**
   * 打开评论区
   * 如果没有评论则不打开
   */
  function openComment() {
    // 得到评论区的wrapper
    var commentWrapper = id("com.ss.android.ugc.aweme:id/cqr").findOne();
    // 得到comment的描述
    var commentDescription = commentWrapper.desc();
    // 判断是否有评论
    if (commentDescription.includes("首评")) {
      toast("没有评论");
      // 没有评论直接退出
      return;
    }
    sleep(timeOut);
    toast("进入评论区");
    clickCenter(commentWrapper);

    sleep(timeOut);
    toast("获取评论列表");
  }

  var filterArray = keyWords.split('#');

  /**
   * 对评论中有关键字的用户进行私信
   */
  function filterKeywordAndEnterUserPage() {
    sleep(timeOut);
    toast("获取评论列表");
    var commentUserList = id("com.ss.android.ugc.aweme:id/c5l").find();
    console.log(commentUserList.length);
    // 遍历每个条评论，符合条件进行私信
    for (var i = 0; i < commentUserList.length; i++) {
      var comment = commentUserList[i];
      console.log("comment", comment);
      var contentDescription = comment.contentDescription;
      sleep(timeOut);
      for (var j = 0; j < filterArray.length; j++) {
        console.log(j, "符合条件");
        var filter = filterArray[j];
        if (contentDescription && contentDescription.includes(filter)) {
          toast(contentDescription);
          //得到头像的坐标
          sleep(timeOut);
          var avatar = comment.child(0).child(1);
          //点击头像进行私信
          toast("进入用户信息界面");
          clickCenter(avatar);
          // 对用户进行关注并私信
          sleep(timeOut);
          followAndEnterPrivatePage();

          // 返回视频界面
          sleep(timeOut);
          back();
          break;
        }
      }
    }
    // 返回我的页面
    sleep(timeOut);
    back();
    sleep(timeOut);
    back();
  }

  /**
   * 对用户进行关注并私信
   */
  function followAndEnterPrivatePage() {
    
    if(Math.random()*100 < followPercent) {
      console.log("进行关注");
      // 获取关注按钮
      var followButton = id("com.ss.android.ugc.aweme:id/fpj").findOne().child(0);

      // 关注过就不再进行后续操作
      if (followButton.text() === "已关注" || followButton.text() === "互相关注") {
        console.log("关注过，直接退出");
        return;
      }
      sleep(timeOut);
      // 进行关注
      toast("进行关注");
      clickCenter(followButton);
    }
    if(Math.random()*100 < chatPercent) {
      // 获取私信按钮
      sleep(timeOut);
      var privateButton = id("com.ss.android.ugc.aweme:id/oa2").findOne();
      toast("进行私信");
      clickCenter(privateButton);

      // 发送私信
      sleep(timeOut);
      sendPrivateLetter();
    }
  }

  /**
   * 发送私信
   */
  function sendPrivateLetter() {
    console.log("发送私信");
    // 查看当前我是否发送过信息
    var myAvatar = id("com.ss.android.ugc.aweme:id/ann").exists();
    console.log(myAvatar);
    if (myAvatar) {
      // 返回用户界面
      sleep(timeOut);
      privatePageBack();
      return;
    }

    sleep(timeOut);
    // 获取到输入框的焦点
    var inputButton = id("com.ss.android.ugc.aweme:id/kok").findOne();
    clickCenter(inputButton);
    // 对输入框进行写入操作
    inputButton.setText(candidateChat);

    sleep(timeOut);
    // 单击发送按钮
    var sendButton = id("com.ss.android.ugc.aweme:id/j9").findOne();
    clickCenter(sendButton);

    // 返回用户界面
    sleep(timeOut);
    privatePageBack();
  }

  /**
   * 返回上一级
   */
  function back() {
    var backButton = id("com.ss.android.ugc.aweme:id/back_btn").findOne();
    clickCenter(backButton);
  }

  /**
   * 私信页面的返回
   */
  function privatePageBack() {
    console.log('privatePageBack')
    id('com.ss.android.ugc.aweme:id/i0l').findOne().click();
  }

  init();

}

module.exports = interceptingComments;
