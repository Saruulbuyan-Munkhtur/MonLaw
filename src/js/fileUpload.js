

var storageRef = firebase.storage().ref('Images');
storageRef.listAll().then(function(result) {
result.items.forEach(function(imgRef) {
    imgRef.getDownloadURL().then(function(url){
        var imgLoc = document.getElementById('img-area');
        imgLoc.innerHTML += '<div id="imgContainer"><img id="imagesFromStorage" class="imgStorage" src=' +url+' ></div>';

        var imgsEl = document.getElementsByClassName("imgStorage");
         for(let i in imgsEl){

            imgsEl[i].addEventListener("click", function(){
                console.log(imgsEl[i].src);
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function(event) {
                    var blob = xhr.response;
                };
                xhr.open('GET', imgsEl[i].src);
                xhr.send();

                });
            };

        });
    });
});



var storageRefDoc = firebase.storage().ref('docs');
storageRefDoc.listAll().then(function(result) {
result.items.forEach(function(imgRef) {
    imgRef.getMetadata().then(function(url){
        var imgLoc = document.getElementById('listFiles');
        imgLoc.innerHTML += '<div id="docFileContainer"><img alt="'+url.name+'" id="imagesFromStorage" src="../../assets/file.png"><p>'+url.name+'</p></div>';
        });
    });
});






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


