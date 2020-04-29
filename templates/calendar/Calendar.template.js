AjxTemplate.register("calendar.Calendar#calendar_appt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body' class='appt_body ";
	buffer[_i++] = data["bodyColor"];
	buffer[_i++] = " ";
	buffer[_i++] = data["boxBorder"];
	buffer[_i++] = "'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tableBody' style=\"width:100%; height:100%;";
	buffer[_i++] = data["bodyStyle"];
	buffer[_i++] = "\">";
	 if(data.headerStyle) {
	buffer[_i++] = "<tr style=\"";
	buffer[_i++] = data["headerStyle"];
	buffer[_i++] = "\">";
	 }else { 
	buffer[_i++] = "<tr class='";
	buffer[_i++] = data["headerColor"];
	buffer[_i++] = "'>";
	 } 
	buffer[_i++] = "<td style=\"";
	buffer[_i++] = data["showAsColor"];
	buffer[_i++] = "\" width=4 rowspan=\"";
	buffer[_i++] =  data.hideTime ? 2 : 3 ;
	buffer[_i++] = "\"></td><td class='appt";
	buffer[_i++] = data["newState"];
	buffer[_i++] = "_time'><table role=\"presentation\" style='background: none repeat scroll 0 0 transparent;border:0;border-collapse:collapse;border-spacing:0;width:100%'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_st' style='padding-right:3px;white-space:nowrap;'>";
	buffer[_i++] = data["starttime"];
	buffer[_i++] = "</td>";
	 if (data.icon) { 
	buffer[_i++] = "<td style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.icon, "width:16") ;
	buffer[_i++] = "</td>";
	 } 
	 if (data.isException) { 
	buffer[_i++] = "<td style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptExceptionIndicator") ;
	buffer[_i++] = "</td>";
	 } else if (data.isRecurring) { 
	buffer[_i++] = "<td style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptRecurIndicator") ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "<td style='width:100%'></td>";
	 if (data.otherAttendees) { 
	buffer[_i++] = "<td style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptMeetingIndicator") ;
	 if(data.isDraft) { 
	buffer[_i++] = "<div style=\"position:absolute;top:5px;\">";
	buffer[_i++] =  AjxImg.getImageHtml("Edit", "width:16") ;
	buffer[_i++] = "</div>";
	 } 
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] =  AjxTemplate.expand("#calendar_tag_icon",  data) ;
	buffer[_i++] = "</tr></table></td></tr><tr valign=top><td class=appt";
	buffer[_i++] = data["newState"];
	buffer[_i++] = "_name style='height:100%'>\n";
	buffer[_i++] = "\t\t\t\t\t";
	buffer[_i++] = data["name"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t";
	 if (data.location) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t\t";
	buffer[_i++] = data["location"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t";
	 } 
	buffer[_i++] = "</td></tr>";
	 if(!data.hideTime) {
	buffer[_i++] = "<tr><td class=appt_end_time id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_et'>";
	buffer[_i++] = data["endtime"];
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "10",
	"id": "calendar.Calendar#calendar_appt",
	"height": "7"
}, false);
AjxTemplate.register("calendar.Calendar", AjxTemplate.getTemplate("calendar.Calendar#calendar_appt"), AjxTemplate.getParams("calendar.Calendar#calendar_appt"));

AjxTemplate.register("calendar.Calendar#calendar_tag_icon", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.tagIcon) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tag' width=20px style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.tagIcon, "width:16") ;
	buffer[_i++] = "</td>";
	 } 
	 if (data.peelIcon) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_peel' width=12 valign=\"top\">";
	buffer[_i++] =  AjxImg.getImageHtml('PeelSpacer', "width:12") ;
	buffer[_i++] = "<div style='position:absolute;z-index:1;top:";
	buffer[_i++] = data["peelTop"];
	buffer[_i++] = "px;right:";
	buffer[_i++] = data["peelRight"];
	buffer[_i++] = "px;'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.peelIcon, "width:12") ;
	buffer[_i++] = "</div></td>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#calendar_tag_icon"
}, false);

