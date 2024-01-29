import { Component, Inject, inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faBell, faInfoCircle, faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from './../../components/btn/btn.component'
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo:ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  todo: ToDo;

  constructor(
    //private dialogRef: DialogRef<Data>,
    @Inject(DIALOG_DATA) private data: InputData
  ){
    this.todo = data.todo;
    console.log(this.todo);
  }

  private dialogRef = inject(DialogRef<OutputData>);

  faClose =faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  close(){
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean){
    this.dialogRef.close({
      rta: rta
    });
  }

}
