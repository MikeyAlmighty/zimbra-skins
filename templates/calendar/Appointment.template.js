AjxTemplate.register("calendar.Appointment#ComposeViewColumns", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<colgroup><col width=\"80\"><col><col width=\"90\"><col width=\"130\"><col width=\"100\"></colgroup>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ComposeViewColumns"
}, false);
AjxTemplate.register("calendar.Appointment", AjxTemplate.getTemplate("calendar.Appointment#ComposeViewColumns"), AjxTemplate.getParams("calendar.Appointment#ComposeViewColumns"));

AjxTemplate.register("calendar.Appointment#ComposeView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_main'>";
	 var labelStyle = "width:"+(AjxEnv.isIE ? 30 : 32)+"px; overflow:visible; white-space:nowrap"; 
	 var inputStyle = AjxEnv.isSafari && !AjxEnv.isSafariNightly ? "height:52px;" : "height:21px; overflow:hidden" 
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_top'><table role=\"presentation\" width='100%' class='calendar_edit_view_separator'><tr><td valign='top'><table role=\"presentation\" width=100% style='margin-top:5px;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_table' class='ZPropertySheet' cellspacing='6'>";
	buffer[_i++] =  AjxTemplate.expand("#ComposeViewColumns") ;
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_invitemsg_container' style='display:none;'><td class='ZmFieldLabelRight'>&nbsp;</td><td colspan='4'><table role=\"presentation\"><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_invitemsgicon\" >";
	buffer[_i++] =  AjxImg.getImageHtml("Information") ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_invitemsg\"><!-- Invite message --></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_forward_options' style='display:none;'><td class='ZmFieldLabelRight'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_picker'>";
	buffer[_i++] = ZmMsg.toLabel;
	buffer[_i++] = "</div></td><td colspan='4' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_to_control'></td></tr>";
	 if (data.isAppt && !appCtxt.multiAccounts) { 
	buffer[_i++] = "<tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identityContainer\"><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.fromLabel ;
	buffer[_i++] = "</td><td colspan='4' id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity\"></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.subjectLabel ;
	buffer[_i++] = "</td><td colspan='4' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subject'></td></tr>";
	 if(data.isGroupCalEnabled) { 
	buffer[_i++] = "<tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attendeesContainer\"><td class='ZmFieldLabelRight'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_req_att_picker'>";
	buffer[_i++] =  ZmMsg.attendeesLabel ;
	buffer[_i++] = "</div></td><td colspan='3' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_person'></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_show_optional' role='link' class='FakeAnchor' style='white-space:nowrap;'>";
	buffer[_i++] =  ZmMsg.showOptional ;
	buffer[_i++] = "</div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_optionalContainer'><td class='ZmFieldLabelRight'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_opt_att_picker'>";
	buffer[_i++] =  ZmMsg.optionalLabel ;
	buffer[_i++] = "</div></td><td colspan='3' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_optional'></td></tr><tr><td></td><td colspan='4'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attendee_status' class='ZmLocationStatusConflict' style=\"float:left;\" x-display='inline-block'>";
	buffer[_i++] =  AjxImg.getImageHtml("Warning_12", "display:inline-block;padding-right:4px;float:left;") + ZmMsg.attendeeConflict ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_time' role='link' class='FakeAnchor ZmSuggestLink' x-display='inline-block'>";
	buffer[_i++] =  ZmMsg.suggestATime ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZmFieldLabelRight'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_loc_picker'>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "</div></td>";
	 if (data.isGalEnabled && data.isGroupCalEnabled) { 
	buffer[_i++] = "<td colspan='3' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location'></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_show_resources' role='link' class='FakeAnchor' style='white-space:nowrap;'>";
	buffer[_i++] =  ZmMsg.showEquipment ;
	buffer[_i++] = "</div></td>";
	 }else { 
	buffer[_i++] = "<td colspan='4' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location'></td>";
	 } 
	buffer[_i++] = "</tr><tr><td></td><td colspan='4'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location_status'  class='ZmLocationStatusConflict' x-display='inline-block'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location_status_action' role='link' class='FakeAnchor ZmSuggestLink' x-display='inline-block'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_location' role='link' class='FakeAnchor ZmSuggestLink' x-display='inline-block'>";
	buffer[_i++] =  ZmMsg.suggestALocation ;
	buffer[_i++] = "</div></td></tr>";
	 if (data.isGalEnabled && data.isGroupCalEnabled) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_resourcesContainer'><td class='ZmFieldLabelRight'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_res_btn'>";
	buffer[_i++] =  ZmMsg.equipmentLabel ;
	buffer[_i++] = "</div></td><td colspan='3' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_resourcesData'></td><td>&nbsp;</td></tr>";
	 } 
	buffer[_i++] = "<tr><td style='";
	buffer[_i++] =  AjxEnv.isWebKitBased ? "padding-top:14px;" : "" ;
	buffer[_i++] = "' class='ZmFieldLabelRight'>";
	buffer[_i++] =  (data.isAppt ? ZmMsg.startLabel : (ZmMsg.startDate+":")) ;
	buffer[_i++] = "</td><td rowspan=\"2\" colspan=\"3\" align=\"right\"><table role=\"presentation\" width=\"100%\"><tr><td style='";
	buffer[_i++] =  AjxEnv.isIE ? "overflow:visible;" : "" ;
	buffer[_i++] = "'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr>";
	buffer[_i++] =  AjxTemplate.expand("#ApptTimeSection_StartDate", data) ;
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzoneSelectStart'></td><td align=\"left\" nowrap=\"true\"><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_allDayCheckbox'><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_allDayCheckbox\" style='margin-left:.25em;white-space:nowrap;'>";
	buffer[_i++] =  ZmMsg.allDay ;
	buffer[_i++] = "</label></td></tr></table></td><td colspan=\"2\" rowspan=\"2\" align=\"right\"><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatLabel' class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.repeatLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeat_options' colspan=\"2\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatSelect' class=\"ZmApptComposeField\"></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatDesc' class=\"ZmApptComposeField FakeAnchor\"></div></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminder_options' class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.reminderLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelectContainer' class='miniTimeButton ZmSelector'><table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelectInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelect'> </td></tr></table></td></tr></table></td></tr><tr><td style='";
	buffer[_i++] =  AjxEnv.isIE ? "overflow:visible;" : "" ;
	buffer[_i++] = "'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr>";
	buffer[_i++] =  AjxTemplate.expand("#ApptTimeSection_EndDate", data) ;
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzoneSelectEnd'></td></tr></table></td></tr></table></td><td></td></tr><tr><td style='";
	buffer[_i++] =  AjxEnv.isWebKitBased ? "padding-top:6px;" : "" ;
	buffer[_i++] = "' class='ZmFieldLabelRight'>";
	buffer[_i++] =  (data.isAppt ? ZmMsg.endLabel : ZmMsg.dateDueLabel ) ;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderConfigure'></div></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_meetingInPastWarning\" style=\"display:none\"><td></td><td><div class=\"ImgInformation\" style=\"float: left; margin: 0 0.5rem 0 0;\"></div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_meetingInPastWarningMessageText\" style=\"font-size: 0.95rem;\"></div></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  data.isAppt ? ZmMsg.displayLabel : ZmMsg.taskFolder ;
	buffer[_i++] = "</td><td><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_showAsSelect' align=\"right\" style='padding-left:0;'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderSelect'></td><td><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_privateCheckbox'><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_privateCheckbox\" style='margin-left:.25em;white-space:nowrap;'>";
	buffer[_i++] =  ZmMsg._private ;
	buffer[_i++] = "</label></td></tr></table></td><td></td><td colspan='2'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderEmailCheckbox'></div></td></tr>";
	 if (appCtxt.get(ZmSetting.CAL_DEVICE_EMAIL_REMINDERS_ENABLED)) { 
	buffer[_i++] = "<tr><td colspan='2'></td><td></td><td colspan='2'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderDeviceEmailCheckbox'></div></td></tr>";
	 } 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attachment_container' style=\"display:none;\"></tr><tr><td colspan='5' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_scheduler_option' style='padding:7px;'><div style=\"float:left;\" class=\"calendar_edit_field\">";
	buffer[_i++] =  ZmMsg.scheduler ;
	buffer[_i++] = "</div><div style=\"float:left; padding-left:5px;\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_scheduleButton\" class=\"FakeAnchor\">";
	buffer[_i++] = 
                        ZmMsg.show ;
	buffer[_i++] = "</div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_scheduleImage\" class=\"ImgSelectPullDownArrow\" style=\"float:left;\"></div></td></tr><tr><td colspan='5' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_scheduler'></td></tr></table></td><td width=\"8\"></td></tr></table></div><!-- appointment notes --><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes' style='padding:5px;' class='calendar_edit_notes_separator'></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggestions' class='ZmSuggestView'> </div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ComposeView"
}, false);

