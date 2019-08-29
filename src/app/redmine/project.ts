import { Participant } from './participant';
import { Connection } from './connection';

export class Project {
  private title: String;
  private code: String;
  private id: number;
  // private participants: Participant [];
  private connection: Connection;

  public set_id (id: number) {
    this.id = id;
  }

  public get_id (): number {
    return this.id;    
  }

  public set_title (title: String) {
    this.title = title;
  }

  public get_title (): String {
    return this.title;    
  }

}