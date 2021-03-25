
$(document).on('mousemove',function (eventOb){
    $('#star').css({
        'position':'absolute',
        'left':eventOb.pageX,
        'top':eventOb.pageY
    });
});


$('#wholeThing').on('click',function(){
    $('#star').val();
});

const cursor=document.getElementById('cursor');
document.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.pageX+'px';
    cursor.style.top=e.pageY+'px';

    }
)