var pori = parseInt(prompt("How many  pori you want to purches"));
var total = pori * 29;
var halwa = parseFloat(prompt("How many halwa kg you want to purches"));
var alo = parseFloat(prompt("How many alo plat you want to purches"));
var chana = parseFloat(prompt("How many chana you want to purches"));
var ashar = parseFloat(prompt("How many ashar you want to purches"));
var halwa = halwa * 20;
var alo = alo * 55;
var chana = chana * 100;
var ashar = ashar * 15;
var total = pori + halwa + alo + chana + ashar
var tax = 0.16; 
var amoutpay = tax + total
document.write("pori" + pori + "<hr/>");
document.write("halwa" + halwa + "<hr/>");
document.write("alo" + alo + "<hr/>");
document.write("chana" + chana + "<hr/>");
document.write("Ashar" + ashar + "<hr/>");
document.write("<h1>"+"total bill" + total + "<h1>")
document.write("amoutpay" + amoutpay )


