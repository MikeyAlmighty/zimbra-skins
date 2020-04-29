AjxTemplate.register("dwt.Widgets#DwtAlert", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td width=1%><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_icon' style='margin-right:5px;'></div></td><td width=99%><table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='DwtAlertTitle'></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_content' class='DwtAlertContent'></td></tr></table></td><td width=1%><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dismiss' style='margin-left:5px;'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtAlert"
}, false);
AjxTemplate.register("dwt.Widgets", AjxTemplate.getTemplate("dwt.Widgets#DwtAlert"), AjxTemplate.getParams("dwt.Widgets#DwtAlert"));

AjxTemplate.register("dwt.Widgets#DwtCheckbox", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZCheckboxTable'><tr><td><label id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_text_left' for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' class='Text' style='text-align:right'></label></td><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' name='";
	buffer[_i++] = data["name"];
	buffer[_i++] = "' value='";
	buffer[_i++] = data["value"];
	buffer[_i++] = "' type='";
	buffer[_i++] = data["type"];
	buffer[_i++] = "' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_text_left ";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_text_right'></td><td><label id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_text_right' for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' class='Text' style='text-align:left'></label></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtCheckbox"
}, false);

AjxTemplate.register("dwt.Widgets#DwtBaseDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='DwtDialog WindowOuterContainer'><table role=\"presentation\"><tr id='";
	buffer[_i++] = data["dragId"];
	buffer[_i++] = "'><td class='minWidth'>";
	buffer[_i++] = data["icon"];
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='DwtDialogTitle'>";
	buffer[_i++] = data["title"];
	buffer[_i++] = "</td><td class='minWidth'><div class='";
	buffer[_i++] = data["closeIcon2"];
	buffer[_i++] = "'></div></td><td class='minWidth'><div class='";
	buffer[_i++] = data["closeIcon1"];
	buffer[_i++] = "'></div></td></tr><tr><td class='WindowInnerContainer' colspan='4'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_content' class='DwtDialogBody'></div>";
	 if (data.controlsTemplateId) { 
	buffer[_i++] =  AjxTemplate.expand(data.controlsTemplateId, data) ;
	 } 
	buffer[_i++] = "</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "20",
	"id": "dwt.Widgets#DwtBaseDialog",
	"height": "32"
}, false);

AjxTemplate.register("dwt.Widgets#DwtDialogControls", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='horizSep' id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_buttonsSep\"></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_buttons' class='DwtDialogButtonBar'>";
	 if (AjxEnv.isNav) { 
	buffer[_i++] = "<input type='button' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_focus' style='height:0px;width:0px;display:none;'>";
	 } 
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtDialogControls"
}, false);

AjxTemplate.register("dwt.Widgets#DwtSemiModalDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='DwtDialog LightWindowOuterContainer'><table role=\"presentation\" style='cursor:move;'><tr id='";
	buffer[_i++] = data["dragId"];
	buffer[_i++] = "'><td class='minWidth'>";
	buffer[_i++] = data["icon"];
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='DwtDialogTitle'>";
	buffer[_i++] = data["title"];
	buffer[_i++] = "</td><td class='minWidth'><div class='";
	buffer[_i++] = data["closeIcon2"];
	buffer[_i++] = "'></div></td><td class='minWidth'><div class='";
	buffer[_i++] = data["closeIcon1"];
	buffer[_i++] = "'></div></td></tr><tr><td class='LightWindowInnerContainer full_size' colspan='4'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_content' class='DwtDialogBody'></div><div class='horizSep'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_buttons' class='DwtDialogButtonBar'>";
	 if (AjxEnv.isNav) { 
	buffer[_i++] = "<input type='button' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_focus' style='height:0px;width:0px;display:none;'>";
	 } 
	buffer[_i++] = "</div></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "20",
	"id": "dwt.Widgets#DwtSemiModalDialog",
	"height": "32"
}, false);

AjxTemplate.register("dwt.Widgets#DwtToolTip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='tooltipContents' class='DwtToolTipBody'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "5",
	"id": "dwt.Widgets#DwtToolTip",
	"height": "5"
}, false);

AjxTemplate.register("dwt.Widgets#DwtVerticalSash", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='DwtVerticalSash'><div class='VSashContainer'><div class='VSashThumb ImgVSash_thumb'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "0",
	"id": "dwt.Widgets#DwtVerticalSash",
	"height": "0"
}, false);

AjxTemplate.register("dwt.Widgets#DwtHorizontalSash", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='DwtHorizontalSash'><div class='HSashContainer'><div class='HSashThumb ImgHSash_thumb'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"width": "0",
	"id": "dwt.Widgets#DwtHorizontalSash",
	"height": "0"
}, false);

