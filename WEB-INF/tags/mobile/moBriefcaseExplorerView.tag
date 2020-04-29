<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2012, 2013, 2014, 2015, 2016 Synacor, Inc.
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
    <div class="tbl">
        <div class="tr">
            <div class="td" align="center">

                <c:forEach items="${context.searchResult.hits}" var="hit" varStatus="status">
                    <c:set var="bchit" value="${hit.briefcaseHit}"/>
                    <c:set var="folder" value="${zm:getFolder(pageContext, bchit.document.folderId)}"/>
                    <c:set value=",${hit.id}," var="stringToCheck"/>
                    <c:set var="ctype" value="${fn:split(bchit.document.contentType,';')}"/>
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
                    <c:set var="aid" value="A${status.index}"/>
                        <c:set var="briefUrlName" value="/home/${mailbox.accountInfo.name}${folder.path}/${bchit.document.name}"/>
                        <c:set var="briefUrl" value="${zm:urlEncode(briefUrlName)}?auth=co"/>
                        <div class="ZmThumbnailItem" style="">
                            <div align="left">
                                <input class="chk"
                                       type="checkbox" ${requestScope.select ne 'none' && (fn:contains(requestScope._selectedIds,stringToCheck) || requestScope.select eq 'all') ? 'checked="checked"' : ''}
                                       name="id" value="${bchit.id}"/>
                                <c:if test="${!empty bchit.document.tagIds}">
                                    <mo:miniTagImage
                                            ids="${bchit.document.tagIds}"/>
                                </c:if>
                                &nbsp;
                            </div>
                            <a href="${fn:escapeXml(briefUrl)}" id="${aid}" target="_blank">
                            <div class="ZmThumbnailIcon" align="center">
                                <c:choose>
                                    <c:when test="${zm:contains(bchit.document.contentType,'image')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgImageDoc_48.gif"/>
                                    </c:when>
                                    <c:when test="${zm:contains(bchit.document.contentType,'video')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgVideoDoc_48.gif"/>
                                    </c:when>
                                    <c:when test="${zm:contains(bchit.document.contentType,'pdf')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgPDFDoc_48.gif"/>
                                    </c:when>
                                    <c:when test="${zm:contains(bchit.document.contentType,'zip')}">
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgZipDoc_48.gif"/>
                                    </c:when>
                                    <c:otherwise>
                                        <app:img clazz="ZhThumbnailImg" src="large/ImgUnknownDoc_48.gif"/>
                                    </c:otherwise>
                                </c:choose>
                                <div class='small-gray-text'>
                                    (${fn:escapeXml(zm:displaySize(pageContext, bchit.document.size))})
                                </div>
                            </div>
                            <div class="ZmThumbnailName" align="center">
                <span>

                        <c:set var='docName'
                               value="${empty bchit.document.name ? '' : zm:truncateFixed(bchit.document.name,12,true)}"/>
                        <c:out value="${docName}"/>

                </span>
                            </div>
                            <div align="center" class="small-gray-text frag-span">
                                <c:set var="cname" value="${fn:split(bchit.document.creator,'@')}"/>
                                <c:set var="cname" value="${fn:split(bchit.document.editor,'@')}" />
                                <fmt:message key="itemModifiedByOn">
                                    <fmt:param value="${cname[0]}"/>
                                    <fmt:param value="${fn:escapeXml(zm:displayDate(pageContext, bchit.modifiedDate))}"/>
                                </fmt:message>
                            </div>
                                </a>
                        </div>

                </c:forEach>
            </div>
        </div>
    </div>
    <c:if test="${empty param.supressNoRes && (empty context || empty context.searchResult or context.searchResult.size eq 0)}">
        <div class='tbl'>
            <div class="tr">
                <div class="td zo_noresults">
                    <fmt:message key="noResultsFound"/>
                </div>
            </div>
        </div>
    </c:if>
    <mo:briefcaseToolbar context="${context}" urlTarget="${context_url}" isTop="false" mailbox="${mailbox}"/>
</form>
