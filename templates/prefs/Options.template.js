AjxTemplate.register("prefs.Options#OptionsOuter", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" id='' class='fullSize'><tr><td><ul id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs\" class='ZTabList'><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_general' class='ZTab' onclick='controller.showPage(\"general\")'>General</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_mail' class='ZTab'>Mail</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_identity' class='ZTab' onclick='controller.showPage(\"identity\")'>Mail Identities</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_pop' class='ZTab' onclick='controller.showPage(\"pop\")'>Pop Accounts</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_filters' class='ZTab'>Mail Filters</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_addressBook' class='ZTab'>Address Book</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_calendar' class='ZTab'>Calendar</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_outer_tabs_shortcuts' class='ZTab'>Shortcuts</li></ul></td></tr><tr><td colspan=2 style='padding:0px'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_page_title' class='ZmPanelHead'></div></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_page_container' style='height:100%' valign=top ><!--\t\t<div class='ZScrollContainerOuter'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_page_container' class='ZScrollContainerInner'></div></div>\n";
	buffer[_i++] = "--></td><tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#OptionsOuter"
}, false);
AjxTemplate.register("prefs.Options", AjxTemplate.getTemplate("prefs.Options#OptionsOuter"), AjxTemplate.getParams("prefs.Options#OptionsOuter"));

AjxTemplate.register("prefs.Options#PopForm", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<!--<div class='ZScrollContainerInner'>\t--><table role=\"presentation\" class=\"ZFormTable ZFixedTable\" class=\"ZPropertySheet\" cellspacing=\"6\"><colgroup><col width=30%><col width=70%></colgroup><tr><td><div class='ZSmallSpacer'></div></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.popAccountNameLabel ;
	buffer[_i++] = "</td><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name\" type=text class='ZFieldSizeMedium'></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.popAccountFolderLabel ;
	buffer[_i++] = "</td><td><button id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_location\" type=text  class='DwtButtton' style='width:200px'>Inbox</button></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.popAccountDownloadLabel ;
	buffer[_i++] = "</td><td><select id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_download\" class='ZFieldSizeMedium'><option>";
	buffer[_i++] =  ZmMsg.popAccountDownloadLeave ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.popAccountDownloadRemove ;
	buffer[_i++] = "</option></select></td></tr><tr><td colspan=2><div class=ZLineDivider><span class=ZLineDividerTitle>";
	buffer[_i++] =  ZmMsg.accountSettings ;
	buffer[_i++] = "</span></div></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.popAccountServerLabel ;
	buffer[_i++] = "</td><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_server\" type=text class='ZFieldSizeHusky'></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.usernameLabel ;
	buffer[_i++] = "</td><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_username\" type=text class='ZFieldSizeHusky'></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.passwordLabel ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_password\" type='password' class='ZFieldSizeSmall'></td><td>&nbsp;<input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_show_password' type='checkbox' class='ZCheckbox'></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_show_password' class='ZCheckboxLabelInline'>";
	buffer[_i++] =  ZmMsg.showPassword ;
	buffer[_i++] = "</label></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ssl_row'><td class='ZCheckboxCell'><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ssl\" type=checkbox></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ssl' class='ZCheckboxLabel'>";
	buffer[_i++] =  ZmMsg.popAccountUseSSL ;
	buffer[_i++] = "</label></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_port_row'><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.portLabel ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_port\" type=text style='width:6em'></td><td>&nbsp;<span class='ZHelpLabel' id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_port_label\">";
	buffer[_i++] =  ZmMsg.defaultPort ;
	buffer[_i++] = "</span></td></tr></table></td></tr><tr><td><div class='ZSmallSpacer'></div></td></tr><tr><td></td><td><div class='ZFieldSizeHusky'><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_testButton'>";
	buffer[_i++] =  ZmMsg.popAccountTest ;
	buffer[_i++] = "</button></div></td></tr><tr><td colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_title_row' class=ZLineDivider><span class=ZLineDividerTitle>";
	buffer[_i++] =  ZmMsg.identitiesTab ;
	buffer[_i++] = "</span></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_help_row'><td colspan=2><div class='ZHelpLabelIndent'>";
	buffer[_i++] =  ZmMsg.popAccountIdentityHelp ;
	buffer[_i++] = "<div class='ZSmallSpacer'></div></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_create_row'><td class='ZCheckboxLabelCell' colspan=2 style='padding-left:50px;'><table role=\"presentation\"><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_create_identity\" type=checkbox onchange='pageController.toggleIdentityFields(this.checked)'></td><td width=100%><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_create_identity' class='ZCheckboxLabelInline'>";
	buffer[_i++] =  ZmMsg.popAccountCreateNewIdentity ;
	buffer[_i++] = "</label></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_spacer_row'><td><div class='ZSmallSpacer'></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_name_row'><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.identityNameLabel ;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_name\" class='ZLabelCellLeft'>New Account 1</td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_email_row'><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.emailAddrLabel ;
	buffer[_i++] = "</td><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_email\" type=text  class='ZFieldSizeHusky'></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_use_address_row'><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.linkToNewIdentity ;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_use_address\" type=checkbox></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_use_address\" class='ZCheckboxLabel'>";
	buffer[_i++] =  ZmMsg.whenReplyingToAddress ;
	buffer[_i++] = "</label></td></tr></table></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_use_folder_row'><td></td><td><table role=\"presentation\"><tr><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_use_folder\" type=checkbox></td><td><label for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_identity_use_folder\" class='ZCheckboxLabel'>";
	buffer[_i++] =  ZmMsg.whenReplyingToFolder ;
	buffer[_i++] = "</label></td></tr></table></td></tr><tr><td><div class='ZSmallSpacer'></div></td></tr></table></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#PopForm"
}, false);

