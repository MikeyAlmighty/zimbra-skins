<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmAppt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmApptList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmApptCache.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmFreeBusyCache.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContact.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContactList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmResource.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/model/ZmResourceList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptViewHelper.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmCalItemComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmApptComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmCalViewController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/calendar/Appointment.template.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/calendar/Calendar.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("CalendarCore");
AjxPackage.define("zimbraMail.calendar.model.ZmCalendar");
AjxPackage.define("zimbraMail.calendar.model.ZmAppt");
AjxPackage.define("zimbraMail.calendar.model.ZmApptList");
AjxPackage.define("zimbraMail.calendar.model.ZmApptCache");
AjxPackage.define("zimbraMail.calendar.model.ZmFreeBusyCache");
AjxPackage.define("zimbraMail.abook.model.ZmContact");
AjxPackage.define("zimbraMail.abook.model.ZmContactList");
AjxPackage.define("zimbraMail.calendar.model.ZmResource");
AjxPackage.define("zimbraMail.calendar.model.ZmResourceList");
AjxPackage.define("zimbraMail.calendar.view.ZmApptViewHelper");
AjxPackage.define("zimbraMail.calendar.controller.ZmCalItemComposeController");
AjxPackage.define("zimbraMail.calendar.controller.ZmApptComposeController");
AjxPackage.define("zimbraMail.calendar.controller.ZmCalViewController");
AjxPackage.define("calendar.Appointment");
AjxPackage.define("calendar.Calendar");
</script>
