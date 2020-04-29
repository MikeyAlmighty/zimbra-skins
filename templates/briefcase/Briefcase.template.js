AjxTemplate.register("briefcase.Briefcase#file_properties", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style=\"padding:10px 0\">";
	 if (data.imgSrc) { 
	buffer[_i++] = "<center><img src=\"";
	buffer[_i++] = data["imgSrc"];
	buffer[_i++] = "\" width=\"180px\" height=\"135px\"/></center>";
	 } else if (data.icon) { 
	buffer[_i++] = "<center><div class=\"";
	buffer[_i++] = data["icon"];
	buffer[_i++] = "\"></div></center>";
	 } 
	buffer[_i++] = "</div><table role=\"presentation\" align='center' class='ZPropertySheet' cellspacing='6'>";
	
				for (var propIdx = 0; propIdx < data.fileProperties.length; propIdx++) {
					var prop = data.fileProperties[propIdx];
					if (!prop) { continue; }
			
	buffer[_i++] = "<tr valign=top><td align='right' class='ZmFilePropertiesLabel'>";
	buffer[_i++] =  prop.name ;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] =  prop.value ;
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "10",
	"id": "briefcase.Briefcase#file_properties",
	"height": "7"
}, false);
AjxTemplate.register("briefcase.Briefcase", AjxTemplate.getTemplate("briefcase.Briefcase#file_properties"), AjxTemplate.getParams("briefcase.Briefcase#file_properties"));

AjxTemplate.register("briefcase.Briefcase#Tooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=";
	buffer[_i++] =  data.width ;
	buffer[_i++] = "><tr valign='center'><td colspan=2 align='left'><div style='border-bottom:1px solid black;'><table role=\"presentation\" width=100%><tr valign='center'><td><b><div style='white-space:nowrap'>";
	buffer[_i++] =  data.title ;
	buffer[_i++] = "</div></b></td></tr></table></div></td></tr>";
	 for(var propIdx=0; propIdx< data.fileProperties.length; propIdx++){ 
	buffer[_i++] = "<tr valign='top'><td align='right' style='padding-right:5px;'><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel,
													AjxStringUtil.htmlEncode(data.fileProperties[propIdx].name)) ;
	buffer[_i++] = "</div></b></td><td align='left'><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.fileProperties[propIdx].value) ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	 if (data.tagTooltip != null && data.tagTooltip !="") { 
	buffer[_i++] = "<tr valign='center'><td colspan=2 align='left'><div style='border-bottom:1px solid black;'><table role=\"presentation\" width=100%><tr valign='center'><td><b><div style='white-space:nowrap'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(ZmMsg.tags) ;
	buffer[_i++] = "</div></b></td></tr></table></div></td></tr><tr valign='top'><td colspan='2' align='left' style='padding-right:5px;' nowrap>";
	buffer[_i++] =  data.tagTooltip ;
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#Tooltip"
}, false);

AjxTemplate.register("briefcase.Briefcase#VersionHistory", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_toolbar' tabindex='10' class=\"VersionHistoryToolbar\"></div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_list' tabindex='20'></div></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#VersionHistory"
}, false);

AjxTemplate.register("briefcase.Briefcase#CheckoutDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='500'><tr><td>";
	buffer[_i++] = ZmMsg.checkoutDownloadMsg;
	buffer[_i++] = "</td></tr><tr><td style='padding:20px 70px;'><input type='radio' name=\"checkout\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_checkout' checked/>&nbsp;<label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_checkout'> ";
	buffer[_i++] = ZmMsg.checkoutFileForChanges;
	buffer[_i++] = " </label><br/><input type='radio' name=\"checkout\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_download'/>&nbsp;<label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_download'>";
	buffer[_i++] = ZmMsg.checkoutFileDownload;
	buffer[_i++] = "</label></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#CheckoutDialog"
}, false);

AjxTemplate.register("briefcase.Briefcase#CheckinDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div>";
	buffer[_i++] = ZmMsg.checkInFileChoose;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width='400'><tr><td class=\"rowLabel\">";
	buffer[_i++] = ZmMsg.fileLabel;
	buffer[_i++] = "</td><td class=\"rowField\"><form id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_form' method='POST' action='";
	buffer[_i++] = data["uri"];
	buffer[_i++] = "' enctype='multipart/form-data'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_fileTD'><input type=\"file\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_file\" size=\"35\"/></div></form></td></tr><tr><td class=\"rowLabel\">";
	buffer[_i++] = ZmMsg.versionLabel;
	buffer[_i++] = "</td><td class=\"rowField\"><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_version'></span></td></tr><tr><td class=\"rowLabel\" valign=\"top\">";
	buffer[_i++] = ZmMsg.notesLabel;
	buffer[_i++] = "</td><td class=\"rowField\" valign=\"top\"><textarea rows=\"5\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes'></textarea></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#CheckinDialog"
}, false);

