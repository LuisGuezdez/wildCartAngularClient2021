import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { Subject } from 'rxjs';
import { MetadataService } from 'src/app/service/metadata.service';
import { Constants } from 'src/app/model/constants';
import { CheckSession } from 'src/app/class/check.session.class';

@Component({
  selector: 'app-comment-remove-admin-routed',
  templateUrl: './comment-remove-admin-routed.component.html',
  styleUrls: ['./comment-remove-admin-routed.component.css']
})
export class CommentRemoveAdminRoutedComponent extends CheckSession implements OnInit {

  strProfile: string = Constants.PROFILES.admin;
  strEntity: string = Constants.ENTITIES.comment;
  strOperation: string = Constants.OPERATIONS.remove
  id: number = 0;

  constructor(
    private oProductoService: ProductoService,
    private oActivatedRoute: ActivatedRoute,
    protected oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    super(Constants.PROFILES.admin, oRouter, oActivatedRoute);
    this.id = this.oActivatedRoute.snapshot.params.id
  }

  ngOnInit(): void { }

  removeOne() {
    let strResult: string = '';
    this.oProductoService.removeOne(this.id).subscribe((id: number) => {
      if (id) {
        strResult = this.oMetadataService.getName('the' + this.strEntity) + " con id = " + this.id + " se ha eliminado.";
      } else {
        strResult = 'Error en el borrado de ' + this.oMetadataService.getName('the' + this.strEntity).toLowerCase();
      }
      this.openPopup(strResult);
    })
  }

  //popup

  eventsSubjectShowPopup: Subject<string> = new Subject<string>();

  openPopup(str: string): void {
    this.eventsSubjectShowPopup.next(str);
  }

  onClosePopup(): void {
    this.oRouter.navigate(['/', this.strProfile, this.strEntity, 'plist']);
  }

}