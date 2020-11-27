class WebProject {
    constructor(id, code, name, closed, frontend_url) {
        this.closed = false;
        this.id = id;
        this.code = code;
        this.name = name;
        this.closed = closed;
        this.frontend_url = frontend_url;
    }
    closeProject() {
        console.log('Closing project...' + this.code);
        this.closed = true;
        return true;
    }
}
// 7.1 === 7.2 
class Attachment {
    constructor(id, name, description) {
        this.id = id;
        console.log('Instanta noua Attachment...');
        this.name = name;
        this.description = description;
    }
    printInfo() {
        console.log(`Filename: ${this.name} - ${this.description}. 
        Storage admin ${Attachment.admin}`);
    }
    get owner() {
        return this._owner.toUpperCase();
    }
    set owner(newOwner) {
        this._owner = newOwner;
    }
}
Attachment.admin = 'Ana';
class VideoAttachment extends Attachment {
    constructor() {
        super(...arguments);
        this.length = 0;
    }
    getExtension() {
        return 'mp4';
    }
    ;
}
class PdfAttachment extends Attachment {
    constructor(id, name, description, language) {
        super(id, name, description);
        this.language = language;
    }
    printInfo() {
        super.printInfo();
        console.log(`Language: ${this.language}`);
    }
    getExtension() {
        return 'mp3';
    }
    ;
}
export { WebProject, Attachment, VideoAttachment, PdfAttachment };
//# sourceMappingURL=classes.js.map