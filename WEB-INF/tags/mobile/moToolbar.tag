<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016 Synacor, Inc.
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
<%@ attribute name="mailbox" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZMailboxBean" %>
<%@ attribute name="urlTarget" rtexprvalue="true" required="true" %>
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext" %>
<%@ attribute name="isTop" rtexprvalue="true" required="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<c:set var="top_stb" value="${param.top_stb eq '0' ? '0' : (empty sessionScope.top_stb ? '1' : sessionScope.top_stb)}"/>
<c:set var="btm_stb" value="${param.btm_stb eq '0' ? '0' : (empty sessionScope.btm_stb ? '1' : sessionScope.btm_stb)}"/>
<c:set var="top_tb" value="${param.top_tb eq '0' ? '0' : (empty sessionScope.top_tb ? '1' : sessionScope.top_tb)}"/>
<c:set var="btm_tb" value="${param.btm_tb eq '0' ? '0' : (empty sessionScope.btm_tb ? '1' : sessionScope.btm_tb)}"/>
<c:set var="top_fldr_select" value="${param.top_fldr_select eq '1' ? '1' : (empty sessionScope.top_fldr_select ? '0' : sessionScope.top_fldr_select)}"/> <%-- Default disabled--%>
<c:set var="btm_fldr_select" value="${param.btm_fldr_select eq '0' ? '0' : (empty sessionScope.btm_fldr_select ? '1' : sessionScope.btm_fldr_select)}"/> <%-- Default enabled--%>
<c:if test="${isTop && '1' eq  top_stb}">
<div class="stb tbl top_${context.isContactSearch ? 'cont' : (context.isMessageSearch ? 'mesg' : 'conv') }_lv_subtoolbar"><div class="tr"><div class="td">
    <c:choose>
    <c:when test="${context.isContactSearch || context.isGALSearch}">
    <a accesskey="${requestScope.navlink_accesskey}" href="${urlTarget}?st=ab&_pv=1"><fmt:message key="addressBooks"/></a> &laquo;<c:if test="${top_fldr_select ne '1'}">${fn:escapeXml(zm:truncateFixed(context.shortBackTo,12,true))}</c:if>
    <c:if test="${top_fldr_select eq '1'}"><select class="_zo_select_button" name="sfi" onchange="document.location.href='?sfi='+this.value+'&amp;st=contact';"><c:set var="count" value="${0}"/>
        <zm:forEachFolder var="fldr" skiproot="true"><c:if test="${count lt sessionScope.F_LIMIT and fldr.isContactView}"><option ${param.sfi eq fldr.id || context.folder.id eq fldr.id ? 'selected="selected"' : ''} value="${fldr.id}">${zm:cook(zm:truncateFixed(zm:getUncookedFolderName(pageContext,fldr.id),15,true))}</option><c:set var="count" value="${count+1}"/></c:if></zm:forEachFolder>
        </select></c:if>
    </c:when>
    <c:otherwise>
        <a accesskey="${requestScope.navlink_accesskey}" href="${urlTarget}?st=folders&_pv=1"><fmt:message key="folders"/></a> &laquo;
            <c:if test="${top_fldr_select ne '1'}">${fn:escapeXml(zm:truncateFixed(context.shortBackTo,12,true))}</c:if><c:if test="${top_fldr_select eq '1'}">
            <select class="_zo_select_button" name="sfi" onchange="document.location.href='?sfi='+this.value;"><c:set var="count" value="${0}"/>
                <zm:forEachFolder var="fldr" skiproot="true"><c:if test="${count lt sessionScope.F_LIMIT and fldr.isMailView and (not fldr.isChats or mailbox.features.IM)}"><option ${param.sfi eq fldr.id || context.folder.id eq fldr.id ? 'selected="selected"' : ''} value="${fldr.id}">${zm:cook(zm:truncateFixed(zm:getUncookedFolderName(pageContext,fldr.id),15,true))}</option><c:set var="count" value="${count+1}"/></c:if></zm:forEachFolder>
            </select></c:if>
        </c:otherwise>
    </c:choose>
    <c:if test="${not empty param.sq && context.searchResult.size > 0}">&laquo; <a href="?saveSearch=1&sq=${zm:cook(param.sq)}&search=0"  onclick='toggleElem("searchbar",this); return toggleElem("savesearchbar",this);'><fmt:message key="saveSearch"/></a></c:if>
