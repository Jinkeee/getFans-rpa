/**
 * 精准引流脚本
 */
var accurateGetFans = {};
accurateGetFans.script = function () {
  let rpaSettingData = files.read("settingJson/rpaSetting.json");
  let rpaSettingDataJson = JSON.parse(rpaSettingData);
  let settingData = rpaSettingDataJson.accurateGetFansSetting;
  
  let followPercent = settingData.followPercent;
  let dianzanPercent = settingData.dianzanPercent;
  let commentDianzanPercent = settingData.commentDianzanPercent;
  let commentPercent = settingData.commentPercent;
  let candidateComment = settingData.candidateComment;
  let minFansCount = settingData.minFansCount;
  let maxFansCount = settingData.maxFansCount;
  let videoCount = settingData.videoCount;
  let maxRunCount = settingData.maxRunCount;
  let runSpeed = settingData.runSpeed;
  //计算运行速度对应的延时时间
  function computeTimeout(runSpeed) {
    let level = parseInt(runSpeed / 20);
    let timeout = 1000 + (5 - level) * 500;
    return timeout;
  }
  let timeOut = computeTimeout(runSpeed);
  //返回主界面
  home();
  sleep(timeOut);
  //打开抖音
  click("抖音");
  sleep(timeOut);
  const operatedFansArray = []; //记录遍历过的粉丝
  //遍历博主的每一个粉丝
  for (let i = 0; i < maxRunCount; ) {
    var fansList = id("com.ss.android.ugc.aweme:id/ntp").find();
    fansList = fansList[1];
    console.log("fansListChildCount", fansList.childCount());
    for (let j = 0; j < fansList.childCount(); j++) {
      toast(i);
      sleep(timeOut);
      var fansList = id("com.ss.android.ugc.aweme:id/ntp").find();
      fansList = fansList[1];
      // sleep(2000);
      let fans = fansList.child(j).child(0).child(0);
      sleep(timeOut);
      // console.log('fans[',i,'].bounds()',fans.bounds());
      click(fans.bounds().centerX(), fans.bounds().centerY());
      i++;
      sleep(timeOut * 2);
      if (id("com.ss.android.ugc.aweme:id/title").exists()) {
        let accountTitle = id("com.ss.android.ugc.aweme:id/title")
          .findOne()
          .getText();
        sleep(timeOut);
        console.log("accountTitle", accountTitle);
        if (accountTitle != null && accountTitle.indexOf("私密") > -1) {
          toast("跳过私密账号");
          sleep(timeOut);
          id("com.ss.android.ugc.aweme:id/back_btn").findOne().click();
          continue;
        } else if (
          accountTitle != null &&
          accountTitle.indexOf("还没有作品") > -1
        ) {
          toast("作品数不符合要求");
          sleep(timeOut);
          id("com.ss.android.ugc.aweme:id/back_btn").findOne().click();
          continue;
        }
      }
      sleep(timeOut);
      let douyinIdText = id("com.ss.android.ugc.aweme:id/spb")
        .findOne()
        .getText();
      sleep(timeOut);
      let douyinId = douyinIdText.replace("抖音号：", "");
      console.log(
        "operatedFansArray.indexOf(douyinId)",
        operatedFansArray.indexOf(douyinId)
      );
      if (operatedFansArray.indexOf(douyinId) >= 0) {
        console.log("operatedFansArray", operatedFansArray);
        console.log("douyinId", douyinId);
        toast("该用户已操作");
        // 返回粉丝列表，进行下一个粉丝的拉粉
        sleep(timeOut);
        id("com.ss.android.ugc.aweme:id/back_btn").findOne().click();
        continue;
      }
      operatedFansArray.push(douyinId);
      //将2.3万粉丝转化为23000
      let fansFansCountText = id("com.ss.android.ugc.aweme:id/svx")
        .findOne()
        .getText();
      let fansFansCount = id("com.ss.android.ugc.aweme:id/svx")
        .findOne()
        .getText();
      if (fansFansCountText.indexOf("万") > -1) {
        fansFansCount = parseInt(fansFansCountText) * 10000;
      }
      console.log("fansFansCount", fansFansCount);
      let videoArea = id("com.ss.android.ugc.aweme:id/e=4").findOne();
      sleep(timeOut);
      let worksCount = videoArea.childCount();
      console.log("worksCount", worksCount);
      if (fansFansCount < minFansCount || fansFansCount > maxFansCount) {
        toast("粉丝数不符合");
        sleep(timeOut);
      } else if (worksCount < videoCount) {
        //没有发布过作品直接返回
        toast("作品数少于2");
        sleep(timeOut);
      } else {
        //有作品开始对至多最新的maxCommentVideoCount个作品进行点赞评论
        toast("作品数符合");
        //关注
        if (id("com.ss.android.ugc.aweme:id/mix").exists()) {
          if (Math.random() * 100 < followPercent) {
            toast("执行关注");
            id("com.ss.android.ugc.aweme:id/mix").click();
            swipe(300, 700, 300, 0, 1000);
          }
        }
        // let videoArea = id('com.ss.android.ugc.aweme:id/e=4').findOne();
        // let videoCount = videoArea.childCount() > 1 ? 1 : videoArea.childCount();
        let operateVideoCount = 1;
        console.log("videoCount", operateVideoCount);
        sleep(timeOut);
        for (let k = 0; k < operateVideoCount; k += 1) {
          sleep(timeOut);
          let videoArea = id("com.ss.android.ugc.aweme:id/e=4").findOne();
          // console.log('videoArea.child(k)',videoArea.child(k))
          let video = videoArea.child(k);
          // console.log('video.bounds()',video.bounds());
          sleep(timeOut);
          click(video.bounds().centerX(), video.bounds().centerY());
          sleep(timeOut * 2);
          //点赞
          if (Math.random() * 100 < dianzanPercent) {
            toast("执行点赞");
            let needClickHeartCount = id("com.ss.android.ugc.aweme:id/dst")
              .descContains("未点赞")
              .find().length;
            // console.log('needClickHeartCount',needClickHeartCount);
            for (let m = 0; m < needClickHeartCount; m += 1) {
              sleep(timeOut);
              let needClickHeart = id("com.ss.android.ugc.aweme:id/dst")
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
          sleep(timeOut);
          if (Math.random() * 100 < commentDianzanPercent) {
            toast("执行评论点赞");
            //打开评论区
            let commentArea = id("com.ss.android.ugc.aweme:id/cqr").findOne();
            console.log(
              "commentArea.bounds()",
              commentArea.bounds().centerX(),
              commentArea.bounds().centerY()
            );
            click(
              commentArea.bounds().centerX(),
              commentArea.bounds().centerY()
            );
            sleep(timeOut);
            //评论点赞
            let zanCommentAreas = id("com.ss.android.ugc.aweme:id/dsj").find();
            sleep(timeOut);
            let zanCommentCount = zanCommentAreas.length;
            for (let n = 0; n < zanCommentCount; n++) {
              sleep(timeOut);
              zanCommentAreas = id("com.ss.android.ugc.aweme:id/dsj").find();
              let zanCommentArea = zanCommentAreas[n];
              click(
                zanCommentArea.bounds().centerX(),
                zanCommentArea.bounds().centerY()
              );
            }
            //评论
            if (Math.random() * 100 < commentPercent) {
              toast("执行评论");
              let candidateCommentArray = candidateComment.split("#");
              let getRandomInt = Math.floor(
                Math.random(0, candidateCommentArray.length + 1)
              );
              let commentText = candidateCommentArray[getRandomInt];
              id("com.ss.android.ugc.aweme:id/cqd").click();
              sleep(timeOut);
              id("com.ss.android.ugc.aweme:id/cqd").setText(commentText);
              sleep(timeOut);
              id("com.ss.android.ugc.aweme:id/cr5").findOne().click();
              sleep(timeOut);
            }
            click(100, 100);
            sleep(timeOut);
          }
          id("com.ss.android.ugc.aweme:id/back_btn").click();
        }
        sleep(timeOut);
      }
      // 返回粉丝列表，进行下一个粉丝的拉粉
      id("com.ss.android.ugc.aweme:id/back_btn").findOne().click();
    }
    sleep(timeOut);
    let swipeStartX = fansList.bounds().centerX();
    let swipeStartY = fansList.bounds().bottom - 1;
    let swipeEndX = fansList.bounds().centerX();
    let swipeEndY = fansList.bounds().top;
    swipe(swipeStartX, swipeStartY, swipeEndX, swipeEndY, 1000);
    sleep(timeOut);
  }
};

module.exports = accurateGetFans;
