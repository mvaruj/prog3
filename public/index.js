var fs = require('fs');
function main(){
var statistics = 
{
    'all_grass':xoter,
    'all_xotaker':xotakerner,
    'all_gishatich':gishatichner
}
var json = JSON.stringify(statistics);
fs.writeFileSync("statistics.json",json);
}
main();