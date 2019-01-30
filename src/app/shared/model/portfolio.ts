import { IPortfolio } from '../interfaces/IPortfolio';
import { Galeria } from './galeria';

export class Portfolio implements IPortfolio {
    id_projeto: number;
    url_site_projeto: string;
    galerias: Galeria[];
}