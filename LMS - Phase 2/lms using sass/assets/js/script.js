// toggle for side navbar
const body=document.querySelector("body"),
      sidebar=document.querySelector("nav"),
      sidebarToggle=body.querySelector(".sidebar-toggle");
    
      sidebarToggle.addEventListener("click",()=>{
          sidebar.classList.toggle("close");
      });


// Search
$(document).ready(function () {
    // Capture user input
    $("#searchInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();

      $("table tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
});

//login-validation
function validateName(){
  let uname=document.getElementById("login-name");
  let uerror=document.getElementById("usernameError");
  let trimmedName=uname.value.trim();
  let nameRegex = /^[a-zA-Z\s_]+$/;

  
  if(trimmedName.match(nameRegex)){
    uerror.innerHTML="";
    uname.classList.remove("invalid");
    uerror.classList.remove("error");
  }
  else{
    uname.classList.add("invalid");
    uerror.classList.add("error");
    uerror.innerHTML="valid username is required";
  }
}

function validatePassword(){
  let upswrd=document.getElementById("login-password");
  let perror=document.getElementById("passwordError");
  let pswrdRegex=/^[a-zA-Z@0-9\s]+$/;
  if(upswrd.value===""){
    upswrd.classList.add("invalid");
    perror.classList.add("error");
    perror.innerHTML="valid password is required";
  }
  else if(upswrd.value.length<8){
    upswrd.classList.add("invalid");
    perror.classList.add("error");
    perror.innerHTML="password must be 8 characters";
  }
  else if(upswrd.value.trim("").match(pswrdRegex) && (upswrd.value.length>=8)){
    perror.innerHTML="";
    perror.classList.remove("error");
    upswrd.classList.remove("invalid");
  }
  else{
    upswrd.classList.add("invalid");
    perror.classList.add("error");
    perror.innerHTML="valid password is required";
  }

}

function validate(e){
  e.preventDefault();
  validateName();
  validatePassword();

  if (!document.querySelector(".error")) {
    let uname=document.getElementById("login-name");
    let upswrd=document.getElementById("login-password");
    if(uname.value=="admin" && upswrd.value=="admin@123"){
    window.location = "admin/index.html";
    }
    else if(uname.value=="david" && upswrd.value=="david@123"){
    window.location = "instructor/index.html";
    }
    else if(uname.value=="ani_student" && upswrd.value=="aniStu@123"){
    window.location = "student/index.html";
    }
    else{
      let hint=document.getElementById("login-hint");
      let link=document.createElement("p");
      link.innerHTML=`
      <a data-bs-toggle="modal" data-bs-target="#userModal" class="text-primary">Hint</a>
      `;
      hint.append(link);
    }
  document.getElementById("login-name").value="";
  document.getElementById("login-password").value="";
  document.getElementById("loginForm").reset();
    // nextFunction();
    
}
}

// function validate(e){
//   e.preventDefault();
//   let uname=document.getElementById("login-name");
//   let upswrd=document.getElementById("login-password");
//   if(uname.value=="admin" && upswrd.value=="admin@123"){
//     window.location = "admin/index.html";
//   }
//   else if(uname.value=="david" && upswrd.value=="david@123"){
//     window.location = "instructor/index.html";
//   }
//   else if(uname.value=="ani_student" && upswrd.value=="aniStu@123"){
//     window.location = "student/index.html";
//   }
//   else{
//     $("#userModal").modal("show");
//   }
//   document.getElementById("login-name").value="";
//   document.getElementById("login-password").value="";
// }

// Forget Password
function validateForgetEmail(){
  let email=document.getElementById("login-email");
  let error=document.getElementById("useremailError");
  let emailRegex="^[a-zA-Z]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]{2,3}$";
  let emailRegex2="^[a-zA-Z0-9]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+[.]+[a-z]{2,3}$";

  if((email.value.match(emailRegex))||(email.value.match(emailRegex2))){
    error.innerHTML='';
    email.classList.remove("invalid");
    error.classList.remove("error");
  }
  else{
    email.classList.add("invalid");
    error.classList.add("error");
    error.innerHTML="valid Email is required";
  }

}

function resetPassword(){
  validateForgetEmail();
  if(!document.querySelector(".error")){
    $("#resetModal").modal("show");
    document.getElementById("login-email").value="";
    // document.getElementById("ok").addEventListener("click",()=>{
    //   window.location="index.html";
    // })
  }
  else{
    console.log("error");
  }
}

// Instructor
// validate assessment
function validateAssessName() {
  let name = document.getElementById("assess-name");
  let aerror = document.getElementById("n-error");

  let nameRegex = /^[a-zA-Z][a-zA-Z0-9@#$.]*$/;

  if (name.value.trim() !== "" && nameRegex.test(name.value.trim())) {
    aerror.innerHTML = "";
    name.classList.remove("invalid");
    aerror.classList.remove("error");
  } else {
    name.classList.add("invalid");
    aerror.classList.add("error");
    aerror.innerHTML = "Invalid name format";
  }
}


function validateAssessCode() {
  let code = document.getElementById("assess-code");
  let aerror = document.getElementById("c-error");
  let codeRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;

  if (code.value.trim() !== "" && codeRegex.test(code.value.trim())) {
    aerror.innerHTML = "";
    code.classList.remove("invalid");
    aerror.classList.remove("error");
  } else {
    code.classList.add("invalid");
    aerror.classList.add("error");
    aerror.innerHTML = "Invalid format";
  }
}


function validateDate() {
  let dateInput = document.getElementById("assess-date");
  let aerror = document.getElementById("d-error");
  let enteredDate = new Date(dateInput.value);
  
  if (!isNaN(enteredDate.getTime())) {
    let currentDate = new Date();
    
    enteredDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    if (enteredDate < currentDate) {
      dateInput.classList.add("invalid");
      aerror.classList.add("error");
      aerror.innerHTML = "Date should not be in the past";
    } else {
      dateInput.classList.remove("invalid");
      aerror.classList.remove("error");
      aerror.innerHTML = "";
    }
  } else {
    dateInput.classList.add("invalid");
    aerror.classList.add("error");
    aerror.innerHTML = "Required";
  }
}



function validateStartTime() {
  const startTimeInput = document.getElementById("assess-startTime");
  const aerror = document.getElementById("st-error");
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (timeRegex.test(startTimeInput.value)) {
    startTimeInput.classList.remove("invalid");
    aerror.innerHTML = ''; 
    aerror.classList.remove('error');
  } else {
    startTimeInput.classList.add("invalid");
    aerror.innerHTML = "required";
    aerror.classList.add('error');
  }
}

function validateEndTime() {
  let endTimeInput = document.getElementById("assess-endTime");
  let aerror = document.getElementById("et-error");
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (timeRegex.test(endTimeInput.value)) {
    endTimeInput.classList.remove("invalid");
    aerror.innerHTML = ''; 
    aerror.classList.remove('error');
  } else {
    endTimeInput.classList.add("invalid");
    aerror.innerHTML = "required";
    aerror.classList.add('error');
  }
}

function validatePhoneNumber(inputElement) {
  // Remove non-numeric characters
  var numericValue = inputElement.value.replace(/[^0-9]/g, '');

  inputElement.value = numericValue;
  
}
//Create Assessment
let assessid=2;
function addAssess(){
  validateAssessName();
  validateAssessCode();
  validateDate();
  validateStartTime();
  validateEndTime();
  if(!document.querySelector(".error")){
  let name=document.getElementById("assess-name").value;
  let code=document.getElementById("assess-code").value;
  let date=document.getElementById("assess-date").value;
  let stime=document.getElementById("assess-startTime").value;
  let etime=document.getElementById("assess-endTime").value;

  let div = document.getElementById('assessment');
  let newRow = document.createElement('div');
  let id=newRow.id=`assess${assessid}`;
  newRow.classList.add('row', 'mb-3','shadow','p-2');

  newRow.innerHTML=`
  <div class="col-md-3">
  <h6>Assessment Name</h6>
  <p>${name}</p></div>
  <div class="col-md-2">
  <h6>Code</h6>
  <p>${code}</p></div>
  <div class="col-md-2">
  <h6>Date</h6>
  <p>${date}</p></div>
  <div class="col-md-5">
  <h6>Time</h6>
  <div class="row mb-3">
  <div class="col-md-4">
  <p>${stime}</p></div>
  <div class="col-md-4">
  <h6>to</h6></div>
  <div class="col-md-4">
  <p>${etime}</p></div></div>
  <button type="button" class="btn btn-color w-40 mb-3"><a href="html-quiz.html" class="text-dark">Add</a></button>
  <button type="button" class="btn btn-color w-30 mb-3" onclick="deleteAssess('${id}')">Delete</button>
  <button type="button" class="btn btn-color w-30 mb-3" onclick="save()">Save</button>
  <button type="button" class="btn btn-color w-30 mb-3" onclick="publish()">Save &amp; Publish</button>
  </div>
  `;
  assessid++;
  div.prepend(newRow);
  document.getElementById('assess-name').value = '';
  document.getElementById('assess-code').value = '';
  document.getElementById('assess-date').value = '';
  document.getElementById('assess-startTime').value = '';
  document.getElementById('assess-endTime').value = '';
  }
  else{
    console.log("assessment error");
  }
}
function deleteMaterial(id){
  $('#deleteModal').modal('show');
  document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    $('#deleteModal').modal('hide');
  });
}
// Delete Assessment
function deleteAssess(id){
  $('#deleteModal').modal('show');
  document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    $('#deleteModal').modal('hide');
  });
}
// validate Topic
function validateTopic(){
  let topic=document.getElementById("addtopic");
  let terror=document.getElementById("topicError");
  let regex=/^[a-zA-Z0-9#][\s\S]*$/;
  if(topic.value.trim()!==''&& topic.value.match(regex)){
    terror.innerHTML="";
    topic.classList.remove("invalid");
    terror.classList.remove("error");
  }
  else{
    terror.innerHTML="Required Field";
    topic.classList.add("invalid");
    terror.classList.add("error");
  }
}

// add topic
let accordionid=4;
let topicid=4;
function addTopic(){
  validateTopic();
  if(!document.querySelector(".error")){
    let topic=document.getElementById("addtopic").value;
  let div=document.getElementById("accordionTopic");
  let newRow=document.createElement("div");
  newRow.classList.add('accordian-item','mb-3','rounded2','shadow');
  newRow.id=`topic${topicid}`;
  let currId=`flush-collapse${accordionid}`;
  newRow.innerHTML=`
  <h2 class="accordion-header d-flex">
    <button class="btn"><i class="fa fa-pencil-square-o" aria-hidden="true" onclick="openTopicEditModal('topic${topicid}')"></i></button>
    <button class="accordion-button collapsed rounded-2 fw-medium" type="button" data-bs-toggle="collapse" data-bs-target="#${currId}" aria-expanded="false" aria-controls="${currId}">
      ${topic}
    </button>
  </h2>
  <div id="${currId}" class="accordion-collapse collapse" data-bs-parent="#accordionTopic">
    <div class="accordion-body">
      <div class="materials">
        <div class="row mb-3">
          <div class="col-md-6">
            <h6>Add Comment</h6>
            <div class="input-group mb-3">
              <input type="text" class="form-control comment" placeholder="Add Comment" aria-label="Comment" aria-describedby="button-addon2">
              <button class="btn btn-color" type="button" onclick="addComment('topic${topicid}')">Add</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <h6>Upload Material</h6>
                <div class="input-group">
                  <input type="file" class="form-control myMaterial" accept=".pdf" aria-label="Upload">
                  <button class="btn btn-color" type="button" onclick="addMaterial('topic${topicid}')">Upload</button>
                </div>
              </div>
              <div class="col-md-6">
                <h6>Upload Assignment</h6>        
                <div class="input-group">
                  <input type="file" class="form-control myAssignment" accept=".pdf" aria-label="Upload">
                  <button class="btn btn-color" type="button" onclick="addAssignment('topic${topicid}')">Upload</button>
                </div>
              </div>
          </div>
          </div>
          <div class="uploaded"></div>
        </div>
    </div>
    </div>
  </div>
  `

  accordionid++;
  topicid++;
  div.append(newRow);
  document.getElementById("addtopic").value='';
  }
  else{
    console.log("error in add topic");
  }
  
}

// validate announce
function validateAnnounceCourse(){
  let course=document.getElementById("course-name");
  let cerror=document.getElementById("acourseError");
  if(course.value!==""){
    cerror.innerHTML="";
    course.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    cerror.innerHTML="Select Course";
    course.classList.add("invalid");
    cerror.classList.add("error");
  }
}

function validateAnnounce(){
  let announce=document.getElementById("announce");
  let aerror=document.getElementById("announceError");
  if(announce.value.trim()!==""){
    aerror.innerHTML="";
    announce.classList.remove("invalid");
    aerror.classList.remove("error");
  }
  else{
    aerror.innerHTML="Required Field";
    announce.classList.add("invalid");
    aerror.classList.add("error");
  }
}


// Add Announce
let aId=3;
function addAnnounce(){
  let id=aId;
  validateAnnounceCourse();
  validateAnnounce();
  if(!document.querySelector(".error")){
    let course=document.getElementById("course-name").value;
    let announce=document.getElementById("announce").value;
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;

    let newRow=document.createElement('tr');
    newRow.id=`announce${id}`;
    newRow.innerHTML=`
    <td scope="col"><p class="mt-2">${newdate}</p></td>
    <td scope="col"><p class="mt-2">${course}</p></td>
    <td scope="col"><p class="mt-2">${announce}</p></td>
    <td scope="col"><button type="button" class="btn fs-6" onclick="openAnnounceEditModal('announce${id}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button> <button type="button" class="btn fs-6" onclick=deleteAnnounce('announce${aId}')><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
    `;
    aId++;
    document.getElementById('announce-table').prepend(newRow);
    document.getElementById('course-name').value = '';
    document.getElementById('announce').value = '';
  }
  else{
    console.log("error in announcement");
  }
  
}

// edit announce
function openAnnounceEditModal(id){
  $('#editAnnounceModal').modal('show');
  let row=document.getElementById(id);
  let cells=row.getElementsByTagName("td");
  let course=cells[1].innerText;
  let announce=cells[2].innerText;
  document.getElementById("editCourse-name").value=course;
  document.getElementById("editAnnounce").value=announce;
  document.getElementById("editRowId").value = id;
}
function validateEditAnnounce(){
  const editedAnnounce=document.getElementById("editAnnounce");
    if(editedAnnounce.value.trim()!==""){
      editedAnnounce.classList.remove("invalid");
    }
    else{
      editedAnnounce.classList.add("invalid");
    }
}
function saveAnnounceChanges(){
  validateEditAnnounce();
  const editedCourse=document.getElementById("editCourse-name").value;
  const editedAnnounce=document.getElementById("editAnnounce").value;
  const rowId=document.getElementById("editRowId").value;
  if(editedAnnounce!==""){
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let newdate = day + "-" + month + "-" + year;
  const row=document.getElementById(rowId);
  const cells=row.getElementsByTagName("td");
  cells[0].innerText=newdate;
  cells[1].innerText=editedCourse;
  cells[2].innerText=editedAnnounce;
  $('#editAnnounceModal').modal('hide');
  }
  else{
    console.log("error");
  }
}

// delete Announce
function deleteAnnounce(id){
  $('#deleteModal').modal('show');
  document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    $('#deleteModal').modal('hide');
  });
}


