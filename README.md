# expo-postpublish-notify

Post a notification on an incoming webhook

## Installation

1. [Create an incoming webhook]
2. `add expo-postpublish-notify` in your project.
3. Add the following to your `app.json` within the "expo" key.

```javascript
  "hooks": {
    "postPublish": [
      {
        "file": "expo-postpublish-notify",
        "config": {
          "webhookUrl": "your webhook url here",
        }
      }
    ]
  }
```
