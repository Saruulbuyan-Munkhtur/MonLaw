var data = {};
var postElement = {};
var testing = firebase.database().ref('clients/').once('value').then(function(snapshot) {
    data = snapshot.val().data; 
    console.log(data);
    showTable();
  });
  
// var data={
//     contents: [
//         {id : "0001", name : "Гар утасны хулгай", type  : "Дээрэм", where : "Худ 11-р хороо", date : "2020.02.20", payment : "2000$", paymentStatus : "Төлөгдсөн", status : "Closed"},
//         {id : "0002", name : "Гар хулгай", type  : "Дээрэм", where : "Худ 3-р хороо", date : "2040.02.20", payment : "199$",  paymentStatus : "Төлөгдөөгүй", status : "Ongoing"},
//         {id : "0003", name : "утасны хулгай", type  : "Дээрэм", where : "Худ 2-р хороо", date : "2010.02.20", payment : "2333$",  paymentStatus : "Төлөгдсөн", status : "Closed"},
//         {id : "0004", name : "Гар утасны", type  : "Дээрэм", where : "Худ 4-р хороо", date : "2000.02.20", payment : "1122$", paymentStatus : "Төлөгдөөгүй", status : "Ongoing"},
//         ],
//     details: [
//         {id : "0001", name: "Баясгаланбаатар", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
//         {id : "0002", name: "Баатар", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
//         {id : "0003", name: "Баясгалан", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "41111", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
//         {id : "0004", name: "Галбаатар", sex: "Эрэгтэй", marrital: "Гэрлээгүй", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
           
//     ]
// };

var createEl1 = document.createElement('div');
var createEl2 = document.createElement('div');
var createEl3 = document.createElement('div');
var createEl4 = document.createElement('div');

function showTable(){
    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("main-content");
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table id="firstTable">\
            <tr>\
                <th>ID<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн нэр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн төрөл<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хаана<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хугацаа<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр төлөлт<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлөв<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th colspan="3">Үйлдэл</th>\
            </tr>';
    
    for( var i in datas){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].nameCase + '</td>\
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



function view(x){

    content1 = "";
    content2= "";
    
    document.getElementById('about-content').style.display="block";
    var getEl = document.getElementById('about-content-container') 
    var datasContent= data.contents;
    var datasDetail= data.details;
    getEl.innerHTML="";
    for(var i in datasContent){
        if(x == datasContent[i].id){
        content1='\
        <img src="../../assets/closeicon.png" onclick="closeIt()">\
        <table >\
            <tr>\
                <th>ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
            </tr>\
                <tr>\
                    <td><b> Хэргийн ID: </b> '+ datasContent[i].id + '</td>\
                </tr>\
                <tr>\
                    <td><b> Хэргийн нэр: </b> '+datasContent[i].nameCase + '</td>\
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
        <table id="firstTable">\
        <tr>\
            <th>ID<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Хэргийн нэр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Хэргийн төрөл<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Хаана<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Хугацаа<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Төлбөр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Төлбөр төлөлт<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th>Төлөв<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
            <th colspan="3">Үйлдэл</th>\
        </tr>';
    
    for( var i in datas){
        if(datas[i].status == "Ongoing"){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].nameCase + '</td>\
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
        <table id="firstTable">\
            <tr>\
                <th>ID<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн нэр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн төрөл<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хаана<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хугацаа<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр төлөлт<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлөв<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th colspan="3">Үйлдэл</th>\
            </tr>';
    
    for( var i in datas){
        if(datas[i].status == "Closed"){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].nameCase + '</td>\
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
        <table id="firstTable">\
            <tr>\
                <th>ID<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн нэр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн төрөл<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хаана<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хугацаа<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр төлөлт<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлөв<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th colspan="3">Үйлдэл</th>\
            </tr>';
    
    for( var i in datas){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].nameCase + '</td>\
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
function sortMyWorks(){

    var sortEl = document.getElementById("main-content");
    sortEl.innerHTML = "";
    var createElForTable = document.createElement('div');
    var tableRow = "";
    var datas= data.contents;
    tableRow='\
        <table id="firstTable">\
            <tr>\
                <th>ID<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн нэр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хэргийн төрөл<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хаана<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Хугацаа<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлбөр төлөлт<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th>Төлөв<img src="../../assets/upDownRow.png" heigth=12px width=12px ></th>\
                <th colspan="3">Үйлдэл</th>\
            </tr>';
    
    for( var i in datas){
        if(datas[i].paymentStatus == "Төлөгдөөгүй"){
        tableRow+= '\
        <tr>\
            <td>'+ datas[i].id + '</td>\
            <td>'+ datas[i].nameCase + '</td>\
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

function edit(x){
    content = "";
    content2= "";

    document.getElementById('about-content').style.display="block";
    var getEl = document.getElementById('about-content-container');
    getEl.innerHTML="";
    var datasContent= data.contents;
    var datasDetail= data.details;


    for(var i in datasContent){
        if(x == datasContent[i].id){
        content='\
            <img src="../../assets/closeicon.png" onclick="closeIt()">\
            <table>\
                <tr>\
                    <th>ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Хэргийн нэр: </b> <input value="'+datasContent[i].nameCase + '" id="name"></td>\
                </tr>\
                <tr>\
                    <td><b> Хэргийн төрөл: </b><input value="'+datasContent[i].type + '" id="phone"></td>\
                </tr>\
                <tr>\
                    <td><b> Хаана: </b><input value="'+datasContent[i].where + '" id="email"></td>\
                </tr>\
                <tr>\
                    <td><b> Хугацаа: </b><input value="'+datasContent[i].date + '" id="address"></td>\
                </tr>\
                <tr>\
                    <td><b> Төлбөр: </b><input value="'+datasContent[i].payment + '" id="company"></td>\
                </tr>\
                <tr>\
                    <td><b> Төлбөр төлөлт: </b><input value="'+datasContent[i].paymentStatus + '" id="title"></td>\
                </tr>\
                <tr>\
                    <td><b> Төлөв: </b><input value="'+datasContent[i].status + '" id="title"></td>\
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
                <button id="save-button" onclick="saveIt()">Хадгалах</button>\
            ' ;

        }
    }
    createEl3.innerHTML =content;
    createEl4.innerHTML =content2;
    getEl.appendChild(createEl3);
    getEl.appendChild(createEl4);
    
}


function closeIt(){
    document.getElementById('about-content').style.display="none";
}
