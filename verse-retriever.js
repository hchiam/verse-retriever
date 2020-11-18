let numberOfApiCalls = 0;

let timer;

const bookNames = [
  // Note: Put 1 john before john. For easier processing later: some unpluralized, some reordered, and some alternates.
  // OT: 39
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1st Samuel",
  "1 Samuel",
  "2nd Samuel",
  "2 Samuel",
  "1st Kings",
  "1 Kings",
  "2nd Kings",
  "2 Kings",
  "1st Chronicles",
  "1 Chronicles",
  "2nd Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Psalm",
  "Proverbs",
  "Proverb",
  "Ecclesiastes",
  "Song of Songs",
  "Song of Solomon",
  "Songs of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Lamentation",
  "Ezechiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  // NT: 27
  "Matthew",
  "Mark",
  "Luke",
  "1st John",
  "1 John",
  "2nd John",
  "2 John",
  "3rd John",
  "3 John",
  "John",
  "Acts",
  "Romans",
  "1st Corinthians",
  "1 Corinthians",
  "2nd Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1st Thessalonians",
  "1 Thessalonians",
  "2nd Thessalonians",
  "2 Thessalonians",
  "1st Timothy",
  "2nd Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1st Peter",
  "1 Peter",
  "2nd Peter",
  "2 Peter",
  "Jude",
  "Revelation",
  "Revelations",
];

async function getVerseWords(searchText) {
  if (!searchText) return;

  if (!containsBookName(searchText)) return;

  numberOfApiCalls++;
  if (numberOfApiCalls > 100) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      numberOfApiCalls = 0;
    }, 6 * 60 * 60 * 1000);
    return;
  }

  const urlAPICall = `https://bibleverse.glitch.me/get-verse/${searchText}`;
  await fetch(urlAPICall)
    .then((res) => res.json())
    .then((res) => {
      const copyright = res.copyright;
      const content = res.content;
      return res;
    });
}

function containsBookName(text) {
  return bookNames.find((book) => text.includes(book));
}
