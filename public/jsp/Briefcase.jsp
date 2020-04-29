<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/ZmBriefcaseBaseView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/ZmBriefcaseIconView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/ZmDetailListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/ZmPreviewPaneView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/ZmNewBriefcaseDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/ZmBriefcaseTreeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/dialog/ZmBriefcaseTabView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/view/dialog/ZmCheckinDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/controller/ZmBriefcaseController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/controller/ZmBriefcaseTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxPluginDetector.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Briefcase");
AjxPackage.define("zimbraMail.briefcase.view.ZmBriefcaseBaseView");
AjxPackage.define("zimbraMail.briefcase.view.ZmBriefcaseIconView");
AjxPackage.define("zimbraMail.briefcase.view.ZmDetailListView");
AjxPackage.define("zimbraMail.briefcase.view.ZmPreviewPaneView");
AjxPackage.define("zimbraMail.briefcase.view.ZmNewBriefcaseDialog");
AjxPackage.define("zimbraMail.briefcase.view.ZmBriefcaseTreeView");
AjxPackage.define("zimbraMail.briefcase.view.dialog.ZmBriefcaseTabView");
AjxPackage.define("zimbraMail.briefcase.view.dialog.ZmCheckinDialog");
AjxPackage.define("zimbraMail.briefcase.controller.ZmBriefcaseController");
AjxPackage.define("zimbraMail.briefcase.controller.ZmBriefcaseTreeController");
AjxPackage.define("ajax.util.AjxPluginDetector");
</script>