AjxTemplate.register("dwt.Widgets#DwtMissingSoundPlayer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='DwtMissingSoundPlayer'><tr><td nowrap class='ImgCritical'>&nbsp;</td><td nowrap>";
	buffer[_i++] =  ZmMsg.missingPlugin ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtMissingSoundPlayer"
}, false);

AjxTemplate.register("dwt.Widgets#DwtVerticalSlider", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button' class='DwtThumb DwtSliderThumb'><div class='DwtSliderThumbBorder'><div class='ImgVerticalSliderThumb'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtVerticalSlider",
	"class": "DwtSlider DwtVerticalSlider"
}, false);

AjxTemplate.register("dwt.Widgets#DwtHorizontalSlider", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button' class='DwtThumb DwtSliderThumb'><div class='DwtSliderThumbBorder'><div class='ImgHorizontalSliderThumb'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtHorizontalSlider",
	"class": "DwtSlider DwtHorizontalSlider"
}, false);

AjxTemplate.register("dwt.Widgets#ZLabel", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable ZLabelBorder'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon'  \tclass='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title'\t\tclass='ZWidgetTitle'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_right_icon' \tclass='ZRightIcon ZWidgetIcon'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZLabel",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "Button"; 
	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border' style='table-layout:auto;' cellspacing='0'><tr><td id='";
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
	"id": "dwt.Widgets#ZButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZImageOnlyButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZImageOnlyButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 data.buttonClass = data.buttonClass || "ToolbarButton" 
	buffer[_i++] =  AjxTemplate.expand("#ZButton", data) ;

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZBorderlessButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "Button"; 
	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table' style='table-layout:auto;'><tr><td id='";
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
	"id": "dwt.Widgets#ZBorderlessButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZLinkButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.noDropDown) { 
	buffer[_i++] = "<a href='javascript:;' onclick='return false;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title'></a>";
	 }
		   else { 
	buffer[_i++] = "<table role=\"presentation\" class='DwtLinkButtonTable' style='table-layout:auto;'><tr><td class='ZWidgetTitle'><a href='javascript:;' onclick='return false;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title'></a></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dropdown' class='DwtLinkButtonDropDownArrowTd'><div class='DwtLinkButtonDropDownArrow'><center><div class='DwtLinkButtonDropDownArrowRow' style='width:7px;'>&nbsp;</div><div class='DwtLinkButtonDropDownArrowRow' style='width:5px;'>&nbsp;</div><div class='DwtLinkButtonDropDownArrowRow' style='width:3px;'>&nbsp;</div><div class='DwtLinkButtonDropDownArrowRow' style='width:1px;'>&nbsp;</div></center></div></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZLinkButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZButtonColorDisplay", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_color' class='DwtButtonColorPicker-display' unselectable></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZButtonColorDisplay"
}, false);

AjxTemplate.register("dwt.Widgets#DwtComboBox", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td width=*><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtComboBox",
	"class": "DwtComboBox"
}, false);

AjxTemplate.register("dwt.Widgets#DwtComboBoxButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "Button"; 
	buffer[_i++] = "<table role=\"presentation\" class='Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dropdown' class='ZDropDown'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtComboBoxButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabbar'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_page'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabView",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr valign='bottom' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_items'>";
	buffer[_i++] =  AjxTemplate.expand("#ZTabBarPrefix", data) ;
	buffer[_i++] =  AjxTemplate.expand("#ZTabBarSuffix", data) ;
	buffer[_i++] = "</tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabBar",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabBarPrefix", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_prefix'><div class='ZTabBarPrefix'></div></td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabBarPrefix"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabBarSuffix", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suffix' width='100%'><div class='ZTabBarSuffix'></div></td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabBarSuffix"
}, false);

