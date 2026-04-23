
// ================= TOGGLE FORM =================
function toggleForm() {

    let role = document.getElementById("role").value;

    let common = document.getElementById("commonFields");
    let student = document.getElementById("studentFields");
    let faculty = document.getElementById("facultyFields");

    if (!role) {
        common.style.display = "none";
        student.style.display = "none";
        faculty.style.display = "none";
        return;
    }

    common.style.display = "block";

    if (role === "student") {
        student.style.display = "block";
        faculty.style.display = "none";
    } else {
        student.style.display = "none";
        faculty.style.display = "block";
    }
}


// ================= PASSWORD VALIDATION =================
function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}


// ================= REGISTER =================
function register() {

    let role = document.getElementById("role").value;
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let university = document.getElementById("university").value.trim();
    let uid = document.getElementById("university_id").value.trim();
    let password = document.getElementById("password").value.trim();

    let father = document.getElementById("father_name")?.value.trim();
    let course = document.getElementById("course")?.value.trim();

    // Required fields check
    if (!role || !name || !mobile || !email || !university || !uid || !password) {
        alert("All fields are required!");
        return;
    }

    // Student extra validation
    if (role === "student" && (!father || !course)) {
        alert("Please fill student details!");
        return;
    }

    // Password validation
    if (!validatePassword(password)) {
        alert("Password must be strong (8+ chars, A-Z, a-z, number, special char)");
        return;
    }

    // Save user
    let user = {
        role, name, mobile, email, university, uid, password,
        father: father || "",
        course: course || ""
    };

    localStorage.setItem(uid, JSON.stringify(user));

    alert("✅ Registered Successfully!");

    // Clear form
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.getElementById("role").value = "";
    toggleForm();
}


// ================= LOGIN =================
function login() {

    let role = document.getElementById("login_role").value;
    let uid = document.getElementById("login_id").value.trim();
    let pass = document.getElementById("login_pass").value.trim();

    if (!role || !uid || !pass) {
        alert("Please fill all login fields!");
        return;
    }

    let user = JSON.parse(localStorage.getItem(uid));

    if (user && user.password === pass && user.role === role) {

        localStorage.setItem("currentUser", uid);

        if (role === "student") {
            window.location.href = "dashboard.html";
        } else {
            window.location.href = "faculty.html";
        }

    } else {
        alert("❌ Invalid Login!");
    }
}


// ================= PROTECT PAGES =================
function checkAccess(expectedRole) {

    let uid = localStorage.getItem("currentUser");
    let user = JSON.parse(localStorage.getItem(uid));

    if (!user || user.role !== expectedRole) {
        alert("Please login first!");
        window.location.href = "index.html";
    }

    return user;
}


// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}