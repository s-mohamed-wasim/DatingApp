import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members : Member[];

  constructor(private membersService : MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers()
  {
    this.membersService.getMembers().subscribe(members => {this.members = members});
  }

}
