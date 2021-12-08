Ok, so first off you need the "#!/usr/bin/env node" text in the index.js file. I know he said (and showed on the slide)
 you don't need it but you do.
Next you need to run "npm link" in the terminal like he does. THEN you need to run "npm link list".
This will generate a /node_modules folder inside your link directory.
Then you need to go inside the /node_modules folder, then inside you will see a .bin folder. Copy the location of this folder.
You have to include that .bin folder path to your system variables.
Go to: Control Panel -> System -> Advanced System Settings -> Environment Variables.
In the System Variables Window find path and click on edit.
In the Edit environment variable Window click new, paste the path and click ok.
Now it should work, if it doesn't just restart your VS Code and that should get it working.



EDIT: I just found a better way that will actually not break the link occasionally.
Add the path C:\Users\Zaron\AppData\Roaming\npm\ (replace Zaron with your username)
to the environment variables instead of the path to the node_modules/bin folder.
All other steps are the same. I don't know why I couldn't find this solution online
but the "npm link" and "npm link list"creates a symbolic link to this location,
so adding this to your path will allow it to run every time reliably
