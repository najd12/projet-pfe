import { Component, OnInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { DirectionRegional } from 'src/app/auth/models/direction-regional-model';
import { DirectionRegionalService } from 'src/app/service/direction-regional.service';
//import * as $ from 'jquery';

@Component({
  selector: 'app-get-direction-regional',
  templateUrl: './get-direction-regional.component.html',
  styleUrls: ['./get-direction-regional.component.scss']
})
export class GetDirectionRegionalComponent implements OnInit {
  @ViewChild('updateModal') updateModal!: ElementRef;
  directionRegionals: DirectionRegional[] = [];
  selectedDirectionRegional!: DirectionRegional; 
  renderer: any;
  constructor(private directionRegionalService: DirectionRegionalService) { }

  ngOnInit(): void {
    this.getDirectionRegionals();
  }
  getDirectionRegionals(): void {
    this.directionRegionalService
      .getAllDirectionRegional()
      .subscribe((data: DirectionRegional[]) => {
        this.directionRegionals = data;
      });
  }
  deleteDirectionRegional(codeDirection: string) {
    if (confirm('Are you sure you want to delete this Direction Regional?')) {
      this.directionRegionalService.deleteDirectionRegional(codeDirection).subscribe(() => {
        // Reload the list of Direction Regionals after deleting
        this.getDirectionRegionals();
      });
    }
  }
  updateDirectionRegional(codeDirection: string, directionRegional: DirectionRegional): void {
    this.directionRegionalService
      .updateDirectionRegional(codeDirection, directionRegional)
      .subscribe(() => {
        this.getDirectionRegionals();
      });
  }

  openModal(directionRegional: DirectionRegional) {
    this.selectedDirectionRegional = directionRegional;
    this.renderer.addClass(this.updateModal.nativeElement, 'show');
    this.renderer.setStyle(this.updateModal.nativeElement, 'display', 'block');
  }
  closeModal() {
    this.renderer.removeClass(this.updateModal.nativeElement, 'show');
    this.renderer.setStyle(this.updateModal.nativeElement, 'display', 'none');
  }
}
