<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtXFormsEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtXModelEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtIdleTimer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/XFormGlobal.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/XModel.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/XModelItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/XForm.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/XFormItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/XFormChoices.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/OSelect_XFormItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/ButtonGrid.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/DwtXFormDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/xforms/DynSelect_XFormItem.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("XForms");
AjxPackage.define("ajax.dwt.events.DwtXFormsEvent");
AjxPackage.define("ajax.dwt.events.DwtXModelEvent");
AjxPackage.define("ajax.dwt.events.DwtIdleTimer");
AjxPackage.define("ajax.dwt.xforms.XFormGlobal");
AjxPackage.define("ajax.dwt.xforms.XModel");
AjxPackage.define("ajax.dwt.xforms.XModelItem");
AjxPackage.define("ajax.dwt.xforms.XForm");
AjxPackage.define("ajax.dwt.xforms.XFormItem");
AjxPackage.define("ajax.dwt.xforms.XFormChoices");
AjxPackage.define("ajax.dwt.xforms.OSelect_XFormItem");
AjxPackage.define("ajax.dwt.xforms.ButtonGrid");
AjxPackage.define("ajax.dwt.xforms.DwtXFormDialog");
AjxPackage.define("ajax.dwt.xforms.DynSelect_XFormItem");
</script>
