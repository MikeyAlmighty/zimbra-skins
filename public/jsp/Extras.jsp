<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxDlgUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/core/ZmClientCmdHandler.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/ZmUploadManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmChooseFolderDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmChooseAccountDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmDumpsterDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmRenameFolderDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmRenameTagDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmPasswordUpdateDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmPickTagDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmUploadDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmUploadConflictDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmDebugLogDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/htmlEditor/ZmSpellChecker.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Extras");
AjxPackage.define("ajax.util.AjxDlgUtil");
AjxPackage.define("zimbraMail.core.ZmClientCmdHandler");
AjxPackage.define("zimbraMail.share.ZmUploadManager");
AjxPackage.define("zimbraMail.share.view.dialog.ZmChooseFolderDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmChooseAccountDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmDumpsterDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmRenameFolderDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmRenameTagDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmPasswordUpdateDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmPickTagDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmUploadDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmUploadConflictDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmDebugLogDialog");
AjxPackage.define("zimbraMail.share.view.htmlEditor.ZmSpellChecker");
</script>