</div></div></div>
</c:if><c:if test="${((isTop && '1' eq  top_tb ) || (!isTop && '1' eq btm_tb))}">
<div class="tb tbl ${isTop ? 'top_' : 'btm_'}${context.isContactSearch ? 'cont' : (context.isMessageSearch ? 'mesg' : 'conv') }_lv_toolbar"><div class="tr"><span class="td">
<span class="zo_button_group"><c:choose>
    <c:when test="${context.searchResult.hasPrevPage}"><zm:prevResultUrl var="url" value="${urlTarget}" index="0" context="${context}"/><a accesskey="${requestScope.prev_accesskey}" href="${fn:escapeXml(url)}" class='zo_button prev_button'><fmt:message key="MO_PREV"/></a></c:when>
    <c:otherwise><a class='zo_button_disabled prev_button'><fmt:message key="MO_PREV"/></a></c:otherwise>
</c:choose>
<c:choose>
    <c:when test="${context.searchResult.hasNextPage}"><zm:nextResultUrl var="url" value="${urlTarget}" index="0" context="${context}"/><a accesskey="${requestScope.next_accesskey}" class='zo_button next_button' href="${fn:escapeXml(url)}"><fmt:message key="MO_NEXT"/></a></c:when>
    <c:otherwise><a class='zo_button_disabled next_button'><fmt:message key="MO_NEXT"/></a></c:otherwise>
</c:choose>
</span><c:if test="${context.searchResult.size gt 0 && !context.isGALSearch}">
<span>
    <select class="zo_select_button" name="${isTop ? 'anAction' : 'anActionBottom'}" onchange="return submitForm(document.getElementById('zForm'),null,this.value);">
        <option value="" selected="selected"><fmt:message key="moreActions"/></option>
        <c:choose><c:when test="${not context.folder.isInTrash}"><option value="actionDelete"><fmt:message key="delete"/></option></c:when>
            <c:otherwise><option value="actionHardDelete"><fmt:message key="delete"/></option></c:otherwise>
        </c:choose>
        <optgroup label="<fmt:message key='select'/>">
            <option value="selectAll"><fmt:message key="all"/></option>
            <option value="selectNone"><fmt:message key="none"/></option>
        </optgroup><c:choose><c:when test="${context.isConversationSearch || context.isMessageSearch}">
        <c:if test="${context.isMessageSearch}"><option value="actionAttachToCompose"><fmt:message key="sendAsAttachments"/></option></c:if>
        <optgroup label="<fmt:message key="markAs"/>">
            <option value="actionMarkRead"><fmt:message key="MO_read"/></option>
            <option value="actionMarkUnread"><fmt:message key="MO_unread"/></option>
            <c:if test="${mailbox.features.spam}">
            <c:choose>
            <c:when test="${zm:boolean(context.folder.isSpam)}"><option value="actionMarkUnspam"><fmt:message key="actionNotSpam"/></option></c:when>
            <c:otherwise><option value="actionMarkSpam"><fmt:message key="actionSpam"/></option></c:otherwise>
            </c:choose>
            </c:if>
        </optgroup></c:when><c:when test="${context.isContactSearch}">
        <optgroup label="<fmt:message key="compose"/>">
            <option value="composeTo"><fmt:message key="to"/></option>
            <option value="composeCC"><fmt:message key="cc"/></option>
            <option value="composeBCC"><fmt:message key="bcc"/></option>
        </optgroup></c:when></c:choose>
        <optgroup label="<fmt:message key="MO_flag"/>">
            <option value="actionFlag"><fmt:message key="add"/></option>
            <option value="actionUnflag"><fmt:message key="remove"/></option>
        </optgroup>
        <optgroup label="<fmt:message key="moveAction"/>">
            <c:choose>
                <c:when test="${context.isContactSearch}"><c:set var="count" value="${0}"/>
                    <zm:forEachFolder var="folder">                     
                        <c:if test="${count lt sessionScope.F_LIMIT and folder.id != context.folder.id and folder.isContactMoveTarget and !folder.isTrash and !folder.isSpam}"><option value="moveTo_${folder.id}">${zm:getFolderPath(pageContext, folder.id)}</option><c:set var="count" value="${count+1}"/></c:if>
                    </zm:forEachFolder>
                </c:when>
                <c:otherwise><c:set var="count" value="${0}"/>
                    <zm:forEachFolder var="folder">
                        <c:if test="${count lt sessionScope.F_LIMIT and folder.id != context.folder.id and folder.isMessageMoveTarget and !folder.isTrash and !folder.isSpam}"><option value="moveTo_${folder.id}">${zm:getFolderPath(pageContext, folder.id)}</option><c:set var="count" value="${count+1}"/></c:if>
                    </zm:forEachFolder>
                </c:otherwise>
            </c:choose>
        </optgroup><c:if test="${mailbox.features.tagging and mailbox.hasTags}">
            <c:set var="allTags" value="${mailbox.mailbox.allTags}"/>
            <optgroup label="<fmt:message key="MO_actionAddTag"/>">
                <c:forEach var="atag" items="${allTags}"><option value="addTag_${atag.id}">${fn:escapeXml(atag.name)}</option></c:forEach>
            </optgroup>
            <optgroup label="<fmt:message key="MO_actionRemoveTag"/>">
                <c:forEach var="atag" items="${allTags}"><option value="remTag_${atag.id}">${fn:escapeXml(atag.name)}</option></c:forEach>
            </optgroup>
        </c:if>
    </select>
