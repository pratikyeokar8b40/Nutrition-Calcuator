const foods = {
  // GRAM BASED (COOKED)
  chicken: { type: "gram", calories: 165, protein: 31, fat: 3.6, carbs: 0 },
  paneer: { type: "gram", calories: 265, protein: 19, fat: 21, carbs: 1.5 },
  soya: { type: "gram", calories: 172, protein: 27, fat: 0.3, carbs: 16 },
  sprouts: { type: "gram", calories: 30, protein: 3, fat: 0.2, carbs: 6 },
  chana: { type: "gram", calories: 164, protein: 9, fat: 2.6, carbs: 27 },
  peanuts: { type: "gram", calories: 567, protein: 25.8, fat: 49, carbs: 16 },
  oats: { type: "gram", calories: 389, protein: 17, fat: 7, carbs: 66 },
  rice: { type: "gram", calories: 130, protein: 2.7, fat: 0.3, carbs: 28 },

  // COUNT BASED
  eggs: { type: "count", calories: 70, protein: 6, fat: 5, carbs: 0.6 },
  banana: { type: "count", calories: 105, protein: 1.3, fat: 0.4, carbs: 27 },
  chapati: { type: "count", calories: 120, protein: 3.5, fat: 0.6, carbs: 18 }
};

function calculate() {
  let totalProtein = 0;
  let totalCalories = 0;
  let totalFat = 0;
  let totalCarbs = 0;

  for (let item in foods) {
    const input = document.getElementById(item);
    if (!input) continue;

    let value = Number(input.value);
    if (value <= 0) continue;

    if (foods[item].type === "gram") {
      totalProtein += foods[item].protein * value / 100;
      totalCalories += foods[item].calories * value / 100;
      totalFat += foods[item].fat * value / 100;
      totalCarbs += foods[item].carbs * value / 100;
    } else {
      totalProtein += foods[item].protein * value;
      totalCalories += foods[item].calories * value;
      totalFat += foods[item].fat * value;
      totalCarbs += foods[item].carbs * value;
    }
  }

  document.getElementById("totalProtein").innerText = totalProtein.toFixed(1);
  document.getElementById("totalCalories").innerText = totalCalories.toFixed(1);
  document.getElementById("totalFat").innerText = totalFat.toFixed(1);
  document.getElementById("totalCarbs").innerText = totalCarbs.toFixed(1);
}
