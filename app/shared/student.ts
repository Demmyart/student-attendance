export class Student {
    total: string;
    name:string;
    surName:string;
    lastName:string;
    group:string;
    photo: string;
    id: string;
    id_schedule: string;
    here: string;


constructor (model: {fullName?:string,total?:string, group?: string, photo?:string, here?:string, id?: string}) {
    if(model.fullName ){
        const names = model.fullName.split(' ');

        if(names.length > 0) this.lastName = names[0];
        if(names.length > 1) this.lastName = names[1];
        if(names.length > 2) this.lastName = names[2];
    }
    if(model.group) this.group=model.group;
    if(model.photo) this.photo=model.photo;
    if(model.id) this.id=model.id;
    if(model.here) this.here = model.here;
    if(model.total) this.total = model.total;
}
}
