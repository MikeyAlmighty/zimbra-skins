AjxTemplate.register("zimbra.Widgets#ZmErrorDialogControls", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
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
	"width": "20",
	"id": "zimbra.Widgets#ZmErrorDialogControls",
	"height": "32"
}, false);
AjxTemplate.register("zimbra.Widgets", AjxTemplate.getTemplate("zimbra.Widgets#ZmErrorDialogControls"), AjxTemplate.getParams("zimbra.Widgets#ZmErrorDialogControls"));

AjxTemplate.register("zimbra.Widgets#ZmErrorDialogContent", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' height='100%'><tr><td>";
	buffer[_i++] = data["message"];
	buffer[_i++] = "</td></tr>";
	 if (data.showDetails) { 
	buffer[_i++] = "<tr><td><hr/></td></tr><tr><td style='height:100%;vertical-align:top;'>\n";
	buffer[_i++] = "\t\t\t\t";
	buffer[_i++] = data["detail"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "zimbra.Widgets#ZmErrorDialogContent"
}, false);

AjxTemplate.register("zimbra.Widgets#ZmColorMenuItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZWidgetTable ZMenuItemTable ZMenuItemBorder'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZWidgetTitle'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "zimbra.Widgets#ZmColorMenuItem",
	"class": "ZWidget"
}, false);

