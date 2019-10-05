$("#post-submit").on("click", function (event) {
    event.preventDefault();

    // Make a newPost object
    var newPost = {
        title: $("#title").val().trim(),
        body: $("#body").val().trim(),
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    $.post("/api/gryffindor", newPost)
        // On success, run the following code
        .then(function (results) {
            console.log(results)
            var row = $("<div>");
            row.addClass("post");
            row.attr("style", "border: 1px solid black;")
            row.append("<p style='font-weight: bold'>" + newPost.title + "</p>");
            row.append("<p>" + newPost.body + "</p>");
            row.append("<p>Posted " + moment(data[i].createdAt).format("h:mma on dddd") + " by " + data[i].User.username + "</p>");

            $("#post-area").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#title").val("");
    $("#body").val("");
});


$.get("/api/gryffindor", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("post");
            row.attr("style", "border: 1px solid black;")
            row.append("<p style='font-weight: bold'>" + data[i].title + "</p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>Posted " + moment(data[i].createdAt).format("h:mma on dddd") + " by " + data[i].User.username + "</p>");

            $("#post-area").prepend(row);

        }


    }

})
