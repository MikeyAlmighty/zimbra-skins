AjxTemplate.register("share.Dialogs#TableProperties", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZmHEDialog\"><tr><td><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.description ;
	buffer[_i++] = "</legend><table role=\"presentation\" width=\"100%\"><tr><td class=\"Label\" style=\"width:auto\">";
	buffer[_i++] =  ZmMsg.caption ;
	buffer[_i++] = "</td><td width=\"100%\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_Caption\"></td></tr><tr><td class=\"Label\" style=\"width:auto\">";
	buffer[_i++] =  ZmMsg.summary ;
	buffer[_i++] = "</td><td width=\"100%\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_Summary\"></td></tr></table></fieldset><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.layout ;
	buffer[_i++] = "</legend><table role=\"presentation\"><tr><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.tableWidth ;
	buffer[_i++] = "</td><td colspan=\"4\"><table role=\"presentation\"><tr><td style=\"padding-right:2px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_WidthAuto\" checked=\"checked\" name=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_WidthAuto\" type=\"radio\" /></td><td style=\"padding-right:2em\" colspan=\"2\"><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_WidthAuto\">";
	buffer[_i++] =  ZmMsg.auto ;
	buffer[_i++] = "</label></td></tr><tr><td style=\"padding-right:2px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_WidthAuto1\" name=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_WidthAuto\" type=\"radio\" /></td><td style=\"padding-right:3px\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_Width\"></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_WidthUnit\"></td></tr></table></td></tr></table><table role=\"presentation\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AdvancedMode1\" style=\"margin-top:4px; display:none\"><tr><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.tableAlignment ;
	buffer[_i++] = "</td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_Align\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr><td><input type=\"checkbox\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FixedLayout\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FixedLayout\">";
	buffer[_i++] =  ZmMsg.fixedCellWidth ;
	buffer[_i++] = "</label></td></tr></table></td></tr></table></fieldset><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.textStyle ;
	buffer[_i++] = "</legend><table role=\"presentation\"><tr><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.textAlign ;
	buffer[_i++] = "</td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TextAlign\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.fontColorLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ForegroundColor\"></td></tr><tr><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.verticalAlign ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TextVAlign\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.fontBackgroundLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BackgroundColor\"></td></tr></table></fieldset><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.borderStyle ;
	buffer[_i++] = "</legend><table role=\"presentation\"><tr><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.borderWidth ;
	buffer[_i++] = "</td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderWidth\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.borderColorLabel ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderColor\"></td></tr></table></td></tr><tr><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.cellPadding ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CellPadding\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.borderStyleLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderStyle\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AdvancedMode2\" style=\"display:none\"><td class=\"Label\">";
	buffer[_i++] =  ZmMsg.cellSpacing ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderSpacing\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td colspan=\"2\" style=\"padding:2px 0\"><table role=\"presentation\" align=\"center\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr><td><input type=\"checkbox\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderCollapse\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderCollapse\">";
	buffer[_i++] =  ZmMsg.collapsedBorders ;
	buffer[_i++] = "</label></td></tr></table></td></tr></table></fieldset></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#TableProperties"
}, false);
AjxTemplate.register("share.Dialogs", AjxTemplate.getTemplate("share.Dialogs#TableProperties"), AjxTemplate.getParams("share.Dialogs#TableProperties"));

