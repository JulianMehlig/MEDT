var x=0;
var y=0;

while (x<10)
{
    y = x * x;
    document.write("<tr> <td>" + x + "</td>" + "<td>" + y + "</td> </tr>");

    x++;
}

/*var zahl=0;
var Ergebnisse[10];

for(zahl=0; zahl<=9; zahl++)
{
    Ergebnisse[zahl]=zahl*zahl;
}

function start()
{
    node=document.getElementById("Tabelle");
    node.appendChild(createTable());

}

function createTable()
{
    var mytable= document.createElement("<table>");
    var mytablebody= document.createElement("tbody");

    for(zahl=0; zahl<=9; zahl++)
    {
        currentRow=document.createElement("<tr>");
        currentCell=document.createElement("<td>");
        currentText=document.createTextNode(Ergebnisse[zahl]);
        currentCell.appendChild(currentText);
        currentRow.appendChild(currentCell);
        mytablebody.appendChild(currentRow);
    }

    mytable.appendChild(mytablebody);
    mytable.setAttribute("border" , 1);
    return mytable;
} */