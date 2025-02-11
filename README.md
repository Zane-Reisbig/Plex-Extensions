# Plex-Extensions
## For use with one of the "Custom JS Injector Browser Extensions©" i.e. TamperMonkey/GreaseMonkey/pasting in the js console everytime.<br/>

# Installation
## To install simply put the corresponding "index.js" file in a new Project as supported by your JS Injector.<br/>

<br/>

# Modules

<br/>

## Auto Skip Intro
See [index.ts](https://github.com/Zane-Reisbig/Plex-Extensions/blob/main/Auto-Skip-Intro/index.ts#L65) for the source.<br/>
See [CONFIG](https://github.com/Zane-Reisbig/Plex-Extensions/blob/8ddfd567ec7a621830d9c4e654ffc596acfc9c48/Auto-Skip-Intro/index.ts#L25) to change the timing settings.<br/>
There is an included built index.js, built with "tsc index.ts". You could also just strip the types, but IDK how to do that with tsc.<br/>
<br/>
Does just exactly that. Hooks a listener for the "Skip Intro" button, then clicks it.<br/>
Couldn't be simpler.<br/>
<br/>
## Other Tools TBA
