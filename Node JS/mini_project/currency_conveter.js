import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const url =
  "https://v6.exchangerate-api.com/v6/7d209535b8130dff148e5768/latest/USD";

https.get(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
});

    response.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;
 
        const convertCurrency = (amount, rate) => {
            return (amount * rate).toFixed(2)
        } 

        rl.question("Enter the amount in USD : ", (amount) => {
            rl.question('Enter the target currency (e.g., INR, EUR, AUD): ', (currency) => {
                const rate = rates[currency.toUpperCase()]
                console.log(amount, rate, currency);
                

                if(rate){
                    console.log(chalk.blueBright.bgBlack(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                }else{
                    console.log(`Invalid Currency code `);
                }
                rl.close()
            })
        })
    })

});
