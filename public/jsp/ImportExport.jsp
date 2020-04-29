<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/controller/ZmImportExportController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmImportExportBaseView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmExportView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmImportView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/view/ZmImportExportPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/data/ImportExport.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("ImportExport");
AjxPackage.define("zimbraMail.share.controller.ZmImportExportController");
AjxPackage.define("zimbraMail.share.view.ZmImportExportBaseView");
AjxPackage.define("zimbraMail.share.view.ZmExportView");
AjxPackage.define("zimbraMail.share.view.ZmImportView");
AjxPackage.define("zimbraMail.prefs.view.ZmImportExportPage");
AjxPackage.define("data.ImportExport");
</script>
