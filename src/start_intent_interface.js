Action.launch({
    package: "com.six15.st1_connect",
    class: "com.six15.intent_interface.IntentInterfaceActivity",
    action: "com.six15.hudservice.ACTION_SEND_TEXT",
    extras: [
        { name: "text0", value: "", type: "string" },
        { name: "text1", value: "Six15 Intent Interface", type: "string" },
        { name: "text2", value: "starting from Velocity", type: "string" },
        { name: "text3", value: "", type: "string" },
    ]
});