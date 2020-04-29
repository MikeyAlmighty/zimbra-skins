AjxTemplate.register("mail.Message#MessageHeader", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div><!-- empty container DIV here so Dwt.parseHtmlFragment returns the infoBar div below --><table class='MsgHeaderTable' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_headerElement' width=100%><tr><td class='MsgHeaderContactContainer'><img class='MsgHeaderContactImage' src=\"";
	buffer[_i++] = data["imageURL"];
	buffer[_i++] = "\" alt=\"";
	buffer[_i++] = data["imageAltText"];
	buffer[_i++] = "\" onerror=\"this.style.visibility='hidden'\"/></td><td><div><table role=\"presentation\" width=100%><tr id='";
	buffer[_i++] = data["hdrTableTopRowId"];
	buffer[_i++] = "'>";
	 if (data.isSyncFailureMsg) { 
	buffer[_i++] = "<td>&nbsp;</td><td id='";
	buffer[_i++] = data["reportBtnCellId"];
	buffer[_i++] = "'></td><td>&nbsp;</td>";
	 } 
	buffer[_i++] = "<td>&nbsp;</td>";
	 if (data.priorityImg) { 
	buffer[_i++] = "<td><div priority='";
	buffer[_i++] = data.priority;
	buffer[_i++] = "' id='";
	buffer[_i++] = data.priorityDivId;
	buffer[_i++] = "' style='margin-left:4px;' class='";
	buffer[_i++] = data.priorityImg;
	buffer[_i++] = "'></div></td>";
	 } 
	buffer[_i++] = "<td class='LabelColValue SubjectCol' valign=top width=100%>";
	buffer[_i++] =  data.subject ;
	buffer[_i++] = "</td><td class='LabelColValue DateCol' align=right title='";
	buffer[_i++] = data["dateTooltip"];
	buffer[_i++] = "'>";
	buffer[_i++] = data["dateString"];
	buffer[_i++] = "</td><td>&nbsp;</td></tr></table><table id='";
	buffer[_i++] = data["hdrTableId"];
	buffer[_i++] = "' class='ZPropertySheet' cellspacing='6' style='margin:0 7px;'><tr id='";
	buffer[_i++] = data["expandRowId"];
	buffer[_i++] = "'><td><table role=\"presentation\" align=right><tr><td class='LabelColName' style='padding-left:7px;'>";
	buffer[_i++] =  ZmMsg.fromLabel ;
	buffer[_i++] = "</td></tr></table></td><td valign=top colspan=10><table role=\"presentation\"><tr id=\"OBJ_PREFIX_";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] = "_from\"><td id=\"OBJ_PREFIX_";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] = "_from\" class='LabelColValue' style='white-space:nowrap'>";
	buffer[_i++] =  AjxTemplate.expand("#SentBy", data) ;
	buffer[_i++] = "</td></tr></table></td></tr>";
	 for (var i = 0; i < data.addressTypes.length; i++) { 
										var participants = data.participants[data.addressTypes[i]]; 
	buffer[_i++] = "<tr id='OBJ_PREFIX_";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] = "_";
	buffer[_i++] = participants.prefix.toLowerCase();
	buffer[_i++] = "'><td class='LabelColName'>";
	buffer[_i++] =  participants.prefix ? AjxMessageFormat.format(ZmMsg.makeLabel, participants.prefix) : "&nbsp;" ;
	buffer[_i++] = "</td><td class='LabelColValue' colspan='10'>";
	buffer[_i++] =  participants.partStr ;
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] =  AjxTemplate.expand("#AutoSend", data) ;
	buffer[_i++] =  AjxTemplate.expand("#AddedHeaders", data) ;
	buffer[_i++] = "</table>";
	 if (data.hasAttachments) { 
	buffer[_i++] = "<div class=\"MessageHeaderAttachments\" id=\"";
	buffer[_i++] = data["attachId"];
	buffer[_i++] = "_container\"><div id=\"";
	buffer[_i++] = data["attachId"];
	buffer[_i++] = "\" style='overflow:auto;'></div></div>";
	 } 
	buffer[_i++] = "</div>";
	 if (data.isOutDated) { 
	buffer[_i++] =  AjxTemplate.expand("#InviteNotCurrent", data) ;
	 } 
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_contactArea' class='ContactArea'><!-- Area reserved zimlets to add to message views. --></td></tr></table><div id='";
	buffer[_i++] = data["infoBarId"];
	buffer[_i++] = "'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#MessageHeader"
}, false);
AjxTemplate.register("mail.Message", AjxTemplate.getTemplate("mail.Message#MessageHeader"), AjxTemplate.getParams("mail.Message#MessageHeader"));

