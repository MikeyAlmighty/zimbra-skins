<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxDebug.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxDebugXmlDocument.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Debug");
AjxPackage.define("ajax.debug.AjxDebug");
AjxPackage.define("ajax.debug.AjxDebugXmlDocument");
</script>
