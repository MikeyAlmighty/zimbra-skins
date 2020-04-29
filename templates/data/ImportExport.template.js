AjxTemplate.register("data.ImportExport#ImportExportPrefPage", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (appCtxt.get(ZmSetting.IMPORT_ENABLED)) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg._import;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=\"100%\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_IMPORT_FOLDER' tabindex=\"100\"></div></td></tr><tr><td align=\"right\"><button id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_IMPORT_BUTTON\" tabindex=\"200\" style=\"display:inline-block;\"></button></td></tr></table></td></tr></table>";
	 } 
	 if (appCtxt.get(ZmSetting.EXPORT_ENABLED)) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg._export;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=\"100%\" ><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXPORT_FOLDER' tabindex=\"300\"></div></td></tr><tr><td align=\"right\"><button id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXPORT_BUTTON\" tabindex=\"400\" style=\"display:inline-block;\"></button></td></tr></table></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#ImportExportPrefPage"
}, false);
AjxTemplate.register("data.ImportExport", AjxTemplate.getTemplate("data.ImportExport#ImportExportPrefPage"), AjxTemplate.getParams("data.ImportExport#ImportExportPrefPage"));

AjxTemplate.register("data.ImportExport#ImportView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.fileLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\" style='padding-left:0.5em;'><form id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FORM\" method=\"POST\" enctype=\"multipart/form-data\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FILE\" name=\"file\" type=\"file\" tabindex=\"100\"></form></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SUBTYPE_row'><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.typeLabel;
	buffer[_i++] = "</td><td><select id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SUBTYPE\" tabindex=\"200\"></select></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FOLDER_row\"><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.destinationLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\"><table role=\"presentation\"><tr><td><button id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FOLDER_BUTTON\" tabindex=\"300\"></button></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_RESOLVE_row'><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.resolveDuplicatesLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\"><table role=\"presentation\"><tr><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_RESOLVE_IGNORE\" tabindex=\"500\"></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_RESOLVE_MODIFY\" tabindex=\"501\"></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_RESOLVE_REPLACE\" tabindex=\"502\"></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_RESOLVE_RESET\" tabindex=\"503\"></div></td></tr></table></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADVANCED_row\"><td class=\"ZOptionsLabelTop\">&nbsp;</td><td class=\"ZOptionsField\"><hr><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADVANCED\" tabindex=\"700\"></span></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DATA_TYPES_row\"><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.dataTypesLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\" style=\"padding-top: 5px;\"><div>";
	buffer[_i++] = ZmMsg.dataTypesHint;
	buffer[_i++] = "</div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DATA_TYPES\" tabindex=\"800\"></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#ImportView",
	"class": "ZmImportView"
}, false);

