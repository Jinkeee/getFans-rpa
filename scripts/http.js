
/**
 * 此文件为测试文件，功能为http请求apitest文件下载在模拟器本地 并发到抖音 
 */
var url = "https://apitest.yuantaikeji.com/merchant/HSmU66BheZ/morenfenzu/LVX3SQ/douyin/模板3.mp4";
var res = http.get(url);
if (res.statusCode != 200) {
    toast("请求失败");
}
console.log("res.body",res.body)
files.writeBytes("/sdcard/Download/shipin.mp4", res.body.bytes());
toast("下载成功");
app.viewFile("/sdcard/Movies/shipin.mp4");
// 点击抖音加号按钮视频
sleep(1000);
home();
sleep(1000)
click('抖音');
let jiahaoButton = id('com.ss.android.ugc.aweme:id/pnn').findOne();
click(jiahaoButton.bounds().centerX(),jiahaoButton.bounds().centerY());
sleep(5000);
//点击从相册选择视频
id('com.ss.android.ugc.aweme:id/bg9').click();
sleep(2000);
//选择第一个视频
let video = id('com.ss.android.ugc.aweme:id/d7e').findOne();
console.log(video.bounds())
video.parent().click();
sleep(2000);
id('com.ss.android.ugc.aweme:id/fjp').click();
sleep(2000);
id('com.ss.android.ugc.aweme:id/elm').setText("卡点视频 开心快乐");
sleep(2000);
id('com.ss.android.ugc.aweme:id/content').findOne().click();
sleep(2000);
desc("你在哪里").findOne().click();
sleep(2000);
text("查看更多").findOne().click();
sleep(2000);
text("团购活动").findOne().click();
sleep(2000);
text("返回").findOne().click();
sleep(2000);
text("返回").findOne().click();
sleep(2000);
id('com.ss.android.ugc.aweme:id/mp1').findOne().click();
console.log("发布成功");
