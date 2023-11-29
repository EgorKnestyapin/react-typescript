function Lesson20() {
  // Создание boolean переменной isActive и присвоение ей значения true
  // 1. Если мы инициализировали переменную и сразу же присвоили ей значение
  // без присвоения типа, то тип присваивается сам в зависимости от перем.
  // 2. Если явно указали тип, например, boolean, то в других местах кода,
  // где мы захотим присвоить значения другого типа, у нас будет ошибка
  let isActive: boolean = true;
  //   isActive = 2; ошибка
  console.log(isActive);

  // number
  let num: number = 3;
  num = 2.5;

  // string: любые слова и выражения, заключенные в ``, "", ''
  let info: string = `Ваше число: ${num}`;

  // масив string[]: в левой части пишется, какие элементы в массиве
  let fruits: string[] = ["cherry", "apple"];
  console.log(fruits);
  

  return <div className="lesson20-wrapper">{info}</div>;
}

export default Lesson20;
