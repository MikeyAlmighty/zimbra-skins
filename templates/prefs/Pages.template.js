AjxTemplate.register("prefs.Pages#General", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.loginOptions;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (!appCtxt.isOffline) { 
	 if (data.isEnabled(ZmSetting.CHANGE_PASSWORD_ENABLED)) { 
	buffer[_i++] = "<tr id='prefs.Pages#General_PASSWORD_LABEL'><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.password;
	buffer[_i++] = ":</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PASSWORD' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.loginLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CLIENT_TYPE' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.appearance;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (data.isEnabled(ZmSetting.SKIN_CHANGE_ENABLED) && appCtxt.get(ZmSetting.AVAILABLE_SKINS).length > 1) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.themeLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SKIN_NAME' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.fontLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FONT_NAME' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.fontSizeLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FONT_SIZE' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.printFontSizeLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEFAULT_PRINTFONTSIZE' tabindex=0></select></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.timezoneLanguage;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.defaultTimezone;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEFAULT_TIMEZONE' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.languageLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LOCALE_NAME' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.composeDirectionLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tbody><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPOSE_INIT_DIRECTION' tabindex=0></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHOW_COMPOSE_DIRECTION_BUTTONS' tabindex=0></div></td></tr></tbody></table></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.searchOptions;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (data.isEnabled(ZmSetting.SEARCH_INCLUDES_SPAM, ZmSetting.SEARCH_INCLUDES_TRASH, ZmSetting.SHARING_ENABLED)) {
							var labelShown = false;
						
	 if (data.isEnabled(ZmSetting.SEARCH_INCLUDES_SPAM)) { 
	buffer[_i++] = "<tr>";
	 var settingsLabel = labelShown ? "&nbsp;" : ZmMsg.searchSettingsLabel; labelShown = true; 
	buffer[_i++] = "<td class='ZOptionsLabel'>";
	buffer[_i++] = settingsLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SEARCH_INCLUDES_SPAM' tabindex=0></div></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.SEARCH_INCLUDES_TRASH)) { 
	buffer[_i++] = "<tr>";
	 var settingsLabel = labelShown ? "&nbsp;" : ZmMsg.searchSettingsLabel; labelShown = true; 
	buffer[_i++] = "<td class='ZOptionsLabel'>";
	buffer[_i++] = settingsLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SEARCH_INCLUDES_TRASH' tabindex=0></div></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.SHARING_ENABLED)) { 
	buffer[_i++] = "<tr>";
	 var settingsLabel = labelShown ? "&nbsp;" : ZmMsg.searchSettingsLabel; labelShown = true; 
	buffer[_i++] = "<td class='ZOptionsLabel'>";
	buffer[_i++] = settingsLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SEARCH_INCLUDES_SHARED' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.searchLanguageLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHOW_SEARCH_STRING' tabindex=0></div></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.otherSettings;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.selectionLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHOW_SELECTION_CHECKBOX' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.emailAddrs;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHORT_ADDRESS' tabindex=0></div></td></tr><!-- The following 3 items are specific to Zimbra Desktop -->";
	 if (appCtxt.isOffline) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.offlineUpdateNotifyLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_UPDATE_NOTIFY' tabindex=0></select></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.OFFLINE_SUPPORTS_MAILTO)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.systemDefaults;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_IS_MAILTO_HANDLER' tabindex=0></div></td></tr>";
	 } 
	 if (appCtxt.isOffline && appCtxt.accountList.size() > 2) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'></td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_SHOW_ALL_MAILBOXES' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#General"
}, false);
AjxTemplate.register("prefs.Pages", AjxTemplate.getTemplate("prefs.Pages#General"), AjxTemplate.getParams("prefs.Pages#General"));

AjxTemplate.register("prefs.Pages#Mail", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (!appCtxt.multiAccounts || data.activeAccount.isMain) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.displayMessages;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (!appCtxt.isOffline && data.isEnabled(ZmSetting.POLLING_INTERVAL_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.pollingIntervalLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_POLLING_INTERVAL' tabindex=0 size='3' /></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.displayMail;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VIEW_AS_HTML' tabindex=0></div></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.messagePreviewLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHOW_FRAGMENTS' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'></td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OPEN_MAIL_IN_NEW_WIN' tabindex=0></div></tZmd></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.imagesLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DISPLAY_EXTERNAL_IMAGES' tabindex=0></div></td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.messageReadLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MARK_MSG_READ' tabindex=0></div></td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.selectAfterDeleteLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SELECT_AFTER_DELETE' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.messageColorLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COLOR_MESSAGES' tabindex=0></div></td></tr>";
	 if (!appCtxt.isOffline) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.initialMailSearchLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_INITIAL_SEARCH' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr></table>";
	 } 
	
			if (appCtxt.isOffline && data.activeAccount == appCtxt.accountList.defaultAccount) {
				var size = appCtxt.accountList.size();
				if ((size > 2 && !appCtxt.get(ZmSetting.OFFLINE_SHOW_ALL_MAILBOXES)) || size == 2) {
		
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.displayMessages;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.initialMailSearchLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_INITIAL_SEARCH' tabindex=0></div></td></tr></table></td></tr></table>";
	 } 
	 } 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.messagesReceiving;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'>";
	
						var messageArrivalLabelDisplayed = false;
						var showMessageArrivalLabel = function() {
							var ret = messageArrivalLabelDisplayed ? "&nbsp;" : ZmMsg.messageArrivalLabel;
							messageArrivalLabelDisplayed = true;
							return ret;
						};
					
	buffer[_i++] = "<table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 if (!appCtxt.multiAccounts || appCtxt.isFamilyMbox || (!data.activeAccount.isMain && data.activeAccount.isZimbraAccount)) { 
	 if (appCtxt.get(ZmSetting.MAIL_FORWARDING_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = showMessageArrivalLabel() ;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.forwardCopyTo;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_FORWARDING_ADDRESS' tabindex=0 /></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_LOCAL_DELIVERY_DISABLED' tabindex=0></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.NOTIF_FEATURE_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = showMessageArrivalLabel() ;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] =  ZmMsg.mailNotifEnabled ;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NOTIF_ADDRESS' tabindex=0 /></td></tr>";
	 } 
	 } 
	 if (messageArrivalLabelDisplayed) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr>";
	 } 
	
							var messageNotificationLabelDisplayed = false;
							var showMessageNotificationLabel = function() {
								var ret = messageNotificationLabelDisplayed ? "&nbsp;" : ZmMsg.messageNotificationLabel;
								messageNotificationLabelDisplayed = true;
								return ret;
							};
						
	 if (!appCtxt.multiAccounts || appCtxt.isFamilyMbox || (!data.activeAccount.isMain && data.activeAccount.isZimbraAccount)) { 
	 if (data.isEnabled(ZmSetting.MAIL_NOTIFY_TOASTER)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = showMessageNotificationLabel() ;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_NOTIFY_TOASTER' tabindex=0></div></td></tr></table></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.MAIL_NOTIFY_APP)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = showMessageNotificationLabel() ;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_NOTIFY_APP' tabindex=0 type=checkbox /></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.MAIL_NOTIFY_BROWSER)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = showMessageNotificationLabel() ;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_NOTIFY_BROWSER' tabindex=0 type=checkbox /></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.MAIL_NOTIFY_SOUNDS)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = showMessageNotificationLabel() ;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_NOTIFY_SOUNDS' tabindex=0 type=checkbox /></td></tr>";
	 } 
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] =  ZmMsg.messageNotificationFoldersLabel ;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_NOTIFY_ALL' tabindex=0 /></td></tr>";
	 if (!appCtxt.multiAccounts || appCtxt.isFamilyMbox || (!data.activeAccount.isMain && data.activeAccount.isZimbraAccount)) { 
	 if (data.isEnabled(ZmSetting.MAIL_READ_RECEIPT_ENABLED)) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.readReceipt;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.readReceiptPref;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_SEND_READ_RECEIPTS' tabindex=0></div></td></tr><tr><td colspan=2><hr></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.removeDupesToSelfLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.removeDupesToSelf;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEDUPE_MSG_TO_SELF' tabindex=0></div></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.duplicateMessageLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEDUPE_MSG_ENABLED' tabindex=0 type=checkbox /></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.composingMessages;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 var isHtmlCompose = data.isEnabled(ZmSetting.HTML_COMPOSE_ENABLED); 
	 if (isHtmlCompose) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabelTop' valign=top>";
	buffer[_i++] = ZmMsg.composeLabel;
	buffer[_i++] = "</td><td class='ZOptionsNestedTable'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><colgroup><col width=1><col width=1><col> <!-- family --><col width=1><col> <!-- size --><col width=1><col> <!-- color --></colgroup><tr valign=top><td class='ZOptionsFieldTop' style=\"white-space:nowrap\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPOSE_AS_FORMAT' tabindex=0></div></td><td class='ZOptionsLabelTop ZOptionsLabelNarrow'>";
	buffer[_i++] = ZmMsg.fFamilyLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPOSE_INIT_FONT_FAMILY' tabindex=0></select></td><td class='ZOptionsLabelTop ZOptionsLabelNarrow'>";
	buffer[_i++] = ZmMsg.fSizeLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPOSE_INIT_FONT_SIZE' tabindex=0></select></td><td class='ZOptionsLabelTop ZOptionsLabelNarrow'>";
	buffer[_i++] = ZmMsg.fColorLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPOSE_INIT_FONT_COLOR' tabindex=0></select></td></tr></table></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel' valign=top>";
	buffer[_i++] = ZmMsg.settingsLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AUTO_SAVE_DRAFT_INTERVAL' tabindex=0 /></td></tr>";
	 if (isHtmlCompose) { 
	buffer[_i++] = "<tr><td>&nbsp;</td><td class='ZOptionsField'><div type=checkbox id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_COMPOSE_SAME_FORMAT\" /></td></tr>";
	 } 
	 var isNewWindow = data.isEnabled(ZmSetting.NEW_WINDOW_COMPOSE); 
	 if (isNewWindow) { 
	buffer[_i++] = "<tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NEW_WINDOW_COMPOSE' tabindex=0 /></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.SAVE_TO_SENT)) { 
	buffer[_i++] = "<tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SAVE_TO_SENT' tabindex=0 /></td></tr>";
	 } 
	buffer[_i++] = "<tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AUTO_READ_RECEIPT_ENABLED' tabindex=0 /></td></tr>";
	 if (appCtxt.get(ZmSetting.SPELL_CHECK_ENABLED)) { 
	buffer[_i++] = "<tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_MANDATORY_SPELLCHECK' tabindex=0 /></td></tr>";
	 } 
	buffer[_i++] = "<tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_USE_SEND_MSG_SHORTCUT' tabindex=0 /></td></tr><tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TAB_IN_EDITOR' tabindex=0 /></td></tr>";
	 if (data.isEnabled(ZmSetting.MAIL_ENABLED) || data.isEnabled(ZmSetting.ADMIN_DELEGATED)) { 
	 if (isHtmlCompose || isNewWindow ) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.composeReplyLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REPLY_INCLUDE_WHAT' tabindex=0 /></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REPLY_USE_PREFIX' tabindex=0 /></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REPLY_INCLUDE_HEADERS' tabindex=0 /></td></tr></table></td></tr><tr><td colspan=2></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.forwardingLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FORWARD_INCLUDE_WHAT' tabindex=0 /></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FORWARD_USE_PREFIX' tabindex=0 /></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FORWARD_INCLUDE_HEADERS' tabindex=0 /></td></tr></table></td></tr><tr><td colspan=2></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.prefixLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.prefixTextWith;
	buffer[_i++] = "</td></tr><tr><td>&nbsp;</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REPLY_PREFIX' tabindex=0 /></td></tr><tr><td>&nbsp;</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.prefixNote;
	buffer[_i++] = "</td></tr>";
	 } 
	 if (!appCtxt.isOffline) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_compose_more' colspan=2><b>";
	buffer[_i++] = ZmMsg.composeMoreOptions;
	buffer[_i++] = "</b></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr></table>";
	 if (!appCtxt.multiAccounts || appCtxt.isFamilyMbox || (!data.activeAccount.isMain && data.activeAccount.isZimbraAccount)) { 
	 if (appCtxt.get(ZmSetting.MAIL_BLACKLIST_MAX_NUM_ENTRIES) > 0 || appCtxt.get(ZmSetting.MAIL_WHITELIST_MAX_NUM_ENTRIES) > 0) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.junkMailOptions;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td class='ZOptionsLabel' style='text-align:left'>";
	buffer[_i++] = ZmMsg.blackListLabel;
	buffer[_i++] = "</td><td class='ZOptionsLabel' style='text-align:left'>";
	buffer[_i++] = ZmMsg.whiteListLabel;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_BLACKLIST'></div></td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MAIL_WHITELIST'></div></td></tr></table></td></tr></table>";
	 } 
	 } 
	 if (data.isEnabled(ZmSetting.POP_ENABLED)) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.externalAccess;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.externalAccessPop;
	buffer[_i++] = "</td><td></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.downloadPop;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_POP_DOWNLOAD_SINCE' tabindex=0></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_POP_DOWNLOAD_SINCE_VALUE'></div></td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.incomingPOPJunk;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_POP_INCLUDE_SPAM' tabindex=0></div></td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.incomingPOPDeleted;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_POP_DELETE_OPTION' tabindex=0></div></td></tr></table></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Mail"
}, false);