AjxTemplate.register("prefs.Options#IdentityForm", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class=\"ZFormTable ZFixedTable ZPropertySheet\" cellspacing=\"6\" style='height:100%'><colgroup><col width=103><col width='100%'></colgroup><tr><td><div class='ZSmallSpacer'></div></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.identityNameLabel ;
	buffer[_i++] = "</td><td><input id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name\" type=text class='ZFieldSizeMedium'></td></tr><tr><td><div class='ZSmallSpacer'></div></td></tr><tr><td colspan=2><ul id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabs\" class='ZTabList'><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabs_options' class='ZTab' onclick='pageController.showPage(\"options\")'>Identity Options</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabs_signature' class='ZTab' onclick='pageController.showPage(\"signature\")'>Signature</li><li id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabs_advanced' class='ZTab' onclick='pageController.showPage(\"advanced\")'>Advanced</li></ul></td></tr><tr><td style='height:100%' valign=top colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_subFormContainer' style='width:95%;position:relative;'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#IdentityForm"
}, false);

AjxTemplate.register("prefs.Options#IdentityForm_options", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<fieldset class='ZFieldset' style='width:auto'><legend class='ZLegend'>";
	buffer[_i++] =  ZmMsg.sendWithIdentity ;
	buffer[_i++] = "</legend><table role=\"presentation\" class='ZFormTable XZFixedTable ZPropertySheet' cellspacing='6' width='99%'><colgroup><col width=20><col width=60><col width='50%'><col width='50%'></colgroup><tr><td class='ZLabelCell' colspan=2>";
	buffer[_i++] =  ZmMsg.sendFrom ;
	buffer[_i++] = "</td><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendFromName' style='width:100%'></td><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendFromAddress' style='width:90%'><option>bob@zimbra.com</option></select></td></tr><tr><td class='ZCheckboxCell'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_setReplyToCheckbox' type='checkbox'></td><td class='ZCheckboxLabelCell'><span style='white-space:nowrap'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_setReplyToCheckbox'>";
	buffer[_i++] =  ZmMsg.setReplyTo ;
	buffer[_i++] = "</label></span></td><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_setReplyToName' style='width:100%'></td><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_setReplyToAddress' style='width:90%'><option>bob@zimbra.com</option></select></td></tr></table></fieldset>";
	 if (AjxEnv.isIE) { 
	buffer[_i++] = "<br>";
	 } 
	buffer[_i++] = "<fieldset class='ZFieldset' style='width:auto'><legend class='ZLegend'>";
	buffer[_i++] =  ZmMsg.selectIdentityWhen ;
	buffer[_i++] = "</legend><table role=\"presentation\" class='ZFormTable ZFixedTable ZPropertySheet' cellspacing='6' width='99%'><colgroup><col width=20><col width='100%'><col width=40></colgroup><tr><td class='ZCheckboxCell'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenSentToCheckbox' type='checkbox'></td><td class='ZCheckboxLabelCell'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenSentToCheckbox'>";
	buffer[_i++] =  ZmMsg.whenSentTo ;
	buffer[_i++] = "</label></td></tr><tr><td></td><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenSentToInput' style='width:100%'></td></tr><tr><td></td><td class='ZHelpLabel'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenSentToInput'>";
	buffer[_i++] =  ZmMsg.enterEmailAddresses ;
	buffer[_i++] = "</label></td></tr><tr><td><div class='ZSmallSpacer'></div></td></tr><tr><td class='ZCheckboxCell'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenInFolderCheckbox' type='checkbox'></td><td class='ZCheckboxLabelCell'><label for=";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenInFolderCheckbox'>";
	buffer[_i++] =  ZmMsg.whenInFolder ;
	buffer[_i++] = "</label></td></tr><tr><td></td><td><table role=\"presentation\" style='width:100%'><tr><td style='width:100%'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_whenInFolderInput' style='width:100%'></td><td style='padding-left:10px;'><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderBrowseButton' style='width:30px'><div class='ImgFolder'></div></button></td></tr></table></td></tr><tr><td></td><td class='ZHelpLabel'>";
	buffer[_i++] =  ZmMsg.whenInFolderHint ;
	buffer[_i++] = "</td></tr></table></fieldset>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#IdentityForm_options"
}, false);

