export class Connection {

  
  private _host: string;
  private _port: number;
  private _useSSL: boolean;
  private _connected: boolean;
  
  
  constructor (host: string, private _APIKey?: string) {
    this._useSSL = false;

  }

  get isConnected() { return this._connected; }

  set useSSL(value: boolean) { this._useSSL = value; }
  get useSSL():boolean { return this._useSSL; }

  set host(value: string) { this._host = value; }
  get host():string { return this._host; }

  set port(value: number) {
    if (value <= 0 || value >= 65535) {
      alert('Port should be in range 0 - 65535')
    } else {
      this._port = value;
    }
  }

  set APIKey(value: string) {
    let wasConnected:boolean = this.isConnected;
    if (wasConnected) { this.disconnect; }
    this._APIKey = value;
    if (wasConnected) { this.connect; }
  }

  connect() {
    // Try to connect to host
    this._connected = true;
  }

  disconnect() {
    // If connected - disconnect from host
    this._connected = false;
  }

}