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
var rawData;

const clientRef = firebase.database().ref("informations/");
clientRef.on('value', function (snapshot) {
    // console.log("Informations");
    rawData = snapshot.val();
    // console.log(rawData);
    showTable(rawData);
});


function showTable(mainData) {
    var createEl = document.createElement('div');
    var getEl = document.getElementById("data-content");
    var content = '';
    var datas = mainData;
    getEl.innerHTML = "";
    var idd = 1;
    content = `\
        <table id="firstTable">
            <tr>
                <th onclick="sortByName(0)">№</th>
                <th id="headName" onclick="sortByName(1)"<div class="sortIcons"></div>Овог</th>
                <th id="headName" onclick="sortByName(1)"<div class="sortIcons"></div>Нэр</th>
                <th onclick="sortByName(2)">Утас</th>
                <th onclick="sortByName(3)">И-мэйл</th>
                <th onclick="sortByName(4)">Гэрийн хаяг</th>
                <th onclick="sortByName(5)">Компани</th>
                <th onclick="sortByName(6)">Албан тушаал</th>
                <th colspan="3" id="action">Үйлдэл</th>
            </tr>`;

    for (var i in datas) {
        content += '\
            <tr id="tableRow">\
                <td id="startElements">'+ idd + '</td>\
                <td id="nameEl" >'+ datas[i].firstName + '</td>\
                <td id="nameEl" >'+ datas[i].lastName + '</td>\
                <td>'+ datas[i].userPhone + '</td>\
                <td>'+ datas[i].email + '</td>\
                <td>'+ datas[i].userAddress + '</td>\
                <td>'+ datas[i].companyName + '</td>\
                <td>'+ datas[i].userPosition + '</td>\
                <td><i class="fa fa-file-o" data-ids="' + i + '" onclick="view(this)"><span id = "view-tooltip">Харах</span></i>\
                </td>\
                <td><i class="fa fa-pencil-square-o" data-ids="' + i + '" onclick="edit(this)"><span id = "edit-tooltip">Өөрчлөх</span></i>\
                </td>\
                <td><i class="fa fa-calendar-plus-o" data-ids="' + i + '" onclick="hearingDate()"><span id = "appoint-tooltip">Цаг товлох </span></i>\
                </td>\
            </tr>';
        idd++;
    }
    idd = 1;
    content += "</table>"

    createEl.innerHTML = content;
    getEl.appendChild(createEl);

};

