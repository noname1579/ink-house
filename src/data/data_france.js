
const data_france = [
  {
    id: 1,
    picture: 'https://s3-alpha-sig.figma.com/img/fa91/bf9e/3004b7d8a3c0e2de1caa8fd5732848be?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lwKgGVufnjkozyHxlWnzm8si7kRrub4nhpTFC2cYF5nzV4cG5dUS8zZ5VQV6N5yjmGl3FcFVkjilsqv3V8-D5r2pAtUFGKRdiRwWvlxREG0IXPiQCkUhLL3uk7dRIe3ohWd48rlOJ-Gj0wJ9-Scp9osiZ2FXt5E9uGHSW29C~TSKvAXX-BIshrAkCBC0~Kz5lyb8GARY8h8tf0Jx1b1p7a6JjLWY6u8H2MfIX1dfk7pgeMW-2I1BWGcd6AtwnWJbcQFxN~a7-6YmFXXXUAxxJbs75xi7NSQISlQH4RLRdMXJRbhg7R1QMjImz7aYUkMOSvrig--SJEw16TPucIxtbw__',
    author: 'Марсель Руссо',
    title: 'Охота Амура',
    body: 'Холст, масло(50x80)',
    price: 14500
  },

  {
    id: 2,
    picture: 'https://s3-alpha-sig.figma.com/img/15e2/7662/749f524a689260200e0563fdf7e7d013?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pbBiM3m30YxT8cCXYNWRiVL8DYZoyfnWnuyiydgFXzGmnIWc3JodBRwXVbYIXe~py4x07P9K1lFZrHRbb5B~uurlYKimBZVHTithNI2yGs2-2GHEsyJM1KtXjmK1aeylvCGD-hEfqYINnI~XtRK~Htlxc~9MULeZ4fFtZpcArl4J5uHTJBnMkvwrzwXWj~RD8tu1eTbuRMgHNXMxKFBIv7lkr4wPQvPgS3V5ICJ3R6sATuAKFJ-q5pwDpYVT9pzRxbc-lTcwfXz2FbD6kZrbOuxuaNODc~RXaemzC6BuemjrNIhZgKR0FTvwaBPqIZpIAS7TtSiq3WCDUvL0erAVeQ__',
    author: 'Анри Селин',
    title: 'Дама с собачкой',
    body: 'Акрил, бумага (50х80) ',
    price: 16500
  },

  {
    id: 3,
    picture: 'https://s3-alpha-sig.figma.com/img/8259/612e/ab708c86c2084b45ede2e5b47f32f0ae?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QAQ9By1WFyI5~lQ3GbjOs0ePVqPwZprbkQ9Pn4R41jcuOGvL9xtzurhAVhKvNCE2dRCGZm~ntrCte0v0DM3SewJd7fiwDeLZezeDRa1RM1jksVbXAlW9CjqUq3w79ggWbHWE8VORd8~f-8gxuFfNy2srmJm1i3O6uMDrKu8Mb4LH5un0r6WyFyCznsy2vi33hvfZWgRA1FoV~zJPmBTE7H2Z22tBwgZ-2ZHWVwVTn~NZA7rPEAEVDKYTsy6sVIEDldcHurevbgouuIweKRKdZWmNgct0boLrjMuyYrpluspkVe52nxhYhmQa1~fHX0m47Aw1hJ1SbgYXVhimG6aF0A__',
    author: 'Франсуа Дюпон',
    title: 'Процедура',
    body: 'Цветная литография (40х60) ',
    price: 20000
  },

  {
    id: 4,
    picture: 'https://s3-alpha-sig.figma.com/img/53e8/b467/38c4dea3c32614513f30d586b23e623e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nqSpR4hGtImmz1TqRyDbMmqgiYIqE9V7BO0ah7KXly4mfec9GoHFdaFIB~vxZubCrb7x6e95UB9Cs1ZnaLureF3CuIKOLV-Bsa~E6~z6Mh4yd~091Q-pZD1q-zTevotCVo46pksGxshBWAauMXCEX9SvMB3mL3fC5bjbC4iHKiqMtzuHHABUX0w9OIJ6oKEXRfCFpwubx90ypmBSmJ1yi0ISObVeguG7gO0lYXZ97F18cKsn5gndQER-kH60ntFiSVdoldJsjIu0KrSs22Wo8SqsAOA5bpmsyqfLzLXGFQdjIlfXWU464~hBhAR2p7usQgjbjN~8WJNMCsgQg0vHvg__',
    author: 'Луи Детуш',
    title: 'Роза',
    body: 'Бумага, акрил (50х80) ',
    price: 12000
  },
  {
    id: 5,
    picture: 'https://s3-alpha-sig.figma.com/img/044c/aca3/2bf109bb1a75d2ec01ef08204231eeaa?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h~fnal69KiOc385hhZXN1eOsvUL54hkXhrTpmJ~9q8diCcDHxzgsenUiwfufTDOXLUyv-h6bmdg1q00cb9tJK~qcfXyZZD2HH979MmQ71GlC-7M~wrbIXSYInBWBMFba7-RIwpjl3KCXec40ICxwcYljHUqmcwo2u6d9Azyl7Sqem-fd1bPP1-WHYsZK5x~zbd-Vt9oZPZbQz5ak8cqYEy5iV-LV4tDFQr0UoB9tRqGzm~RnwZAEKwiu5VCEDWsCl9C-CEtt~0mpUj8eL7jsbBswZk7aHz9tol~rlTDgT6k3rV5JX~hacLVPUxjxZRe6i8NfGjNFcYDXsiZlvH2htg__',
    author: 'Франсуа Дюпон',
    title: 'Птичья трапеза',
    body: 'Цветная литография (40х60) ',
    price: 22500
  },
  {
    id: 6,
    picture: 'https://s3-alpha-sig.figma.com/img/f32f/888e/e10b4d96d2acd08463a8d8a2887f353f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jT0XmJMmgYVVMhnt0bCgSs46NDJcyRKCy0so2a64gqVpTwJz3~XrS7V6hPU4d9EuM5whthi6qVmsAaNZ5aziUPeyhLf1RTdw7N61TB4cf~nMe030IwNcMHXkUxqy62ErSuTOfUgCW6L~a-tqNk3Zz1mazU4tdOIaehiGrGeLn0CvthZ3baT~NQhCSrVEm4tPfGj1FtLKqHpclI9av~ITBgFqK41oqJ4tRmshMTcsWpBTlFQMaXADbFlf9OIGccy~Z-f-X4Qcsomb7KzZl0HTa8mgWe75Axwdb6k4~Onm9HAPyyhv49SoKSQvchwGIthE2iqhMHWTUUYQ3gJ5AKKwjQ__',
    author: 'Пьер Моранж',
    title: 'Пейзаж с рыбой',
    body: 'Цветная литография (40х60) ',
    price: 20000
  },
]

export default data_france

