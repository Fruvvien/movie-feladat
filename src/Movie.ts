export class Movie{
    title : string;
    duration : number;
    genres: string[];

    constructor(title: string, duration: number, genres: string[]){
        this.title = title;
        this.duration = duration;
        this.genres = genres;
    }

    toString(): string{
        let text = "";
        this.genres.forEach(element => {
           text += element + ","
        });

        return `${this.title} ${this.duration} ${text}`;
    }
}