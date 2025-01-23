import https from 'https'
import chalk from 'chalk'

const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    https.get(url, (respnse) => {

        let data = "";

        respnse.on('data', (chunk) => {
            data += chunk
        })

        respnse.on('end', () => {
            const joke = JSON.parse(data)
            // console.log(joke);
            
            console.log(chalk.red(`Here is a random ${joke.type} joke:`));
            console.log(chalk.blue(`${joke.setup}`));
            console.log(chalk.blue.bgBlue.bold(`${joke.punchline}`));
        })
        respnse.on('error', () => {
            console.log(`Error fecthing the joke, ${err.massage}`);
        })
    })
}

getJoke()