AjxTemplate.register("prefs.Pages#BlackList", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL_ADDRESS' tabindex=0></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_BUTTON' valign=top tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LISTVIEW' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REMOVE_BUTTON' valign=top tabindex=0></td></tr></table><div class='ZOptionsInfo' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NUM_USED'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#BlackList"
}, false);

AjxTemplate.register("prefs.Pages#WhiteList", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL_ADDRESS' tabindex=0></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_BUTTON' valign=top tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LISTVIEW' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REMOVE_BUTTON' valign=top tabindex=0></td></tr></table><div class='ZOptionsInfo' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NUM_USED'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#WhiteList"
}, false);

AjxTemplate.register("prefs.Pages#TrustedList", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL_ADDRESS' tabindex=0></div></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_BUTTON' valign=top tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_LISTVIEW' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REMOVE_BUTTON' valign=top tabindex=0></td></tr></table><div class='ZOptionsInfo' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NUM_USED'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#TrustedList"
}, false);

AjxTemplate.register("prefs.Pages#Trusted", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.trustedAddrsDomains;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><div>";
	buffer[_i++] = ZmMsg.trustedAddrHeaderMsg;
	buffer[_i++] = "</div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TRUSTED_ADDR_LIST' tabindex=0 /></td></td></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Trusted"
}, false);

AjxTemplate.register("prefs.Pages#Chat", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.chatOptions;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.chatFeatureStatus;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CHAT_ENABLED' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.chatNotifications;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CHAT_PLAY_SOUND' tabindex=0 type=checkbox></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Chat"
}, false);

AjxTemplate.register("prefs.Pages#Signatures", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.signatures;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIGNATURES' tabindex=0></div></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.signaturesUsing;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_TABLE' class='ZPropertySheet' cellspacing='6'><tr><td>&nbsp;</td><td>";
	buffer[_i++] = ZmMsg.newMessages;
	buffer[_i++] = "</td><td>";
	buffer[_i++] = ZmMsg.repliesForwards;
	buffer[_i++] = "</td></tr></table><hr><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.placeSignature;
	buffer[_i++] = "</td><td class='ZOptionsInfo'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIGNATURE_STYLE' tabindex=0></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Signatures"
}, false);

AjxTemplate.register("prefs.Pages#SignatureSplitView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%'><tr><td>&nbsp;</td><td><table role=\"presentation\" width=\"100%\"><tr><td class=\"Label\">";
	buffer[_i++] = ZmMsg.nameLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_NAME' tabindex=0 size=30></td><td width=\"100%\">&nbsp;</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_FORMAT' tabindex=0></div></td></tr></table></td></tr><tr><td width=180 height=200 valign='top'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_LIST' width='100%' tabindex=0></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_EDITOR' tabindex=0></div></td></tr><tr><td><table role=\"presentation\"><tr><td class=\"ZOptionsField\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_NEW' tabindex=0></div></td><td class='ZOptionsField'>&nbsp;</td><td class=\"ZOptionsField\" align='right'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_DELETE' tabindex=0></div></td></tr></table></td><td align='right'><table role=\"presentation\"><tr><td class=\"Label\">";
	buffer[_i++] = ZmMsg.signatureVcardLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_VCARD' tabindex=0 size=30></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_VCARD_BROWSE' style='padding-right:5px; padding-left:5px;' tabindex=0></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SIG_VCARD_CLEAR' tabindex=0></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#SignatureSplitView"
}, false);