AjxTemplate.register("share.Dialogs#CellProperties", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZmHEDialog\"><tr><td><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.borderStyle ;
	buffer[_i++] = "</legend><table role=\"presentation\" width=\"100%\"><tr><td style=\"width:19em\"><!-- If you're wondering why this has to be so complex, check out this bug:\n";
	buffer[_i++] = "\t\t\t\t\t\t\t\thttps://bugzilla.mozilla.org/show_bug.cgi?id=258255 --><div style=\"padding-left:1em; padding-top:1em\">";
	buffer[_i++] =  ZmMsg.clickToDrawABorder ;
	buffer[_i++] = "</div><div style=\"margin-top:10px;\"><table role=\"presentation\" align=\"center\"><tr><td>";
	buffer[_i++] =  ZmMsg.styleLabel ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] =  ZmMsg.colorLabel ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] =  ZmMsg.widthLabel ;
	buffer[_i++] = "</td></tr><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderStyle\"></td><td><!-- embedded in a table so the widget doesn't enlarge --><table role=\"presentation\"><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderColor\"></td></tr></table></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BorderWidth\"></td></tr></table></div><table role=\"presentation\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PreviewGridHolder\" style=\"width:100px; height:100px;\" align=\"center\"><tr><td><table role=\"presentation\" align=\"center\"><tr><td><table role=\"presentation\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PreviewGrid\" style=\"background-color:white; border:1px dashed #ccc;\"><tr><td style=\"border:1px dashed #ccc;\"><div style=\"width:30px; height:30px;\"></div></td><td style=\"border:1px dashed #ccc;\"><div style=\"width:30px; height:30px;\"></div></td></tr><tr><td style=\"border:1px dashed #ccc;\"><div style=\"width:30px; height:30px;\"></div></td><td style=\"border:1px dashed #ccc;\"><div style=\"width:30px; height:30px;\"></div></td></tr></table></td></tr></table></td></tr></table></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td valign=\"top\"><div style=\"padding-left:1em; padding-top:1em; padding-bottom:1em\">";
	buffer[_i++] =  ZmMsg.orPickAStyleBelow ;
	buffer[_i++] = "</div><table role=\"presentation\" align=\"center\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_QuickBorders\"><tr><td></td><td></td><td></td><td></td><td></td></tr></table></td></tr></table></fieldset><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.layout ;
	buffer[_i++] = "</legend><table role=\"presentation\"><tr><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableWidth\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableWidth\">";
	buffer[_i++] =  ZmMsg.widthLabel ;
	buffer[_i++] = "</label></td></tr></table></td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_Width\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableHorizPadding\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableHorizPadding\">";
	buffer[_i++] =  ZmMsg.paddingHorizontal ;
	buffer[_i++] = "</label></td></tr></table></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_HorizPadding\"></td></tr><tr><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableHeight\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableHeight\">";
	buffer[_i++] =  ZmMsg.heightLabel ;
	buffer[_i++] = "</label></td></tr></table></td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_Height\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableVertPadding\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableVertPadding\">";
	buffer[_i++] =  ZmMsg.paddingVertical ;
	buffer[_i++] = "</label></td></tr></table></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VertPadding\"></td></tr></table></fieldset><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.textStyle ;
	buffer[_i++] = "</legend><table role=\"presentation\"><tr><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableTextAlign\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableTextAlign\">";
	buffer[_i++] =  ZmMsg.textAlign ;
	buffer[_i++] = "</label></td></tr></table></td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TextAlign\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableForegroundColor\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableForegroundColor\">";
	buffer[_i++] =  ZmMsg.fontColorLabel ;
	buffer[_i++] = "</label></td></tr></table></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ForegroundColor\"></td></tr><tr><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableTextVAlign\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableTextVAlign\">";
	buffer[_i++] =  ZmMsg.verticalAlign ;
	buffer[_i++] = "</label></td></tr></table></td><td class=\"col2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TextVAlign\"></td><td class=\"VSep-L\">&nbsp;</td><td class=\"VSep-R\">&nbsp;</td><td class=\"Label\"><table role=\"presentation\" align=\"right\"><tr><td style=\"padding-right:3px\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableBackgroundColor\" type=\"checkbox\" /></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EnableBackgroundColor\">";
	buffer[_i++] =  ZmMsg.fontBackgroundLabel ;
	buffer[_i++] = "</label></td></tr></table></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_BackgroundColor\"></td></tr></table></fieldset></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#CellProperties"
}, false);

