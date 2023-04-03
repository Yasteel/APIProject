$(document).ready(function(){
    $(document).on('click', 'button.GetCountries', function(){
        showAlert("shit is working", 1);

        $.ajax({
            type: "GET",
            url: " https://restcountries.com/v3.1/all?fields=name",
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


    $(document).on('click', 'button.GetUsers', function(){
        showAlert("shit is working", 1);

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