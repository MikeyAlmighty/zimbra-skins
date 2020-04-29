AjxTemplate.register("abook.Contacts#ZmEditContactView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEBUG'></div><table role=\"presentation\" valign='top' width='100%'>";
	buffer[_i++] =  AjxTemplate.expand("#ZmEditContactView_header", data) ;
	buffer[_i++] =  AjxTemplate.expand("#ZmEditContactView_body", data) ;
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactView"
}, false);
AjxTemplate.register("abook.Contacts", AjxTemplate.getTemplate("abook.Contacts#ZmEditContactView"), AjxTemplate.getParams("abook.Contacts#ZmEditContactView"));

AjxTemplate.register("abook.Contacts#ZmEditContactView_header", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr valign='top' class='contactHeaderRow'><td class='contactHeaderCell' align='center'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_IMAGE' tabindex='100'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REMOVE_IMAGE_row' style='padding-left:7px;font-size:.8em;white-space:nowrap;'><a id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VIEW_IMAGE' href='#view' tabindex='101'>";
	buffer[_i++] = ZmMsg.view;
	buffer[_i++] = "</a>\n";
	buffer[_i++] = "\t\t\t\t\t|\n";
	buffer[_i++] = "\t\t\t\t\t<a id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REMOVE_IMAGE' href='#remove' tabindex='102'>";
	buffer[_i++] = ZmMsg.remove;
	buffer[_i++] = "</a></div></td><td class='contactHeaderCell' valign='bottom'><div style='padding:.125em;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FULLNAME'></div></div>";
	 if (appCtxt.get(ZmSetting.TAGGING_ENABLED)) { 
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TAG' class='contactHeaderCellRow'></div>";
	 } 
	buffer[_i++] =  AjxTemplate.expand("#ZmEditContactView_headerName", data) ;
	buffer[_i++] =  AjxTemplate.expand("#ZmEditContactView_headerJobInfo", data) ;
	buffer[_i++] = "</td><td class='contactHeaderCell'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td style='text-align:right;white-space:nowrap;'>";
	buffer[_i++] = ZmMsg.fileAsLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FILE_AS' tabindex='400'></div></td></tr><tr><td style='text-align:right;white-space:nowrap;'>";
	buffer[_i++] = ZmMsg.locationLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FOLDER' tabindex='401'></div></td></tr>";
	 if (appCtxt.multiAccounts) { 
	buffer[_i++] = "<tr><td style='text-align:right;'>";
	buffer[_i++] = ZmMsg.accountLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ACCOUNT' tabindex='402'></div></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactView_header"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactView_headerName", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NAME_row' class='contactHeaderCellRow'><table role=\"presentation\">";
	 if (appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS)) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_row'><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_PREFIX' class='inlineInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_FIRST_row' class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_FIRST' tabindex='190'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_MIDDLE' class='inlineInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_MAIDEN' class='inlineInput'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_LAST_row' class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_LAST' tabindex='191'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_SUFFIX' class='inlineInput'></td></tr>";
	 } 
	buffer[_i++] = "<tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PREFIX_row' class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PREFIX' tabindex='200'></div></td><td class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FIRST' tabindex='201'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MIDDLE_row' class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MIDDLE' tabindex='202'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIDEN_row' class='inlineInput'><table role=\"presentation\"><tr><td class='inlineInputWrapper'>(</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIDEN' tabindex='203'></div></td><td class='inlineInputWrapper'>)</td></tr></table></td><td class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LAST' tabindex='204'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SUFFIX_row' class='inlineInput'><table role=\"presentation\"><tr><td class='inlineInputWrapper'>,</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SUFFIX' tabindex='205'></div></td></tr></table></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DETAILS' tabindex='206'></div></td></tr></table></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NICKNAME_row' class='contactHeaderCellRow'><table role=\"presentation\"><tr><td class='inlineInputWrapper'>&ldquo;</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NICKNAME' tabindex='250'></div></td><td class='inlineInputWrapper'>&rdquo;</td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactView_headerName"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactView_headerJobInfo", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_JOB_row' class='contactHeaderCellRow'><table role=\"presentation\"><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TITLE_row' class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TITLE' tabindex='301'></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TITLE_DEPARTMENT_SEP' class='inlineInputWrapper'>&ndash;</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEPARTMENT_row' class='inlineInput'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEPARTMENT' tabindex='302'></div></td></tr></table></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPANY_row' class='contactHeaderCellRow'><table role=\"presentation\">";
	 if (appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS)) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_COMPANY_row'><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONETIC_COMPANY' tabindex='304'></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPANY' tabindex='305'></div></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactView_headerJobInfo"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactView_body", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.emailLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL' tabindex='500'></div></td></tr><tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.phoneLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PHONE' tabindex='600'></div></td></tr><tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.imLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_IM' tabindex='700'></div></td></tr><tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.addressLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADDRESS' tabindex='800'></div></td></tr><tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.urlLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_URL' tabindex='900'></div></td></tr><tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.otherLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OTHER' tabindex='1000'></div></td></tr><tr><td class=rowLabel>";
	buffer[_i++] = ZmMsg.notesLabel;
	buffer[_i++] = "</td><td class=rowValue><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NOTES' tabindex='1100'></div></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactView_body"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewRows", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tbody id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_rows' tabindex='100'></tbody></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewRows"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewDetailsButton", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<span class='ScreenReaderOnly'>";
	buffer[_i++] =  ZmMsg.chooseFields ;
	buffer[_i++] = "</span><span aria-hidden='true' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_title' class='ZButtonBorder ZWidgetTitle'></span>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewDetailsButton"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewInputSelect", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='inputTable'><tr><td class='inputElement'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' tabindex='100'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select' tabindex='200'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewInputSelect"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewInputDoubleSelect", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='inputTable'><tr><td class='inputElement'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' tabindex='100'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select' tabindex='200'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select2' tabindex='300'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewInputDoubleSelect"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewOther", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='inputTable'><tr><td class='inputElement'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' tabindex='100'></div></td><td class='inputElement' style='width:47px;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_picker' tabindex='200'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select' tabindex='300'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewOther"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewAddressRow", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='inputTable'><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_row' class='DwtFormRow' valign='top'><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "' tabindex='100'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_add' class='DwtFormRowAdd' tabindex='200'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_remove' class='DwtFormRowRemove' tabindex='300'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewAddressRow"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewAddressSelect", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='inputTable'><tr valign='top'><td class='inputElement'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' tabindex='100' style=\"padding:1px 3px;\"></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_select' tabindex='200'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewAddressSelect"
}, false);