// export to csv
function exportTableToCSV(tableId, filename) {
  var csv = [];
  var rows = document.querySelectorAll('#' + tableId + ' thead tr, #' + tableId + ' tbody tr');

  for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll('td, th');

      for (var j = 0; j < cols.length; j++) {
          row.push(cols[j].innerText);
      }

      csv.push(row.join(','));
  }
  downloadCSV(csv.join('\n'), filename);
}
function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;
  csvFile = new Blob([csv], { type: 'text/csv' });
  downloadLink = document.createElement('a');
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}


// validate to create user
function validateUserName(){
  let name=document.getElementById("name");
  let uerror=document.getElementById("usererror");
  let trimmedName=name.value.trim();
  let nameRegex = /^[a-zA-Z_\s]+$/;
  if(trimmedName.match(nameRegex)){
    uerror.innerHTML="";
    name.classList.remove("invalid");
    uerror.classList.remove("error");
  }
  else{
    name.classList.add("invalid");
    uerror.classList.add("error");
    uerror.innerHTML="valid username is required";
  }

}
function validateEditUserName(){
  let name=document.getElementById("editName");
  let trimmedName=name.value.trim();
  let nameRegex = /^[a-zA-Z_\s]+$/;
  if(trimmedName.match(nameRegex)){
    name.classList.remove("invalid");
  }
  else{
    name.classList.add("invalid");
  }
}
function validateUserEmail(){
  let email=document.getElementById("email");
  let uerror=document.getElementById("emailerror");
  let emailRegex="^[a-zA-Z]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]{2,3}$";
  let emailRegex1="^[a-zA-Z0-9]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+[.]+[a-z]{2,3}$";

  if(email.value.match(emailRegex) || email.value.match(emailRegex1)){
    uerror.innerHTML='';
    email.classList.remove("invalid");
    uerror.classList.remove("error");
  }
  else{
    email.classList.add("invalid");
    uerror.classList.add("error");
    uerror.innerHTML="valid Email is required";
  }
}
function validateEditUserEmail(){
  let email=document.getElementById("editEmail");
  let emailRegex="^[a-zA-Z]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]{2,3}$";
  let emailRegex1="^[a-zA-Z0-9]+[a-zA-Z0-9]+@[a-z]+[.]+[a-z]+[.]+[a-z]{2,3}$";

  if(email.value.match(emailRegex) || email.value.match(emailRegex1)){
    email.classList.remove("invalid");
  }
  else{
    email.classList.add("invalid");
  }
}
function validateUserPassword(){
  let pswrd=document.getElementById("password");
  let uerror=document.getElementById("pswrderror");
  let pswrdRegex=/^[a-zA-Z@0-9\s]+$/;
  if((pswrd.value.trim("").match(pswrdRegex))&&(pswrd.value.length>=8)){
    uerror.innerHTML="";
    pswrd.classList.remove("invalid");
    uerror.classList.remove("error");
  }
  else{
    pswrd.classList.add("invalid");
    uerror.classList.add("error");
    uerror.innerHTML="valid password is required";
  }
}
function validateEditUserPassword(){
  let pswrd=document.getElementById("editPassword");
  let pswrdRegex=/^[a-zA-Z@0-9\s]+$/;
  if((pswrd.value.trim("").match(pswrdRegex))&&(pswrd.value.length>=8)){
    pswrd.classList.remove("invalid");
  }
  else{
    pswrd.classList.add("invalid");
  }
}
function validateUserType(){
  let type=document.getElementById("type");
  let uerror=document.getElementById("typeerror");
  
  if(!type.value==""){
    uerror.innerHTML="";
    type.classList.remove("invalid");
    uerror.classList.remove("error");
  }
  else{
    type.classList.add("invalid");
    uerror.classList.add("error");
    uerror.innerHTML="User Type is required";
    console.log(type.value)
  }
}
function validateEditUserType(){
  let type=document.getElementById("editType");
  if(!type.value==""){
    type.classList.remove("invalid");
  }
  else{
    type.classList.add("invalid");
  }
}
function validateUserCourse(){
  let course=document.getElementById("course");
  let uerror=document.getElementById("courseerror");
  if(!course.value==""){
    uerror.innerHTML="";
    course.classList.remove("invalid");
    uerror.classList.remove("error");
  }
  else{
    course.classList.add("invalid");
    uerror.classList.add("error");
    uerror.innerHTML="Course field is required";
  }
}
function validateEditUserCourse(){
  let course=document.getElementById("EditCourse");
  if(!course.value==""){
    course.classList.remove("invalid");
  }
  else{
    course.classList.add("invalid");
  } 
}
// create user
let userid=11;
let sno=11;
function createUser(){
  validateUserName();
  validateUserEmail();
  validateUserPassword();
  validateUserType();
  validateUserCourse();
  if (!document.querySelector(".error")) {
    // Your code for creating the user here
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pswrd = document.getElementById("password").value;
    let type = document.getElementById("type").value;
    let course = document.getElementById("course").value;

    let newRow = document.createElement('tr');
    let usersId = newRow.id = `user${userid}`;
    newRow.innerHTML = `
      <td class="sno">${sno}</td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${type}</td>
      <td>${course}</td>
      <td>
        <button type="button" class="btn btn-outline-warning btn-color mb-2" onclick="openEditModals('${usersId}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-outline-warning btn-color mb-2" onclick="deleteUser('${usersId}')"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
      </td>
    `;
    
    userid++;
    sno++;
    document.getElementById("myTable").prepend(newRow);
    $('#addModal').modal('hide');
    updateSerialNumbers();
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("type").value = '';
    document.getElementById("course").value = '';
  } else {
    console.log("error");
  }
};

