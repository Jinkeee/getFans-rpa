"ui";
// ui.statusBarColor("#ffffff");
ui.layout(
  <vertical>
    <appbar bg="#4E6EF2">
        <text id="title" textColor="#080808" textStyle="bold" gravity="center" margin="12" layout_weight="1" textSize="18sp" text="精准引流" />
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
              android:text="搜索一个用户，在用户的粉丝列表运行，对满足条件的用户执行相应的任务"
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
                  android:text="#02：点赞"
                  android:layout_marginLeft="5"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editDianzanPercent"
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
                  android:text="#03：评论点赞"
                  android:layout_marginLeft="5"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editCommentDianzanPercent"
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
              android:layout_marginBottom="5"
              android:background="#FFFFFF">
              <TextView
                  android:layout_width="0dp"
                  android:layout_height="wrap_content"
                  android:layout_weight="1"
                  android:text="#04：评论"
                  android:layout_marginLeft="5"
                  android:textColor="#080808"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editCommentPercent"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="100"
                  android:textSize="16sp"
                  />
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
              id="id_textviewCandidateComment"
                android:layout_width="200"
                android:layout_height="wrap_content"
                android:layout_weight="1"
                android:layout_marginTop="5"
                android:layout_marginBottom="5"
                android:layout_marginLeft="5"
                android:text="哇，又刷到你了！哇，又刷到你了哇，又刷到你了哇，又刷到你了！"
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
                  android:text="粉丝数量"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editMinFansCount"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="20"
                  android:textSize="16sp"
                  />
                <EditText
                  id="id_editMaxFansCount"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginRight="5"
                  android:text="200000"
                  android:textSize="16sp"
                  />
            </LinearLayout>
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
                  android:text="作品数量"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editVideoCount"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:text="2"
                  android:textSize="16sp"
                  />
            </LinearLayout>
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
                  android:text="IP"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <EditText
                  id="id_editIP"
                  android:layout_width="wrap_content"
                  android:layout_height="wrap_content"
                  android:layout_marginLeft="100"
                  android:layout_marginRight="5"
                  android:hint="输入文本"
                  android:text="北京市"
                  android:textSize="16sp"
                  />
            </LinearLayout>
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
                  android:text="只操作蓝V"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <Switch
                id="id_switchOnlyBlueV"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="100"
                android:layout_marginRight="5"
                android:thumb="@drawable/selector_switch_thumb"
                android:track="@drawable/selector_switch_track" />
            </LinearLayout>
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
                  android:text="不操作蓝V"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <Switch
                id="id_switchNeverBlueV"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="100"
                android:layout_marginRight="5"
                android:thumb="@drawable/selector_switch_thumb"
                android:track="@drawable/selector_switch_track" />
            </LinearLayout>
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
                  android:text="操作第二个作品"
                  android:layout_marginLeft="5"
                  android:textSize="16sp"/>
              <Switch
                id="id_switchOperateSecondVideo"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="100"
                android:layout_marginRight="5"
                android:thumb="@drawable/selector_switch_thumb"
                android:track="@drawable/selector_switch_track" />
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

//整合json
let rpaSettingData = files.read("settingJson/rpaSetting.json");
let rpaSettingDataJson = JSON.parse(rpaSettingData);
let data = rpaSettingDataJson.accurateGetFansSetting;

//单独json
// let accurateGetFansData = files.read("settingJson/accurateGetFans.json");
// let data = JSON.parse(accurateGetFansData);


ui.id_editFollowPercent.setText(String(data.followPercent));
ui.id_editDianzanPercent.setText(String(data.dianzanPercent));
ui.id_editCommentPercent.setText(String(data.commentPercent));
ui.id_textviewCandidateComment.setText(data.candidateComment);
ui.id_editCommentDianzanPercent.setText(String(data.commentDianzanPercent));
ui.id_editMinFansCount.setText(String(data.minFansCount));
ui.id_editMaxFansCount.setText(String(data.maxFansCount));
ui.id_editVideoCount.setText(String(data.videoCount));
// ui.id_editIP.setText(data.IP);
ui.id_editMaxRunCount.setText(String(data.maxRunCount));
ui.id_editRunSpeed.setText(String(data.runSpeed));



ui.id_buttonRun.click(function (view) {
  let followPercent = ui.id_editFollowPercent.getText()*1;
  let dianzanPercent = ui.id_editDianzanPercent.getText()*1;
  let commentPercent = ui.id_editCommentPercent.getText()*1;
  let candidateComment = ui.id_textviewCandidateComment.getText();
  let commentDianzanPercent = ui.id_editCommentDianzanPercent.getText()*1;
  // let IP = ui.id_editIP.getText();
  let minFansCount = ui.id_editMinFansCount.getText()*1;
  let maxFansCount = ui.id_editMaxFansCount.getText()*1;
  let videoCount = ui.id_editVideoCount.getText()*1;
  let maxRunCount = ui.id_editMaxRunCount.getText()*1;
  let runSpeed = ui.id_editRunSpeed.getText()*1;
  let accurateGetFansSetting = {};


  if(followPercent) {
    accurateGetFansSetting.followPercent = followPercent;
  }
  if(dianzanPercent) {
    accurateGetFansSetting.dianzanPercent = dianzanPercent;
  }
  if(commentDianzanPercent) {
    accurateGetFansSetting.commentDianzanPercent = commentDianzanPercent;
  }
  if(commentPercent) {
    accurateGetFansSetting.commentPercent = commentPercent;
  }
  if(candidateComment) {
    accurateGetFansSetting.candidateComment = candidateComment;
  }
  if(minFansCount) {
    accurateGetFansSetting.minFansCount = minFansCount;
  }
  if(maxFansCount) {
    accurateGetFansSetting.maxFansCount = maxFansCount;
  }
  if(videoCount) {
    accurateGetFansSetting.videoCount = videoCount;
  }
  // if(IP) {
  //   accurateGetFansSetting.IP = IP;
  // }
  if(maxRunCount) {
    accurateGetFansSetting.maxRunCount = maxRunCount;
  }
  if(runSpeed) {
    accurateGetFansSetting.runSpeed = runSpeed;
  }


  rpaSettingDataJson.accurateGetFansSetting = accurateGetFansSetting;
  let rpaSettingDataText = JSON.stringify(rpaSettingDataJson);
  files.write("settingJson/rpaSetting.json",rpaSettingDataText);

  // let accurateGetFansSettingText = JSON.stringify(accurateGetFansSetting);
  // console.log('accurateGetFansSettingText',accurateGetFansSettingText);
  // files.write("settingJson/accurateGetFans.json",accurateGetFansSettingText);

  var accurateGetFans = require("scripts/accurateGetFans");
  // console.log('accurateGetFans',accurateGetFans);
  threads.start(function(){accurateGetFans.script()});
});
