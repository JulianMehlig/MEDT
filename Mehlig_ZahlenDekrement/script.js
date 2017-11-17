var Zahlen= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var count=0;


for(max=9; max>=0; max--)
{
    document.write("<tr>");
    for (count=max; count>=0; count--)
    {
        document.write("<td>" + Zahlen[count] + "</td>");
    }

    document.write("</tr>");
}