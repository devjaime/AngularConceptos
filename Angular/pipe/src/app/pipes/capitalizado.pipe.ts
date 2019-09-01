import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class NamePipe implements PipeTransform {
    transform(value: string, args:any[]): string {
        return;
    }
}