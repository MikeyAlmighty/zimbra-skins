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
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<app:handleError>
    <zm:getMailbox var="mailbox"/>
    <c:choose>
        <c:when test="${param.useInstance eq '1' and not empty param.exInvId}">
            <c:set var="id" value="${param.exInvId}"/>
            <c:set var="compNum" value="${empty param.exCompNum ? 0 : param.exCompNum}"/>
        </c:when>
        <c:otherwise>
            <c:set var="id" value="${param.invId}"/>
            <c:set var="compNum" value="${empty param.invCompNum ? 0 : param.invCompNum}"/>
        </c:otherwise>
    </c:choose>
    <zm:getMessage var="msg" id="${id}" markread="true" neuterimages="${empty param.xim}"/>
    <c:set var="invite" value="${msg.invite}"/>
    <c:set var="isInstance" value="${param.useInstance eq '1'}"/>

    <c:set var="apptFolder" value="${zm:getFolder(pageContext, msg.folderId)}"/>
    <c:set var="readOnly" value="${apptFolder.isMountPoint or apptFolder.isFeed}"/>
    
</app:handleError>

<app:view mailbox="${mailbox}" title="${msg.subject}" context="${null}" selected='calendar' calendars="true" keys="false" minical="true" date="${requestScope.dateContext}" tags="true">
    <app:keyboard mailbox="${mailbox}" globals="true" cache="cal.apptView">
        <zm:bindKey message="global.Cancel" id="OPCLOSE"/>
    </app:keyboard>
    <form action="" method="post">

        <table width="100%">
            <tr>
                <td class='TbTop'>
                    <app:apptViewToolbar isReadOnly="${readOnly}" isInstance="${isInstance}" keys="true"/>
                </td>
            </tr>
            <tr>
                <td class='ZhAppContent'>
                    <table width="100%">
                        <c:if test="${zm:boolean(isInstance)}">
                            <tr>
                                <td>
                                    <table width="100%">
                                        <tr>
                                            <td class='ZhApptRecurrInfo' style='padding-left:5px' width="24"><app:img src="dwt/ImgInformation.png" alt="info"/></td>
                                            <td class='ZhApptRecurrInfo'>
                                                <app:calendarUrl toggleInstance="true" var="apptUrl"/>
                                                <fmt:message key="apptInstViewNote"/>
                                                &nbsp;<a href="${fn:escapeXml(apptUrl)}"><fmt:message key="apptInstViewSeries"/></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </c:if>
                        <tr>
                            <td>
                                <c:set var="extImageUrl" value=""/>
                                <c:if test="${empty param.xim}">
                                    <zm:currentResultUrl var="extImageUrl" value="search" action="view" context="${context}" xim="1"/>
                                </c:if>
                                <%--
                                <zm:currentResultUrl var="composeUrl" value="search" context="${context}"
                                             action="compose" paction="view" id="${msg.id}"/>
                                             --%>
                                <app:calendarUrl var="composeUrl" id="${id}" action="compose" paction="view" apptFromParam="${true}" inviteReplyInst="${isInstance ? param.instStartTime : ''}"  inviteReplyAllDay="${isInstance and invite.component.allDay ? '1' : ''}"/>
                                <%-- <zm:currentResultUrl var="newWindowUrl" value="message" context="${context}" id="${msg.id}"/> --%>
                                <app:displayAppointment mailbox="${mailbox}" message="${msg}" invite="${invite}"
                                                        showInviteReply="${not readOnly}" externalImageUrl="${extImageUrl}" composeUrl="${composeUrl}" newWindowUrl=""/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td class='TbBottom'>
                    &nbsp;
                </td>
            </tr>
        </table>
        <input type="hidden" name="id" value="${msg.id}"/>
        <input type="hidden" name="crumb" value="${fn:escapeXml(mailbox.accountInfo.crumb)}"/>
    </form>

</app:view>