function view(e) {
    var ids = e.dataset.ids;
    // console.log(ids);
    content1 = "";
    content2 = "";
    document.getElementById('view-background').style.display = "flex";
    var getEl = document.getElementById('view-client')
    var datasContent = rawData;
    // var datasDetail = data.details;

    for (var i in datasContent) {
        if (ids === i) {
            content1 = '\
        <table>\
            <tr>\
                <th id="table-radius">ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
            </tr>\
                <tr>\
                    <td><b> Овог: </b> '+ datasContent[i].lastName + '</td>\
                </tr>\
                <tr>\
                    <td><b> Нэр: </b> '+ datasContent[i].firstName + '</td>\
                </tr>\
                <tr>\
                    <td><b> Утас: </b> '+ datasContent[i].userPhone + '</td>\
                </tr>\
                <tr>\
                    <td><b> И-мэйл: </b> '+ datasContent[i].email + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хаяг: </b> '+ datasContent[i].userAddress + '</td>\
                </tr>\
                <tr>\
                    <td><b> Компани: </b> '+ datasContent[i].companyName + '</td>\
                </tr>\
                <tr>\
                    <td><b> Албан тушаал: </b> '+ datasContent[i].userPosition + '</td>\
                </tr>\
            </table>';
        }
    }
    for (var i in datasContent) {
        if (ids === i) {
            //var con = `<div> ${datasContent[i].id} </div>`; 
            var gender = datasContent[i].gender === "male" ? "Эрэгтэй" : "Эмэгтэй"
            content2 = '\
            <table>\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Төрсөн огноо: </b> '+ datasContent[i].birthDate + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хүйс: </b> '+ gender + '</td>\
                </tr>\
                <tr>\
                    <td><b> Гэрлэлт: </b> '+ datasContent[i].maritalStatus + '</td>\
                </tr>\
                <tr>\
                    <td><b> Жолооны үнэмлэхний дугаар: </b> '+ datasContent[i].driversLicense + '</td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний нэр: </b> '+ datasContent[i].emergencyName + '</td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний дугаар: </b> '+ datasContent[i].emergencyCallNumber + '</td>\
                </tr>\
                <tr>\
                    <td><b> Таны хэн болох: </b> '+ datasContent[i].emergencyRelatives + '</td>\
                </tr>\
            </table>' ;
        }
    }
    createEl1.innerHTML = content1;
    createEl2.innerHTML = content2;
    getEl.appendChild(createEl1);
    getEl.appendChild(createEl2);
}
function edit(e) {
    var ids = e.dataset.ids;
    content = "";
    content2 = "";
    document.getElementById('view-background').style.display = "flex";
    var getEl = document.getElementById('view-client-edit')
    var datasContent = rawData;
    for (var i in datasContent) {
        if (ids === i) {
            content = '\
            <table>\
                <tr>\
                    <th>ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Овог: </b> <input value="'+ datasContent[i].lastName + '" id="name"></td>\
                </tr>\
                <tr>\
                    <td><b> Нэр: </b> <input value="'+ datasContent[i].firstName + '" id="name"></td>\
                </tr>\
                <tr>\
                    <td><b> Утас: </b><input value="'+ datasContent[i].userPhone + '" id="phone"></td>\
                </tr>\
                <tr>\
                    <td><b> И-мэйл: </b><input value="'+ datasContent[i].email + '" id="email"></td>\
                </tr>\
                <tr>\
                    <td><b> Хаяг: </b><input value="'+ datasContent[i].userAddress + '" id="address"></td>\
                </tr>\
                <tr>\
                    <td><b> Компани: </b><input value="'+ datasContent[i].companyName + '" id="company"></td>\
                </tr>\
                <tr>\
                    <td><b> Албан тушаал: </b><input value="'+ datasContent[i].userPosition + '" id="title"></td>\
                </tr>\
            </table>';
        }
    }
    for (var i in datasContent) {
        if (ids === i) {
            content2 = '\
            <table >\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Төрсөн огноо: </b> <input value="'+ datasContent[i].birthDate + '" id="birthDay"></td>\
                </tr>\
                <tr>\
                    <td><b> Хүйс: </b> <input value="'+ datasContent[i].gender + '" id="sex"></td>\
                </tr>\
                <tr>\
                    <td><b> Гэрлэлт: </b> <input value="'+ datasContent[i].maritalStatus + '" id="maritalSta"></td>\
                </tr>\
                <tr>\
                    <td><b> Жолооны үнэмлэхний дугаар: </b> <input value="'+ datasContent[i].driversLicense + '" id="driverLi"></td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний нэр: </b> <input value="'+ datasContent[i].emergencyName + '" id="emergencyName"></td>\
                </tr>\
                <tr>\
                    <td><b> Яаралтай үед холбоо барих хүний дугаар: </b> <input value="'+ datasContent[i].emergencyCallNumber + '" id="emergencyPhone"></td>\
                </tr>\
                <tr>\
                    <td><b> Таны хэн болох: </b> <input value="'+ datasContent[i].emergencyRelatives + '" id="emergencyWho"></td>\
                </tr>\
            </table>\
                <button id="save" onclick="saveIt('+ i + ')">Хадгалах</button>\
            ' ;

        }
    }
    createEl3_forEdit.innerHTML = content;
    createEl4_forEdit.innerHTML = content2;
    getEl.appendChild(createEl3_forEdit);
    getEl.appendChild(createEl4_forEdit);

}
function saveIt(idOfCase) {
    let newName = document.getElementById('name').value;
    let newPhone = document.getElementById('phone').value;
    let newEmail = document.getElementById('email').value;
    let newAddress = document.getElementById('address').value;
    let newCompany = document.getElementById('company').value;
    let newTitle = document.getElementById('title').value;
    let newBirthday = document.getElementById('birthDay').value;
    let newSex = document.getElementById('sex').value;
    let newMarital = document.getElementById('maritalSta').value;
    let newDriverli = document.getElementById('driverLi').value;
    let newEmergencyname = document.getElementById('emergencyName').value;
    let newEmergencyphone = document.getElementById('emergencyPhone').value;
    let newEmergencywho = document.getElementById('emergencyWho').value;

    let newContent1 = {
        name: newName, phone: newPhone,
        email: newEmail, address: newAddress,
        company: newCompany, title: newTitle
    };
    let newContent2 = { birthDay: newBirthday, sex: newSex, marital: newMarital, driverID: newDriverli, emergencyName: newEmergencyname, emergencyPhone: newEmergencyphone, who: newEmergencywho };

    database.ref('/data/clients/contents/' + idOfCase).update(newContent1);
    database.ref('/data/clients/details/' + idOfCase).update(newContent2);
    document.getElementById('view-background').style.display = "none";
}
function closeIt() {
    document.getElementById('view-background').style.display = "none";
    createEl1.innerHTML = "";
    createEl2.innerHTML = "";
    createEl3_forEdit.innerHTML = "";
    createEl4_forEdit.innerHTML = "";
}
function nameFilter() {
    var inputName = document.getElementById("name-filter");
    var newData = data.contents.filter(n => n.name.toLowerCase().includes(inputName.value));
    showTable(newData);

}
function phoneFilter() {
    var inputPhone = document.getElementById("phone-filter");
    var newData = data.contents.filter(n => n.phone.includes(inputPhone.value));
    showTable(newData);
}
function companyFilter() {
    var inputCompany = document.getElementById("company-filter");
    var newData = data.contents.filter(n => n.company.toLowerCase().includes(inputCompany.value));
    showTable(newData);
}

