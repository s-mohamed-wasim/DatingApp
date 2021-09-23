import { Component, OnInit } from '@angular/core';
import { Member } from 'src/_models/member';
import { MembersService } from '../_services/members.service';

@Component({
  selector: 'app-wasim',
  templateUrl: './wasim.component.html',
  styleUrls: ['./wasim.component.css']
})
export class WasimComponent implements OnInit {

  constructor(private membersService : MembersService) { }

  member : any;

  desired_user : string;

  ngOnInit(): void {
  }

  getMember()
  {
    this.membersService.getMember(this.desired_user).subscribe(r => {this.member = r},e => {console.log(e)});
  }

}
