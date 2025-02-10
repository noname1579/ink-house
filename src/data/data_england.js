
const data_england = [
  {
    id: 1,
    picture: 'https://s3-alpha-sig.figma.com/img/4fec/11f0/e3145fbf52f5d2ec9c57e9a216443cc8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QpBzClorzM9SeMr3Smcq5YvDO7j9moL3jj2xz6TkXdqJTnuIHxM0gYJy4mEYTMR3-89ob6u2qX-lCXj7EBSmsCoMOdj4tCQcs6kRkuWO3uAG8hHoeybR96ev6r8fyCaRPrGmvaOLtSoJVADsAuDj87OmzRlLSIxd2OKAwFjMYl7-NbfO6xp3B4YPqKtS~QA37doGIYosEahbj8thheFLAzgD-WKHt3qfOl8hT8XdvZ-OB3uxfmepTfrbNEiB97DTQ0q6T4GKR7cONNQBQG3neFH6q9lOQEh0WOf2n6YEIHXD4kNOdhgUhW-k99TU6Yi~gTv4uf1L0IKN-xGgvsTfWA__',
    author: 'Пол Смит',
    title: 'Дикий зверь',
    body: 'Акварель, бумага (50х80) ',
    price: 19500
  },
  {
    id: 2,
    picture: 'https://s3-alpha-sig.figma.com/img/13fa/c4c2/adff234dd26b1115cc67b05b5e6bc7c2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WMbLe4AA~XFs32ROM3j8DCEgBO7SenzyLcVG0VLEBQYnlVSNtUfaiOCzNS8QM1Gr2mICGCZVpJaKVFES9kCKV2BfMrLbKbmO87nN4NKlARoFzv9EykgLZSRadOlrL3dWMgLEVgqxqalzooqWV2sOCQKTyl690AkXJKrJw-LZ0yhIoxTboOrhiapChOK1iz-wf5XEuyyzAjNju09DC~bVNNig5YuWKdS-eW9aA6l6A28eBhcvUrB6xP4FHs4i7gaqQIMVKXSSLZUC5kjewQXRca-LAJz-v57WZZU1~z5RRj66KN3EEiE0NNpUDFIC53kwYfnfLdqAZiD~X7F1ooiE7w__',
    author: 'Джон Уайт',
    title: 'Скалистый берег',
    body: 'Цветная литография (40х60) ',
    price: 17500
  },
  {
    id: 3,
    picture: 'https://s3-alpha-sig.figma.com/img/5543/ba48/430dba8575747667e7f970b6df2bcdd0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DQXIadNlNWxwCeXCEqD93wk~EO9ldpPwTByN1UsIe-BhdMkERT1HYPttfLCUlbD4WoxWDGIMOXLgZsS3TOoDRFahQP6tr-9tqHak6qXGM~hUZwwwtX93z1TxBfLqRS4WklH9O82QxJkYMRYSaAMt3snewvoE05ww28N-YnlL72-5qcbJcKKDYv4orpv66EM8QLBJsadnZmk2qBUoadU3dOvJ66S6IeIUSgtAMHkT8p80IivfiUQvjSSH5VUWw2GZW7hx3M~eHx-HnfaNHRLqA5SHk1aFHV1TV7cclNEvEKZ6SIeDQrI8b~QMRWULzFWgSvF9uXzyQjX-CSwNh-yP4w__',
    author: 'Джим Уотсон',
    title: 'Река и горы',
    body: 'Акварель, бумага (50х80) ',
    price: 20500
  },
  {
    id: 4,
    picture: 'https://s3-alpha-sig.figma.com/img/bb61/d403/9d94ef4de5aae2bb120fb79498a032f0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PLyZhAr4qNtUmwXa31wah7jhUi3RIW7wKoUoUULucBYvSeJQDsA82bMQvqIkmxH9iaz-RGgiNfcA0bMccimw4-hB3jGABIoh~ERKjIQarrVHi0wHdXPqylV~Y4Ji9pEp96RgycHOvOe4~yoN~gw77mKIW6U7hwVTkq3f1WzViuXnCXZX9OhNzBiSP6zY3IVWFZbbk7rOEck~EVlGWsuy95-mA~IttNHiZknCZe7sQ5YZsxBk6k3dN69S4ULlBzxaaS2zpEnUFKm8pes02j~-v8DnId982T-hotMKRzylD6z1GRC9IsGUq3Y8j8iuuA9uShOAYEBFTFPTgdWFPal~Dg__',
    author: 'Юджин Зиллион',
    title: 'Белый попугай',
    body: 'Цветная литография (40х60) ',
    price: 15500
  },
  {
    id: 5,
    picture: 'https://s3-alpha-sig.figma.com/img/327e/9d09/20d16daba3a87333803606240e870a93?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oCeLzOyaM2hWfaBQJfb2KEIGcW9tzWAGlIQrOicNx1EXxhaaAq8DMfLEVbAXDcAtoIn1t4r4~Kl7XRt7KRn8i4eLfyrr7dOkn4jZbQkxgzHYIPYrrN7mM0xypphS6eT7~M6jUfqHYUCgYFZY-lUTZuo64addgq4zdzmbhG1bhZUzl3eLukfIZEXsXgbgcfzUkemR0qqqCNcHyutZ52n49IjsVHu3vwoUkcfPtpFJgfJ8yDSGc0Ti4h1UqP3fR31g-qinxXp486i9XxBW6WpQjLPpEsLjVdjQcnXIzye8bvtEimj1QYhxHJoUBw-wWpVG1g3WXXWGIkG5~LV-qArnUw__',
    author: 'Эрик Гиллман',
    title: 'Ночная рыба',
    body: 'Бумага, акрил (50х80) ',
    price: 12500
  },
  {
    id: 6,
    picture: 'https://s3-alpha-sig.figma.com/img/df6c/dc5d/cd608cebc48442df833464d8cb8177d5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bXNFdW4KSA4KoaL16WWWCW05AWi0NzbPDzvp4OHIBCGfMyHRJUciEXOCq0DxVW1SCV5NgIUuY~LJwoa8k5MquSgBdvS10TtQhF6U3ziEIlwJ9GfL~O5KSHvYnvayYe-URDJ53wLrvtPGDU5w~o7Iakn1z7ha-fb~bUEKk3TSgPakZe8Ywi5B6O3nKAV-ghTvqRc7W2GDD7Nqk81cCAJDelhDUA3Cfxtw~vsx4jRGj4McHk86X6x-owyD0WvsJg1jidx4jlCJDjabUAwoakZhPpbgnFphcCeoXlHukEDhJpwAeCqHyapk9k88HNUUtRg60zIt0gRMESI~4BxnbtNihA__',
    author: 'Альфред Барр',
    title: 'Рыжий кот',
    body: 'Цветная литография (40х60) ',
    price: 21000
  },
]

export default data_england

