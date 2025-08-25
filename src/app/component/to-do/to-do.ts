import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ToDoFilter } from "./to-do-filter/to-do-filter";
import * as Data from "../../shared/data/to-do/to-do";

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.html",
  styleUrls: ["./to-do.scss"],
  imports: [ToDoFilter, FormsModule, NgClass],
})
export class ToDo {
  public taskData = Data.task;
  public addAlert: boolean = false;
  public completedText: string;
  public deletedTask: string;
  public taskCompletedAlert: boolean = false;
  public taskInCompletedAlert: boolean = false;
  public taskDeleteAlert: boolean = false;
  public date = new Date();
  public myDate = `${this.date.getDate()} ${Months[this.date.getMonth()]}`;
  public text: string = "";
  public completed: boolean = false;

  public addTask(text: Data.Task) {
    if (this.text && this.myDate) {
      this.taskData.unshift(text);
    }
    this.addAlert = true;
    setTimeout(() => {
      this.addAlert = false;
    }, 3000);
  }

  public taskDeleted(task: Data.Task, i: number) {
    const data = this.taskData.filter((a) => {
      return a === task;
    });
    this.deletedTask = data[0].text;
    this.taskData.splice(i, 1);
    this.taskDeleteAlert = true;
    setTimeout(() => {
      this.taskDeleteAlert = false;
    }, 3000);
  }

  public taskCompleted(task: Data.Task) {
    task.completed = !task.completed;
    if (task.completed == true) {
      this.completedText = task.text;
      this.taskCompletedAlert = true;
      setTimeout(() => {
        this.taskCompletedAlert = false;
      }, 3000);
    } else {
      this.completedText = task.text;
      this.taskInCompletedAlert = true;
      setTimeout(() => {
        this.taskInCompletedAlert = false;
      }, 3000);
    }
  }
}
