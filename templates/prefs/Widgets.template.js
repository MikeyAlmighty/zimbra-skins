AjxTemplate.register("prefs.Widgets#infoBox", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_infoBox\" class='ZInfoBox'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_infoBox_outer' width='100%'><tr><td rowspan=2 style='vertical-align:top'><div class='ImgInformation_32'></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_infoBox_close\" class=\"ZInfoTitleClose\" onclick='Dwt.toggle(\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_infoBox_container\")'>";
	buffer[_i++] =  ZmMsg.close ;
	buffer[_i++] = "</div><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title\" class='ZInfoTitle'>";
	buffer[_i++] = data["_labels"]["infoTitle"];
	buffer[_i++] = "</div></td></tr><tr><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_body\">";
	buffer[_i++] = data["_labels"]["infoContents"];
	buffer[_i++] = "</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"xml:space": "strip",
	"id": "prefs.Widgets#infoBox"
}, false);
AjxTemplate.register("prefs.Widgets", AjxTemplate.getTemplate("prefs.Widgets#infoBox"), AjxTemplate.getParams("prefs.Widgets#infoBox"));

