<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxPluginDetector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAccountAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmAppAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmBrowserAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmDesktopAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmSoundAlert.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Alert");
AjxPackage.define("ajax.util.AjxPluginDetector");
AjxPackage.define("zimbraMail.share.view.ZmAlert");
AjxPackage.define("zimbraMail.share.view.ZmAccountAlert");
AjxPackage.define("zimbraMail.share.view.ZmAppAlert");
AjxPackage.define("zimbraMail.share.view.ZmBrowserAlert");
AjxPackage.define("zimbraMail.share.view.ZmDesktopAlert");
AjxPackage.define("zimbraMail.share.view.ZmSoundAlert");
</script>