AjxTemplate.register("calendar.Calendar#calendar_appt_bottom_only", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body' class='appt_body ";
	buffer[_i++] = data["bodyColor"];
	buffer[_i++] = " ";
	buffer[_i++] = data["boxBorder"];
	buffer[_i++] = "'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tableBody' style=\"width:100%;height:100%;";
	buffer[_i++] = data["bodyStyle"];
	buffer[_i++] = "\"><tr valign=top><td width='4px' style='";
	buffer[_i++] = data["showAsColor"];
	buffer[_i++] = "' ></td><td class=appt";
	buffer[_i++] = data["newState"];
	buffer[_i++] = "_name style='height:100%'>\n";
	buffer[_i++] = "\t\t\t\t\t";
	buffer[_i++] = data["name"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t";
	 if (data.location) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t\t";
	buffer[_i++] = data["location"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t";
	 } 
	buffer[_i++] = "</td></tr><tr><td colspan=2 class=appt_end_time id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_et'>";
	buffer[_i++] = data["endtime"];
	buffer[_i++] = "</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "10",
	"id": "calendar.Calendar#calendar_appt_bottom_only",
	"height": "7"
}, false);

AjxTemplate.register("calendar.Calendar#calendar_appt_30", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body' class='appt_30_body  ";
	buffer[_i++] = data["headerColor"];
	buffer[_i++] = " ";
	buffer[_i++] = data["boxBorder"];
	buffer[_i++] = "'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tableBody' width=100% style=\"width:100%;height:100%;";
	buffer[_i++] = data["headerStyle"];
	buffer[_i++] = "\">";
	 if(data.headerStyle) {
	buffer[_i++] = "<tr style=\"";
	buffer[_i++] = data["headerStyle"];
	buffer[_i++] = "\">";
	 }else { 
	buffer[_i++] = "<tr class='";
	buffer[_i++] = data["headerColor"];
	buffer[_i++] = "'>";
	 } 
	buffer[_i++] = "<td width='4px' style=\"";
	buffer[_i++] = data["showAsColor"];
	buffer[_i++] = "\" ></td><td class=appt_30";
	buffer[_i++] = data["newState"];
	buffer[_i++] = "_name style=\"white-space:nowrap;\">";
	buffer[_i++] = data["name"];
	buffer[_i++] = "</td>";
	 if (data.icon) { 
	buffer[_i++] = "<td valign=top width=16>";
	buffer[_i++] =  AjxImg.getImageHtml(data.icon, "width:16") ;
	buffer[_i++] = "</td>";
	 } 
	 if (data.tagIcon) { 
	buffer[_i++] = "<td valign=top width=16  style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.tagIcon, "width:16") ;
	buffer[_i++] = "</td>";
	 } 
	 if (data.peelIcon) { 
	buffer[_i++] = "<td width=12>";
	buffer[_i++] =  AjxImg.getImageHtml('PeelSpacer', "width:12") ;
	buffer[_i++] = "</td><div style='position:absolute;top:1;right:1;'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.peelIcon, "width:12") ;
	buffer[_i++] = "</div>";
	 } 
	buffer[_i++] = "</tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "4",
	"id": "calendar.Calendar#calendar_appt_30",
	"height": "4"
}, false);

AjxTemplate.register("calendar.Calendar#calendar_appt_allday", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body' class='appt_allday_body ";
	buffer[_i++] = data["headerColor"];
	buffer[_i++] = " ";
	buffer[_i++] = data["boxBorder"];
	buffer[_i++] = "'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tableBody' style=\"table-layout:fixed;height:100%;";
	buffer[_i++] = data["headerStyle"];
	buffer[_i++] = data["borderLeft"];
	buffer[_i++] = data["borderRight"];
	buffer[_i++] = "\">";
	 if(data.headerStyle) {
	buffer[_i++] = "<tr style=\"";
	buffer[_i++] = data["headerStyle"];
	buffer[_i++] = "\">";
	 }else { 
	buffer[_i++] = "<tr class='";
	buffer[_i++] = data["headerColor"];
	buffer[_i++] = "'>";
	 } 
	buffer[_i++] = "<td class='";
	buffer[_i++] = data["showAsClass"];
	buffer[_i++] = "' style=\"min-width:4px; ";
	buffer[_i++] = data["showAsColor"];
	buffer[_i++] = "\" ></td><td width=100% class=appt_allday";
	buffer[_i++] = data["newState"];
	buffer[_i++] = "_name><div style=\"overflow: hidden; white-space: nowrap;\">";
	buffer[_i++] = data["name"];
	buffer[_i++] = "</div></td>";
	 if (data.icon) { 
	buffer[_i++] = "<td width=16px style='padding-right:3px;'><div class='appt_icon'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.icon, "width:16") ;
	buffer[_i++] = "</div></td>";
	 } 
	buffer[_i++] =  AjxTemplate.expand("#calendar_tag_icon",  data) ;
	buffer[_i++] = "</tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "4",
	"id": "calendar.Calendar#calendar_appt_allday",
	"height": "4"
}, false);

