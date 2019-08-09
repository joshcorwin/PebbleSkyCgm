module.exports = [
  {
    "type": "heading",
    "defaultValue": "App Configuration"
  },
  {
    "type": "text",
    "defaultValue": "Here is some introductory text."
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Colors"
      },
      {
        "type": "color",
        "messageKey": "BackgroundColor",
        "defaultValue": "0x000000",
        "label": "Background Color"
      },
      {
        "type": "color",
        "messageKey": "Blues",
        "defaultValue": "0xFFFFFF",
        "label": "Foreground Color"
      }
    ]
  },

  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "SKYLOOP SETTINGS"
      },
      {
        "type": "toggle",
        "messageKey": "Loop",
        "label": "Loop  or OpenAPS",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "Animations",
        "label": "Enable Animations",
        "defaultValue": false
      },
      {
  "type": "input",
  "messageKey": "email",
  "defaultValue": "https://cgm.herokuapp.com",
  "label": "Nightscout Website",
  "attributes": {
    "placeholder": "eg: https://yourname.azurewebsites.net",
    //"limit": 10,
    "type": "email"
  }
},
      {
  "type": "select",
  "messageKey": "mode",
  "defaultValue": "nightscout",
  "label": "Select Mode",
  "options": [
    { 
      "label": "", 
      "value": "" 
    },
    { 
      "label": "Nighstcout",
      "value": "Nightscout" 
    },
    { 
      "label": "US Share",
      "value": "US_Share" 
    },
    { 
      "label": "Non-US Share",
      "value": "Non_US_Share" 
    }
  ]
}
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
