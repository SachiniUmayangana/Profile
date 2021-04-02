
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


const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
        cursor.style.left=e.pageX+'px';
        cursor.style.top=e.pageY+'px';
    }
);
function toggleCheck() {
    if(document.getElementById("myCheckbox").checked === true){
        document.getElementById("wholeThing").style.background = "274659";
    }
    else {
        document.getElementById("wholeThing").style.background = "#20202A";
        document.getElementById("AboutMe").style.background = "#20202A";
        document.getElementById("all").style.background = "#20202A";
        document.getElementById("Skills").style.background = "#20202A";
        document.getElementById("projects").style.background = "#20202A";
        document.getElementById("pro").style.background = "#20202A";
        document.getElementById("h4AboutMe").style.color = "#A0AAB3";
        document.getElementById("SAchini").style.color = "#A0AAB3";
        document.getElementById("leftSideDiv").style.background = "#20202A";
        document.getElementById("leftSideDiv").style.border = "white";
        document.getElementById("education").style.background = "#20202A";
        document.getElementById("Assignments").style.background = "#20202A";
        document.getElementById("text").style.background = "#20202A";
        document.getElementById("text1").style.background = "#20202A";
        document.getElementById("footer").style.background = "#20202A";
        document.getElementById("ccc").style.background = "#20202A";
        document.getElementById("row").style.background = "#20202A";
    }
}

$('#pro2').on('mousemove',function (){
    // alert('moving')
    $('.style2').css('height','220px');
});
