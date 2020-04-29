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
<%@ tag body-content="empty" %>
<%@ attribute name="label" rtexprvalue="true" required="true" %>
<%@ attribute name="value" rtexprvalue="true" required="false" %>
<%@ attribute name="isphone" rtexprvalue="true" required="false" %>
<%@ attribute name="isurl" rtexprvalue="true" required="false" %>
<%@ attribute name="isemail" rtexprvalue="true" required="false" %>
<%@ attribute name="isaddress" rtexprvalue="true" required="false" %>
<%@ attribute name="street" rtexprvalue="true" required="false" %>
<%@ attribute name="city" rtexprvalue="true" required="false" %>
<%@ attribute name="state" rtexprvalue="true" required="false" %>
<%@ attribute name="postalcode" rtexprvalue="true" required="false" %>
<%@ attribute name="country" rtexprvalue="true" required="false" %>
<%@ attribute name="noborder" rtexprvalue="true" required="false" %>
<%@ attribute name="contactId" rtexprvalue="true" required="false" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="mo" uri="com.zimbra.mobileclient" %>
<mo:handleError>
    <zm:getUserAgent var="ua" session="true"/>
</mo:handleError>
<c:set var="context_url" value="${requestScope.baseURL!=null?requestScope.baseURL:'zmain'}"/>
<c:if test="${(not empty value) or isaddress}">
	<fmt:message key="${label}" var="label"/>
    <div <c:if test="${!noborder || ua.isiPad == true}">class="list-row" </c:if> >
        <span class='label' width="20%">${fn:escapeXml(label)}</span>
        <span class="value">
            <c:choose>
                <c:when test="${zm:boolean(isurl)}">
                    <c:set var="prefix" value="${fn:contains(value,'//') ? '' : 'http://'}"/>
                    <c:url var="url" value="${prefix}${value}"/>
                    <a target="_new" href="${fn:escapeXml(url)}">${fn:escapeXml(value)}</a>
                </c:when>
                <c:when test="${zm:boolean(isaddress)}">
                    <c:url var="gmaps" value="http://maps.google.com/maps">
                        <c:param name="q" value="${street} ${city} ${state} ${postalcode} ${country}"/>
                    </c:url>
                    <a target="_new" href="${fn:escapeXml(gmaps)}">
                        <c:if test="${not empty street}">${fn:escapeXml(street)}</c:if>
                        <c:if test="${not (empty street and empty city)}">,&nbsp;</c:if>
                        <c:if test="${not empty city}">
                            ${fn:escapeXml(city)} <c:if test="${not empty state or not empty postalcode}">,&nbsp;</c:if>
                        </c:if>
                        <c:if test="${not empty state}">${fn:escapeXml(state)} </c:if>
                        <c:if test="${not empty postalcode}">&nbsp;${fn:escapeXml(postalcode)}</c:if>
                        <c:if test="${not (empty state and empty street and empty postalcode)}"></c:if>
                        <c:if test="${not empty country}">,&nbsp;${fn:escapeXml(country)}</c:if>
                    </a>
                </c:when>
                <c:when test="${zm:boolean(isphone)}">
                    <c:url var="url" value="tel:${value}"/>
                    <a target="_new" href="${fn:escapeXml(url)}">${fn:escapeXml(value)}</a>
                </c:when>
                <c:when test="${zm:boolean(isemail)}">
                    <c:url value="${context_url}" var="url">
                        <c:param name="st" value="newmail"/>
                        <c:param name="to" value="${value}"/>
                        <c:param name="contactId" value="${contactId}"/>
                    </c:url>
                    <a href="${fn:escapeXml(url)}">${fn:escapeXml(value)}</a>
                </c:when>
                <c:otherwise>
                    ${fn:escapeXml(value)}
                </c:otherwise>
            </c:choose>
        </span>
    </div>
</c:if>