AjxTemplate.register("mail.Message#SentBy", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<span>";
	buffer[_i++] = data["sentBy"];
	buffer[_i++] = "</span>";
	
			var useObo = data.obo && (data.oboAddr != data.sentByAddr);
			var useBwo = data.bwo && (data.bwoAddr != data.sentByAddr);
			if (useObo) {
				
	buffer[_i++] = "<span style='margin:0 .5em;'>";
	buffer[_i++] =  ZmMsg.onBehalfOfMidLabel ;
	buffer[_i++] = "</span><span id=\"";
	buffer[_i++] = data["oboId"];
	buffer[_i++] = "\">";
	buffer[_i++] =  data.obo ;
	buffer[_i++] = "</span>";
	
			}
			if (useBwo) {
				
	buffer[_i++] = "<span style='margin:0 .5em;'>";
	buffer[_i++] =  ZmMsg.byWayOfMidLabel ;
	buffer[_i++] = "</span><span id=\"";
	buffer[_i++] = data["bwoId"];
	buffer[_i++] = "\">";
	buffer[_i++] =  data.bwo ;
	buffer[_i++] = "</span>";
	
			}
		

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#SentBy"
}, false);

AjxTemplate.register("mail.Message#InviteNotCurrent", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"InviteOutDated\"><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td>";
	buffer[_i++] =  AjxImg.getImageHtml("Warning") ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] =  ZmMsg.inviteNotCurrent ;
	buffer[_i++] = "</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#InviteNotCurrent"
}, false);

AjxTemplate.register("mail.Message#MailAttachmentBubble", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "\" class=\"AttachmentLoading attachmentBubble AttachmentSpan\" name=\"mailAttUploadingSpan\" style=\"max-width:235px; position:static; overflow:visible;padding:0 2px 4px\"><span class=\"AttProgressSpan1\">";
	buffer[_i++] = data["fileName"];
	buffer[_i++] = "</span><span class=\"AttProgressSpan2\">";
	buffer[_i++] = data["fileName"];
	buffer[_i++] = "</span><span onclick=\"window.appCtxt.getCurrentView()._abortUploadFile()\" class=\"ImgBubbleDelete AttachmentClose\"></span></span>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#MailAttachmentBubble"
}, false);

AjxTemplate.register("mail.Message#AutoSend", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.autoSendTime) { 
	buffer[_i++] = "<tr id='OBJ_PREFIX_";
	buffer[_i++] = Dwt.getNextId();
	buffer[_i++] = "_scheduled'><td valign='top' class='LabelColName'>";
	buffer[_i++] =  ZmMsg.messageScheduledSendLabel ;
	buffer[_i++] = "</td><td class='LabelColValue' colspan=10>";
	buffer[_i++] =  data.autoSendTime ;
	buffer[_i++] = "</td></tr>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#AutoSend"
}, false);

AjxTemplate.register("mail.Message#AddedHeaders", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 for (var i = 0; i < data.additionalHdrs.length; i++) { 
	buffer[_i++] = "<tr><td valign='top' class='LabelColName'>";
	buffer[_i++] =  data.additionalHdrs[i].hdrName ;
	buffer[_i++] = "</td><td class='LabelColValue' colspan='10'>";
	buffer[_i++] =  data.additionalHdrs[i].hdrVal ;
	buffer[_i++] = "</td></tr>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#AddedHeaders"
}, false);