AjxTemplate.register("dwt.Widgets#ZTab", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "Tab" 
	buffer[_i++] = "<table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select' class='Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border ZWidgetTable ZWidgetBorder'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon' class='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZWidgetTitle'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_right_icon' class='ZRightIcon ZWidgetIcon'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTab",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabBarFloat", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_items'>";
	buffer[_i++] =  AjxTemplate.expand("#ZTabBarPrefixFloat", data) ;
	buffer[_i++] =  AjxTemplate.expand("#ZTabBarSuffixFloat", data) ;
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabBarFloat",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabBarPrefixFloat", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_prefix' class='ZTabBarPrefix'>&nbsp;</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabBarPrefixFloat"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabBarSuffixFloat", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_suffix' class='ZTabBarSuffix'>&nbsp;</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabBarSuffixFloat"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabFloat", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "Tab" 
	buffer[_i++] = "<table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select' class='Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border ZWidgetBorder'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon' class='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZWidgetTitle'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_right_icon' class='ZRightIcon ZWidgetIcon'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabFloat",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTabPage", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTabPage",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZSelectAutoSizingContainer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select_container\">";
	buffer[_i++] =  AjxTemplate.expand(data.selectTemplateId, data.selectData) ;
	buffer[_i++] = "</td></tr><tr><td><table role=\"presentation\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pseudoitems_container\"></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZSelectAutoSizingContainer"
}, false);

AjxTemplate.register("dwt.Widgets#ZSelect", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] =  AjxTemplate.expand("#ZButton", data) ;

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZSelect",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZSelectMenu", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] =  AjxTemplate.expand("#ZMenu", data) ;

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZSelectMenu",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZSelectMenuItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] =  AjxTemplate.expand("#ZMenuItem", data) ;

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZSelectMenuItem",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZToolbarTable'><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_items'>";
	buffer[_i++] =  AjxTemplate.expand("#ZToolbarPrefix", data) ;
	buffer[_i++] =  AjxTemplate.expand("#ZToolbarSuffix", data) ;
	buffer[_i++] = "</tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbar",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarPrefix", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarPrefix"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarSuffix", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarSuffix"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["itemId"];
	buffer[_i++] = "'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarItem"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarSeparator", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["itemId"];
	buffer[_i++] = "' class='ZToolbarSeparator'>&nbsp;</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarSeparator"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarSpacer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["itemId"];
	buffer[_i++] = "' class='ZToolbarSpacer'>&nbsp;</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarSpacer"
}, false);

AjxTemplate.register("dwt.Widgets#ZToolbarFiller", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["itemId"];
	buffer[_i++] = "' class='ZToolbarFiller' width='100%'>&nbsp;</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZToolbarFiller"
}, false);

AjxTemplate.register("dwt.Widgets#ZField", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_field' class='ZFieldInput'>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZField",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZTreeItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='";
	buffer[_i++] = data["divClassName"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_div'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_table' style=\"table-layout:fixed; width:100%\"><tr><td style=\"width:20px\" align=center nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_nodeCell'></td>";
	 if (data.isCheckedStyle) { 
	buffer[_i++] = "<td style=\"width:20px\" nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_checkboxCell' class=\"ZTreeItemCheckboxCell\"><div class=\"ZTreeItemCheckbox\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_checkbox'><div class=\"ZTreeItemCheckboxImg\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_checkboxImg'>";
	buffer[_i++] =  AjxImg.getImageHtml("MenuCheck") ;
	buffer[_i++] = "</div></div></td>";
	 } 
	buffer[_i++] = "<td style=\"width:20px\" nowrap class='imageCell' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_imageCell'></td><td nowrap class='";
	buffer[_i++] = data["textClassName"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_textCell'></td><td class='imageCell' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_extraCell'></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZTreeItem"
}, false);

AjxTemplate.register("dwt.Widgets#ZHeaderTreeItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='";
	buffer[_i++] = data["divClassName"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_div'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_table'><tr>";
	 if (!data.noNodeCell) { 
	buffer[_i++] = "<td align=center nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_nodeCell'></td>";
	 } 
	buffer[_i++] = "<td nowrap class='imageCell' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_imageCell'></td><td nowrap class='";
	buffer[_i++] = data["textClassName"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_textCell' width=\"100%\"></td><td class='";
	buffer[_i++] = data["textClassName"];
	buffer[_i++] = " FakeAnchor' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_optCell'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_optButton'/></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZHeaderTreeItem"
}, false);

AjxTemplate.register("dwt.Widgets#ZAccordion", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_div'><table role=\"presentation\" class='ZAccordionTable ZWidget' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_accordion_table'></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZAccordion"
}, false);

AjxTemplate.register("dwt.Widgets#ZAccordionItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_header_";
	buffer[_i++] = data["itemNum"];
	buffer[_i++] = "' class='ZAccordionHeader'><table role=\"presentation\" class='ZAccordionHeaderBorder ZWidgetTable'><tr><td><div class='";
	buffer[_i++] = data["icon"];
	buffer[_i++] = "' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_icon_";
	buffer[_i++] = data["itemNum"];
	buffer[_i++] = "'></div></td><td><div class='ZAccordionTitle' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title_";
	buffer[_i++] = data["itemNum"];
	buffer[_i++] = "'>";
	buffer[_i++] = data["title"];
	buffer[_i++] = "</div></td><td><div class='ImgAccordionClosed' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_status_";
	buffer[_i++] = data["itemNum"];
	buffer[_i++] = "'></div></td></tr></table></div><div class='ZAccordionBody' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body_";
	buffer[_i++] = data["itemNum"];
	buffer[_i++] = "'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZAccordionItem"
}, false);

