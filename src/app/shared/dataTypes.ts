export interface client {
  logo: string
}
export interface testimonial {
  clientName: string,
  clientPic: string,
  feedback: string
}
export interface project {
  heading: string,
  coverPic: string,
  tags: string[],
  description: string,
  website: string | 'Private Server',
  pics: string[],
  type: projectType
}
export enum projectType{
  php = 'PHP',
  angular = 'Angular',
  laravel = 'Laravel'
}
