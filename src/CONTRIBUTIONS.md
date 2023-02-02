## Updating toll prices

1. Go to [putevi-srbije website](https://www.putevi-srbije.rs/index.php/категоризација-возила-ценовник-путарине)
1. Open DevTools -> Elements tab
1. Search for "dist ="
1. Right click, Copy->Copy element and then paste the entire body of `<script>` tag into Console tab
1. Add the following line of code after pasted array
`console.log(JSON.stringify(dist.map((d) => d.filter((_e, i) => i % 5 === 1))));`
1. Copy the output of this script and assign to `цене` in `src\index.js`
