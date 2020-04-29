<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="id" rtexprvalue="true" required="true" type="java.lang.String" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>

<c:if test="${(!empty id) and (param.folderid ne param.origFolderId)}">
    <zm:moveContact var="result" id="${id}" folderid="${param.folderid}"/>
</c:if>

<c:set var="fullName">
    <app:contactFileAs
        fileAs="${param.fileAs}"
        firstName="${param.firstName}" lastName="${param.lastName}" company="${param.company}"
        fullName="${param.fullName}" nickname="${param.nickname}"
    />
</c:set>
<c:if test="${zm:isFileAsExplicit(param.fileAs)}">
    <c:set var="groupName" value="8:${param.nickname}"/>
</c:if>

<c:if test="${not empty param.imAddress1 and not empty param.imAddress1_type}"><c:set var="im1" value="${param.imAddress1_type}://${param.imAddress1}"/></c:if>
<c:if test="${not empty param.imAddress2 and not empty param.imAddress2_type}"><c:set var="im2" value="${param.imAddress2_type}://${param.imAddress2}"/></c:if>
<c:if test="${not empty param.imAddress3 and not empty param.imAddress3_type}"><c:set var="im3" value="${param.imAddress3_type}://${param.imAddress3}"/></c:if>


<zm:modifyContact var="id" id="${id}" folderid="${param.folderid}" replace="${!empty id and param.isgroup ? true : false}">
    <zm:field name="firstName" value="${param.firstName}"/>
    <zm:field name="phoneticFirstName" value="${param.phoneticFirstName}"/>
    <zm:field name="lastName" value="${param.lastName}"/>
    <zm:field name="phoneticLastName" value="${param.phoneticLastName}"/>
    <zm:field name="middleName" value="${param.middleName}"/>
    <zm:field name="fileAs" value="${zm:isFileAsExplicit(param.fileAs) ?  groupName : param.fileAs}"/>
    <zm:field name="company" value="${param.company}"/>
    <zm:field name="phoneticCompany" value="${param.phoneticCompany}"/>
    <zm:field name="jobTitle" value="${param.jobTitle}"/>
    <zm:field name="department" value="${param.department}"/>

    <zm:field name="fullName" value="${fullName}" />
    <zm:field name="nickname" value="${param.nickname}" />

    <zm:field name="email" value="${fn:replace(param.email,'\"','')}"/>
    <zm:field name="email2" value="${fn:replace(param.email2,'\"','')}"/>
    <zm:field name="email3" value="${fn:replace(param.email3,'\"','')}"/>

    <zm:field name="imAddress1" value="${im1}"/>
    <zm:field name="imAddress2" value="${im2}"/>
    <zm:field name="imAddress3" value="${im3}"/>

    <zm:field name="workStreet" value="${param.workStreet}"/>
    <zm:field name="workCity" value="${param.workCity}"/>
    <zm:field name="workState" value="${param.workState}"/>
    <zm:field name="workPostalCode" value="${param.workPostalCode}"/>
    <zm:field name="workCountry" value="${param.workCountry}"/>
    <zm:field name="workURL" value="${param.workURL}"/>

    <zm:field name="workPhone" value="${param.workPhone}"/>
    <zm:field name="workPhone2" value="${param.workPhone2}"/>
    <zm:field name="workFax" value="${param.workFax}"/>
    <zm:field name="assistantPhone" value="${param.assistantPhone}"/>
    <zm:field name="companyPhone" value="${param.companyPhone}"/>
    <zm:field name="callbackPhone" value="${param.callbackPhone}"/>

    <zm:field name="homeStreet" value="${param.homeStreet}"/>
    <zm:field name="homeCity" value="${param.homeCity}"/>
    <zm:field name="homeState" value="${param.homeState}"/>
    <zm:field name="homePostalCode" value="${param.homePostalCode}"/>
    <zm:field name="homeCountry" value="${param.homeCountry}"/>
    <zm:field name="homeURL" value="${param.homeURL}"/>

    <zm:field name="homePhone" value="${param.homePhone}"/>
    <zm:field name="homePhone2" value="${param.homePhone2}"/>
    <zm:field name="homeFax" value="${param.homeFax}"/>
    <zm:field name="mobilePhone" value="${param.mobilePhone}"/>
    <zm:field name="pager" value="${param.pager}"/>
    <zm:field name="carPhone" value="${param.carPhone}"/>
    <zm:field name="tollFree" value="${param.tollFree}"/>

    <zm:field name="otherStreet" value="${param.otherStreet}"/>
    <zm:field name="otherCity" value="${param.otherCity}"/>
    <zm:field name="otherState" value="${param.otherState}"/>
    <zm:field name="otherPostalCode" value="${param.otherPostalCode}"/>
    <zm:field name="otherCountry" value="${param.otherCountry}"/>
    <zm:field name="otherURL" value="${param.otherURL}"/>

    <zm:field name="otherPhone" value="${param.otherPhone}"/>
    <zm:field name="otherFax" value="${param.otherFax}"/>
    <zm:field name="notes" value="${param.notes}"/>

    <c:if test="${(not empty param.dlist or not empty param.dlist1) and param.isgroup}">
        <zm:field name="type" value="group"/>
        <c:forEach var="mem" items="${paramValues.dlist}" varStatus="status">
            <zm:member name="${paramValues.dlistType[status.index]}" value="${paramValues.dlistId[status.index]}"/>
        </c:forEach>
        <c:forEach var="mem" items="${paramValues.dlist1}" varStatus="status">
            <zm:member name="${paramValues.dlistType1[status.index]}" value="${paramValues.dlistId1[status.index]}"/>
        </c:forEach>
    </c:if>

</zm:modifyContact>
