/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"rbx.107.stuexe/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});