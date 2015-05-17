/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
    "use strict";

    // Vars
    var fs = require('fs');

    fs.stat('.env', function (err) {
        if (!err) {
            fs.unlink('.env', function (err) {
                if (!err) {
                    console.log('Config file deleted successfully');
                } else {
                    console.log('Couldn\'t delete the config file');
                }
            });
        }
    });

}());
