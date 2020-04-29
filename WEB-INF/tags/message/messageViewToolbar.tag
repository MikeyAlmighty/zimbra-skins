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
<%@ attribute name="context" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.tag.SearchContext"%>
<%@ attribute name="cursor" rtexprvalue="true" required="true" type="com.zimbra.cs.taglib.bean.NextPrevItemBean"%>
<%@ attribute name="keys" rtexprvalue="true" required="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="com.zimbra.i18n" %>
<%@ taglib prefix="app" uri="com.zimbra.htmlclient" %>
<%@ taglib prefix="zm" uri="com.zimbra.zm" %>

<zm:getMailbox var="mailbox"/>

<table width="100%" cellspacing="0" class='Tb'>
      <tr valign='middle'>
        <td class='TbBT'>
            <table cellspacing="0" cellpadding="0" class='Tb'>
                <tr>
                    <td nowrap>
                        <zm:currentResultUrl var="closeurl" value="/h/search" index="${context.currentItemIndex}" context="${context}" st="" sc=""/>
                        <zm:currentResultUrl var="delRedirectUrl" value="/h/search" context="${context}" />
                        <input type="hidden" value="${delRedirectUrl}" name="delRedirectUrl" />
                        <a href="${fn:escapeXml(closeurl)}" <c:if test="${keys}">id="CLOSE_ITEM"</c:if>> <app:img src="common/ImgClose.png" alt="close"/> <span>&nbsp;${fn:escapeXml(context.backTo)}&nbsp;</span></a>
                    </td>
                    <td><div class='vertSep'></div></td>
                    <app:button id="${keys ? 'OPDELETE' :''}" name="actionDelete" src="startup/ImgDelete.png" text="actionDelete" tooltip="actionTrashTT"/>
                    <td><div class='vertSep'></div></td>
                    <td  nowrap valign="middle">
                        <select name="folderId"  onchange="zclick('SOPMOVE')">
                            <option value="" selected><fmt:message key="moveAction"/></option>
                            <optgroup label=<fmt:message key="actionOptSep"/>>
                            <zm:forEachFolder var="folder">
                                <c:if test="${folder.isMessageMoveTarget and !folder.isTrash and !folder.isSpam}">
                                    <option <c:if test="${keys}">id="OPFLDR${folder.id}"</c:if> value="m:${folder.id}">${zm:getTruncatedFolderPath(pageContext, folder.id, 10, true)}</option>
                                </c:if>
                            </zm:forEachFolder>
                        </select>
                    </td>
                    <app:button id="${keys ? 'OPMOVE' :''}" name="actionMove" text="actionMove" tooltip="actionMoveTT"/>
                    <td><div class='vertSep'></div></td>
                    <td  nowrap valign=middle>
                        <select name="actionOp"  onchange="zclick('SOPGO')">
                            <option value="" selected/><fmt:message key="moreActions"/>
                            <option <c:if test="${keys}">id="OPREAD" </c:if> value="read"/><fmt:message key="actionMarkRead"/>
                            <option <c:if test="${keys}">id="OPUNREAD" </c:if> value="unread"/><fmt:message key="actionMarkUnread"/>
                            <c:if test="${mailbox.features.flagging}">
                                <option <c:if test="${keys}">id="OPFLAG" </c:if> value="flag"/><fmt:message key="actionAddFlag"/>
                                <option <c:if test="${keys}">id="OPUNFLAG" </c:if> value="unflag"/><fmt:message key="actionRemoveFlag"/>
                            </c:if>
                            <app:tagOptions mailbox="${mailbox}" keys="${keys}"/>
                        </select>
                    </td>
                    <app:button id="${keys ? 'OPGO' : ''}" name="action" tooltip="actionMessageGoTT" text="actionGo" />
                    <c:if test="${mailbox.features.spam}">
                        <c:if test="${!context.isFolderSearch or (context.isFolderSearch and !context.folder.isSpam)}">
                            <td><div class='vertSep'></div></td>
                            <app:button id="${keys ? 'OPSPAM' : ''}" name="actionSpam" tooltip="actionSpamTT" text="actionSpam" src="startup/ImgJunkMail.png"/>
                        </c:if>
                        <c:if test="${context.isFolderSearch and context.folder.isSpam}">
                            <td><div class='vertSep'></div></td>
                            <app:button id="${keys ? 'OPSPAM' : ''}" name="actionNotSpam" tooltip="actionNotSpamTT" text="actionNotSpam" src="startup/ImgNotJunk.png"/>
                        </c:if>
                    </c:if>
                </tr>
            </table>
        </td>
        <td align="right">
            <c:if test="${context.hasPrevItem}">
                <zm:prevItemUrl var="prevItemUrl" value="/h/search" action="view" cursor="${cursor}" context="${context}"/>
                <a  <c:if test="${keys}">id="PREV_ITEM" </c:if> href="${fn:escapeXml(prevItemUrl)}"><app:img altkey="ALT_MSG_PREVIOUS_MESSAGE" src="startup/ImgLeftArrow.png" border="0" alt="prev"/></a>
            </c:if>
            <c:if test="${!context.hasPrevItem}">
                <app:img disabled='true' src="startup/ImgLeftArrow.png" border="0" alt="no prev"/>
            </c:if>
            <span class='Paging'>${context.searchResult.offset+context.currentItemIndex+1}</span>
            <c:if test="${context.hasNextItem}">
                <zm:nextItemUrl var="nextItemUrl" value="/h/search" action="view" cursor="${cursor}" context="${context}"/>
                <a  <c:if test="${keys}">id="NEXT_ITEM" </c:if> href="${fn:escapeXml(nextItemUrl)}"><app:img altkey="ALT_MSG_NEXT_MESSAGE" src="startup/ImgRightArrow.png" border="0" alt="next"/></a>
            </c:if>
            <c:if test="${!context.hasNextItem}">
                <app:img disabled='true' src="startup/ImgRightArrow.png" border="0" alt="no next"/>
            </c:if>
        </td>
    </tr>
</table>
