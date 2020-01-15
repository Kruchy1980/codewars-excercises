// Welcome!
function greet(language) {
    return language === 'english' ? 'Welcome'
        : language === 'czech' ? 'Vitejte'
            : language === 'danish' ? 'Velkomst'
                : language === 'dutch' ? 'Welkom'
                    : language === 'estonian' ? 'Tere tulemast'
                        : language === 'finnish' ? 'Tervetuloa'
                            : language === 'flemish' ? 'Welgekomen'
                                : language === 'french' ? 'Bienvenue'
                                    : language === 'german' ? 'Willkommen'
                                        : language === 'irish' ? 'Failte'
                                            : language === 'italian' ? 'Benvenuto'
                                                : language === 'latvian' ? 'Gaidits'
                                                    : language === 'lithuanian' ? 'Laukiamas'
                                                        : language === 'polish' ? 'Witamy'
                                                            : language === 'spanish' ? 'Bienvenido'
                                                                : language === 'swedish' ? 'Valkommen'
                                                                    : language === 'welsh' ? 'Croeso' : 'Welcome';
}