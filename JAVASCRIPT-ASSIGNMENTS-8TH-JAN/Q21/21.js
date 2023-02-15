let countries = [`India`, `Sri-Lanka`,`Australia`,`Israel`];

let Ethiopia = countries.includes(`Ethiopia`);



if (Ethiopia) {
    console.log(countries[countries.indexOf(`Ethiopia`)].toUpperCase());
} else {
    countries.push(`Ethiopia`)
    console.log(countries[countries.indexOf(`Ethiopia`)].toUpperCase());
}

// let country = [`India`,`Maldives`,`Singapore`,`venice`];

// if (country.includes(`Ethiopia`)) {
//     console.log(country[country.indexOf(`Ethiopia`)].toUpperCase());
// } else{
//     country.push(`Ethiopia`);
//     console.log(country[country.indexOf(`Ethiopia`)].toUpperCase());
// }
