import {ITask, IUpperText, IWebProject, IApiProject} from './interfaces.js';

class WebProject implements IWebProject {
    id: number;
    code: string;   
    name: string;
    closed: boolean = false;
    priority: string = 'Normal'; 
    frontend_url: string;
    constructor(id: number, code: string, name: string, closed: boolean, frontend_url: string) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.closed = closed;
        this.frontend_url = frontend_url;
    }
    closeProject(): boolean {
        console.log('Closing project...' + this.code);
        this.closed = true;
        return true;
    }
}


// 7.1 === 7.2 
abstract class Attachment {

    name: string;
    description: string;

    private _owner!: string; // sau il initializam = ''

    static admin: string = 'Ana';

    constructor(public id: number, name: string, description: string) {
        console.log('Instanta noua Attachment...');
        this.name = name;
        this.description = description;
    }

    printInfo(): void {
        console.log(`Filename: ${this.name} - ${this.description}. 
        Storage admin ${Attachment.admin}`);
    }

    abstract getExtension(): string;

    get owner(): string {
        return this._owner.toUpperCase();
    }

    set owner(newOwner: string) {
        this._owner = newOwner
    }

}

class VideoAttachment extends Attachment {
    length: number = 0;
    
    getExtension(): string{
        return 'mp4'
    };
}


class PdfAttachment extends Attachment {
    constructor(id: number, name: string, description: string, public language: string ) {
        super(id, name, description);
    }

    printInfo() {
        super.printInfo();
        console.log(`Language: ${this.language}`)
    }

    getExtension(): string{
        return 'mp3'
    };

}


export {WebProject, Attachment, VideoAttachment, PdfAttachment}
