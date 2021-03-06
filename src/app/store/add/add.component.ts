import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { endpoint } from 'src/environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  storeForm: any;

  brands = [
    {
      _id: 1,
      name: 'Maamal Mounir',
      short: 'MM',
      location: 'Sekka',
      description: '',
    },
    {
      name: 'Maamal Lana',
      short: 'ML',
      location: '7omet tounes',
      description: '',
    },
    {
      name: 'Maamal Jbob',
      short: 'MJ',
      location: 'moknin tri9 mahdia',
      description: '',
    },
  ];
  brandsNames = this.brands.map((br) => br.name);
  imageSrc: any;
  selectedImage!: File;
  isLoading = false;
  allSizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  selectedSizes = ['S', 'M', 'L', 'XL', 'XXL'];

  constructor(private http: HttpClient) {}

  get f() {
    return this.storeForm.controls;
  }

  ngOnInit(): void {
    this.storeForm = new FormGroup({
      name: new FormControl(''), // , [Validators.required]),
      source: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(''), // , [Validators.required]),
      fabricMaterial: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onUpload(): void {
    document.getElementById('store-add-img')?.click();
  }

  onSelectSize(size: string) {
    var index = this.selectedSizes.indexOf(size);
    if (index !== -1) {
      this.selectedSizes.splice(index, 1);
    } else {
      this.selectedSizes.push(size);
    }
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.storeForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
    this.selectedImage = <File>event.target.files[0];
  }

  onSubmit(): void {
    this.isLoading = true;
    const formData = new FormData();
    formData.append('image', this.selectedImage);

    delete this.storeForm.value.image;

    for (let key in this.storeForm.value) {
      formData.append(key, this.storeForm.value[key]);
    }

    this.http.post(endpoint, formData).subscribe((res: any) => {
      if ((res.message = 'success')) {
        this.storeForm.reset();
        this.imageSrc = undefined;
        this.isLoading = false;
        const downloadUrl = res.product.image;
        window.open(downloadUrl);
      }
    });
  }
}
