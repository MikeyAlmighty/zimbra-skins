<%--
 * ***** BEGIN LICENSE BLOCK *****
 * Zimbra Collaboration Suite Web Client
 * Copyright (C) 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2016 Synacor, Inc.
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
<%@ attribute name="calendar" rtexprvalue="true" required="false" %>
<%@ attribute name="tasklist" rtexprvalue="true" required="false" %>
<%@ attribute name="briefcase" rtexprvalue="true" required="false" %>
<%@ attribute name="addressbook" rtexprvalue="true" required="false" %>
<%@ attribute name="search" rtexprvalue="true" required="false" %>
<%@ attribute name="url" rtexprvalue="true" required="false" %>
<%@ attribute name="link" rtexprvalue="true" required="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>


<c:choose>
    <c:when test="${zm:boolean(calendar)}">
        <fmt:message var="label" key="calendarNew"/>
        <fmt:message var="createLabel" key="createCalendar"/>
        <c:set var="icon" value="${link ? 'calendar/ImgSharedCalendarFolder.png' : 'calendar/ImgCalendarFolder.png'}"/>
        <c:set var="newFolderColor" value="${empty param.newFolderColor ? 'blue' : param.newFolderColor}"/>
        <c:set var="newFolderStyleMsg" value="${zm:getFolderRgbColorMsg(newFolderColor,'appointment')}"/>
        <fmt:message var="newFolderStyleColor" key="${newFolderStyleMsg}"/>
        <c:set var="newFolderExcludeFlag" value="${empty param.newFolderExcludeFlag ? '' : param.newFolderExcludeFlag}"/>
        <c:set var="newFolderCheckedFlag" value="${empty param.newFolderCheckedFlag ? '#' : param.newFolderCheckedFlag}"/>
        <fmt:message var="folderType" key="${url ? 'calendarSubscribed' : (link ? 'calendarShared' : 'calendarUser')}"/>
    </c:when>
    <c:when test="${zm:boolean(addressbook)}">
        <fmt:message var="label" key="addressBookNew"/>
        <fmt:message var="createLabel" key="createAddressBook"/>
        <c:set var="icon" value="${link ? 'contacts/ImgSharedContactsFolder.png' : 'contacts/ImgContactsFolder.png'}"/>
        <fmt:message var="folderType" key="${link ? 'addressBookShared' : 'addressBookUser'}"/>
        <c:set var="newFolderColor" value="${empty param.newFolderColor ? 'blue' : param.newFolderColor}"/>
        <c:set var="newFolderStyleMsg" value="${zm:getFolderRgbColorMsg(newFolderColor,'contact')}"/>
        <fmt:message var="newFolderStyleColor" key="${newFolderStyleMsg}"/>
    </c:when>
    <c:when test="${zm:boolean(tasklist)}">
        <fmt:message var="label" key="taskListNew"/>
        <fmt:message var="createLabel" key="createTaskList"/>
        <c:set var="icon" value="${link ? 'zimbra/ImgSharedTaskList.png' : 'startup/ImgTaskList.png'}"/>
        <c:set var="newFolderColor" value="${empty param.newFolderColor ? 'gray' : param.newFolderColor}"/>
        <c:set var="newFolderStyleMsg" value="${zm:getFolderRgbColorMsg(newFolderColor,'task')}"/>
        <fmt:message var="newFolderStyleColor" key="${newFolderStyleMsg}"/>
        <fmt:message var="folderType" key="${link ? 'taskListShared' : 'taskListUser'}"/>
    </c:when>
    <c:when test="${zm:boolean(briefcase)}">
        <fmt:message var="label" key="briefcaseNew"/>
        <fmt:message var="createLabel" key="createBriefcase"/>
        <c:set var="icon" value="${link ? 'startup/ImgFolder.png' : 'startup/ImgFolder.png'}"/>
        <c:set var="newFolderColor" value="${empty param.newFolderColor ? 'gray' : param.newFolderColor}"/>
        <c:set var="newFolderStyleMsg" value="${zm:getFolderRgbColorMsg(newFolderColor,'task')}"/>
        <fmt:message var="newFolderStyleColor" key="${newFolderStyleMsg}"/>
        <fmt:message var="folderType" key="${link ? 'briefcaseShared' : 'briefcaseUser'}"/>
    </c:when>
    <c:otherwise>
        <c:set var="newFolderStyleColor"><fmt:message key="colorGray"/></c:set>

        <c:set var="icon" value="${search ? 'startup/ImgSearchFolder.png' : (url ? 'startup/ImgRSS.png' : 'startup/ImgFolder.png')}"/>
        <c:choose>
            <c:when test="${zm:boolean(url)}">
                <fmt:message var="label" key="folderNewRssAtomFeed"/>
                <fmt:message var="folderType" key="folderSubscribed"/>
                <fmt:message var="createLabel" key="folderCreateFeed"/>
            </c:when>
            <c:when test="${zm:boolean(search)}">
                <fmt:message var="label" key="folderNewSearchFolder"/>
                <fmt:message var="folderType" key="folderSearch"/>
                <fmt:message var="createLabel" key="folderCreateSearch"/>
            </c:when>
            <c:otherwise>
                <fmt:message var="label" key="folderNew"/>
                <fmt:message var="folderType" key="folderUser"/>
                <fmt:message var="createLabel" key="folderCreate"/>
            </c:otherwise>
        </c:choose>
    </c:otherwise>
