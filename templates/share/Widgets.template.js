AjxTemplate.register("share.Widgets#ZmToolBarSeparator", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["itemId"];
	buffer[_i++] = "' valign='middle'><div class='vertSep'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmToolBarSeparator"
}, false);
AjxTemplate.register("share.Widgets", AjxTemplate.getTemplate("share.Widgets#ZmToolBarSeparator"), AjxTemplate.getParams("share.Widgets#ZmToolBarSeparator"));

AjxTemplate.register("share.Widgets#ZmAppChooser", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZToolbarTable'><tr valign='middle' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_items'><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suffix' valign=bottom><div class='ZAppTabSpacer'></div></td><td width=\"100%\" valign=\"middle\" align=\"right\" style=\"padding-right: 10px;\" id=\"admin_link_container\">\n";
	buffer[_i++] = "                &nbsp;\n";
	buffer[_i++] = "            </td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmAppChooser",
	"class": "ZWidget"
}, false);

AjxTemplate.register("share.Widgets#ZmAppChooserItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] =  AjxTemplate.expand("dwt.Widgets#ZToolbarItem", data) ;

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmAppChooserItem"
}, false);

AjxTemplate.register("share.Widgets#ZmAppChooserButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "AppTab"; 
	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border'style='table-layout:auto;'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon'  \tclass='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title'\t\tclass='ZWidgetTitle'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_right_icon' \tclass='ZRightIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dropdown' \tclass='ZDropDown'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmAppChooserButton",
	"class": "ZAppTab"
}, false);

AjxTemplate.register("share.Widgets#ZmAppChooserSpacer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "AppTab"; 
	buffer[_i++] = "<div class='Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Spacer'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmAppChooserSpacer"
}, false);

AjxTemplate.register("share.Widgets#ZToast", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZToastBG'><div class='ZToastContent'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_icon' class='ZToastIcon'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_text' class='ZToastText'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZToast",
	"class": "ZToastInfo"
}, false);

AjxTemplate.register("share.Widgets#ZmSearchToolBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZToolbarTable'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchMenuButton' class='ZmSearchToolbarCell'></td><td><div class='ZmSearchToolbarDiv'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_inputField' class='ZmSearchInput'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton' class='ZmSearchButton' hint='icon'></div></div></td><!-- UNCOMMENT THIS IF YOU WANT CUSTOM SEARCH TO APPEAR AS A SEPARATE BUTTON ON SEARCH TOOLBAR\n";
	buffer[_i++] = "\t\t\t<td class='ZmSearchToolbarSeparatorCell'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_customSearchButtonSep' class='vertSep' style='display:none'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_customSearchButton' class='ZmSearchToolbarCell'></td><td class='ZmSearchToolbarSeparatorCell'><div class='vertSep'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_saveButton' hint='icon' class='ZmSearchToolbarCell'></td>\n";
	buffer[_i++] = "\t\t\t--><!-- UNCOMMENT THIS FOR THE ADVANCED BUTTONS TO APPEAR\n";
	buffer[_i++] = "\t\t\t<td class='ZmSearchToolbarSeparatorCell'><div class='vertSep'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_advancedButton' hint='text' class='ZmSearchToolbarCell'></td>\n";
	buffer[_i++] = "\t\t\t--></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmSearchToolBar"
}, false);

AjxTemplate.register("share.Widgets#ZmSearchResultsToolBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZToolbarTable'><tr><td class='ZmSearchResultText'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_icon' class='ImgWarning_12' style='display:none; margin-right:5px;'></div><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_label'></span></td><td><table role=\"presentation\"><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_items'><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_inputFieldCell' class='ZmSearchResultInputField'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton'   class='ZmSearchResultButton'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_saveButton'     class='ZmSearchResultButton'></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmSearchResultsToolBar"
}, false);

AjxTemplate.register("share.Widgets#ZmSearchResultsFilterPanel", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_basicPanel'><div class='header'>";
	buffer[_i++] =  ZmMsg.basicFilters ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_basic'></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_advancedPanel'><div class='header'>";
	buffer[_i++] =  ZmMsg.advancedFilters ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_advanced'></div></div><div><div class='header'>";
	buffer[_i++] =  ZmMsg.conditionals ;
	buffer[_i++] = "</div><div style='margin:5px;'>";
	buffer[_i++] =  ZmMsg.conditionalsDesc ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_conditionals'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmSearchResultsFilterPanel"
}, false);

AjxTemplate.register("share.Widgets#ZmPeopleAutocompleteListView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "'><td><table role=\"presentation\" style=\"{padding-top:4px; padding-bottom:4px}\"><tr>";
	 if (data.photoUrl) { 
	buffer[_i++] = "<td><img src=\"";
	buffer[_i++] = data["photoUrl"];
	buffer[_i++] = "\" width=32 height=32></img></td>";
	 } else { 
	buffer[_i++] = "<td>";
	buffer[_i++] =  AjxImg.getImageHtml("Person_32") ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "<td><div class='ZmPeopleSearch-fullname' id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "-fullName'></div>";
	 if (data.title) { 
	buffer[_i++] = "<div class='ZmPeopleSearch-title' id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "-title'>";
	buffer[_i++] = data["title"];
	buffer[_i++] = "</div>";
	 } 
	buffer[_i++] = "<? if (data.email){ ?><div id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "-email'></div><? } ?><? if (data.phone} { ?><div class='ZmPeopleSearch-phone' id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "-phone'>";
	buffer[_i++] = data["phone"];
	buffer[_i++] = "</div><? } ?></td></tr></table></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmPeopleAutocompleteListView"
}, false);

