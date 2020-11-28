const database = firebase.database();
var data = {};
var dataMain = {};
database.ref('data/').on('value', function(snapshot) {
    
    dataMain = snapshot.val().invoices; 
    
    data = dataMain.services;
    showTable();
    console.log(dataMain);
});

function showTable(){


    var createElForTable = document.createElement('div');
    var getEl = document.getElementById("tableContent");
    getEl.innerHTML="";
    var tableRow = "";
    

    var subTotal = 0;
    tableRow='\
         <table id="tableForDownload">\
          <thead>\
            <tr>\
              <th>Номер</th>\
              <th>Үйлчилгээний төрөл</th>\
              <th>Тоо, ширхэг</th>\
              <th>Нэг бүрийн үнэ</th>\
              <th>Нийт төлбөр</th>\
            </tr>\
          </thead>';
    var count=1;
    for( let i in data){

        subTotal=(data[i].quantity * data[i].unitCost);

        tableRow+= '\
        <tbody>\
            <tr>\
            <td id="whatNumber">'+count+'</td>\
            <td id="Service Type">'+data[i].serviceType+'</td>\
            <td quantity="Quantity">'+data[i].quantity+'</td>\
            <td style="text-align: end;" unitCost="Unit cost">'+currency(data[i].unitCost).format()+'</td>\
            <td style="text-align: end;" subTotal="Subtotal">'+currency(subTotal).format()+'</td>\
            </tr>\
        </tbody>';
        count++
    };
    tableRow+="</table>";

    var subTotalForTotal=0;
    for (let i in data){
       subTotalForTotal+=(data[i].quantity * data[i].unitCost);
        
    };  
    

    createElForTable.innerHTML = tableRow;
    getEl.appendChild(createElForTable);
    
    document.getElementById("toWhere").innerHTML = dataMain.toWhere;
    document.getElementById("toWhereDirection").innerHTML ='Хаяг: '+ dataMain.toWhereDirection;
    document.getElementById("toMail").innerHTML ='Майл: '+ dataMain.toMail;
    document.getElementById("toPhone").innerHTML ='Утас: '+ dataMain.toPhone;

    document.getElementById("invoiceId").innerHTML ='Нэхэмжлэхийн дугаар: '+ dataMain.invoiceID;
    document.getElementById("orderId").innerHTML ='Гэрээний дугаар: '+ dataMain.orderId;
    document.getElementById("paymentDue").innerHTML ='Төлөх хугацаа: '+ dataMain.paymentDue;
    document.getElementById("accountNumber").innerHTML ='Аккоунтын дугаар: '+ dataMain.accountNumber;

    document.getElementById("paymentDues").innerHTML ='Төлөх хугацаа: '+ dataMain.paymentDue;
    document.getElementById("totalAmount").innerHTML ='Нийт: '+ currency(subTotalForTotal).format();
    document.getElementById("tax").innerHTML ='Татвар(10%): '+ currency(subTotalForTotal/10).format();
    document.getElementById("total").innerHTML ='Нийт төлбөр: '+ currency(subTotalForTotal+subTotalForTotal/10).format();
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

