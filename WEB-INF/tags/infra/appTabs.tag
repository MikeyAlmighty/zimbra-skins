<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="selected" rtexprvalue="true" required="false" %>
<%@ attribute name="keys" rtexprvalue="true" required="true" %>
<%@ attribute name="mailbox" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZMailboxBean"%>
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext"%>
<%@ attribute name="nofiller" rtexprvalue="true" required="false" type="java.lang.Boolean" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<table>
    <tr class='AppTabs'>
        <td class='TabSpacer'/>
        <c:if test="${zm:boolean(mailbox.features.portalEnabled)}">
            <td></td>
            <td class='Tab ${selected=='home' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_HOME' href="<c:url value="/h/home"/>" <c:if test="${keys}">accesskey="v"</c:if>>
                    <span id='tab_ikon_home'><app:img src="common/ImgGlobe.png" altkey='ALT_APP_HOME'/></span>
                    <span><fmt:message key="home"/></span>
                </a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${zm:isMailEnabled(mailbox)}">
        <td class='Tab ${selected=='mail' ? 'AppTabSelected' :'AppTabNormal'}'>
            <a id='TAB_MAIL' href="<c:url value="/h/search"/>">
              <span id='tab_ikon_mail'><app:img src="startup/ImgMailApp.png" altkey='ALT_APP_MAIL'/>
              </span>
                <span><fmt:message key="mail"/></span>
            </a>
        </td>
        </c:if>
        <td class='TabSpacerR'/>
        <c:if test="${zm:boolean(mailbox.licenses.voice)}">
            <td class='TabSpacer'/>
            <td class='Tab ${selected=='voice' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_VOICE' href="<c:url value="/h/search?st=voicemail"/>" <c:if test="${keys}">accesskey="v"</c:if>><span id='tab_ikon_voice'><app:img src="voicemail/ImgVoicemailApp.png" altkey='ALT_APP_CONTACTS'/></span><span><fmt:message
                        key="voice"/></span></a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${zm:boolean(mailbox.features.contacts)}">
            <td class='TabSpacer'/>
            <td class='Tab ${selected=='contacts' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_ADDRESSBOOK' href="<c:url value="/h/search?st=contact"/>">
                   <span id='tab_ikon_contacts'><app:img src="contacts/ImgContact.png" altkey='ALT_APP_CONTACTS'/></span><span><fmt:message
                        key="addressBook"/></span></a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${mailbox.features.calendar or mailbox.features.calendarUpsell}">
            <td class='TabSpacer'/>
            <td class='Tab ${selected=='calendar' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_CALENDAR' href="<c:url value="/h/calendar"/>">
                    <span id='tab_ikon_calendar'><app:img src="startup/ImgCalendarApp.png" altkey='ALT_APP_CALENDAR'/></span><span><fmt:message
                        key="calendar"/></span></a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${mailbox.features.tasks}">
            <td class='TabSpacer'/>
            <td class='Tab ${selected=='tasks' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_TASKS' href="<c:url value="/h/search?st=task"/>">
                    <span id='tab_ikon_tasks'><app:img src="zimbra/ImgTask.png" altkey='ALT_APP_TASK'/></span><span><fmt:message
                        key="tasks"/></span></a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${zm:boolean(mailbox.features.notebook)}">
            <td class='TabSpacer'/>
            <td class='Tab ${selected=='wiki' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_NOTEBOOK' href="<c:url value="/h/search?st=wiki"/>">
                    <span id='tab_ikon_notebook'><app:img src="startup/ImgNoteApp.png" altkey='ALT_APP_NOTEBOOK'/></span><span><fmt:message
                        key="notebook"/></span></a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${zm:boolean(mailbox.features.briefcases)}">
            <td class='TabSpacer'/>
            <td class='Tab ${selected=='briefcase' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_BRIEFCASES' href="<c:url value="/h/search?st=briefcase"/>">
                    <span id='tab_ikon_briefcases'><app:img src="startup/ImgFolder.png" altkey='ALT_APP_BRIEFCASE'/></span><span><fmt:message
                        key="briefcase"/></span></a>
            </td>
            <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${zm:boolean(mailbox.features.options)}">
	        <td class='TabSpacer'/>
	        <td class='Tab ${selected=='options' ? 'AppTabSelected' :'AppTabNormal'}'>
                <a id='TAB_OPTIONS' href="<c:url value="/h/options?prev=${zm:cook(selected)}"/>">
	                <span id='tab_ikon_options'><app:img src="startup/ImgPreferences.png" altkey='ALT_APP_OPTIONS'/></span><span><fmt:message
	                    key="options"/></span></a>
	        </td>
	        <td class='TabSpacerR'/>
        </c:if>
        <c:if test="${zm:isMailEnabled(mailbox)}">
        <td class='TabSpacer'/>
        <td class='Tab ${selected=='compose' ? 'AppTabSelected' :'AppTabNormal'}'>
            <c:choose>
                <c:when test="${not empty context}">
                    <c:choose>
                        <c:when test="${selected=='voice' && param.action=='listen'}">
                            <zm:currentResultUrl var="composeUrl" value="/h/search" context="${context}" paction="${param.action}" action="compose" voiceId="${param.voiceId}" phone="${param.phone}" hideSearchString="true"/>
                        </c:when>
                        <c:otherwise>
                            <zm:currentResultUrl var="composeUrl" value="/h/search" context="${context}" paction="${param.action}" action="compose"/>
                        </c:otherwise>
                    </c:choose>
                </c:when>
                <c:otherwise>
                    <c:url var="composeUrl" value="/h/search?action=compose"/>
                </c:otherwise>
            </c:choose>
            <a id='TAB_COMPOSE' href="${fn:escapeXml(composeUrl)}"><span id='tab_ikon_compose'><app:img src="startup/ImgNewMessage.png" altkey='ALT_APP_COMPOSE'/></span><span><fmt:message
                    key="compose"/></span></a>
        </td>
        <td class='TabSpacerR'/>
        </c:if>    
	    <c:if test='${empty nofiller or not nofiller}'>
		    <td class='TabSpacer'/>
		    <td class="TabFiller">&nbsp;</td>
	    </c:if>
    </tr>
</table>