function resetUser(){
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  document.getElementById("type").value="";
  document.getElementById("course").value="";
}
// edit user

function openEditModals(id){
  $('#editModal').modal('show');
  let row=document.getElementById(id);
  let cells=row.getElementsByTagName("td");
  let name=cells[1].innerText;
  let email=cells[2].innerText;
  let type=cells[3].innerText;
  let course=cells[4].innerText;
  document.getElementById("editName").value=name;
  document.getElementById("editEmail").value=email;
  document.getElementById("editType").value=type;
  document.getElementById("editCourse").value=course;
  document.getElementById("editRowId").value = id;
  // console.log(document.getElementById("editRowId").value);
}


// edit user save changes
function saveChange(){
  validateEditUserName();
  validateEditUserEmail();
  validateEditUserPassword();
  //validateEditUserType();
  // validateEditUserCourse();
  if(!document.querySelector(".invalid")){
  const editedName=document.getElementById("editName").value;
  const editedEmail=document.getElementById("editEmail").value;
  const editedType=document.getElementById("editType").value;
  const editedCourse=document.getElementById("editCourse").value;
  const rowId=document.getElementById("editRowId").value;

  const row=document.getElementById(rowId);
  const cells=row.getElementsByTagName("td");
  cells[1].innerText=editedName;
  cells[2].innerText=editedEmail;
  cells[3].innerText=editedType;
  cells[4].innerText=editedCourse;

  $('#editModal').modal('hide');
  }
  else{
    console.log("error");
  }
}