AjxTemplate.register("calendar.Appointment#SuggestionsView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_container' class='ZmSuggestContainer'><div class='ZmSuggestHeader'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggestion_name'\t\t\tclass='ZmSuggestLabel'>&nbsp;</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_options_image'\tclass='ZmSuggestOptionsButton'>";
	buffer[_i++] = AjxImg.getImageHtml("Options");
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_close'\t\t\tclass='ZmSuggestCloseButton'>";
	buffer[_i++] = AjxImg.getImageHtml("CloseGray");
	buffer[_i++] = "</div></div><div class='ZmSuggestBody'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_minical'\t\t\tclass='ZmSuggestMiniCal'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_view'\t\t\tclass='ZmSuggestResults'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#SuggestionsView"
}, false);

AjxTemplate.register("calendar.Appointment#EditView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var labelStyle = "width:"+(AjxEnv.isIE ? 30 : 32)+"px; overflow:visible; white-space:nowrap"; 
	 var inputStyle = AjxEnv.isSafari && !AjxEnv.isSafariNightly ? "height:52px;" : "height:21px; overflow:hidden" 
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_top'><table role=\"presentation\" width=100% style='table-layout:fixed;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_table'><colgroup><col width='";
	buffer[_i++] =  AjxEnv.is800x600orLower ? "235" : "50%" ;
	buffer[_i++] = "' /><col width='";
	buffer[_i++] =  AjxEnv.is800x600orLower ? "*" : "50%" ;
	buffer[_i++] = "' /></colgroup><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_forward_options' style='display:none;'><td colspan=2><!-- appointment forward UI --><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td align=right valign=top width='1%' style='";
	buffer[_i++] = labelStyle;
	buffer[_i++] = "'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_picker'>";
	buffer[_i++] = ZmMsg.toLabel;
	buffer[_i++] = "</div></td><td colspan=2 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_to_control'></td></tr></table></td></tr><tr><!-- appointment details section --><td valign=top><fieldset><legend>";
	buffer[_i++] =  ZmMsg.details ;
	buffer[_i++] = "</legend><div><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><colgroup><col width='1%' /><col /><col /></colgroup>";
	 if (data.isAppt && !appCtxt.multiAccounts) { 
	buffer[_i++] = "<tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identityContainer\"><td width=\"1%\" class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.fromLabel ;
	buffer[_i++] = "</td><td colspan='2' id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity\"></td></tr>";
	 } 
	buffer[_i++] = "<tr><td width=\"1%\" class='ZmFieldLabelRight'>*&nbsp;";
	buffer[_i++] =  ZmMsg.subjectLabel ;
	buffer[_i++] = "</td><td colspan=2 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subject'></td></tr><tr><td width='1%' class='ZmApptTabViewPageField' style='white-space:nowrap;'>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "</td><td colspan='2' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location'></td></tr>";
	 if (data.isAppt) { 
	buffer[_i++] = "<tr><td width=\"100%\" colspan=3><table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width='100%'><tr><td class='ZmFieldLabelRight' style='margin-right:.25em;'>";
	buffer[_i++] =  ZmMsg.showAsLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_showAsSelect'></td><td class='ZmFieldLabelRight' style='margin-right:.25em;' width='100%'>";
	buffer[_i++] =  ZmMsg.markAs ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_privacySelect'></td></tr></table></td></tr>";
	 } else { 
	buffer[_i++] = "<tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.priorityLabel ;
	buffer[_i++] = "</td><td colspan=2 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_priority'></td></tr>";
	 } 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderRow'><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  data.isAppt ? ZmMsg.calendarLabel : ZmMsg.taskFolder ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderSelect'></td></tr><tr>";
	 if(!data.isAppt){ 
	buffer[_i++] = "<td colspan=10>";
	buffer[_i++] =  data.isAppt ? "&nbsp;" : "" ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "</tr><tr><td colspan=10></td></tr></table></div></fieldset></td><!-- appointment date/time section --><td valign=top><fieldset><legend id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_timeLegend\">";
	buffer[_i++] =  (data.isAppt ? ZmMsg.time : ZmMsg.progress) ;
	buffer[_i++] = "</legend><div style='overflow:hidden; ";
	buffer[_i++] =  AjxEnv.isIE ? " width:99%" : "" ;
	buffer[_i++] = "'><table role=\"presentation\" width=100% class=\"ZPropertySheet\" cellspacing='6'><colgroup><col width='1%' /><col /><col /></colgroup>";
	buffer[_i++] =  (data.isAppt ? "" : AjxTemplate.expand("calendar.Appointment#TaskDueSection", data)) ;
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#ApptTimeSection", data) ;
	 if(!data.isAppt) { 
	buffer[_i++] = "<tr><td class='ZmFieldLabelRight' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderLabel'>";
	buffer[_i++] =  ZmMsg.reminderLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelectContainer' width=\"50px\"><table role=\"presentation\"><tr><td class='ZmFieldLabelCenter'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderCheckbox'></div></td><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_remindDateField", value: data.currDate, label: ZmMsg.reminder});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remindMiniCalBtn'> </td></tr></table></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remindTimeSelect' colspan=2></td></tr><tr><td>&nbsp;</td><td colspan=\"3\"><table role=\"presentation\"><tr><td style=\"padding:0px 0px 0px 8px;\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderConfigure'></div></td></tr></table></td></tr><tr><td></td><td colspan=\"3\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderEmailCheckbox'></div></td></td></tr>";
	 if (appCtxt.get(ZmSetting.CAL_DEVICE_EMAIL_REMINDERS_ENABLED)) { 
	buffer[_i++] = "<tr><td></td><td colspan=\"3\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderDeviceEmailCheckbox'></div></td></td></tr>";
	 } 
	 } 
	 if(data.isAppt) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeat_options'><td valign=top class='ZmFieldLabelRight' style='line-height:1.8rem' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatLabel'>";
	buffer[_i++] =  ZmMsg.repeatLabel ;
	buffer[_i++] = "</td><td valign=top colspan=10><table role=\"presentation\" width=100%><tr><td width=100 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatSelect' style='padding-right:5px;'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatDesc' style='text-decoration:underline'></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminder_options'><td valign=top class='ZmFieldLabelRight' style='line-height:22px; line-height:1.8rem' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatLabel'>";
	buffer[_i++] =  ZmMsg.reminderLabel ;
	buffer[_i++] = "</td><td valign=top colspan=9 align='left' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelectContainer' class='miniTimeButton ZmSelector'><table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelectInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelect'> </td></tr></table></td><td style=\"padding:0px 0px 0px 8px;\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderConfigure'></div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderEmailCheckbox'></div></td></tr>";
	 if (appCtxt.get(ZmSetting.CAL_DEVICE_EMAIL_REMINDERS_ENABLED)) { 
	buffer[_i++] = "<tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderDeviceEmailCheckbox'></div></td></tr>";
	 } 
	 } 
	buffer[_i++] = "</table></div></fieldset></td></tr>";
	 if(data.isAppt && data.isGroupCalEnabled) { 
	buffer[_i++] = "<tr><td colspan='2'><!-- appointment attendees / resources --><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_organizer_options'><td width='1%' align='right' valign='top' class='ZmApptTabViewPageField'><legend>";
	buffer[_i++] =  ZmMsg.organizerLabel ;
	buffer[_i++] = "</legend></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_organizer'></td></tr><tr><td rowspan='2' width='1%' align='right' valign='top' class='ZmApptTabViewPageField'><legend>";
	buffer[_i++] =  ZmMsg.attendeesLabel ;
	buffer[_i++] = "</legend></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_person'></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notification_options'><td><table role=\"presentation\"><tr><td><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_requestResponses'></td><td class='ZmFieldLabelLeft' style='padding-left:5px;'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_requestResponses'>";
	buffer[_i++] =  ZmMsg.requestResponses ;
	buffer[_i++] = "</label></td><td><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendNotificationMail'></td><td class='ZmFieldLabelLeft' style='padding-left:5px;'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendNotificationMail'>";
	buffer[_i++] =  ZmMsg.sendNotificationMail ;
	buffer[_i++] = "<label></td></tr></table></td></tr>";
	 if (data.isGalEnabled) { 
	buffer[_i++] = "<tr><td colspan='2'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_resourcesContainer' style='display:none'><table role=\"presentation\" width=100%><tr><td valign=top width=1% align=right class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.resourcesLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_resourcesData'></td></tr></table></div></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr>";
	 } 
	buffer[_i++] = "</table></div><!-- appointment notes --><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes' style='padding:5px;'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#EditView"
}, false);

