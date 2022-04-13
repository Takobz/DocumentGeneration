param location string = resourceGroup().location
param webAppName string

module appService 'modules/appService.bicep' = {
  name: 'appService'
  params: {
    webAppName: webAppName
    location: location
  }
}
