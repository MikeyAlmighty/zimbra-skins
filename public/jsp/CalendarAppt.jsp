<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptRecurDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalItemEditView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmCalItemTypeDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptComposeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptEditView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptNotifyDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmResourceConflictDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptQuickAddDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmFreeBusySchedulerView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmNewCalendarDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmExternalCalendarDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmApptAssistantView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmScheduleAssistantView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmLocationAssistantView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmSuggestionsView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmTimeSuggestionView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmLocationSuggestionView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmTimeSuggestionPrefDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmResolveLocationConflictDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmResolveLocationView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmAttendeePicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/view/ZmMiniCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmCalItemComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmApptComposeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/calendar/controller/ZmApptController.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("CalendarAppt");
AjxPackage.define("zimbraMail.calendar.view.ZmApptRecurDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmCalItemEditView");
AjxPackage.define("zimbraMail.calendar.view.ZmCalItemTypeDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmApptComposeView");
AjxPackage.define("zimbraMail.calendar.view.ZmApptEditView");
AjxPackage.define("zimbraMail.calendar.view.ZmApptNotifyDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmResourceConflictDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmApptQuickAddDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmFreeBusySchedulerView");
AjxPackage.define("zimbraMail.calendar.view.ZmNewCalendarDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmExternalCalendarDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmApptAssistantView");
AjxPackage.define("zimbraMail.calendar.view.ZmScheduleAssistantView");
AjxPackage.define("zimbraMail.calendar.view.ZmLocationAssistantView");
AjxPackage.define("zimbraMail.calendar.view.ZmSuggestionsView");
AjxPackage.define("zimbraMail.calendar.view.ZmTimeSuggestionView");
AjxPackage.define("zimbraMail.calendar.view.ZmLocationSuggestionView");
AjxPackage.define("zimbraMail.calendar.view.ZmTimeSuggestionPrefDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmResolveLocationConflictDialog");
AjxPackage.define("zimbraMail.calendar.view.ZmResolveLocationView");
AjxPackage.define("zimbraMail.calendar.view.ZmAttendeePicker");
AjxPackage.define("zimbraMail.calendar.view.ZmMiniCalendar");
AjxPackage.define("zimbraMail.calendar.controller.ZmCalItemComposeController");
AjxPackage.define("zimbraMail.calendar.controller.ZmApptComposeController");
AjxPackage.define("zimbraMail.calendar.controller.ZmApptController");
</script>
