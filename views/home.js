/**
 * 项目ui主界面
 */
"ui";
ui.statusBarColor("#ffffff");
activity.getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
importClass(android.content.Context);
importClass(android.provider.Settings);
var color = "#4E6EF2";
var tabs_view = []
var selectView = 0;
let blblankImg = ""
var tabs_data = {
  bg: "#ffffff",
  selectColor: {
    on: "#03A9F5",
        off: "#999999"
    },
    srcSize: 20,
    textSize: 14,
    zoom: 1.5,
    tabs_h: true,
    data: [
        ["首页", "@drawable/ic_beach_access_black_48dp"],
        ["个人中心", "@drawable/ic_group_black_48dp"],
    ],
}
var Tabs_btn_layout = function () {
    util.extend(Tabs_btn_layout, ui.Widget);
    function Tabs_btn_layout() {
        ui.Widget.call(this);
        this.defineAttr("data", (view, attr, value, defineSetter) => {
            arr = tabs_data.data[value]
            view._text.setText(arr[0])
            view._src.attr("src", arr[1])
            tabs_view[tabs_view.length] = view
            if (value == selectView) {
                view._src.attr("tint", tabs_data.selectColor.on)
                view._text.setTextColor(colors.parseColor(tabs_data.selectColor.on))
            }
        });
    }
    Tabs_btn_layout.prototype.render = function () {
        return (
            <vertical id="_bg" w="*" bg="{{tabs_data.bg}}" padding="0 10" gravity="center" >
                <img w="{{tabs_data.srcSize}}" id="_src" tint="{{tabs_data.selectColor.off}}" gravity="center" layout_gravity="center"/>
                <text w="auto" id="_text" textSize="{{tabs_data.textSize}}" textColor="{{tabs_data.selectColor.off}}" gravity="center" layout_gravity="center"/>
            </vertical>
        )
    }
    ui.registerWidget("tabs_btn-layout", Tabs_btn_layout);
    return Tabs_btn_layout;
}()

var Tabs_layout = function () {
    util.extend(Tabs_layout, ui.Widget);
    function Tabs_layout() {
        ui.Widget.call(this);
        this.defineAttr("data", (view, attr, value, defineSetter) => {
            for (var i = 0; i < tabs_data.data.length; i++) {
                time = i
                ui.inflate(<tabs_btn-layout data="{{time}}" layout_weight="1" />, view._tabs, true)
            }
            tabs_data.tabs_h ? _color = tabs_data.selectColor.on : _color = "#00000000";
            view.tabs.selectedTabIndicatorColor = colors.parseColor(_color);
        });
    }
    Tabs_layout.prototype.render = function () {
        return (
            <card w="*" h="auto" cardElevation="10" foreground="?selectableItemBackground">
                <horizontal id="_tabs" />
                <tabs id="tabs" />
                <horizontal weightSum="5" h="20" layout_gravity="center_vertical">
                    <frame layout_weight="1" >
                        <View bg="#e8e8e8" w="1" layout_gravity="right" />
                    </frame>
                    <frame layout_weight="1" >
                        <View bg="#e8e8e8" w="1" layout_gravity="right" />
                    </frame>
                    <frame layout_weight="1" >
                        <View bg="#e8e8e8" w="1" layout_gravity="right" />
                    </frame>
                    <frame layout_weight="1" >
                        <View bg="#e8e8e8" w="1" layout_gravity="right" />
                    </frame>
                </horizontal>
            </card>
        )
    }
    ui.registerWidget("tabs-layout", Tabs_layout);
    return Tabs_layout;
}()