AjxTemplate.register("abook.Contacts#ZmEditContactViewAddress", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='addressTable' width='100%'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_STREET' tabindex='100'></div></td></tr></table><table role=\"presentation\" class='addressTable' width='100%' style='margin-bottom:3px;'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CITY' tabindex='200'></div></td><td>,&nbsp;</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_STATE' tabindex='300'></div></td><td>&nbsp;&nbsp;</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ZIP' tabindex='400'></div></td></tr></table><table role=\"presentation\" class='addressTable' width='100%'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COUNTRY' tabindex='500'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmEditContactViewAddress",
	"class": "DwtForm ZmEditContactViewAddress"
}, false);

AjxTemplate.register("abook.Contacts#SplitView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' height='100%' class='ZPropertySheet' cellspacing='6'><col width='230'></col><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_alphabetbar'></td></tr><tr height='100%'><td valign='top'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_splitview' style='position:relative;width:100%;height:100%;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_listview' style='position:absolute;width:230px;height:100%;left:0;'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sash' style='position:absolute;width:8px;height:100%;left:230px;'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_contentCell' style='position:absolute;left:238px;'><div class='ZmContactInfoView' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_content'></div></div></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_content", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_details' class='contactContentTable'>";
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#SplitView_header", data) ;
	buffer[_i++] =  ZmContactSplitView.showContactEmails(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactPhones(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactIMs(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactAddresses(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactUrls(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactOther(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactNotes(data) ;
	buffer[_i++] =  ZmContactSplitView.showContactDLMembers(data) ;
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_content"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_group", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	
			var imageUrl = data.imageUrl;
			var defaultImageUrl = data.defaultImageUrl;
			var email = data.email;
			var title = data.title;
			var fullName = data.fullName;
			var phone = data.phone;
			var location = data.location;
			var imgClassName = data.imgClassName || "Person_48";
			var quickAdd = "id='" + data.quickAddId + "'";
			var isEdit = data.isEdit;
			var delId = "id='" + data.delButtonId + "'";
		
	buffer[_i++] = "<table role=\"presentation\" class='contactGroupTable'><tr>";
	 if (imageUrl) { 
	buffer[_i++] = "<td class='contactGroupTableImage' width='48'><img src='";
	buffer[_i++] =  imageUrl ;
	buffer[_i++] = "'\n";
	buffer[_i++] = "\t\t\t";
	 if (AjxEnv.isIE) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\theight='48'\n";
	buffer[_i++] = "\t\t\t";
	 } else { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\tstyle='max-width:48px;max-height:48px;'\n";
	buffer[_i++] = "\t\t\t";
	 } 
	 if (defaultImageUrl) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\tonerror='this.onerror=null;this.src=\"";
	buffer[_i++] = data["defaultImageUrl"];
	buffer[_i++] = "\";'\n";
	buffer[_i++] = "\t\t\t";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\tborder='0'></td>";
	 } else { 
	buffer[_i++] = "<td class='contactGroupTableImage' width='48'>";
	buffer[_i++] =  AjxImg.getImageHtml(imgClassName) ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "<td class='contactGroupTableContent'>";
	 if (fullName) {
	buffer[_i++] = "<div><strong>";
	buffer[_i++] = fullName;
	buffer[_i++] = "</strong></div>";
	 } 
	 if (title) { 
	buffer[_i++] = "<div><span>";
	buffer[_i++] = title;
	buffer[_i++] = "</span></div>";
	}
	 if (email) {
	buffer[_i++] = "<div>";
	buffer[_i++] = email;
	 if (data.isInline) {
	buffer[_i++] = AjxImg.getImageHtml("Plus", "", quickAdd);
	 }
	buffer[_i++] = "</div>";
	}
	 if (phone) {
	buffer[_i++] = "<div>";
	buffer[_i++] = phone;
	buffer[_i++] = "</div>";
	}
	 if (location) {
	buffer[_i++] = "<div>";
	buffer[_i++] = location;
	buffer[_i++] = "</div>";
	}
	buffer[_i++] = "</td>";
	 if (isEdit) {
	buffer[_i++] = "<td width='36' valign='top'>";
	buffer[_i++] = AjxImg.getImageHtml("Delete", "", delId);
	buffer[_i++] = "</td>";
	}
	buffer[_i++] = "</tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_group"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_header", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	
			var contact = data.contact;
			var imageUrl = contact.getImageUrl();
			var imageLabel = contact.isDistributionList() ? ZmMsg.distributionList : contact.isGroup() ? ZmMsg.group : ZmMsg.contact;
			var defaultImageUrl = data.defaultImageUrl;
			var accountName = appCtxt.multiAccounts && contact.account && contact.account.getDisplayName();
			var tagsId = data.id + '_tags_contact'; 
			var imgClassName = contact.isDistributionList() ? 'Group_48' : contact.isGroup() ? 'GroupPerson_48' : 'Person_48';
			var isEdit = data.isEdit;
		
	buffer[_i++] = "<tr class='headerRow' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_headerRow'>";
	 if (imageUrl) { 
	buffer[_i++] = "<td class='rowLabel'><div class='headerRowImage'><img src='";
	buffer[_i++] =  imageUrl ;
	buffer[_i++] = "'\n";
	buffer[_i++] = "\t\t\t\t";
	 if (AjxEnv.isIE) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\theight='48'\n";
	buffer[_i++] = "\t\t\t\t";
	 } else { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\tstyle='max-width:48px;max-height:48px;'\n";
	buffer[_i++] = "\t\t\t\t";
	 } 
	 if (defaultImageUrl) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\tonerror='this.onerror=null;this.src=\"";
	buffer[_i++] = data["defaultImageUrl"];
	buffer[_i++] = "\";'\n";
	buffer[_i++] = "\t\t\t\t";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\tborder=0 alt='";
	buffer[_i++] =  imageLabel ;
	buffer[_i++] = "'></div></td>";
	 } else { 
	buffer[_i++] = "<td class='rowLabel'><div class='headerRowImage'>";
	buffer[_i++] =  AjxImg.getImageHtml({
							imageName: imgClassName, altText: imageLabel
						}) ;
	buffer[_i++] = "</div></td>";
	 } 
	buffer[_i++] = "<td class='rowValue'>";
	buffer[_i++] =  AjxTemplate.expand("#SplitView_headerName", data) ;
	buffer[_i++] =  AjxTemplate.expand("#SplitView_headerJobInfo", data) ;
	 if (data.dlInfo && data.dlInfo.description) { 
	buffer[_i++] = "<div>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.dlInfo.description) ;
	buffer[_i++] = "</div>";
	 } 
	 if (!isEdit) {
	buffer[_i++] = "<div class='contactHeaderTags' id='";
	buffer[_i++] =  tagsId ;
	buffer[_i++] = "'></div>";
	 } 
	buffer[_i++] = "</td><td class='rowType' valign='top'>";
	 if (accountName) { 
	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='contactLocation'>";
	buffer[_i++] =  ZmMsg.accountLabel ;
	buffer[_i++] = "</td><td class='companyFolder'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(accountName) ;
	buffer[_i++] = "</td></tr></table>";
	 } 
	 if (!isEdit) { 
	 if (data.addrbook) { 
	buffer[_i++] =  AjxImg.getImageHtml({
								imageName: data.addrbook.getIconWithColor(),
								altText: ZmMsg.locationLabel
							}) ;
	buffer[_i++] = "&nbsp;";
	buffer[_i++] =  data.addrbook.getName() ;
	 } else { 
	buffer[_i++] =  AjxImg.getImageHtml('GAL') ;
	buffer[_i++] = "&nbsp;";
	buffer[_i++] =  ZmMsg.GAL ;
	 } 
	 } else { 
	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_locationLabel' class='contactLocation'>";
	buffer[_i++] =  ZmMsg.locationLabel ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LOCATION_FOLDER'></td></tr></table>";
	 } 
	buffer[_i++] = "</td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_header"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_headerName", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	
			var contact = data.contact;
			var isPhonetic = appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS);
			var fullnameHtml = contact.getFullNameForDisplay(isPhonetic);
			if (!isPhonetic) {
				fullnameHtml = AjxStringUtil.htmlEncode(fullnameHtml);
			}
			var nickname = contact.getAttr(ZmContact.F_nickname);
			var isEdit = data.isEdit;
			if (isEdit && data.contact.isDistributionList()) {
				fullnameHtml = '';
			}
		
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_contactName' class='contactHeader ";
	buffer[_i++] =  data.isInTrash ? "Trash" : "" ;
	buffer[_i++] = "'>";
	buffer[_i++] =  fullnameHtml ;
	buffer[_i++] = "</div>";
	 if (nickname && !isEdit) { 
	buffer[_i++] = "<div class='contactHeader'>&ldquo;";
	buffer[_i++] =  AjxStringUtil.htmlEncode(nickname) ;
	buffer[_i++] = "&rdquo;</div>";
	 } 
	 else if (isEdit) {
	buffer[_i++] = "<div class='contactHeader2'>";
		if (data.contact.isDistributionList()) {
				
	buffer[_i++] = "<table role=\"presentation\"><tr><td class='contactHeader2'>";
	
						if (data.usernameEditable) { 
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_groupNameParent'></div>";
			} else { 
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.username);
			}
				
	buffer[_i++] = "</td><td class='contactHeader2'>&nbsp;@\n";
	buffer[_i++] = "\t\t\t";
	
						if (data.domainEditable) { 
	buffer[_i++] = "<input type='text' autocomplete='off' size='20' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_groupNameDomain' class='Text'>";
			} else { 
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.domain);
			} 
	buffer[_i++] = "</td></tr></table>";
	 } else { 
	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_groupNameParent'></div>";
	 } 
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tags' style='padding-top:5px;'></div>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_headerName"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_headerJobInfo", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	
			var contact = data.contact;
			var isPhonetic = appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS);
			var company = contact.getAttr(ZmContact.F_company);
			var title = contact.getAttr(ZmContact.F_jobTitle);
			var department = contact.getAttr(ZmContact.F_department);
		
	 if (title || department) { 
	buffer[_i++] = "<div class='contactHeader2'>";
	 if (title) { 
	buffer[_i++] = "<span>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(title) ;
	buffer[_i++] = "</span>";
	 } 
	 if (department) { 
	 if (title) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t&nbsp;&ndash;&nbsp;\n";
	buffer[_i++] = "\t\t\t";
	 } 
	buffer[_i++] = "<span>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(department) ;
	buffer[_i++] = "</span>";
	 } 
	buffer[_i++] = "</div>";
	 } 
	 if (company) {
			var phoneticCompany = isPhonetic && contact.getAttr(ZmContact.F_phoneticCompany);
			var companyHtml = AjxStringUtil.htmlRubyEncode(company, phoneticCompany);
			
	buffer[_i++] = "<div class='contactHeader2'>";
	buffer[_i++] =  companyHtml;
	buffer[_i++] = "</div>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_headerJobInfo"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_dlmember-collapsed", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td ";
	buffer[_i++] =  data.expandTdText ;
	buffer[_i++] = ">";
	buffer[_i++] =  data.html.join("") ;
	buffer[_i++] = "</td><td class=rowLabel>";
	buffer[_i++] =  data.contact.canExpand ? ZmMsg.membersLabel : "" ;
	buffer[_i++] = "</td><td colspan='2' class='rowValue'>";
	buffer[_i++] =  data.value ;
	buffer[_i++] = "</td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_dlmember-collapsed"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_dlmember-expanded", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<td ";
	buffer[_i++] =  data.first ? data.expandTdText : ""  ;
	buffer[_i++] = ">";
	buffer[_i++] =  data.html.join("") ;
	buffer[_i++] = "</td><td class='rowLabel'>";
	buffer[_i++] =  data.first ? ZmMsg.membersLabel : "" ;
	buffer[_i++] = "</td><td colspan='2' class='rowValue'>";
	buffer[_i++] =  data.value ;
	buffer[_i++] = "</td>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_dlmember-expanded"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_address_value", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr valign='top'><td class='rowLabel'><!-- only show the first label visually --><label for='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "' class='";
	buffer[_i++] =  data.first ? "" : "ScreenReaderOnly" ;
	buffer[_i++] = "'>\n";
	buffer[_i++] = "\t\t\t\t";
	buffer[_i++] = data["label"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t</label></td><td id='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "' class='rowValue'>";
	 var address = data.address;
				if (address.Street) { 
	buffer[_i++] = "<div>";
	buffer[_i++] = address.Street;
	buffer[_i++] = "</div>";
	 }
				if (address.City || address.State || address.PostalCode) { 
	buffer[_i++] = "<div><span>";
	buffer[_i++] = address.City;
	buffer[_i++] = "</span>";
	 if (address.City && address.State) { 
	buffer[_i++] = ", ";
	 } 
	buffer[_i++] = "<span>";
	buffer[_i++] = address.State;
	buffer[_i++] = "</span>";
	 if (address.City || address.State) { 
	buffer[_i++] = "&nbsp;";
	 } 
	buffer[_i++] = "<span>";
	buffer[_i++] = address.PostalCode;
	buffer[_i++] = "</span></div>";
	 }
				if (address.Country) { 
	buffer[_i++] = "<div>";
	buffer[_i++] = address.Country;
	buffer[_i++] = "</div>";
	 } 
	buffer[_i++] = "</td><td class='rowType'><label for='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "'>\n";
	buffer[_i++] = "\t\t\t\t&nbsp;";
	buffer[_i++] =  data.type ;
	buffer[_i++] = "</label></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_address_value"
}, false);

AjxTemplate.register("abook.Contacts#SplitView_list_item", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr valign='top'>";
	 if (data.isDL) { 
	buffer[_i++] = "<td><div class='ImgBlank_16'></div></td>";
	 } 
	buffer[_i++] = "<td class='rowLabel' id='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_label'><!-- only show the first label visually --><label for='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_label' class='";
	buffer[_i++] =  data.first ? "" : "ScreenReaderOnly" ;
	buffer[_i++] = "'>\n";
	buffer[_i++] = "\t\t\t";
	buffer[_i++] = data["label"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t</label></td><td id='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_value' ";
	buffer[_i++] =  data.type ? "" : "colspan='2'" ;
	buffer[_i++] = " class='rowValue' aria-labelledby='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_label ";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_type'>";
	buffer[_i++] =  data.value ;
	buffer[_i++] = "</td>";
	 if (data.type) { 
	buffer[_i++] = "<td id='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_type' class='rowType'><label for='";
	buffer[_i++] = data["labelId"];
	buffer[_i++] = "_label'>\n";
	buffer[_i++] = "\t\t\t\t&nbsp;";
	buffer[_i++] = data["type"];
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t</label></td>";
	 } 
	buffer[_i++] = "</tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitView_list_item"
}, false);

AjxTemplate.register("abook.Contacts#SplitViewGroup", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table class='contactContentTable'>";
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#SplitView_header", data) ;
	buffer[_i++] = "</table>";
	 if (data.dlInfo) { 
	buffer[_i++] = "<table role=\"presentation\" class='contactHeaderSubTable NoneBg ZPropertySheet' width='100%' cellspacing='6'><tr><td><ul id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subscriptionMsg' style='margin:.5em 0;padding-left:53px;'></ul></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subscriptionButton'></td></tr></table>";
	 } 
	buffer[_i++] = "<div class='contactGroupList' style='overflow:auto;'>";
	buffer[_i++] =  ZmContactSplitView.showContactGroup(data) ;
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SplitViewGroup"
}, false);

AjxTemplate.register("abook.Contacts#SimpleView-NoResults", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr><td class='NoResults'>";
	buffer[_i++] =  AjxMsg.noResults ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#SimpleView-NoResults"
}, false);