AjxTemplate.register("mail.Message#InviteHeader", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div><!-- empty container DIV here so Dwt.parseHtmlFragment returns the infoBar div below --><table class='InvHeaderTable' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_headerElement'><tr>";
	 if (!data.noTopHeader) { 
	buffer[_i++] = "<td class='InvHeaderContactContainer'><img class='InvHeaderContactImage' src=\"";
	buffer[_i++] = data["imageURL"];
	buffer[_i++] = "\" onerror=\"this.style.visibility='hidden'\"/></td>";
	 } 
	buffer[_i++] = "<td><div class='InvHeaderDiv'>";
	 if (!data.noTopHeader) { 
	buffer[_i++] = "<table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr id='";
	buffer[_i++] = data["hdrTableTopRowId"];
	buffer[_i++] = "'>";
	 if (data.closeBtnCellId) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["closeBtnCellId"];
	buffer[_i++] = "'></td>";
	 } 
	buffer[_i++] = "<td class='LabelColValue SubjectCol ";
	buffer[_i++] = data["subjChangeClass"];
	buffer[_i++] = "' valign=top width=100%>";
	buffer[_i++] =  data.subject ;
	buffer[_i++] = "</td><td class='LabelColValue DateCol' align=right title='";
	buffer[_i++] = data["dateTooltip"];
	buffer[_i++] = "'>";
	buffer[_i++] = data["dateString"];
	buffer[_i++] = "</td></tr></table>";
	 } 
	buffer[_i++] = "<table role=\"presentation\" id='";
	buffer[_i++] = data["hdrTableId"];
	buffer[_i++] = "' width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (data.counterInvMsg) { 
	buffer[_i++] = "<tr><td class='LabelColValue' colspan=2><div class='InvCounter'><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr><td width=20>";
	buffer[_i++] =  AjxImg.getImageHtml("Information") ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.counterInvMsg ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["hdrTableId"];
	buffer[_i++] = "_counterToolbar' width=\"1\"></td></tr></table></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='LabelColName ";
	buffer[_i++] = data["timeChangeClass"];
	buffer[_i++] = "'>";
	buffer[_i++] =  data.counterInvMsg ? ZmMsg.proposedTimeLabel : ZmMsg.timeLabel ;
	buffer[_i++] = "</td><td class='LabelColValue ";
	buffer[_i++] = data["timeChangeClass"];
	buffer[_i++] = "'>";
	buffer[_i++] =  data.invDate ;
	buffer[_i++] = "<br>";
	buffer[_i++] =  data.timezone ;
	buffer[_i++] = "</td></tr>";
	 if (data.invite.getLocation()) { 
	buffer[_i++] = "<tr><td class='LabelColName ";
	buffer[_i++] = data["locChangeClass"];
	buffer[_i++] = "'>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "</td><td class='LabelColValue ";
	buffer[_i++] = data["locChangeClass"];
	buffer[_i++] = "'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.invite.getLocation()) ;
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.organizerLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.invOrganizer ;
	buffer[_i++] = "</td></tr>";
	 if (data.invSentBy) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.sentByLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.invSentBy ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.obo && (AjxStringUtil.stripTags(data.obo) != AjxStringUtil.stripTags(data.invSentBy))) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.onBehalfOfLabel ;
	buffer[_i++] = " </td><td class='LabelColValue'>";
	buffer[_i++] =  data.obo ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.bwo) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.byWayOfLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.bwo ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.ptstId) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.inviteesLabel ;
	buffer[_i++] = "</td><td class='LabelColValue' id='";
	buffer[_i++] = data["ptstId"];
	buffer[_i++] = "'></td></tr>";
	 } else if (data.invite.hasOtherIndividualAttendees()) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.inviteesLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.invitees ;
	buffer[_i++] = "</td></tr>";
	 if (data.optInvitees) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.optionalLabel ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.optInvitees ;
	buffer[_i++] = "</td></tr>";
	 } 
	 } 
	 if (data.recur) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.repeats ;
	buffer[_i++] = ":</td><td class='LabelColValue'>";
	buffer[_i++] =  data.recur ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.toolbarCellId) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.respondLabel ;
	buffer[_i++] = "</td><td class='LabelColValue' id='";
	buffer[_i++] = data["toolbarCellId"];
	buffer[_i++] = "'></td></tr>";
	 } 
	 if (data.calendarSelectCellId) { 
	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.calendarLabel ;
	buffer[_i++] = "</td><td class='LabelColValue' style='padding-left:2px;' id='";
	buffer[_i++] = data["calendarSelectCellId"];
	buffer[_i++] = "'></td></tr>";
	 } 
	buffer[_i++] = "</table>";
	 if (data.hasAttachments) { 
	buffer[_i++] = "<div class=\"MessageHeaderAttachments\" id=\"";
	buffer[_i++] = data["attachId"];
	buffer[_i++] = "_container\"><div id=\"";
	buffer[_i++] = data["attachId"];
	buffer[_i++] = "\" style='overflow:auto;'></div></div>";
	 } 
	buffer[_i++] = "</div>";
	 if (data.intendedForMsg) { 
	buffer[_i++] = "<div class=\"";
	buffer[_i++] = data["intendedForClassName"];
	buffer[_i++] = "\"><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td>";
	buffer[_i++] =  AjxImg.getImageHtml("Information") ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] = data["intendedForMsg"];
	buffer[_i++] = "</td></tr></table></div>";
	 } 
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_contactArea' class='ContactArea'><!-- Area reserved zimlets to add to message views. --></td></tr></table><div id='";
	buffer[_i++] = data["ptstMsgBannerId"];
	buffer[_i++] = "' class='";
	buffer[_i++] = data["ptstClassName"];
	buffer[_i++] = "' ";
	 if (!data.ptstMsg) { 
	buffer[_i++] = " style='display:none;' ";
	 } 
	buffer[_i++] = " ><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id=\"";
	buffer[_i++] = data["ptstMsgIconId"];
	buffer[_i++] = "\">";
	buffer[_i++] =  AjxImg.getImageHtml(data.ptstIcon) ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["ptstMsgId"];
	buffer[_i++] = "\">";
	buffer[_i++] = data["ptstMsg"];
	buffer[_i++] = "</td></tr></table></div><div id='";
	buffer[_i++] = data["infoBarId"];
	buffer[_i++] = "'></div></div><div class='separator'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#InviteHeader"
}, false);

