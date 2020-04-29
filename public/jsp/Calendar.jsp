<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalViewMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalBaseView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalColView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalDayView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalWorkWeekView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalWeekView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalMonthView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalScheduleView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptDeleteNotifyDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalPrintDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalItemView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmCalendarTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Calendar");
AjxPackage.define("zimbraMail.calendar.view.ZmApptListView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalViewMgr");
AjxPackage.define("zimbraMail.calendar.view.ZmCalBaseView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalColView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalDayView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalWorkWeekView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalWeekView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalMonthView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalScheduleView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalListView");
AjxPackage.define("zimbraMail.calendar.view.ZmApptDeleteNotifyDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmCalPrintDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmCalItemView");
AjxPackage.define("zimbraMail.calendar.controller.ZmCalendarTreeController");
</script>