AjxTemplate.register("dwt.Widgets#DwtTabView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' backgroundColor='";
	buffer[_i++] = data["bgcolor"];
	buffer[_i++] = "'><tr align='left' valign='middle'><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabs' class='DwtTabTable' nowrap align='left' valign='middle' width='100%'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtTabView"
}, false);

AjxTemplate.register("dwt.Widgets#DwtTabBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<!-- TODO -->";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtTabBar"
}, false);

AjxTemplate.register("dwt.Widgets#DwtTabSpacer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr></tr><tr></tr><tr><td><div class='ImgTabSpacer'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtTabSpacer"
}, false);

AjxTemplate.register("dwt.Widgets#ZMenu", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_container' class='ZMenuBorder'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZMenu",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZMenuItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable ZMenuItemTable ZMenuItemBorder'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_check' class='ZCheckIcon'><div></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon' class='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZWidgetTitle'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dropdown' class='ZDropDown'><div></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZMenuItem",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZMenuItemSeparator", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable ZMenuItemTable ZMenuItemBorder ZMenuItemSeparatorBorder'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZWidgetTitle'><div class='ZMenuItem-Separator'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZMenuItemSeparator",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#ZMenuItemBlankCheck", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZMenuItem-BlankCheck'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZMenuItemBlankCheck"
}, false);

AjxTemplate.register("dwt.Widgets#ZMenuItemBlankIcon", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZMenuItem-BlankIcon'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZMenuItemBlankIcon"
}, false);

AjxTemplate.register("dwt.Widgets#ZMenuItemBlankCascade", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZMenuItem-BlankCascade'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#ZMenuItemBlankCascade"
}, false);

AjxTemplate.register("dwt.Widgets#DwtListView-NoResults", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr><td class='NoResults'>\n";
	buffer[_i++] = "\t\t\t\t";
	buffer[_i++] = data["message"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtListView-NoResults"
}, false);

AjxTemplate.register("dwt.Widgets#DwtPasswordField", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_show_password'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtPasswordField"
}, false);

AjxTemplate.register("dwt.Widgets#DwtFormRows", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tbody id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_rows\" tabindex=\"100\"></tbody></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtFormRows"
}, false);

AjxTemplate.register("dwt.Widgets#DwtFormRow", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_row\" class=\"DwtFormRow\"><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "\" tabindex=\"100\"></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_add\" class=\"DwtFormRowAdd\" tabindex=\"200\"></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remove\" class=\"DwtFormRowRemove\" tabindex=\"300\"></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtFormRow"
}, false);