AjxTemplate.register("mail.Message#InviteHeaderPtst", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td>";
	buffer[_i++] =  AjxImg.getImageHtml(data.icon) ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] = data["attendee"];
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#InviteHeaderPtst"
}, false);

AjxTemplate.register("mail.Message#AttachmentsView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' height='100%'><tr><td width='20%'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_filters'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_results'>Loading...</div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#AttachmentsView"
}, false);

AjxTemplate.register("mail.Message#MessageListHeader", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='SubjectBar' width=100%><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_closeBtnCell' width='1%' style='padding-right:10px;'></td><td width='1%'>";
	buffer[_i++] =  AjxImg.getImageHtml("ConversationView") ;
	buffer[_i++] = "</td><td><div class='Subject' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subjDiv'></div></td></tr>";
	 if (data.tagDivId) { 
	buffer[_i++] = "<tr><td colspan=4><div class='Tags' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tagDiv'></div></td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#MessageListHeader"
}, false);

AjxTemplate.register("mail.Message#InformationBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' class='DisplayImages'><table role=\"presentation\" width='100%'><tr><td width='1%' style='padding:0 1em;'>";
	buffer[_i++] =  AjxImg.getImageHtml("Warning") ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] = data["text"];
	buffer[_i++] = " <span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_link' class='FakeAnchor'>";
	buffer[_i++] = data["link"];
	buffer[_i++] = "</span></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#InformationBar"
}, false);

AjxTemplate.register("mail.Message#ExtImageInformationBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' class='DisplayImages'><table role=\"presentation\" width='100%'><tr><td width='1%' style='padding:0 1em;'>";
	buffer[_i++] =  AjxImg.getImageHtml("Warning") ;
	buffer[_i++] = "</td><td><div><span>";
	buffer[_i++] = data["text"];
	buffer[_i++] = "</span>&nbsp; \n";
	buffer[_i++] = "\t\t\t\t<a href=\"javascript:void(0);\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dispImgs'>";
	buffer[_i++] = data["link"];
	buffer[_i++] = "</a></div>";
	 if (data.domain || data.email){ 
	buffer[_i++] = "<div><span>";
	buffer[_i++] = data["alwaysText"];
	buffer[_i++] = "</span>&nbsp; \n";
	buffer[_i++] = "\t\t\t\t<a href=\"javascript:void(0);\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_domain'>";
	buffer[_i++] = data["domain"];
	buffer[_i++] = "</a> \n";
	buffer[_i++] = "\t\t\t\t";
	buffer[_i++] = data["or"];
	buffer[_i++] = " \n";
	buffer[_i++] = "\t\t\t\t<a href=\"javascript:void(0);\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_email'>";
	buffer[_i++] = data["email"];
	buffer[_i++] = "</a></div>";
	}
	buffer[_i++] = "</td><td width='1%' style='padding:0 1em;'><div class=\"ImgClose\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_close'></div></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#ExtImageInformationBar"
}, false);

