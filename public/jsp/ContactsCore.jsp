<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmAddrBook.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContact.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContactList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactsHelper.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/view/ZmContactPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/abook/Contacts.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("ContactsCore");
AjxPackage.define("zimbraMail.abook.model.ZmAddrBook");
AjxPackage.define("zimbraMail.abook.model.ZmContact");
AjxPackage.define("zimbraMail.abook.model.ZmContactList");
AjxPackage.define("zimbraMail.abook.view.ZmContactsHelper");
AjxPackage.define("zimbraMail.abook.view.ZmContactPicker");
AjxPackage.define("abook.Contacts");
</script>
