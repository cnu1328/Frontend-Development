// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`

addEventListener("message", (message) => {
    if(message.data.command === 'generate') 
        generatePrimes(message.data.quota);
});

function generatePrimes(quota) {
    function isPrime(n) {
        for(let i=2; i<=Math.sqrt(n); i++) {
            if(n%i == 0)
                return false;
        }

        return true;
    }


    const primes = [];
    const maximum = 10000000;

    while(primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));

        if(isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    postMessage(primes.length);
}