</span>
<noscript><span><input id="actGo${isTop}" class="zo_button" name="moreActions" type="submit" value="<fmt:message key="actionGo"/>"/></span></noscript>
<script type="text/javascript">var actGo = document.getElementById('actGo${isTop}');if(actGo){actGo.style.display='none';}</script></c:if>
<span class=" f-right"><c:choose><c:when test="${context.isConversationSearch || context.isMessageSearch}"><c:url var="composeUrl" value="${urlTarget}?st=newmail"/><a accesskey="${requestScope.mainaction_accesskey}" href="${composeUrl}" class="zo_button"><fmt:message key="compose"/></a></c:when>
        <c:when test="${context.isContactSearch}"><c:url var="composeUrl" value="${urlTarget}"><c:param name="action" value="edit"/><c:param name="st" value="${context.st}"/><c:param name="folderid" value="${context.folder.id}"/></c:url>
            <a accesskey="${requestScope.mainaction_accesskey}" href="${composeUrl}" class="zo_button"><fmt:message key="add"/></a>
        </c:when></c:choose>
</span>
</span></div></div></c:if>
<c:if test="${!isTop && '1' eq  btm_stb }"> <%-- no_btm_stb => no bottom sub toolbar, set this param to disable bottom subtoolbar --%>
    <div class="stb tbl btm_${context.isContactSearch ? 'cont' : (context.isMessageSearch ? 'mesg' : 'conv') }_lv_subtoolbar"><div class="tr"><div class="td">
                    <c:choose>
                    <c:when test="${context.isContactSearch}">
                        <a accesskey="${requestScope.navlink_accesskey}" href="${urlTarget}?st=ab&_pv=1"><fmt:message key="addressBooksLabel"/></a><c:if test="${btm_fldr_select eq '0'}">${fn:escapeXml(zm:truncateFixed(context.shortBackTo,12,true))}</c:if><c:if test="${btm_fldr_select ne '0'}">
                        <select class="_zo_select_button" name="sfi" onchange="fetchIt('?sfi='+this.value+'&amp;st=${context.st}', GC());"><c:set var="count" value="${0}"/>
                            <zm:forEachFolder var="fldr" skiproot="true"><c:if test="${count lt sessionScope.F_LIMIT and fldr.isContactView}"><option ${param.sfi eq fldr.id || context.folder.id eq fldr.id ? 'selected="selected"' : ''} value="${fldr.id}">${zm:truncateFixed(zm:getFolderName(pageContext,fldr.id),15,true)}</option><c:set var="count" value="${count+1}"/></c:if></zm:forEachFolder>
                        </select></c:if>
                    </c:when>
                    <c:otherwise>                           
                        <a accesskey="${requestScope.navlink_accesskey}" href="${urlTarget}?st=folders&_pv=1"><fmt:message key="foldersLabel"/></a>
                        <c:if test="${btm_fldr_select eq '0'}"> ${zm:truncateFixed(context.shortBackTo,12,true)}</c:if>
                        <c:if test="${btm_fldr_select ne '0'}"><select class="_zo_select_button" name="sfi" onchange="fetchIt('?sfi='+this.value+'&amp;st=${context.st}', GC());"><c:set var="count" value="${0}"/>
                            <zm:forEachFolder var="fldr" skiproot="true"><c:if test="${count lt sessionScope.F_LIMIT and (fldr.isMailView or fldr.isInTrash) and (not fldr.isChats or mailbox.features.IM)}"><option ${param.sfi eq fldr.id || context.folder.id eq fldr.id ? 'selected="selected"' : ''} value="${fldr.id}">${fn:escapeXml(zm:truncateFixed(zm:getFolderName(pageContext,fldr.id),15,true))}</option><c:set var="count" value="${count+1}"/></c:if></zm:forEachFolder>
                        </select></c:if>
                    </c:otherwise>
                </c:choose>
            </div></div></div>
