<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/mail/view/ZmMailMsgView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmCalItemComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmRecurrence.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptRecurDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptViewHelper.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalItemEditView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalItemView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmCalendarTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/view/ZmTaskView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/view/ZmTaskMultiView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/view/ZmTaskEditView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/view/ZmNewTaskFolderDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/controller/ZmTaskController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/controller/ZmTaskTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Tasks");
AjxPackage.define("zimbraMail.mail.view.ZmMailMsgView");
AjxPackage.define("zimbraMail.calendar.controller.ZmCalItemComposeController");
AjxPackage.define("zimbraMail.calendar.model.ZmRecurrence");
AjxPackage.define("zimbraMail.calendar.model.ZmCalItem");
AjxPackage.define("zimbraMail.calendar.view.ZmApptRecurDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmApptViewHelper");
AjxPackage.define("zimbraMail.calendar.view.ZmCalItemEditView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalItemView");
AjxPackage.define("zimbraMail.calendar.controller.ZmCalendarTreeController");
AjxPackage.define("zimbraMail.tasks.view.ZmTaskView");
AjxPackage.define("zimbraMail.tasks.view.ZmTaskMultiView");
AjxPackage.define("zimbraMail.tasks.view.ZmTaskEditView");
AjxPackage.define("zimbraMail.tasks.view.ZmNewTaskFolderDialog");
AjxPackage.define("zimbraMail.tasks.controller.ZmTaskController");
AjxPackage.define("zimbraMail.tasks.controller.ZmTaskTreeController");
</script>
