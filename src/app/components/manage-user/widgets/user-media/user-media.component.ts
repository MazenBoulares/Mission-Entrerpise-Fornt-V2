import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/interface/interface';
import Swal from 'sweetalert2';
import { PropertyService} from 'src/app/shared/services/property.service';
import { ImageUploadService } from 'src/app/shared/services/image-upload.service';
import { Observable } from 'rxjs';

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
  imageUrls: string[] = [];
  public activeStep: number = 3;
  public validation:boolean = false;

  constructor(private toast: ToastrService, private propertyService: PropertyService,private imageUploadService: ImageUploadService){}

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
    if (this.files.length >= 1) {
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
          Swal.showLoading(); // Show loading indicator
  
          this.uploadAndSubmit().then(() => {
  
            Swal.close(); // Hide loading indicator after upload and submit
            // Reload the page after uploading and submitting
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }).catch(error => {
            Swal.close(); // Hide loading indicator if error occurs
            console.error('Error occurred during upload and submit:', error);
          });
        }
      });
    } else {
      this.validation = true;
      Swal.fire({
        title: 'Please upload a file',
        icon: 'error'
      });
    }
  }
  
  async uploadAndSubmit() {
    await this.onUpload(); // Wait for file uploads to complete
    this.user.userImageUrl = this.imageUrls[0];
  
    // Determine the appropriate API endpoint based on user type
    let submitApi: Observable<User>;

    console.log("the user type :", this.user.userType)
  
    switch (this.user.userType) {
      case 'ADMIN':
        submitApi = this.propertyService.submitAdmin(this.user);
        break;
      case 'LANDLORD':
        submitApi = this.propertyService.submitLandlord(this.user);
        break;
      case 'PROPERTY_SEEKER':
      default:
        submitApi = this.propertyService.submitPropertySeeker(this.user);
        break;
    }
  
    // Submit the user details
    return new Promise<void>((resolve, reject) => {
      submitApi.subscribe(
        response => {
          console.log('User submitted successfully', response);
          this.activeSteps.emit({ step: this.activeStep, user: this.user });
          this.toast.success('Your Account created successfully.', '', { timeOut: 3000 });
          resolve();
        },
        error => {
          this.toast.error('Account Creation Failed.', '', { timeOut: 3000 });
          console.error('Error submitting user', error);
          reject(error);
        }
      );
    });
  }
  


  onUpload(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.files.length > 0) {
        let currentIndex = 0;
        const uploadNextFile = () => {
          if (currentIndex < this.files.length) {
            const file = this.files[currentIndex];
            this.imageUploadService.uploadImage(file).subscribe(
              (response) => {
                if (response && response.data && response.data.url) {
                  this.imageUrls.push(response.data.url);
                  console.log('Uploaded Image URL:', response.data.url);

                  currentIndex++;
                  uploadNextFile();
                }
              },
              error => {
                console.error('Upload failed for file:', file.name);
                reject(error);
              }
            );
          } else {
            resolve(); // All files are uploaded
          }
        };
        uploadNextFile();
      } else {
        console.error('No files selected.');
        reject('No files selected.');
      }
    });
  }














}
