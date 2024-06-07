const daysOfWeek = ['Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const correctedDaysOfWeek = [...daysOfWeek.slice(0, 2), 'Wednesday', ...daysOfWeek.slice(3)];
console.log(correctedDaysOfWeek);
