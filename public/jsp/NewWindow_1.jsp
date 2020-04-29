<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxCore.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxDebug.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxCookie.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapFault.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapDoc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpcRequest.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxPost.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxVector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxStringUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/xml/AjxXmlDoc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxImg.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxColor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxEventMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimedAction.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxInclude.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxListener.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxText.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxEmailAddress.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimezone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/Dwt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtDraggable.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtCssStyle.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtPoint.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtRectangle.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtEventManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtUiEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtControlEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtFocusEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtKeyEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtMouseEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtMouseEventCapture.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtListViewActionEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtSelectionEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtTreeEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtHoverEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtIdleTimer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtOutsideMouseEventMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyMap.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtHoverMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtControl.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtComposite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtShell.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtLabel.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtLinkButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMenuItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSelect.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtInputField.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtBaseDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMessageDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtOptionDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtToolTip.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtText.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtIframe.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSpinner.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtColorPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtButtonColorPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtChooser.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertySheet.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertyPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTabView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTimeSelect.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/jquery/jquery.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/ZmTagsHelper.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("NewWindow_1");
AjxPackage.define("ajax.core.AjxCore");
AjxPackage.define("ajax.debug.AjxDebug");
AjxPackage.define("ajax.util.AjxUtil");
AjxPackage.define("ajax.core.AjxException");
AjxPackage.define("ajax.util.AjxCookie");
AjxPackage.define("ajax.soap.AjxSoapException");
AjxPackage.define("ajax.soap.AjxSoapFault");
AjxPackage.define("ajax.soap.AjxSoapDoc");
AjxPackage.define("ajax.net.AjxRpcRequest");
AjxPackage.define("ajax.net.AjxRpc");
AjxPackage.define("ajax.net.AjxPost");
AjxPackage.define("ajax.util.AjxVector");
AjxPackage.define("ajax.util.AjxStringUtil");
AjxPackage.define("ajax.xml.AjxXmlDoc");
AjxPackage.define("ajax.core.AjxImg");
AjxPackage.define("ajax.core.AjxColor");
AjxPackage.define("ajax.events.AjxEvent");
AjxPackage.define("ajax.events.AjxEventMgr");
AjxPackage.define("ajax.util.AjxTimedAction");
AjxPackage.define("ajax.net.AjxInclude");
AjxPackage.define("ajax.events.AjxListener");
AjxPackage.define("ajax.util.AjxText");
AjxPackage.define("ajax.util.AjxEmailAddress");
AjxPackage.define("ajax.util.AjxTimezone");
AjxPackage.define("ajax.dwt.core.Dwt");
AjxPackage.define("ajax.dwt.core.DwtException");
AjxPackage.define("ajax.dwt.core.DwtDraggable");
AjxPackage.define("ajax.dwt.graphics.DwtCssStyle");
AjxPackage.define("ajax.dwt.graphics.DwtPoint");
AjxPackage.define("ajax.dwt.graphics.DwtRectangle");
AjxPackage.define("ajax.dwt.events.DwtEvent");
AjxPackage.define("ajax.dwt.events.DwtEventManager");
AjxPackage.define("ajax.dwt.events.DwtUiEvent");
AjxPackage.define("ajax.dwt.events.DwtControlEvent");
AjxPackage.define("ajax.dwt.events.DwtFocusEvent");
AjxPackage.define("ajax.dwt.events.DwtKeyEvent");
AjxPackage.define("ajax.dwt.events.DwtMouseEvent");
AjxPackage.define("ajax.dwt.events.DwtMouseEventCapture");
AjxPackage.define("ajax.dwt.events.DwtListViewActionEvent");
AjxPackage.define("ajax.dwt.events.DwtSelectionEvent");
AjxPackage.define("ajax.dwt.events.DwtTreeEvent");
AjxPackage.define("ajax.dwt.events.DwtHoverEvent");
AjxPackage.define("ajax.dwt.events.DwtIdleTimer");
AjxPackage.define("ajax.dwt.events.DwtOutsideMouseEventMgr");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyMap");
AjxPackage.define("ajax.dwt.widgets.DwtHoverMgr");
AjxPackage.define("ajax.dwt.widgets.DwtControl");
AjxPackage.define("ajax.dwt.widgets.DwtComposite");
AjxPackage.define("ajax.dwt.widgets.DwtShell");
AjxPackage.define("ajax.dwt.widgets.DwtLabel");
AjxPackage.define("ajax.dwt.widgets.DwtButton");
AjxPackage.define("ajax.dwt.widgets.DwtLinkButton");
AjxPackage.define("ajax.dwt.widgets.DwtMenuItem");
AjxPackage.define("ajax.dwt.widgets.DwtMenu");
AjxPackage.define("ajax.dwt.widgets.DwtSelect");
AjxPackage.define("ajax.dwt.widgets.DwtListView");
AjxPackage.define("ajax.dwt.widgets.DwtInputField");
AjxPackage.define("ajax.dwt.widgets.DwtBaseDialog");
AjxPackage.define("ajax.dwt.widgets.DwtDialog");
AjxPackage.define("ajax.dwt.widgets.DwtMessageDialog");
AjxPackage.define("ajax.dwt.widgets.DwtOptionDialog");
AjxPackage.define("ajax.dwt.widgets.DwtToolBar");
AjxPackage.define("ajax.dwt.widgets.DwtToolTip");
AjxPackage.define("ajax.dwt.widgets.DwtText");
AjxPackage.define("ajax.dwt.widgets.DwtIframe");
AjxPackage.define("ajax.dwt.widgets.DwtSpinner");
AjxPackage.define("ajax.dwt.widgets.DwtColorPicker");
AjxPackage.define("ajax.dwt.widgets.DwtButtonColorPicker");
AjxPackage.define("ajax.dwt.widgets.DwtChooser");
AjxPackage.define("ajax.dwt.widgets.DwtPropertySheet");
AjxPackage.define("ajax.dwt.widgets.DwtPropertyPage");
AjxPackage.define("ajax.dwt.widgets.DwtTabView");
AjxPackage.define("ajax.dwt.widgets.DwtTimeSelect");
AjxPackage.define("ajax.3rdparty.jquery.jquery");
AjxPackage.define("zimbraMail.share.view.ZmTagsHelper");
</script>