AjxTemplate.register("calendar.Appointment#AttachContainer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<fieldset class='ZmFieldset'><legend class='ZmLegend'>";
	buffer[_i++] =  ZmMsg.attachments ;
	buffer[_i++] = "</legend><form style='margin:0;padding:0' method='POST' action='";
	buffer[_i++] = data["url"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["uploadFormId"];
	buffer[_i++] = "' enctype='multipart/form-data'><div id='";
	buffer[_i++] = data["attachDivId"];
	buffer[_i++] = "'></div></form></fieldset>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#AttachContainer"
}, false);

AjxTemplate.register("calendar.Appointment#AttachAdd", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<input type='file' size=40 name='";
	buffer[_i++] = data["uploadFieldName"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["attachInputId"];
	buffer[_i++] = "' multiple style='margin:0 5px;'><span style='cursor:pointer;color:blue;text-decoration:underline;' id='";
	buffer[_i++] = data["attachRemoveId"];
	buffer[_i++] = "'>";
	buffer[_i++] =  ZmMsg.remove ;
	buffer[_i++] = "</span><span id='";
	buffer[_i++] = data["sizeId"];
	buffer[_i++] = "'>&nbsp;</span>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#AttachAdd"
}, false);

AjxTemplate.register("calendar.Appointment#ZmApptQuickAddDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZPropertySheet\" cellspacing='6'><tr><td valign=top><table role=\"presentation\" style=\"margin-left:25px; width:330px;\" class=\"ZPropertySheet\" cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subject_label' class='ZmApptTabViewPageField'><sup>*</sup>";
	buffer[_i++] =  ZmMsg.subjectLabel ;
	buffer[_i++] = "</td><td colspan='2' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subject'></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location_label' class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "</td><td colspan='2' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location'></td></tr><tr><td></td><td colspan='2'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_location' style=\"height:1.4em;\" role='link' class='FakeAnchor'>";
	buffer[_i++] =  ZmMsg.suggestALocation ;
	buffer[_i++] = "</div></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_display_label' class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.displayLabel ;
	buffer[_i++] = "</td><td colspan='2'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width='100%'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_showAs' width='100%'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_privacy_label' class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.markAs ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_privacy'></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderRow'><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_calendar_label' class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.calendarLabel ;
	buffer[_i++] = "</td><td colspan='2' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_calendar'></td></tr><tr><td colspan='3'></td></tr><tr><td class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.startTimeLabel ;
	buffer[_i++] = "</td><td colspan=2><table role=\"presentation\"><tr><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_startDate", label: ZmMsg.startDate});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startMiniCal'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTimeAt'><div style='margin:0 5px;'>";
	buffer[_i++] =  ZmMsg.at ;
	buffer[_i++] = "</div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTime'></td></tr></table></td></tr><tr><td class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.endTimeLabel ;
	buffer[_i++] = "</td><td colspan='2'><table role=\"presentation\"><tr><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_endDate", label: ZmMsg.endDate});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endMiniCal'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTimeAt'><div style='margin:0 5px;'>";
	buffer[_i++] =  ZmMsg.at ;
	buffer[_i++] = "</div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTime'></td></tr></table></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_meetingInPastWarning\" style=\"display:none\"><td></td><td><div class=\"ImgInformation\" style=\"float: left; margin: 0 0.5rem 0 0;\"></div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_meetingInPastWarningMessageText\" style=\"font-size: 0.95rem;\"></div></td></tr><tr><td colspan='3'></td></tr><tr><td class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.repeatLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeat'></td><td><span class='ZmApptTabViewPageField' style='width:100%' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_repeatDesc'></span></td></tr><tr><td class='ZmApptTabViewPageField'>";
	buffer[_i++] =  ZmMsg.reminderLabel ;
	buffer[_i++] = "</td><td colspan='2'><table role=\"presentation\"><tr><td colspan='2' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderSelect'></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderEmailCheckbox'></div></td>";
	 if (appCtxt.get(ZmSetting.CAL_DEVICE_EMAIL_REMINDERS_ENABLED)) { 
	buffer[_i++] = "<td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_reminderDeviceEmailCheckbox'></div></td>";
	 } 
	buffer[_i++] = "</tr></table></td></tr></table></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggestions' class='ZmSuggestView' valign=top><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suggest_view'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ZmApptQuickAddDialog"
}, false);

