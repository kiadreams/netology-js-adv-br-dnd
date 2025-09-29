export class ShadowOfCard {
  constructor() {
    this.field = this.createField()
  }

  createField() {
    const cardBox = document.createElement('div')
    cardBox.append(this.createTextarea())
    return cardBox;
  }

  createTextarea() {
    const textArea = document.createElement('textarea')
    textArea.classList.add('card')
    return textArea
  }
}