AjxTemplate.register("mail.Message#AllAttachments", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" style='margin:5px 0 1px'>";
	 if (data.viewAllUrl && !appCtxt.get(ZmSetting.ATTACHMENTS_BLOCKED)) { 
	buffer[_i++] = "<tr><td width='1%' style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml("ViewAll", "position:relative;") ;
	buffer[_i++] = "</td><td style='white-space:nowrap;'><a style='text-decoration:underline' class='AttLink' href='";
	buffer[_i++] = data["viewAllUrl"];
	buffer[_i++] = "' target=\"_blank\">";
	buffer[_i++] =  ZmMsg.viewAllImages ;
	buffer[_i++] = "</a></td></tr>";
	}
	 if (!appCtxt.get(ZmSetting.ATTACHMENTS_BLOCKED) && !appCtxt.get(ZmSetting.ATTACHMENTS_VIEW_IN_HTML_ONLY)) { 
	buffer[_i++] = "<tr><td width='1%' style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml(ZmMimeTable.getInfo(ZmMimeTable.APP_ZIP).image, "position:relative;") ;
	buffer[_i++] = "</td><td style='white-space:nowrap;'><a style='text-decoration:underline' class='AttLink' id='";
	buffer[_i++] = data["downloadAllLinkId"];
	buffer[_i++] = "' href='";
	buffer[_i++] = data["url"];
	buffer[_i++] = "&disp=a&fmt=zip'>";
	buffer[_i++] =  ZmMsg.downloadAll ;
	buffer[_i++] = "</a></td></tr>";
	 } 
	 if (!appCtxt.isExternalAccount()) { 
	buffer[_i++] = "<tr><td width='1%' style='padding-right:3px;'>";
	buffer[_i++] =  AjxImg.getImageHtml("AttachmentRemove", "position:relative;") ;
	buffer[_i++] = "</td><td style='white-space:nowrap;'><a style='text-decoration:underline' class='AttLink' id='";
	buffer[_i++] = data["removeAllLinkId"];
	buffer[_i++] = "' href=\"javascript:;\">";
	buffer[_i++] =  ZmMsg.removeAllAttachments ;
	buffer[_i++] = "</a></td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#AllAttachments"
}, false);

AjxTemplate.register("mail.Message#To_Recipient", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["toRowId"];
	buffer[_i++] = "'><td width='1%' align=right valign=top style='";
	buffer[_i++] = data["labelStyle"];
	buffer[_i++] = "'><div id='";
	buffer[_i++] = data["toPickerId"];
	buffer[_i++] = "'>";
	buffer[_i++] = ZmMsg.toLabel;
	buffer[_i++] = "</div></td><td id='";
	buffer[_i++] = data["toCellId"];
	buffer[_i++] = "'></td><td width='1%'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#To_Recipient"
}, false);

AjxTemplate.register("mail.Message#CC_Recipient", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["ccRowId"];
	buffer[_i++] = "' style='display:none;'><td width='1%' align=right valign=top style='";
	buffer[_i++] = data["labelStyle"];
	buffer[_i++] = "'><div id='";
	buffer[_i++] = data["ccPickerId"];
	buffer[_i++] = "'>";
	buffer[_i++] = ZmMsg.ccLabel;
	buffer[_i++] = "</div></td><td id='";
	buffer[_i++] = data["ccCellId"];
	buffer[_i++] = "'></td><td width='1%'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#CC_Recipient"
}, false);

AjxTemplate.register("mail.Message#BCC_Recipient", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["bccRowId"];
	buffer[_i++] = "' style='display:none;'><td width='1%' align=right valign=top style='";
	buffer[_i++] = data["labelStyle"];
	buffer[_i++] = "'><div id='";
	buffer[_i++] = data["bccPickerId"];
	buffer[_i++] = "'>";
	buffer[_i++] = ZmMsg.bccLabel;
	buffer[_i++] = "</div></td><td id='";
	buffer[_i++] = data["bccCellId"];
	buffer[_i++] = "'></td><td width='1%'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#BCC_Recipient"
}, false);

AjxTemplate.register("mail.Message#Compose", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var labelStyle = data.labelStyle = "width:"+(AjxEnv.isIE ? 60 : 64)+"px; overflow:visible; white-space:nowrap"; 
	 var inputStyle = data.inputStyle = AjxEnv.isSafari && !AjxEnv.isSafariNightly ? "height:52px;" : "height:21px; overflow:hidden" 
	buffer[_i++] = "<!-- header --><table id='";
	buffer[_i++] = data["headerId"];
	buffer[_i++] = "' width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (appCtxt.multiAccounts) { 
	buffer[_i++] = "<tr><td width='1%' align=right valign=top style='";
	buffer[_i++] = labelStyle;
	buffer[_i++] = "'>";
	buffer[_i++] = ZmMsg.fromLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["fromSelectId"];
	buffer[_i++] = "'></div></td><td width='1%'></td></tr>";
	 } else {
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["identityRowId"];
	buffer[_i++] = "' style='display:none;'><td width='1%' align=right style='";
	buffer[_i++] = labelStyle;
	buffer[_i++] = "'>";
	buffer[_i++] = ZmMsg.fromLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["identitySelectId"];
	buffer[_i++] = "'></div></td><td width='1%'></td></tr>";
	 } 
	buffer[_i++] =  AjxTemplate.expand("#To_Recipient", data) ;
	buffer[_i++] =  AjxTemplate.expand("#CC_Recipient", data) ;
	buffer[_i++] =  AjxTemplate.expand("#BCC_Recipient", data) ;
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["subjectRowId"];
	buffer[_i++] = "'><td width='1%' align=right style='";
	buffer[_i++] = labelStyle;
	buffer[_i++] = "'>";
	buffer[_i++] = ZmMsg.subjectLabel;
	buffer[_i++] = "</td><td><table role=\"presentation\" width='100%'><tr><td style='padding-right:4px;'><input type='text' id='";
	buffer[_i++] = data["subjectInputId"];
	buffer[_i++] = "' class='subjectField' autocomplete=off aria-label='";
	buffer[_i++] = ZmMsg.subject;
	buffer[_i++] = "'></td></tr></table></td><td nowrap width='1%'></td></tr><tr id='";
	buffer[_i++] = data["attRowId"];
	buffer[_i++] = "'><td width='1%' style='vertical-align:top; ";
	buffer[_i++] = labelStyle;
	buffer[_i++] = "'><table role=\"presentation\" width='100%'><tr><td align=right id='";
	buffer[_i++] = data["attBtnId"];
	buffer[_i++] = "'></td></tr></table></td><td><div id='";
	buffer[_i++] = data["attDivId"];
	buffer[_i++] = "'></div></td><td width='1%'></td></tr><tr id='";
	buffer[_i++] = data["replyAttRowId"];
	buffer[_i++] = "' style='display:none;'><td></td><td colspan=\"2\"><a class='FakeAnchor' onclick=\"window.appCtxt.getCurrentView()._addReplyAttachments()\">";
	buffer[_i++] = ZmMsg.replyAttach;
	buffer[_i++] = "</a></td></tr></table><!-- compose editor is automatically appended below the header -->";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Compose"
}, false);