AjxTemplate.register("calendar.Appointment#TaskDueSection", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='ZmFieldLabelRight' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_statusLabel'>";
	buffer[_i++] =  ZmMsg.statusLabel ;
	buffer[_i++] = "</td><td width=175 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_status'></td><td><table role=\"presentation\" class='ZmCompletionSelector ZmSelector'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pCompleteSelectInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pCompleteSelect'></td><tr></table></td></tr><tr><td></td><td colspan='3' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_due_message'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TaskDueSection"
}, false);

AjxTemplate.register("calendar.Appointment#ApptTimeSection", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.isAppt) { 
	buffer[_i++] = "<tr><td></td><td width=1%><table role=\"presentation\"><tr><td><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_allDayCheckbox'></td><td class='ZmFieldLabelLeft'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_allDayCheckbox' style='margin-left:.25em;'>";
	buffer[_i++] =  ZmMsg.allDayEvent ;
	buffer[_i++] = "</label></td></tr></table></td><td></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzoneSelect'></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  (data.isAppt ? ZmMsg.startLabel : (ZmMsg.startDate+":")) ;
	buffer[_i++] = "</td><td ";
	 if (!data.isAppt) { 
	buffer[_i++] = " colspan='3' ";
	 } 
	buffer[_i++] = " ><table role=\"presentation\"><tr><td class='quickAddDateFld'>";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_startDateField", value: data.currDate, label: ZmMsg.startDate});
	buffer[_i++] = "</td><td class='miniCalendarButton ZmSelector' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startMiniCalBtn'></td></tr></table></td>";
	 if (data.isAppt) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTimeAtLbl' class='ZmFieldLabelCenter'>";
	buffer[_i++] =  ZmMsg.at ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTimeSelect'></td>";
	 } 
	buffer[_i++] = "</tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  (data.isAppt ? ZmMsg.endLabel : ZmMsg.dateDueLabel ) ;
	buffer[_i++] = "</td><td ";
	 if (!data.isAppt) { 
	buffer[_i++] = " colspan='3' ";
	 } 
	buffer[_i++] = "><table role=\"presentation\"><tr><td class='quickAddDateFld'>";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_endDateField", value: data.currDate, label: ZmMsg.endDate});
	buffer[_i++] = "</td><td class='miniCalendarButton ZmSelector' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endMiniCalBtn'></td></tr></table></td>";
	 if (data.isAppt) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTimeAtLbl' class='ZmFieldLabelCenter'>";
	buffer[_i++] =  ZmMsg.at ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTimeSelect'></td>";
	 } 
	buffer[_i++] = "</tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ApptTimeSection"
}, false);

AjxTemplate.register("calendar.Appointment#ApptTimeSection_New", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td width=\"60\" class='ZmFieldLabelRight'>";
	buffer[_i++] =  (data.isAppt ? ZmMsg.startLabel : (ZmMsg.startDate+":")) ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_startDateField", value: data.currDate, label: ZmMsg.startDate});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startMiniCalBtn'></td></tr></table></td>";
	 if (data.isAppt) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTimeAtLbl' class='ZmFieldLabelCenter'>";
	buffer[_i++] =  ZmMsg.at ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTimeSelect'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzoneSelect'></td>";
	 } 
	buffer[_i++] = "</tr><tr><td width=\"60\" class='ZmFieldLabelRight'>";
	buffer[_i++] =  (data.isAppt ? ZmMsg.endLabel : ZmMsg.dateDueLabel ) ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_endDateField", value: data.currDate, label: ZmMsg.startDate});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endMiniCalBtn'></td></tr></table></td>";
	 if (data.isAppt) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTimeAtLbl' class='ZmFieldLabelCenter'>";
	buffer[_i++] =  ZmMsg.at ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTimeSelect'></td><td><table role=\"presentation\"><tr><td><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_allDayCheckbox'></td><td class='ZmFieldLabelLeft'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_allDayCheckbox' style='margin-left:.25em;'> ";
	buffer[_i++] =  ZmMsg.allDayEvent ;
	buffer[_i++] = "</label></td></tr></table></td>";
	 } 
	buffer[_i++] = "</tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ApptTimeSection_New"
}, false);

