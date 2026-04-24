//================ SHOW ROLE FORM =================
function toggleForm(){

let role=document.getElementById("role").value;

if(role===""){
document.getElementById("commonFields").style.display="none";
document.getElementById("studentFields").style.display="none";
document.getElementById("facultyFields").style.display="none";
return;
}

document.getElementById("commonFields").style.display="block";


if(role==="student"){
document.getElementById("studentFields").style.display="block";
document.getElementById("facultyFields").style.display="none";
}

if(role==="faculty"){
document.getElementById("studentFields").style.display="none";
document.getElementById("facultyFields").style.display="block";
}

}



//================ PASSWORD VALIDATION =================
function validatePassword(password){

return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

}



//================ REGISTER =================
function register(){

let role=document.getElementById("role").value;

let uid=document.getElementById("university_id").value.trim();

let pass=document.getElementById("password").value.trim();


if(!role || !uid || !pass){
alert("All fields required");
return;
}


if(!validatePassword(pass)){
alert(
"Password must contain capital, small, number and special character"
);
return;
}


let user={

role:role,

name:name.value,

mobile:mobile.value,

email:email.value,

university:university.value,

uid:uid,

password:pass,

father:father_name.value,

course:course.value,

attendance:"Not Updated",

marks:"Not Updated",

fees:"Pending",

timetable:"Not Updated"

};


localStorage.setItem(
uid,
JSON.stringify(user)
);


alert("Registered Successfully");


document.querySelectorAll("input").forEach(
i=>i.value=""
);

document.getElementById("role").value="";

toggleForm();

}




//================ LOGIN =================
function login(){

let role=login_role.value;

let uid=login_id.value.trim();

let pass=login_pass.value.trim();


if(!role||!uid||!pass){
alert("Fill login fields");
return;
}


let user=
JSON.parse(
localStorage.getItem(uid)
);


if(
user &&
user.password===pass &&
user.role===role
){

localStorage.setItem(
"currentUser",
uid
);


if(role==="student"){
location.href="dashboard.html";
}

if(role==="faculty"){
location.href="faculty.html";
}

}
else{

alert("Invalid Login");

}

}



//================ FACULTY UPDATE =================
function updateStudent(){

let sid=
document.getElementById("studentId").value;

let student=
JSON.parse(
localStorage.getItem(sid)
);


if(!student){
alert("Student not found");
return;
}


student.attendance=
attendance.value;

student.marks=
marks.value;

student.fees=
fees.value;

student.timetable=
timetable.value;


localStorage.setItem(
sid,
JSON.stringify(student)
);

alert("Student Record Updated");

}



//================ STUDENT DATA LOAD =================
function loadStudentData(){

let uid=
localStorage.getItem("currentUser");

let user=
JSON.parse(
localStorage.getItem(uid)
);


if(!user) return;


if(document.getElementById("att"))
att.innerText=user.attendance;

if(document.getElementById("mk"))
mk.innerText=user.marks;

if(document.getElementById("fs"))
fs.innerText=user.fees;

if(document.getElementById("tt"))
tt.innerText=user.timetable;

}



//================ ACCESS CHECK =================
function checkAccess(expectedRole){

let uid=
localStorage.getItem("currentUser");

let user=
JSON.parse(
localStorage.getItem(uid)
);

if(!user || user.role!==expectedRole){

alert("Login First");

location.href="index.html";

}

return user;

}



//================ LOGOUT =================
function logout(){

localStorage.removeItem(
"currentUser"
);

location.href=
"index.html";

}