<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="keys" rtexprvalue="true" required="false" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<c:set var="label" value="${zm:getFolderName(pageContext, folder.id)}"/>
<c:set var="truncatedLabel" value="${zm:getTruncatedFolderName(pageContext, folder.id, 15, true)}"/>
<c:set var="padFudge" value="${folder.hasChildren ? 0 : 20}"/>
<fmt:message var="colorMsg" key="${folder.rgbColorMsg}"/>
<c:set var="color" value="${zm:lightenColor(not empty folder.rgb ? folder.rgb : colorMsg)}"/>
<tr>
    <td nowrap colspan="3" style="background-color:${color}" class='Folder<c:if test="${folder.hasUnread}"> Unread</c:if>'
        style="padding-left: ${padFudge+folder.depth*8}px">
        <c:url var="url" value="/h/${empty base ? 'search' : base}">
            <c:param name="sfi" value="${folder.id}"/>
            <c:param name="st" value="briefcase"/>
            <c:param name="view" value="${param.view}"/>
        </c:url>
        <c:if test="${folder.hasChildren}">
            <c:set var="expanded" value="${sessionScope.expanded[folder.id] ne 'collapse'}"/>
            <c:url var="toggleUrl" value="/h/search">
                <c:param name="${expanded ? 'collapse' : 'expand'}" value="${folder.id}"/>
                <c:param name="st" value="briefcase"/>
                <c:param name="view" value="${param.view}"/>
            </c:url>
            <a href="${fn:escapeXml(toggleUrl)}">
                <app:img src="${expanded ? 'startup/ImgNodeExpanded.png' : 'startup/ImgNodeCollapsed.png'}" altkey="${expanded ? 'ALT_TREE_EXPANDED' : 'ALT_TREE_COLLAPSED'}"/>
            </a>
        </c:if>
        <%--<span style='width:20px'><c:if test="${folder.hasChildren}"><app:img src="startup/ImgNodeExpanded.gif"/></c:if></span>--%>
        <a href='${fn:escapeXml(url)}' id="FLDR${folder.id}">
            <app:img src="${folder.image}" alt='${label}'/>
            <span <c:if test="${folder.id eq requestScope.context.selectedId}"> class='ZhTISelected'</c:if>>
                ${truncatedLabel}
                <c:if test="${folder.hasUnread}">(${folder.unreadCount}) </c:if>
            </span>
        </a>

    </td></tr>

