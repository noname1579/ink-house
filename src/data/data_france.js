
const data_france = [
  {
    id: 1,
    picture: 'https://s3-alpha-sig.figma.com/img/fa91/bf9e/3004b7d8a3c0e2de1caa8fd5732848be?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=grBrWftWYNwO~oT~YV22Ej0lWQHqLDponbrjROXzhnRMIon2t7uH1z6IVMJS18vb7rfvteh3d3uNoQ7MizL~7uevcLnv9m-lcCpFDwvjYJVeP8bcUYt2F7V9mHba8rrW7lciFFsnxXAQcUxZy8a9KQUKsV7mr1hh50VXbhturjFF7y2wa6RPhr9oKnr4cdgpS-tHcyE9Z4d2MLAZqopeyixqNIIXX~ua4dES6RPCGfsQTIK~S40WDG5J~hRmI3B225gRO~ThtiwjRT8~wIYRGqrHMumFSnhYkjopnNAaY4nDiJ9kMWGT-NXSIomzp1gNLMrXXmBfaEL3Pxfb7-6edg__',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    body: 'Холст, масло(50x80)',
    price: 14500
  },

  {
    id: 2,
    picture: 'https://s3-alpha-sig.figma.com/img/15e2/7662/749f524a689260200e0563fdf7e7d013?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p~aAz~ppx8e6RKharSio~foib~XMpMTcGCBKq4MuwSxXR9pvwwEMl45v8vyAwDW9Ygt1TR2vJ22-cD2ARzk6LEa6QSUgSCCkPTwrFbIn6uhRz2ELwv4S~zEz4GIAMiyNjHLeRs--SQ5KjK2aGHy887wyVVAVsSCQ800INTSoF~N3i36ocPqNC0PBJXJ7cNYwmjs3svNvhvN7bZN7ioVZ23pRQyRpA9sF9tcpTRCLz~T45k8GRuXsxEAF9mpNwFbgxemTQsCP-K3QAXYAQNk93jhqPQ5mcXe8jFlh0Dkvl2LXn2gsRi3I-XWDnmp9NyJtFqi8cNSHD4bfb~zDYNKGWA__',
    author: 'Анри Селин',
    title: 'Дама с собачкой',
    body: 'Акрил, бумага (50х80) ',
    price: 16500
  },

  {
    id: 3,
    picture: 'https://s3-alpha-sig.figma.com/img/8259/612e/ab708c86c2084b45ede2e5b47f32f0ae?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X~4snTq4BdhlDKttJqElT22V2loaGqRCrdlwyqDqXAntn2qd9kBctY9fdaS4iJM8FzSyKVLkN8zK2Owdhki3oscc9F-qw3l-sGW5WeICd2m8GoX1uXEt58T2qsaiGk1Y7UMGajOj~PzX10m6mL6kL9ICg~UK7uKgcCHOwBzewM~CaSYOJ3iOc3pWUMIRy7zyFENF-EUdAs2OGMYc2SYD7wix6G9okj269SuylA1eEvX9D7eerItkmS3FPrs4bfkznwMc4oS9L4X4u-0f7PBgGNfb62-fA4DVNzP61MKaGnTcTFvwbfS8gAGmN4wO9qHJBCgUksRAOLzlFB~fIW~uSw__',
    author: 'Франсуа Дюпон',
    title: 'Процедура',
    body: 'Цветная литография (40х60) ',
    price: 20000
  },

  {
    id: 4,
    picture: 'https://s3-alpha-sig.figma.com/img/53e8/b467/38c4dea3c32614513f30d586b23e623e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F041fWsr2vKFTMSaZTeMXlLpPdxgwYYZoc0BaPgKuyNs7N-4xFLVa5Co3aGZSWwNBfks-zodYY--HsCtYz2fwqpUnGoTMK2KfjT889DI~1QS3VcLOwCGbzbej8FgMhs~sl9f0aG96EDwRRLK4nCxbAIPznWJ3O6wPA0-xqmerLkDH~lU040BEvZ7JSyOX43j8xxd22O0wCQ1No9ZSL5T2GwK8hk8n0sN1aGxM8kJnf7R~sPPdn0FE8hScRxyMS~XBx~uX~qJHkXZlgdmrfpFMZqcNA8TyWM9UMiWpxmzo1kZMLO7FjuRzAgqtYkaHol5HgNN03zld17aZmrUrWbE0Q__',
    author: 'Луи Детуш',
    title: 'Роза',
    body: 'Бумага, акрил (50х80) ',
    price: 12000
  },
  {
    id: 5,
    picture: 'https://s3-alpha-sig.figma.com/img/044c/aca3/2bf109bb1a75d2ec01ef08204231eeaa?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MP0ClDVHdmLo3DR8lruPclFGpnogD5lmdRpQa1ATb2wvj75woJsvyqItT1bYOiHXlR2U3UKinoiQ-JXAc4vnPH9MUpmKHVXe3sjJG72WFJ5ydCj5UN5gbgtWkqoTVUqQjWfKsF8fzfb3pawBA72VWK1iB~g2cLFqpVCj0NNDQsYrxsK10WG1C4cb-FVU6rCWmQi7ksYYk-FdGFc0QAf~W7FbEJXcV4a0UlVct~Noda4pylfv0Hjj-3~mW57jfMZtLh9mxVU5A-yJqLOecCSkxzEtAUHn8Prx0k~UP6s~2SKMlzV74ceTl3GRYGgvCa9rRFrcpO7p6YR-U~FaIglU6w__',
    author: 'Франсуа Дюпон',
    title: 'Птичья трапеза',
    body: 'Цветная литография (40х60) ',
    price: 22500
  },
  {
    id: 6,
    picture: 'https://s3-alpha-sig.figma.com/img/f32f/888e/e10b4d96d2acd08463a8d8a2887f353f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ERDdDB5AirQp-rTjq~yLYtgdqGKe71LKdiH7A-mjKeMhYFypW-N2DijXg11VlMvQ2Rb4jkc7AihYYL4DaVnDpydecGlcFeEFx5lnks-CUf06-J-5NaRdIpRJ-puzjkzjoSfUoWnhjGFsNqbM3P2SKth4udyRY3JunW7-g-1do9nqyz5xz08ycwn4BOb~xRCektBJxFvMInA5LZPLEQgPaDAkuJCSeFYZk6qBs3QYEERHUw~pPVtpRBM1OHSfCGXkOXjY1OcjwP7ioJ9dCsvoR5MQwLlCZ65Yly3MiICyZRXchz2hmeA374LoUEr78mjbd7vFSZE6nS3tVq02plz8EA__',
    author: 'Пьер Моранж',
    title: 'Пейзаж с рыбой',
    body: 'Цветная литография (40х60) ',
    price: 20000
  },
]

export default data_france

