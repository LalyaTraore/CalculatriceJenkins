const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testCalculatrice() {
    // Initialiser le driver (Chrome, depuis l'image Selenium)
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Accéder au site (serveur http lancé sur le port 8080 dans le Dockerfile)
        await driver.get("http://localhost:8080");

        // --- Test 1 : Vérifier l'Addition (2 + 3 = 5) ---
        await driver.findElement(By.id("input1")).sendKeys("2");
        await driver.findElement(By.id("input2")).sendKeys("3");
        await driver.findElement(By.id("btn-add")).click();
        let resultAdd = await driver.findElement(By.id("result")).getText();
        console.log("✅ Test Addition (2+3) : ", resultAdd);

        // --- Test 2 : Division par Zéro (5 / 0) ---
        await driver.findElement(By.id("input1")).clear();
        await driver.findElement(By.id("input2")).clear();
        await driver.findElement(By.id("input1")).sendKeys("5");
        await driver.findElement(By.id("input2")).sendKeys("0");
        await driver.findElement(By.id("btn-div")).click();
        let resultDivZero = await driver.findElement(By.id("result")).getText();
        console.log("✅ Test Division par Zéro (5/0) : ", resultDivZero);

        // --- Test 3 : Entrée Non Valide (ex: 'a' + 3) ---
        await driver.findElement(By.id("input1")).clear();
        await driver.findElement(By.id("input2")).clear();
        await driver.findElement(By.id("input1")).sendKeys("a");
        await driver.findElement(By.id("input2")).sendKeys("3");
        await driver.findElement(By.id("btn-add")).click();
        let resultInvalid = await driver.findElement(By.id("result")).getText();
        console.log("✅ Test Entrée Non Valide (a+3) : ", resultInvalid);

        // --- Test 4 : Vérifier la Soustraction (10 - 4 = 6) ---
        await driver.findElement(By.id("input1")).clear();
        await driver.findElement(By.id("input2")).clear();
        await driver.findElement(By.id("input1")).sendKeys("10");
        await driver.findElement(By.id("input2")).sendKeys("4");
        await driver.findElement(By.id("btn-sub")).click();
        let resultSub = await driver.findElement(By.id("result")).getText();
        console.log("✅ Test Soustraction (10-4) : ", resultSub);

    } finally {
        // Fermer le navigateur
        await driver.quit();
    }
})();

