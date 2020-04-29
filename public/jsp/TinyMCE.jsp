<%@ page import="com.zimbra.cs.taglib.bean.BeanUtils" %>
<%
String contextPath = request.getContextPath();
if (contextPath.equals("/")) contextPath = "";
String vers = (String) request.getAttribute("version");
vers = BeanUtils.cook(vers);
String ext = (String) request.getAttribute("fileExtension");
ext = BeanUtils.cook(ext);
%>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/tinymce_jquery.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/locales.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/localeconv.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/zemoticons/data.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/zemoticons/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/autolink/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/charmap/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/contextmenu/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/directionality/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/emoticons/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/image/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/hr/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/link/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/paste/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/table/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/textcolor/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/lists/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/advlist/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/plugins/code/plugin.js?v=<%=vers%>"></script>
<script type="text/javascript" src="<%=contextPath%>/js/ajax/3rdparty/tinymce/themes/modern/theme.js?v=<%=vers%>"></script>
<script type="text/javascript">
AjxPackage.define("TinyMCE");
AjxPackage.define("ajax.3rdparty.tinymce.tinymce_jquery");
AjxPackage.define("ajax.3rdparty.tinymce.locales");
AjxPackage.define("ajax.3rdparty.tinymce.localeconv");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.zemoticons.data");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.zemoticons.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.autolink.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.charmap.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.contextmenu.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.directionality.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.emoticons.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.image.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.hr.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.link.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.paste.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.table.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.textcolor.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.lists.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.advlist.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.plugins.code.plugin");
AjxPackage.define("ajax.3rdparty.tinymce.themes.modern.theme");
</script>
