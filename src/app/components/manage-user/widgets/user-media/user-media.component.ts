import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/interface/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-media',
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.scss']
})
export class UserMediaComponent {

  @Input() user: User; // Declare user as an input property

  @Input() button: boolean = false;

  @Output() activeSteps = new EventEmitter<{ step: number, user: User }>();

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
    this.activeSteps.emit({ step: number, user: this.user });
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
