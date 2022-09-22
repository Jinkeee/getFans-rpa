/**
 * 精准行业脚本
 */
var precisionIndustry = {};
precisionIndustry.script = function () {
  let rpaSettingData = files.read("settingJson/rpaSetting.json");
  let rpaSettingDataJson = JSON.parse(rpaSettingData);
  let settingData = rpaSettingDataJson.precisionIndustrySetting;

  var followPercent = settingData.followPercent;
  var dianzanPercent = settingData.dianzanPercent;
  var commentDianzanPercent = settingData.commentDianzanPercent;
  var commentPercent = settingData.commentPercent;
  var candidateComment = settingData.candidateComment;
  var minFansCount = settingData.minFansCount;
  var maxFansCount = settingData.maxFansCount;
  var videoCount = settingData.videoCount;
  var maxRunCount = settingData.maxRunCount;
  var runSpeed = settingData.runSpeed;
  //计算运行速度对应的延时时间
  function computeTimeout(runSpeed) {
    var level = parseInt(runSpeed / 20);
    var timeout = 1000 + (5 - level) * 500;
    return timeout;
  }
  var timeOut = computeTimeout(runSpeed);
  //返回主界面
  home();
  sleep(timeOut);
  //打开抖音
  click("抖音");
  sleep(timeOut);

  var operatedFansArray = []; //记录遍历过的粉丝
  var curRunCount = 0;
  while (curRunCount <= maxRunCount) {
    // 得到首屏的用户列表
    var fansList = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").find();
    var followList = className("com.lynx.tasm.behavior.ui.view.UIView").find();
    for (var j = 0; j < fansList.length - 1; j++) {
      sleep(timeOut);
      // 判断是否为已关注状态
      if (followList[j].text() === "已关注按钮") {
        // 已关注状态直接进行下一次循环
        continue;
      }
      // 进入用户详细信息页面
      sleep(timeOut);
      var fans = fansList[j];
      clickCenter(fans);
      sleep(timeOut * 2);
      // 单击作品按钮
      sleep(timeOut);
      toast("单击作品");
      var videoListButton = id("com.ss.android.ugc.aweme:id/nma").findOne();
      // 先进行一个上滑操作后，再点击作品按钮
      sleep(timeOut);
      swipe(
        videoListButton.bounds().centerX(),
        videoListButton.bounds().centerY(),
        videoListButton.bounds().centerX(),
        videoListButton.bounds().centerY() - 400,
        1000
      );
      sleep(timeOut);
      // 上移后，位置改变，重新获取按钮进行点击
      videoListButton = id("com.ss.android.ugc.aweme:id/nma").findOne();
      clickCenter(videoListButton);

      sleep(timeOut);
      if (randonToPercentage() <= followPercent) {
        // 进行关注
        sleep(timeOut);
        toast("开始关注");
        var followButton = id("com.ss.android.ugc.aweme:id/fpj")
          .findOne()
          .child(0);
        if (followButton.text() === "关注") {
          clickCenter(followButton);
        }
      }

      sleep(timeOut);
      toast("进入第一个页面");
      // 获取用户页面的第一个视频，并进入
      var firstVideo = id("com.ss.android.ugc.aweme:id/c++").findOne();
      clickCenter(firstVideo);

      sleep(timeOut);
      if (randonToPercentage() <= dianzanPercent) {
        // 小红心
        sleep(timeOut);
        toast("执行点赞");
        var needClickHeartCount = id("com.ss.android.ugc.aweme:id/dst")
          .descContains("未点赞")
          .find().length;
        // console.log('needClickHeartCount',needClickHeartCount);
        for (var m = 0; m < needClickHeartCount; m += 1) {
          sleep(timeOut);
          var needClickHeart = id("com.ss.android.ugc.aweme:id/dst")
            .descContains("未点赞")
            .find();
          if (
            needClickHeart[m] &&
            typeof needClickHeart[m].click() === "function"
          ) {
            needClickHeart[m].click();
          }
        }
      }

      // 打开评论区
      sleep(timeOut);
      toast("打开评论区");
      var commontArea = id("com.ss.android.ugc.aweme:id/cqr").findOne();
      clickCenter(commontArea);

      sleep(timeOut);
      if (randonToPercentage() <= commentDianzanPercent) {
        // 评论点赞
        sleep(timeOut);
        toast("评论点赞");
        likePartComment();
        // fullId = com.ss.android.ugc.aweme:id/htt
        var zanCommentAreas = id("com.ss.android.ugc.aweme:id/ir4").find();
        var zanCommentCount = zanCommentAreas.length;
        // 给首屏展示出来的评论进行点赞
        for (var n = 0; n < zanCommentCount; n++) {
          console.log(n, zanCommentAreas[n]);
          if (
            zanCommentAreas[n].desc() &&
            zanCommentAreas[n].desc().includes("已选中")
          ) {
            console.log("自己有desc");
            // 已经是点赞状态，不进行操作
            continue;
          } else if (
            zanCommentAreas[n].child(0) &&
            zanCommentAreas[n].child(0).desc().includes("已选中")
          ) {
            console.log("没有desc", zanCommentAreas[n].child(0));
            continue;
          }
          clickCenter(zanCommentAreas[n]);
        }
      }

      sleep(timeOut);
      if (randonToPercentage() <= commentPercent) {
        // 评论
        sleep(timeOut);
        toast("执行评论");
        var candidateCommentArray = candidateComment.split("#");
        var getRandomInt = Math.floor(
          Math.random(0, candidateCommentArray.length + 1)
        );
        var commentText = candidateCommentArray[getRandomInt];
        id("com.ss.android.ugc.aweme:id/cqd").click();
        sleep(timeOut);
        id("com.ss.android.ugc.aweme:id/cqd").setText(commentText);
        sleep(timeOut);
        id("com.ss.android.ugc.aweme:id/cr5").findOne().click();
      }

      // // 关闭评论区
      // sleep(timeOut);
      // toast("关闭评论区")
      // id("com.ss.android.ugc.aweme:id/back_btn").click();

      // 返回用户信息界面
      sleep(timeOut);
      toast("返回用户信息界面");
      id("com.ss.android.ugc.aweme:id/back_btn").click();

      // 返回搜索用户界面
      sleep(timeOut);
      toast("返回搜索用户界面");
      id("com.ss.android.ugc.aweme:id/back_btn").click();
      sleep(timeOut);

      // 记录当前运气了多少次
      curRunCount++;
    }
    // 向下移动
    sleep(timeOut);
    toast("向下滑动");
    var swipWrapper = id("com.ss.android.ugc.aweme:id/i7k").findOne();
    var swipeStartY = swipWrapper.bounds().bottom - 100;
    var swipeEndY = swipWrapper.bounds().top - 100;
    swipe(100, swipeStartY, 100, swipeEndY, 1000);
    sleep(timeOut);
  }
};

module.exports = precisionIndustry;

// 单击屏幕的指定位置
function clickCenter(target) {
  click(target.bounds().centerX(), target.bounds().centerY());
}

// 得到两位数的随机数 例如：23，32，12
function randonToPercentage() {
  return Math.round(Math.random() * 100);
}
