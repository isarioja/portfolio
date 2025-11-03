import client from "./contentful";

export async function getSkills(){
    try {
        const response = await client.getEntries({
            content_type: 'skills', 
            order: 'fields.order', // Ascending
        });
        
        return response.items;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getPortfolio() {
    try {
        const response = await client.getEntries({
            content_type: 'portfolio',
        });
        return response.items[0];
    } catch (error) {
        throw new Error(error);
    }
}

export async function getProjects() {
    try {
        const response = await client.getEntries({
            content_type: 'portfolioProjects',
        });
        return response.items;
    } catch (error) {
        throw new Error(error);
    }
}