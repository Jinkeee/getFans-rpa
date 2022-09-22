"ui";
// ui.statusBarColor("#ffffff");
ui.layout(
  <vertical>
    <appbar bg="#4E6EF2">
        <text id="title" textColor="#080808" textStyle="bold" gravity="center" margin="12" layout_weight="1" textSize="18sp" text="榜单私信" />
    </appbar>
    <ScrollView
      android:layout_width="match_parent"
      android:layout_height="match_parent">
      <vertical>
        <vertical>
        <RelativeLayout
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:layout_marginTop="5"
          android:layout_marginBottom="2"
          android:background="#FFFFFF">
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginTop="5"
              android:layout_marginLeft="5"
              android:layout_marginBottom="5"
              android:text="场景类型"
              android:textColor="#080808"
              android:textSize="16sp"/>
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginTop="5"
              android:layout_marginBottom="5"
              android:layout_marginRight="5"
              android:text="抖音21.7.0"
              android:textColor="#080808"
              android:textSize="16sp"
              android:layout_alignParentRight="true"/>
        </RelativeLayout>

        <RelativeLayout
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:layout_marginBottom="5"
          android:background="#FFFFFF">
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="场景说明"
              android:layout_marginTop="5"
              android:layout_marginLeft="5"
              android:layout_marginBottom="5"
              android:textColor="#080808"
              android:textSize="16sp"/>
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="在直播广场中，对榜单上的用户执行相应的任务"
              android:textSize="16sp"
              android:layout_alignParentRight="true"/>
        </RelativeLayout>
        </vertical>
        <vertical>
            <RelativeLayout
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:background="#FFFFFF">
              <TextView
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:text="执行动作"
                  android:layout_marginTop="5"
                  android:layout_marginLeft="5"
                  android:layout_marginBottom="5"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
              <TextView
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="执行概率(0% ~ 100%)"
                  android:textSize="16sp"
                  android:layout_alignParentRight="true"/>
            </RelativeLayout>
            <LinearLayout
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:orientation="horizontal"
              android:layout_marginBottom="1"
              android:background="#FFFFFF">
              <TextView
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:text="#01：关注"
                android:layout_marginLeft="5"
                android:textColor="#080808"
                android:textSize="16sp"/>
              <EditText
                  id="id_editFollowPercent"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="100"
                  android:textSize="16sp"
                  android:layout_alignParentRight="true"/>
              <TextView
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginRight="5"
                  android:text="%"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
            </LinearLayout>
            <LinearLayout
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:orientation="horizontal"
              android:layout_marginBottom="1"
              android:background="#FFFFFF">
              <TextView
                  android:layout_width="0dp"
                  android:layout_height="wrap_content"
                  android:layout_weight="1"
                  android:text="#02：私信"
                  android:layout_marginLeft="5"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editChatPercent"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="100"
                  android:textSize="16sp"
                  android:layout_alignParentRight="true"/>
              <TextView
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginRight="5"
                  android:text="%"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
            </LinearLayout>
        </vertical>
        <vertical>
          <RelativeLayout
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="2"
            android:background="#FFFFFF">
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="5"
                android:layout_marginLeft="5"
                android:layout_marginRight="500"
                android:layout_marginBottom="5"
                android:text="话术文本"
                android:textColor="#080808"
                android:textSize="16sp"/>
            <TextView
              id="id_textviewChatContent"
                android:layout_width="200"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_marginTop="5"
                android:layout_marginBottom="5"
                android:layout_marginLeft="5"
                android:text="哇，又刷到你了！赞一个！互赞互关啦！"
                android:textColor="#080808"
                android:textSize="16sp"
                android:ellipsize="end"  
                android:singleLine="true"
                android:layout_alignParentRight="true"/>
          </RelativeLayout>
        </vertical>
        <vertical>
          <RelativeLayout
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:background="#FFFFFF">
            <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginTop="5"
              android:layout_marginLeft="5"
              android:layout_marginRight="500"
              android:layout_marginBottom="5"
              android:text="扩展参数"
              android:textColor="#080808"
              android:textSize="16sp"/>
          </RelativeLayout>
            <LinearLayout
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:orientation="horizontal"
              android:layout_marginBottom="2"
              android:background="#FFFFFF">
              <TextView
                  android:layout_width="0dp"
                  android:layout_height="wrap_content"
                  android:layout_weight="1"
                  android:text="私信楼层"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editChatFloorCount"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="3"
                  android:textSize="16sp"
                  />
            </LinearLayout>
        </vertical>
        <vertical>
          <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="5"
            android:background="#FFFFFF">
            <TextView
                android:layout_width="0dp"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:text="运行次数"
                android:layout_marginLeft="5"
                android:textColor="#080808"
                android:textSize="16sp"/>
            <EditText
                id="id_editMaxRunCount"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="100"
                android:layout_marginRight="5"
                android:text="100"
                android:textSize="16sp"/>
          </LinearLayout>
        </vertical>
        <vertical>
        <LinearLayout
          android:layout_width="match_parent"
          android:layout_height="wrap_content"
          android:orientation="horizontal"
          android:layout_marginBottom="5"
          android:background="#FFFFFF">
          <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="运行速度"
              android:layout_marginLeft="5"
              android:textColor="#080808"
              android:textSize="16sp"/>
          <TextView
              android:layout_width="0dp"
              android:layout_height="wrap_content"
              android:layout_weight="1"
              android:text="(速度范围：1 ~ 100)"
              android:layout_marginLeft="5"
              android:textSize="14sp"/>
          <EditText
              id="id_editRunSpeed"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="10"
              android:textSize="16sp"/>
          </LinearLayout>
        </vertical>
        <vertical>
          <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="3"
            android:background="#FFFFFF">
            <button
              id="id_buttonRun"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              bg="#4E6EF2"
              android:text="运行"/>
          </LinearLayout>
          <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="3"
            android:background="#FFFFFF">
            <button
              id="id_buttonPublish"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="发布"/>
          </LinearLayout>
          <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="3"
            android:background="#FFFFFF">
            <button
              id="id_buttonDelate"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="删除"/>
          </LinearLayout>
          <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_marginBottom="10"
            android:background="#FFFFFF">
            <button
              id="id_buttonReturn"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              android:text="返回"/>
          </LinearLayout>
        </vertical>
      </vertical>
    </ScrollView> 
  </vertical>
)

