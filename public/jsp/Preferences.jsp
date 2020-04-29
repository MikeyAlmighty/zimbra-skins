<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmFilterRule.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmFilterRules.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmLocale.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmMobileDevice.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmIdentity.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmIdentityCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmDataSource.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmDataSourceCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmPopAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmImapAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmSignature.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmSignatureCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmPreferencesPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmShortcutsPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmBackupPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmPrefView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmFilterRulesView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmFilterRuleDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmZimletsPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmMobileDevicesPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmPriorityMessageFilterDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmSharingPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmFilterPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmNotificationsPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmActivityStreamPromptDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmActivityToInboxPromptDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmOneTimeCodesDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmApplicationCodeDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalendarPrefsPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/prefs/ZmAccountsPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/prefs/ZmAccountTestDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/prefs/ZmMailPrefsPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/prefs/ZmSignaturesPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/prefs/ZmTrustedPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/controller/ZmPrefController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/controller/ZmFilterController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/controller/ZmFilterRulesController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/controller/ZmMobileDevicesController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmProgressController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmTwoFactorSetupDialog.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Preferences");
AjxPackage.define("zimbraMail.prefs.model.ZmFilterRule");
AjxPackage.define("zimbraMail.prefs.model.ZmFilterRules");
AjxPackage.define("zimbraMail.prefs.model.ZmLocale");
AjxPackage.define("zimbraMail.prefs.model.ZmMobileDevice");
AjxPackage.define("zimbraMail.mail.model.ZmIdentity");
AjxPackage.define("zimbraMail.mail.model.ZmIdentityCollection");
AjxPackage.define("zimbraMail.mail.model.ZmDataSource");
AjxPackage.define("zimbraMail.mail.model.ZmDataSourceCollection");
AjxPackage.define("zimbraMail.mail.model.ZmPopAccount");
AjxPackage.define("zimbraMail.mail.model.ZmImapAccount");
AjxPackage.define("zimbraMail.mail.model.ZmSignature");
AjxPackage.define("zimbraMail.mail.model.ZmSignatureCollection");
AjxPackage.define("zimbraMail.prefs.view.ZmPreferencesPage");
AjxPackage.define("zimbraMail.prefs.view.ZmShortcutsPage");
AjxPackage.define("zimbraMail.prefs.view.ZmBackupPage");
AjxPackage.define("zimbraMail.prefs.view.ZmPrefView");
AjxPackage.define("zimbraMail.prefs.view.ZmFilterRulesView");
AjxPackage.define("zimbraMail.prefs.view.ZmFilterRuleDialog");
AjxPackage.define("zimbraMail.prefs.view.ZmZimletsPage");
AjxPackage.define("zimbraMail.prefs.view.ZmMobileDevicesPage");
AjxPackage.define("zimbraMail.prefs.view.ZmPriorityMessageFilterDialog");
AjxPackage.define("zimbraMail.prefs.view.ZmSharingPage");
AjxPackage.define("zimbraMail.prefs.view.ZmFilterPage");
AjxPackage.define("zimbraMail.prefs.view.ZmNotificationsPage");
AjxPackage.define("zimbraMail.prefs.view.ZmActivityStreamPromptDialog");
AjxPackage.define("zimbraMail.prefs.view.ZmActivityToInboxPromptDialog");
AjxPackage.define("zimbraMail.prefs.view.ZmOneTimeCodesDialog");
AjxPackage.define("zimbraMail.prefs.view.ZmApplicationCodeDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmCalendarPrefsPage");
AjxPackage.define("zimbraMail.mail.view.prefs.ZmAccountsPage");
AjxPackage.define("zimbraMail.mail.view.prefs.ZmAccountTestDialog");
AjxPackage.define("zimbraMail.mail.view.prefs.ZmMailPrefsPage");
AjxPackage.define("zimbraMail.mail.view.prefs.ZmSignaturesPage");
AjxPackage.define("zimbraMail.mail.view.prefs.ZmTrustedPage");
AjxPackage.define("zimbraMail.prefs.controller.ZmPrefController");
AjxPackage.define("zimbraMail.prefs.controller.ZmFilterController");
AjxPackage.define("zimbraMail.prefs.controller.ZmFilterRulesController");
AjxPackage.define("zimbraMail.prefs.controller.ZmMobileDevicesController");
AjxPackage.define("zimbraMail.share.controller.ZmProgressController");
AjxPackage.define("zimbraMail.share.view.dialog.ZmTwoFactorSetupDialog");
</script>
