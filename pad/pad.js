function generatePad(parent) {
        var table = document.createElement("table");
    table.setAttribute("border", 1);

    for (var i = 1; i < 10;i++) {
        var tr = document.createElement("tr");
        for (var j = 1;j < 10;j++) {
            var td = document.createElement("td");
            td.innerText = i*j;
            tr.appendChild(td);
        if (j<i)td.style.backgroundColor = 'yellow';
        if (j>i)tr.style.backgroundColor = 'red';
        if (i==j)td.style.backgroundColor = 'green';
                    
        }
       
        table.appendChild(tr);
    }
    parent.appendChild(table);
}
