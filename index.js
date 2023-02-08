let currentId = "";

function showContent(id){
    //console.log(id);
    switch (id) {
        case "1":
          if(currentId=="3"){
            document.getElementById("experience").style.display = "";
            document.getElementById("3").style.textDecoration = "";
          }else if(currentId=="4"){
            document.getElementById("projects").style.display = "";
            document.getElementById("4").style.textDecoration = "";
          }
          document.getElementById("about").style.display = "block";
          document.getElementById("1").style.textDecoration = "underline";
          currentId = "1";
          break;
        case "3":
         if(currentId=="1"){
            document.getElementById("about").style.display = "";
            document.getElementById("1").style.textDecoration = "";
          }else if(currentId=="4"){
            document.getElementById("projects").style.display = "";
            document.getElementById("4").style.textDecoration = "";
          }
          document.getElementById("experience").style.display = "block";
          document.getElementById("3").style.textDecoration = "underline";
          currentId = "3";
          break;
        case "4":
         if(currentId=="1"){
            document.getElementById("about").style.display = "";
            document.getElementById("1").style.textDecoration = "";
          }else if(currentId=="3"){
            document.getElementById("experience").style.display = "";
            document.getElementById("3").style.textDecoration = "";
          }
            document.getElementById("projects").style.display = "block";
            document.getElementById("4").style.textDecoration = "underline";
            currentId = "4";
            break;
        default:
          console.log("???");
      }
}