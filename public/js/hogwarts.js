$(document).ready(function () {

    $.get("/api/hogwarts", function (data) {
        var row = $("<h1>");
        row.append("welcome to Hogwarts " + data);
        $("#welcome").prepend(row)
        console.log(data)
    })
})
