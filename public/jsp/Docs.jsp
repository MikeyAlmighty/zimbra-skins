<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/docs/ZmDocsEditApp.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/docs/view/ZmDocsEditView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/docs/controller/ZmDocsEditController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/model/ZmDocletMgr.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Docs");
AjxPackage.define("zimbraMail.docs.ZmDocsEditApp");
AjxPackage.define("zimbraMail.docs.view.ZmDocsEditView");
AjxPackage.define("zimbraMail.docs.controller.ZmDocsEditController");
AjxPackage.define("zimbraMail.briefcase.model.ZmDocletMgr");
</script>
