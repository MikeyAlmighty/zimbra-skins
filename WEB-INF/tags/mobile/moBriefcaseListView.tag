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
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="mo" uri="com.zimbra.mobileclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<mo:handleError>
    <zm:getMailbox var="mailbox"/>
    <mo:searchTitle var="title" context="${context}"/>
</mo:handleError>
<c:set var="context_url" value="${requestScope.baseURL!=null?requestScope.baseURL:'zmain'}"/>
<zm:currentResultUrl var="actionUrl" value="${context_url}" context="${context}"/>
<c:set var="title" value="${zm:truncate(context.shortBackTo,20,true)}" scope="request"/>
<form id="zForm" action="${fn:escapeXml(actionUrl)}" method="post" onsubmit="return submitForm(this);">
    <input type="hidden" name="crumb" value="${fn:escapeXml(mailbox.accountInfo.crumb)}"/>
    <input type="hidden" name="doBriefcaseAction" value="1"/>
    <input name="moreActions" type="hidden" value="<fmt:message key="actionGo"/>"/>
   <mo:briefcaseToolbar context="${context}" urlTarget="${context_url}" isTop="true" mailbox="${mailbox}"/>
   <div class="tbl dlist">
   <c:forEach items="${context.searchResult.hits}" var="hit" varStatus="status">
        <c:set var="bchit" value="${hit.briefcaseHit}"/>
       <c:set var="folder" value="${zm:getFolder(pageContext, bchit.document.folderId)}"/>
        <div class="list-row tr" id="cn${bchit.id}">
            <c:set value=",${hit.id}," var="stringToCheck"/>
            <c:set var="ctype" value="${fn:split(bchit.document.contentType,';')}" />
            <c:choose>
    <c:when test="${ctype[0] eq 'application'}">
        <c:set var="imgclass" value="ImgExeDoc" scope="request"/>
        
    </c:when>
    <c:when test="${ctype[0] eq 'application/pdf'}">
        <c:set var="mimeImg" value="ImgPDFDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/postscript'}">
        <c:set var="mimeImg" value="ImgGenericDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/exe'}">
        <c:set var="mimeImg" value="ImgExeDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/x-msdownload'}">
        <c:set var="mimeImg" value="ImgExeDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/vnd.ms-excel'}">
        <c:set var="mimeImg" value="ImgMSExcelDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/vnd.ms-powerpoint'}">
        <c:set var="mimeImg" value="ImgMSPowerpointDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/vnd.ms-project'}">
        <c:set var="mimeImg" value="ImgMSProjectDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/vnd.visio'}">
        <c:set var="mimeImg" value="ImgMSVisioDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/msword'}">
        <c:set var="mimeImg" value="ImgMSWordDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/octet-stream'}">
        <c:set var="mimeImg" value="ImgUnknownDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'application/zip'}">
        <c:set var="mimeImg" value="ImgZipDoc" scope="request"/>

    </c:when>
    <c:when test="${zm:contains(ctype[0],'audio')}">
        <c:set var="mimeImg" value="ImgAudioDoc" scope="request"/>

    </c:when>
    <c:when test="${zm:contains(ctype[0],'video')}">
        <c:set var="mimeImg" value="ImgVideoDoc" scope="request"/>

    </c:when>
    <c:when test="${zm:contains(ctype[0],'image')}">
        <c:set var="mimeImg" value="ImgImageDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'message/rfc822'}">
        <c:set var="mimeImg" value="ImgMessageDoc" scope="request"/>

    </c:when>
    <c:when test="${zm:contains(ctype[0],'text')}">
        <c:set var="mimeImg" value="ImgGenericDoc" scope="request"/>

    </c:when>
    <c:when test="${ctype[0] eq 'text/html'}">
        <c:set var="mimeImg" value="ImgHtmlDoc" scope="request"/>

    </c:when>
    <c:otherwise>
        <c:set var="mimeImg" value="ImgUnknownDoc" scope="request"/>

    </c:otherwise>
</c:choose>
            <span class="td f">
                <input class="chk" type="checkbox" ${requestScope.select ne 'none' && (fn:contains(requestScope._selectedIds,stringToCheck) || requestScope.select eq 'all') ? 'checked="checked"' : ''} name="id" value="${bchit.id}"/>
                <span class="Img ${mimeImg}">&nbsp;</span>
            </span>
            <span class="td m" onclick='return zClickLink("a${bchit.id}")'>
                <c:set var="briefUrlName" value="/home/${mailbox.accountInfo.name}${folder.path}/${bchit.document.name}"/>
                <c:set var="briefUrl" value="${zm:urlEncode(briefUrlName)}?auth=co"/>
                <a id="a${bchit.id}" href="${briefUrl}" target="_blank">
                <div>
                    <strong><c:out escapeXml="true" value="${zm:truncate(bchit.document.name,100,true)}"/></strong>
                </div>
                </a>
                <c:set var="cname" value="${fn:split(bchit.document.creator,'@')}" />
               <div class="Email">
                    <a href="${briefUrl}" target="_blank">
                    ${fn:escapeXml(bchit.document.creator)}
                    </a>
                </div>
                <a href="${briefUrl}" target="_blank">
                <div class="frag-span small-gray-text">
                    <c:set var="cname" value="${fn:split(bchit.document.editor,'@')}" />
                    <fmt:message key="itemModifiedByOn">
                        <fmt:param value="${cname[0]}"/>
                        <fmt:param value="${fn:escapeXml(zm:displayDate(pageContext, bchit.modifiedDate))}"/>
                    </fmt:message>
                </div>
                </a>
            </span>
            <span class="td l" onclick='return zClickLink("a${bchit.id}")'>
                <fmt:formatDate timeZone="${mailbox.prefs.timeZone}" var="on_dt" pattern="yyyyMMdd" value="${bchit.createdDate}"/>
                <a <c:if test="${mailbox.features.calendar}">href='${context_url}?st=cal&amp;view=month&amp;date=${on_dt}'</c:if>>
                    <fmt:parseDate var="mdate" value="${on_dt}" pattern="yyyyMMdd" timeZone="${mailbox.prefs.timeZone}"/>
                    ${fn:escapeXml(zm:displayMsgDate(pageContext, bchit.createdDate))}
                </a><br/>
                <span class='small-gray-text'>(${fn:escapeXml(zm:displaySize(pageContext, bchit.document.size))})</span>
                <c:if test="${!empty bchit.document.tagIds}">
                <div>
                <mo:miniTagImage ids="${bchit.document.tagIds}"/>
                </div>
                </c:if>
            </span>
        </div>
    </c:forEach>
   </div>
    <c:if test="${empty param.supressNoRes && (empty context || empty context.searchResult or context.searchResult.size eq 0)}">
        <div class='tbl'><div class="tr"><div class="td zo_noresults"><fmt:message key="noResultsFound"/></div></div></div>
    </c:if>
    <mo:briefcaseToolbar context="${context}" urlTarget="${context_url}" isTop="false" mailbox="${mailbox}"/>
</form>
