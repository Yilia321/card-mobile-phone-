(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

window.onload=function(){
    var p1=document.getElementById('p1');
    var p2=document.getElementById('p2');
    var p3=document.getElementById('p3');
    var music=document.getElementById('music');
    var audio=document.getElementsByTagName('audio')[0];

    //音乐播放完
    audio.addEventListener('ended',function(event){
        music.className='';
    },false);

    //点击碟片切换播放状态
    music.addEventListener('touchstart',function(event){
        if(audio.paused){
            audio.play();
            music.className='play';
        }else {
            audio.pause();
            music.className='';
        }
    },false);

    //第一页点击屏幕后
    p1.addEventListener('touchstart',function(event){
        var bg=document.createElement('div');
        bg.className='p2-bg';
        p2.appendChild(bg);
        p1.style.display='none';
        p2.style.display='block';
        p3.style.display='block';
        p3.style.top='100%';
        setTimeout(function(event){
            p2.className='p2 fadeOut';
            p3.className='p3 fadeIn';
            p2.removeChild(bg)
        },6500)
    },false)

};