AjxTemplate.register("calendar.Appointment#ApptTimeSection_EndDate", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td style='padding-left:0;'><table role=\"presentation\"><tr><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_endDateField", value: data.currDate, label: ZmMsg.endDate});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endMiniCalBtn'></td></tr></table></td>";
	 if (data.isAppt) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endTimeSelect'></td>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ApptTimeSection_EndDate"
}, false);

AjxTemplate.register("calendar.Appointment#ApptTimeSection_StartDate", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td style='padding-left:0;'><table role=\"presentation\"><tr><td class=\"quickAddDateFld\">";
	buffer[_i++] = AjxTemplate.expand("#DateField", {id: data.id + "_startDateField", value: data.currDate, label: ZmMsg.startDate});
	buffer[_i++] = "</td><td class=\"miniCalendarButton ZmSelector\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startMiniCalBtn'></td></tr></table></td>";
	 if (data.isAppt) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startTimeSelect'></td>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ApptTimeSection_StartDate"
}, false);

AjxTemplate.register("calendar.Appointment#DateField", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<input autocomplete='off' class='ZmDateFieldInput' type='text' size=14 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' aria-label='";
	buffer[_i++] = data["label"];
	buffer[_i++] = "' value='";
	buffer[_i++] = data["value"];
	buffer[_i++] = "'>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#DateField"
}, false);

AjxTemplate.register("calendar.Appointment#ScheduleView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td width=100%><!-- date/time section --><table role=\"presentation\">";
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#ApptTimeSection", data) ;
	buffer[_i++] = "</table></td><td style='text-align:right'><!-- key/legend section --><table role=\"presentation\" class='ZmGraphKey'><tr><td class='ZmGraphKeyHeader'>";
	buffer[_i++] =  ZmMsg.key ;
	buffer[_i++] = "</td></tr><tr><td class='ZmGraphKeyBody'><table role=\"presentation\"><tr><td><div class='ZmGraphKeyColorBox ZmScheduler-free'></div></td><td class='ZmGraphKeyColorText'>";
	buffer[_i++] =  ZmMsg.free ;
	buffer[_i++] = "</td><td>&nbsp;</td><td><div class='ZmGraphKeyColorBox ZmScheduler-busy'></div></td><td class='ZmGraphKeyColorText'>";
	buffer[_i++] =  ZmMsg.busy ;
	buffer[_i++] = "</td><td>&nbsp;</td><td><div class='ZmGraphKeyColorBox ZmScheduler-tentative'></div></td><td class='ZmGraphKeyColorText'>";
	buffer[_i++] =  ZmMsg.tentative ;
	buffer[_i++] = "</td><td>&nbsp;</td></tr><tr><td><div class='ZmGraphKeyColorBox ZmScheduler-unknown'></div></td><td class='ZmGraphKeyColorText'>";
	buffer[_i++] =  ZmMsg.unknown ;
	buffer[_i++] = "</td><td>&nbsp;</td><td><div class='ZmGraphKeyColorBox ZmScheduler-outOfOffice'></div></td><td class='ZmGraphKeyColorText'>";
	buffer[_i++] =  ZmMsg.outOfOffice ;
	buffer[_i++] = "</td><td>&nbsp;</td></tr></table></td></tr></table></td></tr></table><div style='margin-top:10'><!-- free/busy section --><table role=\"presentation\" style='padding-left:3px;' width=100% id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attendeesTable'><colgroup><col style='width:165px' /><col style='width:626px' /></colgroup><tr><td align='center' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_navToolbar' ";
	buffer[_i++] =  AjxEnv.isIE ? " width=100%" : "" ;
	buffer[_i++] = "></td><td><table role=\"presentation\" class='ZmSchedulerGridHeaderTable'><tr>";
	
								for (var j = 0; j <= 24; j++) {
									var hour = AjxDateUtil.isLocale24Hour() ? j : ((j % 12) || 12);
							
	buffer[_i++] = "<td><div class='ZmSchedulerGridHeaderCell'>";
	buffer[_i++] =  hour ;
	buffer[_i++] = "</div></td>";
		} 
	buffer[_i++] = "</tr></table></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ScheduleView"
}, false);

AjxTemplate.register("calendar.Appointment#InlineScheduleView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZmScheduler'><!-- free/busy section --><table role=\"presentation\" width=100% id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attendeesTable'><colgroup><col style='width:250px' /><col style='width:710px' /></colgroup><tr><td align='center' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_navToolbar'>&nbsp;</td><td valign=bottom><table role=\"presentation\" width=100% class='ZmSchedulerGridHeaderTable' style='";
	buffer[_i++] =  AjxEnv.isIE ? "width:101%" : "" ;
	buffer[_i++] = "'><tr>";
	
								for (var j = 0; j <= 24; j++) {
									var hour = AjxDateUtil.isLocale24Hour() ? j : ((j % 12) || 12);
							
	buffer[_i++] = "<td width=2%><div class='ZmSchedulerGridHeaderCell'>";
	buffer[_i++] =  hour ;
	buffer[_i++] = "</div></td>";
		} 
	buffer[_i++] = "</tr></table></td></tr></table><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_graphKeySpacer'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_showMoreLink' class=\"FakeAnchor\" style='display:none;'>";
	buffer[_i++] =  ZmMsg.showMore ;
	buffer[_i++] = "</span></td><td><div class='ZmGraphKeyColorBox ZmScheduler-working'></div></td><td class='ZmGraphKeyColorText' style='padding-right:1em;'>";
	buffer[_i++] =  ZmMsg.free ;
	buffer[_i++] = "</td><td><div class='ZmGraphKeyColorBox ZmScheduler-free'></div></td><td class='ZmGraphKeyColorText' style='padding-right:1em;'>";
	buffer[_i++] =  ZmMsg.nonWorking ;
	buffer[_i++] = "</td><td><div class='ZmGraphKeyColorBox ZmScheduler-busy'></div></td><td class='ZmGraphKeyColorText' style='padding-right:1em;'>";
	buffer[_i++] =  ZmMsg.busy ;
	buffer[_i++] = "</td><td><div class='ZmGraphKeyColorBox ZmScheduler-tentative'></div></td><td class='ZmGraphKeyColorText' style='padding-right:1em;'>";
	buffer[_i++] =  ZmMsg.tentative ;
	buffer[_i++] = "</td><td><div class='ZmGraphKeyColorBox ZmScheduler-unknown'></div></td><td class='ZmGraphKeyColorText' style='padding-right:1em;'>";
	buffer[_i++] =  ZmMsg.unknown ;
	buffer[_i++] = "</td><td><div class='ZmGraphKeyColorBox ZmScheduler-outOfOffice'></div></td><td class='ZmGraphKeyColorText' style='padding-right:1em;'>";
	buffer[_i++] =  ZmMsg.outOfOffice ;
	buffer[_i++] = "</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#InlineScheduleView"
}, false);

