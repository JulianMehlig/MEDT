function berechnen()
{
    var a = document.getElementById("werta").value;
    var b = document.getElementById("wertb").value;
    var c = document.getElementById("zufall").value;

    var Ausgabe; //String

    document.getElementById("Ausgabe").innerHTML  ="";

    for(var i=0; i< c; i++)
    {
        var e = a + Math.round(b * Math.random());
        document.getElementById("Ausgabe").innerHTML  +=e+"<br>";
    }

}


function del()
{
    document.getElementById("Ausgabe").innerHTML ="Gelöscht";
    document.getElementById("werta").value="";
    document.getElementById("wertb").value="";
    document.getElementById("zufall").value="";
}