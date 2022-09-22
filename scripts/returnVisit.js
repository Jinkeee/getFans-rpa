/**
 * 赞回访脚本
 */
var returnVisit = {}

returnVisit.script = function (setting) {
    
let rpaSettingData = files.read("settingJson/rpaSetting.json");
let rpaSettingDataJson = JSON.parse(rpaSettingData);
let settingData = rpaSettingDataJson.returnVisitSetting;

let runSpeed = settingData.timeout;
//计算运行速度对应的延时时间
function computeTimeout(runSpeed) {
    let level = parseInt(runSpeed / 20)
    let timeout = 1000 + (5 - level) * 500
    return timeout
}

//延迟
let timeout
timeout = computeTimeout(runSpeed)


toast("开始执行...")
console.setPosition(200, 100)
console.show()  //打开悬浮窗
console.verbose("回到主页面")
home() //回到主界面
sleep(timeout)
console.verbose("进入抖音")
app.launchPackage("com.ss.android.ugc.aweme")
sleep(timeout)


while (!packageName("com.ss.android.ugc.aweme").exists()) {

};
console.verbose("抖音启动成功！")
sleep(2500)

/**
 * 进入我的主页
 */
const goToMyPage = function () {
    const myButton = id('com.ss.android.ugc.aweme:id/pn0').text('我').descMatches('^(?=.*我)(?=.*按钮).*$').find()
    for (let i = 0; i < myButton.length; i++) {
        if (device.height > myButton[i].bounds().top && device.height > myButton[i].bounds().bottom && myButton[i].bounds().bottom > 0 && myButton[i].bounds().top > 0) {
            myButton[i].parent().click()
        }
    }
    sleep(timeout)
}


/**
 * 获取我的作品
 * @returns 我的作品-数组
 */
const getVideo = function () {
    const myVideo = id("com.ss.android.ugc.aweme:id/jyi").find()
    return myVideo
}

/**
 * 打开评论区
 * @returns Boolean
 */
const openComment = function () {
    const commentButton = id("com.ss.android.ugc.aweme:id/ctz").className("android.widget.LinearLayout").descContains("评论").find()

    for (let i = 0; i < commentButton.length; i++) {
        if (device.height > commentButton[i].bounds().top && device.height > commentButton[i].bounds().bottom && commentButton[i].bounds().bottom > 0 && commentButton[i].bounds().top > 0) {
            commentButton[i].click()
            sleep(timeout)
            return true
        }
    }
    return false
}


/**
 * 遍历控件数组
 * @param {控件数组} UIObjectArray 
 */
const ergodicVideos = function (UIObjectArray, setting) {
    // console.log(UIObjectArray.length);
    for (let i = 0; i < UIObjectArray.length; i++) {
        console.info("--------------------------");
        console.info("开始执行第" + (i + 1) + "个视频");
        UIObjectArray[i].click()
        sleep(timeout)
        console.log("打开评论区");
        openComment()
        console.log("进入赞列表");
        id("com.ss.android.ugc.aweme:id/pm7").findOne().child(1).click()
        sleep(timeout)
        goToOtherPage(setting)


        sleep(1500)
        id("crt").findOne().click()
        sleep(timeout)
        id("back_btn").findOne().click()
        console.log("回到我的页面")
        console.info("--------------------------");
        if (i === setting.operateCounts - 1) {
            return true
        }
    }
    console.warn("执行完毕");
    return true
}

/**
 * 进入点赞我的作品的人的主页里去
 */
const goToOtherPage = function (setting) {
    id('com.ss.android.ugc.aweme:id/r+4').waitFor()
    const peopleLikeMe = id('com.ss.android.ugc.aweme:id/r+4').find()
    if (peopleLikeMe.length === 0) {
        console.log("这个作品没有人点赞哦");
        return true
    }
    for (let i = 0; i < setting.perVideoVisitCounts; i++) {
        if(i === peopleLikeMe.length) return true
        id("nmp").waitFor()
        //进入点赞者的界面
        peopleLikeMe[i].parent().click()
        sleep(timeout)
        if (isFansCountAccord(setting.minFans, setting.maxFans)) {//粉丝数量
            console.info('符合要求粉丝数...继续操作')

            //作品数量


            //
            if (setting.isOnlyHandleMaster) {//只操作蓝v打勾
                if (isOnlyHandleMaster()) {
                    console.log("该账号是蓝v...继续操作")
                    sleep(timeout)
                    integrateVisitorOperation(setting)
                    id("back_btn").findOne().click()
                    sleep(timeout)
                } else {
                    console.error("该账号不是蓝v...返回")
                    id("back_btn").findOne().click()
                    sleep(timeout)
                }
            } else if (setting.isNotHandleMaster) { //不操作蓝v打勾
                if (isOnlyHandleMaster()) {
                    console.log("该账号不是蓝v...继续操作")
                    integrateVisitorOperation(setting)
                    id("back_btn").findOne().click()
                    sleep(timeout)
                } else {
                    console.error("该账号是蓝v...返回")
                    id("back_btn").findOne().click()
                    sleep(timeout)
                }
            } else {
                integrateVisitorOperation(setting)
                sleep(1500)
                id("back_btn").findOne().click()
                sleep(timeout)
            }
        } else {
            console.error("粉丝数不符合...返回")
            id("back_btn").findOne().click()
            sleep(timeout)
        }
    }
    console.log("开始下一位");
}


/**
 * 比对粉丝数量
 * @param {最小粉丝数} minFans 
 * @param {最大粉丝数} maxFans 
 * @returns 
 */
const isFansCountAccord = function (minFans, maxFans) {
    const fansCount = id("com.ss.android.ugc.aweme:id/svw").findOne().child(0).text()

    sleep(500)
    if (minFans <= fansCount && fansCount <= maxFans) return true

    return false
}

/**
 * 注意:先在上一层判断是否需要调用,如果设置中对应的参数为false,则不应调用这个函数
 * 传入的是设置里的参数,如果打勾了传入的是true,那么就会进行相应的判断
 * 例如:只操作蓝v打勾了,那么就会判断是不是蓝v,不是蓝v就返回false
 * @param {是否只操作蓝v} onlyHandleMaster 
 * @returns Boolean
 */
const isOnlyHandleMaster = function () {
    const master = id("com.ss.android.ugc.aweme:id/swi").find()
    return master.length ? true : false
}


/**
 * 用法同isOnlyHandleMaster
 * @param {是否不操作蓝v} notHandleMaster 
 * @returns Boolean
 */
const isNotHandleMaster = function () {
    const master = id("com.ss.android.ugc.aweme:id/swi").find()
    return master.length ? true : false
}

/**
 * 关注操作
 */
const follow = function () {
    if (id("mix").exists()) {
        console.log("未关注,开始关注...")
        id("mix").click()
        console.info("关注成功")

    } else {
        console.log("已经关注啦!");
    }
}


/**
 * 点赞视频
 * @returns 
 */
const like = function () {
    const likeButton = id("com.ss.android.ugc.aweme:id/dst").className("android.widget.LinearLayout").descContains("未点赞").find()

    for (let i = 0; i < likeButton.length; i++) {
        if (0 < likeButton[i].bounds().bottom && device.height > likeButton[i].bounds().bottom) {
            likeButton[i].click()
            return true
        }
    }
    return false
}


/**
 * 视频评论
 * @param {评论的内容} content 
 * @returns 
 */
const setComment = function (content) {
    const commentArea = id("cqd").find()
    if (!content) {
        console.error("还未设置评论内容!")
        return false
    }
    commentArea.setText(content)
    sleep(1500)

    //发送按钮
    const res = id("cr5").find().click()
    sleep(timeout)
    if (res) {
        //返回到视频播放界面
        // id("crt").findOne().click()
        return true
    }
    return false
}


/**
 * 关注, 点赞,评论集成
 */
const integrateVisitorOperation = function (setting) {

    //关注操作
    if (Math.random() * 100 < setting.followPercent) {
        follow()
        sleep(timeout)
    } else {
        console.log("这个作者不关注");
    }


    const visitorVideos = getVideo()
    if (visitorVideos.length === 0) {
        console.log("这个用户没有发布作品哦...")
        return true
    }
    for (let i = 0; i < visitorVideos.length; i++) {
        //先进入视频
        const res = visitorVideos[i].click()
        sleep(timeout)

        if (res) {
            console.log("已进入第" + (i + 1) + "个视频")
        } else {
            console.error("进入失败,请手动进入!")
        }

        //阻塞,直到进入作品界面
        id("com.ss.android.ugc.aweme:id/ctz").className("android.widget.LinearLayout").descContains("评论").waitFor()

        sleep(timeout)
        //点赞操作
        if (Math.random() * 100 < setting.likePercent) {
            if (like()) {
                console.info("点赞成功!")
            } else {
                console.log("已经赞过啦")
            }
            sleep(timeout)
        } else {
            console.log("这条作品不点赞");
        }

        // 打开评论区
        // if (!openComment()) {
        //     console.error('请手动打开评论区')
        // }
        if (Math.random() * 100 < setting.commentPercent) {
            if (setComment(setting.candidateComment)) {
                console.info('评论成功')
            }
            sleep(timeout)
        } else {
            console.log("这条作品不评论");
        }


        //回到主页
        id("back_btn").waitFor()
        id("back_btn").findOne().click()

        //最多操作三个视频
        if (i === setting.visitorVideoCounts - 1) {
            return true
        }
        sleep(timeout)
    }
    return true
}

/**
 * 脚本操作
 */
const handleReturnVisitScript = function (setting) {

    // 进入我的页面
    goToMyPage()

    //获取我的作品
    const videos = getVideo()
    //遍历我的作品
    ergodicVideos(videos, setting)
}


handleReturnVisitScript(settingData)

}

module.exports = returnVisit


