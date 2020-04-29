<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxMD5.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxSHA1.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Crypt");
AjxPackage.define("ajax.util.AjxMD5");
AjxPackage.define("ajax.util.AjxSHA1");
</script>
