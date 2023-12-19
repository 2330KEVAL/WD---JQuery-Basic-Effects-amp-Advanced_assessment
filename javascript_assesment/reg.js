function ValidData()
{
 var name = document.getElementById('name').value;
 if(name == "")
 {
     alert("Please enter First Name!");
     document.getElementById('name').focus();
     return false;
 }
 var lastname = document.getElementById('lastname').value;
 if(lastname == "")
 {
     alert("Please enter Last Name!");
     document.getElementById('lastname').focus();
     return false;
 }

 var email = document.getElementById('email').value;
 if(email == "")
 {
     alert("Please enter email!");
     document.getElementById('email').focus();
     return false;
 }

 var mobile = document.getElementById('mobile').value;
 if(mobile == "")
 {
     alert("Please enter Mobile Number!");
     document.getElementById('mobile').focus();
     return false;
 }

 var gender = document.querySelector('input[name="gender"]:checked');
 if (!gender) {
     alert("Please select a Gender!");
     return false;
 }

 var birthDate = document.getElementById('Birth').value;
 if(birthDate == "")
 {
     alert("Please enter Date of Birth!");
     document.getElementById('Birth').focus();
     return false;
 }

 var adderss = document.getElementById('adderss').value;
 if(adderss == "")
 {
     alert("Please enter Address!");
     document.getElementById('adderss').focus();
     return false;
 }

 var city = document.getElementById('city').value;
 if(city == "")
 {
     alert("Please enter City!");
     document.getElementById('city').focus();
     return false;
 }

 var areaPin = document.getElementById('areapin').value;
 if(areaPin == "")
 {
     alert("Please enter Area PIN!");
     document.getElementById('areapin').focus();
     return false;
 }

 var state = document.getElementById('state').value;
 if(state == "")
 {
     alert("Please enter State!");
     document.getElementById('state').focus();
     return false;
 }

 var qualification = document.getElementById('qualification').value;
 if(qualification == "")
 {
     alert("Please select Qualification!");
     document.getElementById('qualification').focus();
     return false;
 }

var Specialzation = document.getElementById('Specialzation').value;
if(Specialzation == '')
{
 alert("please select Specialzation");
 document.getElementById('Specialzation').focus();
 return false;
}

 var password = document.getElementById('password').value;
 if(password == "")
 {
     alert("Please enter Password!");
     document.getElementById('password').focus();
     return false;
 }

 return true; 
}