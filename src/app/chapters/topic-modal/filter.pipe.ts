import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[],searchSarg:any): any {
    if (!items || !searchSarg) {
      return items;
  }
    return items.filter(function(data:any, index: number){
      const val: any = index+1;
     return val == searchSarg;
    })
  }

}