AjxTemplate.register("share.Widgets#ZmPeopleAutocompleteListView-NoResults", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["rowId"];
	buffer[_i++] = "'><td class=\"ZmPeopleSearch-noresults\">";
	buffer[_i++] =  ZmMsg.noCallResults ;
	buffer[_i++] = "</td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmPeopleAutocompleteListView-NoResults"
}, false);

AjxTemplate.register("share.Widgets#ZmPeopleAutocompleteListView-MoreResults", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td><table role=\"presentation\"><tr><td width='32'>&nbsp;</td><td>";
	buffer[_i++] =  ZmMsg.morePeopleResults ;
	buffer[_i++] = "</td></tr></table></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmPeopleAutocompleteListView-MoreResults"
}, false);

AjxTemplate.register("share.Widgets#ZmChooseFolderDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ChooserDialog'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderDescDivId' style='margin: 0; margin-bottom: 2px'></span><div>";
	buffer[_i++] =  ZmMsg.chooserDescription ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_inputDivId'></div><div class='overview' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderTreeDivId'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmChooseFolderDialog"
}, false);

AjxTemplate.register("share.Widgets#ZmChooseAccountDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ChooserDialog' style='width:300px'><table role=\"presentation\" width=100%><tr><td><center><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_chooseAccountMsg'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_accountSelectId'></div></center></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmChooseAccountDialog"
}, false);

AjxTemplate.register("share.Widgets#ZmPickTagDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ChooserDialog'><div style='width:300px'>";
	buffer[_i++] =  ZmMsg.chooserDescription ;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_inputDivId'></div><div style='background-color:white; width:100%; overflow:auto' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tagTreeDivId'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmPickTagDialog"
}, false);

AjxTemplate.register("share.Widgets#ZmDebugLogDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='DebugLogDialog-desc' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_desc'></div><div class='DebugLogDialog-log' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_log'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmDebugLogDialog"
}, false);

AjxTemplate.register("share.Widgets#ZmDumpsterDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_inputContainerId' class=\"DumpsterSearchInput\"></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButtonContainerId'></td></tr></table><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_toolbar'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_listview'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmDumpsterDialog"
}, false);

AjxTemplate.register("share.Widgets#ZmShareProxyToolTip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style=\"width:250px\"><div class=\"Img";
	buffer[_i++] = data["icon"];
	buffer[_i++] = "\" style=\"float:left;vertical-align:top\"></div><div style=\"font-weight:bold;font-size:1.1em;padding:3px;\">";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.normalizedFolderPath) ;
	buffer[_i++] = "</div><div style=\"clear:both;\"><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr valign=\"top\"><th align=\"right\">";
	buffer[_i++] =  ZmMsg.ownerLabel ;
	buffer[_i++] = "</th><td>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.normalizedOwnerName) ;
	buffer[_i++] = "</td></tr><tr valign=\"top\"><th align=\"right\">";
	buffer[_i++] =  ZmMsg.granteeLabel ;
	buffer[_i++] = "</th><td>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.normalizedGranteeName) ;
	buffer[_i++] = "</td></tr><tr valign=\"top\"><th align=\"right\">";
	buffer[_i++] =  ZmMsg.roleLabel ;
	buffer[_i++] = "</th><td>";
	buffer[_i++] = data["roleName"];
	buffer[_i++] = " (";
	buffer[_i++] = data["roleActions"];
	buffer[_i++] = ")</td></tr><tr height=\"4\"><td></td><td></td></tr><tr valign=\"top\"><th align=\"right\">";
	buffer[_i++] =  ZmMsg.noteLabel ;
	buffer[_i++] = "</th><td><div style=\"margin-top:4px;font-size:.9em;\">";
	buffer[_i++] =  AjxMessageFormat.format(
                                    ZmMsg.sharedFoldersLinkHint,
                                    [AjxStringUtil.htmlEncode(data.defaultMountpointName)]
                                )
                            ;
	buffer[_i++] = "</div></td></tr></table></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmShareProxyToolTip"
}, false);

AjxTemplate.register("share.Widgets#ZmShareSearchView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"FilterTree\" style=\"width:300px;\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FILTER\" tabindex=\"100\"></div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TREE\" tabindex=\"200\"></div></div><table role=\"presentation\" width=\"100%\" class=\"ZPropertySheet\" cellspacing=\"6\"><tr><td>";
	buffer[_i++] = ZmMsg.sharedFoldersFindLabel;
	buffer[_i++] = "</td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL\" tabindex=\"300\"></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SEARCH\" tabindex=\"400\"></div></td></tr><tr><td>";
	buffer[_i++] = ZmMsg.includeLabel;
	buffer[_i++] = ":</td><td colspan='2'><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_APP\" tabindex=\"500\"></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmShareSearchView"
}, false);

AjxTemplate.register("share.Widgets#ZmAddressInputField", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["holderId"];
	buffer[_i++] = "' class='addrBubbleHolder-empty'><span id='";
	buffer[_i++] = data["dragInsertionBarId"];
	buffer[_i++] = "' style='display:none' class='addrBubbleInsertionBar'>&nbsp;</span><";
	buffer[_i++] = data.inputTagName;
	buffer[_i++] = " autocomplete='off' aria-autocomplete='true' class='addrInputField user_font_system' id='";
	buffer[_i++] = data["inputId"];
	buffer[_i++] = "'\n";
	buffer[_i++] = "\t\t";
	 if (data.label) { 
	buffer[_i++] = " aria-label='";
	buffer[_i++] = data["label"];
	buffer[_i++] = "' ";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t /></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Widgets#ZmAddressInputField"
}, false);

