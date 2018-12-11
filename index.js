var scrolllistener = function(event){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      document.getElementById("userinfodiv").className="shrink";
    } else if (document.body.scrollTop <= 1 || document.documentElement.scrollTop <= 1){
      document.getElementById("userinfodiv").className="";
    }
}

var attachEvents = function(){
    document.getElementById('edu').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('education').offsetTop
    }
    document.getElementById('cou').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('courses').offsetTop
    }
    document.getElementById('ski').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('skills').offsetTop
    }
    document.getElementById('exp').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('workexp').offsetTop
    }
    document.getElementById('cer').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('certi').offsetTop
    }
    document.getElementById('aca').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('projects').offsetTop
    }
    document.getElementById('con').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('contact').offsetTop
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
    attachEvents()
}