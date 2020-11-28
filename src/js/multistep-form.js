// --- Form validation STEP1 ---
var userData = {};
var userInformation = {
   cases: [],
   bills: []
};

const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');
const gender = document.getElementById('gender');
const email = document.getElementById('email');
const userPhone = document.getElementById('userPhone');
const userAddress = document.getElementById('userAddress');
const companyName = document.getElementById('companyName');
const userPosition = document.getElementById('userPosition');

let formArr1 = [];
formArr1.push(lastName);
formArr1.push(firstName);
formArr1.push(gender);
formArr1.push(email);
formArr1.push(userPhone);
formArr1.push(userAddress);
formArr1.push(companyName);
formArr1.push(userPosition);

let step1Id = [lastName.id,
firstName.id,
gender.id,
email.id,
userPhone.id,
userAddress.id,
companyName.id,
userPosition.id];
// form 1 end

// --- Form validation STEP2 ---

const birthDate = document.getElementById('birthDate');
const maritalStatus = document.getElementById('maritalStatus');
const driversLicense = document.getElementById('driversLicense');
const emergencyName = document.getElementById('emergencyName');
const emergencyCallNumber = document.getElementById('emergencyCallNumber');
const emergencyRelatives = document.getElementById('emergencyRelatives');

const formArr2 = [];
formArr2.push(birthDate);
formArr2.push(maritalStatus);
formArr2.push(driversLicense);
formArr2.push(emergencyName);
formArr2.push(emergencyCallNumber);
formArr2.push(emergencyRelatives);

let step2Id = [birthDate.id,
maritalStatus.id,
driversLicense.id,
emergencyName.id,
emergencyCallNumber.id,
emergencyRelatives.id];

// form2 end 

// --- Form validation STEP3 ---

const caseId = document.getElementById('caseId');
const caseName = document.getElementById('caseName');
const caseType = document.getElementById('caseType');
const caseDistrict = document.getElementById("caseDistrict");
const caseFile = document.getElementById('file');
const caseInfo = document.getElementById('caseInfo');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const bills = document.getElementById('bills');

const formArr3 = [];
formArr3.push(caseId);
formArr3.push(caseName);
formArr3.push(caseType);
formArr3.push(caseDistrict);
formArr3.push(caseFile);
formArr3.push(caseInfo);
formArr3.push(startDate);
formArr3.push(endDate);

// var keys = ["caseId",
//             "caseName",
//             "caseType",
//             "caseDistrict",
//             "caseInfo",
//             "startDate",
//             "endDate",
//             "bills" ];

let step3Id = [caseId.id,
maritalStatus.id,
caseType.id,
caseDistrict.id,
caseFile.id,
caseInfo.id,
startDate.id,
endDate.id];

// form3 end 

// --- Form validation STEP4 ---

const serviceType = document.getElementById('serviceType');
const billInfo = document.getElementById('billInfo');
const totalFee = document.getElementById('totalFee');
const paidOrNot = document.getElementById('paidOrNot');

const formArr4 = [];
formArr4.push(serviceType);
formArr4.push(billInfo);
formArr4.push(totalFee);
formArr4.push(paidOrNot);

let step4Id = [serviceType.id,
billInfo.id,
totalFee.id,
paidOrNot.id];



// form4 end 
// --- BUTTONS --- 

const nextBtn = document.getElementsByClassName('next');
const pages = document.getElementsByClassName('pages');

nextBtn[0].addEventListener('click', function () {
   if (form_validation1()) {
      pages[0].style.display = 'none';
      document.getElementById('step2').classList.add('active');
      //console.log(lastName.id);
      step1 = convertToObject(formArr1, step1Id);
      userInformation = {
         ...step1,
         ...userInformation
      };                   // --- !!!IMPORTANT!!! ---
      console.log('step1');
      console.log(step1);
      console.log('userinformation1');
      console.log(userInformation);

   } else {
      pages[0].style.display = 'block';
      document.getElementById('step1').classList.add('active');
   }
});