AjxTemplate.register("prefs.Pages#Contacts", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.activeAccount.isMain) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.options;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'>";
	 var settingLabelled = false; 
	 if (!appCtxt.multiAccounts || data.activeAccount.isMain) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] =  settingLabelled ? "&nbsp;" : ZmMsg.settingsLabel; ;
	  settingLabelled = true; 
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AUTO_ADD_ADDRESS' tabindex=0 type=checkbox></td></tr>";
	 } 
	 if (!appCtxt.multiAccounts || (appCtxt.isFamilyMbox && data.activeAccount.isMain) || (!data.activeAccount.isMain && data.activeAccount.isZimbraAccount)) { 
	 if (data.isEnabled(ZmSetting.INITIALLY_SEARCH_GAL)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] =  settingLabelled ? "&nbsp;" : ZmMsg.settingsLabel; ;
	  settingLabelled = true; 
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_INITIALLY_SEARCH_GAL' tabindex=0 type=checkbox></td></tr>";
	 } 
	 } 
	 if (settingLabelled) { 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr>";
	 } 
	 var autocompleteLabelled = false; 
	 var autocompleteLabel = ZmMsg.autocomplete + ":"; 
	 if (!appCtxt.multiAccounts || (appCtxt.isFamilyMbox && data.activeAccount.isMain) || !data.activeAccount.isMain) {
	 if (appCtxt.isOffline && !data.activeAccount.isMain) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] =  autocompleteLabelled ? "&nbsp;" : autocompleteLabel; ;
	  autocompleteLabelled = true; 
	buffer[_i++] = "</td>";
	 var autocompleteLabelled = true; 
	buffer[_i++] = "<td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AUTOCOMPLETE_SHARE' tabindex=0 type=checkbox></td></tr>";
	 } 
	 if (data.activeAccount.isZimbraAccount) { 
	 if (data.isEnabled(ZmSetting.GAL_ENABLED) && data.isEnabled(ZmSetting.GAL_AUTOCOMPLETE_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] =  autocompleteLabelled ? "&nbsp;" : autocompleteLabel; ;
	  autocompleteLabelled = true; 
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_GAL_AUTOCOMPLETE' tabindex=0 type=checkbox></td></tr>";
	 } 
	 if (data.isEnabled(ZmSetting.SHARING_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] =  autocompleteLabelled ? "&nbsp;" : autocompleteLabel; ;
	  autocompleteLabelled = true; 
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AUTOCOMPLETE_SHARED_ADDR_BOOKS' tabindex=0></div></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] =  autocompleteLabelled ? "&nbsp;" : autocompleteLabel; ;
	  autocompleteLabelled = true; 
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_AUTOCOMPLETE_ON_COMMA' tabindex=0></div></td></tr>";
	 } 
	 } 
	buffer[_i++] = "</table></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Contacts"
}, false);

AjxTemplate.register("prefs.Pages#Accounts", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.accounts;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ACCOUNTS' tabindex=0></div></td></tr><tr><td colspan=\"10\"><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing='6' width=100%><tr>";
	 if (!appCtxt.isOffline && (data.isEnabled(ZmSetting.POP_ACCOUNTS_ENABLED) || data.isEnabled(ZmSetting.IMAP_ACCOUNTS_ENABLED))) { 
	buffer[_i++] = "<td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_EXTERNAL' tabindex=0>";
	buffer[_i++] = ZmMsg.addExternalAccount;
	buffer[_i++] = "</button> </td>";
	 } 
	 if (data.isEnabled(ZmSetting.IDENTITIES_ENABLED)) { 
	buffer[_i++] = "<td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_PERSONA' tabindex=0>";
	buffer[_i++] = ZmMsg.addPersona;
	buffer[_i++] = "</button> </td>";
	 } 
	buffer[_i++] = "<td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DELETE' tabindex=0>";
	buffer[_i++] = ZmMsg.del;
	buffer[_i++] = "</button></td><td width=\"100%\"></td></tr></table></td></tr></table></td></tr></table><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY\" class='ZAccountSettings'>";
	buffer[_i++] =  AjxTemplate.expand("#PrimaryAccount", data) ;
	buffer[_i++] = "</div>";
	 if (data.isEnabled(ZmSetting.POP_ACCOUNTS_ENABLED) || data.isEnabled(ZmSetting.IMAP_ACCOUNTS_ENABLED)) { 
	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL\" class='ZAccountSettings' style='display:none;'>";
	buffer[_i++] =  AjxTemplate.expand("#ExternalAccount", data) ;
	buffer[_i++] = "</div>";
	
				var providers = ZmDataSource.getProviders();
				for (var pid in providers) {
					if (!AjxTemplate.getTemplate("prefs.Pages#ExternalAccount-"+pid)) { continue; }
			
	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_";
	buffer[_i++] = pid;
	buffer[_i++] = "\" class='ZAccountSettings' style='display:none;'>";
	buffer[_i++] =  AjxTemplate.expand("#ExternalAccount-"+pid, data) ;
	buffer[_i++] = "</div>";
	 } 
	 } 
	 if (data.isEnabled(ZmSetting.IDENTITIES_ENABLED)) { 
	buffer[_i++] = "<div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA\" class='ZAccountSettings' style='display:none;'>";
	buffer[_i++] =  AjxTemplate.expand("#Persona", data) ;
	buffer[_i++] = "</div>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Accounts"
}, false);

AjxTemplate.register("prefs.Pages#PrimaryAccount", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.accountHeaderPrimary;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.emailAddrLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_EMAIL' tabindex=0></span></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountNameLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_NAME' tabindex=0></td></tr>";
	 if (appCtxt.isFamilyMbox) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.isVisible;
	buffer[_i++] = ":</td><td class='ZOptionsField'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_VISIBLE' tabindex=0></span></td></tr>";
	 } 
	buffer[_i++] = "<tr><td colspan=2><hr></td></tr><tr><td style='text-align:left' colspan=2><b>";
	buffer[_i++] = ZmMsg.accountFromPrompt;
	buffer[_i++] = "</b></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.fromLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.fromDetail;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr>";
	 if (appCtxt.get(ZmSetting.FROM_DISPLAY_ENABLED)) { 
	buffer[_i++] = "<td style='padding-right:.5em;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_FROM_NAME' tabindex=0 size=30></td>";
	 } 
	buffer[_i++] = "<td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_FROM_EMAIL' tabindex=0 size=40></select></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.setReplyTo;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_REPLY_TO' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr><td style='padding-right:.5em;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_REPLY_TO_NAME' tabindex=0 size=30></td><td class='ZmSelector'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PRIMARY_REPLY_TO_EMAIL' tabindex=0></select></td></tr></table></td></tr><tr valign=top><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.signatureLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'>";
	buffer[_i++] = ZmMsg.manageSignatures;
	buffer[_i++] = "</td></tr><tr><td colspan=2><hr></td></tr>";
	 if (appCtxt.get(ZmSetting.TWO_FACTOR_AUTH_AVAILABLE)) { 
	buffer[_i++] = "<tr valign=top><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.twoStepAccountSecurity;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TWO_STEP_AUTH'>";
	 if (appCtxt.get(ZmSetting.TWO_FACTOR_AUTH_ENABLED)) { 
	buffer[_i++] = ZmMsg.twoStepAuth;
	 } 
	 else { 
	buffer[_i++] = ZmMsg.twoStepStandardAuth;
	 } 
	buffer[_i++] = "</span>";
	 if (!appCtxt.get(ZmSetting.TWO_FACTOR_AUTH_REQUIRED)) { 
	buffer[_i++] = "<a style=\"margin:20px;\" href=\"#\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TWO_STEP_AUTH_LINK'>";
	 if (appCtxt.get(ZmSetting.TWO_FACTOR_AUTH_ENABLED)) { 
	buffer[_i++] = ZmMsg.twoStepAuthDisableLink;
	 } 
	 else { 
	buffer[_i++] = ZmMsg.twoStepAuthSetupLink;
	 } 
	buffer[_i++] = "</a>";
	 } 
	buffer[_i++] = "</td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TWO_STEP_AUTH_CODES_CONTAINER' valign=top\n";
	buffer[_i++] = "\t\t\t\t\t\t\t";
	 if (!appCtxt.get(ZmSetting.TWO_FACTOR_AUTH_ENABLED)) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t\t\t\tstyle=\"display:none;\"\n";
	buffer[_i++] = "\t\t\t\t\t\t\t";
	 } 
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t\t\t><td colspan=2><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.twoStepAuthOneTimeCodes;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TWO_STEP_AUTH_CODES'></span><a href=\"#\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TWO_STEP_AUTH_CODES_VIEW_LINK' style=\"margin:10px;display:none;\">";
	buffer[_i++] = ZmMsg.view;
	buffer[_i++] = "</a><a href=\"#\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TWO_STEP_AUTH_CODES_GENERATE_LINK' style=\"margin:10px;display:none;\">";
	buffer[_i++] = ZmMsg.twoStepAuthOneTimeCodesGenerate;
	buffer[_i++] = "</a></td></tr>";
	 if (appCtxt.get(ZmSetting.TRUSTED_DEVICES_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.trustedDevices;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TRUSTED_DEVICES_COUNT'></span><a href=\"#\" class=\"ZmLinkDisabled\" style=\"margin:10px;\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TRUSTED_DEVICE_REVOKE_LINK'>";
	buffer[_i++] = ZmMsg.trustedDevicesRevoke;
	buffer[_i++] = "</a><a href=\"#\" class=\"ZmLinkDisabled\" style=\"margin:10px;\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TRUSTED_DEVICES_REVOKE_ALL_LINK'>";
	buffer[_i++] = ZmMsg.trustedDevicesRevokeAll;
	buffer[_i++] = "</a></td></tr>";
	 } 
	 if (appCtxt.get(ZmSetting.APP_PASSWORDS_ENABLED)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.twoStepAuthApplications;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'>";
	buffer[_i++] = ZmMsg.twoStepAuthApplicationsDesc;
	buffer[_i++] = "</td></tr><tr><td></td><td><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td colspan='4'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_APPLICATION_CODES'></div></td></tr></table></td></tr><tr><td></td><td><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tbody><tr><td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_APPLICATION_CODE' tabindex=0>";
	buffer[_i++] = ZmMsg.twoStepAuthAddAppCode;
	buffer[_i++] = "</button></td><td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REVOKE_APPLICATION_CODE' tabindex=0>";
	buffer[_i++] = ZmMsg.twoStepAuthRevokeCode;
	buffer[_i++] = "</button></td></tr></tbody></table></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr><tr><td colspan=2><hr></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.delegatesLabel;
	buffer[_i++] = "</td><td style='text-align:left'>";
	buffer[_i++] = ZmMsg.delegateRightsPrompt;
	buffer[_i++] = "</td></tr><tr><td></td><td><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td colspan='4'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DELEGATE_RIGHTS'></div></td></tr></table></td></tr><tr><td></td><td><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing=\"6\"><tbody><tr><td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ADD_DELEGATE' tabindex=0>";
	buffer[_i++] = ZmMsg.addDelegate;
	buffer[_i++] = "</button></td><td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EDIT_DELEGATE' tabindex=0>";
	buffer[_i++] = ZmMsg.editPermissions;
	buffer[_i++] = "</button></td><td><button id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_REMOVE_DELEGATE' tabindex=0>";
	buffer[_i++] = ZmMsg.remove;
	buffer[_i++] = "</button></td><td width='100%'></td></tr></tbody></table></td></tr>";
	 if (data.isEnabled(ZmSetting.SAVE_TO_SENT_DELEGATED_TARGET)) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel' style=\"vertical-align:top\">";
	buffer[_i++] = ZmMsg.delegateSendSettings;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SAVE_TO_SENT_DELEGATED_TARGET' tabindex=0/></td></tr>";
	 } 
	buffer[_i++] = "</table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#PrimaryAccount"
}, false);

