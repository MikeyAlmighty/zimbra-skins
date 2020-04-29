<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016 Synacor, Inc.
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
<%@ attribute name="folder" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZFolderBean" %>
<%@ attribute name="base" rtexprvalue="true" required="false" %>
<%@ attribute name="types" rtexprvalue="true" required="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>                                                
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="mo" uri="com.zimbra.mobileclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<c:set var="label" value="${zm:getFolderPath(pageContext, folder.id)}"/>
<c:set var="truncatedLabel" value="${zm:getTruncatedFolderPath(pageContext, folder.id, 20, true)}"/>
<c:choose>
    <c:when test="${ua.isiPad == true}">
        <c:set var="baseUrl" value="zipad"/>
    </c:when>
    <c:otherwise>
        <c:set var="baseUrl" value="zmain"/>
    </c:otherwise>
</c:choose>
<c:url var="url" value="${empty base ? baseUrl  : base}">
    <c:param name="sfi" value="${folder.id}"/>
    <c:if test="${!empty types}"><c:param name="st" value="${types}"/></c:if>
    <c:if test="${empty types}"><c:param name="st" value="${folder.isMessageView ? 'message' : folder.isConversationView ? 'conversation' : 'message'}"/></c:if>
</c:url>
<div class='Folders ${param.id eq folder.id ? 'StatusWarning' : ''} list-row${folder.hasUnread ? '-unread' : ''}'
     <c:if test="${types ne 'cal' && !ua.isIE}">onclick='return zClickLink("FLDR${folder.id}")'</c:if>>
    <div class="tbl">
    <div class="tr">
    <c:if test="${types eq 'cal'}">
    <span class="${folder.styleColor}Bg td left" width="1%">
    <input type="checkbox" onchange="fetchIt('?${folder.isCheckedInUI ? 'un' : ''}check=${folder.id}&st=cals&_ajxnoca=1',GC(),'POST');"
           value="${folder.id}" name="calid" ${folder.isCheckedInUI ? 'checked=checked':''}>
    </span>
    </c:if>
    <span class='td left' onclick='return zClickLink("FLDR${folder.id}")' width="94%">
        <a id="FLDR${folder.id}" href="${fn:escapeXml(url)}">
            <c:if test="${ua.isiPad eq false}"><span class="Img Img${folder.type}">&nbsp;</span></c:if>
            ${truncatedLabel} <c:if test="${folder.hasUnread}">&nbsp;(${folder.unreadCount})</c:if>
        </a>
    </span>
    <c:if test="${!folder.isSystemFolder}">
        <c:choose>
            <c:when test="${folder.isSearchFolder}">
                <c:set var="what" value="Search"/>
            </c:when>
            <c:otherwise>
                <c:choose>
                    <c:when test="${param.st eq 'folders'}">
                        <c:set var="what" value="Folder"/>
                    </c:when>
                    <c:when test="${param.st eq 'ab'}">
                        <c:set var="what" value="AB"/>
                    </c:when>
                    <c:when test="${param.st eq 'cals'}">
                        <c:set var="what" value="Cal"/>
                    </c:when>
                    <c:when test="${param.st eq 'notebooks'}">
                        <c:set var="what" value="NB"/>
                    </c:when>
                    <c:when test="${param.st eq 'briefcases'}">
                        <c:set var="what" value="BC"/>
                    </c:when>
                    <c:when test="${param.st eq 'tasks'}">
                        <c:set var="what" value="Task"/>
                    </c:when>
                </c:choose>
            </c:otherwise>
        </c:choose>
        <span class="td right editFix" width="5%"><a class="Img ImgEdit" href="?st=${param.st}&_ajxnoca=1&show${what}Create=1&${folder.isSearchFolder ? 's' : ''}id=${folder.id}">&nbsp;</a></span>
    </c:if>
        </div>
    </div>
</div>