nextBtn[1].addEventListener('click', function () {
   if (form_validation2()) {
      pages[1].style.display = 'none';
      document.getElementById('step3').classList.add('active');
      step2 = convertToObject(formArr2, step2Id);
      userInformation = {
         ...step2,
         ...userInformation
      };
      console.log('step2');
      console.log(step2);
      console.log('userinformation2');
      console.log(userInformation);

   } else {
      pages[1].style.display = 'block';
      document.getElementById('step2').classList.add('active');
   }
});

nextBtn[2].addEventListener('click', function () {
   if (form_validation3()) {
      pages[2].style.display = 'none';
      document.getElementById('step4').classList.add('active');
      step3 = convertToObject(formArr3, step3Id);
      userInformation.cases.push(step3);
      console.log('step3');
      console.log(step3);
      console.log('userinformation3');
      console.log(userInformation);

   } else {
      pages[2].style.display = 'block';
      document.getElementById('step3').classList.add('active');
   }
});

nextBtn[3].addEventListener('click', function () {
   if (form_validation4()) {
      pages[3].style.display = 'none';
      document.getElementById('step5').classList.add('active');
      step4 = convertToObject(formArr4, step4Id);
      userInformation.bills.push(step4);
      console.log('step4');
      console.log(step4);
      console.log('userinformation4');
      console.log(userInformation);
      sendInformationData(userInformation);
      // userInformation = {     ...step1,
      //                         ...step2,                   --- !!!hudlaa jishee haha!!! ---
      //                         cases : [],
      //                         bills : []};
   } else {
      pages[3].style.display = 'block';
      document.getElementById('step4').classList.add('active');
   }
});

const prevBtn = document.getElementsByClassName('prev');

prevBtn[0].addEventListener('click', function () {
   pages[0].style.display = 'block';
   document.getElementById('step2').classList.remove('active');
});

prevBtn[1].addEventListener('click', function () {
   pages[1].style.display = 'block';
   document.getElementById('step3').classList.remove('active');
});

prevBtn[2].addEventListener('click', function () {
   pages[2].style.display = 'block';
   document.getElementById('step4').classList.remove('active');
});
// --- success modal ---
document.getElementById("open-popup-btn").addEventListener("click", function () {
   document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
   document.getElementsByClassName("popup")[0].classList.remove("active");
});
//  --- success modal end ---

// --- FORM VALIDATIONS ---

function form_validation1() {
   let numbers = /^[-+]?[0-9]+$/;
   let emails = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   let errMessages = ["Эцэг эхийн нэрээ оруулна уу",
      "Өөрийн нэрээ оруулна уу",
      "Хүйсээ сонгоно уу",
      "Майл хаягаа оруулна уу",
      "Утасны дугаараа бичнэ үү",
      "Гэрийн хаягаа оруулна уу",
      "Компаниа оруулна уу",
      "Албан тушаалаа бичнэ үү"];

   for (let i in formArr1) {
      if (formArr1[i].value == '' || formArr1[i].value == null) {
         showError(formArr1[i], errMessages[i]);
         return false;
      } else {
         showSuccess(formArr1[i]);
      }
   }

   if (formArr1[3].value.match(emails)) {
      showSuccess(formArr1[3]);
   } else {
      showError(formArr1[3], errMessages = 'Майл хаягаа зөв оруулна уу');
      return false;
   }

   if (formArr1[4].value.match(numbers)) {
      showSuccess(formArr1[4]);
   } else {
      showError(formArr1[4], errMessages = 'Утасны дугаараа тоогоор оруулна уу');
      return false;
   }
   return true;
}

function form_validation2() {
   let errMessages = ["Төрсөн он сар өдрөө оруулна уу",
      "Энэ хэсгийг бөглөнө үү",
      "Жолооны үнэмлэхны дугаараа оруулна уу",
      "Яаралтай холбоо барих хүний нэрийг бичнэ үү",
      "Яаралтай холбоо барих хүний утсыг оруулна уу",
      "Энэ хэсгийг бөглөнө үү",];

   for (let i in formArr2) {
      if (formArr2[i].value == '' || formArr2[i].value == null) {
         showError(formArr2[i], errMessages[i]);
         return false;
      } else {
         showSuccess(formArr2[i]);
      }
   }
   return true;
}

