var scrolllistener = function(event){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("userinfodiv").className="shrink";
    } else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <= 1){
      document.getElementById("userinfodiv").className="";
    }
}

document.onload = function(event){
    document.getElementsByTagName('body').onscroll = scrolllistener;
}