AjxTemplate.register("briefcase.Briefcase#PreviewView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_filepreview'><table role=\"presentation\" class='MsgHeaderTable' width=100% height=100%><tr style=\"height:70px;\"><td style=\"background-color:#eee;vertical-align:middle;\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_header' class=\"PreviewViewHeader\"><table role=\"presentation\" width=\"100%\" height=\"100%\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr><td width=\"60px\" valign=\"top\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_image\" class=\"ImgImageDoc_48\">&nbsp;</div></td><td width=\"100%\"><table role=\"presentation\" width=100% height=100%><tr><td width=\"100%\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name\" class=\"itemName\"></div><div class=\"itemMeta\"><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_modified\"></span>&nbsp;";
	buffer[_i++] = ZmMsg.by;
	buffer[_i++] = "&nbsp;<span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_modifier\"></span></div></td><td align=middle width=30 valign=\"top\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_lock\"></div></td><td align=left nowrap=true valign=\"top\"><div class=\"itemMeta\"><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_lockUser\" class=\"itemValue\"></span></div><div class=\"itemTime\"><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_lockTime\" class=\"itemValue\"></span></div></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes_section\"><td colspan=\"3\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_expand\" style=\"float:left;cursor:pointer;\"></div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes\" style=\"color:gray; overflow:hidden;\">&nbsp;</div></td></tr></table></td></tr></table></div></td></tr><tr><td align=\"center\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_container\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body\" style=\"width:100%;height:100%;\" class=\"PreviewViewBody\"><!-- Body Iframe --></div></td></tr></table></div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_noitem\" style=\"display:none;\"><table role=\"presentation\" width=100% height=100% style='table-layout:fixed'><tr><td align=\"center\" valign=\"middle\">";
	buffer[_i++] = ZmMsg.noPreviewFound;
	buffer[_i++] = "</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#PreviewView"
}, false);

AjxTemplate.register("briefcase.Briefcase#FolderPreview", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100% height=100% style='table-layout:fixed'><tr><td align=\"center\" valign=\"middle\">";
	buffer[_i++] = ZmMsg.folderPreviewMessage;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#FolderPreview"
}, false);

AjxTemplate.register("briefcase.Briefcase#NoPreview", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100% height=100% style='table-layout:fixed'><tr><td align=\"center\" valign=\"middle\">We cannot generate a preview of the file. Click here to download it.</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#NoPreview"
}, false);

AjxTemplate.register("briefcase.Briefcase#NameConflictDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width='300'><tr><td>";
	buffer[_i++] = ZmMsg.errorFileAlreadyExistsReplace ;
	buffer[_i++] = "</td></tr><tr><td style='padding:20px 30px; white-space:nowrap;'><input type='radio' name=\"savefile\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_version' checked/>&nbsp;<label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_version'> ";
	buffer[_i++] = ZmMsg.saveNameConflitVersion ;
	buffer[_i++] = " </label><br/><br/><input type='radio' name=\"savefile\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_rename'/>&nbsp;<label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_rename'>";
	buffer[_i++] = ZmMsg.saveNameConflictRename ;
	buffer[_i++] = " </label><input type='text' id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_newname\"/></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#NameConflictDialog"
}, false);

AjxTemplate.register("briefcase.Briefcase#VersionNotes", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width='300'><tr><td>";
	buffer[_i++] = ZmMsg.notesLabel;
	buffer[_i++] = "</td></tr><tr><td style='white-space:nowrap;'><textarea rows=\"8\" style='width:400px;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes'>&nbsp;</textarea></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#VersionNotes"
}, false);

AjxTemplate.register("briefcase.Briefcase#ZmDocsEditView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZmDocsEditViewTable\"><tbody><tr><td colspan=\"4\" class=\"ZmDocsEditViewHeaderCell\" id=\"";
	buffer[_i++] = data["headerId"];
	buffer[_i++] = "\"></td></tr><tr><td colspan=\"4\" class=\"ZmDocsEditViewMainCell\" id=\"";
	buffer[_i++] = data["mainId"];
	buffer[_i++] = "\"></td></tr><tr class=\"ZmHtmlEditorFooter\" id=\"";
	buffer[_i++] = data["footerId"];
	buffer[_i++] = "\"><td>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "<span id=\"";
	buffer[_i++] = data["locationId"];
	buffer[_i++] = "\"></span></td><td>";
	buffer[_i++] =  ZmMsg.versionLabel ;
	buffer[_i++] = "<span id=\"";
	buffer[_i++] = data["versionId"];
	buffer[_i++] = "\"></span></td><td>";
	buffer[_i++] =  ZmMsg.authorLabel ;
	buffer[_i++] = "<span id=\"";
	buffer[_i++] = data["authorId"];
	buffer[_i++] = "\"></span></td><td>";
	buffer[_i++] =  ZmMsg.modifiedOnLabel ;
	buffer[_i++] = "<span id=\"";
	buffer[_i++] = data["modifiedId"];
	buffer[_i++] = "\"></span></td></tr></tbody></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "briefcase.Briefcase#ZmDocsEditView"
}, false);

