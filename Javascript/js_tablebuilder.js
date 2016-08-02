   function buildTableFromCollection(coll, name) {
        var tbl     = document.createElement("table");
        tbl.setAttribute("id", name)    ;
        var tblBody = document.createElement("tbody");
        tblBody.appendChild(createTableHeaderRow(coll[0])); //create table header from first row in your collection
        coll.map(function(item) { tblBody.appendChild(createTableRow(item))});
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "1");
        return tbl;
    }

    function createTableHeaderRow(coll) {
        var row = document.createElement("tr");
        for (var i = 0; i < Object.keys(coll).length; i++) { //loop through the keys
            var propkey = Object.keys(coll)[i];
            console.log(propkey);
            if(typeof(coll[propkey]) == "string" || typeof(coll[propkey]) == "int") {
                row.appendChild(
                        buildCell({fieldname: propkey,
                            fieldvalue: propkey.toUpperCase(),
                            isHeader: true}));
            }
        }
        return row;
    }

    function createTableRow(coll) {
        var row = document.createElement("tr");
        for (var i = 0; i < Object.keys(coll).length; i++) {
            var propkey = Object.keys(coll)[i]; //gets the current key
            if (typeof(coll[propkey]) == "string" || typeof(coll[propkey]) == "int") {
                var cell = buildCell({
                    fieldname: propkey,
                    fieldvalue: coll[propkey],
                    isHeader: false
                });
                cell.setAttribute("onclick", "createEditForm(" + coll["id"] + ")");
                row.appendChild(cell);
            }
        }
        return row;
    }

    function buildCell(params){
        var cell = document.createElement("td");
        if(params["fieldName"] === "id")
        {
            cell.style.visibility = "hidden"
        }
        cell.appendChild(document.createTextNode(params["fieldvalue"]));
        if(params["isHeader"]) {
            cell.style.fontWeight = "bold";
        }
        return cell;
    }

    function curry2(binaryFunc, ...x) {
        return liftf(binaryFunc)(x);
    }

