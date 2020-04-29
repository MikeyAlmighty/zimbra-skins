<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="contact" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.ZContactBean" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="mo" uri="com.zimbra.mobileclient" %>
    <%-- email --%>
    <c:if test="${zm:anySet(contact,'email email2 email3')}">
        <mo:contactSection>
            <mo:contactField noborder="${contact.email2==null}" isemail="true" label="MO_AB_email" value="${contact.email}" contactId="${contact.id}"/>
            <mo:contactField noborder="${contact.email3==null}" isemail="true" label="MO_AB_email2" value="${contact.email2}" contactId="${contact.id}"/>
            <mo:contactField noborder="true" isemail="true" label="MO_AB_email3" value="${contact.email3}" contactId="${contact.id}"/>
        </mo:contactSection>
    </c:if>

    <c:if test="${zm:anySet(contact,'mobilePhone workPhone workPhone2 workFax homePhone homePhone2 homeFax assistantPhone otherPhone otherFax pager carPhone companyPhone callbackPhone')}">
        <%-- phones --%>
        <mo:contactSection>
            <mo:contactField noborder="${contact.workPhone==null}" isphone="true" label="MO_AB_mobile" value="${contact.mobilePhone}"/>
            <mo:contactField noborder="${contact.workPhone2==null}" isphone="true" label="MO_AB_work" value="${contact.workPhone}"/>
            <mo:contactField noborder="${contact.workFax==null}" isphone="true" label="MO_AB_work2" value="${contact.workPhone2}"/>
            <mo:contactField noborder="${contact.homePhone==null}" isphone="true" label="MO_AB_workFax" value="${contact.workFax}"/>
            <mo:contactField noborder="${contact.homePhone2==null}" isphone="true" label="MO_AB_home" value="${contact.homePhone}"/>
            <mo:contactField noborder="${contact.homeFax==null}" isphone="true" label="MO_AB_home2" value="${contact.homePhone2}"/>
            <mo:contactField noborder="${contact.assistantPhone==null}" isphone="true" label="MO_AB_homeFax" value="${contact.homeFax}"/>
            <mo:contactField noborder="${contact.otherPhone==null}" isphone="true" label="MO_AB_assistant" value="${contact.assistantPhone}"/>
            <mo:contactField noborder="${contact.otherFax==null}" isphone="true" label="MO_AB_other" value="${contact.otherPhone}"/>
            <mo:contactField noborder="${contact.pager==null}" isphone="true" label="MO_AB_otherFax" value="${contact.otherFax}"/>
            <mo:contactField noborder="${contact.carPhone==null}" isphone="true" label="MO_AB_pager" value="${contact.pager}"/>
            <mo:contactField noborder="${contact.companyPhone==null}" isphone="true" label="MO_AB_car" value="${contact.carPhone}"/>
            <mo:contactField noborder="${contact.callbackPhone==null}" isphone="true" label="MO_AB_company" value="${contact.companyPhone}"/>
            <mo:contactField noborder="true" isphone="true" label="MO_AB_callback" value="${contact.callbackPhone}"/>
        </mo:contactSection>
    </c:if>

    <%-- url --%>
    <c:if test="${zm:anySet(contact,'workURL homeURL otherURL')}">
        <mo:contactSection>
            <mo:contactField noborder="${contact.homeURL==null}" isurl="true" label="MO_AB_work" value="${contact.workURL}"/>
            <mo:contactField noborder="${contact.otherURL==null}" isurl="true" label="MO_AB_home" value="${contact.homeURL}"/>
            <mo:contactField noborder="true" isurl="true" label="MO_AB_other" value="${contact.otherURL}"/>
        </mo:contactSection>
    </c:if>
    <%-- addrs --%>

    <c:if test="${zm:anySet(contact,'homeStreet homeCity homeState homePostalCode homeCountry workStreet workCity workState workPostalCode workCountry otherStreet otherCity otherState otherPostalCode otherCountry')}">
        <mo:contactSection>
            <c:if test="${zm:anySet(contact,'workStreet workCity workState workPostalCode workCountry')}">
                <mo:contactField noborder="${!zm:anySet(contact,'homeStreet homeCity homeState homePostalCode homeCountry')}" isaddress="true" label="MO_AB_work"
                                 street="${contact.workStreet}"
                                 city="${contact.workCity}"
                                 state="${contact.workState}"
                                 postalcode="${contact.workPostalCode}"
                                 country="${contact.workCountry}"/>
            </c:if>
            <c:if test="${zm:anySet(contact,'homeStreet homeCity homeState homePostalCode homeCountry')}">
                <mo:contactField noborder="${!zm:anySet(contact,'otherStreet otherCity otherState otherPostalCode otherCountry')}"  isaddress="true" label="MO_AB_home"
                                 street="${contact.homeStreet}"
                                 city="${contact.homeCity}"
                                 state="${contact.homeState}"
                                 postalcode="${contact.homePostalCode}"
                                 country="${contact.homeCountry}"/>
            </c:if>
            <c:if test="${zm:anySet(contact,'otherStreet otherCity otherState otherPostalCode otherCountry')}">
                <mo:contactField noborder="true" isaddress="true" label="MO_AB_other"
                                 street="${contact.otherStreet}"
                                 city="${contact.otherCity}"
                                 state="${contact.otherState}"
                                 postalcode="${contact.otherPostalCode}"
                                 country="${contact.otherCountry}"/>
            </c:if>
        </mo:contactSection>
    </c:if>
