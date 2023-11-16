
const api_endpoint = "https://us-east-1.aws.data.mongodb-api.com/app/data-quwlt/endpoint/data/v1/action/findOne";

const myBody = {
    "collection": "listingsAndReviews",
    "database": "sample_airbnb",
    "dataSource": "Cluster0",
    "filter": {
        "beds": 2,
        "property_type": "House"
    },
    "projection": {
        "_id": 1,
        "beds": 1,
        "name": 1,
        "bedrooms": 1
    }
};

const response = await fetch(api_endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'api-key': 'vOGi0Uetg7bgYMMuWLXP5yE95nhvplA8g36k3MoVoyHLh9O1B5LyeB7BCzQaDtvw',
    },
    body: JSON.stringify(myBody)
});

const json_response = await response.json();
console.log(json_response);