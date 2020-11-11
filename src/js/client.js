
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
        {id : "1", name : "Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "2", name: "Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "3", name : "Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "4", name: "Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'},
        {id : "5", name : "Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "6", name: "Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "7", name : "Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "8", name: "Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'},
        {id : "9", name : "Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "10", name: "Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "11", name : "Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "12", name: "Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'},
        {id : "13", name : "Болорчимэг", phone : "1009990", email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "14", name: "Ганболд", phone : "9910000", email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "15", name : "Рхрл", phone : "8810000", email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "16", name: "Хролд", phone : "9610000", email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'}
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
        {id : "12", birthday: "2020/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "13", birthday: "1980/09/09", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "14", birthday: "1990/07/18", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "15", birthday: "2000/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "16", birthday: "2020/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"}
    ]
};
var createEl1 = document.createElement('div');
var createEl2 = document.createElement('div');
var createEl3_forEdit = document.createElement('div');
var createEl4_forEdit = document.createElement('div');
//Page iin haruulah utga songoh
var current_page = 1;
var records_per_page = 2;
var entriesNumber = document.getElementById("entries"); 
var prevClick = document.getElementById("btn-prv");
var start = 0;
var preBtn = document.getElementById("btn-prv");
var nextBtn = document.getElementById("btn-next");


function showTable(mainData){
    var createEl = document.createElement('div');
    var getEl = document.getElementById("data-content");
    var tableRows= "";
    var datas=mainData;
    getEl.innerHTML="";
    content='\
        <table id="firstTable">\
            <tr>\
                <th>№</th>\
                <th id="headName" onclick="sortByName(0)">Овог нэр</th>\
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
                <td id="startElements">'+ datas[i].id + '</td>\
                <td id="nameEl" >'+ datas[i].name + '</td>\
                <td>'+ datas[i].phone + '</td>\
                <td>'+ datas[i].email + '</td>\
                <td>'+ datas[i].address + '</td>\
                <td>'+ datas[i].company + '</td>\
                <td>'+ datas[i].title + '</td>\
                <td><i class="fa fa-file-o" onclick="view('+datas[i].id+')"><span id = "view-tooltip">Харах</span></i>\
                </td>\
                <td><i class="fa fa-pencil-square-o" onclick="edit('+datas[i].id+')"><span id = "edit-tooltip">Өөрчлөх</span></i>\
                </td>\
                <td><i class="fa fa-calendar-plus-o" onclick="hearingDate()"><span id = "appoint-tooltip">Цаг товлох </span></i>\
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
    document.getElementById('view-background').style.display="flex";
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
            </table>' ;
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
    document.getElementById('view-background').style.display="flex";
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
            <table >\
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
    var newData = data.contents.filter(n => n.name.toLowerCase().includes(inputName.value));
    showTable(newData);
    var language = "фцужэнгшүзкъйыбөахролдпячёсмитьвю";
    for(j in inputName){
        for(i in language){
          
        }
        }
        if(inputName[j] != language[i]){
                // console.log(language[i]);
                // console.log(inputName.value);
                // alert('Та Монгол хэлийг сонгоно уу')
    }
        
}
function phoneFilter(){
    var inputPhone = document.getElementById("phone-filter");
    var newData = data.contents.filter(n => n.phone.includes(inputPhone.value));
    showTable(newData);
}
function companyFilter(){
    var inputCompany = document.getElementById("company-filter");
    var newData = data.contents.filter(n => n.company.toLowerCase().includes(inputCompany.value));
    showTable(newData);
}

function selectedEntries(){
    var i = 0;
    var paginationQuery = document.getElementById("btn-pages");
    for(var i in data.contents){
        k = data.contents[i].id;
        if(k >= entriesNumber.value)
            showSelectedEntries = data.contents.slice(0,entriesNumber.value);
    }
    showTable(showSelectedEntries);

//**************Pagination Show heseg******************

    var pageCount = numPages(data.contents.length, entriesNumber.value);
    var j = 0;
    paginationQuery.innerHTML = "";
    for ( j =0; j<pageCount; j++){
        paginationQuery.innerHTML += '\
            <span class="pagination-span onclick=activeBtn("K")>\
                <div>' + (j+1) + '</div>\
            </span>';
    }
    var pageClick=document.getElementsByClassName('pagination-span');
    for(j=0; j<pageCount; j++) {
        pageClick[j].addEventListener('click', function(ev){
            var end = parseInt(ev.target.innerText) * (entriesNumber.value);
            start = end-entriesNumber.value;
            var showActiveTable = data.contents.slice(start, end);
        showTable(showActiveTable); 

        });    
    }
}

function prevClicked(){
    var startEls = parseInt(document.getElementById("startElements").innerText);
    var startEl = startEls - 1;
    var start = startEl - parseInt(entriesNumber.value);
    if (start < 0)
        start = 0;
    let preStart = start;
    let preEnd = start + (parseInt(entriesNumber.value));
    let preShow = data.contents.slice(preStart, preEnd);
    showTable(preShow);
    
}

function nextClicked(){
    let startEls = parseInt(document.getElementById("startElements").innerText);
    let start = startEls + parseInt(entriesNumber.value);
    let endEl = start-1 
    + parseInt(entriesNumber.value);
    if (endEl > data.contents.length)
        endEl = data.contents.length;
    var nextStart = endEl-1;
    var nextEnd = endEl;
    var nextShow = data.contents.slice(nextStart, nextEnd);

    showTable(nextShow);
}

function sortByName(n){
    let table = document.getElementById("firstTable");
    console.log(table.innerText);
    let switching = true;
    var dir;
    dir = "asc";
    let switchCount = 0;
    var shouldSwitch;
            
    while(switching){
        switching = false
        rows = table.rows;
        for(var i = 1; i<rows.length; i++){
            shouldSwitch = false;
        // console.log(rows[i].innerText);

            rowFrst = rows[i].getElementsByTagName("TD")[n];
            rowNxt = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc"){
                if (rowFrst.innerHTML.toLowerCase() > rowNxt.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "desc"){
                if (rowFrst.innerHTML.toLowerCase() < rowNxt.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchCount ++;
            }
        else {
            if (switchCount == 0 && dir == "asc"){
                dir = "desc";
                switching = true;
            }
        }
        
    }  
    
}
    
    


function exportFile(filename = ''){
    // console.log("Started");
    var tableSelect = document.getElementById("firstTable");
    // console.log(tableSelect);

        var downloadurl;
        var dataFileType = 'application/vnd.ms-excel';
        
        var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');
        // Specify file name
        filename = filename?filename+'.xls':'export_excel_data.xls';
        // Create download link element
        downloadurl = document.createElement("a");
        document.body.appendChild(downloadurl);
        
        if(navigator.msSaveOrOpenBlob){
            var blob = new Blob(['\ufeff', tableHTMLData], {
                type: dataFileType
            });
            navigator.msSaveOrOpenBlob( blob, filename);
        }
        else{
            // Create a link to the file
            downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;
            // Setting the file name
            downloadurl.download = filename;
            
            //triggering the function
            downloadurl.click();
        }
}

function numPages(totalLength, pageView){
    return Math.ceil(totalLength/pageView);
}
window.onload = function() {
    changePage(numPages(1).value);
};