</c:choose>

<table width=100% cellspacing=0 cellpadding=0>
    <tr style="background-color:${zm:lightenColor(newFolderStyleColor)}">
        <td width=20 style='padding-left:5px'>
            <app:img src="${icon}" alt='${fn:escapeXml(label)}'/>
        </td>
        <td class='ZhFolderHeader' colspan=2>
            ${fn:escapeXml(label)}
        </td>
        <td width=1% nowrap class='ZhFolderType'>
            ${fn:escapeXml(folderType)}
            &nbsp;
        </td>
    </tr>
</table>

<table border="0" cellpadding="0" cellspacing="10" width=100%>

    <tr>
        <td nowrap align=right>
            <label for="newName"><fmt:message key="name"/>
            :</label>
        </td>
        <td>
            <input id="newName" name='newFolderName' type='text' autocomplete='off' size='35' value="${fn:escapeXml(param.newFolderName)}">
        </td>
    </tr>

<c:choose>
    <c:when test="${not (calendar or addressbook or tasklist or briefcase)}">
    <tr>
        <td nowrap align='right'>
            <label for="parentFolder">
            <fmt:message key="parentFolder"/>
            :</label>
        </td>
        <td>
            <select name="newFolderParentId" id="parentFolder">
                <option selected value="1"/>
                <fmt:message key="rootFolder"/>
                 <zm:forEachFolder var="parent">
                    <c:if test="${(parent.isMessageMoveTarget and !parent.isSpam) or parent.isTrash}">
                        <option value="${parent.id}"/>
                        <c:set var="label" value="${zm:getFolderPath(pageContext, parent.id)}"/>
                        ${label}
                    </c:if>
                </zm:forEachFolder>
            </select>
        </td>
    </tr>
    </c:when>
    <c:when test="${zm:boolean(briefcase)}">
    <tr>
        <td nowrap align='right'>
            <label for="parentFolder">
            <fmt:message key="parentFolder"/>
            :</label>
        </td>
        <td>
            <select name="newFolderParentId" id="parentFolder">
                <option selected value="1"/>
                <fmt:message key="rootFolder"/>
                <zm:forEachFolder var="parent">
                    <c:if test="${parent.isDocumentMoveTarget and !parent.isTrash and !parent.isSpam}">
                        <option value="${parent.id}"/>
                        <c:set var="label" value="${zm:getFolderPath(pageContext, parent.id)}"/>
                        ${label}
                    </c:if>
                </zm:forEachFolder>
            </select>
        </td>
    </tr>
    </c:when>
    <c:otherwise>
        <input name="newFolderParentId" type="hidden" value="1">
    </c:otherwise>
