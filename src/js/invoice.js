const database = firebase.database();
var data = {};
var dataMain = {};
database.ref('invoice/').on('value', function(snapshot) {

    data = snapshot.val().services; 
    dataMain = snapshot.val();
    showTable();
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
    for( let i in data){

        subTotal=(data[i].quantity * data[i].unitCost);

        tableRow+= '\
        <tbody>\
            <tr>\
            <td id="whatNumber">'+ i +'</td>\
            <td id="Service Type">'+data[i].serviceType+'</td>\
            <td quantity="Quantity">'+data[i].quantity+'</td>\
            <td unitCost="Unit cost">'+data[i].unitCost+'$</td>\
            <td subTotal="Subtotal">'+subTotal+'$</td>\
            </tr>\
        </tbody>';
    };
    tableRow+="</table>";

    var subTotalForTotal=0;
    for (let i in data){
       subTotalForTotal+=(data[i].quantity * data[i].unitCost);
        
    };  
    

    createElForTable.innerHTML = tableRow;
    getEl.appendChild(createElForTable);
    
    document.getElementById("toWhere").innerHTML = dataMain.toWhere;
    document.getElementById("toWhereDirection").innerHTML = dataMain.toWhereDirection;
    document.getElementById("toMail").innerHTML ='Mail: '+ dataMain.toMail;
    document.getElementById("toPhone").innerHTML ='Phone: '+ dataMain.toPhone;

    document.getElementById("invoiceId").innerHTML ='Invoice Id: '+ dataMain.invoiceID;
    document.getElementById("orderId").innerHTML ='Order Id: '+ dataMain.orderId;
    document.getElementById("paymentDue").innerHTML ='Payment Due: '+ dataMain.paymentDue;
    document.getElementById("accountNumber").innerHTML ='Account Number: '+ dataMain.accountNumber;

    document.getElementById("paymentDues").innerHTML ='Payment Due: '+ dataMain.paymentDue;
    document.getElementById("totalAmount").innerHTML =subTotalForTotal + ' $';
    document.getElementById("tax").innerHTML ='Tax(10%): '+ (subTotalForTotal/10);
    document.getElementById("total").innerHTML ='Total: '+ (subTotalForTotal-subTotalForTotal/10);
};


function downloadPdf(){

    const element = document.getElementById("mainContentContainer");
    html2pdf().set({ html2canvas: { scale: 10 }, format: "A4", margin: 10 }).from(element).save();
    
}

// function printIt(){

//     // const element = document.getElementById("mainContentContainer");
//     // objFra.src = html2pdf().set({ html2canvas: { scale: 10 }, format: "A4", margin: 10 }).from(element);                  

//     // let objFra = document.createElement('iframe');     
//     // objFra.style.visibility = 'hidden';                
   
//     // document.body.appendChild(objFra);  
//     // objFra.contentWindow.focus();
//     // objFra.contentWindow.print();      
    
// }
// function sendInvoice(){
    
// }

