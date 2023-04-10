import { Component, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
@Input() rating: number;
@Input() isReadOnly: boolean = false;
@Output() rateChange = new EventEmitter<number>();

onRateChange(value: number) {
  this.rateChange.emit(value);
}
  constructor(){

}
ngOnInit():void{

}

}
