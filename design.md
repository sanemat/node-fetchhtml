# input

fetch https://example.com https://example.net

# output

ls
example.com.html example.net.html

(sub) domain name + .html

- [ ] how to store https://example.com/page1 ?
  - think it later
- [ ] how to avoid https://../../../etc/passwd
  - think it later

# downloadhtml (done)

fetch html data.

input: url
output: html string

- [ ] follow redirect?

# downloadfull (not yet)

fetch html + css + js + images.

input: url
first output: html string
second input: html string
second output: urls

# parsehtml (done)

parse html.

input: html string
output: link url strings, image url strings

# upsertmetadata (done)

upsert metadata.

input: date and time of last fetch, url, num_links, images, metadata.json
output: metadata.json

# selectmetadata (implemented it into fetch directly) (done)

select metadata by url.

input: url, metadata.json
output: metadata

# fetch (cli) (done)

urls.map(
    (url) => downloadhtml(url)
    .then((html) => parsehtml(html))
    .then((metadata) => upsertmetatada(metadata))
)

# fetch metadata (cli) (done)

url => selectmetadata(url)
