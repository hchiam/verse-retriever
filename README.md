# verse-retriever [![version](https://img.shields.io/github/release/hchiam/verse-retriever?style=flat-square)](https://github.com/hchiam/verse-retriever/releases)

This is just a wrapper function that calls an API. For test use only.

[Live demo](https://codepen.io/hchiam/pen/WNxWXOP)

```js
https://cdn.jsdelivr.net/gh/hchiam/verse-retriever@main/verse-retriever.js
```

```js
https://cdn.jsdelivr.net/gh/hchiam/verse-retriever@3.0.0/verse-retriever.js
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
  src="https://cdn.jsdelivr.net/gh/hchiam/verse-retriever@3.0.0/verse-retriever.js"
  integrity="sha384-6XOcJ0/cieEomxQzsHciMQTArsKFsv5p3OHz2XHx7UINIWH9/P31s+2jnwDc7qKm"
  crossorigin="anonymous"
></script>
```

```bash
# get the thing to put into integrity="...":
bash get-integrity.sh
```
