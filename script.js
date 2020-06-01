let the_text = "computer";

let html = "<p>";
for (var i=0; i<the_text.length; i++){
   
    html += "Character at position "+i+" is :<strong>"+the_text.charAt(i)+"</strong>";
    html += "; Character code is <strong>"+ the_text.charCodeAt(i)+"</strong><br>"; 
}
html += "</p>";
let text = document.getElementById("write_strings");
text.innerHTML = html;
