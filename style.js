const live = document.querySelector("#newcam");
const photos= navigator.mediaDevices.getUserMedia;

if(photos){
    try{
        navigator.mediaDevices.getUserMedia({
            video:true,
            audio:true
        })
        .then(function(sharif){
            live.srcObject = sharif;
        })
    }catch(error){
        console.log(error)
    }
}