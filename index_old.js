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
        if(document.getElementById('education').children[0].classList.contains('active')==false){
            document.getElementById('education').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('education').children[0].nextElementSibling)
        }
    }
    document.getElementById('cou').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('courses').offsetTop
        if(document.getElementById('courses').children[0].classList.contains('active')==false){
            document.getElementById('courses').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('courses').children[0].nextElementSibling)
        }
    }
    document.getElementById('ski').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('skills').offsetTop
        if(document.getElementById('skills').children[0].classList.contains('active')==false){
            document.getElementById('skills').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('skills').children[0].nextElementSibling)
        }
    }
    document.getElementById('exp').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('workexp').offsetTop
        if(document.getElementById('workexp').children[0].classList.contains('active')==false){
            document.getElementById('workexp').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('workexp').children[0].nextElementSibling)
        }
    }
    document.getElementById('cer').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('certi').offsetTop
        if(document.getElementById('certi').children[0].classList.contains('active')==false){
            document.getElementById('certi').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('certi').children[0].nextElementSibling)
        }
    }
    document.getElementById('aca').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('projects').offsetTop
        if(document.getElementById('projects').children[0].classList.contains('active')==false){
            document.getElementById('projects').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('projects').children[0].nextElementSibling)
        }
    }
    document.getElementById('con').onclick = function(){
        document.getElementsByTagName('body')[0].scrollTop = 102 + document.getElementById('contact').offsetTop
        if(document.getElementById('contact').children[0].classList.contains('active')==false){
            document.getElementById('contact').children[0].classList.toggle('active')
            setheightforexpandcollapse(document.getElementById('contact').children[0].nextElementSibling)
        }
    }
}

var setheightforexpandcollapse = function(content){
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
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
    setparticles()
}