// delete user
function deleteUser(id){
  $('#deleteModal').modal('show');
  document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    updateSerialNumbers();
    $('#deleteModal').modal('hide');
});
};
function updateSerialNumbers() {
  var serialNumberElements = document.querySelectorAll('.sno');
  
  serialNumberElements.forEach(function (element, index) {
      element.textContent = index + 1;
  });
}
// validate course
function validateCourseName(){
  let name=document.getElementById("course-name");
  let cerror=document.getElementById("c-error");
  let trimmedName=name.value.trim();
  let nameRegex=/^[a-zA-Z0-9][\s\S]*$/;
  if(trimmedName!=='' && trimmedName.match(nameRegex)){
    cerror.innerHTML="";
    name.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    name.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid coursename is required";
  }
}
function validateEditCourse(){
  let name=document.getElementById("editcourse-name");
  let cerror=document.getElementById("edit-cerror");
  let trimmedName=name.value.trim();
  let nameRegex=/^[a-zA-Z0-9][\s\S]*$/;
  if(trimmedName!=='' && trimmedName.match(nameRegex)){
    cerror.innerHTML="";
    name.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    name.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid coursename is required";
  }
}
function validateCourseDuration(){
  let duration=document.getElementById("course-duration");
  let cerror=document.getElementById("d-error");
  let trimmedval=duration.value.trim();
  if(trimmedval>0 && trimmedval!==''){
    cerror.innerHTML="";
    duration.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    duration.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid duration is required";
  }
}
function validateEditDuration(){
  let duration=document.getElementById("editcourse-duration");
  let cerror=document.getElementById("edit-derror");
  let trimmedval=duration.value.trim();
  if(trimmedval>0 && trimmedval!==''){
    cerror.innerHTML="";
    duration.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    duration.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid duration is required";
  }
}
function validateCourseStartDate() {
  let sdateInput = document.getElementById("course-sdate");
  let cerror = document.getElementById("sd-error");
  let enteredDate = new Date(sdateInput.value);
  if (!isNaN(enteredDate.getTime())) {
    let currentDate = new Date();

    enteredDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    if (enteredDate < currentDate) {
      sdateInput.classList.add("invalid");
      cerror.classList.add("error");
      cerror.innerHTML = "Start date should not be in the past";
    } else {
      sdateInput.classList.remove("invalid");
      cerror.classList.remove("error");
      cerror.innerHTML = "";
    }
  } else {
    sdateInput.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML = "Invalid start date";
  }
}
function validateEditSdate(){
  let sdateInput = document.getElementById("editcourse-sdate");
  let cerror = document.getElementById("edit-serror");
  if(sdateInput.value!==''){
    cerror.innerHTML="";
    sdateInput.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    sdateInput.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid date is required";
  }

  // let enteredDate = new Date(sdateInput.value);
  // if (!isNaN(enteredDate.getTime())) {
  //   let currentDate = new Date();

  //   enteredDate.setHours(0, 0, 0, 0);
  //   currentDate.setHours(0, 0, 0, 0);
  //   if (enteredDate < currentDate) {
  //     sdateInput.classList.add("invalid");
  //     cerror.classList.add("error");
  //     cerror.innerHTML = "Start date should not be in the past";
  //   } else {
  //     sdateInput.classList.remove("invalid");
  //     cerror.classList.remove("error");
  //     cerror.innerHTML = "";
  //   }
  // } else {
  //   sdateInput.classList.add("invalid");
  //   cerror.classList.add("error");
  //   cerror.innerHTML = "Invalid start date";
  // }
}

