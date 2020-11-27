var _a;
import { Status } from './enums.js';
import { Attachment, VideoAttachment, PdfAttachment } from './classes.js';
function getTasks() {
    let tasks = [
        { id: 1, subject: 'Home page design', priority: 'Normal', status: Status.Closed },
        { id: 2, subject: 'API Server deployment', priority: 'High', status: Status.New },
        { id: 3, subject: 'About-us page design', priority: 'Normal', status: Status.Working },
        { id: 4, subject: 'Email server setup', priority: 'Normal', status: Status.New },
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
function getTaskSubjectsByStatus(statusToFilter) {
    console.log('Vom cauta task-urile cu statusul ' + Status[statusToFilter]);
    const tasks = getTasks();
    const found = [];
    for (let t of tasks) {
        if (t.status === statusToFilter) {
            found.push(t.subject);
        }
    }
    return found;
}
function printSubjects(subjects) {
    for (let s of subjects) {
        console.log(s);
    }
}
const newTasks = getTaskSubjectsByStatus(Status.New);
printSubjects(newTasks);
// ===03===
function getTaskById(id) {
    const tasks = getTasks();
    return tasks.filter(task => task['id'] === id)[0];
}
console.log(getTaskById(3));
function skuGen(alfa, nr) {
    return alfa.toUpperCase() + nr + '-' + (Math.random() * 10000).toFixed(0);
}
// 4.02.2
//- let fnGen: (string, number) => string; 
let fnGen;
// "noImplicitAny": false, ne lasa sa mergem mai departe
// Parameter has a name but no type. Did you mean 'arg0: string'?
fnGen = skuGen;
console.log(skuGen('aa1', 5));
console.log(fnGen('bb', 7));
let fnGenArr;
fnGenArr = (alfa, nr) => { return alfa.toUpperCase() + nr + '-' + (Math.random() * 10000).toFixed(0); };
console.log(fnGenArr('arrow', 8));
function createTask(id, subject, description) {
    console.log('New task: ' + id);
    console.log('Subject: ' + subject);
    if (description) {
        console.log('Description: ' + description);
    }
}
createTask(10, 'New page design');
createTask(11, 'Coding page', 'HTML, CSS si JS code');
function tasksCount(tasks = getTasks()) {
    return tasks.length;
}
console.log(tasksCount());
console.log(tasksCount([{ id: 100 }, { id: 101 }]));
function closeTasks(verbose, ...ids) {
    ids.forEach(val => {
        let t = getTaskById(val);
        t.status = Status.Closed;
        if (verbose) {
            console.log('Closing ' + t.subject);
        }
    });
}
closeTasks(true, 1);
closeTasks(true, 1, 3, 4);
function closeTask(param) {
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
function taskInfo(task) {
    console.log('Task info: ' + task.id + ' - ' + task.subject);
}
let taskExt = {
    id: 1,
    subject: 'Task Extins',
    priority: 'Normal',
    status: Status.Closed,
    // observatii: 'Nu este urgent! Maine dimineata sa fie gata!'
    upperSubject: function () {
        let up = this.subject.toUpperCase();
        return up;
    }
};
taskInfo(taskExt);
console.log((_a = taskExt.upperSubject) === null || _a === void 0 ? void 0 : _a.call(taskExt));
// 4.2 ===
let currentDay;
currentDay = () => {
    let now = new Date();
    let days = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    return days[now.getDay()].toUpperCase();
};
console.log(currentDay());
// ---
let wp = {
    id: 10,
    code: 'WSK',
    name: 'Create new web project skeleton',
    closed: false,
    frontend_url: 'http://skeleton10.com/demo',
    admin_url: 'http://skeleton10.com/admin'
};
let ap = {
    id: 50,
    code: 'AP50',
    name: 'Un server nou API pt dezvoltare',
    closed: false,
    ssl_enabled: false,
    base_url: 'http://dev.intern.com/api/v1'
};
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
    constructor() {
        super(...arguments);
        this.extension = 'zip';
    }
    getExtension() {
        return this.extension;
    }
};
let arch1 = new Archive(15, 'arhiva_doc', '');
console.log(arch1.getExtension());
arch1.extension = 'rar';
console.log(arch1.getExtension());
//# sourceMappingURL=index.js.map