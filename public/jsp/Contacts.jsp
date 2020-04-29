<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmEditContactView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmGroupView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactsBaseView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactGroupMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactSplitView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmNewAddrBookDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmNewContactGroupDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactQuickAddDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/controller/ZmContactListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/controller/ZmContactController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/controller/ZmAddrBookTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactSearch.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Contacts");
AjxPackage.define("zimbraMail.abook.view.ZmEditContactView");
AjxPackage.define("zimbraMail.abook.view.ZmGroupView");
AjxPackage.define("zimbraMail.abook.view.ZmContactsBaseView");
AjxPackage.define("zimbraMail.abook.view.ZmContactGroupMenu");
AjxPackage.define("zimbraMail.abook.view.ZmContactSplitView");
AjxPackage.define("zimbraMail.abook.view.ZmNewAddrBookDialog");
AjxPackage.define("zimbraMail.abook.view.ZmNewContactGroupDialog");
AjxPackage.define("zimbraMail.abook.view.ZmContactQuickAddDialog");
AjxPackage.define("zimbraMail.abook.controller.ZmContactListController");
AjxPackage.define("zimbraMail.abook.controller.ZmContactController");
AjxPackage.define("zimbraMail.abook.controller.ZmAddrBookTreeController");
AjxPackage.define("zimbraMail.abook.view.ZmContactSearch");
</script>
