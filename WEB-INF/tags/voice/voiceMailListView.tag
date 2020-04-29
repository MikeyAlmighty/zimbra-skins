<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2012, 2013, 2014, 2016 Synacor, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software Foundation,
 * version 2 of the License.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 * ***** END LICENSE BLOCK *****
--%>
<%@ tag body-content="empty" %>
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<app:handleError>
    <zm:getMailbox var="mailbox"/>
	<zm:checkVoiceStatus var="voiceStatus"/>
	<app:searchTitle var="title" context="${context}"/>
    <c:set var="phone">${zm:getPhoneFromVoiceQuery(context.query)}</c:set>
	<c:set var="account" value="${zm:getPhoneAccount(pageContext, phone)}"/>
	<c:set var="hasVoiceMail" value="${(not empty account) and account.hasVoiceMail}"/>
	<c:set var="selectedRow" value="${not empty param.selectedRow ? param.selectedRow : 0}"/>
</app:handleError>
<app:view editmode="${voiceStatus eq 'false' ? 'true' : ''}" mailbox="${mailbox}" title="${title}" selected='voice' voice="true" folders="false" tags="false" searches="false" context="${context}" keys="true">
	<c:if test="${lastErrorCode eq 'voice.SECONDARY_NOT_ALLOWED'}">
		<div style="padding-left:22px">
			<fmt:message key="voice.SECONDARY_NOT_ALLOWED_VOICE"/>
		</div>
	</c:if>
	<c:if test="${voiceStatus}">
		<zm:currentResultUrl var="currentUrl" value="/h/search" context="${context}"/>
		<form name="zform" action="${currentUrl}" method="post">
			<table width=100% cellpadding="0" cellspacing="0">
				<tr>
					<td class='TbTop'>
						<app:voiceMailListViewToolbar context="${context}" keys="true"/>
					</td>
				</tr>
				<tr>
					<td class='List'>
						<c:if test="${hasVoiceMail}">
							<table width=100% cellpadding=2 cellspacing=0>
								<tr class='Header'>
									<th nowrap><input id="CHALL" onClick="checkAll(document.zform.voiceId,this)" type=checkbox name="allids"/></th>
									<th nowrap><app:img src="tasks/ImgTaskHigh.png" altkey="ALT_PRIORITY"/></th>
									<th width='40%' nowrap><fmt:message key="from"/></th>
									<th nowrap><fmt:message key="message"/></th>
									<th nowrap>
										<zm:newSortUrl var="durSortUrl" value="/h/search" context="${context}" sort="${(context.ss eq 'durDesc' or empty context.ss) ? 'durAsc' : 'durDesc'}"/>
										<a href="${durSortUrl}">
											<fmt:message key="duration"/>
										</a>
									</th>
									<th nowrap>
										<zm:newSortUrl var="dateSortUrl" value="/h/search" context="${context}" sort="${(context.ss eq 'dateDesc' or empty context.ss) ? 'dateAsc' : 'dateDesc'}"/>
										<a href="${dateSortUrl}">
											<fmt:message key="received"/>
										</a>
									</th>
								</tr>

								<c:forEach items="${context.searchResult.hits}" var="hit" varStatus="status">
								<tr onclick='zSelectRow(event,"A${status.index}")' id="R${status.index}" class='ZhRow ${hit.voiceMailItemHit.isUnheard ? ' Unread':''} ${ selectedRow eq status.index ? ' RowSelected' : ''}'>
									<td class='CB' nowrap><input  id="C${status.index}" type=checkbox name="voiceId" value="${hit.voiceMailItemHit.serialize}"></td>
									<td class='Img' nowrap>
										<c:choose>
											<c:when test="${hit.voiceMailItemHit.isFlagged}">
												<app:img src="tasks/ImgTaskHigh.png" altkey="ALT_PRIORITY"/>
											</c:when>
											<c:otherwise>&nbsp;</c:otherwise>
										</c:choose>
									</td>
									<td nowrap>${zm:getDisplayCaller(pageContext, hit.voiceMailItemHit.caller)}</td>
									<c:choose>
										<c:when test="${!empty hit.voiceMailItemHit.soundUrl}">
											<c:url var="url" value="/h/search">
												<c:param name="st" value="voicemail"/>
												<c:param name="sq" value="phone:${phone} in:\"Voicemail Inbox\""/>
												<c:param name="action" value="listen"/>
												<c:param name="phone" value="${phone}"/>
												<c:param name="voiceId" value="${hit.voiceMailItemHit.serialize}"/>
											</c:url>
											<td nowrap><a id="A${status.index}" href="${url}"><app:img src="voicemail/ImgPlayMessage.png" altkey="ALT_FLAGGED"/><u><fmt:message key="listen"/></u></a></td>
										</c:when>
										<c:otherwise>
											<td nowrap>&nbsp;</td>
										</c:otherwise>
									</c:choose>
									<td nowrap>${fn:escapeXml(zm:displayDuration(pageContext, hit.voiceMailItemHit.duration))}</td>
									<td nowrap>${fn:escapeXml(zm:displayVoiceDate(pageContext, hit.voiceMailItemHit.date))}</td>
								</tr>
								</c:forEach>
							</table>
							<c:if test="${context.searchResult.size == 0}">
								<div class='NoResults'><fmt:message key="noResultsFound"/></div>
							</c:if>
						</c:if>
						<c:if test="${!hasVoiceMail}">
							<div class='NoResults'><fmt:message key="noVoiceMail"/></div>
						</c:if>
					</td>
				</tr>
				<tr>
					<td class='TbBottom'>
						<app:voiceMailListViewToolbar context="${context}" keys="false"/>
					</td>
				</tr>
			</table>
			<input type="hidden" name="doVoiceMailListViewAction" value="1"/>
			<input type="hidden" name="phone" value="${phone}"/>
			<input type="hidden" name="crumb" value="${fn:escapeXml(mailbox.accountInfo.crumb)}"/>
			<input id="sr" type="hidden" name="selectedRow" value="${empty selectedRow ? 0 : zm:cook(selectedRow)}"/>
		</form>

		<SCRIPT TYPE="text/javascript">
			<!--
			var zrc = ${(not empty context.searchResult) ? context.searchResult.size : 0};
			var zsr = ${zm:cookInt(selectedRow, 0)};
			var zss = function(r,s) {
				var e = document.getElementById("R"+r);
				if (e == null) return;
				if (s) {
					if (e.className.indexOf(" RowSelected") == -1) e.className = e.className + " RowSelected";
					var e2 = document.getElementById("sr"); if (e2) e2.value = r;
				}
				else { if (e.className.indexOf(" RowSelected") != -1) e.className = e.className.replace(" RowSelected", "");}
			}
			var zsn = function() {if (zrc == 0 || (zsr+1 == zrc)) return; zss(zsr, false); zss(++zsr, true);}
			var zsp = function() {if (zrc == 0 || (zsr == 0)) return; zss(zsr, false); zss(--zsr, true);}
			var zclick = function(id) { var e2 = document.getElementById(id); if (e2) e2.click(); }
			var zdelete = function() { zclick("SOPDELETE"); }
			var zreply = function() { zclick("SOPREPLYBYEMAIL"); }
			var zforward = function() { zclick("SOPFORWARDBYEMAIL"); }
			var zheard = function() { zclick("SOPHEARD"); }
			var zunheard = function() { zclick("SOPUNHEARD"); }
			var zprint = function() { var e = document.getElementById("OPPRINT"); window.open(e.href, e.target); }
			/*var zcallManager = function() { var e = document.getElementById("OPCALLMANAGER"); window.location = e.href; }*/
			function zSelectRow(ev,id) {var t = ev.target || ev.srcElement;if (t&&t.nodeName != 'INPUT'){ var a = document.getElementById(id); if (a) window.location = a.href; } }
			var zlisten = function() {if (zrc == 0) return; var e = document.getElementById("A"+zsr); if (e && e.href) window.location = e.href;}
			//-->
		</SCRIPT>

		<app:keyboard cache="voice.voiceMailListView" globals="true" mailbox="${mailbox}" tags="false" folders="false">
			<zm:bindKey message="voicemail.Delete" func="zdelete"/>
			<zm:bindKey message="voicemail.Reply" func="zreply"/>
			<zm:bindKey message="voicemail.Forward" func="zforward"/>
			<zm:bindKey message="voicemail.MarkHeard" func="zheard"/>
			<zm:bindKey message="voicemail.MarkUnheard" func="zunheard"/>
			<zm:bindKey message="voicemail.Print" func="zprint"/>
			<%--zm:bindKey message="voicemail.CallManager" func="zcallManager"/--%>
			<zm:bindKey message="voicemail.Listen" func="zlisten"/>
			<zm:bindKey message="global.PreviousItem" func="zsp"/>
			<zm:bindKey message="global.NextItem" func="zsn"/>
			<zm:bindKey message="global.PreviousPage" id="PREV_PAGE"/>
			<zm:bindKey message="global.NextPage" id="NEXT_PAGE"/>
		</app:keyboard>
	</c:if>
</app:view>
