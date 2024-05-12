import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-media',
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.scss']
})
export class UserMediaComponent {

  @Input() button: boolean = false;

  @Output() activeSteps = new EventEmitter<number>();

  public files: File[] = [];
  public activeStep: number = 3;
  public validation:boolean = false;

  constructor(private toast: ToastrService){}

  onSelect(event: NgxDropzoneChangeEvent) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
		this.files.splice(this.files.indexOf(event), 1);
	}

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  submit() {
    if(this.files.length >= 1){
      Swal.fire({
        title: 'Are you sure you want to submit the form?',
        text: 'please check account details',
        icon: 'success',
        confirmButtonText: 'submit',
        confirmButtonColor: '#e64942',
        showCancelButton: true,
        cancelButtonColor: '#efefef',
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
            window.location.reload();
          }, 3000);

          this.toast.success('Your Account created successfully.','', {
            timeOut: 3000,
          });
        }
      });
    }else{
      this.validation = true;
      Swal.fire({
        title: 'Please upload a file',
        icon: 'error'
      });
    }
  }
}