ui.layout(
    <frame id="frame" bg="#ffffff">
        <vertical fitsSystemWindows="true">
            <appbar>
                <linear id="toolbar" clipChildren="false" elevation="0" bg="#ffffff" gravity="center">
                    <img id="mainmenu" w="38" h="38" padding="5" margin="8" tint="#555555" foreground="?android:attr/selectableItemBackgroundBorderless" src="@drawable/ic_menu_black_48dp" />
                    <text id="title" textColor="#4E6EF2" gravity="center" margin="12" layout_weight="1" textSize="19" text="元元获客自动营运系统" />
                    <img id="selectTime" w="38" h="38" padding="5" margin="8" tint="#555555" foreground="?android:attr/selectableItemBackgroundBorderless" src="@drawable/ic_person_black_48dp" />
                </linear>
            </appbar>
            <vertical id="Main">
                <viewpager id="viewpager" bg="#ffffff">
                    <frame>
                        <card layout_gravity="center|top" marginBottom="70" w="*" marginLeft="20" marginRight="20" h="auto" cardCornerRadius="0dp" bg="#00000000">
                            <ScrollView>
                                <vertical>
                                   <text text="自动化运营功能" marginLeft="5" marginTop="8" textColor="#8c080808" textSize="20sp" />
                                   <horizontal  marginLeft="40" marginTop="20">
                                   <vertical id="button_accurateGetFans" h="100dp" marginRight="40">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/jingzhunyinliu.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="精准引流"/>
                                    </vertical>
                                    <vertical id="button_rankListChat" h="100dp" marginRight="40">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/bangdansixin.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="榜单私信"/>
                                    </vertical>
                                    <vertical id="button_precisionIndustry" h="100dp" marginRight="40">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/jingzhunhangye.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="精准行业"/>
                                    </vertical>
                                    <vertical id="button_sameCityGetFans" h="100dp">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/tongchengyinliu.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="同城引流"/>
                                    </vertical>
                                   </horizontal>
                                   <horizontal marginLeft="40" marginTop="20">
                                   <vertical id="button_returnVisit" h="100dp" marginRight="40">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/dianzan.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="赞回访"/>
                                    </vertical>
                                    <vertical id="button_interceptingComments" h="100dp" marginRight="40">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/pinglun.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="截流评论"/>
                                    </vertical>
                                    <vertical id="button_cutSameStyle" h="100dp" marginRight="40">
                                     <img h="50" layout_weight="3" w="50" src="file://res/icon/jianying.png"/>
                                     <text w="auto" layout_gravity="center" layout_weight="1" size="14" text="剪同款"/>
                                    </vertical>
                                   </horizontal>
                                </vertical>
                            </ScrollView>
                        </card>
                    </frame>
                    <frame>
                        <card layout_gravity="center|top" marginBottom="70" w="*" marginLeft="20" marginRight="20" h="auto" cardCornerRadius="0dp" bg="#00000000">
                            <ScrollView>
                                <vertical>
                                    <text text="个人中心页面" marginLeft="5" marginRight="5" marginTop="8" textColor="#8c080808" textSize="20sp" />
                                </vertical> 
                            </ScrollView>
                        </card>
                    </frame>
                </viewpager>
            </vertical>
        </vertical>
        <vertical gravity="bottom">
            <tabs-layout data="" layout_gravity="bottom" />
        </vertical>
        <vertical id="Off" w="*" h="*">
        </vertical>
    </frame>
)

var fabView = ui.start;
ui.tabs.setupWithViewPager(ui.viewpager);
ui.title.getText();
initPop();
initPopB();
ui.viewpager.setOnPageChangeListener({
    onPageSelected: function (index) {
        tabs_view[selectView]._src.attr("tint", tabs_data.selectColor.off)
        tabs_view[selectView]._text.setTextColor(colors.parseColor(tabs_data.selectColor.off))
        tabs_view[index]._src.attr("tint", tabs_data.selectColor.on)
        tabs_view[index]._text.setTextColor(colors.parseColor(tabs_data.selectColor.on))
        selectView = index
    }
})


