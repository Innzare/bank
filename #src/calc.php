<?php
// $startDate = new DateTimeImmutable($_POST['date']);
// $endDate = $startDate->add("P{$_POST['duration']}Y");

// $deposit = $_POST['sum'];
// $percent = 0.1;
// $sumAdd = $_POST['addmoney'] === 'yes' ? $_POST['sumadd'] : 0;

// for ($date = $startDate; $date->diff($endDate) ...; $date = $date->add('P1M')) {
//     $y = $date->format('y');
//     $daysy = $y % 4 === 0 && $y % 100 !== 0 || $y % 400 === 0 ? 366 : 365;
//     $daysn = ...;
//     $deposit += ($deposit + $sumAdd) * $daysn * ($percent / $daysy);
// }
$deposit = 12000;
echo 'Результат: '.$deposit.' руб';