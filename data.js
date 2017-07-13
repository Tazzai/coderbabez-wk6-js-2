function randomColumnColor() {
  background_colors = [
    '#FF355E',
    '#FD5B78',
    '#FF6037',
    '#FF9966',
    '#FF9933',
    '#FFCC33',
    '#FFFF66',
    '#FFFF66',
    '#CCFF00',
    '#66FF66',
    '#AAF0D1',
    '#50BFE6',
    '#FF6EFF',
    '#EE34D2',
    '#FF00CC',
    '#FF00CC'
  ];
  var i = Math.floor(Math.random() * background_colors.length);
  return background_colors[i];
}

function randomBackgroundColor() {
  background_colors = [
    '#FF00CC',
    '#EE34D2',
    '#FFFF66'
  ];
  var i = Math.floor(Math.random() * background_colors.length);
  return background_colors[i];
}

function randomDog() {
  dogs = [
    {
      name: 'Bowie',
      parent: 'Becky',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/18011536_156234241574344_7176909219407331328_n.jpg'
    },
    {
      name: 'Tonks',
      parent: 'Meghan',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-19/s320x320/13774700_319544435046731_1301136002_a.jpg'
    },
    {
      name: 'Britta',
      parent: 'Sonia',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/17933967_207807146377335_5752163340625379328_n.jpg'
    },
    {
      name: 'Gus',
      parent: 'Melissa',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/19379679_376805552721596_5539474451298516992_n.jpg'
    },
    {
      name: 'Andi',
      parent: 'Lisa',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/17494535_1673261656312694_1446182537297657856_n.jpg'
    },
    {
      name: 'Pepper',
      parent: 'Lisa',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/17662042_658843390974923_5702249000237793280_n.jpg'
    },
    {
      name: 'Benji',
      parent: 'Tazz',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/13117822_577074802454648_669561747_n.jpg'
    },
    {
      name: 'Stella',
      parent: 'Christina',
      image: 'https://scontent-ort2-2.cdninstagram.com/t51.2885-15/e35/18580614_459447704391612_3858491631091056640_n.jpg'
    }
  ];
  var i = Math.floor(Math.random() * dogs.length);
  return dogs[i];
}