AjxTemplate.register("dwt.Widgets#DwtColorPicker", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_colors'><div class='Text'>";
	buffer[_i++] = AjxMsg.colorsStandard;
	buffer[_i++] = "</div><div class='Colors First'><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorRed;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorOrange;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorYellow;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorGreen;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorCyan;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorBlue;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorPurple;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:";
	buffer[_i++] = AjxMsg.colorPink;
	buffer[_i++] = ";'></div><div class='Color' style='background-color:white;'></div><div class='Color' style='background-color:black;'></div></div><div class='Text'>";
	buffer[_i++] = AjxMsg.colorsCustom;
	buffer[_i++] = "</div><div class='Colors First'><div class='Color' style='background-color:#ff8686;'></div><div class='Color' style='background-color:#ff9966;'></div><div class='Color' style='background-color:#ffff99;'></div><div class='Color' style='background-color:#ccffcc;'></div><div class='Color' style='background-color:#ccffff;'></div><div class='Color' style='background-color:#99ccff;'></div><div class='Color' style='background-color:#ccccff;'></div><div class='Color' style='background-color:#ffccff;'></div><div class='Color' style='background-color:#ededed;'></div><div class='Color' style='background-color:#808080;'></div></div><div class='Colors'><div class='Color' style='background-color:#ff0000;'></div><div class='Color' style='background-color:#ff6600;'></div><div class='Color' style='background-color:#ffcc33;'></div><div class='Color' style='background-color:#66cc66;'></div><div class='Color' style='background-color:#00cccc;'></div><div class='Color' style='background-color:#3366ff;'></div><div class='Color' style='background-color:#6666ff;'></div><div class='Color' style='background-color:#cc33cc;'></div><div class='Color' style='background-color:#d5d5d5;'></div><div class='Color' style='background-color:#666666;'></div></div><div class='Colors'><div class='Color' style='background-color:#cc0000;'></div><div class='Color' style='background-color:#cc6600;'></div><div class='Color' style='background-color:#cc9933;'></div><div class='Color' style='background-color:#009900;'></div><div class='Color' style='background-color:#339999;'></div><div class='Color' style='background-color:#3333ff;'></div><div class='Color' style='background-color:#6633ff;'></div><div class='Color' style='background-color:#993399;'></div><div class='Color' style='background-color:#cccccc;'></div><div class='Color' style='background-color:#4d4d4d;'></div></div><div class='Colors'><div class='Color' style='background-color:#990000;'></div><div class='Color' style='background-color:#993300;'></div><div class='Color' style='background-color:#996633;'></div><div class='Color' style='background-color:#006600;'></div><div class='Color' style='background-color:#336666;'></div><div class='Color' style='background-color:#000099;'></div><div class='Color' style='background-color:#330099;'></div><div class='Color' style='background-color:#663366;'></div><div class='Color' style='background-color:#b3b3b3;'></div><div class='Color' style='background-color:#333333;'></div></div><div class='Colors'><div class='Color' style='background-color:#330000;'></div><div class='Color' style='background-color:#663300;'></div><div class='Color' style='background-color:#333300;'></div><div class='Color' style='background-color:#003300;'></div><div class='Color' style='background-color:#003333;'></div><div class='Color' style='background-color:#000066;'></div><div class='Color' style='background-color:#330066;'></div><div class='Color' style='background-color:#330033;'></div><div class='Color' style='background-color:#aaaaaa;'></div><div class='Color' style='background-color:#1a1a1a;'></div></div></div>";
	 if (!data.hideNoFill) { 
	buffer[_i++] = "<div class='Text' style='margin-top:4px;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_default'></div></div>";
	 } 
	 if (data.allowColorInput) { 
	buffer[_i++] = "<div class='Text' style='margin-top:4px;'><table role=\"presentation\" border=\"0\" width='100%'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button'></div></td></tr></table><table role=\"presentation\" class='DwtColorPickerLabel' border=\"0\"><tr><td><div>";
	buffer[_i++] = AjxMsg.previewResult;
	buffer[_i++] = "</div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_preview' class='Color'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_error'></div></td></tr></table></div>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtColorPicker"
}, false);

AjxTemplate.register("dwt.Widgets#DwtColorPickerButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable ZMenuItemTable ZMenuItemBorder'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_color' class='Color'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZWidgetTitle'\n";
	buffer[_i++] = "\t\t\t";
	 if (AjxEnv.isIE) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\tstyle='width:auto;'\n";
	buffer[_i++] = "\t\t\t";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#DwtColorPickerButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("dwt.Widgets#SVGGradient", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<?xml version=\"1.0\" ?><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\"\n";
	buffer[_i++] = "\t     viewBox=\"0 0 1 1\" preserveAspectRatio=\"none\"><linearGradient id=\"thegradient\"\n";
	buffer[_i++] = "\t\t                gradientUnits=\"userSpaceOnUse\"\n";
	buffer[_i++] = "\t\t                x1=\"";
	buffer[_i++] = data["x1"];
	buffer[_i++] = "\" y1=\"";
	buffer[_i++] = data["y1"];
	buffer[_i++] = "\" x2=\"";
	buffer[_i++] = data["x2"];
	buffer[_i++] = "\" y2=\"";
	buffer[_i++] = data["y2"];
	buffer[_i++] = "\"><stop offset=\"0%\" stop-color=\"";
	buffer[_i++] = data["startColor"];
	buffer[_i++] = "\"\n";
	buffer[_i++] = "\t\t\t            stop-opacity=\"1\"/><stop offset=\"100%\" stop-color=\"";
	buffer[_i++] = data["endColor"];
	buffer[_i++] = "\"\n";
	buffer[_i++] = "\t\t\t            stop-opacity=\"1\"/></linearGradient><rect x=\"0\" y=\"0\" width=\"1\" height=\"1\"\n";
	buffer[_i++] = "\t\tfill=\"url(#thegradient)\" /></svg>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "dwt.Widgets#SVGGradient"
}, false);