AjxTemplate.register("prefs.Pages#ExternalAccount", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.accountHeaderExternal;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class=\"ZPropertySheet\" cellspacing='6'><tr><td colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_ALERT'></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.emailAddrLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_EMAIL' tabindex=0 size=30></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountNameLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_NAME' tabindex=0 size=30></div></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountTypeLabel;
	buffer[_i++] = "</td>";
	 if (data.isEnabled(ZmSetting.POP_ACCOUNTS_ENABLED) && data.isEnabled(ZmSetting.IMAP_ACCOUNTS_ENABLED)) { 
	buffer[_i++] = "<td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_ACCOUNT_TYPE' tabindex=0></div></td>";
	 } else if (data.isEnabled(ZmSetting.POP_ACCOUNTS_ENABLED)) { 
	buffer[_i++] = "<td class='ZOptionsField'>POP3</td>";
	 } else { 
	buffer[_i++] = "<td class='ZOptionsField'>IMAP</td>";
	 } 
	buffer[_i++] = "</tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountUsernameLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_USERNAME' tabindex=0 size=30></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountServerLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_HOST' tabindex=0 size=30></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.passwordLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><!-- NOTE: impossible to set a hint because it will just be turned into ****** --><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_PASSWORD' tabindex=0 type=password></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.advancedSettingsLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_CHANGE_PORT' tabindex=0 type=checkbox></td><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_PORT' tabindex=0 size=4></td><td class='ZOptionsInfo'><span id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_PORT_DEFAULT'></span></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_SSL' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_TEST' tabindex=0></div></td></tr></table></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.accountDownloadToLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_DOWNLOAD_TO' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><hr></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_DELETE_AFTER_DOWNLOAD' tabindex=0 type=checkbox></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel' style='text-align:left' colspan=2>";
	buffer[_i++] = ZmMsg.accountFromPrompt;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.fromLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.fromDetail;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr><td style='padding-right:.5em;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_FROM_NAME' tabindex=0 size=30></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.setReplyTo;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_REPLY_TO' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr><td style='padding-right:.5em;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_REPLY_TO_NAME' tabindex=0 size=30></td><td class='ZmSelector'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EXTERNAL_REPLY_TO_EMAIL' tabindex=0></select></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.signatureLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'><a id ='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_External_Signatures_Link' href='#Prefs.Signatures'>";
	buffer[_i++] = ZmMsg.manageSignaturesForExternalAccount;
	buffer[_i++] = "</a><span id ='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_External_Signatures_Text'>";
	buffer[_i++] = ZmMsg.manageSignaturesForExternalAccount;
	buffer[_i++] = "</span></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#ExternalAccount"
}, false);

AjxTemplate.register("prefs.Pages#Persona", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.personaSettings;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class=\"ZPropertySheet\" cellspacing='6'><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.accountPersonaInstructions;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountPersonaLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_NAME' tabindex=0></div></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel' style='text-align:left' colspan=2>";
	buffer[_i++] = ZmMsg.accountFromPrompt;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.fromLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.fromDetail;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr>";
	 if (appCtxt.get(ZmSetting.FROM_DISPLAY_ENABLED)) { 
	buffer[_i++] = "<td style='padding-right:.5em;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_FROM_NAME' tabindex=0 size=30></td>";
	 } 
	buffer[_i++] = "<td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_FROM_EMAIL' tabindex=0 size=40></select></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.setReplyTo;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_REPLY_TO' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr><td style='padding-right:.5em;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_REPLY_TO_NAME' tabindex=0 size=30></td><td class='ZmSelector'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_REPLY_TO_EMAIL' tabindex=0 size=40></select></td></tr></table></td></tr><tr valign=top><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.signatureLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' valign='middle'>";
	buffer[_i++] = ZmMsg.manageSignatures;
	buffer[_i++] = "</td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.accountPersonaUseLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_WHEN_SENT_TO' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsInfo ZOptionsSubField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_WHEN_SENT_TO_LIST' tabindex=0 size=80></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsInfo ZOptionsSubField'>";
	buffer[_i++] = ZmMsg.whenSentToHint;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_WHEN_IN_FOLDER' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField ZOptionsSubField'><table role=\"presentation\"><tr><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_WHEN_IN_FOLDER_LIST' tabindex=0 size=60></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_PERSONA_WHEN_IN_FOLDER_BUTTON' tabindex=0></div></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsInfo ZOptionsSubField'>";
	buffer[_i++] = ZmMsg.whenInFolderHint;
	buffer[_i++] = "</td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Persona"
}, false);

AjxTemplate.register("prefs.Pages#MailFilters", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"rightAlign\">";
	buffer[_i++] = ZmMsg.filterRuleChangesSavedImmediately;
	buffer[_i++] = "</div>";
	 if (appCtxt.get(ZmSetting.PRIORITY_INBOX_ENABLED)) { 
	buffer[_i++] = "<div><fieldset><legend>";
	buffer[_i++] = ZmMsg.activityStreamFilterTitle;
	buffer[_i++] = "</legend><table role=\"presentation\"><tr><td style='padding:5px'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ACTIVITY_STREAM_BUTTON'></div></td><td>";
	buffer[_i++] = ZmMsg.activityStreamFilterMsg;
	buffer[_i++] = "</td></tr></table></fieldset></div>";
	 }
	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td class='ZOptionsSectionTabView'><table role=\"presentation\" width=100%><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_tabview' tabindex=0></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#MailFilters"
}, false);

AjxTemplate.register("prefs.Pages#MailFilter", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_toolbar' tabindex=0></div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_list' tabindex=0></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#MailFilter"
}, false);

