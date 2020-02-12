'use strict';

var money;
var time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формета YYYY-MM-DD");

var expenseArticle1, 
    expenseArticle2,
    moneyAmount1,
    moneyAmount2;

expenseArticle1 = prompt("Введите обязательную статью расходов в этом месяце");
moneyAmount1 = prompt("Во сколько обойдётся?");
expenseArticle2 = prompt("Введите обязательную статью расходов в этом месяце");
moneyAmount2 = prompt("Во сколько обойдётся?");

let expenses = {};
expenses[expenseArticle1] = Number(moneyAmount1);
expenses[expenseArticle2] = Number(moneyAmount2);

let appData = {
    budget: money,
    date: time,
    expenses: expenses,
    optionalExpenses: null,
    income: null,
    savings: false
};

// расчёт дневного бюджета
var dailyExpense;

dailyExpense = (money - expenses[expenseArticle1] - expenses[expenseArticle2]) / 30;
alert("Ваш дневной бюджет: " + dailyExpense);