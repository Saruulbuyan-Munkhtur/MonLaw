
// function downloadIt(){

//     var storageRef = firebase.storage().ref();
//     var listRef = storageRef.child('');
//     listRef.listAll();
//     listRef.getDownloadURL().then(function(url) {
//       console.log(url);
//     });

// }


function showList() {

    var storageRef = firebase.storage().ref('docs/');
    storageRef.listAll().then(function (result) {
        result.items.forEach(function (urlFile) { document.getElementById("listFilesDoc").innerHTML += `${urlFile}  <br />`; });
    }).catch(function (error) { alert("No file chosen."); });

    var storageRef = firebase.storage().ref('Images/');
    storageRef.listAll().then(function (result) {
        result.items.forEach(function (urlFile) {
            document.getElementById("listFilesImages").innerHTML += `${urlFile}  <br />`;
        });
    }).catch(function (error) { alert("No file chosen."); });




};

showList();




var files = [];
document.getElementById("files").addEventListener("change", function (e) {
    files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        console.log(files[i]);
        console.log(files[i].type);
    }
});

document.getElementById("send").addEventListener("click", function () {

    if (files.length != 0) {

        for (let i = 0; i < files.length; i++) {

            if (files[i].type == "image/png") {

                var storage = firebase.storage().ref('Images/' + files[i].name);
                var upload = storage.put(files[i]);

                upload.on(
                    "state_changed",
                    function progress(snapshot) {
                        var percentage =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        document.getElementById("progress").value = percentage;
                    },

                    function error() {
                        alert("error uploading file");
                    },

                    function complete() {
                        document.getElementById(
                            "uploading"
                        ).innerHTML += `${files[i].name} upoaded <br />`;
                    }
                );
            }
            else {
                var storage = firebase.storage().ref('docs/' + files[i].name);
                var upload = storage.put(files[i]);

                upload.on(
                    "state_changed",
                    function progress(snapshot) {
                        var percentage =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        document.getElementById("progress").value = percentage;
                    },

                    function error() {
                        alert("error uploading file");
                    },

                    function complete() {
                        document.getElementById(
                            "uploading"
                        ).innerHTML += `${files[i].name} upoaded <br />`;
                    }
                );
            }

        }
    }
    else {
        alert("No file chosen");
    }

});


// function getFileUrl() {
//     //create a storage reference
//     var storage = firebase.storage().ref().listAll();

//     //get file url
//     storage
//       .getDownloadURL()
//       .then(function(url) {
//         console.log(url);
//       })
//       .catch(function(error) {
//         console.log("error encountered");
//       });
//   }
//   getFileUrl();