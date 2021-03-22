function length()
{
    var s=document.getElementById("text").value.trim()
var p=/[0-9]./;
    if(!(s.match(p)) && s.length!=0)
     {var l=s.length;

      document.getElementById("lab").innerHTML="Length of the wrord is "+l;
      lab.style.visibility="visible"}
     else
      {
          alert("Enter a valid word")
          document.getElementById("text").value=""
      }
      

}
function refresh()
{
    document.getElementById("text").value="";
    document.getElementById("lab").innerHTML="";
}