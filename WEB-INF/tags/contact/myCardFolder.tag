<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="myCard" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZContactBean" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<fmt:message key="myCard" var="label"/>
<c:set var="padFudge" value="20"/>
<tr>
    <td nowrap colspan="3" class='Gray Folder'
        style='padding-left: ${padFudge}px'>
		<!-- My card always goes straight into edit mode... -->
		<c:url var="url" value="/h/search">
            <c:param name="sfi" value="${myCard.folderId}"/>
            <c:param name="st" value="contact"/>
            <c:param name="id" value="${myCard.id}"/>
            <c:param name="actionEdit" value="true"/>
            <c:param name="doContactListViewAction" value="true"/>
            <c:param name="myCard" value="${true}"/>            
        </c:url>

        <a href='${fn:escapeXml(url)}'>
            <app:img src="contacts/ImgPerson.png" alt='${fn:escapeXml(label)}'/>
            <span <c:if test="${requestScope.myCardSelected}"> class='ZhTISelected'</c:if>>
             ${zm:truncate(fn:escapeXml(label),20,true)}
            </span>
        </a>
    </td>
</tr>