function form_validation3() {
   let errMessages = ["Хэргийн дугаараа оруулна уу",
      "Хэргийн нэрээ оруулна уу",
      "Хэргийн төрлөө оруулна уу",
      "Дүүргээ сонгоно уу",
      "Хэргийн зургаа оруулна уу",
      "Хэргийн дэлгэрэнгүй мэдээллээ оруулна уу",
      "Хэргийн хүлээж авсан өдрөө оруулна уу",
      "Хэргийн шийдвэрлэгдэх өдрөө оруулна уу",
      "Төлбөрөө бичнэ үү",];

   for (let i in formArr3) {
      if (formArr3[i].value == '' || formArr3[i].value == null) {
         showError(formArr3[i], errMessages[i]);
         //console.log("err" + i);
         return false;
      } else {
         showSuccess(formArr3[i]);
      }
      //console.log("ok" + i);  
   }
   return true;
}

function form_validation4() {
   let errMessages = ["үйлчилгээгээ сонгоно уу",
      "bills",
      "total fee",
      "paid or not"];

   for (let i in formArr4) {
      if (formArr4[i].value == '' || formArr4[i].value == null) {
         showError(formArr4[i], errMessages[i]);
         return false;
      } else {
         showSuccess(formArr4[i]);
      }
   }
   return true;
}

function showError(input, message) {
   let field = input.parentElement;
   let error = field.querySelector('small');
   field.classList.add('error');
   field.classList.remove('success');
   error.innerText = message;
}

function showSuccess(input) {
   let field = input.parentElement;
   let error = field.querySelector('small');
   field.classList.remove('error');
   field.classList.add('success');
   error.innerText = '';
}

// convert from array to object

//formArr11 = [["user", "user1"], ["number", "number"]];

function convertToObject(formArr, keysId) {
   let newArr = [];
   for (const key in formArr) {
      newArr[key] = [keysId[key], formArr[key].value];
   }
   // With Object.fromEntries, you can convert from Array to Object:
   // const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
   // const obj = Object.fromEntries(arr);
   // console.log(obj); // { 0: "a", 1: "b", 2: "c" }
   const obj = Object.fromEntries(newArr);
   return obj;
}

//DESTRUCTINGs
//                                         --- EXAMPLE ---
// let userSave = { users:[],
//                  cases:[]};
// const userInfo = {id: "0001",name: 'Dashka', age: "19", color: "gray"};
// const userDetails = {song: "BSB", actor: "Jackie Chan"};
// const userCase = {caseName: "Case1", caseProblem:"bla bla"};
// const userCase1 = {caseName: "Case2", caseProblem:"bla bla,"};

// userSave.cases.push(userCase);
// userSave = {
//    ...step1,
//    .. step2,
//    cases: userSave.cases,
// };
// userSave.cases.push(userCase1);
// userSave.users.push(userDetails);
// userSave.users.push(userInfo);

// // userSave.push(userCase); --> this is not gonna work cuz push is array's function 
// // console.log(userInfo);
// // console.log(userDetails);
// // console.log(userCase);
// console.log(userSave);
//                                           --- EXAMPLE END ---                           


//                                           --- Firebase ---

var informationRef = firebase.database().ref("informations/information");

informationRef.on('value', function (snapshot) {
   // informationRef = snapshot.val();  
   // console.log(informationRef);
   // clients ruu usreh yostoi 
});

function sendInformationData(data) {
   informationRef.push(data);
   console.log(data);
   swal({ title: "Амжилттай хадгалагдлаа.", text: "таны мэдээлэл", icon: "success", button: "Хаах" });
   window.location = "client.html";
}
