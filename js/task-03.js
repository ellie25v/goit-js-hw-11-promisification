//   Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
//   а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction, onSuccess, onError) => {
    const delay = randomIntegerFromInterval(200, 500);
    const id = transaction.id
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if(canProcess){
                const result = {id, delay};
                resolve(result);
            }
            else{
                reject(logError(transaction.id));
            }
        }, delay);
    })
};

const logSuccess = (result) => {
    console.log(`Transaction ${result.id} processed in ${result.delay}ms`);
};

const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({
        id: 70,
        amount: 150
    })
    .then(logSuccess)
    .catch(logError);

makeTransaction({
        id: 71,
        amount: 230
    })
    .then(logSuccess)
    .catch(logError);

makeTransaction({
        id: 72,
        amount: 75
    })
    .then(logSuccess)
    .catch(logError);

makeTransaction({
        id: 73,
        amount: 100
    })
    .then(logSuccess)
    .catch(logError);