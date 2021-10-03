## Updating toll prices

1. Go to [putevi-srbije website](https://www.putevi-srbije.rs/index.php/%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%98%D0%B0-%D0%B2%D0%BE%D0%B7%D0%B8%D0%BB%D0%B0-%D1%86%D0%B5%D0%BD%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA-%D0%BF%D1%83%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%B5)
1. Open DevTools -> Elements tab
1. Search for "dist ="
1. Right click, Copy->Copy element and then paste the entire body of `<script>` tag into Console tab
1. Add the following line of code after pasted array
`console.log(JSON.stringify(dist.map((d) => d.filter((_e, i) => i % 5 === 1))));`
1. Copy the output of this script and assign to `цене` in `src\index.js`
