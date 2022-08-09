import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(indexService: IndexService) { }

  ngOnInit(): void {
    
  }

}
