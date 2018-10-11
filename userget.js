$().ready(() => {
    
    var url ="http://localhost:8080/Users/Get/2";

    //take the data and make sure it comes back
    console.log("it worked!")
    $.getJSON(url)
    .then((resp) => {
            console.log(resp);
            render(resp.data);
    });


});
// render is going to find the html with # and get a value and put it into an input box
// prop = property equivalent to attribute. check box equl to true on or off
// referencing user in all of you calls. the user in val is referencing the user in render
function render(user) {
    $("#pid").val(user.id);
    $("#pname").val(user.firstName + '' + user.lastName);
    $("#pusername").val(user.userName);
    $("#pphone").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);
    
    }
