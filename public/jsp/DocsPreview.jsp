<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxStringUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimedAction.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxText.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimezoneData.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimezone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpcRequest.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/docs/view/ZmDocsPreview.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("DocsPreview");
AjxPackage.define("ajax.util.AjxUtil");
AjxPackage.define("ajax.util.AjxStringUtil");
AjxPackage.define("ajax.util.AjxTimedAction");
AjxPackage.define("ajax.util.AjxText");
AjxPackage.define("ajax.util.AjxTimezoneData");
AjxPackage.define("ajax.util.AjxTimezone");
AjxPackage.define("ajax.net.AjxRpcRequest");
AjxPackage.define("ajax.net.AjxRpc");
AjxPackage.define("zimbraMail.docs.view.ZmDocsPreview");
</script>
