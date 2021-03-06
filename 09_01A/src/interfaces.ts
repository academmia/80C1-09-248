import {Status} from './enums';

interface ITask {
    id: number; 
    subject: string;
    priority: string;
    status: Status; 
    // description: string;  // va da eroare in index.ts la 6.C: taskInfo(taskExt); 
    description?: string
    upperSubject?: IUpperText; //~ 4.2
}

// 4.2
interface IUpperText {
    (): string;
}

// 4.2.3 ===

interface IProject {
    id: number;
    code: string;
    name: string;
    closed: boolean;
    closeProject?: () => boolean; 
}

interface IWebProject extends IProject {
    frontend_url: string;
    admin_url?: string;
}

interface IApiProject extends IProject {
    base_url: string;
    ssl_enabled?: boolean;
}

export {ITask, IUpperText, IWebProject, IApiProject}

