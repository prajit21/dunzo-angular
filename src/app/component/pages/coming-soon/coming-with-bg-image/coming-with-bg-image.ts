import { Component } from "@angular/core";

@Component({
  selector: "app-coming-with-bg-image",
  templateUrl: "./coming-with-bg-image.html",
  styleUrls: ["./coming-with-bg-image.scss"],
  imports: [],
})
export class ComingWithBgImage {
  public seconds: number;
  public interval: ReturnType<typeof setInterval>;

  constructor() {
    this.interval = setInterval(
      function (this: ComingWithBgImage) {
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        currentDate.setDate(currentDate.getDate() + 7);

        const nowDate = new Date();
        const distance = currentDate.getTime() - nowDate.getTime();

        document.querySelectorAll("#days").forEach((element) => {
          (element as HTMLElement).innerHTML = Math.floor(
            distance / (1000 * 60 * 60 * 24),
          ).toString();
        });

        document.querySelectorAll("#hours").forEach((element) => {
          (element as HTMLElement).innerHTML = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ).toString();
        });

        document.querySelectorAll("#minutes").forEach((element) => {
          (element as HTMLElement).innerHTML = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60),
          ).toString();
        });

        document.querySelectorAll("#seconds").forEach((element) => {
          (element as HTMLElement).innerHTML = Math.floor(
            (distance % (1000 * 60)) / 1000,
          ).toString();
        });
      }.bind(this),
      this.seconds,
    );
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
