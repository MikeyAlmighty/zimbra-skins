AjxTemplate.register("share.App#Loading", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" style='width:100%; height=100%'><tr><td align='center' valign='middle'><br><br><br>";
	buffer[_i++] =  ZmMsg.loading ;
	buffer[_i++] = "<br><br><div class='Imgwait_64'></div><br><br><br></td></tr><tr><td style='height:100%'>&nbsp;</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#Loading"
}, false);
AjxTemplate.register("share.App", AjxTemplate.getTemplate("share.App#Loading"), AjxTemplate.getParams("share.App#Loading"));

AjxTemplate.register("share.App#Banner", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" style='width:100%; height:100%'><tr><td align='center' valign='middle'><a";
	 if (data.url && data.url != '') { 
	buffer[_i++] = " href='";
	buffer[_i++] = data["url"];
	buffer[_i++] = "' target='_blank'";
	 } 
	buffer[_i++] = "><div class='ImgAppBanner' ";
	 if (data.isOffline) { 
	buffer[_i++] = " style='width:220px;' ";
	 } 
	buffer[_i++] = "></div></a></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#Banner"
}, false);

AjxTemplate.register("share.App#UserInfo", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='skin_table'><!--\n";
	buffer[_i++] = "\t";
	 if (data.showOfflineLink) { 
	buffer[_i++] = "<tr><td id='skin_td_switch_offline' colspan=3><a href=\"https://www.zimbra.com/products/desktop.html\" target=\"_blank\">";
	buffer[_i++] =  ZmMsg.switchToOfflineClientEx ;
	buffer[_i++] = "</a></td></tr>";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "--><tr>";
	 if (data.adminUrl) { 
	buffer[_i++] = "<td id=\"skin_container_adminlink\"><a target=\"_blank\" href=\"";
	buffer[_i++] = data["adminUrl"];
	buffer[_i++] = "\">";
	buffer[_i++] =  ZmMsg.adminLinkLabel ;
	buffer[_i++] = "</a></td>";
	 } 
	buffer[_i++] = "<td id='skin_container_help'><span id='skin_container_help_button'></span></td><td id='skin_container_logoff'><a href='javascript:;' onclick='ZmZimbraMail._onClickLogOff();'>";
	buffer[_i++] = data["logoutText"];
	buffer[_i++] = "</a></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#UserInfo"
}, false);

AjxTemplate.register("share.App#PrintView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<html><head><title>";
	buffer[_i++] =  ZmMsg.zimbraLabel ;
	buffer[_i++] = " ";
	buffer[_i++] =  data.username ;
	buffer[_i++] = "</title><link rel='stylesheet' href='";
	buffer[_i++] =  data.appContextPath ;
	buffer[_i++] = "/css/msgview,zm.css?v=";
	buffer[_i++] =  data.cacheKillerVersion ;
	buffer[_i++] = "' media='screen'></link>";
	 if (data.onloadStr) { 
	buffer[_i++] = "<script language='javascript'>\n";
	buffer[_i++] = "\t\t\t\t\tfunction handleOnload() {\n";
	buffer[_i++] = "\t\t\t\t\t\t";
	buffer[_i++] =  data.onloadStr ;
	buffer[_i++] = ";\n";
	buffer[_i++] = "\t\t\t\t\t}\n";
	buffer[_i++] = "\t\t\t\t</script></head><body onload='handleOnload();'>";
	 } else { 
	buffer[_i++] = "</head><body>";
	 } 
	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td class='ZmPrintView-company'>";
	buffer[_i++] =  ZmMsg.zimbraTitle ;
	buffer[_i++] = " ";
	buffer[_i++] =  ZmMsg.splashScreenAppName ;
	buffer[_i++] = "</td><td class='ZmPrintView-username' align=right>";
	buffer[_i++] =  data.username ;
	buffer[_i++] = "</td></tr></table><hr><div style='padding:10px'>";
	buffer[_i++] =  data.content ;
	buffer[_i++] = "</div></body></html>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#PrintView"
}, false);

