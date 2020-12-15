import { Component, Input, OnInit } from '@angular/core';
import { SampleService } from 'src/app/shared/services/sample.service';
 

@Component({
  selector: 'app-show-users',
    templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

   public id:number;
   public data =[]

   public show:boolean = false;
   public create:boolean = false;
   public Edit:any = {}
   public Create:any ={name:'',sequence:''}

   constructor(private _servc:SampleService) { }

  ngOnInit(): void {
   this.maindata();
  }


   //Show all users
  maindata(){
    this._servc.getData().subscribe(w =>
     
       this.data = w)
   
  }



  //Create the user
  onCreateSubmit(){
      this._servc.createData(this.Create).subscribe(x => this.maindata())
      this.create = false;
  }
   


    //Edit the user with id
    onEditForm(x){
      this.show=true;
      this._servc.getSingleData(x.id).subscribe(y=> this.Edit =y);
    }



    //Edit the user
   onEditSubmit(){
  if(window.confirm('Are you sure you want to update?')){
    setTimeout(() => {
      this._servc.updateData(this.Edit).subscribe(z =>  this.maindata())
      this.show = false;

    }, 1000);
  } 
   }
    

    //delete the user
   onDelete(x){
    if (window.confirm('Are you sure you want to delete?')){
    this._servc.deleteData(x.id).subscribe(a => this.maindata());
    }
   }
}
