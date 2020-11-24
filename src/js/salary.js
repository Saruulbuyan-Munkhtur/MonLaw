const database = firebase.database();
var data = {};
var dataMain = {};
database.ref('data/salaries/2020').on('value', function(snapshot) {
    
    data = snapshot.val();
    showTable();
    
});

function showTable(){

    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("tableContent");
    getEl.innerHTML="";
    createElForTable.innerHTML='';
    var tableRow = "";
    
    
    tableRow='\
         <table id="tableForDownload">\
          <thead>\
            <tr>\
              <th>Номер</th>\
              <th>Ажилтны нэр</th>\
              <th>Албан тушаал</th>\
              <th>Цалингийн зэрэглэл</th>\
              <th>Он</th>\
              <th>Нийт цалин</th>\
              <th class="to-print" colspan="2" id="hideWhenPdf"  id="element-to-hide" data-html2canvas-ignore="true">Үйлдэл</th>\
            </tr>\
          </thead>';
    var count=1;

    for( let i in data){

        let subTotal=0;
        for (let ii in data[i].salaryPerMonth){

            subTotal+=data[i].salaryPerMonth[ii];
        }
        
        tableRow+= '\
        <tbody>\
            <tr>\
                <td id="whatNumber">'+count+'</td>\
                <td id="Service Type">'+data[i].name+'</td>\
                <td quantity="Quantity">'+data[i].role+'</td>\
                <td class="alignRight" unitCost="Unit cost">'+data[i].salaryLevel+'</td>\
                <td  unitCost="Unit cost">2020</td>\
                <td style="text-align: end;"  subTotal="Subtotal">'+currency(subTotal).format()+'</td>\
                <td class="to-print"  id="hideWhenPdf2" id="element-to-hide" data-html2canvas-ignore="true"><button type="button" id="view-button" onclick="showTableForEachOne('+i+')">Харах</button></td>\
            </tr>\
        </tbody>';
        count++
    };
    tableRow+="</table>";


    var subTotalForSalary=0;
    var subTotalForTotal=0;

    for( let i in data){
        for (let ii in data[i].salaryPerMonth){

        subTotalForSalary+=(data[i].salaryPerMonth[ii]-(data[i].salaryPerMonth[ii]/10+data[i].salaryPerMonth[ii]/10+data[i].salaryPerMonth[ii]/80));
        };
    };

    for( let i in data){
        for (let ii in data[i].salaryPerMonth){

        subTotalForTotal+=data[i].salaryPerMonth[ii];
        };
    };
    

    createElForTable.innerHTML = tableRow;
    getEl.appendChild(createElForTable);
    

    document.getElementById("totalAmount").innerHTML ='НиЙгмийн даатгал(10%): '+currency(subTotalForTotal/10).format();
    document.getElementById("paymentDues").innerHTML ='Нийт Цалин: '+ currency(subTotalForTotal).format() ;
    document.getElementById("tax").innerHTML ='Орлогын албан татвар(10%): '+currency(subTotalForTotal/10).format() ;
    document.getElementById("eMendDaatgal").innerHTML ='Эрүүл мэндийн даатгал: '+ currency(subTotalForTotal/80).format() ;
    document.getElementById("total").innerHTML ='Гар дээр олгодсон цалин: '+currency(subTotalForSalary).format() ;
};


function downloadPdf(){
    
    const element = document.getElementById("mainContentContainer");

   
    html2pdf().set({ html2canvas: { scale: 10 }, format: "A4", margin: 10 }).from(element).save();
    
}

function printIt() {

    var printContents = document.getElementById('mainContentContainer').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}


function sendInvoice(){
    window.location='https://gmail.com';
}





function showTableForEachOne(x){

    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("tableContent");
    getEl.innerHTML="";
    var tableRow = "";

    var createElForName = document.createElement('div');
    var nameEl = document.getElementById('name-content-container'); 
    var htmlForEl= ' <div class="name-content-right">\
                    <span id="toName"></span>\
                    <span id="toRole"></span>\
                    <span id="toSalaryLevel"></span>\
                    <span id="toMail"></span>\
                    </div>';

    createElForName.innerHTML=htmlForEl;
    nameEl.appendChild(createElForName);
    

    tableRow='\
         <table id="tableForDownload">\
          <thead>\
            <tr>\
              <th>Номер</th>\
              <th>Сар</th>\
              <th>Нийгмийн даатгал</th>\
              <th>Орлогын албан татвар</th>\
              <th>Эрүүл мэндийн даатгал</th>\
              <th>Нийт цалин</th>\
              <th>Гар дээр олгогдсон</th>\
            </tr>\
          </thead>';
    var count=1;
    let subTotal=0;
    let subTotalForTatal=0;
    for (let ii in data[x].salaryPerMonth){

        subTotalForTatal+=data[x].salaryPerMonth[ii];
        subTotal=data[x].salaryPerMonth[ii];
        let subTotalForTotal = subTotal-subTotal/5-subTotal/40;

        tableRow+= '\
        <tbody>\
            <tr>\
            <td id="whatNumber">'+count+'</td>\
            <td id="whatMonth">'+count+'</td>\
            <td style="text-align: end;" id="nDaatgal">'+currency(subTotal/10).format()+'</td>\
            <td style="text-align: end;" id="tatwar">'+currency(subTotal/10).format()+'</td>\
            <td style="text-align: end;" >'+currency(subTotal/80).format() +'</td>\
            <td style="text-align: end;" id="Subtotal">'+ currency(subTotal).format() +'</td>\
            <td style="text-align: end;" id="SubtotalGiven">'+ currency(subTotalForTotal).format() +'</td>\
            </tr>\
        </tbody>';
        count++
    }
    
    tableRow+="</table>";

 

    createElForTable.innerHTML = tableRow;
    getEl.appendChild(createElForTable);
    
    document.getElementById("toName").innerHTML ='Нэр: '+ data[x].name;
    document.getElementById("toRole").innerHTML ='Албан тушаал: '+ data[x].role;
    document.getElementById("toSalaryLevel").innerHTML ='Цалингын зэрэглэл: '+ data[x].salaryLevel;
    document.getElementById("toMail").innerHTML ='Майл: '+ data[x].mail;

    
    document.getElementById("totalAmount").innerHTML ='НиЙгмийн даатгал(10%): '+ currency(subTotalForTatal/10).format()  ;
    document.getElementById("paymentDues").innerHTML ='Нийт Цалин: '+currency(subTotalForTatal).format()  ;
    document.getElementById("tax").innerHTML ='Орлогын албан татвар(10%): '+currency(subTotalForTatal/10).format()  ;
    document.getElementById("eMendDaatgal").innerHTML ='Эрүүл мэндийн даатгал: '+currency(subTotalForTatal/80).format()   ;
    document.getElementById("total").innerHTML ='Гар дээр олгодсон цалин: '+currency((subTotalForTatal-subTotalForTatal/5-subTotalForTatal/80)).format();
    let elForButton = '<button id="close-salary" onclick="closeSalary()">Буцах</button>'
    document.getElementsByClassName('header-buttons')[0].innerHTML+=elForButton;
    
};
function closeSalary(){
    document.getElementById('close-salary').remove();
    document.getElementById('name-content-container').innerHTML='';
    showTable();
}


