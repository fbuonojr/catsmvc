var orm = require("../config/orm")

var cat = {
    all: function(cb) {
        orm.all("cats", function(res) {
            cb(res);
        });
    }
}