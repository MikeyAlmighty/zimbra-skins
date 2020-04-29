<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016 Synacor, Inc.
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
<%@ tag body-content="scriptless" %>
<%@ attribute name="title" rtexprvalue="true" required="false" %>
<%@ attribute name="scale" rtexprvalue="true" required="false" %>
<%@ attribute name="mailbox" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZMailboxBean"%>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<c:set var="iconPath" value="/img" scope="request"/>
<c:if test="${not empty param.ui}">
    <c:set var="uiv" value="${param.ui}" scope="session"/>
</c:if>
<c:set scope="session" var="uiv"
       value="${sessionScope.uiv != null || not empty sessionScope.uiv  ? sessionScope.uiv : '0'}"/>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <title>
        <c:if test="${empty title}"><fmt:message key="zimbraTitle"/></c:if>
        <c:if test="${!empty title}"><fmt:message key="zimbraTitleLabel"/> ${fn:escapeXml(title)}</c:if>
    </title>
    <c:choose>
        <c:when test="${scale}">
            <meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=8.0; user-scalable=1;"/>
        </c:when>
        <c:otherwise>
            <meta name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
        </c:otherwise>
    </c:choose>
    <link href="<c:url value='/css/zmobile${uiv!="0"?zm:cook(uiv):""}${param.st!=null && param.st=="cal"?",zmobilecal":""}.css?v=${version}'/>"  type="text/css" rel="stylesheet" /> 
    <style type="text/css" media="screen">
    <c:set var="version" value="${initParam.zimbraCacheBusterVersion}"/>
       #action{padding:0px;margin:0px;border:0px;}
    </style>
    <jsp:doBody/>
    <%--<script type="text/javascript">
     function zClickLink(id) { var a = document.getElementById(id); if (a) window.location = a.href; }
    </script>--%>
</head>
<c:if test="${uiv == '1'}">
    <c:set var="baseURL" value="mainx" scope="request"/>
</c:if>
<c:if test="${uiv != '1'}">
    <c:remove scope="request" var="baseURL"/>    
</c:if>