AjxTemplate.register("calendar.Appointment#AttendeeName", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr>";
	 if (data.isAllAttendees) { 
	buffer[_i++] = "<td class='ZmSchedulerAllLabel'>";
	buffer[_i++] = ZmMsg.allAttendees;
	buffer[_i++] = "</td>";
	 } else if (data.organizer || !data.isComposeMode) { 
	buffer[_i++] = "<td width=45 align=left class='";
	buffer[_i++] =  data.isComposeMode ? "ZmSchedulerOrgIconTd" : "ZmSchedulerViewAttendeeTd" ;
	buffer[_i++] = "' style='padding-left: 7px;'>";
	buffer[_i++] = AjxImg.getImageHtml("Person");
	buffer[_i++] = "</td>";
	 } else { 
	buffer[_i++] = "<td width=50 id='";
	buffer[_i++] = data["sched"]["dwtSelectId"];
	buffer[_i++] = "'></td>";
	 } 
	 if (!data.isAllAttendees) { 
	buffer[_i++] = "<td ";
	 if (!data.organizer) { 
	buffer[_i++] = "class='ZmSchedulerNameTd'";
	 } else { 
	buffer[_i++] = " class='ZmSchedulerInputDisabledTd' ";
	 } 
	buffer[_i++] = " id='";
	buffer[_i++] = data["sched"]["dwtNameId"];
	buffer[_i++] = "'>";
	 if (data.organizer) { 
	buffer[_i++] = "<div class='ZmSchedulerInputDisabled'>";
	buffer[_i++] = data["organizer"];
	buffer[_i++] = "</div>";
	 } 
	buffer[_i++] = "</td><td width=28 id='";
	buffer[_i++] = data["sched"]["dwtNameId"];
	buffer[_i++] = "_ptst' align='center' class='ZmSchedulerPTSTTd'>&nbsp;</td>";
	 } 
	buffer[_i++] = "</tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#AttendeeName"
}, false);

AjxTemplate.register("calendar.Appointment#AttendeeFreeBusy", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" id='";
	buffer[_i++] = data["sched"]["dwtTableId"];
	buffer[_i++] = "' class='ZmSchedulerGridTable";
	buffer[_i++] =  data.isAllAttendees ? "-allAttendees" : "" ;
	buffer[_i++] = "' ";
	buffer[_i++] =  AjxEnv.isIE ? "width=99%" : "width=100%" ;
	buffer[_i++] = "><tr>";
	
				var normalClassName = "ZmSchedulerGridDiv", newClass;
				for (var k = 0; k < data.cellCount; k++) {
					newClass = normalClassName;
					if(k == data.dateBorder.start) {
						newClass = normalClassName + "-start";
					}else if(k == data.dateBorder.end) {
						newClass = normalClassName + "-end";
					}else if (k % 2 == 0) {
						newClass = normalClassName + "-halfHour";
					}
					if ((k==0) && (data.dateBorder.start == -1)) {
						newClass += " " + normalClassName + "-leftStart";
					}
				
	buffer[_i++] = "<td class='ZmScheduler-free' width=2%><div id='";
	buffer[_i++] = data["sched"]["dwtTableId"];
	buffer[_i++] = "_";
	buffer[_i++] =  k ;
	buffer[_i++] = "' class='";
	buffer[_i++] =  newClass ;
	buffer[_i++] = "'></div></td>";
	 } 
	buffer[_i++] = "</tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#AttendeeFreeBusy"
}, false);

AjxTemplate.register("calendar.Appointment#Tooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" style='width:";
	buffer[_i++] =  data.width ;
	buffer[_i++] = "px'><tr valign='center'><td colspan='2' align='left'><div style='border-bottom:1px solid black;'><table role=\"presentation\" style='width:100%;'><tr><td>";
	 if (data.cal && data.cal.link) { 
	buffer[_i++] =  AjxImg.getImageHtml("GroupSchedule") ;
	 } else { 
	buffer[_i++] =  AjxImg.getImageHtml("Appointment") ;
	 } 
	buffer[_i++] = "</td><td style='font-weight:bold;white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.appt.getName()) ;
	buffer[_i++] = "</td>";
	 if (data.appt.isException) { 
	buffer[_i++] = "<td>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptExceptionIndicator") ;
	buffer[_i++] = "</td>";
	 } else if (data.appt.isRecurring()) { 
	buffer[_i++] = "<td>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptRecurIndicator") ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "<td style='width:100%'></td>";
	 if (data.appt.otherAttendees) { 
	buffer[_i++] = "<td style='text-align:right;'>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptMeetingIndicator") ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "</tr></table></div></td></tr>";
	 if (data.cal && data.cal.getName()) { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.calendarLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.cal.getName()) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	 if (data.organizer) { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.organizerLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.organizer) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	 if (data.sentBy) { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.sentBy) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.sentBy) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	 if (!data.appt.isDraft && data.appt.otherAttendees) { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.myStatusLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.appt.getParticipantStatusStr()) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	 if (data.when && data.when != "") { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.whenLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.when) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	 if (data.location && data.location != "") { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.locationLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.location) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><div style='font-weight:bold;white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.displayLabel) ;
	buffer[_i++] = "</div></td><td align='left' nowrap><span style=\"float:left\">";
	buffer[_i++] =  AjxImg.getImageHtml("showAs" + data.appt.freeBusy) ;
	buffer[_i++] = "</span><span style=\"float:left\">&nbsp;";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmApptViewHelper.getShowAsOptionLabel(data.appt.freeBusy)) ;
	buffer[_i++] = "</span></td></tr>";
	 if (data.appt.fragment && data.appt.fragment != "") { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.notesLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.appt.fragment) ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (!data.appt.isDraft && data.appt.isOrganizer() && data.appt.otherAttendees && !data.hideAttendees) { 
	buffer[_i++] = "<tr valign='center'><td colspan='2'><div class='calendar_tooltip_attendees'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.attendees) ;
	buffer[_i++] = "</div></td></tr>";
	
				if (data.attendeesText) {
			
	buffer[_i++] = "<tr valign='top'><td colspan='2' align='left' style='padding-right:5px;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.attendeesText) ;
	buffer[_i++] = "</td></tr>";
	
				} else {
					var ptstStatus = data.ptstStatus;
					for (var i in ptstStatus) {
						if (!ptstStatus[i].attendees) { continue; }
			
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;' nowrap><b>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel, AjxStringUtil.htmlEncode(i) + "&nbsp;(&nbsp;" + ptstStatus[i].count + "&nbsp;)&nbsp;") ;
	buffer[_i++] = "</b></td><td nowrap>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ptstStatus[i].attendees) ;
	buffer[_i++] = "</td></tr>";
	
					}
				}
		}
		
	 if (appCtxt.accountList.size() > 1) { 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.accountLabel) ;
	buffer[_i++] = "</div></b></td><td align='left'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.appt.getFolder().account.getDisplayName()) ;
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#Tooltip"
}, false);