AjxTemplate.register("mail.Message#RedirectDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var labelStyle = data.labelStyle = "width:"+(AjxEnv.isIE ? 60 : 64)+"px; overflow:visible; white-space:nowrap;" 
	 var inputStyle = data.inputStyle = AjxEnv.isSafari && !AjxEnv.isSafariNightly ? "height:52px;" : "height:21px; overflow:hidden;" 
	buffer[_i++] = "<table role=\"presentation\" width=500 class=\"ZPropertySheet\" cellspacing=\"6\">";
	buffer[_i++] =  AjxTemplate.expand("#To_Recipient", data) ;
	buffer[_i++] = "<tr><td align=right valign=top colspan=3>";
	buffer[_i++] =  ZmMsg.redirectExplanation ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#RedirectDialog"
}, false);

AjxTemplate.register("mail.Message#UploadProgressContainer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr style=\"display:table-row;\"><td width=\"96%\" colspan=\"2\"><div class=\"attBubbleContainer\"><div class=\"attBubbleHolder\">";
	buffer[_i++] =  AjxTemplate.expand("mail.Message#MailAttachmentBubble", data) ;
	buffer[_i++] = "</div></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#UploadProgressContainer"
}, false);

AjxTemplate.register("mail.Message#NoAttachments", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td width=\"96%\" colspan=\"2\"><div class=\"attBubbleContainer\"><div class=\"attBubbleHolder attPlaceholderHint\">\n";
	buffer[_i++] = "\t\t\t\t\t\t";
	buffer[_i++] = data["hint"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t</div></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#NoAttachments"
}, false);

AjxTemplate.register("mail.Message#ForwardAttachments", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%>";
	 var id = Dwt.getNextId(data.rowId) 
	buffer[_i++] = "<tr '";
	buffer[_i++] =  id ;
	buffer[_i++] = "' style=\"display:table-row;\"><td width=\"96%\" colspan=\"2\"><div class=\"attBubbleContainer\"><div class=\"attBubbleHolder\">";
	 for (var i = 0; i < data.attachments.length; i++) { 
	 var attachment = data.attachments[i]; 
	buffer[_i++] = "<span id='";
	buffer[_i++] =  attachment.spanId ;
	buffer[_i++] = "' class=\"AttachmentLoading attachmentBubble AttachmentSpan\"><span><input type=\"hidden\" mid='";
	buffer[_i++] = attachment.mid;
	buffer[_i++] = "' value='";
	buffer[_i++] = attachment.part;
	buffer[_i++] = "' name='";
	buffer[_i++] =  data.fwdFieldName ;
	buffer[_i++] = "' ></span>";
	 if(appCtxt.get(ZmSetting.ATTACHMENTS_BLOCKED)) { 
	buffer[_i++] =  AjxStringUtil.htmlEncode(AjxStringUtil.clipFile(attachment.label,100)) ;
	 } else { 
	buffer[_i++] = "<!-- The open A element is within the attachment.link string -->";
	buffer[_i++] =  attachment.link ;
	 } 
	 if (attachment.size) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t\t\t(";
	buffer[_i++] =  attachment.size ;
	buffer[_i++] = ")\n";
	buffer[_i++] = "\t\t\t\t\t\t";
	 } 
	buffer[_i++] = "<span tabindex=0 onclick=\"";
	buffer[_i++] =  attachment.closeHandler ;
	buffer[_i++] = "\" onkeypress=\"";
	buffer[_i++] =  attachment.closeHandler ;
	buffer[_i++] = "\" class=\"ImgBubbleDelete AttachmentClose\" role=\"button\" aria-label=\"";
	buffer[_i++] =  ZmMsg.remove ;
	buffer[_i++] = "\"></span></span>";
	 } 
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#ForwardAttachments"
}, false);

