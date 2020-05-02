import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value:User[], filterText:string): User[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((u:User)=>u.first_name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
