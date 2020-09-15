import { Poney } from './../interfaces/poney.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'racing'
})
export class RacingPipe implements PipeTransform {

  transform(ponies: Poney[], poneyIds: string[]): Poney[] {
    // return ponies && poneyIds ? ponies.filter((poney) => {
    //   return poneyIds.includes(poney.id)
    // }) : []

    return ponies && poneyIds ? 
      ponies.filter(poney => poneyIds.includes(poney.id)) : []
  }

}
