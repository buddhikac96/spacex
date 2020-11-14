import { Component, OnInit } from '@angular/core';
import { Capsule } from '../models/Capsule.model';
import { CapsuleService } from '../services/capsule.service';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {

  capsules: Capsule[] = [];  

  constructor(
    private capService: CapsuleService
  ) {
    
  }

  ngOnInit(): void {
    this.capService.getCapsules().subscribe(
      res => {
        console.log(res)
        this.capsules = res;
      }
    )
  }


}
