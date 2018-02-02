$(document).ready(function() {
    $.ajax({
        url: "/user/list/",
        type: "GET",
        headers: { 'Authorization': "Token " + localStorage.access_token },
        success: function (data, status, xhr) {  
            if (status == 'success') {
              $.each(data, function (index, value) {
                $(".results").append(
                    "<tr data-tr_id="+ value.id +">\
                    <td class='id'>"+ value.id +"</td>\
                    <td class='name'>"+ value.name +"</td>\
                    <td class='description'> "+ value.description +"</td>\
                    <td class='td7'><input type='button'  href='javascript:void(0) id ='del' class='btn-default delete' data-id="+value.id+" value=delete> \
                    <input type='button'  href='javascript:void(0) id ='del' class='btn-default create' data-id="+value.id+" value=Create></td>\
                       </tr>\
                      ");
                
                  })
                }
              // error: function (response, xhr, error) {
              //     }
              }
      });
});

$(document).on("click",".delete",function(){
  console.log($(this).data("id"))
  // console.log($(this).value()

 var id=$(this).data("id");
        $.ajax({
            type:"DELETE",
            url:"/user/list/"+ id+"/",
            data:{ 'id': id },
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success:function (result){
                
                },
                error: function(){},
        });
})
$(document).on("click",".create",function(){
    console.log($(this).data("id"))
    var id=$(this).data("id");
    window.location.href= "/survey/"+id+"/";
        // $.ajax({
        //   type:"GET",
        //   url:"/user/list/"+id+"/",
        //   data:{ 'id': id },
        //   contentType:"application/json; charset=utf-8",
        //   dataType:"json",
        //   success:function (result){
        //       },
        //       error: function(){},
        // });
})