AjxTemplate.register("calendar.Calendar#calendar_fb_appt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body' class='appt_allday_body'><div style=\"padding:3px;overflow:hidden;height:21px;\">";
	buffer[_i++] = data["name"];
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "4",
	"id": "calendar.Calendar#calendar_fb_appt",
	"height": "4"
}, false);

AjxTemplate.register("calendar.Calendar#month_appt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var continues = data.multiday && !data.last; 
	 var continued = data.multiday && !data.first; 
	 var style = continues ? "padding-right:14px;" : ""; 
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body' style='position:relative;'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tableBody' width=100% style=\"table-layout:fixed; ";
	buffer[_i++] = data["headerStyle"];
	buffer[_i++] = "\"><tr><td width='4px' style=\"";
	buffer[_i++] = data["showAsColor"];
	buffer[_i++] = "\" ></td><td width=100%><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_st_su' style='overflow:hidden;white-space:nowrap; ";
	buffer[_i++] = style;
	buffer[_i++] = "'>";
	 if (continues) { 
	buffer[_i++] = "<div class='calendar_month_day_item_continues'>&raquo;</div>";
	 } 
	 if (continued) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "                        &laquo;&nbsp;\n";
	buffer[_i++] = "                    ";
	 } else { 
	buffer[_i++] = "<span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_start_time' class='start_time'>";
	buffer[_i++] = data["duration"];
	buffer[_i++] = "</span>";
	 } 
	buffer[_i++] = "<span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subject' class='subject'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.appt.getName()) ;
	buffer[_i++] = "</span></div></td>";
	buffer[_i++] =  AjxTemplate.expand("#calendar_tag_icon",  data) ;
	buffer[_i++] = "</tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#month_appt"
}, false);

AjxTemplate.register("calendar.Calendar#TypeDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:274px' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_question'></div><p><table role=\"presentation\" align=center width=1%><tr><td width=1%><input checked value='1' type='radio' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_defaultRadio' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_instSeriesName'></td><td style='white-space:nowrap'><label id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_instanceMsg' for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_defaultRadio'> </label></td></tr><tr><td width=1%><input value='2' type='radio' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_openSeries' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_instSeriesName'></td><td style='white-space:nowrap'><label id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_seriesMsg' for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_openSeries'> </label></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#TypeDialog"
}, false);

AjxTemplate.register("calendar.Calendar#PrintDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_printDialogContainer'><table role=\"presentation\" align=center width=600><tr><td width=30% valign=top><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_calTreeContainer' style=\"margin-right:5px;\"></div></td><td width=70% valign=top><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_printErrorMsgContainer'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_printOptionsContainer'><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr><td width=25><input checked value='sel_date' type='radio' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_selDateRadio' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_selDateRange'></td><td width=80><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_selDateRadio'> ";
	buffer[_i++] =  ZmMsg.calPrintSelDate ;
	buffer[_i++] = "</label></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_selDateContainer'></td><td>&nbsp;</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_todayButtonContainer'></td></tr><tr><td width=25><input value=\"date_range\" type='radio' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dateRangeRadio' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_selDateRange'></td><td width=80><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dateRangeRadio'>";
	buffer[_i++] =  ZmMsg.calPrintDateRange ;
	buffer[_i++] = "</label></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dateRangeFromContainer'></td><td>&nbsp; ";
	buffer[_i++] =  ZmMsg.calPrintTo ;
	buffer[_i++] = " &nbsp;</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dateRangeToContainer'></td></tr></table><div class=\"horizSep\"></div><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\" width=100%><tr style='display:block;'><td align=right width=111>";
	buffer[_i++] =  ZmMsg.calPrintView ;
	buffer[_i++] = "</td><td colspan=4><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_printViewContainer'></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_hoursContainer' style='display:block;'><td align=right width=111>";
	buffer[_i++] =  ZmMsg.calPrintHours ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_fromHoursContainer'></td><td>&nbsp; ";
	buffer[_i++] =  ZmMsg.calPrintTo ;
	buffer[_i++] = " &nbsp;</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_toHoursContainer'></td><td></td></tr><tr style='display:block;'><td align=right valign=top width=111>";
	buffer[_i++] =  ZmMsg.calPrintOptions ;
	buffer[_i++] = "</td><td colspan=4><table role=\"presentation\" class=\"ZCheckboxTable\" width=100%><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_workDaysOnlyContainer'><td><input value=\"1\" type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_workDaysOnly' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_workDaysOnly'></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_workDaysOnly'>";
	buffer[_i++] =  ZmMsg.calPrintWorkDaysOnly ;
	buffer[_i++] = "</label></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneWeekPerPageContainer'><td><input value=\"1\" type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneWeekPerPage' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneWeekPerPage'></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneWeekPerPage'>";
	buffer[_i++] =  ZmMsg.calPrintOneWeekPerPage ;
	buffer[_i++] = "</label></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneDayPerPageContainer'><td><input value=\"1\" type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneDayPerPage' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneDayPerPage'></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oneDayPerPage'>";
	buffer[_i++] =  ZmMsg.calPrintOneDayPerPage ;
	buffer[_i++] = "</label></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_includeMiniCalContainer'><td><input value=\"1\" type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_includeMiniCal' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_includeMiniCal'></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_includeMiniCal'>";
	buffer[_i++] =  ZmMsg.calPrintIncludeMiniCal ;
	buffer[_i++] = "</label></td></tr></table></td></tr></table></div></td></tr></table><div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#PrintDialog"
}, false);