function validateCourseEndDate(){
  let edateInput = document.getElementById("course-edate");
  let cerror = document.getElementById("ed-error");
  let enteredDate = new Date(edateInput.value);
  if (!isNaN(enteredDate.getTime())) {
    let currentDate = new Date();
    enteredDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    if (enteredDate < currentDate) {
      edateInput.classList.add("invalid");
      cerror.classList.add("error");
      cerror.innerHTML = "End date should not be in the past";
    } else {
      edateInput.classList.remove("invalid");
      cerror.classList.remove("error");
      cerror.innerHTML = "";
    }
  } else {
    edateInput.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML = "valid date is required";
  }
}
function validateEditEdate(){
  let edateInput = document.getElementById("editcourse-edate");
  let cerror = document.getElementById("edit-eerror");
  let enteredDate = new Date(edateInput.value);
  if (!isNaN(enteredDate.getTime())) {
    let currentDate = new Date();
    enteredDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    if (enteredDate < currentDate) {
      edateInput.classList.add("invalid");
      cerror.classList.add("error");
      cerror.innerHTML = "end date should not be in the past";
    } else {
      edateInput.classList.remove("invalid");
      cerror.classList.remove("error");
      cerror.innerHTML = "";
    }
  } else {
    edateInput.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML = "Invalid end date";
  }
}

function validateCourseInstructor(){
  let type=document.getElementById("course-instructor");
  let cerror=document.getElementById("i-error");
  
  if(!type.value==""){
    cerror.innerHTML="";
    type.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    type.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="Instructor name is required";
    // console.log(type.value)
  }
}

function validateStack(){
  let stack=document.getElementById("course-stack");
  let cerror=document.getElementById("s-error");
  let trimmedval=stack.value.trim();
  let nameRegex=/^[a-zA-Z0-9][\s\S]*$/;
  if(trimmedval!=='' && trimmedval.match(nameRegex)){
    cerror.innerHTML="";
    stack.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    stack.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid stack is required";
  }
}
function validateEditStack(){
  let stack=document.getElementById("editcourse-stack");
  let cerror=document.getElementById("edit-sterror");
  let trimmedval=stack.value.trim();
  let nameRegex=/^[a-zA-Z0-9][\s\S]*$/;
  if(trimmedval!=='' && trimmedval.match(nameRegex)){
    cerror.innerHTML="";
    stack.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    stack.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid stack is required";
  }
}

function validateDescription(){
  let stack=document.getElementById("course-describe");
  let cerror=document.getElementById("des-error");
  let trimmedval=stack.value.trim();
  let nameRegex=/^[a-zA-Z0-9][\s\S]*$/;
  if(trimmedval!=='' && trimmedval.match(nameRegex)){
    cerror.innerHTML="";
    stack.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    stack.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid description is required";
  }
}
function validateEditDesc(){
  let stack=document.getElementById("editcourse-describe");
  let cerror=document.getElementById("edit-deserror");
  let trimmedval=stack.value.trim();
  let nameRegex=/^[a-zA-Z0-9][\s\S]*$/;
  if(trimmedval!=='' && trimmedval.match(nameRegex)){
    cerror.innerHTML="";
    stack.classList.remove("invalid");
    cerror.classList.remove("error");
  }
  else{
    stack.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML="valid description is required";
  }
}
function validateCoverphoto() {
  let img = document.getElementById("courseimg-input");
  let cerror = document.getElementById("p-error");
  var regex = /\.(jpg|jpeg|png)$/i;

  if (img.value !== '') {
    if (!regex.test(img.value)) {
      img.classList.add("invalid");
      cerror.classList.add("error");
      cerror.innerHTML = "Cover photo must be in jpg, jpeg, or png format";
    } else {
      img.classList.remove("invalid");
      cerror.classList.remove("error");
      cerror.innerHTML = "";
    }
  } else {
    img.classList.add("invalid");
    cerror.classList.add("error");
    cerror.innerHTML = "Cover photo is required";
  }
}
function formatdate(dateString) {
  const date = new Date(dateString);
  
  // Check if the date is valid
  if (isNaN(date)) {
    console.error('Invalid date format:', dateString);
    return null; // or provide a default value
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
let idval = 5;
let imgId = 5;
let courseIndex=4;
// let courses=[];
function createCourse() {
  validateCourseName();
  validateCourseDuration();
  validateCourseStartDate();
  validateCourseEndDate();
  validateCourseInstructor();
  validateStack();
  validateDescription();
  validateCoverphoto();
  if(!document.querySelector(".error")){
  let cname = document.getElementById("course-name").value;
  let cduration = document.getElementById("course-duration").value;
  let csdate =document.getElementById("course-sdate").value;
  let cedate =document.getElementById("course-edate").value;
  let cinstructor = document.getElementById("course-instructor").value;
  let cstack = document.getElementById("course-stack").value;
  let cdes = document.getElementById("course-describe").value;
  let cimg = document.getElementById("courseimg-input");
  let start=formatdate(csdate);
  let end=formatdate(cedate);
  console.log(start,end);
  let course={
    name:cname,
    duration:cduration,
    startdate:start,
    enddate:end,
    instructor:cinstructor,
    stack:cstack,
    desc:cdes,
    imageid:imgId,
  };
  staticCourse.push(course);
  console.log(staticCourse);
  let currId = `selectedImage${imgId}`;
  let div = document.getElementById('course-list');
  let newcol = document.createElement('div');
  newcol.classList.add('col-sm-6');
  let cardid = newcol.id = `col${idval}`;

  newcol.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-5">
          <a href=""><img class="img-fluid object-fit-cover rounded-start h-100" id="${currId}" alt="..."></a>
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title"><a href="#" class="text-decoration-underline">${cname}</a></h5>
            <p class="card-text">${cdes}</p>
            <div class="row mb-3">
              <div class="col-md-12">
                <h6>Duration</h6>
                <p class="card-text duration">${cduration} hrs</p>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <button class="btn btn-color" type="submit" onclick="editCourse('${cardid}','${courseIndex}')">Edit</button>
              <button class="btn btn-color" type="submit" onclick="deleteCourse('${cardid}')">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  if (cimg.files.length > 0) {
    const file = cimg.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      
      document.getElementById(currId).src = e.target.result;
      // console.log(document.getElementById(currId).src);
    };

    reader.readAsDataURL(file);
  }

  idval++;
  imgId++;
  courseIndex++;
  div.append(newcol);
  $('#addcourseModal').modal('hide');
  clearFormFields();
}
else{
  console.log("course error");
}
}

function clearFormFields() {
  document.getElementById("course-name").value = '';
  document.getElementById("course-duration").value = '';
  document.getElementById("course-sdate").value = '';
  document.getElementById("course-edate").value = '';
  document.getElementById("course-instructor").value = '';
  document.getElementById("course-stack").value = '';
  document.getElementById("course-describe").value = '';
  document.getElementById("courseimg-input").value = '';
}

function resetCourse(){
  document.getElementById("course-name").value="";
  document.getElementById("course-duration").value="";
  document.getElementById("course-sdate").value="";
  document.getElementById("course-edate").value="";
  document.getElementById("course-instructor").value="";
  document.getElementById("course-stack").value="";
  document.getElementById("course-describe").value="";
  document.getElementById("courseimg-input").value="";
}
// deleteCourse
function deleteCourse(id){
  $('#deleteModal').modal('show');
  document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    $('#deleteModal').modal('hide');
});
};



