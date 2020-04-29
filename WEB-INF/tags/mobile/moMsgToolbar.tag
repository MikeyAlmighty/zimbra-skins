<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2011, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="mailbox" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZMailboxBean"%>
<%@ attribute name="urlTarget" rtexprvalue="true" required="true" %>
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext" %>
<%@ attribute name="mid" rtexprvalue="true" required="true" %>
<%@ attribute name="isTop" rtexprvalue="true" required="false" %>
<%@ attribute name="msg" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZMessageBean" %>
<%@ attribute name="keys" rtexprvalue="true" required="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<zm:currentResultUrl var="closeUrl" value="${urlTarget}" context="${context}"/>
<zm:computeNextPrevItem var="cursor" searchResult="${context.searchResult}" index="${context.currentItemIndex}"/>
<zm:getUserAgent var="ua" session="true"/>
<c:choose>
    <c:when test="${ua.isiPad == true}">
        <div class="tb tbl"><div class="tr"><div class="td toolbar">
            <div class="compose button" onclick="return zClickLink('compose');">
                <c:url var="composeUrl" value="${urlTarget}?st=newmail"/>
                <a accesskey="${requestScope.mainaction_accesskey}" href="${composeUrl}" id="compose"><fmt:message key="compose"/></a>
            </div> 
            <div class="actions">
                <div class="actionLeft button" onclick="return zClickLink('reply');">
                    <a href="?st=newmail&amp;id=${msg.id}&amp;op=reply" id="reply"><fmt:message key="reply"/></a>
                </div>
                <div class="actionCenter button" onclick="return zClickLink('replyall');">
                    <a href="?st=newmail&id=${msg.id}&amp;op=replyAll" id="replyall"><fmt:message key="replyAll"/></a>
                </div>
                <div class="actionRight button" onclick="return zClickLink('forward');">
                    <a href="?st=newmail&id=${msg.id}&amp;op=forward" id="forward"><fmt:message key="forward"/></a>
                </div>
            </div>
        </div></div></div>
    </c:when>
    <c:otherwise>
        <c:if test="${isTop}"><div class="stb tbl"><div class="tr"><div class="td">
            <a accesskey="${requestScope.navlink_accesskey}" href="${urlTarget}?st=folders"><fmt:message key="folders"/></a> &laquo; <a href="${fn:escapeXml(closeUrl)}${empty param.ajax ? '#msg' : '&msg'}${mid}" class='zo_leftbutton'>${fn:escapeXml(zm:truncateFixed(context.shortBackTo,15,true))}</a>
                &laquo; ${fn:escapeXml(zm:truncateFixed(msg.subject,12,true))}
        </div></div></div></c:if>
        <div class="tb tbl"><div class="tr"><div class="td">
        <span class="zo_button_group">
        <c:choose>
                <c:when test="${cursor.hasPrev}">
                    <zm:prevItemUrl var="prevMsgUrl" value="${urlTarget}" action='view' _pv="1"
                                    cursor="${cursor}" context="${context}"/>
                    <a accesskey="${requestScope.prev_accesskey}" class='zo_button prev_button' href="${fn:escapeXml(prevMsgUrl)}"><fmt:message key="MO_PREV"/></a>
                </c:when>
                <c:otherwise><a class='zo_button_disabled prev_button'><fmt:message key="MO_PREV"/></a></c:otherwise>
            </c:choose>
        <c:choose>
            <c:when test="${cursor.hasNext}">
                <zm:nextItemUrl var="nextMsgUrl" value="${urlTarget}" action='view'
                                cursor="${cursor}" context="${context}"/>
                <a accesskey="${requestScope.next_accesskey}" class='zo_button next_button' href="${fn:escapeXml(nextMsgUrl)}"><fmt:message key="MO_NEXT"/></a>
            </c:when>
            <c:otherwise>
                <a class='zo_button_disabled next_button'><fmt:message key="MO_NEXT"/></a>
            </c:otherwise>
        </c:choose>
        </span>
        <span>
            <c:set var="myFolder" value="${zm:getFolder(pageContext, msg.folderId)}"/>
            <c:set var="inTrash" value="${myFolder.isInTrash}"/>
            <select class="zo_select_button" name="${isTop ? 'anAction' : 'anActionBottom'}" onchange="submitForm(document.getElementById('zForm'));">
                <option value="" selected="selected"><fmt:message key="moreActions"/></option>
                <c:choose>
                    <c:when test="${inTrash}"><option value="actionHardDelete"><fmt:message key="delete"/></option></c:when>
                    <c:otherwise><option value="actionDelete"><fmt:message key="delete"/></option></c:otherwise>
                </c:choose>
                <optgroup label="<fmt:message key="markAs"/>">
                    <c:if test="${msg.isUnread}"><option value="actionMarkRead"><fmt:message key="MO_read"/></option></c:if>
                    <c:if test="${not msg.isUnread}"><option value="actionMarkUnread"><fmt:message key="MO_unread"/></option></c:if>
                    <c:if test="${mailbox.features.spam}">
                        <c:choose>
                            <c:when test="${myFolder.isSpam}"><option value="actionMarkUnspam"><fmt:message key="actionNotSpam"/></option></c:when>
                            <c:otherwise><option value="actionMarkSpam"><fmt:message key="actionSpam"/></option></c:otherwise>
                        </c:choose>
                    </c:if>
                </optgroup>
                <optgroup label="<fmt:message key="MO_flag"/>">
                    <c:if test="${not msg.isFlagged}"><option value="actionFlag"><fmt:message key="add"/></option></c:if>
                    <c:if test="${msg.isFlagged}"><option value="actionUnflag"><fmt:message key="remove"/></option></c:if>
                </optgroup>
                <optgroup label="<fmt:message key="moveAction"/>"><c:set var="count" value="${0}"/>
                    <zm:forEachFolder var="folder"><c:if test="${count lt sessionScope.F_LIMIT and folder.id != context.folder.id and folder.isMessageMoveTarget and !folder.isTrash and !folder.isSpam}">
                    <option value="moveTo_${folder.id}">${zm:getFolderPath(pageContext, folder.id)}</option><c:set var="count" value="${count+1}"/></c:if></zm:forEachFolder>
                </optgroup>
                <c:if test="${mailbox.features.tagging and mailbox.hasTags}">
                    <c:set var="tagsToAdd" value="${zm:getAvailableTags(pageContext,msg.tagIds,true)}"/>
                    <c:set var="tagsToRemove" value="${zm:getAvailableTags(pageContext,msg.tagIds,false)}"/>
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
        <span class=""><c:url var="composeUrl" value="${urlTarget}?st=newmail"/><a accesskey="${requestScope.mainaction_accesskey}" href="${composeUrl}" class="zo_button"><fmt:message key="compose"/></a></span>
        </div></div></div>
    </c:otherwise>
</c:choose>    