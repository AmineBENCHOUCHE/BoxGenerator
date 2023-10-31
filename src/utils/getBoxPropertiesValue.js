export default function getBoxPropertiesValue(boxProperties) {
  let finalString = [];
  boxProperties.forEach((element) => {
    switch (element.inputNumber) {
      case 1:
        finalString.push({
          prop: "border-radius: ",
          value: `${element.value}px; `,
        });
        break;
      case 2:
        finalString.push({ prop: "height: ", value: `${element.value}px; ` });
        break;
      case 3:
        finalString.push({ prop: "width: ", value: `${element.value}px; ` });
        break;
      case 4:
        finalString.push({
          prop: "background-color: ",
          value: `${element.value}`,
        });
        break;

      default:
        break;
    }
  });

  return finalString;
}
