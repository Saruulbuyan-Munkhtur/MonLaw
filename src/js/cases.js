
var data={
    contents: [
        {id : "1", name : "Гар утасны хулгай", type  : "Дээрэм", where : "Худ 11-р хороо", date : "2020.02.20", payment : "2000$", status : "Active"},
        {id : "2", name : "Гар хулгай", type  : "Дээрэм", where : "Худ 3-р хороо", date : "2040.02.20", payment : "199$", status : "Ongoing"},
        {id : "3", name : "утасны хулгай", type  : "Дээрэм", where : "Худ 2-р хороо", date : "2010.02.20", payment : "2333$", status : "Closed"},
        {id : "4", name : "Гар утасны", type  : "Дээрэм", where : "Худ 4-р хороо", date : "2000.02.20", payment : "1122$", status : "Ongoing"},
        ],
    details: [
        {id : "1", name: "Баясгаланбаатар", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "2", name: "Баатар", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "3", name: "Баясгалан", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "41111", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "4", name: "Галбаатар", sex: "Эрэгтэй", marrital: "Гэрлээгүй", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
           
    ]
};

function showTable(){
    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("main-content");
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table>\
            <tr>\
                <th>Хэргийн ID</th>\
                <th>Хэргийн нэр</th>\
                <th>Хэргийн төрөл</th>\
                <th>Хаана</th>\
                <th>Хугацаа</th>\
                <th>Төлбөр</th>\
                <th>Төлөв</th>\
            </tr>';
    
    for( var i in datas){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].name + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+datas[i].id+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +datas[i].id+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +datas[i].id+')">Устгах</button>\
            </td>\
        </tr>';
        };
    tableRow+="</table>";
    createElForTable.innerHTML = tableRow;
    console.log(tableRow);
    getEl.appendChild(createElForTable);
    
};

showTable();
function view(){

}

function edit(){

}

function remove(){

}

