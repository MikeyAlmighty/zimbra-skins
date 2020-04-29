<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtTabGroupEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyMapMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyboardMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtTabGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtId.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDragEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDragSource.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDropEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDropTarget.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDragBox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtDisposeEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTreeItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtHeaderTreeItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCheckbox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtRadioButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtRadioButtonGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtForm.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMessageComposite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxDateUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxPluginDetector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/clipboard.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxClipboard.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxSHA1.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmBatchCommand.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeCommand.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeResult.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmId.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/events/ZmEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/events/ZmAppEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmModel.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSetting.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAccessControlList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAutocomplete.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmAppCtxt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmOperation.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmMimeTable.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmObjectHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmObjectManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSettings.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmMetaData.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmKeyMap.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTimezone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmOrganizer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmFolder.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSearch.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSearchResult.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmFolderTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAccountList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmZimbraAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTag.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmButtonToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmPopupMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmActionMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAutocompleteListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAddressInputField.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmDLAutocompleteListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmSearchToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmStatusView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmTagMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmOverviewContainer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAccountOverviewContainer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmOverview.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmTreeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmColorMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmColorButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmTimeDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmNewOrganizerDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmAttachDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmQuickAddDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/htmlEditor/ZmHtmlEditor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmDragAndDrop.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmBaseController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmFolderTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmSearchController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmOverviewController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmAppViewMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmRequestMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmZimbraMail.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmNewWindow.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmToolTipMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmPref.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/ZmPreferencesApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/ZmMailApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/ZmCalendarApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/ZmTasksApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/ZmContactsApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/ZmSearchApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContact.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContactList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/ZmBriefcaseApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmFolderChooser.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalBaseItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmMiniCalCache.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmRecurrence.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmDataSource.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmDataSourceCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmPopAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmImapAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmIdentity.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmIdentityCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmPersona.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailMsg.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMimePart.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmRecipients.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmComposeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmInviteMsgView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailItemView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailMsgView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailConfirmView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMailListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMsgController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMailConfirmController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMailFolderTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailRedirectDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/object/ZmImageAttachmentObjectHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/zimlet/handler/ZmEmailObjectHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZmErrorDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/offline/ZmOffline.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("NewWindow_2");
AjxPackage.define("ajax.dwt.keyboard.DwtTabGroupEvent");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyMapMgr");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyboardMgr");
AjxPackage.define("ajax.dwt.keyboard.DwtTabGroup");
AjxPackage.define("ajax.dwt.core.DwtId");
AjxPackage.define("ajax.dwt.dnd.DwtDragEvent");
AjxPackage.define("ajax.dwt.dnd.DwtDragSource");
AjxPackage.define("ajax.dwt.dnd.DwtDropEvent");
AjxPackage.define("ajax.dwt.dnd.DwtDropTarget");
AjxPackage.define("ajax.dwt.dnd.DwtDragBox");
AjxPackage.define("ajax.dwt.events.DwtDisposeEvent");
AjxPackage.define("ajax.dwt.widgets.DwtTreeItem");
AjxPackage.define("ajax.dwt.widgets.DwtHeaderTreeItem");
AjxPackage.define("ajax.dwt.widgets.DwtTree");
AjxPackage.define("ajax.dwt.widgets.DwtCheckbox");
AjxPackage.define("ajax.dwt.widgets.DwtRadioButton");
AjxPackage.define("ajax.dwt.widgets.DwtRadioButtonGroup");
AjxPackage.define("ajax.dwt.widgets.DwtForm");
AjxPackage.define("ajax.dwt.widgets.DwtCalendar");
AjxPackage.define("ajax.dwt.widgets.DwtMessageComposite");
AjxPackage.define("ajax.util.AjxDateUtil");
AjxPackage.define("ajax.util.AjxPluginDetector");
AjxPackage.define("ajax.3rdparty.clipboard");
AjxPackage.define("ajax.util.AjxClipboard");
AjxPackage.define("ajax.util.AjxSHA1");
AjxPackage.define("zimbra.csfe.ZmBatchCommand");
AjxPackage.define("zimbra.csfe.ZmCsfeCommand");
AjxPackage.define("zimbra.csfe.ZmCsfeException");
AjxPackage.define("zimbra.csfe.ZmCsfeResult");
AjxPackage.define("zimbraMail.core.ZmId");
AjxPackage.define("zimbraMail.share.model.events.ZmEvent");
AjxPackage.define("zimbraMail.share.model.events.ZmAppEvent");
AjxPackage.define("zimbraMail.share.model.ZmModel");
AjxPackage.define("zimbraMail.share.model.ZmSetting");
AjxPackage.define("zimbraMail.share.model.ZmAccessControlList");
AjxPackage.define("zimbraMail.share.model.ZmAutocomplete");
AjxPackage.define("zimbraMail.core.ZmAppCtxt");
AjxPackage.define("zimbraMail.core.ZmOperation");
AjxPackage.define("zimbraMail.core.ZmMimeTable");
AjxPackage.define("zimbraMail.share.model.ZmObjectHandler");
AjxPackage.define("zimbraMail.share.model.ZmObjectManager");
AjxPackage.define("zimbraMail.share.model.ZmSettings");
AjxPackage.define("zimbraMail.share.model.ZmMetaData");
AjxPackage.define("zimbraMail.share.model.ZmKeyMap");
AjxPackage.define("zimbraMail.share.model.ZmTimezone");
AjxPackage.define("zimbraMail.share.model.ZmItem");
AjxPackage.define("zimbraMail.share.model.ZmOrganizer");
AjxPackage.define("zimbraMail.share.model.ZmFolder");
AjxPackage.define("zimbraMail.share.model.ZmSearch");
AjxPackage.define("zimbraMail.share.model.ZmSearchResult");
AjxPackage.define("zimbraMail.share.model.ZmTree");
AjxPackage.define("zimbraMail.share.model.ZmFolderTree");
AjxPackage.define("zimbraMail.share.model.ZmList");
AjxPackage.define("zimbraMail.share.model.ZmAccountList");
AjxPackage.define("zimbraMail.share.model.ZmAccount");
AjxPackage.define("zimbraMail.share.model.ZmZimbraAccount");
AjxPackage.define("zimbraMail.share.model.ZmTag");
AjxPackage.define("zimbraMail.core.ZmApp");
AjxPackage.define("zimbraMail.share.view.ZmToolBar");
AjxPackage.define("zimbraMail.share.view.ZmButtonToolBar");
AjxPackage.define("zimbraMail.share.view.ZmPopupMenu");
AjxPackage.define("zimbraMail.share.view.ZmActionMenu");
AjxPackage.define("zimbraMail.share.view.ZmAutocompleteListView");
AjxPackage.define("zimbraMail.share.view.ZmAddressInputField");
AjxPackage.define("zimbraMail.share.view.ZmDLAutocompleteListView");
AjxPackage.define("zimbraMail.share.view.ZmSearchToolBar");
AjxPackage.define("zimbraMail.share.view.ZmStatusView");
AjxPackage.define("zimbraMail.share.view.ZmTagMenu");
AjxPackage.define("zimbraMail.share.view.ZmListView");
AjxPackage.define("zimbraMail.share.view.ZmOverviewContainer");
AjxPackage.define("zimbraMail.share.view.ZmAccountOverviewContainer");
AjxPackage.define("zimbraMail.share.view.ZmOverview");
AjxPackage.define("zimbraMail.share.view.ZmTreeView");
AjxPackage.define("zimbraMail.share.view.ZmColorMenu");
AjxPackage.define("zimbraMail.share.view.ZmColorButton");
AjxPackage.define("zimbraMail.share.view.dialog.ZmDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmTimeDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmNewOrganizerDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmAttachDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmQuickAddDialog");
AjxPackage.define("zimbraMail.share.view.htmlEditor.ZmHtmlEditor");
AjxPackage.define("zimbraMail.share.view.ZmDragAndDrop");
AjxPackage.define("zimbraMail.share.controller.ZmController");
AjxPackage.define("zimbraMail.share.controller.ZmBaseController");
AjxPackage.define("zimbraMail.share.controller.ZmListController");
AjxPackage.define("zimbraMail.share.controller.ZmTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmFolderTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmSearchController");
AjxPackage.define("zimbraMail.share.controller.ZmOverviewController");
AjxPackage.define("zimbraMail.core.ZmAppViewMgr");
AjxPackage.define("zimbraMail.core.ZmRequestMgr");
AjxPackage.define("zimbraMail.core.ZmZimbraMail");
AjxPackage.define("zimbraMail.core.ZmNewWindow");
AjxPackage.define("zimbraMail.core.ZmToolTipMgr");
AjxPackage.define("zimbraMail.prefs.model.ZmPref");
AjxPackage.define("zimbraMail.prefs.ZmPreferencesApp");
AjxPackage.define("zimbraMail.mail.ZmMailApp");
AjxPackage.define("zimbraMail.calendar.ZmCalendarApp");
AjxPackage.define("zimbraMail.tasks.ZmTasksApp");
AjxPackage.define("zimbraMail.abook.ZmContactsApp");
AjxPackage.define("zimbraMail.share.ZmSearchApp");
AjxPackage.define("zimbraMail.abook.model.ZmContact");
AjxPackage.define("zimbraMail.abook.model.ZmContactList");
AjxPackage.define("zimbraMail.briefcase.ZmBriefcaseApp");
AjxPackage.define("zimbraMail.share.view.ZmFolderChooser");
AjxPackage.define("zimbraMail.calendar.model.ZmCalBaseItem");
AjxPackage.define("zimbraMail.calendar.model.ZmCalItem");
AjxPackage.define("zimbraMail.calendar.model.ZmMiniCalCache");
AjxPackage.define("zimbraMail.calendar.model.ZmCalMgr");
AjxPackage.define("zimbraMail.calendar.model.ZmRecurrence");
AjxPackage.define("zimbraMail.mail.model.ZmDataSource");
AjxPackage.define("zimbraMail.mail.model.ZmDataSourceCollection");
AjxPackage.define("zimbraMail.mail.model.ZmPopAccount");
AjxPackage.define("zimbraMail.mail.model.ZmImapAccount");
AjxPackage.define("zimbraMail.mail.model.ZmIdentity");
AjxPackage.define("zimbraMail.mail.model.ZmIdentityCollection");
AjxPackage.define("zimbraMail.prefs.model.ZmPersona");
AjxPackage.define("zimbraMail.mail.model.ZmMailItem");
AjxPackage.define("zimbraMail.mail.model.ZmMailMsg");
AjxPackage.define("zimbraMail.mail.model.ZmMimePart");
AjxPackage.define("zimbraMail.mail.model.ZmMailList");
AjxPackage.define("zimbraMail.mail.view.ZmRecipients");
AjxPackage.define("zimbraMail.mail.view.ZmComposeView");
AjxPackage.define("zimbraMail.mail.view.ZmInviteMsgView");
AjxPackage.define("zimbraMail.mail.view.ZmMailItemView");
AjxPackage.define("zimbraMail.mail.view.ZmMailMsgView");
AjxPackage.define("zimbraMail.mail.view.ZmMailConfirmView");
AjxPackage.define("zimbraMail.mail.controller.ZmComposeController");
AjxPackage.define("zimbraMail.mail.controller.ZmMailListController");
AjxPackage.define("zimbraMail.mail.controller.ZmMsgController");
AjxPackage.define("zimbraMail.mail.controller.ZmMailConfirmController");
AjxPackage.define("zimbraMail.mail.controller.ZmMailFolderTreeController");
AjxPackage.define("zimbraMail.mail.view.ZmMailRedirectDialog");
AjxPackage.define("zimbraMail.mail.view.object.ZmImageAttachmentObjectHandler");
AjxPackage.define("zimbraMail.share.zimlet.handler.ZmEmailObjectHandler");
AjxPackage.define("zimbra.common.ZmErrorDialog");
AjxPackage.define("zimbraMail.offline.ZmOffline");
</script>