</c:if><input type="hidden" name="isInTrash" value="${context.folder.isInTrash}">
<c:if test="${isTop}">
<div id="fbbar" class="tb tbl" style="display:none;">
<div class="tr"><span class="td" id="fbtd"><span id="sc"></span>
<c:if test="${not context.isContactSearch}">
<span class="zo_button_group delete_button">
<input type='button' class='zo_button prev_button' name='actionJunk' value='<fmt:message key="${zm:boolean(context.folder.isSpam) ? 'actionNotSpam' : 'actionSpam'}"/>' onclick="$('zForm').anAction[0].value='actionMark${zm:boolean(context.folder.isSpam) ? 'Unspam' : 'Spam' }';submitForm($('zForm'));">
<input type='submit' class='zo_button next_button' name='action${context.folder.isInTrash ? 'Hard' : ''}Delete' value='<fmt:message key="delete"/>'>
</span>
</c:if>
<c:if test="${context.isContactSearch}">
<input type='submit' class='zo_button delete_button' name='action${context.folder.isInTrash ? 'Hard' : ''}Delete' value='<fmt:message key="delete"/>'>    
</c:if>
<c:if test="${context.searchResult.size gt 0 && !context.isGALSearch}">
<span>
    <select class="zo_select_button" name="${isTop ? 'anAction' : 'anActionBottom'}" onchange="return submitForm(document.getElementById('zForm'),null,this.value);">
        <option value="" selected="selected"><fmt:message key="moreActions"/></option>
        <c:choose><c:when test="${not context.folder.isInTrash}"><option value="actionDelete"><fmt:message key="delete"/></option></c:when>
            <c:otherwise><option value="actionHardDelete"><fmt:message key="delete"/></option></c:otherwise>
        </c:choose>
        <optgroup label="<fmt:message key='select'/>">
            <option value="selectAll"><fmt:message key="all"/></option>
            <option value="selectNone"><fmt:message key="none"/></option>
        </optgroup><c:choose><c:when test="${context.isConversationSearch || context.isMessageSearch}">
        <c:if test="${context.isMessageSearch}"><option value="actionAttachToCompose"><fmt:message key="sendAsAttachments"/></option></c:if>
        <optgroup label="<fmt:message key="markAs"/>">
            <option value="actionMarkRead"><fmt:message key="MO_read"/></option>
            <option value="actionMarkUnread"><fmt:message key="MO_unread"/></option>
            <c:if test="${mailbox.features.spam}">
            <c:choose>
            <c:when test="${zm:boolean(context.folder.isSpam)}"><option value="actionMarkUnspam"><fmt:message key="actionNotSpam"/></option></c:when>
            <c:otherwise><option value="actionMarkSpam"><fmt:message key="actionSpam"/></option></c:otherwise>
            </c:choose>
            </c:if>
        </optgroup></c:when><c:when test="${context.isContactSearch}">
        <optgroup label="<fmt:message key="compose"/>">
            <option value="composeTo"><fmt:message key="to"/></option>
            <option value="composeCC"><fmt:message key="cc"/></option>
            <option value="composeBCC"><fmt:message key="bcc"/></option>
        </optgroup></c:when></c:choose>
        <optgroup label="<fmt:message key="MO_flag"/>">
            <option value="actionFlag"><fmt:message key="add"/></option>
            <option value="actionUnflag"><fmt:message key="remove"/></option>
        </optgroup>
        <optgroup label="<fmt:message key="moveAction"/>">
            <c:choose>
                <c:when test="${context.isContactSearch}"><c:set var="count" value="${0}"/>
                    <zm:forEachFolder var="folder">
                        <c:if test="${count lt sessionScope.F_LIMIT and folder.id != context.folder.id and folder.isContactMoveTarget and !folder.isTrash and !folder.isSpam}"><option value="moveTo_${folder.id}">${zm:getFolderPath(pageContext, folder.id)}</option><c:set var="count" value="${count+1}"/></c:if>
                    </zm:forEachFolder>
                </c:when>
                <c:otherwise><c:set var="count" value="${0}"/>
                    <zm:forEachFolder var="folder">
                        <c:if test="${count lt sessionScope.F_LIMIT and folder.id != context.folder.id and folder.isMessageMoveTarget and !folder.isTrash and !folder.isSpam}"><option value="moveTo_${folder.id}">${zm:getFolderPath(pageContext, folder.id)}</option><c:set var="count" value="${count+1}"/></c:if>
                    </zm:forEachFolder>
                </c:otherwise>
            </c:choose>
        </optgroup><c:if test="${mailbox.features.tagging and mailbox.hasTags}">
            <c:set var="allTags" value="${mailbox.mailbox.allTags}"/>
            <optgroup label="<fmt:message key="MO_actionAddTag"/>">
                <c:forEach var="atag" items="${allTags}"><option value="addTag_${atag.id}">${fn:escapeXml(atag.name)}</option></c:forEach>
            </optgroup>
            <optgroup label="<fmt:message key="MO_actionRemoveTag"/>">
                <c:forEach var="atag" items="${allTags}"><option value="remTag_${atag.id}">${fn:escapeXml(atag.name)}</option></c:forEach>
            </optgroup>
        </c:if>
    </select>
</span>
<noscript><span><input id="actGo${isTop}" class="zo_button" name="moreActions" type="submit" value="<fmt:message key="actionGo"/>"/></span></noscript>
<script type="text/javascript">var actGo = document.getElementById('actGo${isTop}');if(actGo){actGo.style.display='none';}</script></c:if>
<c:if test="${context.isContactSearch}">
<span class=" f-right"><input type='button' class='zo_button' value='<fmt:message key="to"/>' onclick="$('zForm').anAction[0].value='composeTo';submitForm($('zForm'));">
</span>
</c:if>
<span class="zo_button1" onclick="return checkAll($('zForm').getElementsByClassName('chk'),false);"><span class="ImgCancel"></span></span></span></div>
</div>
</c:if>