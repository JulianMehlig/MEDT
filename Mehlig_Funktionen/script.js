var d=window.prompt('Geben Sie den Durchmesser ein: ');
var a=0;

function Flaeche(d)
{
    a= Math.PI / 4 * (d*d);

    return a;
    return d;
}

Flaeche(d);

document.write("Nach der Formel: A = PI / 4 * d^2"  +  "<br><br>");
document.write("Bei einem Durchmesser von: " + d + "m"+"<br><br>");
document.write("Fläche= " + a + "m^2");
