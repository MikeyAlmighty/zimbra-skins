<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtZWCUtils.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtMailMsgView_data.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtGetOriginalContent_data.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtAjxUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtAjxStringUtil.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtAjxXslt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtAjxTimezone.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtDwt.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtDwtCssStyle.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtBubbles.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtCompose.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtContactGroup.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtMailListGroups.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtYouTube.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtPreferences.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtCalendar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtContacts.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtMail.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtMailMsg.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtShare.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtSearch.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtPriorityInbox.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtMailMsgView.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtGetOriginalContent.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtToolBar.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UtGeneral.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/unittest/UTSearchHighlighterZimlet.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("UnitTest");
AjxPackage.define("zimbraMail.unittest.UtZWCUtils");
AjxPackage.define("zimbraMail.unittest.UtMailMsgView_data");
AjxPackage.define("zimbraMail.unittest.UtGetOriginalContent_data");
AjxPackage.define("zimbraMail.unittest.UtAjxUtil");
AjxPackage.define("zimbraMail.unittest.UtAjxStringUtil");
AjxPackage.define("zimbraMail.unittest.UtAjxXslt");
AjxPackage.define("zimbraMail.unittest.UtAjxTimezone");
AjxPackage.define("zimbraMail.unittest.UtDwt");
AjxPackage.define("zimbraMail.unittest.UtDwtCssStyle");
AjxPackage.define("zimbraMail.unittest.UtBubbles");
AjxPackage.define("zimbraMail.unittest.UtCompose");
AjxPackage.define("zimbraMail.unittest.UtContactGroup");
AjxPackage.define("zimbraMail.unittest.UtMailListGroups");
AjxPackage.define("zimbraMail.unittest.UtYouTube");
AjxPackage.define("zimbraMail.unittest.UtPreferences");
AjxPackage.define("zimbraMail.unittest.UtCalendar");
AjxPackage.define("zimbraMail.unittest.UtContacts");
AjxPackage.define("zimbraMail.unittest.UtMail");
AjxPackage.define("zimbraMail.unittest.UtMailMsg");
AjxPackage.define("zimbraMail.unittest.UtShare");
AjxPackage.define("zimbraMail.unittest.UtSearch");
AjxPackage.define("zimbraMail.unittest.UtPriorityInbox");
AjxPackage.define("zimbraMail.unittest.UtMailMsgView");
AjxPackage.define("zimbraMail.unittest.UtGetOriginalContent");
AjxPackage.define("zimbraMail.unittest.UtToolBar");
AjxPackage.define("zimbraMail.unittest.UtGeneral");
AjxPackage.define("zimbraMail.unittest.UTSearchHighlighterZimlet");
</script>