AjxTemplate.register("calendar.Appointment#ReadOnlyView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ApptHeaderDiv'>";
	 if (!data.isTask){ 
	buffer[_i++] = "<div class='InvResponseBar'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_responseActionSelectCell' width='1%'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_responseActionMsgCell'></td></tr></table></div>";
	 } 
	buffer[_i++] = "<div class='MsgHeader'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_hdrTable' class='ZPropertySheet' cellspacing='6'><tr><td class='SubjectCol' colspan='2'>";
	buffer[_i++] =  data.subject ;
	buffer[_i++] = "</td></tr>";
	 if (data.location) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.location, val:data.location}) ;
	 } 
	 if (data.equipment) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.resources, val:data.equipment}) ;
	 } 
	 if (data.dateStr) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.date, val:data.dateStr}) ;
	 } 
	 if (data.startDate) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.startDate, val:data.startDate}) ;
	 } 
	 if (data.dueDate) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.dueDate, val:data.dueDate}) ;
	 } 
	 if (data.priority) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.priority, val:data.priority}) ;
	 } 
	 if (data.status) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.status, val:data.status}) ;
	 } 
	 if (data.pComplete) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.percentComplete, val:data.pComplete}) ;
	 } 
	buffer[_i++] = "<!-- exception warning -->";
	 if (data.isException) { 
	buffer[_i++] = "<tr valign='center'><td colspan='2'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptException") ;
	buffer[_i++] = "</td><td><strong>";
	buffer[_i++] =  ZmMsg.apptExceptionNote;
	buffer[_i++] = "</strong></td></tr></table></td></tr>";
	 } 
	 if (data.isAttendees && data.org) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.organizer, val:data.org}) ;
	 } 
	 if (data.isAttendees && data.obo) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.onBehalfOf, val:data.obo}) ;
	 } 
	 if (data.reqAttendees) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.attendees, val:data.reqAttendees}) ;
	 } 
	 if (data.optAttendees) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.optionalAttendees, val:data.optAttendees}) ;
	 } 
	 if (data.recurStr) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.repeats, val:data.recurStr}) ;
	 } 
	 if (data.attachStr) { 
	buffer[_i++] =  AjxTemplate.expand("calendar.Appointment#AddEntry", {lbl:ZmMsg.attachments, val:data.attachStr}) ;
	 } 
	buffer[_i++] = "</table></div></div><div id='";
	buffer[_i++] = data["_infoBarId"];
	buffer[_i++] = "'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ReadOnlyView"
}, false);

AjxTemplate.register("calendar.Appointment#AddEntry", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='LabelColName' width='1%'>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel, AjxStringUtil.htmlEncode(data.lbl)) ;
	buffer[_i++] = " </td><td class='LabelColValue'>";
	buffer[_i++] =  data.val ;
	buffer[_i++] = "</td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#AddEntry"
}, false);

AjxTemplate.register("calendar.Appointment#ApptDetailsDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr valign='center'><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.icsLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'><a href=\"";
	buffer[_i++] =  data.icsUrl ;
	buffer[_i++] = "\" target=\"_blank\">";
	buffer[_i++] =  data.icsUrl ;
	buffer[_i++] = "</a></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ApptDetailsDialog"
}, false);

AjxTemplate.register("calendar.Appointment#ApptTimeInput", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='miniTimeButton ZmSelector'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_timeSelectInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_timeSelectBtn'> </td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ApptTimeInput"
}, false);

AjxTemplate.register("calendar.Appointment#TimeSuggestion", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' width=\"100%\" class=\"Row ZPropertySheet\" cellspacing=\"6\"><tr><td width=\"16\" >";
	buffer[_i++] =  AjxImg.getImageHtml(data.attendeeImage) ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] =  data.timeLabel ;
	buffer[_i++] = "</td>";
	 if (data.totalLocations > 0) { 
	buffer[_i++] = "<td align=\"right\" width=\"20\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_loc'><span class=\"FakeAnchor\">";
	buffer[_i++] =  data.locationCountStr
			;
	buffer[_i++] = "</span></td><td width=\"16\">";
	buffer[_i++] =  AjxImg.getImageHtml(data.locationImage) ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "</tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TimeSuggestion"
}, false);

AjxTemplate.register("calendar.Appointment#LocationSuggestion", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' class=\"ZmLocationSuggestion\">";
	buffer[_i++] =  data.locationName ;
	 if (data.locationDescription) { 
	buffer[_i++] = "<br>";
	buffer[_i++] =  data.locationDescription ;
	 } 
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#LocationSuggestion"
}, false);

AjxTemplate.register("calendar.Appointment#ResolveLocationConflictHeader", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"ZmResolveLocationConflictHeader\"><div class=\"ZmResolveLocationConflictName\">";
	buffer[_i++] =  ZmMsg.date ;
	buffer[_i++] = "</div><div class=\"ZmResolveLocationConflictAlternate\">";
	buffer[_i++] =  ZmMsg.location ;
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ResolveLocationConflictHeader"
}, false);

AjxTemplate.register("calendar.Appointment#ResolveLocationConflict", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' class=\"ZmResolveLocationConflict ";
	buffer[_i++] =  data.className ;
	buffer[_i++] = "\"><div class=\"ZmResolveLocationConflictName\">";
	buffer[_i++] =  data.date ;
	buffer[_i++] = "</div><div class=\"ZmResolveLocationConflictAlternate\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_alternatives'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ResolveLocationConflict"
}, false);

AjxTemplate.register("calendar.Appointment#TimeSuggestion-NoAttendees", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='NoResults' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "'>";
	buffer[_i++] =  ZmMsg.noAttendees ;
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TimeSuggestion-NoAttendees"
}, false);

