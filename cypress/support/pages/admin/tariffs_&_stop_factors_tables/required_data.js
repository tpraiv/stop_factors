class requiredData {
    constructor(requiredData) {this.requiredData = requiredData;}

    dataForFillingInTheRequiredFieldsToCreateANewStopFactor = {
        clientAge: 13,
        minPeriod: 23,
        maxPeriod: 33,
        minSum: 43,
        maxSum: 59
    }

    second = {
        clientAge: 15,
        minPeriod: 15,
        maxPeriod: 15,
        minSum: 15,
        maxSum: 15
    }

    cancelNewSF = {
        clientAge: 18,
        minPeriod: 28,
        maxPeriod: 38,
        minSum: 48,
        maxSum: 58
    }

    cancelNewSFArray = [
        this.cancelNewSF.clientAge,
        this.cancelNewSF.minPeriod,
        this.cancelNewSF.maxPeriod,
        this.cancelNewSF.minSum,
        this.cancelNewSF.maxSum
    ]

    deleteSavedSF = {
        clientAge: 19,
        minPeriod: 29,
        maxPeriod: 39,
        minSum: 49,
        maxSum: 51
    }

    deleteSavedSFArray = [
        this.deleteSavedSF.clientAge,
        this.deleteSavedSF.minPeriod,
        this.deleteSavedSF.maxPeriod,
        this.deleteSavedSF.minSum,
        this.deleteSavedSF.maxSum
    ]

    secondArray = [
        this.second.clientAge,
        this.second.minPeriod,
        this.second.maxPeriod,
        this.second.minSum,
        this.second.maxSum
    ]

    dataForFillingInTheRequiredFieldsToCreateANewTariff = {
        tariff: 0.5,
        minimumSum: 3000,        
        clientAge: 15,
        minPeriod: 25,
        maxPeriod: 35,
        minSum: 45,
        maxSum: 57
    }


    arrayForTheStopFactorsTableData = [
        this.dataForFillingInTheRequiredFieldsToCreateANewStopFactor.clientAge,
        this.dataForFillingInTheRequiredFieldsToCreateANewStopFactor.minPeriod,
        this.dataForFillingInTheRequiredFieldsToCreateANewStopFactor.maxPeriod,
        this.dataForFillingInTheRequiredFieldsToCreateANewStopFactor.minSum,
        this.dataForFillingInTheRequiredFieldsToCreateANewStopFactor.maxSum
    ]

    arrayForTheTariffsTableData = [
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.tariff,
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.minimumSum,
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.clientAge,
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.minPeriod,
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.maxPeriod,
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.minSum,
        this.dataForFillingInTheRequiredFieldsToCreateANewTariff.maxSum
    ]

    copyStopFactorData = {
        clientAge: '874',
        minPeriod: 180,
        maxPeriod: 365,
        minSum: 30000,
        maxSum: 100000
    }

    arrayForTheCopyStopFactorData = [
        this.copyStopFactorData.clientAge,
        this.copyStopFactorData.minPeriod,
        this.copyStopFactorData.maxPeriod,
        this.copyStopFactorData.minSum,
        this.copyStopFactorData.maxSum
    ]

}

export default requiredData