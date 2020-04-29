<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxSelectionManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxPost.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxBuffer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/xslt/AjxXslt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxSHA1.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxPluginDetector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/clipboard.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxClipboard.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtDateRangeEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtIdleTimer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtColorPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCheckbox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtRadioButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPasswordField.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertyPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTabView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSelect.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertySheet.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtGrouper.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtProgressBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertyEditor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtConfirmDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSpinner.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtButtonColorPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMessageComposite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtRadioButtonGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtComboBox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZLoginFactory.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZmBaseSplashScreen.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZmErrorDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAuthenticate.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAutocomplete.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmInvite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSystemRetentionPolicy.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAutocompleteListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmPeopleAutocompleteListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmDLAutocompleteListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAddressInputField.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmColorMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmColorButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmFolderChooser.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/htmlEditor/ZmHtmlEditor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmDragAndDrop.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmAttachDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmNewOrganizerDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmNewSearchDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmNewTagDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmOfflineSettingsDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/socialfox/ZmSocialfoxActivationDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmFolderDialogTabView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmFolderPropertyView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmFolderRetentionView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmFolderPropsDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmQuickAddDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmTimeDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmNewWindow.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmToolTipMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmRecurrence.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/model/ZmTaskMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmMiniCalCache.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmSnoozeBeforeProcessor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmReminderController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmReminderDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmQuickReminderDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmRetentionWarningDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/offline/ZmOffline.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Startup2");
AjxPackage.define("ajax.util.AjxSelectionManager");
AjxPackage.define("ajax.net.AjxPost");
AjxPackage.define("ajax.util.AjxBuffer");
AjxPackage.define("ajax.xslt.AjxXslt");
AjxPackage.define("ajax.util.AjxSHA1");
AjxPackage.define("ajax.util.AjxPluginDetector");
AjxPackage.define("ajax.3rdparty.clipboard");
AjxPackage.define("ajax.util.AjxClipboard");
AjxPackage.define("ajax.dwt.events.DwtDateRangeEvent");
AjxPackage.define("ajax.dwt.events.DwtIdleTimer");
AjxPackage.define("ajax.dwt.widgets.DwtColorPicker");
AjxPackage.define("ajax.dwt.widgets.DwtCheckbox");
AjxPackage.define("ajax.dwt.widgets.DwtRadioButton");
AjxPackage.define("ajax.dwt.widgets.DwtPasswordField");
AjxPackage.define("ajax.dwt.widgets.DwtCalendar");
AjxPackage.define("ajax.dwt.widgets.DwtPropertyPage");
AjxPackage.define("ajax.dwt.widgets.DwtTabView");
AjxPackage.define("ajax.dwt.widgets.DwtSelect");
AjxPackage.define("ajax.dwt.widgets.DwtAlert");
AjxPackage.define("ajax.dwt.widgets.DwtPropertySheet");
AjxPackage.define("ajax.dwt.widgets.DwtGrouper");
AjxPackage.define("ajax.dwt.widgets.DwtProgressBar");
AjxPackage.define("ajax.dwt.widgets.DwtPropertyEditor");
AjxPackage.define("ajax.dwt.widgets.DwtConfirmDialog");
AjxPackage.define("ajax.dwt.widgets.DwtSpinner");
AjxPackage.define("ajax.dwt.widgets.DwtButtonColorPicker");
AjxPackage.define("ajax.dwt.widgets.DwtMessageComposite");
AjxPackage.define("ajax.dwt.widgets.DwtRadioButtonGroup");
AjxPackage.define("ajax.dwt.widgets.DwtComboBox");
AjxPackage.define("zimbra.common.ZLoginFactory");
AjxPackage.define("zimbra.common.ZmBaseSplashScreen");
AjxPackage.define("zimbra.common.ZmErrorDialog");
AjxPackage.define("zimbraMail.share.model.ZmAuthenticate");
AjxPackage.define("zimbraMail.share.model.ZmAutocomplete");
AjxPackage.define("zimbraMail.share.model.ZmInvite");
AjxPackage.define("zimbraMail.share.model.ZmSystemRetentionPolicy");
AjxPackage.define("zimbraMail.share.view.ZmAutocompleteListView");
AjxPackage.define("zimbraMail.share.view.ZmPeopleAutocompleteListView");
AjxPackage.define("zimbraMail.share.view.ZmDLAutocompleteListView");
AjxPackage.define("zimbraMail.share.view.ZmAddressInputField");
AjxPackage.define("zimbraMail.share.view.ZmColorMenu");
AjxPackage.define("zimbraMail.share.view.ZmColorButton");
AjxPackage.define("zimbraMail.share.view.ZmFolderChooser");
AjxPackage.define("zimbraMail.share.view.htmlEditor.ZmHtmlEditor");
AjxPackage.define("zimbraMail.share.view.ZmDragAndDrop");
AjxPackage.define("zimbraMail.share.view.dialog.ZmDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmAttachDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmNewOrganizerDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmNewSearchDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmNewTagDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmOfflineSettingsDialog");
AjxPackage.define("zimbraMail.socialfox.ZmSocialfoxActivationDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmFolderDialogTabView");
AjxPackage.define("zimbraMail.share.view.dialog.ZmFolderPropertyView");
AjxPackage.define("zimbraMail.share.view.dialog.ZmFolderRetentionView");
AjxPackage.define("zimbraMail.share.view.dialog.ZmFolderPropsDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmQuickAddDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmTimeDialog");
AjxPackage.define("zimbraMail.core.ZmNewWindow");
AjxPackage.define("zimbraMail.core.ZmToolTipMgr");
AjxPackage.define("zimbraMail.calendar.model.ZmCalMgr");
AjxPackage.define("zimbraMail.calendar.model.ZmRecurrence");
AjxPackage.define("zimbraMail.tasks.model.ZmTaskMgr");
AjxPackage.define("zimbraMail.calendar.model.ZmMiniCalCache");
AjxPackage.define("zimbraMail.calendar.controller.ZmSnoozeBeforeProcessor");
AjxPackage.define("zimbraMail.calendar.controller.ZmReminderController");
AjxPackage.define("zimbraMail.calendar.view.ZmReminderDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmQuickReminderDialog");
AjxPackage.define("zimbraMail.mail.view.ZmRetentionWarningDialog");
AjxPackage.define("zimbraMail.offline.ZmOffline");
</script>