AjxTemplate.register("data.ImportExport#ExportView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (appCtxt.get(ZmSetting.CALENDAR_ENABLED) || appCtxt.get(ZmSetting.CONTACTS_ENABLED)) { 
	buffer[_i++] = "<tr><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.typeLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\"><table role=\"presentation\"><tr><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TYPE_TGZ\" tabindex=\"100\"></div></td>";
	 if (appCtxt.get(ZmSetting.CALENDAR_ENABLED)) { 
	buffer[_i++] = "<td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TYPE_ICS\" tabindex=\"101\"></div></td>";
	 } 
	 if (appCtxt.get(ZmSetting.CONTACTS_ENABLED)) { 
	buffer[_i++] = "<td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TYPE_CSV\" tabindex=\"102\"></div></td>";
	 } 
	buffer[_i++] = "<td><select id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SUBTYPE\" tabindex=\"200\"></select></td></tr></table><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TYPE_HINT\" class=\"ZOptionsInfo\"></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.sourceLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\"><table role=\"presentation\"><tr><td><button id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FOLDER_BUTTON\" tabindex=\"300\"></button></td></tr></table>";
	 if (appCtxt.get(ZmSetting.OFFLINE_ENABLED)) { 
	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_IGNORE_ARCHIVE\" tabindex=\"400\"></div>";
	 } 
	buffer[_i++] = "</td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADVANCED_row\"><td class=\"ZOptionsLabelTop\">&nbsp;</td><td class=\"ZOptionsField\"><hr><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADVANCED\" tabindex=\"500\"></span></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DATA_TYPES_row\"><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.dataTypesLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\" style=\"padding-top: 5px;\"><div>";
	buffer[_i++] = ZmMsg.dataTypesHint;
	buffer[_i++] = "</div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DATA_TYPES\" tabindex=\"600\"></div></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DATE_row\"><td class=\"ZOptionsLabelTop\">";
	buffer[_i++] = ZmMsg.date;
	buffer[_i++] = ":</td>";
	buffer[_i++] =  AjxTemplate.expand("#DatePickers", data) ;
	buffer[_i++] = "</tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SEARCH_FILTER_row\"><td class=\"ZOptionsLabelTop\" style=\"width:inherit;\">";
	buffer[_i++] = ZmMsg.searchFilterLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\"><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SEARCH_FILTER\" length=\"40\" hint=\"";
	buffer[_i++] = ZmMsg.searchFilterHint;
	buffer[_i++] = "\" tabindex=\"700\" size=\"40\"></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SKIP_META_row\"><td class=\"ZOptionsLabelTop\" style=\"width:inherit;\">";
	buffer[_i++] = ZmMsg.otherLabel;
	buffer[_i++] = "</td><td class=\"ZOptionsField\"><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SKIP_META\" tabindex=\"800\"></span></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#ExportView",
	"class": "ZmExportView"
}, false);

AjxTemplate.register("data.ImportExport#DataTypes", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'>";
	 var count = data.count; 
	 var rows = count / 3; 
	 for (var i = 0; i < count; i++) { 
	 if ((i % 3) == 0) { 
	buffer[_i++] = "<tr>";
	 } 
	buffer[_i++] = "<td><span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_cell_";
	buffer[_i++] = i;
	buffer[_i++] = "\"></span></td>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#DataTypes"
}, false);

AjxTemplate.register("data.ImportExport#DataTypeCheckbox", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' name='";
	buffer[_i++] = data["name"];
	buffer[_i++] = "' value='";
	buffer[_i++] = data["value"];
	buffer[_i++] = "' type='checkbox' ";
	buffer[_i++] = data["checked"];
	buffer[_i++] = "></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_image'></div></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_text_right' class='Text' style='text-align:left'></label></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#DataTypeCheckbox"
}, false);

AjxTemplate.register("data.ImportExport#DateField", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td><input autocomplete='off' style='height:22px;' type='text' size=14 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' value='";
	buffer[_i++] = data["value"];
	buffer[_i++] = "'></td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#DateField"
}, false);

AjxTemplate.register("data.ImportExport#DatePickers", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td><table role=\"presentation\"><tr>";
	buffer[_i++] =  AjxTemplate.expand("#StartDate", data) ;
	buffer[_i++] =  AjxTemplate.expand("#EndDate", data) ;
	buffer[_i++] = "</tr></table></td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#DatePickers"
}, false);

AjxTemplate.register("data.ImportExport#StartDate", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td>";
	buffer[_i++] = ZmMsg.startOn;
	buffer[_i++] = "&nbsp;";
	buffer[_i++] = AjxTemplate.expand("#DateField",{id:data.id+"_startDateField"});
	buffer[_i++] = "</td><td class=\"miniCalendarButton\" style='padding-right:10px;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startMiniCalBtn'></div></td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#StartDate"
}, false);

AjxTemplate.register("data.ImportExport#EndDate", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td>";
	buffer[_i++] = ZmMsg.endOn;
	buffer[_i++] = "&nbsp;";
	buffer[_i++] = AjxTemplate.expand("#DateField",{id:data.id+"_endDateField"});
	buffer[_i++] = "</td><td class=\"miniCalendarButton\" style='padding-right:10px;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endMiniCalBtn'></div></td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "data.ImportExport#EndDate"
}, false);

