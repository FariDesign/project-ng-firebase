import { Component } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "project-firebase";

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list("/Courses/")
      .valueChanges()
      .subscribe(course => console.log(course));
  }
}
