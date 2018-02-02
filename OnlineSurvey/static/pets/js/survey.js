$(document).on("submit", "#surveyform", function(event){
    event.preventDefault();
    var $this_ = $(this);
    var formData = $this_.serialize();
    $.ajax({
        url: "/user/save-survey-form/",
        type: "POST",
        headers: { 'Authorization': "Token " + localStorage.access_token },
        data: formData,

        success: function (data, status, xhr) {  
            
      
            if (status == 'success') {
                
                swal({
                  title: "Successfully Created",
                  text: "Pet Successfully created.",
                  type: "success", 
                  allowOutsideClick: false,
                  timer:2000,})

                }
                window.location.href= '/show-list/';
              },
              error: function (response, xhr, error) {
                  
              }
      });
});