AjxTemplate.register("calendar.Appointment#TimeSuggestion-NoSuggestions", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='NoSuggestions'><div style='margin-bottom:2em;'>";
	buffer[_i++] = data["message"];
	buffer[_i++] = "</div><span class=\"FakeAnchor\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_showall\">";
	buffer[_i++] =  ZmMsg.showTimesAnyway ;
	buffer[_i++] = "</span></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TimeSuggestion-NoSuggestions"
}, false);

AjxTemplate.register("calendar.Appointment#TimeSuggestion-ShowSuggestions", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='NoSuggestions'>\n";
	buffer[_i++] = "\t\t";
	buffer[_i++] = data["message"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TimeSuggestion-ShowSuggestions"
}, false);

AjxTemplate.register("calendar.Appointment#TimeSuggestion-Loading", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='SuggestionMessage'><div class='DwtWait32Icon'></div><div style='margin-top:1em;'>";
	buffer[_i++] =  ZmMsg.searching ;
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TimeSuggestion-Loading"
}, false);

AjxTemplate.register("calendar.Appointment#LocationSuggestion-Warning", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"ZmLocationSuggestionWarning\"><div class=\"ZmLocationSuggestionWarningImage\">";
	buffer[_i++] =  AjxImg.getImageHtml("Warning_12") ;
	buffer[_i++] = "</div><div class=\"ZmLocationSuggestionWarningText\">";
	buffer[_i++] =  ZmMsg.locationSuggestionWarning ;
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#LocationSuggestion-Warning"
}, false);

AjxTemplate.register("calendar.Appointment#AlternateLocation-Loading", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='SuggestionMessage'><div class='DwtWait32Icon'></div><div style='margin-top:1em;'>";
	buffer[_i++] =  ZmMsg.loadingAlternateLocations ;
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#AlternateLocation-Loading"
}, false);

AjxTemplate.register("calendar.Appointment#TimeLocationPreference", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_timepref\" class=\"ZPropertySheet\" cellspacing=\"6\" style='margin-bottom:1em;'><tbody><tr><td class=\"SuggestionPrefTitle\" colspan=\"3\">";
	buffer[_i++] =  ZmMsg.timePreferences ;
	buffer[_i++] = "</td></tr><tr><td class=\"ZmFieldLabelRight\">";
	buffer[_i++] =  ZmMsg.suggestionTimes ;
	buffer[_i++] = ":</td><td align=\"right\"><input type=\"checkbox\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_my_working_hrs_pref\"></td><td width=\"100%\"><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_my_working_hrs_pref\">";
	buffer[_i++] =  ZmMsg.schedulerPrefMyWorkingHours ;
	buffer[_i++] = "</label></td></tr><tr><td>&nbsp;</td><td align=\"right\"><input type=\"checkbox\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_others_working_hrs_pref\"></td><td width=\"100%\"><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_others_working_hrs_pref\">";
	buffer[_i++] =  ZmMsg.schedulerPrefOtherWorkingHours ;
	buffer[_i++] = "</label></td></tr><tr><td class=\"ZmFieldLabelRight\">";
	buffer[_i++] =  ZmMsg.recurrence ;
	buffer[_i++] = ":</td><td align=\"right\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_recurrence'></td><td width=\"100%\">";
	buffer[_i++] =  ZmMsg.calculateAvailability ;
	buffer[_i++] = "</td></tr></tbody></table>";
	 if (appCtxt.get(ZmSetting.GAL_ENABLED)) { 
	buffer[_i++] = "<table role=\"presentation\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_locationpref\" class=\"ZPropertySheet\" cellspacing=\"6\"><tbody><tr><td class=\"SuggestionPrefTitle\" colspan=\"5\">";
	buffer[_i++] =  ZmMsg.locationPreferences ;
	buffer[_i++] = "</td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg._name ;
	buffer[_i++] = ":</td><td><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name\" nowrap=\"\" size=\"30\" autocomplete=\"off\"></td><td class='ZmFieldLabelRight' style='padding-left:2em;'>";
	buffer[_i++] =  ZmMsg.site ;
	buffer[_i++] = ":</td><td><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_site\" nowrap=\"\" size=\"30\" autocomplete=\"off\"></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.minimumCapacity ;
	buffer[_i++] = ":</td><td><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_capacity\" nowrap=\"\" size=\"30\" autocomplete=\"off\"></td><td class='ZmFieldLabelRight' style='padding-left:2em;'>";
	buffer[_i++] =  ZmMsg.building ;
	buffer[_i++] = ":</td><td><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_building\" nowrap=\"\" size=\"30\" autocomplete=\"off\"></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.description ;
	buffer[_i++] = ":</td><td><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_desc\" nowrap=\"\" size=\"30\" autocomplete=\"off\"></td><td class='ZmFieldLabelRight' style='padding-left:2em;'>";
	buffer[_i++] =  ZmMsg.floor ;
	buffer[_i++] = ":</td><td><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_floor\" nowrap=\"\" size=\"30\" autocomplete=\"off\"></td></tr></tbody></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#TimeLocationPreference"
}, false);

AjxTemplate.register("calendar.Appointment#SuggestionTooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<span='font-weight:bold;'>";
	buffer[_i++] =  ZmMsg.busy ;
	buffer[_i++] = "</span>";
	
	        for (var i=0; i < data.attendees.length; i++) {
	    
	buffer[_i++] = "<br><span class=\"suggestion_tooltip_attendee\">";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.attendees[i]) ;
	buffer[_i++] = "</span>";
	
	        }
	    

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#SuggestionTooltip"
}, false);

AjxTemplate.register("calendar.Appointment#LocationSuggestionTooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZmLocationSuggestionTooltip'><div class='ZmLocationTooltipTitle'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.name) ;
	buffer[_i++] = "</div>";
	 if (data.description != "") {  
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.description) ;
	buffer[_i++] = "<br>";
	 } 
	 if (data.contactMail != "") {  
	buffer[_i++] =  ZmMsg.contact + ": " + AjxStringUtil.htmlEncode(data.contactMail) ;
	buffer[_i++] = "<br>";
	 } 
	 if (data.capacity != "") {  
	buffer[_i++] =  ZmMsg.capacity + ": " + AjxStringUtil.htmlEncode(data.capacity) ;
	buffer[_i++] = "<br>";
	 } 
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#LocationSuggestionTooltip"
}, false);

AjxTemplate.register("calendar.Appointment#ChangesDialogAttendee", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='300'><tr><td>";
	buffer[_i++] = ZmMsg.apptSignificantChangesAttendee ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "calendar.Appointment#ChangesDialogAttendee"
}, false);

