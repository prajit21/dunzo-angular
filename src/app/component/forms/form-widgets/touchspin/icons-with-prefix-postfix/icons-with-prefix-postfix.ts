import { Component } from "@angular/core";

@Component({
  selector: "app-icons-with-prefix-postfix",
  templateUrl: "./icons-with-prefix-postfix.html",
  styleUrls: ["./icons-with-prefix-postfix.scss"],
  imports: [],
})
export class IconsWithPrefixPostfix {
  public counter: number[] = [0, 0];

  public increment(i: number) {
    if (i === 0 || i === 1) {
      this.counter[i] += 1;
    }
  }

  public decrement(i: number) {
    if (i === 0 || i === 1) {
      if (this.counter[i] > 0) {
        this.counter[i] -= 1;
      }
    }
  }
}
