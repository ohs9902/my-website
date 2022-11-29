let mainText = document.querySelector('#grid img');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value>500){
        mainText.style.animation="disappear 2s ease-out forwards";
    }else{
        mainText.style.animation="slide2 2s ease-out";
    }
});
let mainText2 = document.querySelector('#introduce');
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value>500){
        mainText2.style.animation="disappear2 2s ease-out forwards";
    }else{
        mainText2.style.animation="slide 2s ease-out";
    }
});
/*
var t = document.getElementById('target');
t.addEventListener('submit',function(event){
    if(document.getElementById('name').value.length===0){
        alert('입력하세요.');
        event.preventDefault();
    }
});
*/
var Links = {
    setColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
            alist[i].style.color = color;
            i++;
        }
    }
}
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');

    if(self.value==='night'){
        Body.setBackgroundColor('black')
        Body.setColor('white');
        self.value='day';

        Links.setColor('blue');                    
    }
    else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
        
        Links.setColor('powderblue');
    }
}