</c:choose>

    <c:if test="${zm:boolean(url)}">
        <tr>
            <td nowrap align=right>
                <label for="url"><fmt:message key="url"/>
                :</label>
            </td>
            <td>
            <table border="0" cellpadding="0" cellspacing="0">
                <tr valign=center>
                    <td>
                        <input id="url" name='newFolderUrl' type='text' size='70' value="${fn:escapeXml(param.newFolderUrl)}">
                        <input name='newFolderUrlVisible' type='hidden' value='TRUE'/>
                    </td>
                </tr>
            </table>
            </td>
        </tr>
    </c:if>


    <c:if test="${zm:boolean(link)}">
        <tr>
            <td nowrap align=right>
                <label for="ownersEmail"><fmt:message key="ownersEmail"/>
                :</label>
            </td>
            <td>
                <input id="ownersEmail" name='newFolderOwnersEmail' type='text' size='35' value="${fn:escapeXml(param.newFolderOwnersEmail)}">
                <input name='newFolderOwnersEmailVisible' type='hidden' value='TRUE'/>
            </td>
        </tr>
        <c:if test="${zm:boolean(addressbook)}">
         <tr>
            <td nowrap align=right>
                <label for="ownersAbName"><fmt:message key="ownersAddressBookName"/>
                :</label>
            </td>
            <td>
                <input id="ownersAbName" name='newFolderOwnersAddressBook' type='text' size='35' value="${fn:escapeXml(param.newFolderOwnersAddressBook)}">
                <input name='newFolderOwnersAddressBookVisible' type='hidden' value='TRUE'/>
            </td>
        </tr>
        </c:if>
        <c:if test="${zm:boolean(tasklist)}">
         <tr>
            <td nowrap align=right>
                <label for="ownersTlName"><fmt:message key="ownersTaskListName"/>
                :</label>
            </td>
            <td>
                <input id="ownersTlName" name='newFolderOwnersTaskList' type='text' size='35' value="${fn:escapeXml(param.newFolderOwnersTaskList)}">
                <input name='newFolderOwnersTaskListVisible' type='hidden' value='TRUE'/>
            </td>
        </tr>
        </c:if>
        <c:if test="${zm:boolean(briefcase)}">
         <tr>
            <td nowrap align=right>
                <label for="ownersBriefcaseName"><fmt:message key="ownersBriefcaseName"/>
                :</label>
            </td>
            <td>
                <input id="ownersBriefcaseName" name='newFolderOwnersBriefcase' type='text' size='35' value="${fn:escapeXml(param.newFolderOwnersBriefcase)}">
                <input name='newFolderOwnersBriefcaseVisible' type='hidden' value='TRUE'/>
            </td>
        </tr>
        </c:if>
        <c:if test="${zm:boolean(calendar)}">
            <tr>
                <td nowrap align=right>
                    <label for="ownersCalName"><fmt:message key="ownersCalendarName"/>
                    :</label>
                </td>
                <td>
                    <input id="ownersCalName" name='newFolderOwnersCalendar' type='text' size='35' value="${fn:escapeXml(param.newFolderOwnersCalendar)}">
                    <input name='newFolderOwnersCalendarVisible' type='hidden' value='TRUE'/>
                </td>
            </tr>
        </c:if>
    </c:if>

    <c:if test="${calendar or addressbook or tasklist or briefcase}">
        <tr>
            <td nowrap align='right'>
                <label for="color"><fmt:message key="color"/>
                :</label>
            </td>
            <td>
                <select name="newFolderColor" id="color">
                    <option <c:if test="${newFolderColor eq 'blue'}">selected</c:if> value="blue"/><fmt:message key="blue"/>
                    <option <c:if test="${newFolderColor eq 'cyan'}">selected</c:if> value="cyan"/><fmt:message key="cyan"/>
                    <option <c:if test="${newFolderColor eq 'green'}">selected</c:if> value="green"/><fmt:message key="green"/>
                    <option <c:if test="${newFolderColor eq 'purple'}">selected</c:if> value="purple"/><fmt:message key="purple"/>
                    <option <c:if test="${newFolderColor eq 'red'}">selected</c:if> value="red"/><fmt:message key="red"/>
                    <option <c:if test="${newFolderColor eq 'yellow'}">selected</c:if> value="yellow"/><fmt:message key="yellow"/>
                    <option <c:if test="${newFolderColor eq 'pink'}">selected</c:if> value="pink"/><fmt:message key="pink"/>
                    <option <c:if test="${newFolderColor eq 'gray'}">selected</c:if> value="gray"/><fmt:message key="gray"/>
                    <option <c:if test="${newFolderColor eq 'orange'}">selected</c:if> value="orange"/><fmt:message key="orange"/>
                </select>
            </td>
        </tr>
    </c:if>

    <c:if test="${zm:boolean(calendar)}">
        <c:if test="${not link}">
        <tr>
              <td>&nbsp;</td>
              <td nowrap>
                  <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                          <td>
                              <input id="exclude" name='newFolderExcludeFlag' type='checkbox' <c:if test="${newFolderExcludeFlag eq 'b'}">checked</c:if> value="b">
                          </td>
                          <td>&nbsp;</td>
                          <td>
                              <label for="exclude"><fmt:message key="excludeFromFreeBusyTimes"/></label>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
        </c:if>
          <tr>
              <td>&nbsp;</td>
              <td nowrap>
                  <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                          <td>
                              <input id="checked" name='newFolderCheckedFlag' type='checkbox' <c:if test="${newFolderCheckedFlag eq '#'}">checked</c:if> value="#">
                          </td>
                          <td>&nbsp;</td>
                          <td>
                              <label for="checked"><fmt:message key="calendarCheckedInUI"/></label>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
    </c:if>

    <c:if test="${zm:boolean(search)}">
        <tr>
            <td nowrap align=right>
                <label for="folderQuery"><fmt:message key="searchQuery"/>
                :</label>
            </td>
            <td>
            <table border="0" cellpadding="0" cellspacing="0">
                <tr valign=center>
                    <td>
                        <input id="folderQuery" name='newFolderQuery' type='text' size='70' value="${fn:escapeXml(param.newFolderQuery)}">
                        <input name='newFolderQueryVisible' type='hidden' value='TRUE'/>
                    </td>
                </tr>
            </table>
            </td>
        </tr>
    </c:if>

    <tr>
        <td>&nbsp;</td>
        <td>
            <input id="OPSAVE" class='tbButton' type="submit" name="actionNew"
                   value="${createLabel}">
            &nbsp;
            <input class='tbButton' type="submit" name="actionCancel"
                   value="<fmt:message key="cancel"/>">
        </td>

    </tr>
</table>
