var exportData = {};
for (const element of document.querySelectorAll("input,textarea")) {
  switch (element.type) {
    case "text":
    case "textarea":
      exportData[element.id] = {
        value: element.value
      };
      break;
    case "checkbox":
      exportData[element.id] = {
        checked: element.checked
      };
      break;
    case "submit":
      break;
    default:
      throw new Error(`未対応のタイプ ${element.type} が使用されました`);
  }
}

`
var exportData = ${JSON.stringify(exportData, null, 4)};
!${function() {
  for (const [elementId, exported] of Object.entries(exportData)) {
      for (const [key, value] of Object.entries(exported)) {
        const element = document.querySelector("#" + elementId);
        if (element) {
          element[key] = value;
        } else {
          console.error("#" + elementId + " の要素は存在しません");
        }
      }
  }
}.toString()}();
`;


