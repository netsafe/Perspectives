# The key goals
While I was examining the code, I saw that it's abit unstructured. Also the fact, that Chrome extensions are built on JavaScript too makes a sense in splitting functionality apart.
So the goals are :
1. Split out the browser funcions. A separate object of type BrowserProto will be used to do the things :
1.1 Place the button
1.2 Get/Set properties
