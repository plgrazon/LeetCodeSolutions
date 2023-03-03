function totalFruit(fruits: number[]): number {
  if (fruits.length < 3) return fruits.length;

  const basket = new Map();
  let max = 0;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {  
    basket.set(fruits[right], basket.get(fruits[right]) + 1 || 1);
     
    while (basket.size > 2) {
        let fruit = fruits[left];

        basket.set(fruit, basket.get(fruit) - 1);

        if (basket.get(fruit) === 0) {
            basket.delete(fruit);
        }

        left++;
    }

    max = Math.max(max, (right - left) + 1);
  }

  console.log(basket);

  return max;
};