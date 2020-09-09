<?php
$startDate = new DateTimeImmutable($_POST['date']);
// $endDate = $startDate->add("P{$_POST['duration']}Y");

$deposit = $_POST['sum'];
$percent = 0.1;
$sumAdd = $_POST['addmoney'] === 'yes' ? $_POST['sumadd'] : 0;

$y = $startDate->format('y');
$daysy = $y % 4 === 0 && $y % 100 !== 0 || $y % 400 === 0 ? 366 : 365;

// for ($date = $startDate; $date->diff($endDate) ...; $date = $date->add('P1M')) {
    
//     $daysn = ...;
//     $deposit += ($deposit + $sumAdd) * $daysn * ($percent / $daysy);
// }

$result = round(12000 + (12000 + $sumAdd) * 19 * ($percent / $daysy));
echo 'Результат: '.$result.' руб';

// 4.5 Формула с капитализаций процентов по вкладу:

// 4.5.1 summn = summn-1 + (summn-1 + summadd)daysn(percent / daysy)

// 4.5.2 где summn – сумма на счете на месяц n (руб),

// 4.5.3 summn-1 – сумма на счете на конец прошлого месяца

// 4.5.4 summadd – сумма ежемесячного пополнения

// 4.5.5 daysn – количество дней в данном месяце, на которые приходился вклад

// 4.5.6 percent – процентная ставка банка - 10%

// 4.5.7 daysy – количество дней в году.

// 4.5.8 Если в поле «Пополнение вклада» стоит «нет», данные «summadd» не используются.