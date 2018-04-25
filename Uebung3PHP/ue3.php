<?php
/**
 * Created by PhpStorm.
 * User: Julian
 * Date: 04.04.2018
 * Time: 08:30
 */
$bez_tafel = "Tafel";
$bez_sessel = "Sessel";
$bez_uhr = "Uhr";
$bez_laptoptisch = "Laptoptisch";

$preis_tafel= 4999.00;
$preis_sessel = 389.00;
$preis_uhr = 59.00;
$preis_laptoptisch = 999.00;


define("MWST", 1.2);

$gesamtnettopreis_tafel = $preis_tafel * MWST;
$gesamtnettopreis_sessel = $preis_sessel * MWST;
$gesamtnettopreis_uhr = $preis_uhr * MWST;
$gesamtnettopreis_laptoptisch = $preis_laptoptisch * MWST;

echo
"
<link href='style.css' media='screen' rel='stylesheet' type='text/css'>
<table>
    <tr>
        <th>Variable</th>
        <th>Bezeichnung</th>
        
        <th>Variable</th>
        <th>Preis (netto)</th>
        <th>Anzahl</th>
        <th>Preis (brutto)</th>
    </tr>
    
    <tr>
        <td>"; echo '$bez_tafel'; echo" </td>
        <td>$bez_tafel</td>
        <td>"; echo '$preis_tafel'; echo"</td>
        <td>"; echo number_format((float) $preis_tafel, 2, '.' ,''); echo "</td>
        <td>1</td>
        <td>"; echo number_format((float) $gesamtnettopreis_tafel, 2, '.' ,''); echo "</td>
    </tr>
    
    <tr>
        <td>"; echo '$bez_sessel'; echo" </td>
        <td>$bez_sessel</td>
        <td>"; echo '$preis_sessel'; echo"</td>
        <td>"; echo number_format((float) $preis_sessel, 2, '.' ,''); echo "</td>
        <td>31</td>
        <td>"; echo number_format((float) $gesamtnettopreis_sessel, 2, '.' ,''); echo "</td>
    </tr>
    
    <tr>
        <td>"; echo '$bez_uhr'; echo " </td>
        <td>$bez_uhr</td>
        <td>"; echo '$preis_uhr'; echo"</td>
        <td>"; echo number_format((float) $preis_uhr, 2, '.' ,''); echo "</td>
        <td>1</td>
        <td>"; echo number_format((float) $gesamtnettopreis_uhr, 2, '.' ,''); echo "</td>
    </tr>
    
     <tr>
        <td>"; echo '$bez_laptoptisch'; echo " </td>
        <td>$bez_laptoptisch</td>
        <td>"; echo '$preis_laptoptisch'; echo"</td>
        <td>"; echo number_format((float) $preis_laptoptisch, 2, '.' ,''); echo "</td>
        <td>30</td>
        <td>"; echo number_format((float) $gesamtnettopreis_laptoptisch, 2, '.' ,''); echo "</td>
    </tr>
</table>
"
?>