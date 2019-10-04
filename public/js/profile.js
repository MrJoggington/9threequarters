var name = $("#username")

var API = {
    setUsername: function (name) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/profile",
            data: JSON.stringify(name)
        })
    }
}