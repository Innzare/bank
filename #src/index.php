<!DOCTYPE html>
<html lang="ru">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Gulp</title>
   
   <link rel="stylesheet" href="./../node_modules/nouislider/distribute/nouislider.css">
   <link rel="stylesheet" href="./css/style.min.css">
   <link href="https://allfont.ru/allfont.css?fonts=europe-normal" rel="stylesheet" type="text/css" />
   <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>

<body>

   <div class="content">
      <div class="content__wrapper">
         <header>
            <div class="logo">
               <img src="./img/2.png" alt="logo">
            </div>
            <div class="phone-num">
               <p>8-800-100-5005</p>
               <p>+7 (3452) 522-000</p>
            </div>
         </header>
         <menu>
            <ul>
               <li><a href="#">Кредитные карты</a></li>
               <li class='active'><a href="#">Вклады</a></li>
               <li><a href="#">Дебетовая карта</a></li>
               <li><a href="#">Страхование</a></li>
               <li><a href="#">Друзья</a></li>
               <li><a href="#">Интернет-банк</a></li>
            </ul>
         </menu>
         <div class="breadCrumb">
            <a href="#">Главная</a>
            <span>-</span>
            <a href="#">Вклады</a>
            <span>-</span>
            <span>Калькулятор</span>
         </div>

         <div class="calc">
            <div class="title">Калькулятор</div>
            <form id="calc-form">
               <div class='deposit-date deposit-inps'>
                  <div class='deposit-inps-text'>Дата оформления вклада</div>
                  <div class='input-div'><input type="text" name="date" placeholder='дд,мм,гггг' id="datepicker" class='field'></div>
               </div>
               <div class='deposit-sum deposit-inps'>
                  <div class='deposit-inps-text'>Сумма вклада</div>
                  <div class='input-div'><input type="number" name="sum" id='value1' class='field'></div>
                  <div class="range-slider">
                     <div id="range1"></div>
                     <div class="range-text">
                        <span class='min'>1 тыс. руб.</span>
                        <span class='max'>3 000 000</span>
                     </div>
                  </div>
               </div>
               <div class='deposit-period deposit-inps'>
                  <div class='deposit-inps-text'>Срок вклада</div>
                  <div class='deposit-duration'>
                     <select name="duration">
                        <option value="1">1 год</option>
                        <option value="2">2 года</option>
                        <option value="3">3 года</option>
                        <option value="4">4 года</option>
                        <option value="5">5 лет</option>
                     </select>
                  </div>
               </div>
               
               <div class='deposit-up deposit-inps'>
                  <div class='deposit-inps-text'>Пополнение вклада</div>
                  <div class='label'>
                     <label>
                        <input class='radio' type="radio" name="addmoney" value="no" checked>
                        Нет
                     </label>
                     <label>
                        <input class='radio' type="radio" name="addmoney" value="yes">
                        Да
                     </label>
                  </div>
               </div>
               <div class='deposit-up-sum deposit-inps'>
                  <div class='deposit-inps-text'>Сумма пополнения вклада</div>
                  <div class='input-div'><input type="number" name="summadd" id='value2' class='field'></div>
                  <div class="range-slider">
                     <div id="range2"></div>
                     <div class="range-text">
                        <span class='min'>1 тыс. руб.</span>
                        <span class='max'>3 000 000</span>
                     </div>
                  </div>
               </div>
               <div class='deposit-calc deposit-inps'>
                     <div><input class='btn' type="submit" value="Рассчитать"></div>
                     <div id="result"></div>
               </div>
            </form>
         </div>

         <footer>
            <ul>
               <li><a href="#">Кредитные карты</a></li>
               <li><a href="#">Вклады</a></li>
               <li><a href="#">Дебетовая карта</a></li>
               <li><a href="#">Страхование</a></li>
               <li><a href="#">Друзья</a></li>
               <li><a href="#">Интернет-банк</a></li>
            </ul>
         </footer>
      </div>
   </div>

   <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
   <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
   <script src='./../node_modules/nouislider/distribute/nouislider.js'></script>
   <script src="js/script.js"></script>
</body>

</html>