AjxTemplate.register("share.Dialogs#EditorInsertLink", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZmHEDialog\"><tr><td><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.linkText ;
	buffer[_i++] = "</legend>";
	buffer[_i++] =  ZmMsg.linkTextDesc ;
	buffer[_i++] = "<br /><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_linkTextCont\"></div></fieldset><fieldset class=\"ZmFieldset\"><legend class=\"ZmLegend\">";
	buffer[_i++] =  ZmMsg.linkTarget ;
	buffer[_i++] = "</legend>";
	buffer[_i++] =  ZmMsg.linkTargetDesc ;
	buffer[_i++] = "<br /><table role=\"presentation\"><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_linkTargetCont\" style=\"padding-right:5px\"></td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_testBtnCont\"></td></tr></table></fieldset></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#EditorInsertLink"
}, false);

AjxTemplate.register("share.Dialogs#NewSearch", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" ";
	buffer[_i++] =  AjxEnv.isWebKitBased ? "width='320'>" : ">" ;
	buffer[_i++] = "<tr><td class='Label' colspan=2 style='padding:0px 0px 5px 0px;'>";
	buffer[_i++] =  ZmMsg.searchName ;
	buffer[_i++] = " </td></tr><tr><td><input autocomplete=OFF type='text' class='Field' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_nameField' /></td></tr><tr><td>&nbsp;</td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_overviewDiv'><div class=\"Label\">";
	buffer[_i++] =  ZmMsg.newSearchParent ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderTreeCell'></div></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#NewSearch"
}, false);

AjxTemplate.register("share.Dialogs#ZmMountFolderDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" border=0 width=375><tr><td colspan=2>";
	buffer[_i++] =  ZmMsg.mountInstructions1 ;
	buffer[_i++] = "</td></tr><tr><td width=50 style=\"text-align:right;\">";
	buffer[_i++] =  ZmMsg.emailLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_email'></td></tr><tr><td width=50 style=\"text-align:right;\">";
	buffer[_i++] =  ZmMsg.folderLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folder'></td></tr><tr><td><br></td></tr><tr><td colspan=2>";
	buffer[_i++] =  ZmMsg.mountInstructions2 ;
	buffer[_i++] = "</td></tr><tr><td width=50 style=\"text-align:right;\">";
	buffer[_i++] =  ZmMsg.nameLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name'></td></tr><tr><td width=50 style=\"text-align:right;\">";
	buffer[_i++] =  ZmMsg.colorLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_color'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmMountFolderDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmPromptDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='Label' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_label'/></tr><tr><td><input type=";
	buffer[_i++] = data["type"];
	buffer[_i++] = " autocomplete=OFF class='Field' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' /></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmPromptDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmNewTagDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='Label'>";
	buffer[_i++] =  ZmMsg.tagName ;
	buffer[_i++] = ":</td>";
	 if (appCtxt.multiAccounts) { 
	buffer[_i++] = "<td class='Label'>";
	buffer[_i++] =  ZmMsg.colorLabel ;
	buffer[_i++] = "</td><td class='Label'>";
	buffer[_i++] =  ZmMsg.accountLabel ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "</tr><tr><td><input type=text autocomplete=OFF id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' /></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tagColor' style=\"padding-right:16px;\"></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_account'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmNewTagDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmContactGroupDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='Label'>";
	buffer[_i++] =  ZmMsg.groupNameLabel ;
	buffer[_i++] = ":</td></tr><tr><td><input type=text autocomplete=OFF id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' size='25' /></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmContactGroupDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmTimezonePicker", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td colspan='2' class='Label'>";
	buffer[_i++] =  ZmMsg.selectTimezoneInfo ;
	buffer[_i++] = "</td></tr><tr><td width=50 style=\"text-align:right;\">";
	buffer[_i++] =  ZmMsg.selectTimezoneLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzSelect'></td></tr><tr><td></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzShowAll'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmTimezonePicker"
}, false);

