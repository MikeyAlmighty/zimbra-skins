<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmConv.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailMsg.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMimePart.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/object/ZmImageAttachmentObjectHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/zimlet/handler/ZmEmailObjectHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailItemView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmDoublePaneView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmTradView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmInviteMsgView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailMsgView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailMsgListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmConvListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailListSectionHeader.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmConvView2.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmRecipients.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailRedirectDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMailFolderTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMailListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmDoublePaneController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmConvListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmTradController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMsgController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmIdentity.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmIdentityCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmDataSource.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmDataSourceCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailListGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailListDateGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailListFromGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailListPriorityGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmMailListSizeGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmPopAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmImapAccount.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmSignature.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/model/ZmSignatureCollection.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/mail/Message.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("MailCore");
AjxPackage.define("zimbraMail.mail.model.ZmMailItem");
AjxPackage.define("zimbraMail.mail.model.ZmConv");
AjxPackage.define("zimbraMail.mail.model.ZmMailMsg");
AjxPackage.define("zimbraMail.mail.model.ZmMimePart");
AjxPackage.define("zimbraMail.mail.model.ZmMailList");
AjxPackage.define("zimbraMail.mail.view.object.ZmImageAttachmentObjectHandler");
AjxPackage.define("zimbraMail.share.zimlet.handler.ZmEmailObjectHandler");
AjxPackage.define("zimbraMail.mail.view.ZmMailListView");
AjxPackage.define("zimbraMail.mail.view.ZmMailItemView");
AjxPackage.define("zimbraMail.mail.view.ZmDoublePaneView");
AjxPackage.define("zimbraMail.mail.view.ZmTradView");
AjxPackage.define("zimbraMail.mail.view.ZmInviteMsgView");
AjxPackage.define("zimbraMail.mail.view.ZmMailMsgView");
AjxPackage.define("zimbraMail.mail.view.ZmMailMsgListView");
AjxPackage.define("zimbraMail.mail.view.ZmConvListView");
AjxPackage.define("zimbraMail.mail.view.ZmMailListSectionHeader");
AjxPackage.define("zimbraMail.mail.view.ZmConvView2");
AjxPackage.define("zimbraMail.mail.view.ZmRecipients");
AjxPackage.define("zimbraMail.mail.view.ZmMailRedirectDialog");
AjxPackage.define("zimbraMail.mail.controller.ZmMailFolderTreeController");
AjxPackage.define("zimbraMail.mail.controller.ZmMailListController");
AjxPackage.define("zimbraMail.mail.controller.ZmDoublePaneController");
AjxPackage.define("zimbraMail.mail.controller.ZmConvListController");
AjxPackage.define("zimbraMail.mail.controller.ZmTradController");
AjxPackage.define("zimbraMail.mail.controller.ZmMsgController");
AjxPackage.define("zimbraMail.mail.model.ZmIdentity");
AjxPackage.define("zimbraMail.mail.model.ZmIdentityCollection");
AjxPackage.define("zimbraMail.mail.model.ZmDataSource");
AjxPackage.define("zimbraMail.mail.model.ZmDataSourceCollection");
AjxPackage.define("zimbraMail.mail.model.ZmMailListGroup");
AjxPackage.define("zimbraMail.mail.model.ZmMailListDateGroup");
AjxPackage.define("zimbraMail.mail.model.ZmMailListFromGroup");
AjxPackage.define("zimbraMail.mail.model.ZmMailListPriorityGroup");
AjxPackage.define("zimbraMail.mail.model.ZmMailListSizeGroup");
AjxPackage.define("zimbraMail.mail.model.ZmPopAccount");
AjxPackage.define("zimbraMail.mail.model.ZmImapAccount");
AjxPackage.define("zimbraMail.mail.model.ZmSignature");
AjxPackage.define("zimbraMail.mail.model.ZmSignatureCollection");
AjxPackage.define("mail.Message");
</script>
