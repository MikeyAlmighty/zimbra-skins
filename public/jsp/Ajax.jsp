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
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxCookie.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapFault.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/soap/AjxSoapDoc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpcRequest.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxRpc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxVector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxStringUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxDebug.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/debug/AjxDebugXmlDocument.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/xml/AjxXmlDoc.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/xml/AjxSerializer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxImg.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/core/AjxColor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxEventMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimedAction.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxInclude.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/events/AjxListener.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxText.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxDateUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxSelectionManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/net/AjxPost.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxBuffer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxTimezone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/xslt/AjxXslt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxSHA1.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxEmailAddress.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxHistoryMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/Dwt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtId.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtException.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtDraggable.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtDragTracker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtCssStyle.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtPoint.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/graphics/DwtRectangle.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtEventManager.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtDateRangeEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtDisposeEvent.js?v=<%=vers%>"></script>
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
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/events/DwtOutsideMouseEventMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtTabGroupEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyMap.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyMapMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtKeyboardMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/keyboard/DwtTabGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDragEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDragSource.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDropEvent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDropTarget.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/dnd/DwtDragBox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtHoverMgr.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtControl.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtComposite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtShell.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtColorPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtBaseDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtLabel.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCheckbox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtRadioButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtBorderlessButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMenuItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMenu.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMessageDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtOptionDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtInputField.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPasswordField.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSash.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtToolTip.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTreeItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertyPage.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTabView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtWizardDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSelect.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtAlert.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtText.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtIframe.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertySheet.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtGrouper.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtProgressBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtPropertyEditor.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtConfirmDialog.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtChooser.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSpinner.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtButtonColorPicker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtMessageComposite.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtRadioButtonGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtForm.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtComboBox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtTimeSelect.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/jquery/jquery.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/dwt/Widgets.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Ajax");
AjxPackage.define("ajax.core.AjxCore");
AjxPackage.define("ajax.util.AjxUtil");
AjxPackage.define("ajax.core.AjxException");
AjxPackage.define("ajax.util.AjxCookie");
AjxPackage.define("ajax.soap.AjxSoapException");
AjxPackage.define("ajax.soap.AjxSoapFault");
AjxPackage.define("ajax.soap.AjxSoapDoc");
AjxPackage.define("ajax.net.AjxRpcRequest");
AjxPackage.define("ajax.net.AjxRpc");
AjxPackage.define("ajax.util.AjxVector");
AjxPackage.define("ajax.util.AjxStringUtil");
AjxPackage.define("ajax.debug.AjxDebug");
AjxPackage.define("ajax.debug.AjxDebugXmlDocument");
AjxPackage.define("ajax.xml.AjxXmlDoc");
AjxPackage.define("ajax.xml.AjxSerializer");
AjxPackage.define("ajax.core.AjxImg");
AjxPackage.define("ajax.core.AjxColor");
AjxPackage.define("ajax.events.AjxEvent");
AjxPackage.define("ajax.events.AjxEventMgr");
AjxPackage.define("ajax.util.AjxTimedAction");
AjxPackage.define("ajax.net.AjxInclude");
AjxPackage.define("ajax.events.AjxListener");
AjxPackage.define("ajax.util.AjxText");
AjxPackage.define("ajax.util.AjxDateUtil");
AjxPackage.define("ajax.util.AjxSelectionManager");
AjxPackage.define("ajax.net.AjxPost");
AjxPackage.define("ajax.util.AjxBuffer");
AjxPackage.define("ajax.util.AjxTimezone");
AjxPackage.define("ajax.xslt.AjxXslt");
AjxPackage.define("ajax.util.AjxSHA1");
AjxPackage.define("ajax.util.AjxEmailAddress");
AjxPackage.define("ajax.util.AjxHistoryMgr");
AjxPackage.define("ajax.dwt.core.Dwt");
AjxPackage.define("ajax.dwt.core.DwtId");
AjxPackage.define("ajax.dwt.core.DwtException");
AjxPackage.define("ajax.dwt.core.DwtDraggable");
AjxPackage.define("ajax.dwt.core.DwtDragTracker");
AjxPackage.define("ajax.dwt.graphics.DwtCssStyle");
AjxPackage.define("ajax.dwt.graphics.DwtPoint");
AjxPackage.define("ajax.dwt.graphics.DwtRectangle");
AjxPackage.define("ajax.dwt.events.DwtEvent");
AjxPackage.define("ajax.dwt.events.DwtEventManager");
AjxPackage.define("ajax.dwt.events.DwtDateRangeEvent");
AjxPackage.define("ajax.dwt.events.DwtDisposeEvent");
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
AjxPackage.define("ajax.dwt.events.DwtOutsideMouseEventMgr");
AjxPackage.define("ajax.dwt.keyboard.DwtTabGroupEvent");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyMap");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyMapMgr");
AjxPackage.define("ajax.dwt.keyboard.DwtKeyboardMgr");
AjxPackage.define("ajax.dwt.keyboard.DwtTabGroup");
AjxPackage.define("ajax.dwt.dnd.DwtDragEvent");
AjxPackage.define("ajax.dwt.dnd.DwtDragSource");
AjxPackage.define("ajax.dwt.dnd.DwtDropEvent");
AjxPackage.define("ajax.dwt.dnd.DwtDropTarget");
AjxPackage.define("ajax.dwt.dnd.DwtDragBox");
AjxPackage.define("ajax.dwt.widgets.DwtHoverMgr");
AjxPackage.define("ajax.dwt.widgets.DwtControl");
AjxPackage.define("ajax.dwt.widgets.DwtComposite");
AjxPackage.define("ajax.dwt.widgets.DwtShell");
AjxPackage.define("ajax.dwt.widgets.DwtColorPicker");
AjxPackage.define("ajax.dwt.widgets.DwtBaseDialog");
AjxPackage.define("ajax.dwt.widgets.DwtDialog");
AjxPackage.define("ajax.dwt.widgets.DwtLabel");
AjxPackage.define("ajax.dwt.widgets.DwtCheckbox");
AjxPackage.define("ajax.dwt.widgets.DwtRadioButton");
AjxPackage.define("ajax.dwt.widgets.DwtListView");
AjxPackage.define("ajax.dwt.widgets.DwtButton");
AjxPackage.define("ajax.dwt.widgets.DwtBorderlessButton");
AjxPackage.define("ajax.dwt.widgets.DwtMenuItem");
AjxPackage.define("ajax.dwt.widgets.DwtMenu");
AjxPackage.define("ajax.dwt.widgets.DwtMessageDialog");
AjxPackage.define("ajax.dwt.widgets.DwtOptionDialog");
AjxPackage.define("ajax.dwt.widgets.DwtInputField");
AjxPackage.define("ajax.dwt.widgets.DwtPasswordField");
AjxPackage.define("ajax.dwt.widgets.DwtSash");
AjxPackage.define("ajax.dwt.widgets.DwtToolBar");
AjxPackage.define("ajax.dwt.widgets.DwtToolTip");
AjxPackage.define("ajax.dwt.widgets.DwtTreeItem");
AjxPackage.define("ajax.dwt.widgets.DwtTree");
AjxPackage.define("ajax.dwt.widgets.DwtCalendar");
AjxPackage.define("ajax.dwt.widgets.DwtPropertyPage");
AjxPackage.define("ajax.dwt.widgets.DwtTabView");
AjxPackage.define("ajax.dwt.widgets.DwtWizardDialog");
AjxPackage.define("ajax.dwt.widgets.DwtSelect");
AjxPackage.define("ajax.dwt.widgets.DwtAlert");
AjxPackage.define("ajax.dwt.widgets.DwtText");
AjxPackage.define("ajax.dwt.widgets.DwtIframe");
AjxPackage.define("ajax.dwt.widgets.DwtPropertySheet");
AjxPackage.define("ajax.dwt.widgets.DwtGrouper");
AjxPackage.define("ajax.dwt.widgets.DwtProgressBar");
AjxPackage.define("ajax.dwt.widgets.DwtPropertyEditor");
AjxPackage.define("ajax.dwt.widgets.DwtConfirmDialog");
AjxPackage.define("ajax.dwt.widgets.DwtChooser");
AjxPackage.define("ajax.dwt.widgets.DwtSpinner");
AjxPackage.define("ajax.dwt.widgets.DwtButtonColorPicker");
AjxPackage.define("ajax.dwt.widgets.DwtMessageComposite");
AjxPackage.define("ajax.dwt.widgets.DwtRadioButtonGroup");
AjxPackage.define("ajax.dwt.widgets.DwtForm");
AjxPackage.define("ajax.dwt.widgets.DwtComboBox");
AjxPackage.define("ajax.dwt.widgets.DwtTimeSelect");
AjxPackage.define("ajax.3rdparty.jquery.jquery");
AjxPackage.define("dwt.Widgets");
</script>
