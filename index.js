var scrolllistener = function(event){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("userinfodiv").className="shrink";
    } else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <= 1){
      document.getElementById("userinfodiv").className="";
    }
}

window.onload = function(event){
    setTimeout(() => {
        document.getElementsByTagName('body')[0].onscroll = scrolllistener;
    }, 500);
}