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


// BrowserInterface is a proto-class designed for interfacing with the host container, for now it's a browser :)
var BrowserInterface = function() {
    this.version=0;
};

BrowserInterface.prototype.log = function(message) {
    console.log("Perspectives: "+message);
};

BrowserInterface.prototype.getProp = function(PropertyName) {
    return;
};

BrowserInterface.prototype.setProp = function(PropertyName,PropertyValue) {
    return;
};


