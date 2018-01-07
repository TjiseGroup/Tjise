window.onload=function(){
    document.body.style.margin=0;
    document.body.style.border=0;
    window.parent.postMessage(document.body.offsetHeight,'*');
    console.log(document.body.offsetHeight)
}