AjxTemplate.register("share.Dialogs#ZmAttachDialog-MyComputerTab", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='overflow:auto'><form accept-charset='utf-8' method='POST' action='";
	buffer[_i++] =  data.uri ;
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_uploadForm' enctype='multipart/form-data'><input type='hidden' name='_charset_' /><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attachmentTable' class='iframeTable'></table></form></div><div><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_attachmentButtonTable'></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmAttachDialog-MyComputerTab"
}, false);

AjxTemplate.register("share.Dialogs#ZmAttachDialog-MyComputerTab-AddAttachment", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td><div class='attachText'>";
	buffer[_i++] =  ZmMsg.attach ;
	buffer[_i++] = ":</div></td><td class='nobreak'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' type='file' multiple name='";
	buffer[_i++] =  data.uploadName ;
	buffer[_i++] = "' size=40>&nbsp;\n";
	buffer[_i++] = "\t\t\t\t<span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remove' onmouseover='this.style.cursor=\"pointer\"' onmouseout='this.style.cursor=\"default\"' class=\"ZmAttachDialog-removeLink\">";
	buffer[_i++] =  ZmMsg.remove ;
	buffer[_i++] = "</span><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_size'>&nbsp;</span></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmAttachDialog-MyComputerTab-AddAttachment"
}, false);

AjxTemplate.register("share.Dialogs#ZmNewOrgDialogRemote", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='Label'>";
	buffer[_i++] =  ZmMsg.feedLabel ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remote' style='width:initial;' /></td><td class='Label'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remote'> ";
	buffer[_i++] = data["remoteLabel"];
	buffer[_i++] = " </label></td></tr></table></td></tr><tr style='display:none;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remoteURLrow'><td class='Label' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remoteURLlbl'>";
	buffer[_i++] =  ZmMsg.urlLabel ;
	buffer[_i++] = "</td><td><input autocomplete='off' type='text' class='Field' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remoteURLfield' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remoteURLlbl' /></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmNewOrgDialogRemote"
}, false);

AjxTemplate.register("share.Dialogs#ZmNewOrgDialogName", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr valign='center'><td class='Label' id ='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_lblName'>";
	buffer[_i++] =  ZmMsg.nameLabel ;
	buffer[_i++] = "</td><td><input autocomplete='off' type='text' class='Field' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_lblName' /></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmNewOrgDialogName"
}, false);

AjxTemplate.register("share.Dialogs#ZmNewOrgDialogColor", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='Label' id ='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_lblColor'>";
	buffer[_i++] =  ZmMsg.colorLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_colorSelect'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmNewOrgDialogColor"
}, false);

AjxTemplate.register("share.Dialogs#ZmNewOrgDialogFolder", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='Label' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_parentLabel'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_parentValue'></td></tr><tr><td colspan=2 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderTree'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmNewOrgDialogFolder"
}, false);

AjxTemplate.register("share.Dialogs#ZmNewCalDialogFreeBusy", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td colspan=2><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr valign='center'><td style='width:2em;'><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_excludeFbCheckbox' /></td><td class='Label'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_excludeFbCheckbox'> ";
	buffer[_i++] =  ZmMsg.excludeFromFreeBusy ;
	buffer[_i++] = " </label></td></tr></table></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmNewCalDialogFreeBusy"
}, false);

AjxTemplate.register("share.Dialogs#ZmRenameDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='ZmFieldLabel'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_renameLabel'>";
	buffer[_i++] = data["newLabel"];
	buffer[_i++] = ":</span></td></tr><tr><td><input type='text' autocomplete='off' class='Field' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_renameLabel' /></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmRenameDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmPasswordUpdateDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td colspan=\"2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_desc\"></td></tr><tr><td class='Label' style='padding:0; text-align:right;'>";
	buffer[_i++] = data["labelAcct"];
	buffer[_i++] = ": </td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_acct\"></td></tr><tr><td class='Label' style='padding:0; text-align:right;'>";
	buffer[_i++] = data["labelPasswd"];
	buffer[_i++] = ": </td><td><input type='password' style='padding:0;' autocomplete='off' class='Field' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' /></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmPasswordUpdateDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmTimeDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_description' style='padding:3px 3px 10px;'>";
	buffer[_i++] = data["description"];
	buffer[_i++] = "</div><table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width='330'><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] = data["label"];
	buffer[_i++] = ":</td><td><table role=\"presentation\"><tr><td>";
	buffer[_i++] = AjxTemplate.expand("#DateField",{id:data.id+"_date"});
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_miniCal' class=\"miniCalendarButton\" style='padding-right:1em;'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_time'></td></tr></table></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] =  ZmMsg.selectTimezoneLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tzSelect'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmTimeDialog"
}, false);

