/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Mon = "MONDAY",
  The = "TUESDAY",
  Wed = "WEDNESDAY",
  Thu = "THURSDAY",
  Fri = "FRIDAY",
  Sat = "SATURDAY",
  Sun = "SUNDAY",
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Sat || day === DayOfWeek.Sun;
}

const isSaturdayWeekend = isWeekend(DayOfWeek.Sat);
console.log(isSaturdayWeekend);

export {};
