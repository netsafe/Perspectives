/*
*   This file is part of the Perspectives Firefox Client
*
*   Copyright (C) 2011 Dan Wendlandt, 2015 Alexey Vesnin
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License as published by
*   the Free Software Foundation, version 3 of the License.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/



// Firefox interface
var FirefoxInterface = function() {
    BrowserInterface.call(this);
    this.version=1;
    this.root_prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
};
// instantiate properly
FirefoxInterface.prototype=Object.create(BrowserInterface.prototype);
FirefoxInterface.prototype.constructor=FirefoxInterface;
// and here are the methods :

FirefoxInterface.prototype.getProp = function(PropertyName) {
    var ret;
    if(typeof PropertyName === 'undefined'){
	this.log("Skipping undefined name in FF:getProp");
	return ret;
    }
    switch(this.root_prefs.getPrefType(PropertyName)){
	case this.root_prefs.PREF_INVALID :
	    return ret;
	    break;
	case this.root_prefs.PREF_STRING :
	    return this.root_prefs.getCharPref(PropertyName);
	case this.root_prefs.PREF_INT :
	    return this.root_prefs.getIntPref(PropertyName);
	case this.root_prefs.PREF_BOOL :
	    return this.root_prefs.getBoolPref(PropertyName);
    }
    return ret;
};

FirefoxInterface.prototype.setProp = function(PropertyName,PropertyValue) {
    if((typeof PropertyName === 'undefined')||(typeof PropertyValue === 'undefined')){
	this.log("Skipping undefined name or value in FF:setProp");
    } else {
	switch(typeof PropertyValue){
	    case 'string' :
		this.root_prefs.setCharPref(PropertyName,PropertyValue);
		break;
	    case 'number' :
		this.root_prefs.setIntPref(PropertyName,PropertyValue);
		break;
	    case 'boolean' :
		this.root_prefs.setBoolPref(PropertyName,PropertyValue);
		break;
	}
    }
};
