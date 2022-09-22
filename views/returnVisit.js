"ui";
// ui.statusBarColor("#ffffff");
ui.layout(
  <vertical>
    <appbar bg="#4E6EF2">
      <text id="title" textColor="#080808" textStyle="bold" gravity="center" margin="12" layout_weight="1" textSize="18sp" text="赞回访" />
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
              android:textSize="16sp" />
            <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginTop="5"
              android:layout_marginBottom="5"
              android:layout_marginRight="5"
              android:text="抖音21.7.0"
              android:textColor="#080808"
              android:textSize="16sp"
              android:layout_alignParentRight="true" />
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
              android:textSize="16sp" />
            <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="自动打开抖音运行"
              android:textSize="16sp"
              android:layout_alignParentRight="true" />
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
              android:textSize="16sp" />
            <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="执行概率(0% ~ 100%)"
              android:textSize="16sp"
              android:layout_alignParentRight="true" />
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
              android:textSize="16sp" />
            <EditText
              id="id_editFollowPercent"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="100"
              android:textSize="16sp"
              android:layout_alignParentRight="true" />
            <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginRight="5"
              android:text="%"
              android:textColor="#080808"
              android:textSize="16sp" />
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
              android:textSize="16sp" />
            <EditText
              id="id_editDianzanPercent"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="100"
              android:textSize="16sp"
              android:layout_alignParentRight="true" />
            <TextView
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginRight="5"
              android:text="%"
              android:textColor="#080808"
              android:textSize="16sp" />
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
              android:text="#03：评论"
              android:layout_marginLeft="5"
              android:textColor="#080808"
              android:textSize="16sp" />
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
              android:textSize="16sp" />
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
              android:textSize="16sp" />
            <TextView
              id="id_textviewCandidateComment"
              android:layout_width="200"
              android:layout_height="wrap_content"
              android:layout_weight="1"
              android:layout_marginTop="5"
              android:layout_marginBottom="5"
              android:layout_marginLeft="5"
              android:text="哇，又刷到你了!"
              android:textColor="#080808"
              android:textSize="16sp"
              android:ellipsize="end"
              android:singleLine="true"
              android:layout_alignParentRight="true" />
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
              android:textSize="16sp" />
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
              android:textSize="16sp" />
            <EditText
              id="id_editMinFans"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="20"
              android:textSize="16sp"
            />
            <EditText
              id="id_editMaxFans"
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
              android:text="只操作蓝V"
              android:layout_marginLeft="5"
              android:textSize="16sp" />
            <Switch
              id="id_IsOnlyHandleMaster"
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
              android:textSize="16sp" />
            <Switch
              id="id_IsNotHandleMaster"
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
              android:text="每个作品执行次数"
              android:layout_marginLeft="5"
              android:textColor="#080808"
              android:textSize="16sp" />
            <EditText
              id="id_editPerVideoVisitCounts"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="100"
              android:textSize="16sp" />
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
              android:text="操作几个作品"
              android:layout_marginLeft="5"
              android:textColor="#080808"
              android:textSize="16sp" />
            <EditText
              id="id_editOperateCounts"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="100"
              android:textSize="16sp" />
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
              android:textSize="16sp" />
            <TextView
              android:layout_width="0dp"
              android:layout_height="wrap_content"
              android:layout_weight="1"
              android:text="(速度范围：1 ~ 100)"
              android:layout_marginLeft="5"
              android:textSize="14sp" />
            <EditText
              id="id_editTimeout"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_marginLeft="100"
              android:layout_marginRight="5"
              android:text="10"
              android:textSize="16sp" />
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
              android:text="运行" />
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
              android:text="发布" />
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
              android:text="删除" />
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
              android:text="返回" />
          </LinearLayout>
        </vertical>
      </vertical>
    </ScrollView>
  </vertical>
)


let rpaSettingData = files.read("settingJson/rpaSetting.json");
let rpaSettingDataJson = JSON.parse(rpaSettingData);
let data = rpaSettingDataJson.returnVisitSetting;

ui.id_editFollowPercent.setText(String(data.followPercent));
ui.id_editDianzanPercent.setText(String(data.likePercent));
ui.id_editCommentPercent.setText(String(data.commentPercent));
ui.id_textviewCandidateComment.setText(data.candidateComment);
ui.id_editPerVideoVisitCounts.setText(String(data.perVideoVisitCounts));
ui.id_editTimeout.setText(String(data.timeout));
ui.id_editOperateCounts.setText(String(data.operateCounts))
ui.id_editMinFans.setText(String(data.minFans));
ui.id_editMaxFans.setText(String(data.maxFans));
ui.id_IsOnlyHandleMaster.checked = Boolean(data.isOnlyHandleMaster);
ui.id_IsNotHandleMaster.checked = Boolean(data.isNotHandleMaster);





ui.id_buttonRun.click(function (view) {
  let followPercent = ui.id_editFollowPercent.getText() * 1;
  let likePercent = ui.id_editDianzanPercent.getText() * 1;
  let commentPercent = ui.id_editCommentPercent.getText() * 1;
  let candidateComment = ui.id_textviewCandidateComment.getText();
  let perVideoVisitCounts = ui.id_editPerVideoVisitCounts.getText() * 1;
  let timeout = ui.id_editTimeout.getText() * 1;
  let operateCounts = ui.id_editOperateCounts.getText() * 1;
  let minFans = ui.id_editMinFans.getText()*1;
  let maxFans = ui.id_editMaxFans.getText()*1;
  let isOnlyHandleMaster = ui.id_IsOnlyHandleMaster.checked;
  let isNotHandleMaster = ui.id_IsNotHandleMaster.checked;

  let returnVisitSetting = {};


  if (followPercent) {
    returnVisitSetting.followPercent = followPercent;
  }
  if (likePercent) {
    returnVisitSetting.likePercent = likePercent;
  }
  if (commentPercent) {
    returnVisitSetting.commentPercent = commentPercent;
  }
  if (candidateComment) {
    returnVisitSetting.candidateComment = candidateComment;
  }
  if (perVideoVisitCounts) {
    returnVisitSetting.perVideoVisitCounts = perVideoVisitCounts;
  }
  if (timeout) {
    returnVisitSetting.timeout = timeout;
  }
  if (operateCounts) {
    returnVisitSetting.operateCounts = operateCounts;
  }

  if (maxFans) {
    returnVisitSetting.maxFans = maxFans;
  }
  returnVisitSetting.minFans = minFans;
  returnVisitSetting.isOnlyHandleMaster = isOnlyHandleMaster;
  returnVisitSetting.isNotHandleMaster = isNotHandleMaster;


  rpaSettingDataJson.returnVisitSetting = returnVisitSetting;
  let rpaSettingDataText = JSON.stringify(rpaSettingDataJson);
  console.log('rpaSettingDataText',rpaSettingDataText);
  files.write("settingJson/rpaSetting.json",rpaSettingDataText);

  var returnVisit = require("scripts/returnVisit.js");

  threads.start(function () {
    //执行操作
    returnVisit.script()
  });
});
