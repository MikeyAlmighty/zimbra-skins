<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/modernizr/modernizr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxJson.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxEnv.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxCallback.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxLoader.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxPackage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxTemplate.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxTemplateCompiler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/boot/AjxDispatcher.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Boot");
AjxPackage.define("ajax.3rdparty.modernizr.modernizr");
AjxPackage.define("ajax.boot.AjxJson");
AjxPackage.define("ajax.boot.AjxEnv");
AjxPackage.define("ajax.boot.AjxCallback");
AjxPackage.define("ajax.boot.AjxLoader");
AjxPackage.define("ajax.boot.AjxPackage");
AjxPackage.define("ajax.boot.AjxTemplate");
AjxPackage.define("ajax.boot.AjxTemplateCompiler");
AjxPackage.define("ajax.boot.AjxDispatcher");
</script>
