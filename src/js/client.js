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
var data = {};
var paginationQuery = document.getElementsByClassName("btn-pages")[0];
var pageClick;

const database = firebase.database();
database.ref('data/').on('value', function(snapshot) {

    data = snapshot.val().clients; 
    showTable(data.contents);

});
function showTable(mainData){
    var createEl = document.createElement('div');
    var getEl = document.getElementById("data-content");
    var content ='';
    var datas = mainData;
    getEl.innerHTML="";
    content='\
        <table id="firstTable">\
            <tr>\
                <th onclick="sortByName(0)">№</th>\
                <th id="headName" onclick="sortByName(1)"<div class="sortIcons"></div>Овог нэр</th>\
                <th onclick="sortByName(2)">Утас</th>\
                <th onclick="sortByName(3)">И-мэйл</th>\
                <th onclick="sortByName(4)">Гэрийн хаяг</th>\
                <th onclick="sortByName(5)">Компани</th>\
                <th onclick="sortByName(6)">Албан тушаал</th>\
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
                <td><i class="fa fa-file-o" onclick="view('+i+')"><span id = "view-tooltip">Харах</span></i>\
                </td>\
                <td><i class="fa fa-pencil-square-o" onclick="edit('+i+')"><span id = "edit-tooltip">Өөрчлөх</span></i>\
                </td>\
                <td><i class="fa fa-calendar-plus-o" onclick="hearingDate()"><span id = "appoint-tooltip">Цаг товлох </span></i>\
                </td>\
            </tr>';
            }
        content+="</table>"

    createEl.innerHTML = content;
    getEl.appendChild(createEl);
};
    
