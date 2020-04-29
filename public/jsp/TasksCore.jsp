<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/model/ZmTaskFolder.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/controller/ZmTaskListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/tasks/view/ZmTaskListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/tasks/Tasks.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("TasksCore");
AjxPackage.define("zimbraMail.tasks.model.ZmTaskFolder");
AjxPackage.define("zimbraMail.tasks.controller.ZmTaskListController");
AjxPackage.define("zimbraMail.tasks.view.ZmTaskListView");
AjxPackage.define("tasks.Tasks");
</script>
