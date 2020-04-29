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
<%@ attribute name="var" rtexprvalue="false" required="true" type="java.lang.String" %>
<%@ variable name-from-attribute="var" alias='ruleVar' scope="AT_BEGIN" variable-class="com.zimbra.client.ZFilterRule" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>

<zm:filterRule var="ruleVar" name="${param.rulename}" active="${zm:boolean(param.ruleactive)}" allconditions="${param.allof eq 'all'}">
    <c:set var="badDate" value=""/>
    <c:forEach var="i" begin="0" end="${empty param.cond_count ? 0 : param.cond_count - 1}">
        <c:set var="key_condi" value="cond${i}"/>
        <c:set var="key_condop" value="cond${i}_op"/>
        <c:set var="key_condvalue" value="cond${i}_value"/>
        <c:set var="key_condheader" value="cond${i}_header"/>
        <c:set var="key_condremove" value="cond${i}_remove"/>
        <c:set var="cond" value="${param[key_condi]}"/>
        <c:set var="cond_op" value="${param[key_condop]}"/>
        <c:set var="cond_value" value="${param[key_condvalue]}"/>
        <c:set var="cond_header" value="${param[key_condheader]}"/>
        <c:if test="${empty param[key_condremove]}">
            <c:choose>
                <c:when test="${cond eq 'size'}">
                    <c:set var="key_condunits" value="cond${i}_units"/>
                    <c:set var="cond_units" value="${param[key_condunits]}"/>
                    <zm:sizeCondition value="${cond_value}${cond_units}" op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'addressbook'}">
                    <zm:addressBookCondition header="${cond_header}" op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'body'}">
                    <zm:bodyCondition value="${cond_value}" op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'date'}">
                    <c:catch var="parseError">
                        <fmt:message var="parseFormat" key="FILT_COND_DATE_FORMAT"/>
                        <fmt:parseDate var="parsedDate" pattern="${parseFormat}" value="${cond_value}"/>
                        <fmt:formatDate var="fmtDate" value="${parsedDate}" pattern="yyyyMMdd"/>

                        <fmt:formatDate var="testDate" value="${parsedDate}" pattern="${parseFormat}"/>
                        <c:set var="inputParts" value="${fn:split(cond_value, '/.-')}"/>
                        <c:set var="parsedParts" value="${fn:split(testDate, '/.-')}"/>
                        <c:forEach items="${inputParts}" var="item" varStatus="status">
                            <c:if test="${zm:cookInt(item,0) != zm:cookInt(parsedParts[status.index],0)}">
                                <c:set var="fmtDate" value=""/>
                            </c:if>
                        </c:forEach>

                    </c:catch>
                    <c:if test="${not empty parseError}">
                        <c:set var="fmtDate" value=""/>
                    </c:if>
                    <c:set var="badDate" scope="request" value="${badDate}${empty fmtDate ? cond_value : ''},"/>
                    <zm:dateCondition value="${fmtDate}" op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'header'}">
                    <zm:headerCondition name="${cond_header}" value="${cond_value}" op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'headerexists'}">
                    <zm:headerExistsCondition name="${cond_header}" op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'attachment'}">
                    <zm:attachmentExistsCondition  op="${cond_op}"/>
                </c:when>
                <c:when test="${cond eq 'address'}">
                    <zm:addressCondition name="${cond_header}" part="all" value="${cond_value}" op="${cond_op}"/>
                </c:when>
            </c:choose>
        </c:if>
    </c:forEach>

    <c:if test="${not empty param.actionNewCond}">
        <c:choose>
            <c:when test="${param.cond_add eq 'size'}">
                <zm:sizeCondition value="" op="UNDER"/>
            </c:when>
            <c:when test="${param.cond_add eq 'addressbook'}">
                <zm:addressBookCondition header="from" op="IN"/>
            </c:when>
            <c:when test="${param.cond_add eq 'body'}">
                <zm:bodyCondition value="" op="CONTAINS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'date'}">
                <zm:dateCondition value="" op="BEFORE"/>
            </c:when>
            <c:when test="${param.cond_add eq 'header'}">
                <zm:headerCondition name="" value="" op="IS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'from'}">
                <zm:headerCondition name="from" value="" op="IS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'to'}">
                <zm:headerCondition name="to" value="" op="IS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'cc'}">
                <zm:headerCondition name="cc" value="" op="IS"/>
            </c:when>
             <c:when test="${param.cond_add eq 'to,cc'}">
                <zm:headerCondition name="to,cc" value="" op="IS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'subject'}">
                <zm:headerCondition name="subject" value="" op="IS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'headerexists'}">
                <zm:headerExistsCondition name="" op="IS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'attachment'}">
                <zm:attachmentExistsCondition op="EXISTS"/>
            </c:when>
            <c:when test="${param.cond_add eq 'address'}">
                <zm:addressCondition name="from" part="all" value="" op="IS"/>
            </c:when>
        </c:choose>
    </c:if>

    <c:set var="stopAdded" value="${false}"/>
    <c:set var="stopChecked" value="${false}" scope="request"/>

    <c:forEach var="i" begin="0" end="${empty param.action_count ? 0 : param.action_count - 1}">
       <c:set var="key_acti" value="action${i}"/>
        <c:set var="key_actarg" value="action${i}_arg"/>
        <c:set var="key_actremove" value="action${i}_remove"/>
        <c:set var="action" value="${param[key_acti]}"/>
        <c:set var="action_arg" value="${param[key_actarg]}"/>
        <c:if test="${empty param[key_actremove]}">
            <c:choose>
                <c:when test="${action eq 'stop' and param.action_stop eq 'true'}">
                    <zm:stopAction/>
                    <c:set var="stopAdded" value="${true}"/>
                </c:when>
                <c:when test="${action eq 'keep'}">
                    <zm:keepAction/>
                </c:when>
                <c:when test="${action eq 'discard'}">
                    <zm:discardAction/>
                </c:when>
                <c:when test="${action eq 'fileinto'}">
                    <zm:fileIntoAction path="${action_arg}"/>
                </c:when>
                <c:when test="${action eq 'tag'}">
                    <zm:tagAction tag="${action_arg}"/>
                </c:when>
                <c:when test="${action eq 'mark'}">
                    <zm:markAction op="${action_arg}"/>
                </c:when>
                <c:when test="${action eq 'redirect'}">
                    <zm:redirectAction address="${action_arg}"/>
                </c:when>
            </c:choose>
        </c:if>
    </c:forEach>

    <c:if test="${not stopAdded and param.action_stop eq 'true'}">
        <c:set var="stopChecked" value="${true}" scope="request"/>
    </c:if>
    <c:if test="${not stopAdded and param.action_stop eq 'true' and (param.action_count > 0)}">
        <zm:stopAction/>
    </c:if>
    <c:if test="${not stopAdded and param.action_stop eq 'true' and param.actionNewAction}">
        <zm:stopAction/>
    </c:if>

    <c:if test="${not empty param.actionNewAction}">
        <c:choose>
            <c:when test="${param.action_add eq 'keep'}">
                <zm:keepAction/>
            </c:when>
            <c:when test="${param.action_add eq 'discard'}">
                <zm:discardAction/>
            </c:when>
            <c:when test="${param.action_add eq 'fileinto'}">
                <zm:fileIntoAction path="Inbox"/>
            </c:when>
            <c:when test="${param.action_add eq 'tag'}">
                <zm:tagAction tag=""/>
            </c:when>
            <c:when test="${param.action_add eq 'mark'}">
                <zm:markAction op="READ"/>
            </c:when>
            <c:when test="${param.action_add eq 'redirect'}">
                <zm:redirectAction address=""/>
            </c:when>
        </c:choose>
    </c:if>

</zm:filterRule>