AjxTemplate.register("abook.Contacts#GroupView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table class='ZPropertySheet'>";
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#SplitView_header", data) ;
	buffer[_i++] = "</table>";
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#GroupViewMembers", data) ;

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#GroupView"
}, false);

AjxTemplate.register("abook.Contacts#DlView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table class='ZPropertySheet'>";
	buffer[_i++] =  AjxTemplate.expand('abook.Contacts#SplitView_header', data) ;
	buffer[_i++] = "</table><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabViewContainer'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#DlView"
}, false);

AjxTemplate.register("abook.Contacts#DlPropertiesView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.contact.isDistributionList()) { 
	buffer[_i++] = "<table role=\"presentation\" width='100%' class='ZmEditContactView'><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.displayNameLabel ;
	buffer[_i++] = "</td><td class='rowValue'><div class='DwtInputField'><input type='text' autocomplete='off' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlDisplayName' class='Text' style='width:45em;'></div></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.descriptionLabel ;
	buffer[_i++] = "</td><td class='rowValue'><div class='DwtInputField'><textarea rows='4' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlDesc' style='width:45em;'></textarea></div></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.directoryLabel ;
	buffer[_i++] = "</td><td class='rowValue rowCheckGroup'><input type='checkbox' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlHideInGal'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlHideInGal'>";
	buffer[_i++] =  ZmMsg.hiddenInGlobal ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.mailLabel ;
	buffer[_i++] = "</td><td class='rowValue rowRadioGroup'><input type='radio' name='mailPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicyANYONE'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicyANYONE'>";
	buffer[_i++] =  ZmMsg.mailAnyone ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='mailPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicyMEMBERS'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicyMEMBERS'>";
	buffer[_i++] =  ZmMsg.mailOnlyMembers ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='mailPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicyINTERNAL'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicyINTERNAL'>";
	buffer[_i++] =  ZmMsg.mailOnlyInternal ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='mailPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicySPECIFIC'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlMailPolicySPECIFIC'>";
	buffer[_i++] =  ZmMsg.mailOnlySpecific ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><div class='DwtInputField'><input type='text' autocomplete='off' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlListSpecificMailers' class='Text' style='margin-left:2em;width:43em;'></div></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.newSubscriptionsLabel ;
	buffer[_i++] = "</td><td class='rowValue rowRadioGroup'><input type='radio' name='subscriptionPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlSubscriptionPolicyACCEPT'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlSubscriptionPolicyACCEPT'>";
	buffer[_i++] =  ZmMsg.policyAccept ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='subscriptionPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlSubscriptionPolicyAPPROVAL'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlSubscriptionPolicyAPPROVAL'>";
	buffer[_i++] =  ZmMsg.policyApproval ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='subscriptionPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlSubscriptionPolicyREJECT'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlSubscriptionPolicyREJECT'>";
	buffer[_i++] =  ZmMsg.policyReject ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.unsubscriptionsRequestLabel ;
	buffer[_i++] = "</td><td class='rowValue rowRadioGroup' ><input type='radio' name='unsubscriptionPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlUnsubscriptionPolicyACCEPT'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlUnsubscriptionPolicyACCEPT'>";
	buffer[_i++] =  ZmMsg.policyAccept ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='unsubscriptionPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlUnsubscriptionPolicyAPPROVAL'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlUnsubscriptionPolicyAPPROVAL'>";
	buffer[_i++] =  ZmMsg.policyApproval ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'></td><td class='rowValue'><input type='radio' name='unsubscriptionPolicy' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlUnsubscriptionPolicyREJECT'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlUnsubscriptionPolicyREJECT'>";
	buffer[_i++] =  ZmMsg.policyReject ;
	buffer[_i++] = "</label></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.listOwnersLabel ;
	buffer[_i++] = "</td><td class='rowValue'><div class='DwtInputField'><input type='text' autocomplete='off' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlListOwners' class='Text' style='width:45em;'></div></td></tr><tr><td class='rowLabel'>";
	buffer[_i++] =  ZmMsg.notesLabel ;
	buffer[_i++] = "</td><td class='rowValue'><div class='DwtInputField'><textarea rows='4' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_dlNotes' style='width:45em;'></textarea></div></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#DlPropertiesView"
}, false);

