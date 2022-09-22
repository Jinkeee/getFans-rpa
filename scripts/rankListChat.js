/**
 * 榜单私信脚本
 */
var rankListChat = {};
rankListChat.script = function () {
  let rpaSettingData = files.read("settingJson/rpaSetting.json");
  let rpaSettingDataJson = JSON.parse(rpaSettingData);
  let settingData = rpaSettingDataJson.rankListChatSetting;
  
  let followPercent = settingData.followPercent;
  let chatPercent = settingData.chatPercent;
  let chatFloorCount = settingData.chatFloorCount;
  let chatContent = settingData.chatContent;
  let maxRunCount = settingData.maxRunCount;
  let runSpeed = settingData.runSpeed;
  // 计算运行速度对应的延时时间
  function computeTimeout(runSpeed) {
    let level = parseInt(runSpeed / 20);
    let timeout = 1000 + (5 - level) * 500;
    return timeout;
  }
  let timeOut = computeTimeout(runSpeed);
  let operatedFansArray = [];

  //返回主界面
  home();
  sleep (timeOut);
  //打开抖音
  click ('抖音');
  sleep (timeOut*2);
  for(let i = 0;i < maxRunCount;) {
    sleep(timeOut*3);
    if(textContains("直播已结束").exists()) {
      toast('直播已结束,跳过');
      swipe(200,1100,200,200,1000);
      sleep(timeOut*3);
      continue;
    }
    let rankButton = id('com.ss.android.ugc.aweme:id/laq').findOne();
    let rankUserCount = rankButton.child(0).getText();
    console.log('rankUserCount',rankUserCount);
    id('com.ss.android.ugc.aweme:id/laq').click()
    sleep(timeOut*2);
    if(textContains("***").exists()) {
      toast('主播设置不支持查看资料,跳过');
      click(200,300);
      sleep(timeOut*2);
      swipe(200,1100,200,200,1000);
      sleep(timeOut*2);
      continue;
    }
    let rankList = descContains("分数").find();
    sleep(timeOut)
    console.log('rankList.length',rankList.length);
    let userCount = rankUserCount>chatFloorCount?chatFloorCount:rankUserCount;
    //j来控制操作到整个榜单的第几个用户
    for(let j = 0;j < userCount&&i < maxRunCount;) {
      //再拿一次界面显示区域内的榜单列表
      let rankList = descContains("分数").find();
      //l来控制操作到当前界面显示区域内的第几个用户
      for(let l = 0;l < rankList.length-2&&j < userCount;l++) {
        let userBounds = rankList[l].bounds();
        sleep(timeOut)
        click(userBounds.centerX(),userBounds.centerY());
        sleep(timeOut)
        id('com.ss.android.ugc.aweme:id/k1+').click();
        sleep(timeOut)
        i++;
        j++;
        sleep(timeOut);
        let douyinIdText = id('com.ss.android.ugc.aweme:id/spb').findOne().getText();
        sleep(timeOut);
        let douyinId = douyinIdText.replace('抖音号：','');
        console.log('operatedFansArray.indexOf(douyinId)',operatedFansArray.indexOf(douyinId))
        if(operatedFansArray.indexOf(douyinId) >= 0) {
          console.log('operatedFansArray',operatedFansArray)
          console.log('douyinId',douyinId)
          toast('该用户已操作');
          // 返回粉丝列表，进行下一个粉丝的拉粉
          sleep(timeOut)
          id('com.ss.android.ugc.aweme:id/back_btn').findOne().click();
          continue;
        }
        operatedFansArray.push(douyinId);
        //关注
        if(id('com.ss.android.ugc.aweme:id/mix').exists()){
          if(Math.random()*100 < followPercent) {
            toast('执行关注');
            id('com.ss.android.ugc.aweme:id/mix').click();
            sleep(timeOut);
          }
        }
        //私信
        if(Math.random()*100 < chatPercent) {
          id('com.ss.android.ugc.aweme:id/p83').click();
          sleep(timeOut);
          let chatButton = text("发私信").findOne();
          sleep(timeOut);
          chatButton.parent().click();
          sleep(timeOut);
          text("发送消息").setText(chatContent);
          //点击发送按钮
          id('com.ss.android.ugc.aweme:id/j9').click();
          sleep(timeOut);
          //点击返回按钮
          id('com.ss.android.ugc.aweme:id/i0l').click();
        }
        sleep(timeOut);
        id('com.ss.android.ugc.aweme:id/back_btn').findOne().click();
        sleep(timeOut)
      }
      let MyInformation = descContains("我的信息：").findOne();
      let swipeStartX = MyInformation.bounds().centerX();
      let swipeStartY = MyInformation.bounds().top -1;
      let rankTopOne = descContains("分数").findOne();
      let swipeEndX = rankTopOne.bounds().centerX();
      let swipeEndY = swipeStartY - rankTopOne.bounds().height()*4;
      swipe(swipeStartX,swipeStartY,swipeEndX,swipeEndY,1000);
    }
    click(200,300);
    sleep(timeOut);
    swipe(200,1100,200,200,1000);
  }

};

module.exports = rankListChat;