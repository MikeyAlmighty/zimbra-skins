<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmShare.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmShareProxy.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/model/ZmMountpoint.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmShareReply.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmShareTreeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmAcceptShareDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmDeclineShareDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmSharePropsDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmShareSearchDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmRevokeShareDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmFindnReplaceDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmFolderNotifyDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmTimezonePicker.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Share");
AjxPackage.define("zimbraMail.share.model.ZmShare");
AjxPackage.define("zimbraMail.share.model.ZmShareProxy");
AjxPackage.define("zimbraMail.share.model.ZmMountpoint");
AjxPackage.define("zimbraMail.share.view.ZmShareReply");
AjxPackage.define("zimbraMail.share.view.ZmShareTreeView");
AjxPackage.define("zimbraMail.share.view.dialog.ZmAcceptShareDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmDeclineShareDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmSharePropsDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmShareSearchDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmRevokeShareDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmFindnReplaceDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmFolderNotifyDialog");
AjxPackage.define("zimbraMail.share.view.dialog.ZmTimezonePicker");
</script>
