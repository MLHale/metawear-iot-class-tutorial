cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ble-central/www/ble.js",
        "id": "cordova-plugin-ble-central.ble",
        "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
            "ble"
        ]
    },
    {
        "file": "plugins/com.lisaseacat.metawear/www/metawear.js",
        "id": "com.lisaseacat.metawear.metawear",
        "pluginId": "com.lisaseacat.metawear",
        "clobbers": [
            "metawear"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-ble-central": "1.0.4",
    "com.lisaseacat.metawear": "0.0.2"
}
// BOTTOM OF METADATA
});