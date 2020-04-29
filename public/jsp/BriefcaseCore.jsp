<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/model/ZmBriefcase.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/zimbraMail/briefcase/model/ZmBriefcaseItem.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("BriefcaseCore");
AjxPackage.define("zimbraMail.briefcase.model.ZmBriefcase");
AjxPackage.define("zimbraMail.briefcase.model.ZmBriefcaseItem");
</script>
