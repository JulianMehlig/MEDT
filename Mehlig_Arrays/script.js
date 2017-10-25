//(c)Julian Mehlig
var adresse  = new Array();

adresse['name'] = window.prompt('Geben Sie den Namen ein');
adresse['anschrift'] = window.prompt('Geben Sie die Anschrift ein');
adresse['plz'] = window.prompt('Geben Sie die Postleitzahl ein');
adresse['ort'] = window.prompt('Geben Sie den Ort ein');
adresse['land'] = window.prompt('Geben Sie das Land ein');

function ausgeben(adresse)
{
    document.write('<tr><td> Name:  ' + adresse.name + '</td></tr>');
    document.write('<tr><td> Anschrift:  ' + adresse.anschrift + '</td></tr>');
    document.write('<tr><td> Postleitzahl:  ' + adresse.plz+ '</td></tr>');
    document.write('<tr><td> Anschrift:  ' + adresse.ort + '</td></tr>');
    document.write('<tr><td> Land:  ' + adresse.land + '</td></tr>');
}

ausgeben(adresse);