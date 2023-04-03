Six15's Intent Interface can be used with Velocity scripts to HUD enable Velocity TE projects.
Learn more about Six15's Intent Interface at:
https://six15.engineering/intent_interface/

# Custom Integration
Custom integrations allows you to design HUD screens based on Velocity TE Templates.

This requires extracting text from the terminal screen using the Velocity JavaScript based scripting API.
Then you can assemble that text into an Intent Interface "com.six15.hudservice.ACTION_SEND_TEXT" message which defines your screen.
This message can be broadcast to the Six15 Service application, which will show the image on the ST1.

In custom integrations each Velocity template in your project can have unique logic and a unique screen.

You can learn more about this process at:
https://six15.engineering/velocity/#writing-velocity-scripts-for-the-hud

# Smart Integration (with Velocity project)
Smart integration allows you to HUD enable a Velocity TE project without needing to write any JavaScript code. Instead, by linking Six15's pre-written "smart velocity" script your your "session" scope, Six15's script can automatically HUD enable your entire. You can see the source code for this script here:
https://github.com/Six15-Technologies/Velocity-TE-Example/blob/master/smart_integration/src/six15_smart_velocity.js

Internally, the script reads the entire terminal screen and send it to the Six15 service application using the Intent Interface's "com.six15.hudservice.ACTION_SEND_SCREEN" action.
The Six15 service applies logical processing to this textual information to convert it to HUD screens. Some steps of this processing (like keywords, ignore words, etc) can be configured using the "Six15 ST1" app.

# Smart Integration (without Velocity project)
Many Velocity project properties, like server IP address, port, login, password, etc, can be modified on-device in the Velocity app. With this flexibility a single Velocity project which contains the "smart velocity" script can be used for any deployment. Any other properties can be enabled after-the-fact.

With this in mind, the "Six15 ST1" app internally contains a copy of a "smart velocity" enabled project. The "Six15 ST1" app can automatically add this project to the Velocity app through a "android.intent.action.VIEW" intent containing a WLDEP file. This is done through the "Add Smart Six15 to Velocity" button in the "Six15 ST1" app.

An end-user can then use the Velocity app to modify the server IP, port, etc, properties on this project. When the project is run it will use the Intent Interface's "com.six15.hudservice.ACTION_SEND_SCREEN" action to HUD enable their deployment. Like before, the processing steps can be configured using the "Six15 ST1" app.
