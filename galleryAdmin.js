var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd
} 
if(mm<10){
     mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date").setAttribute("max", today);
var obj={"images":[{"name":"joker1","url":"images/joker1.jpeg","information":"Joker in jail","updtedDate":"2019-10-03","id":"0"},
{"name":"joker1","url":"images/pic1.webp","information":"ElonMusk about failure","updtedDate":"2019-10-03","id":"1"},
{"name":"joker1","url":"images/elonmusk2.jpeg","information":"ElonMusk about steps","updtedDate":"2019-10-03","id":"2"},
{"name":"joker1","url":"images/elonmusk3.jpeg","information":"ElonMusk Being Persistent","updtedDate":"2019-10-03","id":"3"},
{"name":"joker1","url":"images/joker2.jpeg","information":"Joker after blast","updtedDate":"2019-10-03","id":"4"},
]};
images=obj.images;
var $=jQuery;
function setImages(){
var tableRef = document.getElementById('imageTable');
tableRef.innerHTML = "";
var tr,td;
$(document).ready(function(){
        $("img").click(function(){
        if(confirm("You cannot get imageno: "+image.index+" back after deleting"))
        {
            // deleteImage(4);
            deleteImage(image.index);
        }
        });
        });
        for(var i in images){
        var image = document.createElement("img");
        image.index=i;
        image.style.width="100%";
        image.style.height="100%";
        image.style.display="block";
        if(i%5 === 0){
            tr = tableRef.insertRow();
        }
        td  = tr.insertCell();
        image.src = images[i].url;
        td.appendChild(image);
        td.style.width="400px";
        td.style.height="300px";
        td.style.padding="3px";
        }
    }
setImages();
function add()
{
    if(document.getElementById("name").value==='' || document.getElementById("url").value==='' || document.getElementById("date").value===''){
        alert("please enter all the fields");
    }
    else{
        var name=document.getElementById("name").value;
        var url=document.getElementById("url").value;
        var info=document.getElementById("info").value;
        var date=document.getElementById("date").value;
        obj['images'].push({"name": name, "url" : url,"information": info, "updatedDate": date, "id":""});
        setImages();
        alert("Image added successfully");
    }   
}
function deleteImage(id){
//     console.log(id);
    for(var i in images){
      if(images[i].id == id ){
        console.log("Deleting image "+ id);
           delete images[i];
           break;
      }
    }
 
    setImages();
}
