import { RJSFSchema } from "@rjsf/utils";

export const schema = JSON.parse(`{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "surnames-v1.1.0.json",
    "title": "Surname",
    "description": "A row of surname data.",
    "type": "object",
    "required": [
      "Surname"
    ],
    "properties": {
      "DataSource": {
        "description": "Data Source",
        "columnName": "Data source",
        "type": "string",
        "includeInSearchList": false,
        "isDataSource": true
      },
      "Surname": {
        "description": "Surname",
        "columnName": "Surname",
        "type": "string",
        "includeInSearchList": true
      },
      "FirstName": {
        "description": "First name",
        "columnName": "First name",
        "type": "string",
        "includeInSearchList": true
      },
      "Location": {
        "description": "Location",
        "columnName": "Location",
        "$ref": "#/$defs/locations.json",
        "isFacet": true,
        "includeInSearchList": true
      },
      "Date": {
        "description": "Date",
        "columnName": "Date",
        "type": "integer",
        "isFacet": true,
        "facetStepSize": "20",
        "includeInSearchList": true
      }
    },
    "$defs": {
      "locations.json": {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "title": "Location",
        "description": "A type representing supported locations.",
        "type": "string",
        "enum": [
          "Abingdon",
          "Cumnor",
          "Oxford",
          "Oxfordshire"
        ]
      }
    }
  }`) as RJSFSchema;
