export const API = {
    baseUrl: 'https://api.covid19api.com'
}

export interface CovidSummary {
    Global: GlobalSummary;
}

export interface GlobalSummary {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
}

export interface CountryInfo {
    Country: string;
    Slug: string;
    ISO2: string;
}