function view(x){
    content1 = "";
    content2 = "";
    document.getElementById('view-background').style.display="flex";
    var getEl = document.getElementById('view-client') 
    var datasContent= data.contents;
    var datasDetail= data.details;
   
    for(var i in datasContent){
        if(x == i){
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
        if(x == i){  
            //var con = `<div> ${datasContent[i].id} </div>`; 
            content2='\
            <table>\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Төрсөн огноо: </b> '+ datasDetail[i].birthDay + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хүйс: </b> '+ datasDetail[i].sex + '</td>\
                </tr>\
                <tr>\
                    <td><b> Гэрлэлт: </b> '+ datasDetail[i].marital + '</td>\
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
        if(x == i){
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
        if(x == i){  
        content2='\
            <table >\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Төрсөн огноо: </b> <input value="'+ datasDetail[i].birthDay + '" id="birthDay"></td>\
                </tr>\
                <tr>\
                    <td><b> Хүйс: </b> <input value="'+ datasDetail[i].sex + '" id="sex"></td>\
                </tr>\
                <tr>\
                    <td><b> Гэрлэлт: </b> <input value="'+ datasDetail[i].marital + '" id="maritalSta"></td>\
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
                <button id="save" onclick="saveIt('+i+')">Хадгалах</button>\
            ' ;

        }
    }
    createEl3_forEdit.innerHTML =content;
    createEl4_forEdit.innerHTML =content2;
    getEl.appendChild(createEl3_forEdit);
    getEl.appendChild(createEl4_forEdit);
    
}
function saveIt(idOfCase){
    let  newName= document.getElementById('name').value;
    let  newPhone = document.getElementById('phone').value;
    let  newEmail = document.getElementById('email').value;
    let  newAddress = document.getElementById('address').value;
    let  newCompany = document.getElementById('company').value;
    let  newTitle = document.getElementById('title').value;
    let newBirthday = document.getElementById('birthDay').value;
    let newSex = document.getElementById('sex').value;
    let newMarital = document.getElementById('maritalSta').value;
    let newDriverli = document.getElementById('driverLi').value;
    let newEmergencyname = document.getElementById('emergencyName').value;
    let newEmergencyphone = document.getElementById('emergencyPhone').value;
    let newEmergencywho = document.getElementById('emergencyWho').value;
  
    let newContent1 = { name: newName, phone: newPhone, 
        email: newEmail, address: newAddress, 
        company: newCompany,title: newTitle};
    let newContent2 = { birthDay: newBirthday, sex: newSex, marital: newMarital, driverID: newDriverli, emergencyName: newEmergencyname, emergencyPhone: newEmergencyphone, who: newEmergencywho};
    
    database.ref('/data/clients/contents/' +idOfCase).update(newContent1);
    database.ref('/data/clients/details/' +idOfCase).update(newContent2);
    document.getElementById('view-background').style.display="none";
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
    
    var pageCount = numPages(data.contents.length, entriesNumber.value);
    var i = 0;
    for(var i in data.contents){
        k = data.contents[i].id;
        if(k >= entriesNumber.value)
            showSelectedEntries = data.contents.slice(0,entriesNumber.value);
    }
    showTable(showSelectedEntries);

//**************Pagination Show heseg******************

    
    paginationQuery.innerHTML = ""; 
   
    if(entriesNumber.value>data.contents.length || entriesNumber.value ==""){
        paginationQuery.innerHTML +='\
            <span class="pagination-span active">\
                <div>' + 1 + '</div>\
            </span>';
            console.log("clicked")
    }
    paginationQuery.innerHTML +='\
        <span class="pagination-span active">\
            <div>' + 1 + '</div>\
        </span>';
        
    for ( j =1; j<pageCount; j++){
        paginationQuery.innerHTML += '\
            <span class="pagination-span">\
                <div>' + (j+1) + '</div>\
            </span>';
    }
    var pageClick=document.getElementsByClassName('pagination-span');
    
    for(j=0; j<pageCount; j++) {
        pageClick[j].addEventListener('click', function(ev){
            var currentActivePage = document.getElementsByClassName("active");
            currentActivePage[0].className = currentActivePage[0].className.replace(" active", "");
            this.className += " active";
            var end = parseInt(ev.target.innerText) * (entriesNumber.value);
            start = end-entriesNumber.value;
            var showActiveTable = data.contents.slice(start, end);
            
        showTable(showActiveTable); 
        });  
    }
}


function prevClicked(){
    var pageClick=document.getElementsByClassName('pagination-span');
    var startEls = parseInt(document.getElementById("startElements").innerText);
    var start = (startEls-1) - parseInt(entriesNumber.value);
    let preEnd = start + (parseInt(entriesNumber.value));
    let totalPage = parseInt(pageClick.length)-1;
    let i = totalPage;
    
    let currentPage = (Math.ceil(preEnd / parseInt(entriesNumber.value)));
    
    if (start < 0)
        start = 0;
    let preStart = start;
    let preShow = data.contents.slice(preStart, preEnd);
    for(i; i >= 0 ; i--){
        if(i== currentPage){
                pageClick[i-1].classList.add("active");
                pageClick[i].classList.remove("active");
            }
       
    };
    showTable(preShow);
    
}

function nextClicked(){
    var pageClick=document.getElementsByClassName('pagination-span');
    let startEl = parseInt(document.getElementById("startElements").innerText);
    let start = startEl+parseInt(entriesNumber.value)-1;
    let end = start + parseInt(entriesNumber.value);
    
    if (end > data.contents.length){
        end = data.contents.length;
        startElement= end-(data.contents.length % parseInt(entriesNumber.value));
        start = startElement;
    }
    let i=0;
    var currentPage = Math.ceil(end / parseInt(entriesNumber.value))-1;
    for(i; i< pageClick.length; i++){
        if(i == currentPage){
                pageClick[i].classList.add("active");
                pageClick[i-1].classList.remove("active");
            }
       
    };
    var nextShow = data.contents.slice(start, end);

    showTable(nextShow);
}
function sortByName(n){
    let switching = true;
    let dir;
    dir = "asc";
    let switchCount = 0;
    let shouldSwitch;
    let table = document.getElementById("firstTable");
    while(switching){
        switching = false
        rows = table.rows;
        for(var i = 1; i<(rows.length-1); i++){
            shouldSwitch = false;
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
function exportFileExl(filename = ''){
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


