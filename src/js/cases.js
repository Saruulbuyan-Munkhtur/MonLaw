
var data={
    contents: [
        {id : "0001", name : "Гар утасны хулгай", type  : "Дээрэм", where : "Худ 11-р хороо", date : "2020.02.20", payment : "2000$", paymentStatus : "Төлөгдсөн", status : "Closed"},
        {id : "0002", name : "Гар хулгай", type  : "Дээрэм", where : "Худ 3-р хороо", date : "2040.02.20", payment : "199$",  paymentStatus : "Төлөгдөөгүй", status : "Ongoing"},
        {id : "0003", name : "утасны хулгай", type  : "Дээрэм", where : "Худ 2-р хороо", date : "2010.02.20", payment : "2333$",  paymentStatus : "Төлөгдсөн", status : "Closed"},
        {id : "0004", name : "Гар утасны", type  : "Дээрэм", where : "Худ 4-р хороо", date : "2000.02.20", payment : "1122$", paymentStatus : "Төлөгдөөгүй", status : "Ongoing"},
        ],
    details: [
        {id : "0001", name: "Баясгаланбаатар", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "0002", name: "Баатар", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "0003", name: "Баясгалан", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "41111", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "0004", name: "Галбаатар", sex: "Эрэгтэй", marrital: "Гэрлээгүй", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
           
    ]
};

var createEl1 = document.createElement('div');
var createEl2 = document.createElement('div');

function showTable(){
    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("main-content");
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table>\
            <tr>\
                <th>ID</th>\
                <th>Хэргийн нэр</th>\
                <th>Хэргийн төрөл</th>\
                <th>Хаана</th>\
                <th>Хугацаа</th>\
                <th>Төлбөр</th>\
                <th>Төлбөр төлөлт</th>\
                <th>Төлөв</th>\
                <th colspan="3">Үйлдэл</th>\
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
            <td>'+ datas[i].paymentStatus + '</td>\
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
    
    getEl.appendChild(createElForTable);
    
};

showTable();
function view(x){

    content1 = "";
    content2= "";
    
    document.getElementById('about-content').style.display="block";
    var getEl = document.getElementById('about-content-container') 
    var datasContent= data.contents;
    var datasDetail= data.details;
   
    for(var i in datasContent){
        if(x == datasContent[i].id){
        content1='\
        <table>\
            <tr>\
                <th>ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
            </tr>\
                <tr>\
                    <td><b> Хэргийн ID: </b> '+ datasContent[i].id + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хэргийн нэр: </b> '+datasContent[i].name + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хэргийн төрөл: </b> '+datasContent[i].type + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хаана: </b> '+datasContent[i].where + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хугацаа: </b> '+datasContent[i].date + '</td>\
                </tr>\
                <tr>\
                    <td><b> Төлбөр: </b> '+datasContent[i].payment + '</td>\
                </tr>\
                <tr>\
                <td><b> Төлбөр төлөлт: </b> '+datasContent[i].paymentStatus + '</td>\
                </tr>\
                <tr>\
                <td><b> Төлөв: </b> '+datasContent[i].status + '</td>\
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
                    <td><b> Нэр: </b> '+ datasDetail[i].name + '</td>\
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
    createEl1.innerHTML=content1;
    console.log(content1);
    createEl2.innerHTML = content2;
    getEl.appendChild(createEl1);
    getEl.appendChild(createEl2);
}

function sortByActive(){
    var sortEl = document.getElementById("main-content");
    sortEl.innerHTML = "";
    var createElForTable = document.createElement('div');
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table>\
            <tr>\
                <th>ID</th>\
                <th>Хэргийн нэр</th>\
                <th>Хэргийн төрөл</th>\
                <th>Хаана</th>\
                <th>Хугацаа</th>\
                <th>Төлбөр</th>\
                <th>Төлбөр төлөлт</th>\
                <th>Төлөв</th>\
                <th colspan="3">Үйлдэл</th>\
            </tr>';
    
    for( var i in datas){
        if(datas[i].status == "Ongoing"){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].name + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+datas[i].id+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +datas[i].id+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +datas[i].id+')">Устгах</button>\
            </td>\
        </tr>';
        };
    }
    tableRow+="</table>";
    createElForTable.innerHTML = tableRow;
    sortEl.appendChild(createElForTable);

}

function sortByClosed(){
    var sortEl = document.getElementById("main-content");
    sortEl.innerHTML = "";
    var createElForTable = document.createElement('div');
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table>\
            <tr>\
                <th>ID</th>\
                <th>Хэргийн нэр</th>\
                <th>Хэргийн төрөл</th>\
                <th>Хаана</th>\
                <th>Хугацаа</th>\
                <th>Төлбөр</th>\
                <th>Төлбөр төлөлт</th>\
                <th>Төлөв</th>\
                <th colspan="3">Үйлдэл</th>\
            </tr>';
    
    for( var i in datas){
        if(datas[i].status == "Closed"){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].name + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+datas[i].id+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +datas[i].id+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +datas[i].id+')">Устгах</button>\
            </td>\
        </tr>';
        };
    }
    tableRow+="</table>";
    createElForTable.innerHTML = tableRow;
    sortEl.appendChild(createElForTable);

}
function sortAll(){

    var sortEl = document.getElementById("main-content");
    sortEl.innerHTML = "";
    var createElForTable = document.createElement('div');
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table>\
            <tr>\
                <th>ID</th>\
                <th>Хэргийн нэр</th>\
                <th>Хэргийн төрөл</th>\
                <th>Хаана</th>\
                <th>Хугацаа</th>\
                <th>Төлбөр</th>\
                <th>Төлбөр төлөлт</th>\
                <th>Төлөв</th>\
                <th colspan="3">Үйлдэл</th>\
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
            <td>'+ datas[i].paymentStatus + '</td>\
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
    sortEl.appendChild(createElForTable);
}

function edit(){

}

function remove(){

}

function closeIt(){
    document.getElementById('about-content').style.display="none";
}