AjxTemplate.register("calendar.Calendar#SharedCalendarDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareCalendarView1'><table role=\"presentation\" width=300><tr><td valign=top align=right>";
	buffer[_i++] =  ZmMsg.sourceLabel ;
	buffer[_i++] = "</td><td><table role=\"presentation\" class=\"ZRadioButtonTable\" width=100%><tr><td width=\"5\"><input type=\"radio\" name=\"extCalType\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareRadioYahoo\"></td><td align=left><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareRadioYahoo\">";
	buffer[_i++] =  ZmMsg.sharedCalTitleYahoo ;
	buffer[_i++] = "</label></td></tr><tr><td width=\"5\"><input type=\"radio\" name=\"extCalType\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareRadioOther\"></td><td align=left><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareRadioOther\">";
	buffer[_i++] =  ZmMsg.sharedCalTitleOther ;
	buffer[_i++] = "</label></td></tr></table></td></tr></table></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareCalendarView2'><table role=\"presentation\" width=300><tr><td>&nbsp;</td><td><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\" width=100%><tr><td align=right width=80>";
	buffer[_i++] =  ZmMsg.sharedCalTypeLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncType\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncUserNameContainer\"><td align=right width=80>";
	buffer[_i++] =  ZmMsg.sharedCalUserNameLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncUserName\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncPasswordContainer\"><td align=right width=80>";
	buffer[_i++] =  ZmMsg.sharedCalPasswordLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncPassword\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncUrlContainer\"><td align=right width=80>";
	buffer[_i++] =  ZmMsg.sharedCalCalDAVServerLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncUrl\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncIcsUrlContainer\"><td align=right width=80>";
	buffer[_i++] =  ZmMsg.sharedCalIcsUrlLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncIcsUrl\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncMsgContainer\" style=\"display:none;\"><td colspan=2 id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_syncMsg\"></td></tr></table></td></tr></table></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareCalendarView3'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#SharedCalendarDialog"
}, false);

AjxTemplate.register("calendar.Calendar#ApptDragProxy", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='";
	buffer[_i++] = data["color"];
	buffer[_i++] = "'><table role=\"presentation\"><tr><td rowspan=2>";
	buffer[_i++] =  AjxImg.getImageHtml("Appointment") ;
	buffer[_i++] = "</td><td><b>";
	buffer[_i++] = data["shortDate"];
	buffer[_i++] = "</b> ";
	buffer[_i++] = data["dur"];
	buffer[_i++] = "</td></tr><tr><td><b>";
	buffer[_i++] = data["apptName"];
	buffer[_i++] = "</b></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#ApptDragProxy"
}, false);

AjxTemplate.register("calendar.Calendar#ListViewFolder", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td width=16 id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_image\">";
	buffer[_i++] =  AjxImg.getImageHtml(data.folder.getIconWithColor()) ;
	buffer[_i++] = "</td><td width=100% id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name\">";
	buffer[_i++] = data["folderName"];
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#ListViewFolder"
}, false);

AjxTemplate.register("calendar.Calendar#ListViewSearchBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchBarControls\"></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchBarDate\" class='calendar_date_search-dateRange'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#ListViewSearchBar"
}, false);

