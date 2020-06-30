
function domainName(url){
  url = url.replace('http://', '')
    .replace('www.', '')
    .replace('https://', '')
    .split('.');
  console.log(url[0]);
  return url[0];
}



console.log(domainName("http://google.com") === "google");
console.log(domainName("http://google.co.jp") === "google");
console.log(domainName("www.xakep.ru") === "xakep");
console.log(domainName("https://youtube.com") === "youtube");
console.log(domainName("http://xivpyyp1js549gaykzf.br/warez/") === "xivpyyp1js549gaykzf");
console.log(domainName("http://www.4x7dgan1qo3jqt7tas0p4224a9.pro/") === "4x7dgan1qo3jqt7tas0p4224a9");
console.log(domainName("https://www.cllgmo-qnkxdojrgpo06nybajc334.co.uk/img/") === "cllgmo-qnkxdojrgpo06nybajc334");
console.log(domainName("mr75zy5qaqrmxqsvuqabh7u83r1q8.fr/archive/") === "mr75zy5qaqrmxqsvuqabh7u83r1q8");



