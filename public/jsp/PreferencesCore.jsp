<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmPrefPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/model/ZmPersona.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/prefs/controller/ZmPrefPageTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/prefs/Options.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/prefs/Pages.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/prefs/Widgets.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("PreferencesCore");
AjxPackage.define("zimbraMail.prefs.model.ZmPrefPage");
AjxPackage.define("zimbraMail.prefs.model.ZmPersona");
AjxPackage.define("zimbraMail.prefs.controller.ZmPrefPageTreeController");
AjxPackage.define("ajax.dwt.widgets.DwtCalendar");
AjxPackage.define("prefs.Options");
AjxPackage.define("prefs.Pages");
AjxPackage.define("prefs.Widgets");
</script>
