import { IWebProject } from './interfaces.js';
declare class WebProject implements IWebProject {
    id: number;
    code: string;
    name: string;
    closed: boolean;
    frontend_url: string;
    constructor(id: number, code: string, name: string, closed: boolean, frontend_url: string);
    closeProject(): boolean;
}
declare abstract class Attachment {
    id: number;
    name: string;
    description: string;
    private _owner;
    static admin: string;
    constructor(id: number, name: string, description: string);
    printInfo(): void;
    abstract getExtension(): string;
    get owner(): string;
    set owner(newOwner: string);
}
declare class VideoAttachment extends Attachment {
    length: number;
    getExtension(): string;
}
declare class PdfAttachment extends Attachment {
    language: string;
    constructor(id: number, name: string, description: string, language: string);
    printInfo(): void;
    getExtension(): string;
}
export { WebProject, Attachment, VideoAttachment, PdfAttachment };