AjxTemplate.register("abook.Contacts#GroupViewMembers", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' height='100%' class='ZPropertySheet' cellspacing='6'><tr><!-- content: left pane --><td width='50%' valign='top'><div class='groupMembers' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_groupMembers'></div></td><!-- content: right pane --><td width='50%' valign='top'><table role=\"presentation\" width='100%'><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchFieldsRow'><td width='50'>&nbsp;</td><td><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'>";
	 if (data.detailed) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchNameRow'><td align='right'>";
	buffer[_i++] =  ZmMsg.nameLabel ;
	buffer[_i++] = "</td><td><input type='text' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchNameField'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton' valign='top' rowspan='3'></td></tr>";
	 if (appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS)) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchPhoneticRow'><td align='right'>";
	buffer[_i++] =  ZmMsg.phoneticNameLabel ;
	buffer[_i++] = "</td><td><input type='text' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchPhoneticField'></td></tr>";
	 } 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchEmailRow'><td align='right'>";
	buffer[_i++] =  ZmMsg.emailAddrLabel ;
	buffer[_i++] = "</td><td><input type='text' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchEmailField'></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchDepartmentRow'><td align='right'>";
	buffer[_i++] =  ZmMsg.departmentLabel ;
	buffer[_i++] = "</td><td><input type='text' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchDepartmentField'></td></tr>";
	 } else { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchRow'><td align='right'>";
	buffer[_i++] =  ZmMsg.findLabel ;
	buffer[_i++] = "</td><td><input type='text' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchField'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton'></td></tr>";
	 } 
	 if (data.showSearchIn) { 
	buffer[_i++] = "<tr><td align='right'>";
	buffer[_i++] =  ZmMsg.searchIn ;
	buffer[_i++] = "</td><td colspan='2' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_listSelect'></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr><tr><td width='50'><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_addButton'></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_addAllButton'></td></tr></table></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_listView'></div><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_navButtonsRow'><td width='100%'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_prevButton'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_nextButton'></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_manualAddRow'><td width='50'><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_addNewButton'></td></tr></table></td><td><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr><td>";
	buffer[_i++] = ZmMsg.enterAddrBelow;
	buffer[_i++] = "</td></tr><tr><td><textarea class='groupMembers' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_addNewField'></textarea></td></tr></table></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#GroupViewMembers"
}, false);

