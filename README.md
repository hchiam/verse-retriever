# verse-retriever ![version](https://img.shields.io/github/release/hchiam/verse-retriever?style=flat-square)

[Live demo](https://codepen.io/hchiam/pen/WNxWXOP)

```js
https://cdn.jsdelivr.net/gh/hchiam/verse-retriever@main/verse-retriever.js
```

```js
https://cdn.jsdelivr.net/gh/hchiam/verse-retriever@2.0.0/verse-retriever.js
```

## Example usage:

```html
<div id="verse"></div>
<div id="copyright"></div>
<script src="verse-retriever.js"></script>
<script>
  tryItOut();
  async function tryItOut() {
    const verse = await verseRetriever.getVerseWords("Genesis 1:1");
    const words = verse.words;
    const copyright = verse.copyright;
    document.getElementById("verse").innerHTML = words;
    document.getElementById("copyright").innerHTML = copyright;
  }
</script>
```

## CDN usage:

```html
<script
  src="https://cdn.jsdelivr.net/gh/hchiam/verse-retriever@1.0.0/verse-retriever.js"
  integrity="sha384-xJh5lHAnNs01jNNsYjM1G1PhXCdCmcbTVHPOQugWwnSBHrW0E3nbJaZ8GczwE2qr"
  crossorigin="anonymous"
></script>
```

```bash
# get the thing to put into integrity="...":
bash get-integrity.sh
```
