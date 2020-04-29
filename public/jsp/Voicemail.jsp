<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/util/AjxPluginDetector.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/core/DwtDragTracker.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtBorderlessButton.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSlider.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/dwt/widgets/DwtSoundPlugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/abook/model/ZmContact.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmCallFeature.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmPhone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmCallingParty.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmVoiceItem.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmCall.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmVoicemail.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmVoiceFolder.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmVoiceFolderTree.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/model/ZmVoiceList.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmSoundPlayer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmFlashAudioPlayer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmVoiceListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmCallListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmVoicemailListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmMP3VoicemailListView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmVoiceOverviewContainer.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/view/ZmVoiceTreeView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/controller/ZmVoiceListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/controller/ZmCallListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/controller/ZmVoicemailListController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/voicemail/controller/ZmVoiceTreeController.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/templates/voicemail/Voicemail.template.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("Voicemail");
AjxPackage.define("ajax.util.AjxPluginDetector");
AjxPackage.define("ajax.dwt.core.DwtDragTracker");
AjxPackage.define("ajax.dwt.widgets.DwtBorderlessButton");
AjxPackage.define("ajax.dwt.widgets.DwtSlider");
AjxPackage.define("ajax.dwt.widgets.DwtSoundPlugin");
AjxPackage.define("zimbraMail.abook.model.ZmContact");
AjxPackage.define("zimbraMail.voicemail.model.ZmCallFeature");
AjxPackage.define("zimbraMail.voicemail.model.ZmPhone");
AjxPackage.define("zimbraMail.voicemail.model.ZmCallingParty");
AjxPackage.define("zimbraMail.voicemail.model.ZmVoiceItem");
AjxPackage.define("zimbraMail.voicemail.model.ZmCall");
AjxPackage.define("zimbraMail.voicemail.model.ZmVoicemail");
AjxPackage.define("zimbraMail.voicemail.model.ZmVoiceFolder");
AjxPackage.define("zimbraMail.voicemail.model.ZmVoiceFolderTree");
AjxPackage.define("zimbraMail.voicemail.model.ZmVoiceList");
AjxPackage.define("zimbraMail.voicemail.view.ZmSoundPlayer");
AjxPackage.define("zimbraMail.voicemail.view.ZmFlashAudioPlayer");
AjxPackage.define("zimbraMail.voicemail.view.ZmVoiceListView");
AjxPackage.define("zimbraMail.voicemail.view.ZmCallListView");
AjxPackage.define("zimbraMail.voicemail.view.ZmVoicemailListView");
AjxPackage.define("zimbraMail.voicemail.view.ZmMP3VoicemailListView");
AjxPackage.define("zimbraMail.voicemail.view.ZmVoiceOverviewContainer");
AjxPackage.define("zimbraMail.voicemail.view.ZmVoiceTreeView");
AjxPackage.define("zimbraMail.voicemail.controller.ZmVoiceListController");
AjxPackage.define("zimbraMail.voicemail.controller.ZmCallListController");
AjxPackage.define("zimbraMail.voicemail.controller.ZmVoicemailListController");
AjxPackage.define("zimbraMail.voicemail.controller.ZmVoiceTreeController");
AjxPackage.define("voicemail.Voicemail");
</script>