AjxTemplate.register("mail.Message#ZmMailConfirmView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td valign=top id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_confirm'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_loading'>";
	buffer[_i++] =  ZmMsg.loading ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notLoading'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_summary' class=\"Summary\"></div><p><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_displayAddresses' class=\"displayAddresses\"><div>";
	buffer[_i++] =  ZmMsg.confirmDisplayAddresss ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_displayAddressBox' class=\"Box DisplayAddressBox\"></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_newAddresses' class=\"NewAddresses\"><div>";
	buffer[_i++] =  ZmMsg.confirmNewAddresses ;
	buffer[_i++] = "</div><div>";
	buffer[_i++] =  ZmMsg.confirmNewAddressesCheck ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_newAddressBox' class=\"Box NewAddressBox\"></div></div><div style=\"margin:3px\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_addButton'></div><br><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_existingContacts' class=\"ExistingContacts\"><div>";
	buffer[_i++] =  ZmMsg.confirmExistingContacts ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_existingContactBox' class=\"Box ExistingContactBox\"></div></div></p></div></td><td valign=top id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ad'>&nbsp;</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#ZmMailConfirmView"
}, false);

AjxTemplate.register("mail.Message#ZmMailConfirmViewNewAddress", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CHECKBOX\" tabindex='10'></div><table role=\"presentation\" style=\"margin-bottom:3px\"><tr><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FIRST\" tabindex='20'/></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LAST\" tabindex='30'/></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#ZmMailConfirmViewNewAddress"
}, false);

AjxTemplate.register("mail.Message#ZmMailConfirmViewExistingContact", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style=\"padding:3px\">";
	buffer[_i++] = data["text"];
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#ZmMailConfirmViewExistingContact"
}, false);

AjxTemplate.register("mail.Message#viewMessage", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr><td class='NoResults'>";
	buffer[_i++] =  (data && data.isConv) ? ZmMsg.viewConversation : ZmMsg.viewMessage ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#viewMessage"
}, false);

AjxTemplate.register("mail.Message#EmptyMessage", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr><td class='NoResults'>";
	buffer[_i++] =  ZmMsg.messageEmptyTextContent ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#EmptyMessage"
}, false);

AjxTemplate.register("mail.Message#Conv2View", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='Conv2View' id=\"";
	buffer[_i++] = data["mainDivId"];
	buffer[_i++] = "\"><div id=\"";
	buffer[_i++] = data["headerDivId"];
	buffer[_i++] = "\"></div><div role='list' id=\"";
	buffer[_i++] = data["messagesDivId"];
	buffer[_i++] = "\" class='Conv2Messages'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2View"
}, false);

AjxTemplate.register("mail.Message#Conv2Header", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<span class=\"expandIcon\" id='";
	buffer[_i++] = data["convExpandId"];
	buffer[_i++] = "'></span><span class=\"subject\" role=\"heading\" aria-level=\"1\" id='";
	buffer[_i++] = data["convSubjectId"];
	buffer[_i++] = "'></span><span class=\"info\" id='";
	buffer[_i++] = data["convInfoId"];
	buffer[_i++] = "'></span>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2Header"
}, false);

AjxTemplate.register("mail.Message#Conv2Reply", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["replyToDivId"];
	buffer[_i++] = "\"></div><div id=\"";
	buffer[_i++] = data["replyCcDivId"];
	buffer[_i++] = "\" style=\"display:none;\"></div><div><textarea id=\"";
	buffer[_i++] = data["replyInputId"];
	buffer[_i++] = "\" class=\"ReplyTextarea\"></textarea></div><div id=\"";
	buffer[_i++] = data["replyToolbarId"];
	buffer[_i++] = "\"></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2Reply"
}, false);

AjxTemplate.register("mail.Message#Conv2ReplyTable", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZPropertySheet\">";
	buffer[_i++] =  AjxTemplate.expand("#Conv2MsgAddressRow", data) ;
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2ReplyTable"
}, false);

