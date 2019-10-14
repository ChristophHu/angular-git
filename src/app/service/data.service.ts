import { Injectable, EventEmitter } from '@angular/core'

@Injectable()
export class DataService {
  pushedData = new EventEmitter<string>()

  constructor() { }

  pushData(data: string) {
    this.pushedData.emit(data)
  }
}
