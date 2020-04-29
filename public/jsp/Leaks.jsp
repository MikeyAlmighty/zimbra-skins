<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxLeakDetector.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Leaks");
AjxPackage.define("ajax.debug.AjxLeakDetector");
</script>
