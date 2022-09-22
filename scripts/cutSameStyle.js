/**
 * 剪映剪同款脚本
 */
let timeOut = 2000;
let keyWord = '探店';
let position = '菜适口烤鸭店'
function clickCenter(element) {
  let centerX = element.bounds().centerX();
  let centerY = element.bounds().centerY();
  // console.log('centerX, centerY',centerX, centerY);
  if(centerY > device.height) {
    swipe(200,1000,200,200,700);
    sleep(timeOut);
    return false;
  }else {
    click(centerX, centerY);
    return true;
  }
}

function handleYuanyuanFolder (index) {
  //寻找对应yuanyuan_i目录
  let yuanyuanFolderStr = 'yuanyuan_'+ (100 + index);
  console.log('yuanyuanFolderStr',yuanyuanFolderStr);
  let count = 0;
  while(!text(yuanyuanFolderStr).exists()) {
    swipe(200,device.height-20,200,200,1000);
    count += 1;
    if(count == 3) {
      toast("任务失败，准备开始下一个任务");
    }
    sleep(timeOut);
  }
  let yuanyuanFolder = text(yuanyuanFolderStr).findOne();
  sleep(timeOut);
  let result = clickCenter(yuanyuanFolder);
  if(result === false) {
    console.log('clickCenter result',result);
    return false;
  }
  console.log('handleYuanyuanFolder result',result);
  sleep(timeOut);
  let Source = id("com.lemon.lv:id/iv_local_multi_media_thumbnail").findOne();
  clickCenter(Source);
  sleep(timeOut);
  let select_folder = id('com.lemon.lv:id/tv_header_title').findOne();
  let clickSelect_folder = clickCenter(select_folder);
  sleep(timeOut);
  return result;
}

function handleTemplate(keyWord){
  let input_searchOut = id('com.lemon.lv:id/searchTv').findOne();
  clickCenter(input_searchOut);
  sleep(timeOut);
  setClip(keyWord);
  let input_searchIn = className('com.bytedance.ies.xelement.input.LynxInputView').findOne();
  let input_searchBounds = input_searchIn.bounds();
  longClick(input_searchBounds.centerX(),input_searchBounds.centerY())
  sleep(timeOut);
  click(input_searchBounds.left+20,input_searchBounds.bottom+50);
  sleep(timeOut)
  console.log(device.height,device.width);
  click(device.width-30,device.height-30);
  sleep(timeOut);
  // 选择3-5片段数
  let button_sourceCount = text("片段数").findOne();
  clickCenter(button_sourceCount);
  sleep(timeOut*2);
  let button_threeToFive = text("3-5").findOne();
  console.log('button_threeToFive',button_threeToFive);
  sleep(timeOut);
  clickCenter(button_threeToFive)
  sleep(timeOut);
  let button_enter = text("确定").findOne();
  clickCenter(button_enter);
  sleep(timeOut);
  for(let i = 0;i < Math.random()*5;i++) {
    swipe(200,1200,200,200,1000);
    sleep(timeOut);
  }
  let candidateTemplate = textContains("使用量").find();
  clickCenter(candidateTemplate[2]);
  sleep(timeOut);
}

function cleanYuanyuanFolder(index) {
  let path = '/sdcard/Download/yuanyuan_'+(100 + index);
  let result = files.removeDir(path);
  if(result){
    toast("clean yuanyuan_"+(100 + index));
  }
  return result;
}

function nextAndExport() {
  let nextArrow = id("com.lemon.lv:id/nextArrowIv").findOne();
  clickCenter(nextArrow);
  sleep(timeOut);
  text("导出").findOne().click();
  sleep(timeOut); 
  id("com.lemon.lv:id/save").findOne().click();
  sleep(timeOut*5);
}

function shareToDouyin() {
  let button_shareToDouyin = text("分享到抖音").findOne();
  clickCenter(button_shareToDouyin);
  sleep(timeOut*3);
  let button_douyinNext = text("下一步").findOne();
  clickCenter(button_douyinNext);
  sleep(timeOut*2)
  id('com.ss.android.ugc.aweme:id/elm').setText("卡点视频 开心快乐");
  sleep(2000);
  let button_position = id("com.ss.android.ugc.aweme:id/me_").findOne();
  clickCenter(button_position);
  sleep(2000);
  text("搜索位置").findOne().setText(position);
  sleep(timeOut);
  id("com.ss.android.ugc.aweme:id/hf5").findOne().click();
  sleep(timeOut);
  id('com.ss.android.ugc.aweme:id/mp1').findOne().click();
  console.log("发布成功");
}

function run(){
  home();
  sleep(timeOut);
  click("剪映");
  sleep(timeOut);
  let button_cutSameStyle = text("剪同款").findOne();
  clickCenter(button_cutSameStyle);
  sleep(timeOut);
  handleTemplate(keyWord);


  id('com.lemon.lv:id/userCutSame').findOne().click();
  sleep(timeOut);


  // 点击文件夹选择按钮
  let select_folder = id('com.lemon.lv:id/tv_header_title').findOne();
  let clickSelect_folder = clickCenter(select_folder);
  sleep(timeOut);


  let needSourceCount = id("com.lemon.lv:id/time_tv").find().length;
  console.log('needSourceCount',needSourceCount);
  sleep(timeOut);
  for(let i = 1;i < needSourceCount+1;i++) {
    let result = handleYuanyuanFolder(i);
    if(result === false) {
      handleYuanyuanFolder(i);
    }
  }
  //收起yuanyuan选择栏
  id('com.lemon.lv:id/tv_header_title').findOne();
  clickCenter(select_folder);
  sleep(timeOut);
  nextAndExport();

  //清理资源文件
  console.log('开始清理资源文件');
  for(let i = 1;i < needSourceCount+1;i++){
    cleanYuanyuanFolder(i)
  }

  shareToDouyin();
}

run();