AjxTemplate.register("abook.Contacts#ZmAlphabetBar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<center><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_alphabet' width='80%' class='AlphabetBarTable'' cellspacing='0'><tr>";
	 for (var i = 0; i < data.numLetters; i++) { 
	buffer[_i++] = "<td _idx=\"";
	buffer[_i++] =  i ;
	buffer[_i++] = "\"\trole='button'\n";
	buffer[_i++] = "\t\t\t\t\t\tclass='DwtButton AlphabetBarCell'";
	 if (data.alphabet[i].length > 1) { 
	buffer[_i++] = " colspan='";
	buffer[_i++] =  data.alphabet[i].length/2 + 1 ;
	buffer[_i++] = "' ";
	 } 
	buffer[_i++] = " >";
	buffer[_i++] =  data.alphabet[i] ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "</tr></table></center>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmAlphabetBar"
}, false);

AjxTemplate.register("abook.Contacts#Tooltip", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='250'><tr><td colspan='2' valign='top'><div style='border-bottom:1px solid black;margin-bottom:2px;'><table role=\"presentation\" width='100%'><tr valign='bottom'><td style='font-weight:bold;'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.entryTitle); ;
	buffer[_i++] = "</td><td align='right'>";
	buffer[_i++] =  AjxImg.getImageHtml(data.contact.getIcon()); ;
	buffer[_i++] = "</td></tr></table></div></td></tr>";
	 if (data.contact.isGroup()) {
				var members = data.contact.getGroupMembers().good.getArray();
				for (var i = 0; i < members.length; i++) {
			
	buffer[_i++] = "<tr><td width=20>";
	buffer[_i++] =  AjxImg.getImageHtml("Message") ;
	buffer[_i++] = "</td><td>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(members[i].toString()) ;
	buffer[_i++] = "</td></tr>";
		} 
			} else {
			
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"fullName"}) ;
	 var fields = ZmMsg.contactTooltipWorkInfoOrder.split(",");
				   var i;
				   for (i = 0; i < fields.length; i++) {
				
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:fields[i]}) ;
	
				   }
				
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"mobilePhone"}) ;
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"workPhone"}) ;
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"homePhone"}) ;
	 if (data.contact.isGal) {
					var emails = data.contact.getEmails();
					for (var i = 0; i < emails.length && emails.length <= 3; i++) {
				
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"email", val:emails[i]}) ;
		} 
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"notes", truncate:500}) ;
		} else { 
	buffer[_i++] =  AjxTemplate.expand("abook.Contacts#AddTooltipEntry", {data:data, field:"email", val:data.contact._lookupEmail || data.email}) ;
		} 
		} 
	 if (data.hint) { 
	buffer[_i++] = "<tr><td colspan='2'><div class='TooltipHint'><hr color=black size=1>";
	buffer[_i++] =  data.hint ;
	buffer[_i++] = "</div></td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#Tooltip"
}, false);