AjxTemplate.register("prefs.Options#IdentityForm_signature", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZFormTable ZFixedTable ZPropertySheet' cellspacing='6' style='width:95%;'><colgroup><col width=103><col width='100%'><col width=20></colgroup><tr><td><div class='ZSmallSpacer'></div></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.placeSignature ;
	buffer[_i++] = "</td><td colspan=2><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_signatureStyleSelect'><option>";
	buffer[_i++] =  ZmMsg.aboveQuotedText ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.atBottomOfMessage ;
	buffer[_i++] = "</option></select></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.applySignature ;
	buffer[_i++] = "</td><td colspan=2><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_signatureEnabledSelect'><option>";
	buffer[_i++] =  ZmMsg.automaticSignature ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.manualSignature ;
	buffer[_i++] = "</option></select></td></tr><tr><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.mailSignature ;
	buffer[_i++] = "</td><td><textarea id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_signature' style='width:100%;height:120px'></textarea></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#IdentityForm_signature"
}, false);

AjxTemplate.register("prefs.Options#IdentityForm_advanced", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZFormTable ZFixedTable ZPropertySheet' cellspacing='6' width='99%'><colgroup><col width='200'><col width='100%'</colgroup><tr><td><div class='ZSmallSpacer'></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_useDefaultsRadios'><td class='ZLabelCell'>";
	buffer[_i++] =  ZmMsg.replyWithIdentity ;
	buffer[_i++] = "</td><td style='padding:0px'><table role=\"presentation\"><tr><td class='ZCheckboxCell'><input  name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_group' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_useDefaultsCheckbox_default' class='ZRadioButton' type='radio' onclick='";
	buffer[_i++] = data["controller"];
	buffer[_i++] = "._toggleAdvancedSettings(false)'></td><td class='ZCheckboxLabelCell' colspan='2'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_useDefaultsCheckbox_default' class='ZCheckboxLabel'>";
	buffer[_i++] =  ZmMsg.identitiesUseDefault ;
	buffer[_i++] = "</label></td></tr><tr><td class='ZCheckboxCell'><input  name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_group' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_useDefaultsCheckbox_custom' class='ZRadioButton' type='radio' onclick='";
	buffer[_i++] = data["controller"];
	buffer[_i++] = "._toggleAdvancedSettings(true)'></td><td class='ZCheckboxLabelCell' colspan='2'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_useDefaultsCheckbox_custom' class='ZCheckboxLabel'>";
	buffer[_i++] =  ZmMsg.customizeSettings ;
	buffer[_i++] = "</label></td></tr></table></td></tr><tr><td><div class='ZSmallSpacer'></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyForwardSelect_row'><td class='ZLabelCell' ><label id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyForwardSelect_label' for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyForwardSelect'>";
	buffer[_i++] =  ZmMsg.replyForwardFormat ;
	buffer[_i++] = "</label></td><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyForwardSelect' class='ZFieldSizeLarge'><option>";
	buffer[_i++] =  ZmMsg.originalFormat ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.text ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.htmlDocument ;
	buffer[_i++] = "</option></select></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyIncludeSelect_row'><td class='ZLabelCell' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyIncludeSelect_label' >";
	buffer[_i++] =  ZmMsg.replyInclude ;
	buffer[_i++] = "</td><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_replyIncludeSelect' class='ZFieldSizeLarge'><option>";
	buffer[_i++] =  ZmMsg.dontIncludeMessage ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.includeInBody ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.includePrefix ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.includeOriginalAsAttach ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.smartInclude ;
	buffer[_i++] = "</option></select></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_forwardIncludeSelect_row'><td class='ZLabelCell' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_forwardIncludeSelect_label' >";
	buffer[_i++] =  ZmMsg.forwardInclude ;
	buffer[_i++] = "</td><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_forwardIncludeSelect' class='ZFieldSizeLarge'><option>";
	buffer[_i++] =  ZmMsg.includeOriginalInBody ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.includePrefix ;
	buffer[_i++] = "</option><option>";
	buffer[_i++] =  ZmMsg.includeOriginalAsAttach ;
	buffer[_i++] = "</option></select></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_prefixSelect_row'><td class='ZLabelCell' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_prefixSelect_label' >";
	buffer[_i++] =  ZmMsg.prefixTextWith ;
	buffer[_i++] = "</td><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_prefixSelect' class='ZFieldSizeSmall'><option>&gt;</option><option>|</option></select></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#IdentityForm_advanced"
}, false);

AjxTemplate.register("prefs.Options#GeneralForm", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "General Options";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Options#GeneralForm"
}, false);

