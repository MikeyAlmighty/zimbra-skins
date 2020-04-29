<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2012, 2013, 2014, 2016 Synacor, Inc.
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
<%@ tag body-content="empty" dynamic-attributes="dynattrs" %>
<%@ attribute name="urlTarget" rtexprvalue="true" required="true" %>
<%@ attribute name="mailbox" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZMailboxBean"%>
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext" %>
<%@ attribute name="contact" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZContactBean" %>
<%@ attribute name="isTop" rtexprvalue="true" required="false" %>
<%@ attribute name="keys" rtexprvalue="true" required="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<zm:currentResultUrl var="closeUrl" value="${urlTarget}" context="${context}"/>
<mo:handleError>
<zm:getUserAgent var="ua" session="true"/>
</mo:handleError>
<c:if test="${isTop and isiPad==false}"><div class="stb tbl"><div class="tr"><div class="td">
    <c:url value="${closeUrl}" var="backUrl"><c:param name="_pv" value="1"/></c:url>
    <a accesskey="${requestScope.navlink_accesskey}" href="${urlTarget}?st=ab"><fmt:message key="addressBooks"/></a> &laquo;
    <a href="${fn:escapeXml(backUrl)}<c:if test="${empty context.sfi}">&sfi=${contact.folderId}</c:if>${empty param.ajax ? '#cn' : '&cn'}${contact.id}" class='zo_leftbutton'>${fn:escapeXml(zm:truncate(context.shortBackTo,15,true))}</a> &laquo;
    ${fn:escapeXml(fn:substring(contact.firstName,0,8))}...
</div></div></div></c:if>
<div class="tb tbl "><div class="tr"><div class="td toolbar">
<c:url var="editUrl" value="${closeUrl}">
    <c:param name="action" value="edit"/>
    <c:param name="id" value="${contact.id}"/>
    <c:param name="pid" value="${contact.id}"/>
    <c:param name="_ajxnoca" value="1"/>
