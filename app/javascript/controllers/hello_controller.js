import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    this.outputTarget.textContent = 'Hello, Saad!'
  }

  greet() {
    this.outputTarget.textContent = 'Hello, World!'
  }
}