let rpaSettingData = files.read("settingJson/rpaSetting.json");
let rpaSettingDataJson = JSON.parse(rpaSettingData);
let data = rpaSettingDataJson.rankListChatSetting;

ui.id_editFollowPercent.setText(String(data.followPercent));
ui.id_editChatPercent.setText(String(data.chatPercent));
ui.id_textviewChatContent.setText(data.chatContent);
ui.id_editChatFloorCount.setText(String(data.chatFloorCount));
ui.id_editMaxRunCount.setText(String(data.maxRunCount));
ui.id_editRunSpeed.setText(String(data.runSpeed));

ui.id_buttonRun.click(function (view) {
  let followPercent = ui.id_editFollowPercent.getText()*1;
  let chatPercent = ui.id_editChatPercent.getText()*1;
  let chatContent = ui.id_textviewChatContent.getText();
  let chatFloorCount = ui.id_editChatFloorCount.getText()*1;
  let maxRunCount = ui.id_editMaxRunCount.getText()*1;
  let runSpeed = ui.id_editRunSpeed.getText()*1;
  let rankListChatSetting = {};


  if(followPercent) {
    rankListChatSetting.followPercent = followPercent;
  }
  if(chatPercent) {
    rankListChatSetting.chatPercent = chatPercent;
  }
  if(chatContent) {
    rankListChatSetting.chatContent = chatContent;
  }

  if(chatFloorCount) {
    rankListChatSetting.chatFloorCount = chatFloorCount;
  }

  if(maxRunCount) {
    rankListChatSetting.maxRunCount = maxRunCount;
  }
  if(runSpeed) {
    rankListChatSetting.runSpeed = runSpeed;
  }


  rpaSettingDataJson.rankListChatSetting = rankListChatSetting;
  let rpaSettingDataText = JSON.stringify(rpaSettingDataJson);
  console.log('rpaSettingDataText',rpaSettingDataText);
  files.write("settingJson/rpaSetting.json",rpaSettingDataText);

  var rankListChat = require("scripts/rankListChat");
  console.log('rankListChat',rankListChat);
  threads.start(function(){rankListChat.script()});
});
