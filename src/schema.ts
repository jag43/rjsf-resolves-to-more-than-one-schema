import { RJSFSchema } from "@rjsf/utils";

export const schema = JSON.parse(`{
    "$id": "/surnames.json(bundled)",
    "$defs": {
        "surnames": {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "/surnames.json",
            "title": "Surname",
            "description": "A row of surname data.",
            "type": "object",
            "properties": {
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
                    "$ref": "#/$defs/locations",
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
            }
        },
        "locations": {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "/locations.json",
            "title": "Location",
            "description": "A type representing supported locations.",
            "type": "string",
            "enum": ["Abingdon", "Cumnor", "Oxford", "Oxfordshire"]
        }
    },
    "$ref": "#/$defs/surnames"
}`) as RJSFSchema;
