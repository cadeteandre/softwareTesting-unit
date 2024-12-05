const tipCalculator = (billValue: string, peopleAmount: string, serviceQuality: string) => {
    const result = {
        billValue: Math.round((Number(billValue) * 100) / 100),
        peopleAmount: Number(peopleAmount),
        serviceQuality: serviceQuality,
        tip: 0,
        pricePerPerson: 0
    }
    switch(true) {
        case (result.serviceQuality === 'bad'): 
            result.tip = result.billValue * 0.02
            break;
        case (result.serviceQuality === 'ok'):
            result.tip = result.billValue * 0.1
            break;
        case (result.serviceQuality === 'super'):
            result.tip = result.billValue * 0.2
            break;
    }
    result.pricePerPerson = Number(((result.billValue + result.tip) / result.peopleAmount).toFixed(2));

    return result;
}

export default tipCalculator;