function selectedEntries() {

    var pageCount = numPages(data.contents.length, entriesNumber.value);
    var i = 0;

    for (var i in data.contents) {
        k = data.contents[i].id;
        if (k >= entriesNumber.value)
            showSelectedEntries = data.contents.slice(0, entriesNumber.value);
    }
    showTable(showSelectedEntries);

    //**************Pagination Show heseg******************


    paginationQuery.innerHTML = "";
    paginationQuery.innerHTML += '\
        <span class="pagination-span active">\
            <div>' + 1 + '</div>\
        </span>';

    for (j = 1; j < pageCount; j++) {

        paginationQuery.innerHTML += '\
            <span class="pagination-span">\
                <div>' + (j + 1) + '</div>\
            </span>';
    }
    var pageClick = document.getElementsByClassName('pagination-span');

    for (j = 0; j < pageCount; j++) {
        pageClick[j].addEventListener('click', function (ev) {
            var currentActivePage = document.getElementsByClassName("active");
            currentActivePage[0].className = currentActivePage[0].className.replace(" active", "");
            this.className += " active";
            var end = parseInt(ev.target.innerText) * (entriesNumber.value);
            start = end - entriesNumber.value;
            var showActiveTable = data.contents.slice(start, end);

            showTable(showActiveTable);
        });
    }
}


function prevClicked() {
    var startEls = parseInt(document.getElementById("startElements").innerText);
    var start = (startEls - 1) - parseInt(entriesNumber.value);
    if (start < 0)
        start = 0;
    let preStart = start;
    let preEnd = start + (parseInt(entriesNumber.value));
    let preShow = data.contents.slice(preStart, preEnd);
    showTable(preShow);

}

function nextClicked() {
    var pageClick = document.getElementsByClassName('pagination-span');
    let startEl = parseInt(document.getElementById("startElements").innerText);
    let start = startEl + parseInt(entriesNumber.value) - 1;
    let end = start + parseInt(entriesNumber.value);

    if (end > data.contents.length) {
        end = data.contents.length;
        startElement = end - (data.contents.length % parseInt(entriesNumber.value));
        start = startElement;
    }
    let i = 0;
    var dis = end / parseInt(entriesNumber.value);
    for (i; i < pageClick.length; i++) {
        if (i == dis) {
            pageClick[i + 1].classList.add("active");
            pageClick[i].classList.remove("active");
        }
    };
    var nextShow = data.contents.slice(start, end);

    showTable(nextShow);
}
function sortByName(n) {
    let switching = true;
    let dir;
    dir = "asc";
    let switchCount = 0;
    let shouldSwitch;
    let table = document.getElementById("firstTable");
    while (switching) {
        switching = false
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            rowFrst = rows[i].getElementsByTagName("TD")[n];
            rowNxt = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (rowFrst.innerHTML.toLowerCase() > rowNxt.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "desc") {
                if (rowFrst.innerHTML.toLowerCase() < rowNxt.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        }
        else {
            if (switchCount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }

    }

}
function exportFileExl(filename = '') {
    // console.log("Started");
    var tableSelect = document.getElementById("firstTable");
    // console.log(tableSelect);

    var downloadurl;
    var dataFileType = 'application/vnd.ms-excel';

    var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');
    // Specify file name
    filename = filename ? filename + '.xls' : 'export_excel_data.xls';
    // Create download link element
    downloadurl = document.createElement("a");
    document.body.appendChild(downloadurl);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTMLData], {
            type: dataFileType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    }
    else {
        // Create a link to the file
        downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;
        // Setting the file name
        downloadurl.download = filename;

        //triggering the function
        downloadurl.click();
    }
}
function numPages(totalLength, pageView) {
    return Math.ceil(totalLength / pageView);
}
