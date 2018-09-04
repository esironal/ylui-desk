/* 
 * YLUI-esironal
 * 
 * @description 
 * 
 * @system YLUI-esironal
 * @version 0.0.1
 * @requires system-runtime
 * 
 */

// uncomment this line if this system runs on node.js
// const runtime = require('system-runtime');

// uncomment this line to debug your system on node.js
// runtime.install('node_modules/system-runtime/extensions/mode-admin-server.json');

runtime.require('logger').level('debug');

/**
 * System YLUI-esironal
 * @system
 */
runtime.system({
	"_id": "b1f82816b231a17c",
	"name": "YLUI-esironal",
	"version": "0.0.1",
	"description": ""
});


// Schemas, models and types creation


/**
 * Schema Config
 * @schema
 */
runtime.require('metamodel').schema({
	"_id": "c1a87f1d1351281d",
	"_name": "Config",
	"_inherit": [],
	"configs": "property",
	"apps": "property",
	"shortcuts": "collection",
	"tiles": "collection",
	"startMenu": "property"
});

/**
 * Model Config
 * @model
 */
runtime.require('metamodel').model({
	"_id": "e11837111c31b0db",
	"_name": "Config",
	"_description": "",
	"configs": {
		"description": "",
		"type": "configs",
		"readOnly": false,
		"mandatory": false,
		"default": {}
	},
	"apps": {
		"description": "",
		"type": "apps",
		"readOnly": false,
		"mandatory": false,
		"default": {}
	},
	"shortcuts": {
		"description": "",
		"type": [
			"shortcuts"
		],
		"readOnly": false,
		"mandatory": false,
		"default": []
	},
	"tiles": {
		"description": "",
		"type": [
			"tiles"
		],
		"readOnly": false,
		"mandatory": false,
		"default": []
	},
	"startMenu": {
		"description": "",
		"type": "startMenu",
		"readOnly": false,
		"mandatory": false,
		"default": {}
	}
});

/**
 * Type app_171
 * @type
 */
