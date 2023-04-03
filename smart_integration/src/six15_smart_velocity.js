Action.launch({
    package: "com.six15.st1_connect",
    class: "com.six15.intent_interface.IntentInterfaceActivity",
    action: "com.six15.hudservice.ACTION_START_INTENT_SERVICE",
});

var firstMessage = true;


function sendScreenToHud(event) {

    var lines = [];
    var i = 0;
    var empty_count = 0;
    //Loop through every line.
    //The API doesn't tell us how many there are, so go until we find 10 empty lines, or 100 total lines.
    //Every line, except for the ending empty lines, should add something to lines so the index matches the cursor position.
    while (i < 100 && empty_count < 10) {
        var line = Screen.getText(i, 0);
        var trimmedLine;
        if (line != null) {
            trimmedLine = line.trim();
        } else {
            line = ""
            trimmedLine = "";
        }
        var addLine = trimmedLine.length > 0;

        if (addLine) {
            for (var j = 0; j < empty_count; j++) {
                lines.push("");
            }
            empty_count = 0;
            lines.push(line);
        } else {
            empty_count = empty_count + 1;
        }
        i++;
    }
    var cursor = Screen.getCursorPosition();
    var cursor_row = 0;
    if (cursor != null) {
        cursor_row = cursor.row;
        while (cursor_row > lines.length - 1) {
            lines.push("");
        }
    }
    var extras = [{ name: "lines", value: lines, type: "string" }];
    var action = "com.six15.hudservice.ACTION_SEND_SCREEN";


    if (firstMessage) {
        Action.launch({
            package: "com.six15.st1_connect",
            class: "com.six15.intent_interface.IntentInterfaceActivity",
            action: action,
            extras: extras
        });
        firstMessage = false;
    } else {
        Action.sendBroadcast({
            action: action,
            extras: extras
        });
    }
}
sendScreenToHud();
WLEvent.on("ScreenUpdated", sendScreenToHud);