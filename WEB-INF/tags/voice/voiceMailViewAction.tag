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
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<app:handleError>
<zm:requirePost/>
<zm:checkCrumb crumb="${param.crumb}"/>
<zm:getMailbox var="mailbox"/>
<c:set var="phone" value="${param.phone}"/>
<c:set var="ids" value="${zm:deserializeVoiceMailItemIds(paramValues.voiceId, phone)}"/>
<c:set var="folderId" value="${not empty paramValues.folderId[0] ? paramValues.folderId[0] : paramValues.folderId[1]}"/>
<c:set var="actionOp" value="${not empty paramValues.actionOp[0] ? paramValues.actionOp[0] :  paramValues.actionOp[1]}"/>
<c:choose>
    <c:when test="${zm:actionSet(param, 'actionDelete')}">
        <zm:trashVoiceMail var="result" phone="${phone}" id="${ids}"/>
		<c:redirect url="/h/search">
			<c:param name="st" value="voicemail"/>
			<c:param name="sq" value="phone:${phone} in:\"Voicemail Inbox\""/>
			<c:param name="action" value="actionMessageMovedTrash"/>
			<c:param name="doVoiceMailListViewAction" value="1"/>
		</c:redirect>
    </c:when>
    <c:when test="${zm:actionSet(param, 'actionUndelete')}">
        <zm:untrashVoiceMail var="result" phone="${phone}" id="${ids}"/>
        <app:status>
            <fmt:message key="actionVoiceMailMovedInbox">
                <fmt:param value="${result.idCount}"/>
            </fmt:message>
        </app:status>
    </c:when>
    <c:when test="${zm:actionSet(param, 'actionHardDelete')}">
        <zm:emptyVoiceMailTrash var="result" phone="${phone}" folderId="${folderId}"/>
        <app:status>
			<fmt:message key="folderEmptied">
				<fmt:param><fmt:message key="trash"/></fmt:param>
			</fmt:message>
        </app:status>
    </c:when>
    <c:when test="${zm:actionSet(param, 'actionReplyByEmail') or zm:actionSet(param, 'actionForwardByEmail')}">
        <c:set var="hits" value="${zm:deserializeVoiceMailItemHits(paramValues.voiceId, phone)}"/>
        <c:choose>
            <c:when test="${empty paramValues.voiceId}">
                <app:status style="Warning">
                    <fmt:message key="actionNoVoiceMailMessageSelected"/>
                </app:status>
            </c:when>
            <c:when test="${fn:length(paramValues.voiceId) gt 1}">
                <app:status style="Warning">
                    <fmt:message key="actionVoiceMailTooMany"/>
                </app:status>
            </c:when>
            <c:when test="${hits[0].isPrivate}">
                <app:status style="Warning">
                    <fmt:message key="actionVoiceMailPrivate"/>
                </app:status>
            </c:when>
            <c:otherwise>
                <zm:uploadVoiceMail var="uploadId" phone="${phone}" id="${ids}"/>
                <c:choose>
                    <c:when test="${zm:actionSet(param, 'actionReplyByEmail')}">
                        <c:set var="subjectKey" value="voiceMailReplySubject"/>
                    </c:when>
                    <c:otherwise>
						<c:set var="subjectKey" value="voiceMailForwardSubject"/>
                    </c:otherwise>
                </c:choose>
				<fmt:message key="${subjectKey}" var="subject"/>
				<fmt:message key="voiceMailBody" var="body">
                    <fmt:param value="${hits[0].displayCaller}"/>
                    <fmt:param value="${zm:displayDuration(pageContext, hits[0].duration)}"/>
                    <fmt:param value="${zm:displayMsgDate(pageContext, hits[0].date)}"/>
                </fmt:message>
				<zm:saveDraft subject="${subject}" content="${body}" contenttype="text/html"
							  var="draftMessage" attachmentuploadid="${uploadId}"/>
				<zm:currentResultUrl var="composeUrl" value="search" context="${context}"
                                     action="compose" paction="view" css="${param.css}"
                                     phone="${phone}" id="${draftMessage.id}"/>
                <c:redirect url="${composeUrl}"/>
            </c:otherwise>
        </c:choose>
    </c:when>
    <c:when test="${zm:actionSet(param, 'actionMarkHeard')}">
        <zm:markVoiceMailHeard var="result" phone="${phone}" id="${ids}" heard="true"/>
        <app:status>
            <fmt:message key="actionVoiceMailMarkedHeard">
                <fmt:param value="${result.idCount}"/>
            </fmt:message>
        </app:status>
	</c:when>
    <c:when test="${zm:actionSet(param, 'actionMarkUnheard')}">
        <zm:markVoiceMailHeard var="result" phone="${phone}" id="${ids}" heard="false"/>
        <app:status>
            <fmt:message key="actionVoiceMailMarkedUnheard">
                <fmt:param value="${result.idCount}"/>
            </fmt:message>
        </app:status>
    </c:when>
	<c:otherwise>
		<app:status style="Warning"><fmt:message key="actionNoActionSelected"/></app:status>
	</c:otherwise>
</c:choose>

</app:handleError>