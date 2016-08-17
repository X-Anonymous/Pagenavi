posts_no_thumb_sum = 380;
posts_thumb_sum = 380;
img_thumb_height = 230;
img_thumb_width = 341;
</script>
<script type='text/javascript'>
//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = '<div class="posts-thumb"><a title="'+ pTITLE+'"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" /></a></div><div class="post-info"><h2 class="post-title"></h2></div>';
summ = posts_thumb_sum;
}

var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}
//]]>
