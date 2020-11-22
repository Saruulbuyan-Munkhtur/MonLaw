const database = firebase.database();
var data = {};
database.ref('data/').on('value', function(snapshot) {

    data = snapshot.val().clients; 
    showTable();

});


var createEl1 = document.createElement('div');
var createEl2 = document.createElement('div');
var createEl3 = document.createElement('div');
var createEl4 = document.createElement('div');

function showTable(){

    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("main-content");
    getEl.innerHTML="";
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
            <td>'+ datas[i].caseName + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+i+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +i+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +i+')">Устгах</button>\
            </td>\
        </tr>';
        };
    tableRow+="</table>";
    
    createElForTable.innerHTML = tableRow;
    getEl.appendChild(createElForTable);
    
};



function view(x){

    var content1 = "";
    var content2 = "";
    
    document.getElementById('about-content').style.display="block";
    var getEl = document.getElementById('about-content-container');
    var datasContent= data.contents;
    var datasDetail= data.details;
    
    

    getEl.innerHTML="";
    for(var i in datasContent){
        if(x == i){
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
                <td><b> Хэргийн нэр: </b> '+datasContent[i].caseName + '</td>\
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
        if(x == i){  
            content2='\
                <table>\
                    <tr>\
                        <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                    </tr>\
                    <tr>\
                        <td><b> Нэр: </b> '+ datasContent[i].name + '</td>\
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
                </table>\
                ' ;
        }
    }
    
    
    createEl1.innerHTML= content1;
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
            <td>'+ datas[i].caseName + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+i+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +i+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +i+')">Устгах</button>\
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
            <td>'+ datas[i].caseName + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+i+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +i+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +i+')">Устгах</button>\
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
            <td>'+ datas[i].caseName + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+i+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +i+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +i+')">Устгах</button>\
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
            <td>'+ datas[i].caseName + '</td>\
            <td>'+ datas[i].type + '</td>\
            <td>'+ datas[i].where + '</td>\
            <td>'+ datas[i].date + '</td>\
            <td>'+ datas[i].payment + '</td>\
            <td>'+ datas[i].paymentStatus + '</td>\
            <td>'+ datas[i].status + '</td>\
            <td><button type="button" id="view-button" onclick="view('+i+')">Харах</button>\
            </td>\
            <td><button type="button" id="edit-button" onclick="edit(' +i+')">Өөрчлөх</button>\
            </td>\
            <td><button type="button" id="appoint-button" onclick="remove(' +i+')">Устгах</button>\
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
    var content3 = "";
    var content4= "";

    document.getElementById('about-content').style.display="block";
    var getEl = document.getElementById('about-content-container');
    getEl.innerHTML="";
    var datasContent= data.contents;
    var datasDetail= data.details;


    for(var i in datasContent){
        if(x == i){
        content3='\
            <img src="../../assets/closeicon.png" onclick="closeIt()">\
            <table>\
                <tr>\
                    <th>ЕРӨНХИЙ МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                <td><b> Хэргийн ID: </b> <input value="'+datasContent[i].id + '" id="caseId"></td>\
                </tr>\
                <tr>\
                    <td><b> Хэргийн нэр: </b> <input value="'+datasContent[i].caseName + '" id="name"></td>\
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
                    <td><b> Төлөв: </b><input value="'+datasContent[i].status + '" id="caseStatus"></td>\
                </tr>\
            </table>';
        }
    }
    for(var i in datasDetail){
        if(x == i){  
        content4='\
            <table >\
                <tr>\
                    <th>НАРИЙВЧИЛСАН МЭДЭЭЛЭЛ</th>\
                </tr>\
                <tr>\
                    <td><b> Нэр: </b> <input value="'+ datasContent[i].name + '" id="birthDay"></td>\
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
                <button id="save-button" onclick="saveIt('+ i +')">Хадгалах</button>\
            ' ;

        }
    }
    createEl3.innerHTML =content3;
    createEl4.innerHTML =content4;
    
    getEl.appendChild(createEl3);
    getEl.appendChild(createEl4);
    
}


function closeIt(){
    document.getElementById('about-content').style.display="none";
}

function saveIt(idOfCase){
    //deer bga saveIt in idOfCase n saveIt in onclick deer damjuulj bui  [i] utga shvv. onclick deere saveIt('+i+') nemeerei
    // Ene 1 mur Boloroo egchin codond ajillaxgvi
    var newId = document.getElementById('caseId').value;

    let  newCaseName = document.getElementById('name').value;
    let  newPhone = document.getElementById('phone').value;
    let  newEmail = document.getElementById('email').value;
    let  newAddress = document.getElementById('address').value;
    let  newCompany = document.getElementById('company').value;
    let  newTitle = document.getElementById('title').value;

    // Ene 1 mur Boloroo egchin codond ajillaxgvi
    let newStatus = document.getElementById('caseStatus').value;

    let newName = document.getElementById('birthDay').value;
    let newSex = document.getElementById('sex').value;
    let newMarital = document.getElementById('maritalSta').value;
    let newDriverli = document.getElementById('driverLi').value;
    let newEmergencyname = document.getElementById('emergencyName').value;
    let newEmergencyphone = document.getElementById('emergencyPhone').value;
    let newEmergencywho = document.getElementById('emergencyWho').value;

    // Ene neg mur Boloroo egchin codond ajillaxgvi
    let newContent1 = { id: newId, caseName: newCaseName, 
        type: newPhone, where: newEmail, date: newAddress, 
        payment: newCompany, paymentStatus: newTitle, status: newStatus,  name: newName, };
   
    //ene code tanix deeer ajillana
    //let newContent1 = { name: newName, phone: newPhone, email: newEmail, address: newAddress, company: newCompany,title: newTitle};
    let newContent2 = { sex: newSex, 
        marital: newMarital, driverID: newDriverli, 
        emergencyName: newEmergencyname, emergencyPhone: newEmergencyphone, 
        who: newEmergencywho};
    
    database.ref('/clients/data/contents/' +idOfCase).update(newContent1);
    database.ref('/clients/data/details/' +idOfCase).update(newContent2);

    document.getElementById('about-content').style.display="none";
    var getEl = document.getElementById('about-content-container');
    getEl.innerHTML="";
    

}