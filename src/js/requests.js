const database = firebase.database();
var data = {};
var dataMain = {};
database.ref('data/requests').on('value', function(snapshot) {
    
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
              <th>Нэр</th>\
              <th>Хаанаас</th>\
              <th>Хэзээ</th>\
              <th>Хүсэлт</th>\
            </tr>\
          </thead>';
    var count=1;
    for(let i in data){
     tableRow+= '\
        <tbody>\
            <tr>\
                <td id="whatNumber">'+count+'</td>\
                <td id="Service Type">'+data[i].name+'</td>\
                <td id="Service Type">'+data[i].date+'</td>\
                <td quantity="Quantity">'+data[i].fromWhere+'</td>\
                <td id="Unit cost">'+data[i].about+'</td>\
                </tr>\
        </tbody>';
        count++
    };
    tableRow+="</table>";
 
    createElForTable.innerHTML = tableRow;
    getEl.appendChild(createElForTable);
    
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
