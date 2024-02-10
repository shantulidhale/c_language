let b = {
    "IndoEuropean": {
        "IndoIranian": {
            "Iranian": [
                "Persian",
                "Avestan",
                "Sogdian",
                "Baluchi",
                "Kurdish",
                "Pashto"
            ],
            "Indic": [
                "Assamese",
                "Bengali",
                "Gujarati",
                "Hindi",
                "Marathi",
                "Punjabi",
                "Romany",
                "Sindhi",
                "Singhalese",
                "Urdu"
            ]
        },
        "Baltic": [
            "Latvian",
            "Lithuanian"
        ],
        "Slavic": {
            "East Slavic": [
                "Russian",
                "Belarusian",
                "Ukrainian"
            ],
            "SouthSlavic": [
                "Bulgarian",
                "Slovenian",
                "Serbo-Croatian",
                "Macedonian"
            ],
            "WestSlavic": [
                "Polish",
                "Czech",
                "Slovak",
                "Sorbian"
            ]
        }
    }
}
console.log(`${b.IndoEuropean.Slavic.WestSlavic[1]}`);
console.log(`${b.IndoEuropean.IndoIranian.Indic[2]}`);
console.log(`${b.IndoEuropean.Baltic[0]}`);
console.log(`${b.IndoEuropean.Slavic.SouthSlavic[3]}`);
console.log(`${b.IndoEuropean.IndoIranian.Iranian[3]}`)