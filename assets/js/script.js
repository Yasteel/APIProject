$(document).ready(function(){
    $(document).on('click', 'a.GetCountries', function(){

        $.ajax({
            type: "GET",
            url: " https://restcountries.com/v3.1/all?fields=name",
            dataType: "json",
            success: function (result, status, xhr) {
               showAlert("Success", 1);
            },
            error: function (xhr, status, error) {
                showAlert(`Result:  ${status} ${error} ${xhr.status} ${xhr.statusText}`, 2);
            }
        })
        .done((data) => {
            console.log(data);
        });
    });


    $(document).on('click', 'a.GetUsers', function(){

        $.ajax({
            type: "GET",
            url: "https://dummyjson.com/users/",
            dataType: "json",
            success: function (result, status, xhr) {
               showAlert("Success", 1);
               console.log(result);
            },
            error: function (xhr, status, error) {
                showAlert(`Result:  ${status} ${error} ${xhr.status} ${xhr.statusText}`, 2);
            }
        });
    });
});