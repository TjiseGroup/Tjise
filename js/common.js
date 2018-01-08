window.onload=function(){
    document.body.setAttribute('style', 'margin: 0; border: 0; position: absolute; top: 0; width: 100%; overflow: hidden;');
    window.parent.postMessage(document.body.offsetHeight,'*');
}