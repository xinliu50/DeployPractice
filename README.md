# Cornonavirus Monitor API

## About
This API provides realtime information about the coronavirus situation. They monitor worldometer, cdc.gov and Johns Hopkins and grab the most relevant information for you periodically. Some endpoints gets information every minute, some other one time per 10 minutes.

The endpoint which I am connecting with will provide online information about where coronavirus is currently active, how many cases in the world, etc

I will parse the data and represent them to a table in a html web page.

## Description
1. The table is consisted of **Country**, **Cases**, **Deaths**, **Total Recovered** as the header and each cell has the specific number associated to the header. 

2. Run the app
- Open index.html in the browser and the website will fetch the data automatically then display the table.

## References
- [Rapid API](https://rapidapi.com/astsiatsko/api/coronavirus-monitor?endpoint=apiendpoint_745c45af-47e5-4b99-b962-9f77e164c054) (Check out the Cornonavirus Monitor API)
