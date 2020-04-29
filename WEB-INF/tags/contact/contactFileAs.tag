<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2011, 2012, 2013, 2014, 2015, 2016 Synacor, Inc.
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
<%@ tag import="java.text.*,java.util.*" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ tag import="com.zimbra.cs.taglib.bean.BeanUtils,com.zimbra.cs.taglib.bean.ZContactBean" %>
<%@ attribute name="ruby" rtexprvalue="true" required="false" type="java.lang.Boolean" %>
<%@ attribute name="contact" rtexprvalue="true" required="false" type="com.zimbra.cs.taglib.bean.ZContactBean" %>
<%@ attribute name="fileAs" rtexprvalue="true" required="false" %>
<%@ attribute name="firstName" rtexprvalue="true" required="false" %>
<%@ attribute name="lastName" rtexprvalue="true" required="false" %>
<%@ attribute name="company" rtexprvalue="true" required="false" %>
<%@ attribute name="fullName" rtexprvalue="true" required="false" %>
<%@ attribute name="nickname" rtexprvalue="true" required="false" %>
<%@ attribute name="phoneticFirstName" rtexprvalue="true" required="false" %>
<%@ attribute name="phoneticLastName" rtexprvalue="true" required="false" %>
<%@ attribute name="phoneticCompany" rtexprvalue="true" required="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<c:set var="fileAs" value="${not empty contact ? contact.fileAs : fileAs}" />
<c:set var="firstName" value="${not empty contact ? contact.firstName : firstName}" />
<c:set var="lastName" value="${not empty contact ? contact.lastName : lastName}" />
<c:set var="company" value="${not empty contact ? contact.company : company}" />
<c:set var="fullName" value="${not empty contact ? contact.fullName : fullName}" />
<c:set var="nickname" value="${not empty contact ? contact.nickname : nickname}" />
<c:set var="phoneticFirstName" value="${not empty contact ? contact.phoneticFirstName : phoneticFirstName}" />
<c:set var="phoneticLastName" value="${not empty contact ? contact.phoneticLastName : phoneticLastName}" />
<c:set var="phoneticCompany" value="${not empty contact ? contact.phoneticCompany : phoneticCompany}" />
<c:if test="${zm:boolean(ruby)}">
    <c:set var="firstName"><app:ruby base="${firstName}" text="${phoneticFirstName}" /></c:set>
    <c:set var="lastName"><app:ruby base="${lastName}" text="${phoneticLastName}" /></c:set>
    <c:set var="company"><app:ruby base="${company}" text="${phoneticCompany}" /></c:set>
</c:if>
<%
    // make fields available to Java code
    String fileAs = get("fileAs");
    String firstName = get("firstName");
    String lastName = get("lastName");
    String company = get("company");
    String fullName = get("fullName");
    String nickname = get("nickname");
%>
<%-- NOTE: Don't change the var! Later methods depend on it being set! --%>
<fmt:setBundle var="ZmMsg" basename="/messages/ZmMsg" />
<%-- NOTE: Keep in sync with ZmContact.js --%>
<c:choose>
    <%--FIRST_LAST--%>
    <c:when test="${fileAs eq '2'}">
        <% set("text", fileAsFirstLast(firstName, lastName, fullName, nickname)); %>
        ${text}
    </c:when>
    <%--COMPANY--%>
    <c:when test="${fileAs eq '3'}">
        <c:choose>
            <c:when test="${not empty company}">${company}</c:when>
            <c:when test="${not empty fullName}">${fullName}</c:when>
        </c:choose>
    </c:when>
    <%--LAST_C_FIRST_COMPANY--%>
    <c:when test="${fileAs eq '4'}">
        <% String name = fileAsLastFirst(firstName, lastName, fullName, nickname); %>
        <% set("text", fileAsNameCompany(name, company)); %>
        ${text}
    </c:when>
    <%--FIRST_LAST_COMPANY--%>
    <c:when test="${fileAs eq '5'}">
        <% String name = fileAsFirstLast(firstName, lastName, fullName, nickname); %>
        <% set("text", fileAsNameCompany(name, company)); %>
        ${text}
    </c:when>
    <%--COMPANY_FIRST_C_LAST--%>
    <c:when test="${fileAs eq '6'}">
        <% String name = fileAsLastFirst(firstName, lastName, fullName, nickname); %>
        <% set("text", fileAsCompanyName(name, company)); %>
        ${text}
    </c:when>
    <%--COMPANY_FIRST_LAST--%>
    <c:when test="${fileAs eq '7'}">
        <% String name = fileAsFirstLast(firstName, lastName, fullName, nickname); %>
        <% set("text", fileAsCompanyName(name, company)); %>
        ${text}
    </c:when>
    <%--CUSTOM - looks like "8:foobar" --%>
    <c:when test="${fn:startsWith(fileAs,'8')}">
        ${fn:escapeXml(fn:substring(fileAs,2,-1))}
    </c:when>
    <%--LAST_C_FIRST--%>
    <c:otherwise>
        <c:choose>
            <c:when test="${contact.isGalContact and not empty fullName}">${fullName}</c:when>
            <c:when test="${zm:boolean(contact.isGalContact)}">${fn:escapeXml(contact.email)}</c:when>
            <c:otherwise>
                <% set("text", fileAsLastFirst(firstName, lastName, fullName, nickname)); %>
                ${text}
            </c:otherwise>
        </c:choose>
    </c:otherwise>
</c:choose>
<%!
PageContext context() {
    return (PageContext)getJspContext();
}

String format(String key, Object... args) {
    ResourceBundle bundle = (ResourceBundle)context().findAttribute("ZmMsg");
    try {
        return MessageFormat.format(bundle.getString(key), args);
    }
    catch (Exception e) {
        return key;
    }
}

static boolean empty(String s) {
    return s == null || s.length() == 0;
}

String get(String name) {
    return (String)context().findAttribute(name);
}

void set(String name, String value) {
    context().setAttribute(name, value, PageContext.PAGE_SCOPE);
}
%>
<%-- NOTE: Keep in sync with ZmContact.js --%>
<%!
String fileAsFirstLast(String first, String last, String fullname, String nickname) {
	if (!empty(first) && !empty(last)) {
		return format("fileAsFirstLast", first, last);
    }
	if (!empty(first)) return first;
	if (!empty(last)) return last;
	if (!empty(fullname)) return fullname;
	if (!empty(nickname)) return nickname;
	return "";
}

String fileAsLastFirst(String first, String last, String fullname, String nickname) {
	if (!empty(first) && !empty(last)) {
		return format("fileAsLastFirst", first, last);
    }
	if (!empty(first)) return first;
	if (!empty(last)) return last;
	if (!empty(fullname)) return fullname;
	if (!empty(nickname)) return nickname;
	return "";
}

String fileAsNameCompany(String name, String company) {
	if (!empty(name) && !empty(company)) {
		return format("fileAsNameCompany", name, company);
    }
	if (!empty(company)) {
		return format("fileAsCompanyAsSecondaryOnly", company);
    }
	return name;
}

String fileAsCompanyName(String name, String company) {
	if (!empty(company) && !empty(name)) {
		return format("fileAsCompanyName", name, company);
    }
	if (!empty(name)) {
		return format("fileAsNameAsSecondaryOnly", name);
    }
	return company;
}
%>