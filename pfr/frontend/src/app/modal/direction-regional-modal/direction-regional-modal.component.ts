import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-direction-regional-modal',
  templateUrl: './direction-regional-modal.component.html',
  styleUrls: ['./direction-regional-modal.component.scss']
})
export class DirectionRegionalModalComponent implements OnInit {
  directionRegionalForm = new FormGroup({
    libelleDirection: new FormControl('', ),
    lieuArchive: new FormControl('',Validators.required),
    lieuArchiveSecAge : new FormControl('',Validators.required)
  })
  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
