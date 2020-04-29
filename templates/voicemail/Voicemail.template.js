AjxTemplate.register("voicemail.Voicemail#VoicemailTooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td><div style='border-bottom:solid black 1px; margin-bottom:0.25em'><table role=\"presentation\" width=100%><tr valign=top><td><b>";
	buffer[_i++] =  ZmMsg.voiceMail ;
	buffer[_i++] = "</b></td><td align=right style='padding-left:0.5em'><div class='ImgVoicemail'></div></td></tr></table></div></td></tr><tr><td><table role=\"presentation\"><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] =  ZmMsg.fromLabel ;
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["caller"];
	buffer[_i++] = "</td></tr><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] =  ZmMsg.durationLabel ;
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["duration"];
	buffer[_i++] = "</td></tr><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] =  ZmMsg.dateLabel ;
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["date"];
	buffer[_i++] = "</td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "voicemail.Voicemail#VoicemailTooltip"
}, false);
AjxTemplate.register("voicemail.Voicemail", AjxTemplate.getTemplate("voicemail.Voicemail#VoicemailTooltip"), AjxTemplate.getParams("voicemail.Voicemail#VoicemailTooltip"));

AjxTemplate.register("voicemail.Voicemail#CallTooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td><div style='border-bottom:solid black 1px; margin-bottom:0.25em'><table role=\"presentation\" width=100%><tr valign=top><td><b>";
	buffer[_i++] =  ZmMsg.call ;
	buffer[_i++] = "</b></td><td align=right style='padding-left:0.5em'><div class='";
	buffer[_i++] = data["image"];
	buffer[_i++] = "'></div></td></tr></table></div></td></tr><tr><td><table role=\"presentation\"><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] = data["callerLabel"];
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["caller"];
	buffer[_i++] = "</td></tr><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] =  ZmMsg.durationLabel ;
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["duration"];
	buffer[_i++] = "</td></tr><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] =  ZmMsg.dateLabel ;
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["date"];
	buffer[_i++] = "</td></tr><tr valign=top><td class='ZmTooltipLabel'><b>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "</b></td><td>";
	buffer[_i++] = data["location"];
	buffer[_i++] = "</td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "voicemail.Voicemail#CallTooltip"
}, false);

AjxTemplate.register("voicemail.Voicemail#ZmSoundPlayer", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" style='table-layout:auto;'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_play' class='ZmPlayButton'>Play</div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pause' class='ZmPauseButton'>Pause</div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_status' class='ZmSoundStatus'>Time</div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_postition' class='DwtPositionSlider'>...Position...</div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "voicemail.Voicemail#ZmSoundPlayer",
	"class": "ZmSoundPlayer ZWidget"
}, false);

AjxTemplate.register("voicemail.Voicemail#ZmSoundPlayerNoScript", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_play' class='ZmPlayButton'>Play</div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_status' class='ZmSoundStatus'>Time</div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_player' style='padding-left:6px'></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "voicemail.Voicemail#ZmSoundPlayerNoScript",
	"class": "ZmSoundPlayer ZWidget"
}, false);

