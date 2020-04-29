<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmObjectHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmObjectManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSettings.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmMetaData.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmKeyMap.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTimezone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmActionStack.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAction.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmOrganizer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmFolder.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSearchFolder.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSearch.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmSearchResult.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTag.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmTagTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmFolderTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAccountList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmZimbraAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAccessControlList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmDomainList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmAttachmentTypeList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/ZmSearchApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/ZmSocialApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmPopupMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmActionMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmButtonToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmNavToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmSearchToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmSearchResultsToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmSearchResultsFilterPanel.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmTreeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmTagMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAppChooser.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAppButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmStatusView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmOverviewContainer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAccountOverviewContainer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmOverview.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAppIframeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmCommunityView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmBaseController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmTagTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmFolderTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmSearchTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmShareTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmOverviewController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmSearchController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmSearchResultsController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmActionController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmAppViewMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmRequestMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmZimbraMail.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmPref.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalBaseItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/model/ZmTask.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/ZmPreferencesApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/portal/ZmPortalApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/ZmMailApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/ZmCalendarApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/ZmTasksApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/ZmContactsApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/ZmBriefcaseApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/ZmVoiceApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/dwt/Widgets.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/share/App.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/share/Dialogs.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/share/Quota.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/share/Widgets.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/zimbra/Widgets.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Startup1_2");
AjxPackage.define("zimbraMail.share.model.ZmObjectHandler");
AjxPackage.define("zimbraMail.share.model.ZmObjectManager");
AjxPackage.define("zimbraMail.share.model.ZmSettings");
AjxPackage.define("zimbraMail.share.model.ZmMetaData");
AjxPackage.define("zimbraMail.share.model.ZmKeyMap");
AjxPackage.define("zimbraMail.share.model.ZmTimezone");
AjxPackage.define("zimbraMail.share.model.ZmItem");
AjxPackage.define("zimbraMail.share.model.ZmActionStack");
AjxPackage.define("zimbraMail.share.model.ZmAction");
AjxPackage.define("zimbraMail.share.model.ZmOrganizer");
AjxPackage.define("zimbraMail.share.model.ZmFolder");
AjxPackage.define("zimbraMail.share.model.ZmSearchFolder");
AjxPackage.define("zimbraMail.share.model.ZmSearch");
AjxPackage.define("zimbraMail.share.model.ZmSearchResult");
AjxPackage.define("zimbraMail.share.model.ZmTag");
AjxPackage.define("zimbraMail.share.model.ZmTree");
AjxPackage.define("zimbraMail.share.model.ZmTagTree");
AjxPackage.define("zimbraMail.share.model.ZmFolderTree");
AjxPackage.define("zimbraMail.share.model.ZmList");
AjxPackage.define("zimbraMail.share.model.ZmAccountList");
AjxPackage.define("zimbraMail.share.model.ZmAccount");
AjxPackage.define("zimbraMail.share.model.ZmZimbraAccount");
AjxPackage.define("zimbraMail.share.model.ZmAccessControlList");
AjxPackage.define("zimbraMail.share.model.ZmDomainList");
AjxPackage.define("zimbraMail.share.model.ZmAttachmentTypeList");
AjxPackage.define("zimbraMail.core.ZmApp");
AjxPackage.define("zimbraMail.share.ZmSearchApp");
AjxPackage.define("zimbraMail.share.ZmSocialApp");
AjxPackage.define("zimbraMail.share.view.ZmPopupMenu");
AjxPackage.define("zimbraMail.share.view.ZmActionMenu");
AjxPackage.define("zimbraMail.share.view.ZmToolBar");
AjxPackage.define("zimbraMail.share.view.ZmButtonToolBar");
AjxPackage.define("zimbraMail.share.view.ZmNavToolBar");
AjxPackage.define("zimbraMail.share.view.ZmSearchToolBar");
AjxPackage.define("zimbraMail.share.view.ZmSearchResultsToolBar");
AjxPackage.define("zimbraMail.share.view.ZmSearchResultsFilterPanel");
AjxPackage.define("zimbraMail.share.view.ZmTreeView");
AjxPackage.define("zimbraMail.share.view.ZmTagMenu");
AjxPackage.define("zimbraMail.share.view.ZmListView");
AjxPackage.define("zimbraMail.share.view.ZmAppChooser");
AjxPackage.define("zimbraMail.share.view.ZmAppButton");
AjxPackage.define("zimbraMail.share.view.ZmStatusView");
AjxPackage.define("zimbraMail.share.view.ZmOverviewContainer");
AjxPackage.define("zimbraMail.share.view.ZmAccountOverviewContainer");
AjxPackage.define("zimbraMail.share.view.ZmOverview");
AjxPackage.define("zimbraMail.share.view.ZmAppIframeView");
AjxPackage.define("zimbraMail.share.view.ZmCommunityView");
AjxPackage.define("zimbraMail.share.controller.ZmController");
AjxPackage.define("zimbraMail.share.controller.ZmBaseController");
AjxPackage.define("zimbraMail.share.controller.ZmListController");
AjxPackage.define("zimbraMail.share.controller.ZmTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmTagTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmFolderTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmSearchTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmShareTreeController");
AjxPackage.define("zimbraMail.share.controller.ZmOverviewController");
AjxPackage.define("zimbraMail.share.controller.ZmSearchController");
AjxPackage.define("zimbraMail.share.controller.ZmSearchResultsController");
AjxPackage.define("zimbraMail.share.controller.ZmActionController");
AjxPackage.define("zimbraMail.core.ZmAppViewMgr");
AjxPackage.define("zimbraMail.core.ZmRequestMgr");
AjxPackage.define("zimbraMail.core.ZmZimbraMail");
AjxPackage.define("zimbraMail.prefs.model.ZmPref");
AjxPackage.define("zimbraMail.calendar.model.ZmCalBaseItem");
AjxPackage.define("zimbraMail.calendar.model.ZmCalItem");
AjxPackage.define("zimbraMail.tasks.model.ZmTask");
AjxPackage.define("zimbraMail.prefs.ZmPreferencesApp");
AjxPackage.define("zimbraMail.portal.ZmPortalApp");
AjxPackage.define("zimbraMail.mail.ZmMailApp");
AjxPackage.define("zimbraMail.calendar.ZmCalendarApp");
AjxPackage.define("zimbraMail.tasks.ZmTasksApp");
AjxPackage.define("zimbraMail.abook.ZmContactsApp");
AjxPackage.define("zimbraMail.briefcase.ZmBriefcaseApp");
AjxPackage.define("zimbraMail.voicemail.ZmVoiceApp");
AjxPackage.define("dwt.Widgets");
AjxPackage.define("share.App");
AjxPackage.define("share.Dialogs");
AjxPackage.define("share.Quota");
AjxPackage.define("share.Widgets");
AjxPackage.define("zimbra.Widgets");
</script>
