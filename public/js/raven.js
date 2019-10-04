$("#post-submit").on("click", function (event) {
    event.preventDefault();

    // Make a newPost object
    var newPost = {
        title: $("#title").val().trim(),
        body: $("#body").val().trim(),
        createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    $.post("/api/ravenclaw", newPost)
        // On success, run the following code
        .then(function () {

            var row = $("<div>");
            row.addClass("well");

            row.append("<p>" + newPost.title + "  </p>");
            row.append("<p>" + newPost.body + "</p>");
            row.append("<p>At " + moment(newPost.createdAt).format("h:mma on dddd") + "</p>");

            $("#post-area").prepend(row);

        });

    // Empty each input box by replacing the value with an empty string
    $("#title").val("");
    $("#body").val("");
});


$.get("/api/ravenclaw", function (data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("well");

            row.append("<p>" + data[i].title + "</p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>At " + moment(data[i].createdAt).format("h:mma on dddd") +
                "</p>");

            $("#post-area").prepend(row);

        }

    }

})