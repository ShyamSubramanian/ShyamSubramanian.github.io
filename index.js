var scrolllistener = function(event){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("userinfodiv").className="shrink";
    } else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <= 1){
      document.getElementById("userinfodiv").className="";
    }
}

var expandcollapse = function(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].onclick= function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        }
    }
}

window.onload = function(event){
    document.getElementsByTagName('body')[0].onscroll = scrolllistener;
    expandcollapse()
}