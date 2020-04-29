AjxTemplate.register("share.Quota#UsedLimited", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	
			// set background color based on percent used
			var progressClassName = "quotaUsed";
			if (data.percent < 85 && data.percent > 65) {
				progressClassName = "quotaWarning";
			} else if (data.percent >= 85) {
				progressClassName = "quotaCritical";
			}
		
	buffer[_i++] = "<div class='BannerBar'><div class='quotabar'><div style='width:";
	buffer[_i++] = data["percent"];
	buffer[_i++] = "%' class='";
	buffer[_i++] =  progressClassName ;
	buffer[_i++] = "'></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Quota#UsedLimited",
	"class": "BannerBar"
}, false);
AjxTemplate.register("share.Quota", AjxTemplate.getTemplate("share.Quota#UsedLimited"), AjxTemplate.getParams("share.Quota#UsedLimited"));

AjxTemplate.register("share.Quota#UsedUnlimited", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='BannerTextQuota' style='display:none;'>";
	buffer[_i++] = data["desc"];
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Quota#UsedUnlimited"
}, false);

AjxTemplate.register("share.Quota#Tooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.username != data.login) { 
	buffer[_i++] = "<div style=\"text-align:center;\">";
	buffer[_i++] = data["login"];
	buffer[_i++] = "</div>";
	 } 
	buffer[_i++] = "<div style=\"text-align:center;margin-top:3px;\">";
	 if (data.quota) { 
	
	                        var tooltipMsg = AjxMessageFormat.format(ZmMsg.usingDescLimited, [data.size, '(' + data.percent + '%)', data.limit]);
	                    
	buffer[_i++] =  tooltipMsg ;
	 } else { 
	buffer[_i++] = "\n";
	buffer[_i++] = "                    ";
	buffer[_i++] = data["desc"];
	buffer[_i++] = "\n";
	buffer[_i++] = "                ";
	 } 
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "share.Quota#Tooltip"
}, false);