runtime.require('metamodel').type({
	"_id": "e1451511daa101a2",
	"name": "app_171",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_6",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_9",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_9",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type configs
 * @type
 */
runtime.require('metamodel').type({
	"_id": "i1aa5e159451dc48",
	"name": "configs",
	"description": "",
	"type": "object",
	"schema": {
		"topTaskBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"sound": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"wallpaper": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"wallpaperBlur": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"wallpaperSlide": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"wallpaperSlideRandom": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"wallpaperSlideItv": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"wallpaperSlideTime": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"wallpaperSlideIndex": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"openMax": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"idCounter": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"themeColor": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"autoThemeColor": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"wallpapers": {
			"mandatory": false,
			"type": [
				"wallpapers"
			],
			"default": []
		},
		"pathRes": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"shortcutsSortAuto": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"debug": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"winBlur": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type apps
 * @type
 */
runtime.require('metamodel').type({
	"_id": "z1e51619e871cf26",
	"name": "apps",
	"description": "",
	"type": "object",
	"schema": {
		"yl_system": {
			"type": "yl_system",
			"mandatory": false,
			"default": {}
		},
		"yl_color_picker": {
			"type": "yl_color_picker",
			"mandatory": false,
			"default": {}
		},
		"yl_browser": {
			"type": "yl_browser",
			"mandatory": false,
			"default": {}
		},
		"yl_app_store": {
			"type": "yl_app_store",
			"mandatory": false,
			"default": {}
		},
		"yl_app_home": {
			"type": "yl_app_home",
			"mandatory": false,
			"default": {}
		},
		"yl_server": {
			"type": "yl_server",
			"mandatory": false,
			"default": {}
		},
		"app_152": {
			"type": "app_152",
			"mandatory": false,
			"default": {}
		},
		"app_154": {
			"type": "app_154",
			"mandatory": false,
			"default": {}
		},
		"app_160": {
			"type": "app_160",
			"mandatory": false,
			"default": {}
		},
		"app_161": {
			"type": "app_161",
			"mandatory": false,
			"default": {}
		},
		"app_167": {
			"type": "app_167",
			"mandatory": false,
			"default": {}
		},
		"app_168": {
			"type": "app_168",
			"mandatory": false,
			"default": {}
		},
		"app_169": {
			"type": "app_169",
			"mandatory": false,
			"default": {}
		},
		"app_170": {
			"type": "app_170",
			"mandatory": false,
			"default": {}
		},
		"app_171": {
			"type": "app_171",
			"mandatory": false,
			"default": {}
		},
		"app_172": {
			"type": "app_172",
			"mandatory": false,
			"default": {}
		},
		"app_173": {
			"type": "app_173",
			"mandatory": false,
			"default": {}
		},
		"app_174": {
			"type": "app_174",
			"mandatory": false,
			"default": {}
		},
		"app_175": {
			"type": "app_175",
			"mandatory": false,
			"default": {}
		},
		"app_176": {
			"type": "app_176",
			"mandatory": false,
			"default": {}
		},
		"app_177": {
			"type": "app_177",
			"mandatory": false,
			"default": {}
		},
		"app_178": {
			"type": "app_178",
			"mandatory": false,
			"default": {}
		},
		"app_179": {
			"type": "app_179",
			"mandatory": false,
			"default": {}
		},
		"app_180": {
			"type": "app_180",
			"mandatory": false,
			"default": {}
		},
		"app_181": {
			"type": "app_181",
			"mandatory": false,
			"default": {}
		},
		"app_182": {
			"type": "app_182",
			"mandatory": false,
			"default": {}
		},
		"app_183": {
			"type": "app_183",
			"mandatory": false,
			"default": {}
		},
		"app_184": {
			"type": "app_184",
			"mandatory": false,
			"default": {}
		}
	}
});

/**
 * Type app_184
 * @type
 */
runtime.require('metamodel').type({
	"_id": "m1cba21d1dd19fbb",
	"name": "app_184",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_4",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_6",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_1",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_183
 * @type
 */
runtime.require('metamodel').type({
	"_id": "b14d161a4f810015",
	"name": "app_183",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_3",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_10",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_10",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_182
 * @type
 */
runtime.require('metamodel').type({
	"_id": "b1253e18ea01d1f7",
	"name": "app_182",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_3",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_6",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_4",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_181
 * @type
 */
runtime.require('metamodel').type({
	"_id": "b168491cde2144c3",
	"name": "app_181",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_2",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_4",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_1",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_180
 * @type
 */
runtime.require('metamodel').type({
	"_id": "e1c5301e015184f3",
	"name": "app_180",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_10",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_10",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_6",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_179
 * @type
 */
runtime.require('metamodel').type({
	"_id": "h132a918af51c1ac",
	"name": "app_179",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_1",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_2",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_3",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_178
 * @type
 */
runtime.require('metamodel').type({
	"_id": "o1133c1ee8f140e0",
	"name": "app_178",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_1",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_1",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_8",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_177
 * @type
 */
runtime.require('metamodel').type({
	"_id": "r1640c1204c19db6",
	"name": "app_177",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_3",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_2",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_10",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_176
 * @type
 */
runtime.require('metamodel').type({
	"_id": "j1fe611b6d719b70",
	"name": "app_176",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_4",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_5",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_8",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_175
 * @type
 */
runtime.require('metamodel').type({
	"_id": "y1f774185721c46f",
	"name": "app_175",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_8",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_4",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_0",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_174
 * @type
 */
runtime.require('metamodel').type({
	"_id": "f1282014f651cbb8",
	"name": "app_174",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_5",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_5",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_2",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_173
 * @type
 */
runtime.require('metamodel').type({
	"_id": "k198ed13b3a1fd08",
	"name": "app_173",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_1",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_1",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_6",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_172
 * @type
 */
runtime.require('metamodel').type({
	"_id": "u1880d182fd159d2",
	"name": "app_172",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_8",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_2",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_3",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_170
 * @type
 */
runtime.require('metamodel').type({
	"_id": "o11a6318be3145db",
	"name": "app_170",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_7",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_0",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_8",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_169
 * @type
 */
runtime.require('metamodel').type({
	"_id": "l15b1313c8710c68",
	"name": "app_169",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_5",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_3",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_6",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_168
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g1a41813c281109e",
	"name": "app_168",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_6",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_0",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_4",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_167
 * @type
 */
runtime.require('metamodel').type({
	"_id": "s1fa2716989167cb",
	"name": "app_167",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_4",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_7",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_0",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_161
 * @type
 */
runtime.require('metamodel').type({
	"_id": "m1150c1819c1b55e",
	"name": "app_161",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_3",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_9",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_8",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_160
 * @type
 */
runtime.require('metamodel').type({
	"_id": "l15c6c10ebf140dc",
	"name": "app_160",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_8",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_1",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_6",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_154
 * @type
 */
runtime.require('metamodel').type({
	"_id": "v124d81f5481b746",
	"name": "app_154",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_5",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_7",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_9",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type app_152
 * @type
 */
runtime.require('metamodel').type({
	"_id": "y179c81ad5c193d4",
	"name": "app_152",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_0",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_4",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_6",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type yl_color_picker
 * @type
 */
runtime.require('metamodel').type({
	"_id": "v17da51b6931bb1d",
	"name": "yl_color_picker",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_4",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_1",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_1",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type icon_0
 * @type
 */
runtime.require('metamodel').type({
	"_id": "p12c2c15e481d75b",
	"name": "icon_0",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type data
 * @type
 */
runtime.require('metamodel').type({
	"_id": "u1bf9f176ba10f2b",
	"name": "data",
	"description": "",
	"type": "object",
	"schema": {
		"x": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"y": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"w": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"h": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"i": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon
 * @type
 */
runtime.require('metamodel').type({
	"_id": "y1b50e1439418252",
	"name": "icon",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_10
 * @type
 */
runtime.require('metamodel').type({
	"_id": "p1f25d1a16d1496d",
	"name": "position_10",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_5
 * @type
 */
runtime.require('metamodel').type({
	"_id": "e171b111b7a15ca0",
	"name": "icon_5",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_10
 * @type
 */
runtime.require('metamodel').type({
	"_id": "a1981d1f1b710d5c",
	"name": "icon_10",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_4
 * @type
 */
runtime.require('metamodel').type({
	"_id": "y1eaa71335d1238a",
	"name": "icon_4",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_2
 * @type
 */
runtime.require('metamodel').type({
	"_id": "s1c77b1d1ab1554f",
	"name": "icon_2",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_1
 * @type
 */
runtime.require('metamodel').type({
	"_id": "l199aa1d20618a8c",
	"name": "icon_1",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_3
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g173dd1cb731f09c",
	"name": "icon_3",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type yl_system
 * @type
 */
runtime.require('metamodel').type({
	"_id": "k108f61d4af102ed",
	"name": "yl_system",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type itemPushed_195
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g1b7bc104af15af6",
	"name": "itemPushed_195",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_7",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_193
 * @type
 */
runtime.require('metamodel').type({
	"_id": "j14a8b10f6f16227",
	"name": "itemPushed_193",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_7",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_189
 * @type
 */
runtime.require('metamodel').type({
	"_id": "s1c64d133b9107f9",
	"name": "itemPushed_189",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_2",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_6
 * @type
 */
runtime.require('metamodel').type({
	"_id": "t16ee4135a714569",
	"name": "icon_6",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_185
 * @type
 */
runtime.require('metamodel').type({
	"_id": "r1b99d10b0c1501c",
	"name": "itemPushed_185",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_4",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_165
 * @type
 */
runtime.require('metamodel').type({
	"_id": "j127841c5511a28c",
	"name": "itemPushed_165",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_10",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_162
 * @type
 */
runtime.require('metamodel').type({
	"_id": "l17ec11f2ad15ce4",
	"name": "itemPushed_162",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_9",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_155
 * @type
 */
runtime.require('metamodel').type({
	"_id": "j1cb7f16a4411714",
	"name": "itemPushed_155",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_5",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_153
 * @type
 */
runtime.require('metamodel').type({
	"_id": "r1dfdc1bfd51a133",
	"name": "itemPushed_153",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_2",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_7
 * @type
 */
runtime.require('metamodel').type({
	"_id": "t1b74d14c6c17d81",
	"name": "icon_7",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_9
 * @type
 */
runtime.require('metamodel').type({
	"_id": "m1287d18b0e139e1",
	"name": "icon_9",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type icon_8
 * @type
 */
runtime.require('metamodel').type({
	"_id": "c198561d2361517b",
	"name": "icon_8",
	"description": "",
	"type": "object",
	"schema": {
		"type": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"content": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"bg": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type startMenu
 * @type
 */
runtime.require('metamodel').type({
	"_id": "b1b59b147c012798",
	"name": "startMenu",
	"description": "",
	"type": "object",
	"schema": {
		"width": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"height": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"sidebar": {
			"mandatory": false,
			"type": [
				"sidebar"
			],
			"default": []
		},
		"menu": {
			"type": "menu",
			"mandatory": false,
			"default": {}
		}
	}
});

/**
 * Type position_2
 * @type
 */
runtime.require('metamodel').type({
	"_id": "z180fd17ca51530e",
	"name": "position_2",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type params_4
 * @type
 */
runtime.require('metamodel').type({
	"_id": "z196211657d1a221",
	"name": "params_4",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type position_0
 * @type
 */
runtime.require('metamodel').type({
	"_id": "b108f41039f1bd75",
	"name": "position_0",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type params_10
 * @type
 */
runtime.require('metamodel').type({
	"_id": "a177901c7bc1932c",
	"name": "params_10",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type params_5
 * @type
 */
runtime.require('metamodel').type({
	"_id": "o1e40e1b5e712b02",
	"name": "params_5",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type params_2
 * @type
 */
runtime.require('metamodel').type({
	"_id": "p1d7391e7051ce1f",
	"name": "params_2",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type params_9
 * @type
 */
runtime.require('metamodel').type({
	"_id": "o110161090917fb0",
	"name": "params_9",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type position_1
 * @type
 */
runtime.require('metamodel').type({
	"_id": "w1b41e1bcc31cf9c",
	"name": "position_1",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type itemPushed_88
 * @type
 */
runtime.require('metamodel').type({
	"_id": "e1fa171545319aeb",
	"name": "itemPushed_88",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_9",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type params_3
 * @type
 */
runtime.require('metamodel').type({
	"_id": "o1fcc119c21101cb",
	"name": "params_3",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type itemPushed_96
 * @type
 */
runtime.require('metamodel').type({
	"_id": "f1fd32195351b197",
	"name": "itemPushed_96",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_3",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type params_7
 * @type
 */
runtime.require('metamodel').type({
	"_id": "c1b049143141b994",
	"name": "params_7",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type itemPushed_89
 * @type
 */
runtime.require('metamodel').type({
	"_id": "f180bf1dd2018804",
	"name": "itemPushed_89",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params_7",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position
 * @type
 */
runtime.require('metamodel').type({
	"_id": "f1d8b51b3311bdf9",
	"name": "position",
	"description": "",
	"type": "object",
	"schema": {
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type params
 * @type
 */
runtime.require('metamodel').type({
	"_id": "r1c57c1ef501af92",
	"name": "params",
	"description": "",
	"type": "object",
	"schema": {}
});

/**
 * Type itemPushed_85
 * @type
 */
runtime.require('metamodel').type({
	"_id": "i14ee41e3561b194",
	"name": "itemPushed_85",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"params": {
			"type": "params",
			"mandatory": false,
			"default": {}
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type menu
 * @type
 */
runtime.require('metamodel').type({
	"_id": "n166171428b111b6",
	"name": "menu",
	"description": "",
	"type": "object",
	"schema": {
		"itemPushed_85": {
			"type": "itemPushed_85",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_89": {
			"type": "itemPushed_89",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_96": {
			"type": "itemPushed_96",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_88": {
			"type": "itemPushed_88",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_153": {
			"type": "itemPushed_153",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_155": {
			"type": "itemPushed_155",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_162": {
			"type": "itemPushed_162",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_165": {
			"type": "itemPushed_165",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_185": {
			"type": "itemPushed_185",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_189": {
			"type": "itemPushed_189",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_193": {
			"type": "itemPushed_193",
			"mandatory": false,
			"default": {}
		},
		"itemPushed_195": {
			"type": "itemPushed_195",
			"mandatory": false,
			"default": {}
		}
	}
});

/**
 * Type yl_server
 * @type
 */
runtime.require('metamodel').type({
	"_id": "p1442c1470a15d88",
	"name": "yl_server",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_9",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_6",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_1",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type size_8
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g161b71a3401d6a2",
	"name": "size_8",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size_0
 * @type
 */
runtime.require('metamodel').type({
	"_id": "n1a94a1ab0d194e1",
	"name": "size_0",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size_6
 * @type
 */
runtime.require('metamodel').type({
	"_id": "i172de1e9191ca47",
	"name": "size_6",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"width": {
			"type": "number",
			"mandatory": false,
			"default": 0
		}
	}
});

/**
 * Type size_3
 * @type
 */
runtime.require('metamodel').type({
	"_id": "v1418416ec815489",
	"name": "size_3",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type sidebar
 * @type
 */
runtime.require('metamodel').type({
	"_id": "h160b717d1c16970",
	"name": "sidebar",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type shortcuts
 * @type
 */
runtime.require('metamodel').type({
	"_id": "n16e7c13d911910d",
	"name": "shortcuts",
	"description": "",
	"type": "object",
	"schema": {
		"app": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"hash": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"style": {
			"type": "style",
			"mandatory": false,
			"default": {}
		}
	}
});

/**
 * Type size_10
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g1f13c1d47f1d2b6",
	"name": "size_10",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size_7
 * @type
 */
runtime.require('metamodel').type({
	"_id": "w1b3c7123d91f3fa",
	"name": "size_7",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size
 * @type
 */
runtime.require('metamodel').type({
	"_id": "u155931046b1fe7f",
	"name": "size",
	"description": "",
	"type": "object",
	"schema": {
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_7
 * @type
 */
runtime.require('metamodel').type({
	"_id": "m172c61756a10e86",
	"name": "position_7",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_6
 * @type
 */
runtime.require('metamodel').type({
	"_id": "s142f710cdd13b97",
	"name": "position_6",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_4
 * @type
 */
runtime.require('metamodel').type({
	"_id": "q189491039d1ca53",
	"name": "position_4",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_8
 * @type
 */
runtime.require('metamodel').type({
	"_id": "n18c6b125ce197fe",
	"name": "position_8",
	"description": "",
	"type": "object",
	"schema": {
		"x": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"y": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type size_1
 * @type
 */
runtime.require('metamodel').type({
	"_id": "n17af8132d01986a",
	"name": "size_1",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_9
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g17e3716ba316c34",
	"name": "position_9",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_5
 * @type
 */
runtime.require('metamodel').type({
	"_id": "r1b0691d66f1e41d",
	"name": "position_5",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type position_3
 * @type
 */
runtime.require('metamodel').type({
	"_id": "c1d2ca150cc1eec3",
	"name": "position_3",
	"description": "",
	"type": "object",
	"schema": {
		"autoOffset": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"left": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"top": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"x": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"y": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size_4
 * @type
 */
runtime.require('metamodel').type({
	"_id": "s161c5108e31e1a9",
	"name": "size_4",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size_2
 * @type
 */
runtime.require('metamodel').type({
	"_id": "b1272c1aed81d1a7",
	"name": "size_2",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type size_9
 * @type
 */
runtime.require('metamodel').type({
	"_id": "v1b368159a510d87",
	"name": "size_9",
	"description": "",
	"type": "object",
	"schema": {
		"height": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"width": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type style
 * @type
 */
runtime.require('metamodel').type({
	"_id": "t13f831230a1c127",
	"name": "style",
	"description": "",
	"type": "object",
	"schema": {
		"position": {
			"type": "position_8",
			"mandatory": false,
			"default": {}
		},
		"size": {
			"type": "size_6",
			"mandatory": false,
			"default": {}
		}
	}
});

/**
 * Type tiles
 * @type
 */
runtime.require('metamodel').type({
	"_id": "o1b3c911b4c1e0a2",
	"name": "tiles",
	"description": "",
	"type": "object",
	"schema": {
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"data": {
			"mandatory": false,
			"type": [
				"data"
			],
			"default": []
		}
	}
});

/**
 * Type wallpapers
 * @type
 */
runtime.require('metamodel').type({
	"_id": "s154b51c654126e7",
	"name": "wallpapers",
	"description": "",
	"type": "object",
	"schema": {
		"image": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"preview": {
			"type": "string",
			"mandatory": false,
			"default": ""
		}
	}
});

/**
 * Type yl_app_home
 * @type
 */
runtime.require('metamodel').type({
	"_id": "q1ebfe1e415131d3",
	"name": "yl_app_home",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_1",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_1",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_10",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type yl_app_store
 * @type
 */
runtime.require('metamodel').type({
	"_id": "g129ac115d61c42c",
	"name": "yl_app_store",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_4",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_9",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_2",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

/**
 * Type yl_browser
 * @type
 */
runtime.require('metamodel').type({
	"_id": "f1dbd612acd17a6d",
	"name": "yl_browser",
	"description": "",
	"type": "object",
	"schema": {
		"addressBar": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"autoRun": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"background": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"badge": {
			"type": "number",
			"mandatory": false,
			"default": 0
		},
		"desc": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"icon": {
			"type": "icon_2",
			"mandatory": false,
			"default": {}
		},
		"openMode": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"plugin": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"position": {
			"type": "position_6",
			"mandatory": false,
			"default": {}
		},
		"version": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"poweredBy": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"resizable": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"single": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		},
		"size": {
			"type": "size_7",
			"mandatory": false,
			"default": {}
		},
		"title": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"url": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"customTile": {
			"type": "string",
			"mandatory": false,
			"default": ""
		},
		"urlRandomToken": {
			"type": "boolean",
			"mandatory": false,
			"default": false
		}
	}
});

runtime.require('metamodel').create();


// Components creation


/**
 * Component h16aba18f9610f85
 * @component
 */
new (runtime.require('Config'))({
	"_id": "h16aba18f9610f85",
	"apps": {},
	"configs": {},
	"shortcuts": [],
	"startMenu": {},
	"tiles": []
});


// Behaviors creation


// system behaviors

/**
 * @method start
 */
runtime.system().on('start', function start() { 
  
});

// Start the system
runtime.system().start();
