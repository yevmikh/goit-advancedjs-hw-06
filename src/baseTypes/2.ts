//Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

type together = number | string | object;

let anything: together = -20;
anything = "Text";
anything = {};

console.log(anything);

export {};