AjxTemplate.register("prefs.Pages#MailFilterRule", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' style='margin-bottom:.75em; min-width:450px;'><tr><td><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr><td width='1%' style='white-space:nowrap;'> ";
	buffer[_i++] = ZmMsg.filterNameLabel;
	buffer[_i++] = " </td><td width='99%'> <input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' type='text' tabindex=0 style='width:100%;'> </td></tr></table></td><td width='1%'><table role=\"presentation\" class='ZCheckboxTable' style='margin-left:1em;'><tr><td> <input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_active' type='checkbox' name='cbActive' checked tabindex=0> </td><td style='white-space:nowrap;'><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_active'> ";
	buffer[_i++] = ZmMsg.active;
	buffer[_i++] = " </label></td></tr></table></td></tr></table><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_condition' tabindex=0></div><fieldset class='FilterRuleSection'><div style='overflow-x:hidden;overflow-y:auto;height:145px;'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_conditions' width='100%' tabindex=0 class='ZPropertySheet' cellspacing='6'><tbody></tbody></table></div></fieldset><div>";
	buffer[_i++] = ZmMsg.filterActions;
	buffer[_i++] = "</div><fieldset class='FilterActionSection'><div style='overflow-x:hidden;overflow-y:auto;height:82px'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_actions' width='100%' tabindex=0 class='ZPropertySheet' cellspacing='6'><tbody></tbody></table></div></fieldset><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_stop' type='checkbox' name='cbStop' checked tabindex=0>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#MailFilterRule"
}, false);

AjxTemplate.register("prefs.Pages#Calendar", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	 if (data.activeAccount.isMain) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.general;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class=\"ZPropertySheet\" cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.defaultViewLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CALENDAR_INITIAL_VIEW' tabindex=0></select></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.calendarStartWeekLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_FIRST_DAY_OF_WEEK' tabindex=0></select></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.calendarInitialApptVisibility ;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_APPT_VISIBILITY' tabindex=0></select></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_ALWAYS_SHOW_MINI_CAL' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_SHOW_CALENDAR_WEEK' tabindex=0 type=checkbox></td></tr>";
	 if (!appCtxt.multiAccounts) { 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_AUTO_ADD_INVITES' tabindex=0 type=checkbox></td></tr>";
	 } 
	buffer[_i++] = "<tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_SHOW_DECLINED_MEETINGS' tabindex=0 type=checkbox></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deleteInviteOnReplyLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DELETE_INVITE_ON_REPLY' tabindex=0 type=checkbox></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel' id=id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_INV_FORWARDING_ADDRESS_label'>";
	buffer[_i++] = ZmMsg.forwardInvitesToLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.forwardInvitesTo;
	buffer[_i++] = " <input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_INV_FORWARDING_ADDRESS' aria-labelledby='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_INV_FORWARDING_ADDRESS' tabindex=0></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.apptReminderLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_REMINDER_WARNING_TIME' tabindex=0></select></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_SHOW_PAST_DUE_REMINDERS' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_REMINDER_NOTIFY_SOUNDS' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_REMINDER_NOTIFY_BROWSER' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_REMINDER_NOTIFY_TOASTER' tabindex=0></div></td></tr></table></td></tr><tr><td colspan=2><hr></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.defaultApptDuration;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_DEFAULT_APPT_DURATION' tabindex=0></select></td><td style=\"padding-left:4px;\">";
	buffer[_i++] = ZmMsg.minutes;
	buffer[_i++] = "</td></tr></table></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.calendarWorkHoursHeader;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_HOURS'></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.apptCreating;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.quickAddPrefLabel;
	buffer[_i++] = ":</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_USE_QUICK_ADD' tabindex=0 type=checkbox></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.timezonePrefLabel;
	buffer[_i++] = ":</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_SHOW_TIMEZONE' tabindex=0 type=checkbox></td></tr></table></td></tr></table>";
	
		}
		else if (appCtxt.multiAccounts &&
				data.activeAccount.isZimbraAccount &&
				appCtxt.getSettings(data.activeAccount).attrExists(ZmSetting.CAL_AUTO_ADD_INVITES))
		{
		
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.general;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_AUTO_ADD_INVITES' tabindex=0 type=checkbox></td></tr></table></td></tr></table>";
	 } 
	 if (data.isAclSupported) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.calPerms;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\"><tr><td colspan=2>";
	buffer[_i++] =  AjxMessageFormat.format(ZmMsg.calPermsNote, data.domain) ;
	buffer[_i++] = "</td></tr><tr><td colspan=2>&nbsp;</td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.freeBusyLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_FREE_BUSY_ACL' tabindex=0></div></td></tr><tr><td>&nbsp;</td><td><textarea id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_FREE_BUSY_ACL_USERS' tabindex=0 rows=3 cols=70></textarea></td></tr><tr><td class='ZOptionsLabelTop'>";
	buffer[_i++] = ZmMsg.invitesLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_INVITE_ACL' tabindex=0></div></td></tr><tr><td>&nbsp;</td><td><textarea id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_INVITE_ACL_USERS' tabindex=0 rows=3 cols=70></textarea></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_SEND_INV_DENIED_REPLY' tabindex=0 type=checkbox></td></tr></table></td></tr></table>";
	 } 
	buffer[_i++] = "<div class='prefHeader'>Apple iCal</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td colspan=2>";
	buffer[_i++] = ZmMsg.calAppleICalNote ;
	buffer[_i++] = "</td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ENABLE_APPL_ICAL_DELEGATION' tabindex=0 type=checkbox></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Calendar"
}, false);

AjxTemplate.register("prefs.Pages#WorkHours", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100%><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.calendarWorkWeek ;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_0' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_1' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_2' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_3' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_4' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_5' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_6' tabindex=0></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.calendarWorkHours ;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_HOURS_NORMAL'><td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursNormal ;
	buffer[_i++] = " <td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_HOURS_CUSTOM'><td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursCustom ;
	buffer[_i++] = " <td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_CUSTOM_WORK_HOURS'></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsField'>";
	buffer[_i++] = ZmMsg.calendarWorkHoursDisclaimer ;
	buffer[_i++] = " ";
	buffer[_i++] = AjxTimezone.getMediumName(appCtxt.get(ZmSetting.DEFAULT_TIMEZONE)) ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#WorkHours"
}, false);

AjxTemplate.register("prefs.Pages#CustomWorkHoursDlg", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6' width=300><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_0' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_0' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_0' tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_1' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_1' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_1' tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_2' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_2' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_2' tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_3' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_3' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_3' tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_4' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_4' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_4' tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_5' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_5' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_5' tabindex=0></td></tr><tr><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_DAY_6' tabindex=0></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_START_TIME_6' tabindex=0></td><td> ";
	buffer[_i++] = ZmMsg.calendarWorkHoursDelimiter ;
	buffer[_i++] = " </td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CAL_WORKING_END_TIME_6' tabindex=0></td></tr><tr><td colspan=\"4\">";
	buffer[_i++] = ZmMsg.calendarWorkHoursDisclaimer ;
	buffer[_i++] = AjxTimezone.getMediumName(appCtxt.get(ZmSetting.DEFAULT_TIMEZONE)) ;
	buffer[_i++] = "</td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#CustomWorkHoursDlg"
}, false);

AjxTemplate.register("prefs.Pages#Shortcuts", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.keyboardShortcuts;
	buffer[_i++] = "</div><div align=\"right\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHORTCUT_PRINT' style='width:80px;'></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SHORTCUT_LIST'></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Shortcuts"
}, false);

AjxTemplate.register("prefs.Pages#AccountTestContent", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_accts' class='ZmDataSourceTestTable ZPropertySheet' cellspacing='6'><tr><th>";
	buffer[_i++] = ZmMsg.account;
	buffer[_i++] = "</th><th>";
	buffer[_i++] = ZmMsg.status;
	buffer[_i++] = "</th></tr>";
	 for (var i = 0; i < data.accounts.length; i++) { 
	buffer[_i++] =  AjxTemplate.expand("#AccountTestItem", { id: data.id, account: data.accounts[i] }) ;
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#AccountTestContent"
}, false);

AjxTemplate.register("prefs.Pages#AccountTestItem", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr><td class='ZmTestItem'>";
	buffer[_i++] = AjxStringUtil.htmlEncode(data.account.name);
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["account"]["id"];
	buffer[_i++] = "_test_status' class='ZmTestStatus'></td></tr><tr id='";
	buffer[_i++] = data["account"]["id"];
	buffer[_i++] = "_test_details' style='display:none'><td><table role=\"presentation\" border='0'><tr valign='top'><td class='ZmTestError'>";
	buffer[_i++] = ZmMsg.errorLabel;
	buffer[_i++] = "</td><td id='";
	buffer[_i++] = data["account"]["id"];
	buffer[_i++] = "_test_error' class='ZmTestError'></td></tr><tr valign='top'><td class='ZmTestNote'>";
	buffer[_i++] = ZmMsg.noteLabel;
	buffer[_i++] = "</td><td class='ZmTestNote'>";
	buffer[_i++] = ZmMsg.popAccountTestNote;
	buffer[_i++] = "</td></tr></table></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#AccountTestItem"
}, false);

