<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2009, 2010, 2011, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="contenttype" rtexprvalue="true" required="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<c:choose>
    <c:when test="${contenttype eq 'application'}">
        <c:set var="mimeImg" value="doctypes/ImgExeDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeUnknownBinaryType" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/pdf'}">
        <c:set var="mimeImg" value="doctypes/ImgPDFDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeAdobePdfDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/postscript'}">
        <c:set var="mimeImg" value="doctypes/ImgGenericDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeAdobePsDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/exe'}">
        <c:set var="mimeImg" value="doctypes/ImgExeDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeApplication" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/x-msdownload'}">
        <c:set var="mimeImg" value="doctypes/ImgExeDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMsDownload" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/vnd.ms-excel'}">
        <c:set var="mimeImg" value="doctypes/ImgMSExcelDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMsExcelDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/vnd.ms-powerpoint'}">
        <c:set var="mimeImg" value="doctypes/ImgMSPowerpointDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMsPPTDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/vnd.ms-project'}">
        <c:set var="mimeImg" value="doctypes/ImgMSProjectDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMsProjectDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/vnd.visio'}">
        <c:set var="mimeImg" value="doctypes/ImgMSVisioDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMsVisioDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/msword'}">
        <c:set var="mimeImg" value="doctypes/ImgMSWordDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMsWordDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/octet-stream'}">
        <c:set var="mimeImg" value="doctypes/ImgUnknownDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeUnknownBinaryType" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/zip'}">
        <c:set var="mimeImg" value="doctypes/ImgZipDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeZipFile" scope="request"/>
    </c:when>
    <c:when test="${zm:contains(contenttype,'audio')}">
        <c:set var="mimeImg" value="doctypes/ImgAudioDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeAudio" scope="request"/>
    </c:when>
    <c:when test="${zm:contains(contenttype,'video')}">
        <c:set var="mimeImg" value="doctypes/ImgVideoDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeVideo" scope="request"/>
    </c:when>
    <c:when test="${zm:contains(contenttype,'image')}">
        <c:set var="mimeImg" value="doctypes/ImgImageDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeImage" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'message/rfc822'}">
        <c:set var="mimeImg" value="doctypes/ImgMessageDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeMailMessage" scope="request"/>
    </c:when>
    <c:when test="${zm:contains(contenttype,'text')}">
        <c:set var="mimeImg" value="doctypes/ImgGenericDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeTextFile" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'text/html'}">
        <c:set var="mimeImg" value="doctypes/ImgHtmlDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="mimeHtmlDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/x-zimbra-doc'}">
        <c:set var="mimeImg" value="doctypes/ImgGenericDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="zimbraDocument" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/x-zimbra-slides'}">
        <c:set var="mimeImg" value="doctypes/ImgPresentation.png" scope="request"/>
        <c:set var="mimeDesc" value="zimbraPresentation" scope="request"/>
    </c:when>
    <c:when test="${contenttype eq 'application/x-zimbra-xls'}">
        <c:set var="mimeImg" value="doctypes/ImgZSpreadSheet.png" scope="request"/>
        <c:set var="mimeDesc" value="zimbraSpreadsheet" scope="request"/>
    </c:when>
    <c:otherwise>
        <c:set var="mimeImg" value="doctypes/ImgUnknownDoc.png" scope="request"/>
        <c:set var="mimeDesc" value="" scope="request"/>
    </c:otherwise>
</c:choose>