function initPop() {
    {/**global.blankImg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICRAEAOw=="*/ }
    var popView = ui.inflate(
        <frame h="auto">
            <img bg="#50718D9D" scaleType="centerCrop" url="{{blblankImg}}" radiusBottomLeft="10dp" radiusBottomRight="10dp" />
            {/**<img src="{{blankImg}}" tint="#ffffff" scaleType="centerCrop" radiusBottomLeft="20dp" radiusBottomRight="20dp" /> */}
            <card w="*" id="indx1" margin="0 0 0 1" h="auto" cardCornerRadius="1"
                cardElevation="3dp" gravity="center_vertical"  >
                <vertical>
                    <card w="*" id="indx2" margin="0 0 0 1" h="40" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <linear id="toolbar" clipChildren="false" elevation="0" margin="8 0 0 0" gravity="center_vertical" >
                            <text id="Notice" textColor="#080808" foreground="?android:attr/selectableItemBackgroundBorderless" textSize="13" text="公告：" />
                            <TextView
                                id="tv_text"
                                singleLine="true"
                                ellipsize="marquee"
                                textSize="14"
                                focusable="true"
                                text="根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！    根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！     根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！       根据根据自己的需求，定义此抽屉内容，以及背景或者透明信息，或者把此公告的内容直接复制到变量调用，从云端获取，请自行摸索！"
                                textColor="#ff010100" />
                        </linear>
                    </card>

                    <card w="*" id="indx2" margin="0 0 0 2" h="40" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <horizontal gravity="center_vertical">
                            <text id="Group" textColor="#080808" margin="8 0 0 0" gravity="center_vertical" foreground="?android:attr/selectableItemBackgroundBorderless" textSize="13" text="yuanyuan-rpa" />
                           <text layout_weight="1"/>
                            <card w="60" h="auto" margin="0 0 10 0" cardCornerRadius="10"
                                cardElevation="0dp" cardBackgroundColor="#282828" >
                                <text id="obj" clickable="true" bg="?attr/selectableItemBackground" text="加入" textColor="#e5e5e5" textSize="13" gravity="center" />
                            </card>
                        </horizontal>
                    </card>
                    
                    <card w="*" id="indx2" margin="0 0 0 2" h="40" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <horizontal gravity="center_vertical">
                            <text id="Group" textColor="#080808" margin="8 0 0 0" gravity="center_vertical" foreground="?android:attr/selectableItemBackgroundBorderless" textSize="13" text="yuanyuan-rpa" />
                           <text layout_weight="1"/>
                            <card w="60" h="auto" margin="0 0 10 0" cardCornerRadius="10"
                                cardElevation="0dp" cardBackgroundColor="#282828" >
                                <text id="obj" clickable="true" bg="?attr/selectableItemBackground" text="加入" textColor="#e5e5e5" textSize="13" gravity="center" />
                            </card>
                        </horizontal>
                    </card>
                    
                    <card w="*" id="indx2" margin="0 0 0 2" h="40" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <horizontal gravity="center_vertical">
                            <text id="Group" textColor="#080808" margin="8 0 0 0" gravity="center_vertical" foreground="?android:attr/selectableItemBackgroundBorderless" textSize="13" text="yuanyuan-rpa" />
                           <text layout_weight="1"/>
                            <card w="60" h="auto" margin="0 0 10 0" cardCornerRadius="10"
                                cardElevation="0dp" cardBackgroundColor="#282828" >
                                <text id="obj" clickable="true" bg="?attr/selectableItemBackground" text="加入" textColor="#e5e5e5" textSize="13" gravity="center" />
                            </card>
                        </horizontal>
                    </card>
               

                    <card w="*" id="indx2" margin="0 0 0 2" h="40" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <horizontal gravity="center_vertical">
                        <text id="ID" textColor="#080808" margin="8 0 0 0" textSize="13" gravity="center_vertical" foreground="?android:attr/selectableItemBackgroundBorderless" text="设备ID：{{device.getIMEI()||device.getAndroidId().toUpperCase()}}" />
                           <text layout_weight="1"/>
                            <card w="60" h="auto" margin="0 0 10 0" cardCornerRadius="10"
                                cardElevation="0dp" cardBackgroundColor="#282828" >
                                <text id="clip" clickable="true" bg="?attr/selectableItemBackground" text="复制" textColor="#e5e5e5" textSize="13" gravity="center" />
                            </card>
                        </horizontal>
                    </card>

            
                    <card w="*" id="indx2" margin="0 0 0 1" h="40" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <linear id="toolbar" clipChildren="false" elevation="0" gravity="center_vertical" margin="8 0 0 0" >
                            <text id="expirydate" textColor="#080808" gravity="center" textSize="13" text="到期时间：未激活" />
                            <text layout_weight="1"/>
                            <button id="DeviceIDSure" textColor="#03A9F5" text="解绑" gravity="center" style="Widget.AppCompat.Button.Borderless.Colored" w="70" />
                        </linear>
                    </card>
                </vertical>
            </card>
        </frame>, ui.inflate(
            <linear />))
    var popWin = new android.widget.PopupWindow(popView, -1, -2)
    var is = new android.transition.Slide(android.view.Gravity.TOP)
    is.setDuration(250)
    popWin.setEnterTransition(is)
    var os = new android.transition.Slide(android.view.Gravity.TOP)
    os.setDuration(250)
    os.setMode(android.transition.Visibility.MODE_OUT)
    popWin.setExitTransition(os)
    ui.selectTime.click(() => {
        if (!popWin.isShowing()) {
            popWin.showAsDropDown(ui.toolbar)
            ui.Off.setVisibility(0)
        } else {
            popWin.dismiss()
        }
    })

    ui.Off.on("click", function () {
        if (popWin.isShowing()) {
            popWin.dismiss()
            ui.Off.setVisibility(8)
        }
    });
    popView.DeviceIDSure.click(() => {
        if (ui.First.visibility == 0) {
            ui.First.visibility = 99999999;
        } else {
            ui.First.visibility = 0;
        }
    })
    popView.ID.click(() => {
        setClip(DeviceId);
        toast("可以根据需求自定义窗口");
    })
    popView.tv_text.setSelected(true);
    popView.indx1.setAlpha(0.7);//名片
    popView.obj.setAlpha(0.7);//名片
    popView.obj.on("click",function(){
        $app.startActivity({ 
            data: "mqqapi://card/show_pslcard?card_type=group&uin=4607221" 
        })
    })
    popView.clip.on("click",function(){
      let txt=device.getIMEI()||device.getAndroidId().toUpperCase()
      setClip(txt),toast("设备码：" + txt + "已复制成功")
    })
}



