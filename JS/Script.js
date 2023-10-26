var imgVisor = document.querySelector("#visor");
//imgVisor.src="img/Img0.gif";
var arrayImg=["Img0.gif","Img1.gif","Img2.gif","Img3.gif"]
var cont=1;
function siguiente (){
    if(cont<=arrayImg.length-1){
        imgVisor.src="img/"+arrayImg[cont];
        cont++;
    }
    
}
function ant(){
    
    if(cont>=0){
        cont--;
        imgVisor.src="img/"+arrayImg[cont];
        
    }
}