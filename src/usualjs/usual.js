"use strict"

function Usual(){

}

Usual.prototype.isDate = function (txtDate){
        var currVal = txtDate;
        if(currVal == '')
            return false;
  
        var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; 
        var dtArray = currVal.match(rxDatePattern); 

        if (dtArray == null)
            return false;
 
        var dtMonth = dtArray[3];
        var dtDay= dtArray[1];
        var dtYear = dtArray[5];

        if (dtMonth < 1 || dtMonth > 12)
            return false;
        else if (dtDay < 1 || dtDay> 31)
            return false;
        else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
            return false;
        else if (dtMonth == 2)
        {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap))
                return false;
        }
        return true;
};

Usual.prototype.MapObject = function(data, template){	
	
	 var properties = [];
        for (var key in data) {
            if (data.hasOwnProperty(key) && typeof data[key] !== 'function') {
                properties.push(key);
            }
        }
        $.each(properties, function (i, v) {
            template = template.replace("[" + v + "]", Reflect.get(data, v));
        });

        return template;	
};

Usual.prototype.isNumber = function(obj){
    return !isNaN(obj)
};

module.exports = Usual;