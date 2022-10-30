import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  grabscrab(anagram: string, dictionary: string[]): string[] {
    const filteredDictionary = dictionary.filter(
      (el) => el.length === anagram.length
    );
    const anagramLetters = anagram.split('').sort().join('');

    return filteredDictionary.filter((el) => {
      return el.split('').sort().join('') === anagramLetters;
    });
  }

  isValidWalk(walk: string[]) {
    const Sides = new Map();
    Sides.set('e', [0, 1]);
    Sides.set('w', [0, -1]);
    Sides.set('n', [1, 0]);
    Sides.set('s', [-1, 0]);
    let x = 0;
    let y = 0;
    walk.forEach((step) => {
      x += Sides.get(step)[1];
      y += Sides.get(step)[0];
    });
    return x === 0 && y === 0;
  }

  stockList(listOfArt: string[], listOfCat: string[]) {
    const obj = listOfCat.reduce((o, key) => ({ ...o, [key]: 0 }), {});

    const computed = listOfArt.reduce((acc, cur, ind) => {
      const value = [...cur].findIndex((val) => val === ' ');
      const valueToNum = Number(cur.slice(value));
      obj[cur.charAt(0)] += valueToNum;
      return obj;
    }, obj);

    let string = '';
    for (let key in computed) {
      if (isNaN(computed[key]) || computed[key] == undefined) {
        delete computed[key];
      } else {
        string += `(${key} : ${computed[key]}) - `;
      }
    }
   console.log(Object.entries(computed) )
    const strArr = [...string];
    strArr.splice(-3, 3);
    // console.log(strArr);
    return strArr.join('');
  }
}