function initPopB() {
    var popViewB = ui.inflate(
        <frame>
            <img bg="#50718D9D" scaleType="centerCrop" url="http://pic1.win4000.com/pic/4/ce/bb5a755733.jpg" />
            <vertical>
                <list id="menu">
                    <card w="*" id="indx2" margin="0 0 0 1" h="auto" cardCornerRadius="1"
                        cardElevation="3dp" gravity="center_vertical"  >
                        <horizontal bg="?selectableItemBackground" w="*">
                            <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}" />
                            <text textColor="#080808" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                        </horizontal>
                    </card>
                </list>
                <View w="*" h="2" bg="#000000" />
            </vertical>
        </frame>, ui.inflate(
            <linear />))
    var popWinB = new android.widget.PopupWindow(popViewB, -1, -2)
    var is = new android.transition.Slide(android.view.Gravity.TOP)
    is.setDuration(250)
    popWinB.setEnterTransition(is)
    var os = new android.transition.Slide(android.view.Gravity.TOP)
    os.setDuration(250)
    os.setMode(android.transition.Visibility.MODE_OUT)
    popWinB.setExitTransition(os)
    ui.Off.setVisibility(8)
    ui.mainmenu.click(() => {
        if (!popWinB.isShowing()) {
            ui.Off.setVisibility(0)
            popWinB.showAsDropDown(ui.toolbar)
        } else {
            popWinB.dismiss()
        }
    })
    ui.Off.on("click", function () {
        if (popWinB.isShowing()) {
            popWinB.dismiss()
            ui.Off.setVisibility(8)
        }
    });



    popViewB.menu.setDataSource([{
        title: "运行日志",
        icon: "@drawable/ic_assessment_black_48dp"
    },
    {
        title: "高级设置",
        icon: "@drawable/ic_settings_black_48dp"
    },
    {
        title: "说明文档",
        icon: "@drawable/ic_chrome_reader_mode_black_48dp"
    },
    {
        title: "版本更新",
        icon: "@drawable/ic_archive_black_48dp"
    },
    {
        title: "购买卡密",
        icon: "@drawable/ic_favorite_black_48dp"
    },
    {
        title: "软件激活",
        icon: "@drawable/ic_lock_black_48dp"
    },
    {
        title: "关于软件",
        icon: "@drawable/ic_reply_black_48dp"
    }
    ]);

    popViewB.menu.on("item_click", item => {
        switch (item.title) {
            case "运行日志":
                app.startActivity("console");
                break;
            case "高级设置":
                app.startActivity("settings");
                break;
            case "说明文档":
                toast("此菜单暂无关联功能")
                break;
            case "版本更新":
                toast("此菜单暂无关联功能")
                break;
            case "购买卡密":
                toast("此菜单暂无关联功能")
                break;
            case "激活软件":
                toast("此菜单暂无关联功能")
                break;
            case "关于作者":
                toast("此菜单暂无关联功能")
                break;
        }
    })
}
ui.button_accurateGetFans.click(function (view) {
   engines.execScriptFile('views/accurateGetFans.js');
})
ui.button_rankListChat.click(function (view) {
   engines.execScriptFile('views/rankListChat.js');
})
ui.button_precisionIndustry.click(function (view) {
   engines.execScriptFile('views/precisionIndustry.js');
})
ui.button_sameCityGetFans.click(function (view) {
   engines.execScriptFile('views/sameCityGetFans.js');
})
ui.button_returnVisit.click(function (view) {
   engines.execScriptFile('views/returnVisit.js');
})
ui.button_interceptingComments.click(function (view) {
    console.log("222222222222222222222")
   engines.execScriptFile('views/interceptingComments.js');
})
ui.button_cutSameStyle.click(function (view) {
   engines.execScriptFile('scripts/cutSameStyle.js');
})