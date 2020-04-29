<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="heard" rtexprvalue="true" required="true" type="java.lang.Boolean"%>
<%@ attribute name="isPrivate" rtexprvalue="true" required="true" type="java.lang.Boolean"%>
<%@ attribute name="saveAsUrl" rtexprvalue="true" required="true" type="java.lang.String"%>
<%@ attribute name="keys" rtexprvalue="true" required="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<zm:getMailbox var="mailbox"/>

<table width="100%" cellspacing="0" class='Tb'>
	  <tr valign='middle'>
		<td class='TbBT'>
			<table cellspacing="0" cellpadding="0" class='Tb'>
				<tr>
					<td nowrap>
						<zm:currentResultUrl var="closeurl" value="/h/search" index="${context.currentItemIndex}" context="${context}"/>
						<zm:currentResultUrl var="delRedirectUrl" value="/h/search" context="${context}" />
						<input type="hidden" value="${delRedirectUrl}" name="delRedirectUrl" />
						<a href="${fn:escapeXml(closeurl)}" <c:if test="${keys}">id="CLOSE_ITEM"</c:if>> <app:img src="common/ImgClose.png" alt="close"/> <span>&nbsp;<fmt:message key="backToVoiceMail"/>&nbsp;</span></a>
					</td>
					<td><div class='vertSep'/></td>
					<app:button id="${keys ? 'OPDELETE' :''}" name="actionDelete" src="startup/ImgDelete.png" text="actionDelete" tooltip="actionTrashTT"/>
					<td><div class='vertSep'/></td>
					<c:set var="disableMailButtons" value="${(mailbox.features.mail ne true) or isPrivate}"/>
					<app:button id="OPREPLYBYEMAIL" name="actionReplyByEmail" text="actionReplyByEmail" src="startup/ImgReply.png" tooltip="actionReplyByEmailTT" disabled="${disableMailButtons}"/>
					<app:button id="OPFORWARDBYEMAIL" name="actionForwardByEmail" text="actionForwardByEmail" src="startup/ImgForward.png" tooltip="actionForwardByEmailTT" disabled="${disableMailButtons}"/>
					<td><div class='vertSep'/></td>
					<td><a id="IOPDOWNLOAD" href="${saveAsUrl}"><app:img src="common/ImgSave.png" altkey="actionDownload" clazz="${isPrivate ? 'ImgDisabled' : ''}" /></a></td>
					<td><div class='vertSep'/></td>
					<app:button id="OPHEARD" name="actionMarkHeard" text="actionMarkHeard" src="voicemail/ImgMarkAsHeard.png" tooltip="actionMarkHeardTT" disabled="${isTrash or heard}"/>
					<app:button id="OPUNHEARD" name="actionMarkUnheard" text="actionMarkUnheard" src="voicemail/ImgMarkAsUnheard.png" tooltip="actionMarkUnheardTT" disabled="${isTrash or not heard}"/>
				</tr>
			</table>
		</td>
<%-- Do this later: next/prev item buttons...
		<td align="right">
			<c:if test="${context.hasPrevItem}">
				<zm:prevItemUrl var="prevItemUrl" value="/h/search" action="view" cursor="${cursor}" context="${context}"/>
				<a  <c:if test="${keys}">id="PREV_ITEM" </c:if> href="${fn:escapeXml(prevItemUrl)}"><app:img altkey="ALT_MSG_PREVIOUS_MESSAGE" src="startup/ImgLeftArrow.png" border="0" alt="prev"/></a>
			</c:if>
			<c:if test="${!context.hasPrevItem}">
				<app:img disabled='true' src="startup/ImgLeftArrow.png" border="0" alt="no prev"/>
			</c:if>
			<span class='Paging'>${context.searchResult.offset+context.currentItemIndex+1}</span>
			<c:if test="${context.hasNextItem}">
				<zm:nextItemUrl var="nextItemUrl" value="/h/search" action="view" cursor="${cursor}" context="${context}"/>
				<a  <c:if test="${keys}">id="NEXT_ITEM" </c:if> href="${fn:escapeXml(nextItemUrl)}"><app:img altkey="ALT_MSG_NEXT_MESSAGE" src="startup/ImgRightArrow.png" border="0" alt="next"/></a>
			</c:if>
			<c:if test="${!context.hasNextItem}">
				<app:img disabled='true' src="startup/ImgRightArrow.png" border="0" alt="no next"/>
			</c:if>
		</td>
--%>
	</tr>
</table>