// chart

document.addEventListener("DOMContentLoaded", function () {
  const chartContainer = document.querySelector(".chart-container");
  const cardWithChart = document.querySelector(".col-md-8");

  cardWithChart.addEventListener("click", function () {
    chartContainer.classList.toggle("collapsed");
    if (!chartContainer.classList.contains("collapsed")) {
      updateChart();
    }
  });

  function updateChart() {
    const chartCanvas = document.getElementById("myChart"); // Replace "myChart" with the actual ID of your chart canvas
    const chartContext = chartCanvas.getContext("2d");

    // Set chart dimensions based on screen size
    const screenWidth = window.innerWidth;

    let newChartWidth;
    let newChartHeight;

    if (screenWidth >= 1200) {
      newChartWidth = 600;
      newChartHeight = 400;
    } else if (screenWidth >= 992) {
      newChartWidth = 500;
      newChartHeight = 350;
    } else if (screenWidth >= 768) {
      newChartWidth = 400;
      newChartHeight = 350;
    } else {
      newChartWidth = 300;
      newChartHeight = 250;
    }

    // Update chart dimensions
    chartCanvas.width = newChartWidth;
    chartCanvas.height = newChartHeight;

    // Update the chart
    myChart.resize(newChartWidth, newChartHeight);
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const chartContainer = document.querySelector(".chart-container");
//   const cardWithChart = document.querySelector(".col-md-8");

//   cardWithChart.addEventListener("click", function () {
//     chartContainer.classList.toggle("collapsed");
//     if (!chartContainer.classList.contains("collapsed")) {
//       updateChart();
//     }
//   });

//   function updateChart() {
//     myChart.update();
//   }
// });

// student
// upload assignment
let assId=1;
function uploadFile(){
  const input=document.getElementById("assignment-upload");
  const files=input.files;
  const pdfContainer=document.getElementById("assignment");
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type === 'application/pdf') {
        const pdfLink = document.createElement('a');
        pdfLink.href = URL.createObjectURL(file);
        pdfLink.target = '_blank';
        pdfLink.textContent = `PDF File ${i + 1}: ${file.name}`;
        pdfLink.style.display = 'block';
        pdfContainer.innerHTML=`
        <p id="${assId}"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <a href="${pdfLink}" class="text-secondary">${file.name}</a><button type="button" class="btn fs-6" onclick="deleteAssignment('${assId}')"><i class="fa fa-trash-o" aria-hidden="true"></i></button></p>
        `
        assId++;
        input.classList.remove("invalid");
        document.getElementById("upload-error").classList.remove("error");
        document.getElementById("upload-error").innerHTML="";
        document.getElementById("assignment-upload").value="";
        // pdfContainer.appendChild(pdfLink);
    } else {
        console.log(`File ${i + 1} is not a PDF file.`);
        input.classList.add("invalid");
        document.getElementById("upload-error").classList.add("error");
        document.getElementById("upload-error").innerHTML="file should be a pdf";
    }
}
}

function deleteAssignment(id){
  $('#deleteAssignmentModal').modal('show');
    document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    $('#deleteAssignmentModal').modal('hide');
});
  
}

function uploadPhoto(){
  let getimg=document.getElementById("upload-pic");
  let setimg=document.getElementById("image");
  var regex = /\.(jpg|jpeg|png)$/i;

  if (getimg.value !== '') {
    if (!regex.test(getimg.value)) {
      getimg.classList.add("invalid");
    } else {
      getimg.classList.remove("invalid");
      if (getimg.files.length > 0) {
        const file = getimg.files[0];
        const reader = new FileReader();
    
        reader.onload = function (e) {
          // Set the data URL as the source of the image
          setimg.src = e.target.result;
          // console.log(document.getElementById(currId).src);
        };
    
        reader.readAsDataURL(file);
      }
      $('#profileModal').modal('hide');
    }
  } else {
    getimg.classList.add("invalid");
  }
  
}

