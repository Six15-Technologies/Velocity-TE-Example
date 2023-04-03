function sendTextToHud(event) {
    // var title_color comes from parameter.
    // var title_text comes from parameter.

    // Read the string value of the id
    // getTextById() often returns strings with trailing spaces. The phone UI removes them automatically, so we do too.
    var body_text_str = ModernScreen.getTextById(body_text_id).trim();
    var footer_text_str = ModernScreen.getTextById(footer_text_id).trim();


    // Send a broadcast to the HUD.
    Action.sendBroadcast({
        action: "com.six15.hudservice.ACTION_SEND_TEXT",
        extras: [
            { name: "text0", value: title_text, type: "string" },
            { name: "bg_color0", value: title_color, type: "string" },
            { name: "weight0", value: "1", type: "string" },

            { name: "text1", value: body_text_str, type: "string" },
            { name: "weight1", value: "2", type: "string" },

            { name: "text2", value: footer_text_str, type: "string" },
            { name: "weight2", value: "1", type: "string" },
        ]
    });
}
sendTextToHud();
WLEvent.on("ScreenUpdated", sendTextToHud);