import { Component, inject } from '@angular/core';
import {DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ToDo, Column } from './../../models/todo.model';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { TodoDialogComponent } from './../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, TodoDialogComponent],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    `
  ]
})
export class BoardComponent {

  private dialog = inject(Dialog);

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Task 1'
        },
        {
          id: '2',
          title: 'Task 2'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Task 3'
        },
        {
          id: '4',
          title: 'Task 4'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '5',
          title: 'Task 5'
        }
      ]
    }
  ]

  todos: ToDo[] = [];

  doing: ToDo[] = [];

  done: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>){
    if  (event.previousContainer == event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex, 
        event.currentIndex
      );
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New column',
      todos: []
    })
  }

  openDialog(todo: ToDo){
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        todo: todo,
      }
    });
    dialogRef.closed.subscribe( output => {
      console.log(output);
    });
  }

}