function validateHeading(){
  const newHeadingInput = document.getElementById('newHeading').value;
  if(newHeadingInput!==""){
    console.log("hii");
  }
  else{
    newHeadingInput.classList.add("invalid");
  }
}
function openTopicEditModal(id) {
  $('#editHeadingModal').modal('show');
  let accordionItem = document.getElementById(id);
  let accordionHeading = accordionItem.querySelector('.accordion-button');
  let topicName = accordionHeading.innerText.trim();
  let newHeadingInput = document.getElementById('newHeading');
  newHeadingInput.value = topicName;
  document.getElementById("editRowId").value=id;
}
function updateAccordionHeading() {
  const newHeadingInput = document.getElementById('newHeading').value;
  
  const rowId = document.getElementById("editRowId").value;
  const accordionRow = document.getElementById(rowId);
  let regex=/^[a-zA-Z0-9#][\s\S]*$/;
  if(newHeadingInput!=='' && newHeadingInput.match(regex)){
  if (accordionRow) {
      const accordionHeading = accordionRow.querySelector(".accordion-button");
      
      if (accordionHeading) {
          accordionHeading.innerText = newHeadingInput;
          $('#editHeadingModal').modal('hide');
      }
  }
}
else{
  console.log("error");
}
}
function deleteTopic() {
const rowId = document.getElementById("editRowId").value;
const accordionItem = document.getElementById(rowId);

if (accordionItem) {
    const parent = accordionItem.parentNode;
    parent.removeChild(accordionItem);
    $('#editHeadingModal').modal('hide');
}
}

// chat
function sendMessage() {
  let message = document.getElementById("chatMessage").value;
  let date = new Date();

  if (message.trim()!== "") {
    let area = document.getElementById("chat");
    let div = document.createElement("div");
    div.classList.add("message", "row");
    div.innerHTML = `
      <div class="col-md-6">
        </div>
      <div class="col-md-6 mb-2">
        <p class="m-0">${message}</p>
        <small>${formatDate(date)}</small>
      </div>
    `;
    area.append(div);
    document.getElementById("chatMessage").value = '';
  } else {
    console.log("error");
  }
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? '0' + minutes : minutes;

  let strTime = hours + ':' + minutes + ' ' + ampm;

  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}

function sendMessage1() {
  var message = document.getElementById('chatMessage1').value;
  let date = new Date();

  if (message.trim()!== "") {
    let area = document.getElementById("chat1");
    let div = document.createElement("div");
    div.classList.add("message", "row");
    div.innerHTML = `
      <div class="col-md-6">
        </div>
      <div class="col-md-6 mb-2">
        <p class="m-0">${message}</p>
        <small>${formatDate(date)}</small>
      </div>
    `;
    area.append(div);
    document.getElementById('chatMessage').value = '';
  } else {
    console.log("error");
  }
}

let cid = 10;
function addComment(id) {
  let accId = document.getElementById(id);
  let material = accId.querySelector(".uploaded");
  let commentInput = accId.querySelector(".comment");
  let comment = commentInput.value;

  if (comment.trim() === "") {
    //commentInput.classList.add("invalid")
    //alert("Please enter a comment."); 
    return;
  }
  commentInput.classList.remove("invalid");
  let newRow = document.createElement("p");
  newRow.id = `m${cid}`;
  newRow.innerHTML = `
    <i class="fa fa-comments-o" aria-hidden="true"></i> ${comment} <i class="fa fa-trash-o" aria-hidden="true" style="cursor:pointer" onclick="deleteMaterial('m${cid}')"></i>
  `;
  material.append(newRow);

  commentInput.value = '';

  cid++;
}

let mid=10;
function addMaterial(id){
  let accId = document.getElementById(id);
  let material = accId.querySelector(".uploaded");
  let pdf = accId.querySelector(".myMaterial");
  
  let newRow=document.createElement("p");
  newRow.id=`p${mid}`;
  let files=pdf.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let allowed=/(\.pdf)$/i;
    if (file.type === 'application/pdf' || allowed.test(file.name)) {
        let pdfLink = document.createElement('a');
        pdfLink.href = URL.createObjectURL(file);
        pdfLink.textContent = `PDF File ${i + 1}: ${file.name}`;
        pdfLink.style.display = 'block';
        newRow.innerHTML=`
        <i class="fa fa-file-pdf-o" aria-hidden="true"></i> <a href="${pdfLink}" target="_blank" style="color:rgb(48, 77, 77);">${file.name}</a><button type="button" class="btn fs-6" onclick="deleteMaterial('p${mid}')"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        `;
        material.append(newRow);
        mid++;

        accId.querySelector(".myMaterial").value="";
        pdf.classList.remove("invalid");
        // pdfContainer.appendChild(pdfLink);
    } else {
        console.log(`File ${i + 1} is not a PDF file.`);
        pdf.classList.add("invalid");
    }
}
}

let asid = 10;
function addAssignment(id) {
  let accId = document.getElementById(id);
  let material = accId.querySelector(".uploaded");
  let pdf = accId.querySelector(".myAssignment");
  let newRow = document.createElement("p");
  newRow.id = `t${asid}`;
  let files = pdf.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    let allowed=/(\.pdf)$/i;
    if (file.type === 'application/pdf' || allowed.test(file.name)) {
      let pdfLink = document.createElement('a');
      pdfLink.href = URL.createObjectURL(file);
      pdfLink.textContent = `PDF File ${i + 1}: ${file.name}`;
      pdfLink.style.display = 'block';

      newRow.innerHTML = `
        <i class="fa fa-file-pdf-o" aria-hidden="true"></i> 
        <a href="${pdfLink}" target="_blank" style="color:rgb(48, 77, 77);">${file.name}</a>
        <button type="button" class="btn fs-6" onclick="deleteMaterial('t${asid}')">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      `;
      material.append(newRow);
      asid++;
      accId.querySelector(".myAssignment").value = "";
      pdf.classList.remove("invalid");
    } else {
      console.log(`File ${i + 1} is not a PDF file.`);
      pdf.classList.add("invalid");
    }
  }
}


// edit in quiz
function openEditModal(questionId) {
  try {

    const questionElement = document.getElementById(questionId);

    if (questionElement) {

      const questionTextElement = questionElement.querySelector('.qu h6');
      const questionText = questionTextElement ? questionTextElement.textContent : '';

      const choicesElements = questionElement.querySelectorAll('.qu p:not(:last-child)');
      const choices = Array.from(choicesElements).map(p => (p ? p.textContent : ''));

      const answerElements = questionElement.querySelectorAll('.qu-ans p:not(:last-child)');
      const answer = Array.from(answerElements).map(p => (p ? p.textContent : ''));

      const markElement = questionElement.querySelector('.qu-ans p:last-child');
      const mark = markElement ? markElement.textContent : '';
      document.getElementById('editQuestionText').value = questionText;
      document.getElementById('editChoices').value = choices.join('\n');
      document.getElementById('editAnswer').value = answer.join('\n');
      document.getElementById('editMark').value = mark;
      document.getElementById('editId').value=questionId;
      document.getElementById('saveChangesBtn').onclick = function() {
        saveChanges(questionId);
      };
      $('#editModal').modal('show');
    } else {
      console.error('Question element not found');
    }
  } catch (error) {
    console.error('Error in openEditModal:', error);
  }
}


function saveChanges(questionId) {
  try {
    const editedQuestionText = document.getElementById('editQuestionText').value;
    const editedChoices = document.getElementById('editChoices').value.split('\n');
    const editedAnswer = document.getElementById('editAnswer').value.split('\n');
    const editedMark = document.getElementById('editMark').value;
    
    if (!editedQuestionText.trim() || editedChoices.some(choice => !choice.trim()) || editedAnswer.some(ans => !ans.trim()) || !editedMark.trim()) {
      $("#alertFieldsModal").modal("show");
      return;
    }
    const questionElement = document.getElementById(questionId);

    if (questionElement) {
      const questionTextElement = questionElement.querySelector('.qu h6');
      if (questionTextElement) {
        questionTextElement.textContent = editedQuestionText;
      } else {
        console.error('Question text element not found');
      }

      const choices = Array.from(questionElement.querySelectorAll('.qu p:not(:last-child)'));
      choices.forEach((choice, index) => {
        if (choice) {
          choice.textContent = editedChoices[index];
        } else {
          console.error('Choice element not found');
        }
      });

      const answer = Array.from(questionElement.querySelectorAll('.qu-ans p:not(:last-child)'));
      answer.forEach((ans, index) => {
        if (ans) {
          ans.textContent = editedAnswer[index];
        } else {
          console.error('Answer element not found');
        }
      });
      const markElement = questionElement.querySelector('.qu-ans p:last-child');
      if (markElement) {
        markElement.textContent = editedMark;
      } else {
        console.error('Mark element not found');
      }
      $('#editModal').modal('hide');
    } else {
      console.error('Question element not found');
    }
  } catch (error) {
    console.error('Error in saveChanges:', error);
  }
}


