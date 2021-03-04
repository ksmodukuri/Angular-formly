import { Component, ElementRef, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css'],
  providers:[NgbModalConfig, NgbModal]
})
export class FormlyComponent implements OnInit {

  form = new FormGroup({});
  model={};
  hindi:boolean=true;
  english:boolean=false;

  fields:FormlyFieldConfig[]=[
    {
      key:"firstName",
      type:"input",
      templateOptions:{
        label: "First Name",
        placeholder:"First Name",
        required:true
      }
    },
    {
      key:"lastName",
      type:"input",
      templateOptions:{
        label: "Last Name",
        placeholder:"Last Name"
      }
    },{
      key:"email",
      type:"input",
      templateOptions:{
        type:"email",
        label: "Email Id",
        placeholder:"Email",
        required:true,
      }
    },{
      key:"phone",
      type:"input",
      templateOptions:{
        type:"number",
        label: "Phone Number",
        placeholder:"Phone number",
        required:true,
        min:1111111111,
        max:9999999999
      }
    },
  ];

  constructor(config: NgbModalConfig, private modalService: NgbModal,private elRef: ElementRef) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model);
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, size:'lg' });
  }

  changeSrc(lang:string){
   if(lang=="English"){
     this.english=true;
     this.hindi=false;
   }else{
    this.hindi=true;
    this.english=false;
   }
  }

}
