AjxTemplate.register("tasks.Task#TaskDetailsDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr valign='center'><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.icsLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'><a href=\"";
	buffer[_i++] =  data.icsUrl ;
	buffer[_i++] = "\" target=\"_blank\">";
	buffer[_i++] =  data.icsUrl ;
	buffer[_i++] = "</a></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "tasks.Task#TaskDetailsDialog"
}, false);
AjxTemplate.register("tasks.Task", AjxTemplate.getTemplate("tasks.Task#TaskDetailsDialog"), AjxTemplate.getParams("tasks.Task#TaskDetailsDialog"));

AjxTemplate.register("tasks.Tasks#ReadOnlyView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='MsgHeaderTable'><div class='SubjectCol LabelColValue' style=\"margin-left:5px;\" id='zv__TKV__";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] = "__su'>";
	buffer[_i++] =  data.subject ;
	buffer[_i++] = "</div><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_hdrTable' class=\"ZPropertySheet\" cellspacing=\"6\" style=\"margin-left:5px;\">";
	 if (data.location) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.location, val:data.location, id:'__lo'}) ;
	 } 
	 if (data.startDate) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.startDate, val:data.startDate, id:'__sd'}) ;
	 } 
	 if (data.dueDate) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.dueDate, val:data.dueDate, id:'__ed'}) ;
	 } 
	 if (data.priority) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.priority, val:data.priority, id:'__pr'}) ;
	 } 
	 if (data.status) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.status, val:data.status, id:'__st'}) ;
	 } 
	 if (data.pComplete) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.completed, val:data.pComplete+'%', id:'__pc'}) ;
	 } 
	 if (data.alarm) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#ReminderEntry", {lbl:ZmMsg.reminder, val1:data.remindDate, val2:data.remindTime, id:'__al' }) ;
	 } 
	buffer[_i++] = "<!-- exception warning -->";
	 if (data.isException) { 
	buffer[_i++] = "<tr valign='center'><td colspan=100><table role=\"presentation\"><tr><td>";
	buffer[_i++] =  AjxImg.getImageHtml("ApptException") ;
	buffer[_i++] = "</td><td><b>";
	buffer[_i++] =  ZmMsg.apptExceptionNote;
	buffer[_i++] = "</b></td></tr></table></td></tr>";
	 } 
	 if (data.attachStr) { 
	buffer[_i++] =  AjxTemplate.expand("tasks.Tasks#AddEntry", {lbl:ZmMsg.attachments, val:data.attachStr, id:'__at'}) ;
	 } 
	buffer[_i++] = "</table><div id='";
	buffer[_i++] = data["_infoBarId"];
	buffer[_i++] = "'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "tasks.Tasks#ReadOnlyView"
}, false);

AjxTemplate.register("tasks.Tasks#AddEntry", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='zv__TKV__";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] =  data.id ;
	buffer[_i++] = "'><td class='LabelColName' style='padding-left:2px;' >";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel, AjxStringUtil.htmlEncode(data.lbl)) ;
	buffer[_i++] = " </td><td class='LabelColValue'>";
	buffer[_i++] =  data.val ;
	buffer[_i++] = "</td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "tasks.Tasks#AddEntry"
}, false);

AjxTemplate.register("tasks.Tasks#ReminderEntry", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='zv__TKV__";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] =  data.id ;
	buffer[_i++] = "'><td class='LabelColName' style='padding-left:2px;'>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel, AjxStringUtil.htmlEncode(data.lbl)) ;
	buffer[_i++] = " </td><td class='LabelColValue'>";
	buffer[_i++] =  data.val1 ;
	buffer[_i++] = " @ ";
	buffer[_i++] =  data.val2 ;
	buffer[_i++] = "</td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "tasks.Tasks#ReminderEntry"
}, false);

