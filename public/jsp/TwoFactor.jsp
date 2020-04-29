<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxEventMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxListener.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtPoint.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtCssStyle.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxText.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxVector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxStringUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimedAction.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/Dwt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtDraggable.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtControlEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtUiEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtFocusEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtKeyEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtMouseEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtSelectionEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtTreeEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtMouseEventCapture.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtEventManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtHoverEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtControl.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtComposite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtBaseDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtToolTip.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtHoverMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtLabel.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtShell.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtTabGroupEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtTabGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyboardMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapDoc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpcRequest.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxDebug.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/xml/AjxXmlDoc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeCommand.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbra/csfe/ZmCsfeResult.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/share/view/dialog/ZmTwoFactorSetupDialog.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("TwoFactor");
AjxPackage.define("ajax.core.AjxException");
AjxPackage.define("ajax.events.AjxEventMgr");
AjxPackage.define("ajax.events.AjxListener");
AjxPackage.define("ajax.dwt.graphics.DwtPoint");
AjxPackage.define("ajax.dwt.graphics.DwtCssStyle");
AjxPackage.define("ajax.util.AjxUtil");
AjxPackage.define("ajax.util.AjxText");
AjxPackage.define("ajax.util.AjxVector");
AjxPackage.define("ajax.util.AjxStringUtil");
AjxPackage.define("ajax.util.AjxTimedAction");
AjxPackage.define("ajax.dwt.core.Dwt");
AjxPackage.define("ajax.dwt.core.DwtDraggable");
AjxPackage.define("ajax.dwt.events.DwtEvent");
AjxPackage.define("ajax.dwt.events.DwtControlEvent");
AjxPackage.define("ajax.dwt.events.DwtUiEvent");
AjxPackage.define("ajax.dwt.events.DwtFocusEvent");
AjxPackage.define("ajax.dwt.events.DwtKeyEvent");
AjxPackage.define("ajax.dwt.events.DwtMouseEvent");
AjxPackage.define("ajax.dwt.events.DwtSelectionEvent");
AjxPackage.define("ajax.dwt.events.DwtTreeEvent");
AjxPackage.define("ajax.dwt.events.DwtMouseEventCapture");
AjxPackage.define("ajax.dwt.events.DwtEventManager");
AjxPackage.define("ajax.dwt.events.DwtHoverEvent");
AjxPackage.define("ajax.dwt.widgets.DwtControl");
AjxPackage.define("ajax.dwt.widgets.DwtComposite");
AjxPackage.define("ajax.dwt.widgets.DwtBaseDialog");
AjxPackage.define("ajax.dwt.widgets.DwtDialog");
AjxPackage.define("ajax.dwt.widgets.DwtToolTip");
AjxPackage.define("ajax.dwt.widgets.DwtHoverMgr");
AjxPackage.define("ajax.dwt.widgets.DwtLabel");
AjxPackage.define("ajax.dwt.widgets.DwtButton");
AjxPackage.define("ajax.dwt.widgets.DwtMenu");
AjxPackage.define("ajax.dwt.widgets.DwtShell");
AjxPackage.define("ajax.dwt.keyboard.DwtTabGroupEvent");
AjxPackage.define("ajax.dwt.keyboard.DwtTabGroup");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyboardMgr");
AjxPackage.define("ajax.soap.AjxSoapDoc");
AjxPackage.define("ajax.soap.AjxSoapException");
AjxPackage.define("ajax.net.AjxRpc");
AjxPackage.define("ajax.net.AjxRpcRequest");
AjxPackage.define("ajax.debug.AjxDebug");
AjxPackage.define("ajax.xml.AjxXmlDoc");
AjxPackage.define("zimbra.csfe.ZmCsfeCommand");
AjxPackage.define("zimbra.csfe.ZmCsfeException");
AjxPackage.define("zimbra.csfe.ZmCsfeResult");
AjxPackage.define("zimbraMail.share.view.dialog.ZmTwoFactorSetupDialog");
</script>
