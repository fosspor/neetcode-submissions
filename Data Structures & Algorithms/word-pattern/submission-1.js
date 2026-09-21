class Solution {
  wordPattern(pattern, s) {
    const words = s.split(" ");

    // Количество букв и слов должно совпадать
    if (pattern.length !== words.length) {
      return false;
    }

    const letterToWord = new Map();
    const wordToLetter = new Map();

    for (let i = 0; i < pattern.length; i++) {
      const letter = pattern[i];
      const word = words[i];

      // Проверяем соответствие: буква → слово
      if (
        letterToWord.has(letter) &&
        letterToWord.get(letter) !== word
      ) {
        return false;
      }

      // Проверяем соответствие: слово → буква
      if (
        wordToLetter.has(word) &&
        wordToLetter.get(word) !== letter
      ) {
        return false;
      }

      letterToWord.set(letter, word);
      wordToLetter.set(word, letter);
    }

    return true;
  }
}