<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmZimletBase.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmZimletContext.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmZimletMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmZimlet.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmZimletTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Zimlet");
AjxPackage.define("zimbraMail.share.model.ZmZimletBase");
AjxPackage.define("zimbraMail.share.model.ZmZimletContext");
AjxPackage.define("zimbraMail.share.model.ZmZimletMgr");
AjxPackage.define("zimbraMail.share.model.ZmZimlet");
AjxPackage.define("zimbraMail.share.controller.ZmZimletTreeController");
</script>