AjxTemplate.register("abook.Contacts#TooltipNotInAddrBook", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.hint) { 
	buffer[_i++] = "<table role=\"presentation\" width='250'><tr><td valign='top'>";
	 if (appCtxt.get(ZmSetting.CONTACTS_ENABLED)) { 
	buffer[_i++] = "<div style='border-bottom:1px solid black;'><table role=\"presentation\" width='100%'><tr valign='bottom'><td style='font-weight:bold;'>";
	buffer[_i++] =  ZmMsg.newContact ;
	buffer[_i++] = "</td><td align='right'>";
	buffer[_i++] =  AjxImg.getImageHtml("NewContact"); ;
	buffer[_i++] = "</td></tr></table></div>";
	 } 
	buffer[_i++] = "<div class='TooltipNotInAddrBook'>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.addrstr) ;
	buffer[_i++] = "</div><hr color='black' size='1'><div class='TooltipHint'>";
	buffer[_i++] =  data.hint ;
	buffer[_i++] = "</div></td></tr></table>";
	 } else { 
	buffer[_i++] = "<span style='font-weight:bold;'> ";
	buffer[_i++] =  ZmMsg.emailLabel ;
	buffer[_i++] = " </span>";
	buffer[_i++] =  AjxStringUtil.htmlEncode(data.addrstr) ;
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#TooltipNotInAddrBook"
}, false);

