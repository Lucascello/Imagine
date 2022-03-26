export const search = async (term) => {
    const URL = `https://api.artic.edu/api/v1/artworks/search?q=${term}&query[term][is_public_domain]=true&limit=36&fields=id,thumbnail,image_id,title`;

    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error(
            `Could Not Find Results For Your Search (${response.status})`
        );
    }
    return response.json();
};
