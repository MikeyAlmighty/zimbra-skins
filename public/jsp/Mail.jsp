<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmComposeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailConfirmView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmConvController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/controller/ZmMailConfirmController.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Mail");
AjxPackage.define("zimbraMail.mail.view.ZmComposeView");
AjxPackage.define("zimbraMail.mail.view.ZmMailConfirmView");
AjxPackage.define("zimbraMail.mail.controller.ZmComposeController");
AjxPackage.define("zimbraMail.mail.controller.ZmConvController");
AjxPackage.define("zimbraMail.mail.controller.ZmMailConfirmController");
</script>
