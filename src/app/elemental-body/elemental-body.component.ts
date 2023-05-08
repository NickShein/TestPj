import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elemental-body',
  templateUrl: './elemental-body.component.html',
  styleUrls: ['./elemental-body.component.css']
})
export class ElementalBodyComponent implements OnInit {
  @Input() name:string = '';
  @Input() description:string = '';
  @Input() imgLink:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
