# downloadhtml

fetch html data.

input: url
output: html string

# downloadfull

fetch html + css + js + images.

input: url
first output: html string
second input: html string
second output: urls

# parsehtml

parse html.

input: html string
output: link url strings, image url strings

# upsertmetadata

upsert metadata.

input: date and time of last fetch, url, num_links, images, metadata.json
output: metadata.json

# selectmetadata

select metadata by url.

input: url, metadata.json
output: metadata

# fetch (cli)

urls.map(
    (url) => downloadhtml(url)
    .then((html) => parsehtml(html))
    .then((metadata) => upsertmetatada(metadata))
)

# fetch metadata (cli)

url => selectmetadata(url)