AjxTemplate.register("share.Dialogs#DateField", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<input autocomplete='off' style='height:22px;' type='text' size=14 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' value='";
	buffer[_i++] = data["value"];
	buffer[_i++] = "'>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#DateField"
}, false);

AjxTemplate.register("share.Dialogs#UploadDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_label\" style=\"margin-bottom:0.5em;\">";
	buffer[_i++] = ZmMsg.uploadChoose;
	buffer[_i++] = "</div><div style=\"margin-bottom:0.5em;margin-left:1em;\"><form accept-charset='utf-8' method='POST' action='";
	buffer[_i++] =  data.uri ;
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_form' enctype='multipart/form-data'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_table' class='ZPropertySheet' cellspacing='6'></table></form></div><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_actionRow\"><td>";
	buffer[_i++] =  ZmMsg.uploadAction ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_conflict\"></td></tr><tr><td colspan=\"2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notesTD\"><div>";
	buffer[_i++] = ZmMsg.notesLabel;
	buffer[_i++] = "</div><textarea id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_notes\" style=\"height:80px; width:450px;\"></textarea></td></tr><tr><td colspan=\"2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_info\"></td></tr><tr><td colspan=\"2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_msg\" style=\"width:450px;\"></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#UploadDialog"
}, false);

AjxTemplate.register("share.Dialogs#ZmFolderRetentionView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" style='margin:10px;'><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_keepCheckbox\" type='checkbox'></td><td class='ZmFolderRetentionLabel' colspan=2><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_keepCheckbox\">";
	buffer[_i++] = ZmMsg.messageRetentionEnable;
	buffer[_i++] = "</label></td></tr><tr><td></td><td colspan=2 style='padding-bottom:.5em;'>";
	buffer[_i++] = ZmMsg.messageRetentionExplanation;
	buffer[_i++] = "</td></tr><tr><td></td><td class='ZmFieldLabelRight'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_retentionLabel'>";
	buffer[_i++] = ZmMsg.messageRetentionRange;
	buffer[_i++] = "</span></td><td class='ZmFolderPolicySelection'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_keep' aria-label='";
	buffer[_i++] = ZmMsg.type;
	buffer[_i++] = "' class='ZmFolderPolicySelect'/><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_keepValue' class='ZmFolderPolicyAmountInput' type='text' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_retentionLabel' /><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_keepUnit' aria-label='";
	buffer[_i++] = ZmMsg.unit;
	buffer[_i++] = "' class='ZmFolderPolicyUnitSelect' /></td></tr><tr><td colspan=3>&nbsp;</td></tr><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_purgeCheckbox\" type='checkbox'></td><td class='ZmFolderRetentionLabel' colspan=2><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_purgeCheckbox\">";
	buffer[_i++] = ZmMsg.messageDisposalEnable;
	buffer[_i++] = "</label></td></tr><tr><td></td><td colspan=2 style='padding-bottom:.5em;'>";
	buffer[_i++] = ZmMsg.messageDisposalExplanation;
	buffer[_i++] = "</td></tr><tr><td></td><td class='ZmFieldLabelRight'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_disposalLabel'>";
	buffer[_i++] = ZmMsg.messageDisposalThreshold;
	buffer[_i++] = "</span></td><td class='ZmFolderPolicySelection'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_purge' aria-label='";
	buffer[_i++] = ZmMsg.type;
	buffer[_i++] = "' class='ZmFolderPolicySelect'/><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_purgeValue' class='ZmFolderPolicyAmountInput' type='text' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_disposalLabel' /><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_purgeUnit' aria-label='";
	buffer[_i++] = ZmMsg.unit;
	buffer[_i++] = "' class='ZmFolderPolicyUnitSelect' /></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmFolderRetentionView"
}, false);

