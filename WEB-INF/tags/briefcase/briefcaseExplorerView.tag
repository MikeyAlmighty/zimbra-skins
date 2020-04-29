<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016 Synacor, Inc.
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
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<app:handleError>
    <zm:getMailbox var="mailbox"/>
    <c:choose>
    <c:when test="${not empty mailbox.prefs.locale}">
        <fmt:setLocale value='${mailbox.prefs.locale}' scope='request' />
    </c:when>
    <c:otherwise>
        <fmt:setLocale value='${pageContext.request.locale}' scope='request' />
    </c:otherwise>
    </c:choose>
    <fmt:setBundle basename="/messages/ZhMsg" scope="request"/>
    <fmt:message var="title" key="briefcase"/>
    <c:set var="selectedRow" value="${param.selectedRow}"/>
    <fmt:message var="unknownSubject" key="noSubject"/>
    <zm:composeUploader var="uploader"/>
</app:handleError>

<app:view mailbox="${mailbox}" title="${title}" context="${context}" selected='briefcase' briefcases="true" searches="false" tags="true" keys="true">
    <zm:currentResultUrl var="currentUrl" value="/h/search" context="${context}"/>
    <form name="zform" action="${fn:escapeXml(currentUrl)}" method="post">
        <table width="100%" cellpadding="0" cellspacing="0" height="100%">
            <tr>
                <td class='TbTop'>
                     <app:briefcaseListViewToolbar context="${context}" keys="true"/>
                </td>
            </tr>
            <tr>
                <td class="ZhContainingBox">

                    <c:forEach items="${context.searchResult.hits}" var="hit" varStatus="status">
                        <c:set var="aid" value="A${status.index}"/>
                        <c:set var="briefHit" value="${hit.briefcaseHit}"/>
                        <c:set var="folder" value="${zm:getFolder(pageContext, briefHit.document.folderId)}"/>
                        <div class="ZhThumbnailItem">
                            <div class="ZhThumbnailIcon">
                                <c:choose>
                                    <c:when test="${zm:contains(briefHit.document.contentType,'image')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgImageDoc_48.gif"/>
                                    </c:when>
                                    <c:when test="${zm:contains(briefHit.document.contentType,'video')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgVideoDoc_48.gif"/>
                                    </c:when>
                                    <c:when test="${zm:contains(briefHit.document.contentType,'pdf')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgPDFDoc_48.gif"/>
                                    </c:when>
                                    <c:when test="${zm:contains(briefHit.document.contentType,'zip')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgZipDoc_48.gif"/>
                                    </c:when>
                                    <c:otherwise>
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgUnknownDoc_48.gif"/>
                                    </c:otherwise>
                                </c:choose>
                            </div>
                            <div class="ZhThumbnailName">
                            <span>
                                <c:set var="briefUrlName" value="/home/${mailbox.accountInfo.name}${folder.path}/${briefHit.document.name}"/>
                                <c:set var="briefUrl" value="${zm:urlEncode(briefUrlName)}?auth=co"/>
                                <a target="_blank" href="${fn:escapeXml(briefUrl)}" id="${aid}">
                                    <c:set var='docName' value="${empty briefHit.document.name ? unknownSubject : zm:truncate(briefHit.document.name,16,true)}"/>
                                    <c:out value="${docName}"/>
                                </a>
                            </span>
                            </div>
                        </div>

                    </c:forEach>

                    <c:if test="${empty param.sti}">
                        <c:set var="folders" value="${zm:getFolder(pageContext,empty param.sfi ? mailbox.briefcase.id : param.sfi)}"/>
                        <c:forEach var="subFolder" items="${folders.subFolders}" varStatus="status">
                             <c:url var="url" value="/h/search">
                                 <c:param name="sfi" value="${subFolder.id}"/>
                                 <c:param name="st" value="briefcase"/>
                                 <c:param name="view" value="${param.view}"/>
                             </c:url>
                             <div class="ZhThumbnailItem">
                                 <div class="ZhThumbnailIcon">
                                     <app:img clazz="ZhThumbnailImg" src="large/ImgBriefcase_48.gif" alt='${fn:escapeXml(subFolder.name)}'/>
                                 </div>
                                 <div class="ZhThumbnailName">
                                    <span>
                                        <a href="${fn:escapeXml(url)}" id="${aid}">${empty subFolder.name ? unknownSubject : zm:truncate(zm:cook(subFolder.name),16,true)}</a>
                                    </span>
                                 </div>
                             </div>
                        </c:forEach>
                    </c:if>

                    <c:if test="${context.searchResult.size == 0 and not folders.hasChildren}">
                            <div class='NoResults'><fmt:message key="noResultsFound"/></div>
                    </c:if>

                </td>
            </tr>
            <tr>
                <td class='TbBottom'>
                    <app:briefcaseListViewToolbar context="${context}" keys="true"/>
                </td>
            </tr>
        </table>
        <input type="hidden" name="doBriefcaseAction" value="1"/>
        <input type="hidden" name="view" value="${param.view}"/>
        <input id="sr" type="hidden" name="selectedRow" value="${empty selectedRow ? 0 : zm:cook(selectedRow)}"/>
        <input type="hidden" name="crumb" value="${fn:escapeXml(mailbox.accountInfo.crumb)}"/>
    </form>
    <SCRIPT TYPE="text/javascript">
        <!--
        var zrc = ${empty context.searchResult ? 0 : context.searchResult.size};
        var zsr = ${zm:cookInt(selectedRow, 0)};
        var zss = function(r,s) {
            var e = document.getElementById("R"+r);
            if (e == null) return;
            if (s) {
                if (e.className.indexOf(" RowSelected") == -1) e.className = e.className + " RowSelected";
                var e2 = document.getElementById("sr"); if (e2) e2.value = r;
            }
            else { if (e.className.indexOf(" RowSelected") != -1) e.className = e.className.replace(" RowSelected", "");}
        }
        var zsn = function() {if (zrc == 0 || (zsr+1 == zrc)) return; zss(zsr, false); zss(++zsr, true);}
        var zsp = function() {if (zrc == 0 || (zsr == 0)) return; zss(zsr, false); zss(--zsr, true);}
        var zos = function() {if (zrc == 0) return; var e = document.getElementById("A"+zsr); if (e && e.href) window.location = e.href;}
        var zcs = function(c) {if (zrc == 0) return; var e = document.getElementById("C"+zsr); if (e) e.checked = c ? c : !e.checked;}
        var zcsn = function () { zcs(true); zsn(); }
        var zcsp = function () { zcs(true); zsp(); }
        var zclick = function(id) { var e2 = document.getElementById(id); if (e2) e2.click(); }
        var zaction = function(a) { var e = document.getElementById(a); if (e) { e.selected = true; zclick("SOPGO"); }}
        var zmove = function(a) { var e = document.getElementById(a); if (e) { e.selected = true; zclick("SOPMOVE"); }}
        function zSelectRow(ev,id) {var t = ev.target || ev.srcElement;if (t&&t.nodeName != 'INPUT'){var a = document.getElementById(id); if (a) window.location = a.href;} }
        //-->
    </SCRIPT>

    <app:keyboard cache="mail.briefcaseListView" globals="true" mailbox="${mailbox}" tags="true">

        <zm:bindKey message="mail.Delete" func="function() { zclick('SOPDELETE')}"/>
        <zm:bindKey message="global.CheckCheckBox" func="zcs"/>
        <zm:bindKey message="global.SelectAllCheckBoxes" func="function() { zclick('OPCHALL')}"/>

        <zm:bindKey message="conversation.Open" func="zos"/>
        <zm:bindKey message="global.CheckAndPreviousItem" func="zcsp"/>
        <zm:bindKey message="global.CheckAndNextItem" func="zcsn"/>
        <zm:bindKey message="global.PreviousItem" func="zsp"/>
        <zm:bindKey message="global.NextItem" func="zsn"/>
        <zm:bindKey message="global.PreviousPage" id="PREV_PAGE"/>
        <zm:bindKey message="global.NextPage" id="NEXT_PAGE"/>
        <c:if test="${mailbox.features.tagging}">
            <zm:bindKey message="global.Tag" func="function() {zaction('OPTAG{TAGID}')}" alias="tag"/>
        </c:if>
        <zm:bindKey message="mail.MoveToFolder" func="function() {zmove('OPFLDR{FOLDERID}')}" alias="folder"/>
    </app:keyboard>

</app:view>