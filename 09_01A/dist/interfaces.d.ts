import { Status } from './enums';
interface Task {
    id: number;
    subject: string;
    priority: string;
    status: Status;
    description?: string;
    upperSubject?: IUpperText;
}
interface IUpperText {
    (): string;
}
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
export { Task, IUpperText, IWebProject, IApiProject };
