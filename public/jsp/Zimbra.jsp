<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmBatchCommand.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeCommand.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeResult.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZmBaseSplashScreen.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZmErrorDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/common/ZLoginFactory.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/zimbra/Widgets.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Zimbra");
AjxPackage.define("zimbra.csfe.ZmBatchCommand");
AjxPackage.define("zimbra.csfe.ZmCsfeCommand");
AjxPackage.define("zimbra.csfe.ZmCsfeException");
AjxPackage.define("zimbra.csfe.ZmCsfeResult");
AjxPackage.define("zimbra.common.ZmBaseSplashScreen");
AjxPackage.define("zimbra.common.ZmErrorDialog");
AjxPackage.define("zimbra.common.ZLoginFactory");
AjxPackage.define("zimbra.Widgets");
</script>
