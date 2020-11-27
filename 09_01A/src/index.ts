

import { Status } from './enums.js';
import {WebProject, Attachment, VideoAttachment, PdfAttachment} from './classes.js';

import {ITask, IUpperText, IWebProject, IApiProject} from './interfaces.js';

// 4.02.1
interface ISku {
    (alfa: string, nr: number): string;
}

function getTasks(): ITask[] {
    let tasks = [ 
        { id: 1, subject: 'Home page design', priority:'Normal', status: Status.Closed },
        { id: 2, subject: 'API Server deployment', priority:'High', status: Status.New },
        { id: 3, subject: 'About-us page design', priority:'Normal', status: Status.Working },
        { id: 4, subject: 'Email server setup', priority:'Normal', status: Status.New },
    ];

    return tasks;  
}
 
function GiveMeTask(tasks) {
    let total = tasks.length; 
    let nextTaskSubject = '';

    for (let task of tasks) {
        
        if (task.status === Status.New) {
            nextTaskSubject = task.subject;
            break;
        } 
    }

    console.log('Total tasks: ' + total);
    console.log('You will resolve task : ' + nextTaskSubject);
}


const allTasks = getTasks();
GiveMeTask(allTasks);


function getTaskSubjectsByStatus(statusToFilter: Status): Array<string> {

    console.log('Vom cauta task-urile cu statusul ' + Status[statusToFilter]);

    const tasks = getTasks();
    const found: string[] = [];

    for (let t of tasks) {
        if (t.status === statusToFilter) {
            found.push(t.subject);
        }
    }
    return found;
}

function printSubjects(subjects: string[]): void {
    for (let s of subjects) {
        console.log(s);
    }
}

const newTasks = getTaskSubjectsByStatus(Status.New);
printSubjects(newTasks);

// ===03===
function getTaskById(id: number): ITask {
    const tasks = getTasks();
    return tasks.filter(task => task['id'] === id)[0]; 
}

console.log(getTaskById(3));

function skuGen(alfa: string, nr: number) : string {
    return alfa.toUpperCase() + nr + '-' + (Math.random()*10000).toFixed(0);
}

// 4.02.2
//- let fnGen: (string, number) => string; 
let fnGen: ISku;

// "noImplicitAny": false, ne lasa sa mergem mai departe
// Parameter has a name but no type. Did you mean 'arg0: string'?

fnGen = skuGen;

console.log(skuGen('aa1', 5));
console.log(fnGen('bb', 7)); 

let fnGenArr: (string, number) => string;
fnGenArr = (alfa, nr) => { return alfa.toUpperCase() + nr + '-' + (Math.random()*10000).toFixed(0); };

console.log(fnGenArr('arrow', 8));


function createTask(id: number, subject: string, description?: string) {
    console.log('New task: ' + id);
    console.log('Subject: ' + subject);
    if (description) {
        console.log('Description: ' + description);
    }
}

createTask(10, 'New page design');
createTask(11, 'Coding page', 'HTML, CSS si JS code');


function tasksCount(tasks:any = getTasks()) : number {
    return tasks.length;
}

console.log(tasksCount());
console.log(tasksCount([ {id:100}, {id:101} ]));

function closeTasks(verbose: boolean, ...ids: number[]): void {
    ids.forEach(val => {
        let t = getTaskById(val);
        t.status = Status.Closed;
        if(verbose) { console.log('Closing ' + t.subject) }
    });
}

closeTasks(true, 1);
closeTasks(true, 1, 3, 4);


function closeTask(id: number): void;
function closeTask(status: string): void;
function closeTask(param: any): void {
    if (typeof param == 'number') {
        console.log('Caut task dupa id: ' + param);
    }
    if (typeof param == 'string') {
        console.log('Caut task dupa string: ' + param);
    }
}

closeTask(10);
closeTask('Task Important');


// ===04===

function taskInfo(task: ITask): void {
    console.log('Task info: ' + task.id + ' - ' + task.subject);
}

let taskExt: ITask = { 
    id: 1, 
    subject: 'Task Extins', 
    priority:'Normal', 
    status: Status.Closed,
    // observatii: 'Nu este urgent! Maine dimineata sa fie gata!'
    upperSubject: function () { 
        let up = this.subject.toUpperCase();
        return up; 
    }
}

taskInfo(taskExt); 
console.log(taskExt.upperSubject?.()); 

// 4.2 ===

let currentDay: IUpperText;

currentDay = () => {
    let now = new Date();
    let days = ['Duminica','Luni','Marti','Miercuri','Joi','Vineri','Sambata'];
    return days[now.getDay()].toUpperCase();
}

console.log(currentDay());

// ---

let wp: IWebProject = {
    id: 10,
    code: 'WSK',
    name: 'Create new web project skeleton',
    closed: false,
    frontend_url: 'http://skeleton10.com/demo',
    admin_url: 'http://skeleton10.com/admin'
}

let ap: IApiProject = {
    id: 50,
    code: 'AP50',
    name: 'Un server nou API pt dezvoltare',
    closed: false,
    ssl_enabled: false,
    base_url: 'http://dev.intern.com/api/v1'
}


let wpc: IWebProject = new WebProject(22,'DD', 'ZED App', false, 'www6');
wpc.id = 11,
wpc.code = 'WSK11',
wpc.name = 'Create new web project skeleton',
wpc.frontend_url = 'http://wpclass.com/demo',

// metoda closeProject() este implementata in clasa

console.log(wpc.closed);
wpc.closeProject?.();
console.log(wpc.closed);

// 7 ===

// let att = new Attachment(1, 'overview.doc', 'descriere proiect');
/* let att: Attachment = new Attachment(1, 'overview.doc', 'descriere proiect');

att.owner = 'Mihai';
console.log(att.owner);

att.printInfo();
 */

// let vAtt = new VideoAttachment(); 
// Expected 3 arguments, but got 0.

let vAtt = new VideoAttachment(2, 'setup_tutorial.mp4', 'Setup tutorial'); 
vAtt.printInfo();


// 3 ===
let pAtt = new PdfAttachment(3, 'audio_instructions.mp4', 'Step by step instr.', 'English'); 
pAtt.printInfo();

// clase expresie

let Archive = class extends Attachment {
    
    extension: string = 'zip';

    getExtension(): string {
        return this.extension;
    }
}

let arch1 = new Archive(15, 'arhiva_doc', '');

console.log(arch1.getExtension());
arch1.extension = 'rar';
console.log(arch1.getExtension());