AjxTemplate.register("abook.Contacts#AddTooltipEntry", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.val == null) {
			var isPhonetic = appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS);
			data.val = data.field == "fullName" ? data.data.contact.getFullNameForDisplay(isPhonetic) : data.data.contact.getAttr(data.field);
		} 
	 if (data.val != null && data.val != "") { 
	buffer[_i++] = "<tr valign='top'><td class='ZmTooltipLabel'>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel,
											 AjxStringUtil.htmlEncode(ZmContact._AB_FIELD[data.field])) ;
	buffer[_i++] = "</td>";
	 if (data.truncate) { 
	buffer[_i++] = "<td>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.makeLabel,
											AjxStringUtil.htmlEncode(data.val.substring(0,data.truncate))) ;
	buffer[_i++] = "</td>";
	 } else {
				var field = "";
				if (data.field == "fullName" ) {
					field = isPhonetic ? data.val : AjxStringUtil.htmlEncode(data.val); 
				}
				else {
					field = AjxStringUtil.htmlEncode(data.val);
				}
			
	buffer[_i++] = "<td style='white-space:nowrap;'>";
	buffer[_i++] =  field ;
	buffer[_i++] = "</td>";
	 } 
	buffer[_i++] = "</tr>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#AddTooltipEntry"
}, false);

