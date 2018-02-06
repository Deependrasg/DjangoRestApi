
// logout
$('.logout-btn').on('click', function() { 

  $.ajax({
    url: "/user/logout/",
    type: "POST",
    headers: { 'Authorization': "Token " + localStorage.access_token },
    data: { "token": localStorage.access_token },
    success: function (response, status, xhr) {  
        console.log(response)
        if (response.status == 200) {
            console.log(response.message)
            window.localStorage.clear()
            window.location.href = "/";
      }

      else {
        alert("Invalid credientials ");    
      }
    },

    error: function (response, status) {
        window.localStorage.clear()
        window.location.href = "/";
       }
  });
 });
 