// add choice
function addChoice(id){
  let tab=document.getElementById(id);
  let choice=tab.querySelector(".addChoice");
  //console.log(choice.parentNode);
  let newtd=document.createElement("tr");
  newtd.innerHTML=`
  <tr>
  <td scope="row">
  <input class="form-control choice" type="text" placeholder="Choice" aria-label="default input example">
  </td>
  <td>
  <div class="form-check float-end">
  <input class="form-check-input fs-4" type="radio" value="" name="correctAnswer">
  </div>
  </td>
  </tr>
  `;
  let commonAncestor = choice.closest('table').querySelector('tbody');
  commonAncestor.insertBefore(newtd, choice.closest('tr'));
}
function addChoices(id){
  let tab=document.getElementById(id);
  let choice=tab.querySelector(".addChoices");
  let newtd=document.createElement("tr");
  newtd.innerHTML=`
  <tr>
  <td scope="row">
  <input class="form-control choice" type="text" placeholder="Choice" aria-label="default input example">
  </td>
  <td>
  <input class="form-control" type="number" placeholder="Weightage" aria-label="default input example" min="0">
  </td>
  <td>
  <div class="form-check float-end">
  <input class="form-check-input fs-4" type="checkbox" value="">
  </div>
  </td>
  </tr>
  `;
  let commonAncestor = choice.closest('table').querySelector('tbody');
  commonAncestor.insertBefore(newtd, choice.closest('tr'));
}

// delete
function deleteQu(id){
  $('#deleteModal').modal('show');
    document.getElementById('ok').addEventListener('click', function () {
    let idname=document.getElementById(id);
    idname.remove();
    $('#deleteModal').modal('hide');
    });
}
function save(){
  $("#saveModal").modal("show");
}


let staticCourse=[{
  name:"HTML: Beginner Level",
  desc:"It is one of the most basic building blocks of every website.",
  sdate:"2023-12-20",
  edate:"2024-01-10",
  instructor:"Dev",
  duration:"40",
  stack:"html, front-end development",
},
{
  name:"CSS",
  desc:"Style sheet language used for describing the presentation.",
  sdate:"2023-12-20",
  edate:"2024-01-10",
  instructor:"Dev",
  duration:"60",
  stack:"html, front-end development",
},
{
  name:"JavaScript",
  desc:"JavaScript is the Programming Language for the Web.",
  sdate:"2023-12-20",
  edate:"2024-01-10",
  instructor:"David",
  duration:"150",
  stack:"html, front-end development",
},
{
  name:"ReactJS",
  desc:"JavaScript library for building user interfaces based on components.",
  sdate:"2023-12-20",
  edate:"2024-01-10",
  instructor:"David",
  duration:"150",
  stack:"html, front-end development",
},
];
function editCourse(id,index){
  $("#editcourseModal").modal("show");
  let mycourse=staticCourse[index];
  console.log(mycourse);

  let newCourseId=document.getElementById("editCourseId").value = id;
  let newIndex=document.getElementById("editIndexId").value = index; 
  document.getElementById("editcourse-name").value = mycourse.name;
  document.getElementById("editcourse-duration").value = mycourse.duration;
  document.getElementById("editcourse-sdate").value = mycourse.sdate;
  document.getElementById("editcourse-edate").value = mycourse.edate;
  document.getElementById("editcourse-instructor").value = mycourse.instructor;
  document.getElementById("editcourse-stack").value = mycourse.stack;
  document.getElementById("editcourse-describe").value = mycourse.desc;  
}
function saveEditCourse() {
  validateEditCourse();
  validateEditDuration();
  validateEditSdate();
  validateEditEdate();
  validateEditStack();
  validateEditDesc();
  if(!document.querySelector(".error")){
let newCourseId=document.getElementById("editCourseId").value;
console.log(newCourseId)
let index=document.getElementById("editIndexId").value; 
let editedName = document.getElementById("editcourse-name").value;
let editedDuration = document.getElementById("editcourse-duration").value;
let editedStartDate = document.getElementById("editcourse-sdate").value;
let editedEndDate = document.getElementById("editcourse-edate").value;
let editedInstructor = document.getElementById("editcourse-instructor").value;
let editedStack = document.getElementById("editcourse-stack").value;
let editedDescription = document.getElementById("editcourse-describe").value;

// Check if the object at the specified index exists
if (staticCourse[index]) {
    console.log('Editing course at index:', index);

    // Update the properties if the object exists
    staticCourse[index].name = editedName;
    staticCourse[index].duration = editedDuration;
    staticCourse[index].sdate = editedStartDate;
    staticCourse[index].edate = editedEndDate;
    staticCourse[index].instructor = editedInstructor;
    staticCourse[index].stack = editedStack;
    staticCourse[index].desc = editedDescription;

    // Update the corresponding course card
    updateCourseCard(newCourseId, index);

    // Hide the edit modal
    $("#editcourseModal").modal("hide");
} else {
    console.error("Object at index does not exist in staticCourse array.");
}
  }
  else{
    console.log("error");
  }
}

function updateCourseCard(id, index) {
console.log('courseId:', id);
console.log('index:', index);
let courseCard = document.getElementById(id);
let courseTitle = courseCard.querySelector('.card-title a');
let courseDescription = courseCard.querySelector('.card-text');
let courseDuration = courseCard.querySelector('.duration');


courseTitle.textContent = staticCourse[index].name;
//courseTitle.href = `${staticCourse[index].stack.toLowerCase()}-view.html`;
courseDescription.textContent = staticCourse[index].desc;
courseDuration.textContent = `${staticCourse[index].duration} hrs`;

}

// function clearEditFormFields() {
//   document.getElementById("editcourse-name").value = '';
//   document.getElementById("editcourse-duration").value = '';
//   document.getElementById("editcourse-sdate").value = '';
//   document.getElementById("editcourse-edate").value = '';
//   document.getElementById("editcourse-instructor").value = '';
//   document.getElementById("editcourse-stack").value = '';
//   document.getElementById("editcourse-describe").value = '';
// }

function validateselect(){
  let cname=document.getElementById("selectcourse");
  if(cname.value!==""){
    cname.classList.remove("invalid");
  }
  else{
    cname.classList.add("invalid");
  }
}
function publish(){
  $("#publishModal").modal("show");
  
  document.getElementById('okie').addEventListener('click', function () {
    validateselect();
      if (!document.getElementById("selectcourse").classList.contains("invalid")) {
        $("#publishModal").modal("hide");
      } else {
        console.log("error");
      }
    });
}