</c:url>
<c:choose>
    <c:when test="${ua.isiPad == true}">
        <c:url var="addUrl" value="${closeUrl}">
            <c:param name="action" value="edit"/>
            <c:param name="pid" value="${contact.id}"/>
            <c:param name="folderid" value="${context.folder.id}"/>
        </c:url>
        <c:set var="nmail" value="st=newmail"/>
        <c:url var="murl" value="?${nmail}">
        <c:param name="to" value="${contact.email}"/>
        </c:url>
        <div class ="compose button"><a id="add" accesskey="${requestScope.mainaction_accesskey}" href="${addUrl}"><span onclick="return zClickLink('add')"><fmt:message key="add"/></span></a></div>
        <div class ="">
            <div class ="actions">
            	<div class="actionLeft button">
            		<a href="${fn:escapeXml(murl)}"><span onclick="return zClickLink('newmail', null, this)"><fmt:message key="compose"/></span></a>
            	</div>
            	<div class="actionRight button">
            		&nbsp; <a id="edit" accesskey="${requestScope.mainaction_accesskey}" href="${editUrl}"><span onclick="return zClickLink('edit')"><fmt:message key="edit"/></span></a> &nbsp;
            	</div>
            
            </div>
        </div>
    </c:when>
    <c:otherwise>
        <zm:computeNextPrevItem var="cursor" searchResult="${context.searchResult}" index="${context.currentItemIndex}"/>
        <span class="zo_button_group">
        <c:choose>
            <c:when test="${cursor.hasPrev}">
                <zm:prevItemUrl var="prevMsgUrl" value="${urlTarget}" action='view'
                                cursor="${cursor}" context="${context}" _pv="1"/>
                <a accesskey="${requestScope.prev_accesskey}" href="${fn:escapeXml(prevMsgUrl)}" class='zo_button prev_button'><fmt:message key="MO_PREV"/></a>
            </c:when>
            <c:otherwise><a class='zo_button_disabled prev_button'><fmt:message key="MO_PREV"/></a></c:otherwise>
        </c:choose>
        <c:choose>
            <c:when test="${cursor.hasNext}">
                <zm:nextItemUrl var="nextMsgUrl" value="${urlTarget}" action='view'
                                cursor="${cursor}" context="${context}"/>
                <a accesskey="${requestScope.next_accesskey}" href="${fn:escapeXml(nextMsgUrl)}" class='zo_button next_button'><fmt:message key="MO_NEXT"/></a>
            </c:when>
            <c:otherwise><a class='zo_button_disabled next_button'><fmt:message key="MO_NEXT"/></a></c:otherwise>
        </c:choose>
        </span>
        <span>
        <select class="zo_select_button" name="anAction" onchange="submitForm(document.getElementById('zForm'));">
        <option value="" selected="selected"><fmt:message key="moreActions"/></option>
        <c:choose>
            <c:when test="${not context.folder.isInTrash}"><option value="actionDelete"><fmt:message key="delete"/></option></c:when>
            <c:otherwise><option value="actionHardDelete"><fmt:message key="delete"/></option></c:otherwise>
        </c:choose>
        <optgroup label="<fmt:message key="MO_flag"/>">
            <c:if test="${not contact.isFlagged}"><option value="actionFlag"><fmt:message key="add"/></option></c:if>
            <c:if test="${contact.isFlagged}"><option value="actionUnflag"><fmt:message key="remove"/></option></c:if>
        </optgroup>
        <optgroup label="<fmt:message key="moveAction"/>"><c:set var="count" value="${0}"/>
        <zm:forEachFolder var="folder">
            <c:if test="${count lt sessionScope.F_LIMIT and folder.id != context.folder.id and folder.isContactMoveTarget and !folder.isTrash and !folder.isSpam}"><option value="moveTo_${folder.id}">${zm:getFolderPath(pageContext, folder.id)}</option><c:set var="count" value="${count+1}"/></c:if>
        </zm:forEachFolder>
        </optgroup>
        <c:if test="${mailbox.features.tagging and mailbox.hasTags}">
            <c:set var="tagsToAdd"
                   value="${zm:getAvailableTags(pageContext,contact.tagIds,true)}"/>
            <c:set var="tagsToRemove"
                   value="${zm:getAvailableTags(pageContext,contact.tagIds,false)}"/>
            <optgroup label="<fmt:message key="MO_actionAddTag"/>">
                <c:forEach var="atag" items="${tagsToAdd}"><option value="addTag_${atag.id}">${fn:escapeXml(atag.name)}</option></c:forEach>
            </optgroup>
            <optgroup label="<fmt:message key="MO_actionRemoveTag"/>">
                <c:forEach var="atag" items="${tagsToRemove}"><option value="remTag_${atag.id}">${fn:escapeXml(atag.name)}</option></c:forEach>
            </optgroup>
        </c:if>
        </select><noscript><input id="actGo${isTop}" class="zo_button" name="moreActions" type="submit" value="<fmt:message key="actionGo"/>"/></noscript>
        <script type="text/javascript">var actGo=document.getElementById('actGo${isTop}');if(actGo){actGo.style.display='none';}</script>
        </span>
        <c:if test="${not contact.isGroup}">
        <span>
            <c:url var="addUrl" value="${closeUrl}">
                <c:param name="action" value="edit"/>
                <c:param name="pid" value="${contact.id}"/>
                <c:param name="folderid" value="${context.folder.id}"/>
            </c:url>
        <c:if test="${contact != null}"><a accesskey="${requestScope.mainaction_accesskey}" class="zo_button" href="${editUrl}"><fmt:message key="edit"/></a></c:if>
        <c:if test="${contact == null}"><a accesskey="${requestScope.mainaction_accesskey}" href="${addUrl}" class='zo_button'><fmt:message key="add"/></a></c:if>
        </span>
        </c:if>
    </c:otherwise>
</c:choose>
</div></div></div>