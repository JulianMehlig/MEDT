<?php
/**
 * Created by PhpStorm.
 * User: Julian
 * Date: 21.03.2018
 * Time: 08:15
 */
define("yen_zu_euro", 0.0076);
$gehalt = 300000;
$in_euro = $gehalt * yen_zu_euro;

echo $in_euro;