AjxTemplate.register("abook.Contacts#ZmContactPicker", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZmContactPicker'><table role=\"presentation\" width='100%'><tr><td width='600'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchTable'>";
	 if (data.detailed) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchNameRow'><td align='right'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchNameFieldLbl'>";
	buffer[_i++] =  ZmMsg.nameLabel ;
	buffer[_i++] = "</span></td><td><input type='text' placeholder=\"";
	buffer[_i++] =  ZmMsg.contactPickerHint ;
	buffer[_i++] = "\" autocomplete='off' size='30' nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchNameField' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchNameFieldLbl'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton' rowspan='3' valign='top'></td><td width='20' valign='middle'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchIcon' class='ImgSearch'></div></td></tr>";
	 if (appCtxt.get(ZmSetting.PHONETIC_CONTACT_FIELDS)) { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchPhoneticRow'><td align='right'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchPhoneticNameFieldLbl'>";
	buffer[_i++] =  ZmMsg.phoneticNameLabel ;
	buffer[_i++] = "</span></td><td><input type='text' placeholder=\"";
	buffer[_i++] =  ZmMsg.contactPickerPhoneticHint ;
	buffer[_i++] = "\" autocomplete='off' size='30' nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchPhoneticField' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchPhoneticNameFieldLbl'></td></tr>";
	 } 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchEmailRow'><td align='right'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchEmailFieldLbl'>";
	buffer[_i++] =  ZmMsg.emailAddrLabel ;
	buffer[_i++] = "</span></td><td><input type='text' placeholder=\"";
	buffer[_i++] =  ZmMsg.contactPickerEmailHint ;
	buffer[_i++] = "\"autocomplete='off' size='30' nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchEmailField' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchEmailFieldLbl'></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchDepartmentRow'><td align='right'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchDepartmentFieldLbl'>";
	buffer[_i++] =  ZmMsg.departmentLabel ;
	buffer[_i++] = "</span></td><td><input type='text' placeholder=\"";
	buffer[_i++] =  ZmMsg.contactPickerDepartmentHint ;
	buffer[_i++] = "\" autocomplete='off' size='30' nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchDepartmentField' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchDepartmentFieldLbl'></td></tr>";
	 } else { 
	buffer[_i++] = "<tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchRow'><td><input type='text' placeholder=\"";
	buffer[_i++] =  ZmMsg.contactPickerHint ;
	buffer[_i++] = "\" autocomplete='off' nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchField' style='width:25em;' aria-label='";
	buffer[_i++] = ZmMsg.search;
	buffer[_i++] = "'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton'></td><td width='20' valign='middle'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchIcon' class='ImgSearch'></div></td></tr>";
	 } 
	buffer[_i++] = "</table></td><td align='right' valign='bottom'>";
	 if (data.showSelect) { 
	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='Label nobreak' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_listSelectLbl'>";
	buffer[_i++] =  ZmMsg.showNames ;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_listSelect'></td></tr></table>";
	 } 
	buffer[_i++] = "</td></tr></table><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_chooser'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_paging' style='margin-left:5px;'><table role=\"presentation\" width='100%'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pageLeft'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pageRight' align='right'></td></tr></table></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmContactPicker"
}, false);

AjxTemplate.register("abook.Contacts#ZmContactSearch", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_preamble'></div><table role=\"presentation\" width='100%'><tr><td><table role=\"presentation\"><tr><td width='20' valign='middle'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchIcon' class='ImgSearch'></div></td><td><input type='text' autocomplete='off' size='30' nowrap id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchField'>&nbsp;</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_searchButton'></td></tr></table></td><td align='right'>";
	 if (data.showSelect) { 
	buffer[_i++] = "<table role=\"presentation\"><tr><td class='Label nobreak'>";
	buffer[_i++] =  ZmMsg.showNames ;
	buffer[_i++] = "&nbsp;</td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folders'></td></tr></table>";
	 } 
	buffer[_i++] = "</td></tr></table><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_results' class='contactSearchResultsDiv'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#ZmContactSearch"
}, false);

AjxTemplate.register("abook.Contacts#QuickAddPrompt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] = ZmMsg.firstNameLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FIRST_NAME'></div></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] = ZmMsg.lastNameLabel;
	buffer[_i++] = " </td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LAST_NAME'></div></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] = ZmMsg.emailLabel;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL'></div></td></tr><tr><td class='ZmFieldLabelRight'>";
	buffer[_i++] = ZmMsg.addressBookLabel;
	buffer[_i++] = " </td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADDR_BOOK'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "abook.Contacts#QuickAddPrompt"
}, false);

