import replace from 'replace-in-file';
import scrape from 'website-scraper';

const options = {
  urls: ['https://bsaefiling.fincen.treas.gov/main.html'],
  directory: './dist',
  urlFilter: (url) => url.startsWith('https://bsaefiling.fincen.treas.gov/'),
  recursive: true,
  maxRecursiveDepth: 20,
};

const result = await scrape(options);

const results = replace.sync({
  files: './dist/*.html',
  from: /<\/body>/g,
  to: '<script>document.querySelectorAll("a[href]").forEach(link => {link.href=link.href.replace(/^https:\\/\\/bsaefiling\\.fincen\\.treas\\.gov\\//, "./")})</script></body>',
});