AjxTemplate.register("prefs.Pages#Import", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = data["label"];
	buffer[_i++] = "</td><td class='ZOptionsInfo'><form id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_form'\n";
	buffer[_i++] = "\t\t\t\taction='";
	buffer[_i++] = data["action"];
	buffer[_i++] = "' method='POST' enctype='multipart/form-data'\n";
	buffer[_i++] = "\t\t\t\tstyle='margin:0; padding:0;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' tabindex=0\n";
	buffer[_i++] = "\t\t\t\t\t\ttype='file' name='";
	buffer[_i++] = data["name"];
	buffer[_i++] = "'\n";
	buffer[_i++] = "\t\t\t\t\t\tstyle='font-family:Tahoma; font-size:10px'></form></td></tr><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsInfo'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button' tabindex=0></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Import"
}, false);

AjxTemplate.register("prefs.Pages#Export", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>&nbsp;</td><td class='ZOptionsInfo'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_options' tabindex=\"10\"></div></td><td class='ZOptionsInfo'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button' tabindex=\"20\"></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Export"
}, false);

AjxTemplate.register("prefs.Pages#Zimlets", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.zimlets;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td><div style='margin-bottom:1em;'>";
	buffer[_i++] = ZmMsg.zimletsPrefsMsg;
	buffer[_i++] = "</div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CHECKED_ZIMLETS' tabindex=0></div></td></tr></table></td></tr></table>";
	 if (appCtxt.isOffline) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.zimletInstall;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td><div>";
	buffer[_i++] = ZmMsg.zimletsPrefsUpload;
	buffer[_i++] = "</div><br/></td></tr><tr><td><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.fileLabel;
	buffer[_i++] = "</td><td><form id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_form' action='";
	buffer[_i++] = data["action"];
	buffer[_i++] = "' method='POST' enctype='multipart/form-data' style='margin:0px; padding:0px;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_input' tabindex=0 type='file' name='zimletUpload' style='font-family:Tahoma; font-size:10px'></form></td></tr><tr><td></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button'></td></tr></table></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.zimletSyncData;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td><select id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_ZIMLET_SYNC_ACCOUNT_ID' tabindex=0></select></td></tr></table></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Zimlets"
}, false);

AjxTemplate.register("prefs.Pages#BackUp", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.offlineBackupHeader;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'></td><td class='ZOptionsField' colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_button' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.offlineBackUpAccounts;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_BACKUP_ACCOUNT_ID' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.offlineBackUpInterval;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_BACKUP_INTERVAL' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.offlineBackUpPath;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_BACKUP_PATH' tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.offlineBackUpRetention;
	buffer[_i++] = "</td><td class='ZOptionsField' width=\"2%\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_BACKUP_KEEP' tabindex=0></div></td><td>";
	buffer[_i++] = ZmMsg.offlineBackUpKeep;
	buffer[_i++] = "</td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.offlineBackUpRestore;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsField' colspan=2><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_BACKUP_RESTORE' tabindex=0></div></td></tr><tr><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_restore_button' tabindex=0></div></td><td>&nbsp;</td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#BackUp"
}, false);

AjxTemplate.register("prefs.Pages#SharingPrefPage", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"rightAlign prefHeaderComment\">";
	buffer[_i++] = ZmMsg.sharingChangesSavedImmediately;
	buffer[_i++] = "</div><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.pendingSharesTitle;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareForm'></div></td></tr></table></td></tr><tr><td class='ZOptionsSectionMain'><div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_pendingShares'></div></div></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.mountedSharesTitle;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_mountedShares'></div></div></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.sharingByMe;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sharesBy'></div></td></tr><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100%><tr><td><div class=\"sharingPageListTitle\">";
	buffer[_i++] = ZmMsg.shareAFolder;
	buffer[_i++] = "</div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_grantForm'></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#SharingPrefPage"
}, false);

AjxTemplate.register("prefs.Pages#ShareForm", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td colspan=3><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_group\" class=\"ZOptionsInfo\" tabindex=0></div></td></tr><tr><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_user\" class=\"ZOptionsInfo\" tabindex=0></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_owner\" class=\"ZOptionsInfo\" tabindex=0></div></td><td><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_findButton\" tabindex=0></div></td></tr></table><br/>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#ShareForm"
}, false);

AjxTemplate.register("prefs.Pages#GrantForm", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div>";
	buffer[_i++] = ZmMsg.grantFormText;
	buffer[_i++] = "</div><br/><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td>";
	buffer[_i++] = ZmMsg.folderType;
	buffer[_i++] = "</td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_folderType' tabindex=0></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_shareButton' tabindex=0></div></td></tr></table><br/>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#GrantForm"
}, false);

AjxTemplate.register("prefs.Pages#MobileDevices", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class=\"rightAlign prefHeaderComment\">";
	buffer[_i++] = ZmMsg.mobileDeviceChangesSavedImmediately;
	buffer[_i++] = "</div><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.mobileDevices;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_deviceList' tabindex=0></div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_deviceToolbar' tabindex=0></div></td></tr></table></td></tr></table><div class='prefHeader'>";
	buffer[_i++] = ZmMsg.oAuthAuthorizedApps;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_oauthconsumerapps' tabindex=0></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#MobileDevices"
}, false);

AjxTemplate.register("prefs.Pages#MobileDeviceInfo", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr><td>";
	buffer[_i++] = ZmMsg.mobileDevice;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.type;
	buffer[_i++] = "</td></tr><tr><td>";
	buffer[_i++] = ZmMsg.mobileUserAgent;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.ua;
	buffer[_i++] = "</td></tr><tr><td>";
	buffer[_i++] = ZmMsg.mobileDeviceId;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.id;
	buffer[_i++] = "</td></tr><tr><td>";
	buffer[_i++] = ZmMsg.mobileProtocolVersion;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.protocol;
	buffer[_i++] = "</td></tr><tr><td>";
	buffer[_i++] = ZmMsg.mobileProvisionable;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.provisionable ? AjxMsg.yes : AjxMsg.no ;
	buffer[_i++] = "</td></tr><tr><td>";
	buffer[_i++] = ZmMsg.status;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.getStatusString();
	buffer[_i++] = "</td></tr>";
	 if (data.device.firstReqReceived) { 
	buffer[_i++] = "<tr><td>";
	buffer[_i++] = ZmMsg.mobileFirstReqReceived;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.getFirstReqReceivedString();
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.device.lastPolicyUpdate) { 
	buffer[_i++] = "<tr><td>";
	buffer[_i++] = ZmMsg.mobileLastPolicyUpdate;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.getLastPolicyUpdateString();
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.device.remoteWipeReqTime) { 
	buffer[_i++] = "<tr><td>";
	buffer[_i++] = ZmMsg.mobileRemoteWipeReq;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.getRemoteWipeReqTimeString();
	buffer[_i++] = "</td></tr>";
	 } 
	 if (data.device.remoteWipeAckTime) { 
	buffer[_i++] = "<tr><td>";
	buffer[_i++] = ZmMsg.mobileRemoteWipeAck;
	buffer[_i++] = ":</td><td>";
	buffer[_i++] = data.device.getRemoteWipeAckTimeString();
	buffer[_i++] = "</td></tr>";
	 } 
	buffer[_i++] = "</table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#MobileDeviceInfo"
}, false);

