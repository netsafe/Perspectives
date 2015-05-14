# The key goals

While I was examining the code, I saw that it's abit unstructured. Also the fact, that Chrome extensions are built on JavaScript too makes a sense in splitting functionality apart.

##So the goals are :
1. Split out the browser funcions. A separate object of type BrowserProto will be used to do the things :
1.1 Place the button
1.2 Get/Set properties


A BrowserInterface prototype object was placed in browser.js. It describes the basic abstraction interface for a host container, and the global instance is HostControllerInterface.
Firefox interface, and lately any other browsers, is placed in browsers/ folder and should be includet on top of the script stack after browser.js
