//Stop Drag and Drop Function
 $(window).dblclick(
            function () {
                alert('stoped ');
    }            
);

//Show already added Data
$( document ).ready(function() {
    console.log( "ready!" );
    var url = document.URL;
    var url_id=url.split('/')
    var id=url_id[4]
    $.ajax({
        type: "GET",
        url:"/user/Survey-Design/"+id+"/",
        headers: { 'Authorization': "Token " + localStorage.access_token },
        data:{},
        success:function (result){
            var count=0
            $.each(result, function (index, value) {
                $(".data").append(
                "<div class='main' id='first"+count+"' data-id='first"+count+"' \
                style='position: relative; top: "+value.level_y+"px; left: "+value.level_x+"px;'> \
                <span id='delete'> Delete </span>\
                <p id='lebel'>"+value.lebel_data+"</p>\
                </div>\
                <div class='main' id='first1' data-id='first' style='position: relative; top: "+value.value_y+"px; left: "+value.value_x+"px; '>\
                <span id='delete'> Delete </span>\
                <div class='form-group'>\
                <input type='text' class='form-control' id='input'\
                placeholder='Imput your data'>\
                </div></div>");
                count++
                
                })
            }
        
    });
});

//drag and drop envent
var count = 0;
$(".draggable").on({
    dragstart: function(e) {
        $target = $(e.target);
        $target.addClass("dragging");
        e.originalEvent.dataTransfer.setData("text/html", $target.html());
    },
    dragend: function(e) {
        $(e.target).removeClass("dragging");
    }
});
$(".data").on({
    dragenter: function(e) {
        $(e.target).addClass("dropping");
    },
    dragover: function(e) {
        e.originalEvent.dataTransfer.dropEffect = "copy"; // "move", "link"
        return false;        
    },
    drop: function(e) {
        var $target = $(e.target);
        var dropText = "<div class='main' id='first"+count+"' data-id='first"+count+"'> <span  id='delete'> Delete </span>" + e.originalEvent.dataTransfer.getData("text/html") + "<div>";
            count++;
        $target.html($target.html() + "" + dropText);
    }
});
// Delete data
$('.data').on('click','#delete',function(){
    $(this).closest('div').remove();
});

//add level data to input box
var div_id
var div_id1
$('.data').on('click','#lebel',function(event){
    $('.edit_level').removeClass('hide')
    var val=$(this).closest('#lebel').text()
    $('#lavel_name_value').val(val)
    div_id=$(this).closest('div').attr('id')
    div_id1=$(this).closest('div').data('id')
  });

//save level data
function SaveData() {
// var level_name =$('#lavel_name_value').val()
    $('#'+div_id+'').find('#lebel').text($('#lavel_name_value').val())
    $('.edit_level').addClass('hide')
}


//moveable data
 $(".data").sortable({
        connectWith: '#delete-drop',
        revert: true,
    });
 
 $("#delete-drop").droppable({
    accept: '.data > div',
    activeClass: 'dropArea',
    hoverClass: 'dropAreaHover',
    drop: function(event, ui) {
        ui.draggable.remove();
    }
});

//Save Design Form

$('#submit').on('click',function(){
    var arr = [];
    var lebel_data=$('.main').find('#lebel').text()
    var input_data=$('.main').find('input').text()
    console.log(lebel_data,lebel_data)
    var url = document.URL;
    var url_id=url.split('/')
    var count = 1;
    var level_data=0;
    var input=0;
    var level_value;
    var level_x;
    var level_y;
    var offset = $('.data').offset();
    console.log(offset)
    $(".main").each(function(){
        var id = $(this).attr('id')
        var input_exist=$('#'+id+'').find('input') 
        var level=$('#'+id+'').find('#lebel')
        if((count %2 != 0) && (level[0]!=undefined))
        {
            var position = $(this).position();
            level_value= $('#'+id+'').find('#lebel').text()
            level_x= position.left;
            level_y= position.top;
            level_data++;
        }
        else if ((count % 2 == 0) &&  (input_exist[0] != undefined))
        {
            var position = $(this).position();
            input_x= position.left
            input_y= position.top 
            arr.push({
                    survey: url_id[4],
                    lebel_data:level_value,
                    level_x:level_x,
                    level_y:level_y,
                    value: $('#'+id+'').find('input').val(),
                    value_x:input_x,
                    value_y:input_y,
                });
            input++;
        }
        else{
            alert('Please Add value like Level and name');
            return false
        }
        count++;
    });
    if(level_data!=input){
        alert('please add Commbo value')
        return false
    }
    console.log(arr)
    console.log(url_id[4])
    $.ajax({
        type: "POST",
        url:"/user/Survey-Design/",
        headers: { 'Authorization': "Token " + localStorage.access_token },
        data:{'jsonformate':JSON.stringify(arr)},
        success:function (result){
        window.location.href= '/show-list/';
        }
    });
});