AjxTemplate.register("share.App#FolderTooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 /* IE hack. max-width does not work as expected */ 
	 if (AjxEnv.isIE && (data.name.length > 65)) { 
	buffer[_i++] = "<table role=\"presentation\" style=\"width:350px;\">";
	 } else { 
	buffer[_i++] = "<table role=\"presentation\">";
	 } 
	buffer[_i++] = "<tr><th colspan=2 style='padding-bottom:5px; text-align:left; max-width:350px;'><div id='tt_f_name' style='overflow-x:hidden;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.name) ;
	buffer[_i++] = "</div></th></tr><tr><td id='tt_m_label' valign='top' style='padding-right:20px'>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel, data.itemText) ;
	buffer[_i++] = "</td><td id='tt_m_count' valign='top'>";
	buffer[_i++] =  data.numTotal ;
	buffer[_i++] = "</td></tr>";
	 if (data.numUnread) { 
	buffer[_i++] = "<tr><td id='tt_u_label' valign='top'>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel, data.unreadLabel) ;
	buffer[_i++] = "</td><td id='tt_u_count' valign='top' style='font-weight:bold'>";
	buffer[_i++] =  data.numUnread ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.sizeTotal) { 
	buffer[_i++] = "<tr><td id='tt_s_label' valign='top'>";
	buffer[_i++] =  ZmMsg.sizeLabel ;
	buffer[_i++] = "</td><td id='tt_s_value' valign='top'>";
	buffer[_i++] =  AjxUtil.formatSize(data.sizeTotal) ;
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#FolderTooltip"
}, false);

AjxTemplate.register("share.App#ZimbraAccountTooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\">";
	 if (data.lastSync && data.lastSync != "") { 
	buffer[_i++] = "<tr><td class='nobreak' align=right>";
	buffer[_i++] =  ZmMsg.lastSync ;
	buffer[_i++] = ":</td><td class='nobreak'>";
	buffer[_i++] = data["lastSync"];
	buffer[_i++] = "</td></tr>";
	 } else if (data.hasNotSynced) { 
	buffer[_i++] = "<tr><td class='nobreak' colspan=2>";
	buffer[_i++] =  ZmMsg.neverSynced ;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.status && data.status != "") { 
	buffer[_i++] = "<tr><td align=right valign=top>";
	buffer[_i++] =  ZmMsg.status ;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data["status"];
	buffer[_i++] = "</td></tr>";
	 } 
	 if (!data.hasNotSynced) { 
	buffer[_i++] = "<tr><td align=right valign=top>";
	buffer[_i++] =  ZmMsg.offlineQuota ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] = data["quota"];
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#ZimbraAccountTooltip"
}, false);

AjxTemplate.register("share.App#presenceButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "ToolbarButton"; 
	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border' style='table-layout:auto;'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon'  \tclass='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title'\t\tclass='ZWidgetTitle'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#presenceButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("share.App#ZmTaskbarItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button' class='ZmTaskbarButtonParent'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_content' class='ZmTaskbarContentParent' style='display:none;'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#ZmTaskbarItem",
	"class": "ZWidget"
}, false);

AjxTemplate.register("share.App#ZmStatusImageButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 var buttonClass = data.buttonClass || "ToolbarButton"; 
	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Table Z";
	buffer[_i++] = buttonClass;
	buffer[_i++] = "Border' style='table-layout:auto;'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_left_icon'  \tclass='ZLeftIcon ZWidgetIcon'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_status_icon'\tclass='ZLeftIcon ZWidgetIcon'><div></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#ZmStatusImageButton",
	"class": "ZWidget"
}, false);

AjxTemplate.register("share.App#NetworkStatus", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=90><tr><td class=\"ZmNetworkStatusIcon\" onclick=\"ZmZimbraMail.handleNetworkStatusClick();\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_networkStatusText\"></td><td class=\"ZmNetworkStatusIcon\" align=right width=18 onclick=\"ZmZimbraMail.handleNetworkStatusClick();\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_networkStatusIcon\"></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.App#NetworkStatus"
}, false);