AjxTemplate.register("prefs.Pages#Notifications", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.notificationsEmail;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><!--<tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.emailNotificationsLabel;
	buffer[_i++] = "</td>--><!--<td class='ZOptionsField'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL_ENABLED' tabindex=0 type='checkbox'></td>--><!--</tr>--><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.emailNotificationsDescription;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_EMAIL' tabindex=0></div></td></tr></table></td></tr></table>";
	 if (appCtxt.get(ZmSetting.CAL_DEVICE_EMAIL_REMINDERS_ENABLED)) { 
	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.notificationsDeviceEmail;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable ZDeviceOptionsTable' width='100%'><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deviceEmailNotificationsRegionLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=\"4\"><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_REGION' tabindex=0></div></td></tr></table></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deviceEmailNotificationsCarrierLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=\"4\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CARRIER' tabindex=0></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_PHONE_row'><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deviceEmailNotificationsPhoneNumberLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=\"3\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_PHONE' tabindex=0></div></td><td class=\"ZOptionsField\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_PHONE_SEND_CODE\" tabindex=0></div></td></tr><tr id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CUSTOM_NUMBER_row\"><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deviceEmailNotificationsCustomeEmailLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CUSTOM_NUMBER' tabindex=0></div></td><td class=\"ZOptionsField\">@</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CUSTOM_ADDRESS' tabindex=0></div></td><td class=\"ZOptionsField\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CUSTOM_SEND_CODE\" tabindex=0></div></td></tr><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_PHONE_HINT_row'><td></td><td class=\"ZOptionsInfo\" colspan=\"4\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_PHONE_HINT\"></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deviceEmailNotificationsVerificationCodeLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=\"3\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CODE' tabindex=0></div></td><td class=\"ZOptionsField\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CODE_VALIDATE\" tabindex=0></div></td></tr><tr><td class='ZOptionsLabel'>";
	buffer[_i++] = ZmMsg.deviceEmailNotificationsVerificationStatusLabel;
	buffer[_i++] = "</td><td class='ZOptionsField' colspan=\"3\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CODE_STATUS' tabindex=0></div></td><td class=\"ZOptionsField\"><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DEVICE_EMAIL_CODE_INVALIDATE\" tabindex=0></div></td></tr></table></td></tr></table>";
	 } 

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#Notifications"
}, false);

AjxTemplate.register("prefs.Pages#QuickCommandList", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.quickCommands;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width=100% ><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_toolbar' tabindex=0></div></td></tr><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_list' tabindex=0></div></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#QuickCommandList"
}, false);

AjxTemplate.register("prefs.Pages#QuickCommandDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style=\"height:400px; width:450px\"><table role=\"presentation\" style='width:100%; height:100px'><tr><td width='1%' nowrap>";
	buffer[_i++] = ZmMsg.quickCommandNameLabel;
	buffer[_i++] = "</td><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name' type='text' style=\"width:185px\" tabindex=0 maxlength='25'></td><td width='1%' style='text-align:right; white-space:nowrap;'><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_active' type='checkbox' name='cbActive' tabindex=0><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_active'>";
	buffer[_i++] = ZmMsg.active;
	buffer[_i++] = "</label></td></tr><tr><td width='1%' nowrap>";
	buffer[_i++] = ZmMsg.description;
	buffer[_i++] = "</td><td colspan=\"2\"><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_description' type='text' style=\"width:250px\" tabindex=0maxlength='100'></td></tr><tr><td width='1%' nowrap>";
	buffer[_i++] = ZmMsg.itemType;
	buffer[_i++] = "</td><td colspan=\"2\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_itemTypeContainer\"></td></tr></table><div style='height:350px'><div style='margin-bottom:5px; vertical-align:bottom'><p style='color:#555555; float:left'>";
	buffer[_i++] = ZmMsg.quickCommandActions;
	buffer[_i++] = "</p><div id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_addButtonContainer\" style='float:right'></div></div><fieldset class='FilterRuleSection' style='width:417px; height:250px; clear:both'><div style='overflow-x:hidden; overflow-y:scroll; height:100%'><table role=\"presentation\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_actions' width='100%' tabindex=0><tbody id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_actionsTbody\"></tbody></table></div></fieldset></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#QuickCommandDialog"
}, false);

AjxTemplate.register("prefs.Pages#QuickCommandDialogActionRow", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<tr style='width:100%' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "'><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_activeContainer' style='padding:3px'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_typeContainer' style='padding:3px'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_valueContainer' style='padding:3px'></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_buttonsContainer' style='padding:3px' nowrap=nowrap'></td></tr>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#QuickCommandDialogActionRow"
}, false);

AjxTemplate.register("prefs.Pages#GrantRightsDialog", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\"><tr id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name_row'><td class=\"Label\" style=\"padding-right:10px\">";
	buffer[_i++] = ZmMsg.emailLabel;
	buffer[_i++] = "</td><td id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_name_cell\"></td></tr><tr><td class=\"Label\">&nbsp;</td><td><table role=\"presentation\"><tr><td><input type=\"checkbox\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendAs'></td><td><label class=\"Text\" for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendAs'\n";
	buffer[_i++] = "\t\t\t\t\t\t\tstyle=\"text-align:left\">";
	buffer[_i++] = ZmMsg.sendAs;
	buffer[_i++] = "</label></td></tr><tr><td><input type=\"checkbox\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendObo'></td><td><label class=\"Text\" for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_sendObo'\n";
	buffer[_i++] = "\t\t\t\t\t\t\tstyle=\"text-align:left\">";
	buffer[_i++] = ZmMsg.sendOnBehalfOflbl;
	buffer[_i++] = "</label></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#GrantRightsDialog"
}, false);

AjxTemplate.register("prefs.Pages#ActivityStreamPrompt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width=100% class='ZPropertySheet' cellspacing='6'><tr><td colspan='2'><div class='horizSep'></div></td></tr><tr><td class='ZOptionsLabelLeft'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SENTTO'></div></td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_TO'></div></td></tr><tr><td class='ZOptionsLabelLeft'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_RECEIVED'></div></td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_FROM'></div></td></tr><tr><td class='ZOptionsLabelLeft'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SUBJECT'></div></td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_CONTAINS'></div></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#ActivityStreamPrompt"
}, false);

AjxTemplate.register("prefs.Pages#PriorityMessageFilterPrompt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:475px;'>";
	buffer[_i++] = ZmMsg.priorityFilterDescription;
	buffer[_i++] = "</div><div class='horizSep'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MOVE_MSG_STREAM'></div><div class=\"ZmActivityStreamFilterList\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DL_SUBSCRIBED'></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_MASS_MARKETING'></div><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NOT_TO_ME'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_SELECT_FIELD' style='margin:0 .5em;'></div></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NOT_TO_ME_CONT'>";
	buffer[_i++] = ZmMsg.field;
	buffer[_i++] = "</div></td></tr></table><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_NOT_IN_ADDR'></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#PriorityMessageFilterPrompt"
}, false);

AjxTemplate.register("prefs.Pages#PriorityMessageRunNowPrompt", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:350px;' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "'><div style='float:left; padding-right:10px; height:50px'>";
	buffer[_i++] = AjxImg.getImageHtml("Warning");
	buffer[_i++] = "</div><div>";
	buffer[_i++] = ZmMsg.runPriorityFilterPrompt;
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#PriorityMessageRunNowPrompt"
}, false);

AjxTemplate.register("prefs.Pages#MailFilterListView", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<table role=\"presentation\" width='100%' align='center'><tr><td id='";
	buffer[_i++] = data["targetDivId"];
	buffer[_i++] = "' width=\"45%\"></td><td valign='top' id='";
	buffer[_i++] = data["buttonsDivId"];
	buffer[_i++] = "'><div id='";
	buffer[_i++] = data["transferButtonId"];
	buffer[_i++] = "'\tstyle='padding:30px 0 5px'></div><div id='";
	buffer[_i++] = data["removeButtonId"];
	buffer[_i++] = "'\t\tstyle='padding-bottom:20px'></div><div id='";
	buffer[_i++] = data["moveUpButtonId"];
	buffer[_i++] = "'\t\tstyle='padding-bottom:5px'></div><div id='";
	buffer[_i++] = data["moveDownButtonId"];
	buffer[_i++] = "'\tstyle='padding-bottom:20px'></div></td><td id='";
	buffer[_i++] = data["sourceDivId"];
	buffer[_i++] = "' width=\"45%\"></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#MailFilterListView"
}, false);

