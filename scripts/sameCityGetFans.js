/**
 * 同城引流脚本
 */
var sameCityGetFans = {}

sameCityGetFans.script = function (setting) {
    toast("开始执行")
    //获取数据
    let rpaSettingData = files.read("settingJson/rpaSetting.json");
    let rpaSettingDataJson = JSON.parse(rpaSettingData);
    let settingData = rpaSettingDataJson.sameCityGetFansSetting;

    let runSpeed = settingData.runSpeed;
    //计算运行速度对应的延时时间
    function computeTimeout(runSpeed) {
        let level = parseInt(runSpeed / 20)
        let timeout = 1000 + (5 - level) * 500
        return timeout
    }

    //延迟
    let timeout
    timeout = computeTimeout(runSpeed)
    let times = 2 //执行次数
    let appName = "抖音"

    console.setPosition(200, 100)
    console.show()  //打开悬浮窗
    console.verbose("回到主页面")
    home() //回到主界面
    sleep(timeout)
    console.verbose("进入抖音")
    launch("com.ss.android.ugc.aweme");
    sleep(5000)




    /**
     * 是否有评论按钮
     * @returns boolean
     */
    const isHasCommentButton = function () {
        const commentButton = id("com.ss.android.ugc.aweme:id/ctz").className("android.widget.LinearLayout").descContains("评论").find()
        for (let i = 0; i < commentButton.length; i++) {
            if (device.height > commentButton[i].bounds().top && device.height > commentButton[i].bounds().bottom && commentButton[i].bounds().bottom > 0 && commentButton[i].bounds().top > 0) {
                return true
            }
        }
        return false
    }

    /**
     * 获取作者的名称
     */
    const getThisVideoAuthor = function () {
        const author = id("com.ss.android.ugc.aweme:id/title").find()
        //    console.log(author);
        for (let i = 0; i < author.length; i++) {
            if (author[i].bounds().top > 0 && author[i].bounds().bottom > 0) {
                if (device.height > author[i].bounds().top && device.height > author[i].bounds().bottom) {
                    return author[i].text()
                }
            }
        }
        return null
    }

    /**
     * 判断是否进入同城界面
     */
    const goToSameCity = function () {
        if (text('同城发现').exists()) {
            console.info("已在同城界面中");
        } else {
            console.info("自动进入同城页面...")
            const sameCityButton = id("com.ss.android.ugc.aweme:id/scj")
            sameCityButton.findOne().click()
            console.verbose("加载中...");
            sleep(3000)
            slideUp()
        }
    }

    /**
     * 上滑视频的操作
     */
    const slideUp = function () {
        const deviceWidth = device.width
        const deviceHeight = device.height

        let res = swipe(
            0.5 * deviceWidth, 0.8 * deviceHeight,
            0.5 * deviceWidth, 0.2 * deviceHeight,
            600
        )
        if (res) {
            console.verbose("上滑");
        }
    }

    /**
     * 检测不支持的视频类型并跳过
     */
    const skipThisVideo = function () {
        const res = isHasCommentButton()
        if (res === false) {
            console.log("检测到直播或广告...跳过");
            slideUp()
            return false
        }
        return true
    }


    /**
     * 关注视频
     * @returns 
     */
    const follow = function () {
        //关注按钮 :不能点击
        const followButton = id("com.ss.android.ugc.aweme:id/fpo").desc("关注").find()

        for (let i = 0; i < followButton.length; i++) {
            if (device.height > followButton[i].bounds().top && device.height > followButton[i].bounds().bottom && followButton[i].bounds().bottom > 0 && followButton[i].bounds().top > 0) {
                followButton[i].click()
                return true
            }
        }
        return false
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
     * 打开评论区
     * @returns 
     */
    const openComment = function () {
        const commentButton = id("com.ss.android.ugc.aweme:id/ctz").className("android.widget.LinearLayout").descContains("评论").find()
        for (let i = 0; i < commentButton.length; i++) {
            if (device.height > commentButton[i].bounds().top && device.height > commentButton[i].bounds().bottom && commentButton[i].bounds().bottom > 0 && commentButton[i].bounds().top > 0) {
                commentButton[i].click()
                return true
            }
        }
        return false
        //   console.log(commentButton);
    }

    /**
     * 点赞部分评论
     * @returns Boolean
     */
    const likePartComment = function () {
        const commentButton = id("com.ss.android.ugc.aweme:id/dr9").descMatches('^(?=.*赞)(?=.*未选中).*$').find()

        let count = 0
        for (let i = 0; i < commentButton.length; i++) {
            commentButton[i].parent().click()
            sleep(700)
            count++
        }
        if (count) return true
        return false
    }


    /**
     * 视频评论
     * @param {评论的内容} content 
     * @returns 
     */
    const setComment = function (content) {
        const commentArea = id("cqd").find()
        commentArea.setText(content)
        sleep(500)

        //发送按钮
        const res = id("cr5").findOne().click()
        sleep(500)
        if (res) {
            //返回到视频播放界面
            id("crt").findOne().click()
            return true
        }
        return false
    }


    //脚本操作
    const handleSameCityGetFansScript = function (setting) {

        //获取参数
        let followPercent = settingData.followPercent;
        let dianzanPercent = settingData.dianzanPercent;
        let commentDianzanPercent = settingData.commentDianzanPercent;
        let commentPercent = settingData.commentPercent;
        let candidateComment = settingData.candidateComment;
        let maxRunCount = settingData.maxRunCount;

        //判断是否进入同城界面
        goToSameCity()
        sleep(timeout)

        for (let i = 0; i <= maxRunCount; i++) {
            // 跳过不支持的视频
            if (!skipThisVideo()) {
                sleep(timeout)
                continue
            }
            console.warn("第" + (i + 1) + "次执行: " + getThisVideoAuthor() + "的作品");
            sleep(2000)

            //关注
            if (Math.random() * 100 < followPercent) {
                if (!follow()) {
                    console.log("此作者已关注...");
                } else {
                    console.log("关注成功!");
                }
                sleep(timeout)
            } else {
                console.log("这条视频不进行关注");
                sleep(timeout)
            }

            //点赞
            if (Math.random() * 100 < dianzanPercent) {
                if (like()) {
                    console.log("点赞成功!");
                } else {
                    console.log("此作品已点赞...");
                }
                sleep(timeout)
            } else {
                console.log("这条视频不进行点赞");
                sleep(timeout)
            }

            //打开评论区
            openComment()
            sleep(timeout)

            // 点赞部分评论
            if (Math.random() * 100 < commentDianzanPercent) {
                if (likePartComment()) {
                    console.log("评论点赞成功!");
                } else {
                    console.log("已经给首页评论都点赞啦!");
                }
                sleep(timeout)
            } else {
                console.log("这条视频的评论不进行点赞");
                sleep(timeout)
            }

            //评论视频 -如果概率没进行,关闭评论区
            if (Math.random() * 100 < commentPercent) {
                if (setComment(candidateComment)) {
                    console.log("评论成功!");
                } else {
                    console.log("评论失败...");
                }
                sleep(timeout)
            } else {
                console.verbose("这条视频不进行评论");
                id("crt").findOne().click()
                sleep(timeout)
            }
            if (i === maxRunCount) {
                console.info("执行完毕!");
                return
            }
            sleep(timeout)
            //下一个视频
            slideUp()
            console.info("开始下一个视频")
        }
    }

    handleSameCityGetFansScript(setting)
}

module.exports = sameCityGetFans




