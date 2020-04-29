<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/portal/controller/ZmPortalController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/portal/model/ZmPortlet.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/portal/model/ZmPortletMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/portal/view/ZmPortalView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/portal/view/ZmPortletView.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Portal");
AjxPackage.define("zimbraMail.portal.controller.ZmPortalController");
AjxPackage.define("zimbraMail.portal.model.ZmPortlet");
AjxPackage.define("zimbraMail.portal.model.ZmPortletMgr");
AjxPackage.define("zimbraMail.portal.view.ZmPortalView");
AjxPackage.define("zimbraMail.portal.view.ZmPortletView");
</script>