AjxTemplate.register("prefs.Pages#OutOfOffice", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='prefHeader'>";
	buffer[_i++] = ZmMsg.outOfOffice;
	buffer[_i++] = "</div><table role=\"presentation\" class='ZOptionsSectionTable' width=100%><tr><td class='ZOptionsSectionMain'><table role=\"presentation\" width='100%' class='ZPropertySheet' cellspacing='6'><tr><td class=\"ZOptionsLabel\" style=\"vertical-align:top;width:inherit;\">";
	buffer[_i++] = ZmMsg.outOfOfficeLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_MSG_ENABLED' tabindex=0></div></td></tr><tr><td class=\"ZOptionsLabel\" style=\"vertical-align:top;width:inherit;\">";
	buffer[_i++] = ZmMsg.autoReplyLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\" class=\"ZPropertySheet\" cellspacing='6'><tr><td><textarea id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_MSG' tabindex=0 rows=6 cols=70></textarea><span style=\"display:none\"><input type=\"hidden\" name=\"st_dt\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_FROM\"/><input type=\"hidden\" name=\"ed_dt\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_UNTIL\"/></span></td></tr></table></td><tr><tr><td class=\"ZOptionsLabel\" style=\"vertical-align:top;width:inherit;\">";
	buffer[_i++] = ZmMsg.externalSendersLabel;
	buffer[_i++] = "</td><td class='ZOptionsField'><table role=\"presentation\"><tr><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_EXTERNAL_SUPPRESS' tabindex=0 size='3' /></td></tr></table><textarea id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_EXTERNAL_MSG' tabindex=0 rows=6 cols=70 onfocus=\"this.rows=10;\"></textarea></td></tr><tr><td class=\"ZOptionsLabel\" style=\"vertical-align:top;width:inherit;\">";
	buffer[_i++] = ZmMsg.timePeriodLabel;
	buffer[_i++] = "</td><td><table role=\"presentation\"><tr><td><input type=\"checkbox\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_DURATION_ENABLED\" tabindex=0></td></tr><tr><td><table role=\"presentation\" class='ZPropertySheet' cellspacing='6'><tr><td align=\"right\">";
	buffer[_i++] = ZmMsg.startLabel;
	buffer[_i++] = "</td><td class='ZmOOODuration' ><table role=\"presentation\"><tr><td><input style='height:22px;' type='text' autocomplete='off' size=14 maxlength=10 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_FROM1'></td><td class=\"miniCalendarButton\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_startMiniCal'></td></tr></table></td><td id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_FROM_TIME' class='ZmOOODuration' ></td><td><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_DURATION_ALL_DAY' class='ZmOOODuration' ></div></td></tr><tr><td align=\"right\">";
	buffer[_i++] = ZmMsg.endLabel;
	buffer[_i++] = "</td><td class='ZmOOODuration'><table role=\"presentation\"><tr><td><input style='height:22px;' type='text' autocomplete='off' size=14 maxlength=10 id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_UNTIL1'></td><td class=\"miniCalendarButton\" id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_endMiniCal'></td></tr></table></td><td colspan=\"2\" class='ZmOOODuration' id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_UNTIL_TIME'></td></tr><tr><td align=\"right\">";
	buffer[_i++] = ZmMsg.vacationCalMsg;
	buffer[_i++] = "</td><td colspan=\"3\"><table role=\"presentation\"><tr><td class='ZmOOOCalendar'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_CALENDAR_ENABLED' tabindex=0></div></td><td class='ZmOOOCalendar'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_VACATION_CALENDAR_TYPE' tabindex=0 size='3' /></td></tr></table></td></tr></table></td></tr></table></td></tr></table></td></tr></table>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#OutOfOffice"
}, false);

AjxTemplate.register("prefs.Pages#OfflineSettings", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:475px;'><div>";
	buffer[_i++] = ZmMsg.offlineDescription;
	buffer[_i++] = "</div><div class='horizSep'></div><div class='ZmOfflineItem'><table role=\"presentation\" class='ZRadioButtonTable'><tr><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ENABLE_OFFLINE_RADIO' type=radio name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_SETTING'\n";
	buffer[_i++] = "                    ";
	 if (data.isWebClientOfflineSupported) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "                        checked\n";
	buffer[_i++] = "                    ";
	 } 
	buffer[_i++] = " ></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_ENABLE_OFFLINE_RADIO' class='Text'>";
	buffer[_i++] = ZmMsg.enableOffline;
	buffer[_i++] = "</label></td></tr></table><div class='ZmOfflineDetails'>";
	buffer[_i++] = ZmMsg.enableOfflineDetails;
	buffer[_i++] = "</div></div><div class='ZmOfflineItem'><table role=\"presentation\" class='ZRadioButtonTable'><tr><td><input id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DISABLE_OFFLINE_RADIO' type=radio name='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_OFFLINE_SETTING'\n";
	buffer[_i++] = "                    ";
	 if (!data.isWebClientOfflineSupported) { 
	buffer[_i++] = "\n";
	buffer[_i++] = "                        checked\n";
	buffer[_i++] = "                    ";
	 } 
	buffer[_i++] = " ></td><td><label for='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_DISABLE_OFFLINE_RADIO' class='Text'>";
	buffer[_i++] = ZmMsg.disableOffline;
	buffer[_i++] = "</label></td><tr></table><div class='ZmOfflineDetails'>";
	buffer[_i++] = ZmMsg.disableOfflineDetails;
	buffer[_i++] = "</div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#OfflineSettings"
}, false);

AjxTemplate.register("prefs.Pages#SocialfoxSettings", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:475px;'><div>";
	buffer[_i++] = ZmMsg.socialfoxSettingsDescription;
	buffer[_i++] = "</div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#SocialfoxSettings"
}, false);

AjxTemplate.register("prefs.Pages#OneTimeCodes", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div class='ZmOneTimeCodes'>";
	 if (data.oneTimeCodes) {
	buffer[_i++] = "<ol>";
	 for (var i = 0; i < data.oneTimeCodes.length; i++) {
	buffer[_i++] = "<li><span>";
	buffer[_i++] = data.oneTimeCodes[i];
	buffer[_i++] = "</span></li>";
	 } 
	buffer[_i++] = "</ol>";
	 } 
	buffer[_i++] = "</div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#OneTimeCodes"
}, false);

AjxTemplate.register("prefs.Pages#OneTimeCodesPrint", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<!DOCTYPE html><html><head><title>";
	buffer[_i++] = ZmMsg.twoStepAuthOneTimeCodesPrintTitle;
	buffer[_i++] = "</title><style>\n";
	buffer[_i++] = "\t\t\t\t.ZmOneTimeCodes {\n";
	buffer[_i++] = "\t\t\t\t\twidth:450px;\n";
	buffer[_i++] = "\t\t\t\t}\n";
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t.ZmOneTimeCodes LI {\n";
	buffer[_i++] = "\t\t\t\t\tmargin: 15px 15px 15px 45px;\n";
	buffer[_i++] = "\t\t\t\t\twidth: 120px;\n";
	buffer[_i++] = "\t\t\t\t\tfloat: left;\n";
	buffer[_i++] = "\t\t\t\t}\n";
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\t.ZmOneTimeCodes LI SPAN {\n";
	buffer[_i++] = "\t\t\t\t\tletter-spacing: 3px;\n";
	buffer[_i++] = "\t\t\t\t\tfont-weight: bold;\n";
	buffer[_i++] = "\t\t\t\t}\n";
	buffer[_i++] = "\n";
	buffer[_i++] = "\t\t\t\tP {\n";
	buffer[_i++] = "\t\t\t\t\tcolor:#999999;\n";
	buffer[_i++] = "\t\t\t\t\tclear:both;\n";
	buffer[_i++] = "\t\t\t\t\twidth:405px;\n";
	buffer[_i++] = "\t\t\t\t\ttext-align:center;\n";
	buffer[_i++] = "\t\t\t\t}\n";
	buffer[_i++] = "\t\t\t</style><link rel=\"SHORTCUT ICON\" href=\"/img/logo/favicon.ico\"></head><body>";
	buffer[_i++] = data.content;
	buffer[_i++] = "<p>";
	buffer[_i++] = ZmMsg.twoStepAuthOneTimeCodesTip;
	buffer[_i++] = "</p></body></html>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#OneTimeCodesPrint"
}, false);

AjxTemplate.register("prefs.Pages#AddApplicationCode", 
function(name, params, data, buffer) {
	var _hasBuffer = Boolean(buffer);
	data = (typeof data == "string" ? { id: data } : data) || {};
	buffer = buffer || [];
	var _i = buffer.length;

	buffer[_i++] = "<div style='width:450px; height:120px;'><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_app_name'><div style=\"padding:7px;\">";
	buffer[_i++] = ZmMsg.twoStepAuthAppCodeDesc1;
	buffer[_i++] = "</div><div style=\"text-align:center; margin:20px;\"><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_app_name_error' class=\"ZmAppNameError ZmTwoFactorSetupError\"></div><label style=\"margin:10px;\" for=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_app_name_input\">";
	buffer[_i++] = ZmMsg.twoStepAuthAppName;
	buffer[_i++] = "</label><input type=\"text\" id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_app_name_input\" autocomplete=\"off\" size=\"30\"/></div></div><div id='";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_app_passcode'><div style=\"padding:7px;\">";
	buffer[_i++] = ZmMsg.twoStepAuthAppCodeDesc2;
	buffer[_i++] = "</div><div style=\"text-align:center; margin:10px;\">";
	buffer[_i++] = ZmMsg.twoStepAuthAppPasscode;
	buffer[_i++] = "<span id=\"";
	buffer[_i++] = data["id"];
	buffer[_i++] = "_app_passcode_value\" class=\"ZmAppPasscode\"></span></div></div></div>";

	return _hasBuffer ? buffer.length : buffer.join("");
},
{
	"id": "prefs.Pages#AddApplicationCode"
}, false);

