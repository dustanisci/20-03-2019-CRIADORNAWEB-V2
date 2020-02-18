import { Gallery } from './Gallery';

export interface Portfolio {
    id_projeto: number;
    url_site_projeto: string;
    galerias: Gallery[];
}
