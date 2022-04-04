function validate()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="admin"&&password=="pass")
		{
			alert(window.open("in.html"));
		}
	else
		{
			alert("login failed");
		}
				  
}