AjxTemplate.register("mail.Message#Conv2MsgHeader-collapsed", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='image'><img src=\"";
	buffer[_i++] = data["imageURL"];
	buffer[_i++] = "\" alt=\"";
	buffer[_i++] = data["imageAltText"];
	buffer[_i++] = "\"\n";
	buffer[_i++] = "\t\t";
	 if (data.defaultImageUrl) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\tonerror=\"this.onerror=null;this.src='";
	buffer[_i++] = data["defaultImageUrl"];
	buffer[_i++] = "';\"\n";
	buffer[_i++] = "\t\t";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t/></div><div class='info'><div id='";
	buffer[_i++] = data["fromId"];
	buffer[_i++] = "' class='ZmConvListFrom'>";
	buffer[_i++] = data["from"];
	buffer[_i++] = "</div><div class='ZmConvListFragment'>";
	buffer[_i++] =  data.fragment ;
	buffer[_i++] = "</div></div><div id='";
	buffer[_i++] = data["readCellId"];
	buffer[_i++] = "' class='readUnreadDot'></div><div class='date' id='";
	buffer[_i++] = data["dateCellId"];
	buffer[_i++] = "' title='";
	buffer[_i++] = data["dateTooltip"];
	buffer[_i++] = "'>";
	buffer[_i++] = data["date"];
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2MsgHeader-collapsed"
}, false);

AjxTemplate.register("mail.Message#Conv2MsgHeader-expanded", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='image'><img src=\"";
	buffer[_i++] = data["imageURL"];
	buffer[_i++] = "\" alt=\"";
	buffer[_i++] = data["imageAltText"];
	buffer[_i++] = "\"\n";
	buffer[_i++] = "\t\t";
	 if (data.defaultImageUrl) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\tonerror=\"this.onerror=null;this.src='";
	buffer[_i++] = data["defaultImageUrl"];
	buffer[_i++] = "';\"\n";
	buffer[_i++] = "\t\t";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t/></div><div class='info'><table role=\"presentation\" id='";
	buffer[_i++] = data["hdrTableId"];
	buffer[_i++] = "' class='ZPropertySheet' cellspacing='6'><tr><td class='LabelColName'>";
	buffer[_i++] =  ZmMsg.fromLabel ;
	buffer[_i++] = "</td><td class='LabelColValue' style='white-space:nowrap'>";
	buffer[_i++] =  AjxTemplate.expand("#SentBy", data) ;
	buffer[_i++] = "</td></tr>";
	 for (var i = 0; i < data.addressTypes.length; i++) { 
	buffer[_i++] =  AjxTemplate.expand("#Conv2MsgAddressRow", data.participants[data.addressTypes[i]]); ;
	 } 
	buffer[_i++] = "</table></div><div id='";
	buffer[_i++] = data["readCellId"];
	buffer[_i++] = "' class='readUnreadDot'></div><div class='date' id='";
	buffer[_i++] = data["dateCellId"];
	buffer[_i++] = "' title='";
	buffer[_i++] = data["dateTooltip"];
	buffer[_i++] = "'>";
	buffer[_i++] = data["date"];
	buffer[_i++] = "</div>";
	 if (data.isOutDated) { 
	buffer[_i++] =  AjxTemplate.expand("#InviteNotCurrent", data) ;
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2MsgHeader-expanded"
}, false);

AjxTemplate.register("mail.Message#Conv2MsgAddressRow", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='LabelColName'>";
	buffer[_i++] =  data.prefix ? AjxMessageFormat.format(ZmMsg.makeLabel, data.prefix) : "" ;
	buffer[_i++] = "</td><td class='LabelColValue'>";
	buffer[_i++] =  data.partStr ;
	buffer[_i++] = "</td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#Conv2MsgAddressRow"
}, false);

AjxTemplate.register("mail.Message#VacationRemindDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:350px;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_question'><table role=\"presentation\" align='center' cellspacing='6' class=\"ZPropertySheet\"><tr><td>";
	buffer[_i++] =  AjxImg.getImageHtml(DwtMessageDialog.ICON[DwtMessageDialog.INFO_STYLE]) ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dontRemindMsg'>";
	buffer[_i++] = ZmMsg.outOfOfficeRemindQuestion;
	buffer[_i++] = "</td></tr></table></div><table role=\"presentation\" align='center'><tr><td><input checked value='0' type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dontRemind' name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dontRemind'></td><td style='white-space:nowrap'><label id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dontRemindMsg' for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dontRemind'>";
	buffer[_i++] = ZmMsg.dontRemind;
	buffer[_i++] = "</label></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "mail.Message#VacationRemindDialog"
}, false);

