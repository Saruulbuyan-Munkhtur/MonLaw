
function registrationForm(){
    document.getElementById("form-background").style.display = "block";
}
// var firebaseConfig={
//     paiKey: 'AIzaSyCqm2OMg4f1gbjSfl5DGlVF3Plpeb4N2i0', //webAPI key
//     autoDomain:'bobo-b4e12.firebaseapp.com',                                     //
//     dataBaseURL: 'https://bobo-b4e12.web.app',         //url
//     projectID: 'bobo-b4e12'                            //project ID
// };
// //initialize
// firebase.initializeApp(firebaseConfig);
// var database=firebase.database;
// database().ref('generalInfo').once('value',showForm);
var data={
    contents: [
        {id : "1", name : "Г.Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "2", name: "Г.Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "3", name : "Э.Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "4", name: "Ж.Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'},
        {id : "5", name : "Г.Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "6", name: "Г.Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "7", name : "Э.Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "8", name: "Ж.Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'},
        {id : "9", name : "Г.Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "10", name: "Г.Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "11", name : "Э.Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "12", name: "Ж.Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'},
        {id : "13", name : "Г.Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "14", name: "Г.Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "15", name : "Э.Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "16", name: "Ж.Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'}
    ],
    details: [
        {id : "1", birthday: "1980/09/09", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "2", birthday: "1990/07/18", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "3", birthday: "2000/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "4", birthday: "2020/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "5", birthday: "1980/09/09", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "6", birthday: "1990/07/18", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "7", birthday: "2000/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "8", birthday: "2020/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "9", birthday: "1980/09/09", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "10", birthday: "1990/07/18", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "11", birthday: "2000/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "12", birthday: "2020/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"}
    ]
};
var createEl1 = document.createElement('div');
var createEl2 = document.createElement('div');
var createEl3_forEdit = document.createElement('div');
var createEl4_forEdit = document.createElement('div');

function showTable(mainData){
    var createEl = document.createElement('div');
    var getEl = document.getElementById("data-content");
    var tableRows= "";
    var datas=mainData;
   getEl.innerHTML="";
    console.log(mainData);
    content='\
        <table>\
            <tr>\
                <th>№</th>\
                <th id="sortName" onclick="sortByName()">Овог нэр</th>\
                <th>Утас</th>\
                <th>И-мэйл</th>\
                <th>Гэрийн хаяг</th>\
                <th>Компани</th>\
                <th>Албан тушаал</th>\
                <th colspan="3" id="action">Үйлдэл</th>\
            </tr>';

            for( var i in datas){
            content+= '\
            <tr id="tableRow">\
                <td>'+ datas[i].id + '</td>\
                <td>'+ datas[i].name + '</td>\
                <td>'+ datas[i].phone + '</td>\
                <td>'+ datas[i].email + '</td>\
                <td>'+ datas[i].address + '</td>\
                <td>'+ datas[i].company + '</td>\
                <td>'+ datas[i].title + '</td>\
                <td><button type="button" id="view-button" onclick="view('+datas[i].id+')">Харах</button>\
                </td>\
                <td><button type="button" id="edit-button" onclick="edit(' +datas[i].id+')">Өөрчлөх</button>\
                </td>\
                <td><button type="button" id="appoint-button" onclick="hearingDate()">Цаг товлох</button>\
                </td>\
            </tr>';
            }
        content+="</table>"

    createEl.innerHTML = content;
    getEl.appendChild(createEl);
    
};
    showTable(data.contents);

function view(x){
    content1 = "";
    content2 = "";
    document.getElementById('view-background').style.display="block";
    var getEl = document.getElementById('view-client') 
    var datasContent= data.contents;
    var datasDetail= data.details;
   
    for(var i in datasContent){
        if(x == datasContent[i].id){
        content1='\
        <table>\
            <tr>\
                <th id="table-radius">ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
            </tr>\
                <tr>\
                    <td><b> Овог нэр: </b> '+ datasContent[i].name + '</td>\
                </tr>\
                <tr>\
                    <td><b> Утас: </b> '+datasContent[i].phone + '</td>\
                </tr>\
                <tr>\
                    <td><b> И-мэйл: </b> '+datasContent[i].email + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хаяг: </b> '+datasContent[i].address + '</td>\
                </tr>\
                <tr>\
                    <td><b> Компани: </b> '+datasContent[i].company + '</td>\
                </tr>\
                <tr>\
                    <td><b> Албан тушаал: </b> '+datasContent[i].title + '</td>\
                </tr>\
            </table>';
        }
    }
    for(var i in datasDetail){
        if(x == datasDetail[i].id){  
            //var con = `<div> ${datasContent[i].id} </div>`; 
            content2='\
            <table>\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Төрсөн огноо: </b> '+ datasDetail[i].birthday + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хүйс: </b> '+ datasDetail[i].sex + '</td>\
                </tr>\
                <tr>\
                    <td><b> Гэрлэлт: </b> '+ datasDetail[i].marrital + '</td>\
                </tr>\
                <tr>\
                    <td><b> Жолооны үнэмлэхний дугаар: </b> '+ datasDetail[i].driverID + '</td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний нэр: </b> '+ datasDetail[i].emergencyName + '</td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний дугаар: </b> '+ datasDetail[i].emergencyPhone + '</td>\
                </tr>\
                <tr>\
                    <td><b> Таны хэн болох: </b> '+ datasDetail[i].who + '</td>\
                </tr>\
            </table>\
            ' ;
        }
    }
    createEl1.innerHTML = content1;
    createEl2.innerHTML = content2;
    getEl.appendChild(createEl1);
    getEl.appendChild(createEl2);
}
function edit(x){
    content = "";
    content2= "";
    document.getElementById('view-background').style.display="block";
    var getEl = document.getElementById('view-client-edit') 
    var datasContent= data.contents;
    var datasDetail= data.details;
    for(var i in datasContent){
        if(x == datasContent[i].id){
        content='\
            <table>\
                <tr>\
                    <th>ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Овог нэр: </b> <input value="'+datasContent[i].name + '" id="name"></td>\
                </tr>\
                <tr>\
                    <td><b> Утас: </b><input value="'+datasContent[i].phone + '" id="phone"></td>\
                </tr>\
                <tr>\
                    <td><b> И-мэйл: </b><input value="'+datasContent[i].email + '" id="email"></td>\
                </tr>\
                <tr>\
                    <td><b> Хаяг: </b><input value="'+datasContent[i].address + '" id="address"></td>\
                </tr>\
                <tr>\
                    <td><b> Компани: </b><input value="'+datasContent[i].company + '" id="company"></td>\
                </tr>\
                <tr>\
                    <td><b> Албан тушаал: </b><input value="'+datasContent[i].title + '" id="title"></td>\
                </tr>\
            </table>';
        }
    }
    for(var i in datasDetail){
        if(x == datasDetail[i].id){  
        content2='\
            <table>\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Төрсөн огноо: </b> <input value="'+ datasDetail[i].birthday + '" id="birthDay"></td>\
                </tr>\
                <tr>\
                    <td><b> Хүйс: </b> <input value="'+ datasDetail[i].sex + '" id="sex"></td>\
                </tr>\
                <tr>\
                    <td><b> Гэрлэлт: </b> <input value="'+ datasDetail[i].marrital + '" id="marritalSta"></td>\
                </tr>\
                <tr>\
                    <td><b> Жолооны үнэмлэхний дугаар: </b> <input value="'+ datasDetail[i].driverID + '" id="driverLi"></td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний нэр: </b> <input value="'+ datasDetail[i].emergencyName + '" id="emergencyName"></td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний дугаар: </b> <input value="'+ datasDetail[i].emergencyPhone + '" id="emergencyPhone"></td>\
                </tr>\
                <tr>\
                    <td><b> Таны хэн болох: </b> <input value="'+ datasDetail[i].who + '" id="emergencyWho"></td>\
                </tr>\
            </table>\
            <button id="save" onclick="saveIt()">Хадгалах</button>\
            ' ;
        }
    }
    createEl3_forEdit.innerHTML =content;
    createEl4_forEdit.innerHTML =content2;
    getEl.appendChild(createEl3_forEdit);
    getEl.appendChild(createEl4_forEdit);
    
}
function saveIt(x){
    var getEl = document.getElementById('view-client-edit');
    let newName = document.getElementById('name').value;
    let newPhone = document.getElementById('phone').value;
    let newEmail = document.getElementById('email').value;
    let newAddress = document.getElementById('address').value;
    let newCompany = document.getElementById('company').value;
    let newTitle = document.getElementById('title').value;
    let newBirthday = document.getElementById('birthDay').value;
    let newSex = document.getElementById('sex').value;
    let newMarital = document.getElementById('marritalSta').value;
    let newDriverli = document.getElementById('driverLi').value;
    let newEmergencyname = document.getElementById('emergencyName').value;
    let newEmergencyphone = document.getElementById('emergencyPhone').value;
    let newEmergencywho = document.getElementById('emergencyWho').value;
    let newContent1 = { id: 1, name: newName, phone: newPhone, email: newEmail, address: newAddress, company: newCompany,title: newTitle};
    let newContent2 = { birthday: newBirthday, sex: newSex, marital: newMarital, driverID: newDriverli, emergencyName: newEmergencyname, emergencyPhone: newEmergencyphone, who: newEmergencywho};
    
    let i = data.contents.indexOf(x);
    data.contents[i] = newContent1;
    view(newContent1)
}
function closeIt(){
    document.getElementById('view-background').style.display="none";
    createEl1.innerHTML= "";
    createEl2.innerHTML= "";
    createEl3_forEdit.innerHTML= "";
    createEl4_forEdit.innerHTML= "";
}
function nameFilter(){
    var inputName = document.getElementById("name-filter");
    var newData = data.contents.filter(n => n.name.includes(inputName.value));
    showTable(newData);
}
function phoneFilter(){
    var inputPhone = document.getElementById("phone-filter");
    var newData = data.contents.filter(n => n.phone.includes(inputPhone.value));
    showTable(newData);
}
function companyFilter(){
    var inputCompany = document.getElementById("company-filter");
    var newData = data.contents.filter(n => n.company.includes(inputCompany.value));
    showTable(newData);
}
function selectedEntries(){
    let entriesEl = document.getElementById("entries");
    for(var i in data.contents){
        k=data.contents[i].id;
        
        if(k===entriesEl.value)
        console.log(k);
        console.log(entries.value)
        showSelectedEntries = data.contents.slice(0,entriesEl.value);
    }
    showTable(showSelectedEntries);
}

function sortByName(){
    let switching = true;
    while(switching){
        for(var i in data.contents){
            let shouldSwitch = false;
            if (data.contents[i].name > name[i + 1]) {
                shouldSwitch = true;
                
            break;
            }
            if (shouldSwitch) {
                let switchedName = data.contents[i].name.parentNode.insertBefore(data.contents[i+1].name, data.contents[i].name);
                switching = true;
                console.log(switchedName);
            }
        }
    }
    showTable(switchedName);
}
 