AjxTemplate.register("calendar.Calendar#ListViewSearchBarInput", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td class='calendar_date_search_td'><input autocomplete='off' style='height:22px;' type='text' size=14 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "DateInput' value='";
	buffer[_i++] = data["value"];
	buffer[_i++] = "'></td><td class=\"miniCalendarButton\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "MiniCal'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#ListViewSearchBarInput"
}, false);

AjxTemplate.register("calendar.Calendar#ReminderDialogRow", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "'><td style=\"max-width:350px;\" valign=top><div id='";
	buffer[_i++] = data["openLinkId"];
	buffer[_i++] = "' class='ZmApptOpenLink'></div><div id='";
	buffer[_i++] = data["reminderDescContainerId"];
	buffer[_i++] = "'>";
	 if (data.durationText != "") { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t    ";
	buffer[_i++] = data["durationText"];
	buffer[_i++] = "<br>";
	 } 
	 if (data.organizer) { 
	buffer[_i++] =  ZmMsg.organizerLabel ;
	buffer[_i++] = " ";
	buffer[_i++] = data["organizer"];
	buffer[_i++] = "<br>";
	 } 
	 if (data.calName) { 
	 if(data.type == ZmItem.APPT) { 
	buffer[_i++] =  ZmMsg.calendarLabel ;
	buffer[_i++] = " ";
	buffer[_i++] = data["calName"];
	buffer[_i++] = "<br>";
	 } else if (data.type == ZmItem.TASK) { 
	buffer[_i++] =  ZmMsg.tasks ;
	buffer[_i++] = ": ";
	buffer[_i++] = data["calName"];
	buffer[_i++] = "<br>";
	 } 
	 } 
	 if (data.accountName) { 
	buffer[_i++] =  ZmMsg.accountLabel ;
	buffer[_i++] = " ";
	buffer[_i++] = data["accountName"];
	buffer[_i++] = "<br>";
	 } 
	 if (data.location) { 
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = " ";
	buffer[_i++] = data["location"];
	buffer[_i++] = "<br>";
	 } 
	buffer[_i++] = "</div></td><td valign=top align=right><table role=\"presentation\" style=\"margin-left:15px;\"><tr id='";
	buffer[_i++] = data["actionsRowId"];
	buffer[_i++] = "'><td valign=top align=right><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td valign=top id='";
	buffer[_i++] = data["snoozeSelectInputId"];
	buffer[_i++] = "' style=\"padding-right:0;\"></td><td valign=top id='";
	buffer[_i++] = data["snoozeSelectBtnId"];
	buffer[_i++] = "' style=\"padding-left:0\" width=\"1%\"></td><td valign=top id='";
	buffer[_i++] = data["snoozeBtnId"];
	buffer[_i++] = "'></td><td valign=top id='";
	buffer[_i++] = data["dismissBtnId"];
	buffer[_i++] = "'></td></tr></table></td></tr><tr><td style='white-space:nowrap;' align='right' id='";
	buffer[_i++] = data["deltaId"];
	buffer[_i++] = "'></td></tr></table></td></tr>";
	 if (!data.noSep) { /* used only from ZmQuickReminderDialog */ 
	buffer[_i++] = "<tr name=\"rdsep\"><td colspan=3><div class=\"horizSep\"></div></td></tr>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#ReminderDialogRow"
}, false);

AjxTemplate.register("calendar.Calendar#ReminderDialogAllSection", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6' cellpadding=0 border=0 width=\"100%\"><tr><td width=100% valign=middle align=right><span id='";
	buffer[_i++] = data["snoozeAllLabelId"];
	buffer[_i++] = "'></span></td><td valign=top id='";
	buffer[_i++] = data["snoozeSelectInputId"];
	buffer[_i++] = "' style=\"padding-right:0\"></td><td valign=top id='";
	buffer[_i++] = data["snoozeSelectBtnId"];
	buffer[_i++] = "' style=\"padding-left:0\"></td><td valign=top id='";
	buffer[_i++] = data["snoozeBtnId"];
	buffer[_i++] = "' class=\"DwtDialogButtonBar\"></td><td valign=top id='";
	buffer[_i++] = data["dismissBtnId"];
	buffer[_i++] = "' class=\"DwtDialogButtonBar\"></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Calendar#ReminderDialogAllSection"
}, false);

AjxTemplate.register("calendar.Appointment#DnDProxy", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"dnd_calendar_month_day_table\"><tr></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#DnDProxy"
}, false);