AjxTemplate.register("share.Dialogs#ZmTwoFactorSetup", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"ZmTwoFactorSetup\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_description'><p>";
	buffer[_i++] = ZmMsg.twoStepAuthDescription;
	buffer[_i++] = "</p></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_password'><h4>";
	buffer[_i++] = ZmMsg.twoStepAuthPassword;
	buffer[_i++] = "</h4><p>";
	buffer[_i++] = ZmMsg.twoStepAuthPasswordDescription;
	buffer[_i++] = " \"<span>";
	buffer[_i++] = data["username"];
	buffer[_i++] = "</span>\".</p><div class=\"ZmTwoFactorSetupContainer\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_password_error' style=\"display:none;margin-left:163px;\" class=\"ZmTwoFactorSetupError\">";
	buffer[_i++] = ZmMsg.offlinePasswordUpdateFailure;
	buffer[_i++] = "</div><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_password_input\">";
	buffer[_i++] = ZmMsg.passwordLabel;
	buffer[_i++] = "</label><input type=\"password\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_password_input\" autocomplete=\"off\"/></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_authentication'><h4>";
	buffer[_i++] = ZmMsg.twoStepAuthApp;
	buffer[_i++] = "</h4><div>";
	buffer[_i++] = ZmMsg.twoStepAuthAppDescription;
	buffer[_i++] = "</div><div style=\"margin:15px;\"><a href=\"";
	buffer[_i++] = ZmMsg.twoStepAuthAppURL;
	buffer[_i++] = "\" target=\"_blank\" title=\"";
	buffer[_i++] = ZmMsg.twoStepAuthAppURL;
	buffer[_i++] = "\">";
	buffer[_i++] = ZmMsg.twoStepAuthAppURL;
	buffer[_i++] = "</a></div><div>";
	buffer[_i++] = ZmMsg.twoStepAuthAppFooter;
	buffer[_i++] = "</div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_email'><h4>";
	buffer[_i++] = ZmMsg.twoStepAuthEmail;
	buffer[_i++] = "</h4><p>";
	buffer[_i++] = ZmMsg.twoStepAuthEmailDescription;
	buffer[_i++] = "</p><div class=\"ZmTwoFactorSetupContainer\"><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_email_key\" class=\"email-key\"></span></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_code'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_code_description'><h4>";
	buffer[_i++] = ZmMsg.twoStepAuthCode;
	buffer[_i++] = "</h4><p>";
	buffer[_i++] = ZmMsg.twoStepAuthCodeDescription;
	buffer[_i++] = "</p></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_code_error' style=\"display:none;\"><h4 class=\"ZmTwoFactorSetupError\">";
	buffer[_i++] = ZmMsg.twoStepAuthCodeError;
	buffer[_i++] = "</h4><p>";
	buffer[_i++] = ZmMsg.twoStepAuthCodeErrorDescription;
	buffer[_i++] = "</p></div><div class=\"ZmTwoFactorSetupContainer\"><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_code_input\">";
	buffer[_i++] = ZmMsg.code;
	buffer[_i++] = " : </label><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_code_input\" autocomplete=\"off\"/></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_success'><h4>";
	buffer[_i++] = ZmMsg.twoStepAuthSuccess;
	buffer[_i++] = "</h4><p>";
	buffer[_i++] = ZmMsg.twoStepAuthSuccessDescription;
	buffer[_i++] = "</p></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Dialogs#ZmTwoFactorSetup"
}, false);

