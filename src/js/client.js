
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
        {id : "1", name : "Г.Болорчимэг", phone : 1009990, email : "bolorchimeg@gmail.com", address : "Худ 11-р хороо", company : "Нанар ХХК", title : "Захирал"},
        {id : "2", name: "Г.Ганболд", phone : 9910000, email : "ganbold@yahoo.com", address : "СХД 2 хороо", company : "Нэст ХХК",  title : "гүйцэтгэх захирал"},       
        {id : "3", name : "Э.Рхрл", phone : 8810000, email : "sdjflk@gmail.com", address : "БЗД 7 хороо", company : "Хурд ХХК", title : "менежер"},
        {id : "4", name: "Ж.Хролд", phone : 9610000, email : "khrloo@yahoo.com", address : "БГД 8 хороо", company : "МСS", title: 'инженер'}
    ],
    details: [
        {id : "1", birthday: "1999/09/09", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "2", birthday: "1990/07/18", sex: "Эрэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
        {id : "3", birthday: "2000/04/29", sex: "Эмэгтэй", marrital: "Гэрлэсэн", driverID: "444555", emergencyName: "Хооооо", emergencyPhone: "88998899", who: "Нөхөр"},
    ]
};

function showTable(){
    var createEl = document.createElement('div');
    var getEl = document.getElementById("data-content");
    var tableRows= "";
    var datas= data.contents;
    content='\
        <table>\
            <tr>\
                <th>№</th>\
                <th>Овог нэр</th>\
                <th>Утас</th>\
                <th>И-мэйл</th>\
                <th>Гэрийн хаяг</th>\
                <th>Компани</th>\
                <th>Албан тушаал</th>\
                <th>Үйлдэл</th>\
            </tr>';

            for( var i in datas){
            content+= '\
            <tr>\
                <td>'+ datas[i].id + '</td>\
                <td>'+ datas[i].name + '</td>\
                <td>'+ datas[i].phone + '</td>\
                <td>'+ datas[i].email + '</td>\
                <td>'+ datas[i].address + '</td>\
                <td>'+ datas[i].company + '</td>\
                <td>'+ datas[i].title + '</td>\
                <td><button type="button" id="view-button" onclick="view()">Харах</button>\
                </td>\
                <td><button type="button" id="edit-button" onclick="edit()">Өөрчлөх</button>\
                </td>\
                <td><button type="button" id="appoint-button" onclick="hearingDate()">Цаг товлох</button>\
                </td>\
            </tr>';
            }
        content+="</table>"

    createEl.innerHTML = content;
    getEl.appendChild(createEl);
    
};
showTable();

function view(){
    document.getElementById('view-background').style.display="block";
    var createEl = document.createElement('div');
    var getEl = document.getElementById('view-client') 
    
    var datasContent= data.contents;
    var datasDetail= data.details;
    var datas = datasDetail + datasContent;
    for(var i in datas){
        if(datasContent[i].id == datasDetail[i].id){
        content='\
        <table>\
            <tr>\
                <th>Ерөнхий мэдээлэл</th>\
            </tr>';
            content+= '\
                <tr>\
                    <td>'+ "Овог нэр: "+ datasContent[i].name + '</td>\
                </tr>\
                <tr>\
                    <td>'+ "Утас: "+datasContent[i].phone + '</td>\
                </tr>\
                <tr>\
                    <td>'+ "И-мэйл: "+datasContent[i].email + '</td>\
                </tr>\
                <tr>\
                    <td>'+ "Хаяг: "+datasContent[i].address + '</td>\
                </tr>\
                <tr>\
                    <td>'+ "Компани: "+datasContent[i].company + '</td>\
                </tr>\
                <tr>\
                    <td>'+ "Албан тушаал: "+datasContent[i].title + '</td>\
                </tr>';
            
            '\<tr>\
                <th>Нарийвчилсан мэдээлэл</th>\
            </tr>';
            content+= '\
                <tr>\
                    <td>'+ datasDetail[i].birthday + '</td>\
                </tr>\
                <tr>\
                    <td>'+ datasDetail[i].sex + '</td>\
                </tr>\
                <tr>\
                    <td>'+ datasDetail[i].marrital + '</td>\
                </tr>\
                <tr>\
                    <td>'+ datasDetail[i].driverID + '</td>\
                </tr>\
                <tr>\
                    <td>'+ datasDetail[i].emergencyName + '</td>\
                </tr>\
                <tr>\
                    <td>'+ datasDetail[i].emergencyPhone + '</td>\
                </tr>\
                <tr>\
                    <td>'+ datasDetail[i].who + '</td>\
                </tr>';
            content+="</table>"
            createEl.innerHTML = content;
            getEl.appendChild(createEl);
        }
        
    }

}
function close(){
    document.getElementById("view-background").style.display = "none";
}
 
