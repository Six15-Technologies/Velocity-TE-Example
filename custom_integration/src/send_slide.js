function sendTextToHud(event) {
    // var body_color comes from parameter.
    // var body_text comes from parameter.

    // Send a broadcast to the HUD.
    Action.sendBroadcast({
        action: "com.six15.hudservice.ACTION_SEND_TEXT",
        extras: [
            { name: "text0", value: body_text, type: "string" },
            { name: "bg_color0", value: body_color, type: "string" },
        ]
    });
}
sendTextToHud();
WLEvent.on("ScreenUpdated", sendTextToHud);