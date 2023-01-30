import {Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalBasicComponent implements OnInit {
  @Input() dialogClass: string;
  @Input() hideHeader = false;
  @Input() hideFooter = false;
  @Input() visible = false;
  @Input() visibleAnimate = false;
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.close.emit('close');
    }
  }

}
